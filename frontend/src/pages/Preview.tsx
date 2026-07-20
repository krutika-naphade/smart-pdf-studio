import Navbar from "../components/Navbar";
import "./Preview.css";

import {
  FiCheckCircle,
  FiFileText,
  FiDownload,
  FiDatabase,
} from "react-icons/fi";

function Preview() {
  return (
    <>
      <Navbar />

      <div className="preview-page">
        <div className="preview-header">
          <h1>PDF Preview</h1>

          <p>
            Review how Smart PDF Studio processes your documents
            before and after PDF generation.
          </p>
        </div>

        <div className="preview-grid">
          <div className="preview-card">
            <FiFileText className="preview-icon" />

            <h3>Document Creation</h3>

            <p>
              Create professional PDF documents using JSON data
              or MongoDB document records.
            </p>
          </div>

          <div className="preview-card">
            <FiDatabase className="preview-icon" />

            <h3>MongoDB Integration</h3>

            <p>
              Store document information securely and generate
              PDFs directly from database records.
            </p>
          </div>

          <div className="preview-card">
            <FiDownload className="preview-icon" />

            <h3>Automatic Download</h3>

            <p>
              Generated PDFs are downloaded automatically using
              your custom document name.
            </p>
          </div>

          <div className="preview-card">
            <FiCheckCircle className="preview-icon success" />

            <h3>Generation Status</h3>

            <p>
              Monitor successful PDF generation through the
              Preview Panel and Recent Activity section.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
