import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      
      {/* LEFT - LOGO */}
      <div className="logo">
        <img src="/aurora-logo.png" alt="Logo" />
      </div>

      {/* CENTER - MENU */}
      <ul className="nav-links">
        <li>Home</li>

        <li 
          className="dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Products ▾

          {open && (
            <ul className="dropdown-menu">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          )}
        </li>

        <li>Brands</li>
        <li>About</li>
      </ul>

      {/* RIGHT - BUTTON */}
      <div className="right">
        <button className="enquire-btn">Enquire</button>
      </div>

    </nav>
  );
}

export default Navbar;