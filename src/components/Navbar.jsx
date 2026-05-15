import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            {/* MOBILE MENU ICON */}
            <div
                className="mobile-menu"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                    color: menuOpen ? "purple" : "black",
                    transition: "0.3s ease",
                }}
            >
                ☰
            </div>

            {/* LOGO */}
            <div className="logo">
                <img
                    src="/aurora-logo.png"
                    alt="Logo"
                    style={{
                        height: "50px",
                        objectFit: "contain",
                    }}
                />
            </div>

            {/* DESKTOP MENU */}
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

            {/* ENQUIRE BUTTON */}
            <button
                className="enquire-btn"
                style={{
                    background: menuOpen ? "#6b21a8" : "black",
                    transform: menuOpen ? "scale(1.05)" : "scale(1)",
                    transition: "0.3s ease",
                }}
            >
                Enquire
            </button>

            {/* MOBILE DROPDOWN */}
            {menuOpen && (
                <div
                    className="mobile-dropdown"
                    style={{
                        animation: "fadeIn 0.3s ease",
                    }}
                >
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