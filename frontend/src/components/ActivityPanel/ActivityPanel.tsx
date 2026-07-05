import "./ActivityPanel.css";
import { FiClock, FiCheckCircle } from "react-icons/fi";

function ActivityPanel() {
  return (
    <div className="activity-panel">

      <div className="activity-header">
        <h2>Recent Activity</h2>
      </div>

      <div className="activity-body">

        <div className="activity-item">
          <FiClock className="activity-icon" />

          <div>
            <h4>No Recent PDFs</h4>
            <p>Your generated documents will appear here.</p>
          </div>
        </div>

        <div className="status-box">
          <FiCheckCircle className="status-icon" />

          <div>
            <h4>System Ready</h4>
            <p>Waiting for PDF generation request.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ActivityPanel;
