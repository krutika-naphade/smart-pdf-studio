import "./HowItWorksSection.css";
import { FaArrowRight } from "react-icons/fa";
function HowItWorksSection() {
  return (
    <section className="workflow">

      <p className="section-tag">WORKFLOW</p>

      <h2>Generate PDFs in Four Simple Steps</h2>

      <div className="workflow-container">

        <div className="workflow-card">
          <span className="step-number">01</span>

          <h3>Select Input</h3>

          <p>
            Choose whether you want to generate a PDF using JSON data or a
            MongoDB Document ID.
          </p>
        </div>

        <div className="workflow-arrow">
          <FaArrowRight />
        </div>

        <div className="workflow-card">
          <span className="step-number">02</span>

          <h3>Generate PDF</h3>

          <p>
            Our service processes the provided data and creates a
            professionally formatted PDF.
          </p>
        </div>

        <div className="workflow-arrow">
          →
        </div>

        <div className="workflow-card">
          <span className="step-number">03</span>

          <h3>Preview</h3>

          <p>
            Review the generated PDF instantly before downloading or sharing
            it.
          </p>
        </div>

        <div className="workflow-arrow">
          →
        </div>

        <div className="workflow-card">
          <span className="step-number">04</span>

          <h3>Download</h3>

          <p>
            Download the final PDF or integrate it directly into your
            application workflow.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorksSection;
