import { useState } from "react";
import "./GeneratePDF.css";

import InputSelector from "../components/InputSelector/InputSelector";
import JsonInputForm from "../components/JsonInputForm/JsonInputForm";
import DocumentIdForm from "../components/DocumentIdForm/DocumentIdForm";
import DocumentNameInput from "../components/DocumentNameInput/DocumentNameInput";
import GenerateButton from "../components/GenerateButton/GenerateButton";
import PreviewPanel from "../components/PreviewPanel/PreviewPanel";
import ActivityPanel from "../components/ActivityPanel/ActivityPanel";

function GeneratePDF() {
  const [inputType, setInputType] = useState("json");
  const [jsonData, setJsonData] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const [generatedAt, setGeneratedAt] = useState("");

  const handleGenerate = () => {
    const now = new Date();

    setPdfGenerated(true);

    setGeneratedAt(
      now.toLocaleDateString() +
        " | " +
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
    );
  };

  return (
    <div className="generate-page">
      <div className="generate-header">
        <h1>Generate PDF</h1>

        <p>
          Create professional PDF documents from JSON or MongoDB records.
        </p>
      </div>

      <div className="workspace">
        <div className="left-panel">
          <InputSelector
            inputType={inputType}
            setInputType={setInputType}
          />

          <DocumentNameInput
            documentName={documentName}
            setDocumentName={setDocumentName}
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
            documentName={documentName}
            onGenerate={handleGenerate}
          />
        </div>

        <div className="right-panel">
          <PreviewPanel
            pdfGenerated={pdfGenerated}
            documentName={documentName}
            inputType={inputType}
            generatedAt={generatedAt}
          />

          <ActivityPanel
  pdfGenerated={pdfGenerated}
  documentName={documentName}
  inputType={inputType}
  generatedAt={generatedAt}
/>

        </div>
      </div>
    </div>
  );
}

export default GeneratePDF;
