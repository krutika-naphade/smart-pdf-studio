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
            Choose between JSON data or a MongoDB Document ID to
            begin the PDF generation process.
          </p>
        </div>

        <div className="workflow-arrow">
          <FaArrowRight />
        </div>

        <div className="workflow-card">
          <span className="step-number">02</span>

          <h3>Generate PDF</h3>

          <p>
            Process the selected data, create the PDF and securely
            store document information in MongoDB.
          </p>
        </div>

        <div className="workflow-arrow">
          <FaArrowRight />
        </div>

        <div className="workflow-card">
          <span className="step-number">03</span>

          <h3>Preview & Verify</h3>

          <p>
            Verify the generation status, document details and
            activity logs before downloading.
          </p>
        </div>

        <div className="workflow-arrow">
          <FaArrowRight />
        </div>

        <div className="workflow-card">
          <span className="step-number">04</span>

          <h3>Automatic Download</h3>

          <p>
            The generated PDF is downloaded automatically using the
            custom document name provided by the user.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
