import "./PreviewPanel.css";
import { FiFileText, FiCheckCircle } from "react-icons/fi";

type PreviewPanelProps = {
  pdfGenerated: boolean;
  documentName: string;
  inputType: string;
  generatedAt: string;
};

function PreviewPanel({
  pdfGenerated,
  documentName,
  inputType,
  generatedAt,
}: PreviewPanelProps) {
  return (
    <div className="preview-panel">
      <div className="preview-header">
        <h2>PDF Preview</h2>
      </div>

      <div className="preview-container">
        {!pdfGenerated ? (
          <div className="preview-placeholder">
            <div className="preview-icon">
              <FiFileText />
            </div>

            <h3>No Preview Available</h3>

            <p>
              Generate a PDF to view its details here.
            </p>
          </div>
        ) : (
          <div className="preview-success">
            <FiCheckCircle className="success-icon" />

            <h3>PDF Generated Successfully</h3>

            <div className="preview-details">
              <p>
                <strong>Document Name:</strong> {documentName}.pdf
              </p>

              <p>
                <strong>Status:</strong> Ready
              </p>

              <p>
                <strong>Input Type:</strong>{" "}
                {inputType.toUpperCase()}
              </p>

              <p>
                <strong>Generated At:</strong>{" "}
                {generatedAt}
              </p>

              <p className="auto-download">
                ✔ PDF downloaded automatically
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreviewPanel;
