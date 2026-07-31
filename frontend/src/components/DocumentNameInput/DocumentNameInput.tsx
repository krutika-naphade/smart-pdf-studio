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
        Enter a name for your PDF. This will be used as the downloaded file name.
      </p>

      <input
        type="text"
        className="document-name-input"
        placeholder="e.g. Employee_Report_July_2026"
        value={documentName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setDocumentName(event.target.value)
        }
      />
    </div>
  );
}

export default DocumentNameInput;
