import "./DocumentIdForm.css";

type DocumentIdFormProps = {
  documentId: string;
  setDocumentId: React.Dispatch<React.SetStateAction<string>>;
};

function DocumentIdForm({
  documentId,
  setDocumentId,
}: DocumentIdFormProps) {
  return (
    <div className="document-form">
      <h2>MongoDB Document ID</h2>

      <p className="document-description">
        Enter the MongoDB Document ID to generate the PDF.
      </p>

      <input
        type="text"
        className="document-input"
        placeholder="e.g. 665af49b4f87b21e0e4d91c8"
        value={documentId}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setDocumentId(event.target.value)
        }
      />
    </div>
  );
}

export default DocumentIdForm;
