import "./ActivityPanel.css";
import {
  FiCheckCircle,
  FiClock,
  FiFileText,
} from "react-icons/fi";

type ActivityPanelProps = {
  pdfGenerated: boolean;
  documentName: string;
  inputType: string;
  generatedAt: string;
};

function ActivityPanel({
  pdfGenerated,
  documentName,
  inputType,
  generatedAt,
}: ActivityPanelProps) {
  return (
    <div className="activity-panel">
      <div className="activity-header">
        <h2>Recent Activity</h2>
      </div>

      <div className="activity-body">
        {!pdfGenerated ? (
          <>
            <div className="activity-item">
              <FiCheckCircle className="activity-icon success" />

              <div>
                <h4>Application Ready</h4>
                <p>Smart PDF Studio is ready to generate PDFs.</p>
              </div>
            </div>

            <div className="activity-item">
              <FiClock className="activity-icon" />

              <div>
                <h4>Waiting for Action</h4>
                <p>Complete the required fields and generate a PDF.</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="activity-item">
              <FiCheckCircle className="activity-icon success" />

              <div>
                <h4>PDF Generated Successfully</h4>
                <p>{generatedAt}</p>
              </div>
            </div>

            <div className="activity-item">
              <FiFileText className="activity-icon" />

              <div>
                <h4>Document Created</h4>
                <p>{documentName}.pdf</p>
              </div>
            </div>

            <div className="activity-item">
              <FiCheckCircle className="activity-icon success" />

              <div>
                <h4>Download Completed</h4>
                <p>
                  PDF downloaded successfully using{" "}
                  {inputType.toUpperCase()} input.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ActivityPanel;
