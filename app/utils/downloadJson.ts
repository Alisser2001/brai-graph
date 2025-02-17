import jsonExample from './dataExample.json';

export const downloadJson = () => {
    const jsonString = JSON.stringify(jsonExample, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "jsonExample.json";
    link.click();
    URL.revokeObjectURL(link.href);
};