import "./DocumentNameInput.css";

type DocumentNameInputProps = {
  documentName: string;
  setDocumentName: React.Dispatch<React.SetStateAction<string>>;
};

function DocumentNameInput({
  documentName,
  setDocumentName,
}: DocumentNameInputProps) {
  return (
    <div className="document-name-form">
      <h2>Document Name</h2>

      <p className="document-name-description">
        Enter the name for the generated PDF.
      </p>

      <input
        type="text"
        className="document-name-input"
        placeholder="e.g. Employee_Report"
        value={documentName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setDocumentName(event.target.value)
        }
      />
    </div>
  );
}

export default DocumentNameInput;
