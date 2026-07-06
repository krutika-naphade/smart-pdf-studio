import "./GenerateButton.css";

type GenerateButtonProps = {
  inputType: string;
  jsonData: string;
  documentId: string;
};

function GenerateButton({
  inputType,
  jsonData,
  documentId,
}: GenerateButtonProps) {

  const isDisabled =
    inputType === "json"
      ? jsonData.trim() === ""
      : documentId.trim() === "";

  const handleGenerate = () => {
    console.log("Generating PDF...");
    console.log("Input Type:", inputType);

    if (inputType === "json") {
      console.log(jsonData);
    } else {
      console.log(documentId);
    }
  };

  return (
    <button
      className="generate-btn"
      disabled={isDisabled}
      onClick={handleGenerate}
    >
      Generate & Preview PDF
    </button>
  );
}

export default GenerateButton;
