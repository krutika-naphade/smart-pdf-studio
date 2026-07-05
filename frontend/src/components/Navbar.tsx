import "./Navbar.css";

import { FiSettings } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Smart PDF Studio
      </h2>

      <div className="nav-links">
        <a href="/generate">Generate PDF</a>
        <a href="/history">History</a>

        <button className="settings-btn">
          <FiSettings />
          Settings
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
