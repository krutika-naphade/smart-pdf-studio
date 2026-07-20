import "./FeatureSection.css";

function FeatureSection() {
  return (
    <section className="features">
      <p className="section-tag">
        WHY SMART PDF STUDIO
      </p>

      <h2>
        Everything You Need to Generate Professional PDFs
      </h2>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>Flexible Input Options</h3>

          <p>
            Generate PDF documents using either structured JSON data
            or existing MongoDB document IDs through a simple and
            user-friendly interface.
          </p>
        </div>

        <div className="feature-card">
          <h3>Automated PDF Workflow</h3>

          <p>
            Store document data in MongoDB, generate PDFs instantly,
            preview generation status and automatically download the
            final document with a custom filename.
          </p>
        </div>

        <div className="feature-card">
          <h3>Modern Full-Stack Architecture</h3>

          <p>
            Built using React, TypeScript, Node.js, Express.js,
            MongoDB and Puppeteer to deliver a fast, scalable and
            reliable PDF generation platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
