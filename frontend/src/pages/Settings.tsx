import "./Settings.css";
import Navbar from "../components/Navbar";

function Settings() {
  return (
    <>
      <Navbar />

      <div className="settings-page">
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your Smart PDF Studio preferences.</p>
        </div>

        <div className="settings-container">
          <div className="setting-card">
            <h3>Theme</h3>

            <p>Current Theme: Light Mode</p>

            <button disabled>Coming Soon</button>
          </div>

          <div className="setting-card">
            <h3>Application</h3>

            <p>
              <strong>Version:</strong> 1.0.0
            </p>

            <p>
              <strong>Status:</strong> Stable Release
            </p>
          </div>

          <div className="setting-card">
            <h3>Technology Stack</h3>

            <p>
              React • TypeScript • Node.js • Express.js • MongoDB •
              Puppeteer
            </p>
          </div>

          <div className="setting-card">
            <h3>About Smart PDF Studio</h3>

            <p>
              Smart PDF Studio is a full-stack web application that
              generates professional PDF documents from JSON data
              and MongoDB records. It supports automatic PDF
              generation, custom file naming, document preview and
              real-time activity tracking through a clean and modern
              interface.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
