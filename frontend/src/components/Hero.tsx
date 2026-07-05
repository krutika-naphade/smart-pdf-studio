import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          DOCUMENT AUTOMATION PLATFORM
        </p>

        <h1>
          Generate Professional
          <br />
          PDF Documents
        </h1>

        <p className="hero-description">
          Convert JSON data or MongoDB records into beautifully
          formatted PDF documents through a fast, secure and
          reliable workflow.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Generate PDF
          </button>

          <button className="secondary-btn">
            View Demo
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <div className="pdf-preview">

            <div className="pdf-header">
              PDF Preview
            </div>

            <div className="pdf-body">

              <div className="line"></div>
              <div className="line short"></div>
              <div className="line"></div>
              <div className="line medium"></div>
              <div className="line"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
