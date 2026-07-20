import "./Navbar.css";

import { FiSettings } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Smart PDF Studio</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/generate">Generate PDF</Link>

        <Link to="/preview">Preview</Link>

        <button
          className="settings-btn"
          onClick={handleSettingsClick}
        >
          <FiSettings />
          <span>Settings</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
