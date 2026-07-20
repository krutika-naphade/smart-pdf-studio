import "./JsonInputForm.css";

type JsonInputFormProps = {
  jsonData: string;
  setJsonData: React.Dispatch<React.SetStateAction<string>>;
};

function JsonInputForm({
  jsonData,
  setJsonData,
}: JsonInputFormProps) {
  const sampleJSON = `{
  "customerName": "Krutika Naphade",
  "email": "krutika@example.com",
  "phone": "9876543210",
  "address": "Nagpur, Maharashtra",
  "invoiceNumber": "INV-1001",
  "amount": 2500,
  "dueDate": "2026-07-20",
  "status": "Pending"
}`;

  return (
    <div className="json-form">
      <h2>JSON Data</h2>

      <p className="input-description">
        Paste your JSON data below to generate a PDF document.
      </p>

      <div className="json-actions">
        <button
          type="button"
          className="sample-btn"
          onClick={() => setJsonData(sampleJSON)}
        >
          Fill Sample Data
        </button>

        <button
          type="button"
          className="clear-btn"
          onClick={() => setJsonData("")}
        >
          Clear
        </button>
      </div>

      <textarea
        className="json-textarea"
        value={jsonData}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setJsonData(event.target.value)
        }
        placeholder="Paste your JSON here..."
      />
    </div>
  );
}

export default JsonInputForm;
