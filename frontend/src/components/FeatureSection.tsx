import "./FeatureSection.css";

function FeatureSection() {
  return (
    <section className="features">

      <p className="section-tag">
        WHY SMART PDF STUDIO
      </p>

      <h2>
        Built for Speed, Simplicity and Scale
      </h2>

      <div className="feature-grid">

        <div className="feature-card">
          <h3>Multiple Input Sources</h3>

          <p>
            Generate PDF documents using structured JSON data or MongoDB
            document IDs through a unified workflow.
          </p>
        </div>

        <div className="feature-card">
          <h3>Instant PDF Generation</h3>

          <p>
            Create professional PDF documents in seconds with a fast,
            reliable and optimized generation engine.
          </p>
        </div>

        <div className="feature-card">
          <h3>Secure & Future Ready</h3>

          <p>
            Designed with a scalable architecture that supports future
            integrations and enterprise-level enhancements.
          </p>
        </div>

      </div>

    </section>
  );
}

export default FeatureSection;
