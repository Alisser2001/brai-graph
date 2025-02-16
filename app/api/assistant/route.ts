import { AssistantResponse } from 'ai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});
export async function POST(req: Request) {
  const input: {
    threadId: string | null;
    message: string;
    assistant: 'clown' | 'philosopher';
  } = await req.json();
  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: input.message,
  });
  const assistantKey =
    input.assistant === 'clown'
      ? process.env.OPENAI_ASSISTANT_CLOWN_KEY
      : process.env.OPENAI_ASSISTANT_PHILOSOPHER_KEY;
  if (!assistantKey) {
    throw new Error(`Assistant key for ${input.assistant} is not set`);
  }
  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream }) => {
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id: assistantKey,
      });
      await forwardStream(runStream);
    },
  );
}