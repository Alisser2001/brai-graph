import { Chatbot } from "./sections/chatbot";
import { GraphContainer } from "./sections/graphContainer";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <GraphContainer/>
      <Chatbot/>
    </main>
  );
}
