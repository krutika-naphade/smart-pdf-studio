import { useState } from "react";
import "./GenerateButton.css";

type GenerateButtonProps = {
  inputType: string;
  documentName: string;
  jsonData: string;
  documentId: string;
  onGenerate: () => void;
};

function GenerateButton({
  inputType,
  documentName,
  jsonData,
  documentId,
  onGenerate,
}: GenerateButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const isDisabled =
    documentName.trim() === "" ||
    (inputType === "json"
      ? jsonData.trim() === ""
      : documentId.trim() === "");

  const downloadPDF = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to download PDF.");
    }

    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${documentName}.pdf`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  };

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);

      if (inputType === "json") {
        const document = JSON.parse(jsonData);

        const response = await fetch(
          "http://localhost:5000/api/pdf/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(document),
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message);
        }

        const id = result.data._id;

        await downloadPDF(
          `http://localhost:5000/api/pdf/generate/${id}`
        );

        onGenerate();
      } else {
        await downloadPDF(
          `http://localhost:5000/api/pdf/generate/${documentId}`
        );

        onGenerate();
      }
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to generate PDF."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      className="generate-btn"
      disabled={isDisabled || isGenerating}
      onClick={handleGenerate}
    >
      {isGenerating ? "Generating..." : "Generate & Preview PDF"}
    </button>
  );
}

export default GenerateButton;
