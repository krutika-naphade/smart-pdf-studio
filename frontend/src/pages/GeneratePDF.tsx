import { useState } from "react";
import "./GeneratePDF.css";

import DocumentIdForm from "../components/DocumentIdForm/DocumentIdForm";
import InputSelector from "../components/InputSelector/InputSelector";
import JsonInputForm from "../components/JsonInputForm/JsonInputForm";
import GenerateButton from "../components/GenerateButton/GenerateButton";
import PreviewPanel from "../components/PreviewPanel/PreviewPanel";
import ActivityPanel from "../components/ActivityPanel/ActivityPanel";

function GeneratePDF() {
  const [inputType, setInputType] = useState("json");
  const [jsonData, setJsonData] = useState("");

  const [documentId, setDocumentId] = useState("");

  return (
    <div className="generate-page">
      <div className="generate-header">
        <h1>Generate PDF</h1>
        <p>Create professional PDF documents from JSON or MongoDB records.</p>
      </div>

      <div className="workspace">
        <div className="left-panel">

          <InputSelector
            inputType={inputType}
            setInputType={setInputType}
          />

          {inputType === "json" ? (
            <JsonInputForm
  jsonData={jsonData}
  setJsonData={setJsonData}
/>

          ) : (
            <DocumentIdForm
  documentId={documentId}
  setDocumentId={setDocumentId}
/>
          )}

          <GenerateButton
  inputType={inputType}
  jsonData={jsonData}
  documentId={documentId}
/>

        </div>

        <div className="right-panel">
          <PreviewPanel />
          <ActivityPanel />
        </div>
      </div>
    </div>
  );
}

export default GeneratePDF;
