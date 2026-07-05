import "./JsonInputForm.css";

function JsonInputForm() {
  return (
    <div className="json-form">

      <h2>JSON Data</h2>

      <p className="input-description">
        Paste your JSON data below to generate a PDF document.
      </p>

      <textarea
        className="json-textarea"
        placeholder={`{
  "name": "John Doe",
  "email": "john@example.com",
  "department": "Engineering"
}`}
      ></textarea>

    </div>
  );
}

export default JsonInputForm;
