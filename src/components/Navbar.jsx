import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* LEFT (Mobile: Menu Icon) */}
            <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            {/* LOGO */}
            <div className="logo">
                <img src="/aurora-logo.png" alt="Logo" />
            </div>

            {/* CENTER MENU (Desktop) */}
            <ul className="nav-links">
                <li>Home</li>

                <li className="dropdown">
                    Products ▾
                    <ul className="dropdown-menu">
                        <li>Category 1</li>
                        <li>Category 2</li>
                    </ul>
                </li>

                <li>Brands</li>
                <li className="dropdown">
                    Fabrics ▾
                    <ul className="dropdown-menu">
                        <li>Category 1</li>
                        <li>Category 2</li>
                    </ul>
                </li>
                <li>About Us</li>
                <li>Contact Us</li>

            </ul>

            {/* RIGHT BUTTON */}
            <button className="enquire-btn">Enquire</button>

            {/* MOBILE DROPDOWN */}
            {menuOpen && (
                <div className="mobile-dropdown">
                    <p>Home</p>
                    <p>Products</p>
                    <p>Brands</p>
                    <p>Fabrics</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
            )}
        </nav>
    );
}

export default Navbar;