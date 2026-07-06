import "./JsonInputForm.css";

type JsonInputFormProps = {
  jsonData: string;
  setJsonData: React.Dispatch<React.SetStateAction<string>>;
};

function JsonInputForm({
  jsonData,
  setJsonData,
}: JsonInputFormProps) {
  return (
    <div className="json-form">
      <h2>JSON Data</h2>

      <p className="input-description">
        Paste your JSON data below to generate a PDF document.
      </p>

      <textarea
        className="json-textarea"
        value={jsonData}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setJsonData(event.target.value)
        }
        placeholder={`{
  "name": "John Doe",
  "email": "john@example.com",
  "department": "Engineering"
}`}
      />
    </div>
  );
}

export default JsonInputForm;
