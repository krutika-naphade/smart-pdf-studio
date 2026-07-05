import "./PreviewPanel.css";
import { FiFileText } from "react-icons/fi";
function PreviewPanel() {
  return (
    <div className="preview-panel">

      <div className="preview-header">
        <h2>PDF Preview</h2>
      </div>

      <div className="preview-container">

        <div className="preview-placeholder">

          <div className="preview-icon">
            <FiFileText />
                
</div>

          <h3>No Preview Available</h3>

          <p>
            Generate a PDF to preview it here before downloading.
          </p>

        </div>

      </div>

    </div>
  );
}

export default PreviewPanel;
