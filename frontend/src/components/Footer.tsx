import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Smart PDF Studio</h3>

        <p>
          Generate professional PDF documents from JSON data and
          MongoDB records with a modern full-stack workflow.
        </p>

        <div className="footer-info">
          <span>Version 1.0.0</span>

          <span>React • TypeScript • Node.js • MongoDB</span>
        </div>

        <p className="copyright">
          © 2026 Smart PDF Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
