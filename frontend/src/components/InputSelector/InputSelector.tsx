import "./InputSelector.css";

type InputSelectorProps = {
  inputType: string;
  setInputType: React.Dispatch<React.SetStateAction<string>>;
};

function InputSelector({
  inputType,
  setInputType,
}: InputSelectorProps) {
  return (
    <div className="input-selector">
      <h2>Input Source</h2>

      <label className="radio-option">
        <input
          type="radio"
          name="input"
          value="json"
          checked={inputType === "json"}
          onChange={(e) => setInputType(e.target.value)}
        />

        <span>JSON Input</span>
      </label>

      <label className="radio-option">
        <input
          type="radio"
          name="input"
          value="mongodb"
          checked={inputType === "mongodb"}
          onChange={(e) => setInputType(e.target.value)}
        />

        <span>MongoDB Document ID</span>
      </label>
    </div>
  );
}

export default InputSelector;
