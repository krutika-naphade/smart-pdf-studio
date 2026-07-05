import "./DocumentIdForm.css";

function DocumentIdForm() {
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
      />

    </div>
  );
}

export default DocumentIdForm;
