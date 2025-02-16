export const extractJsonFromMessage = (message: string): string | null => {
    const startIndex = message.indexOf("{");
    const endIndex = message.lastIndexOf("}");
    if (startIndex === -1 || endIndex === -1 || startIndex > endIndex) {
        return null;
    }
    for (let i = startIndex; i <= endIndex; i++) {
        for (let j = endIndex; j > i; j--) {
            const possibleJson = message.slice(i, j + 1);
            try {
                JSON.parse(possibleJson);
                return possibleJson; 
            } catch {
                continue; 
            }
        }
    }
    return null;
};