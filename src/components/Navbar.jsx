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
                <a href="/">
                    <img
                        src="/aurora-logo.png"
                        alt="Logo"
                        style={{
                            height: "50px",
                            objectFit: "contain",
                            cursor: "pointer",
                        }}
                    />
                </a>
            </div>

            {/* DESKTOP MENU */}
            <ul className="nav-links">

                <li>
                    <a href="/">Home</a>
                </li>

                <li className="dropdown">
                    <a href="/products">Products ▾</a>

                    <ul className="dropdown-menu">
                        <li>
                            <a href="/products/category1">Category 1</a>
                        </li>

                        <li>
                            <a href="/products/category2">Category 2</a>
                        </li>
                    </ul>
                </li>

                <li className="dropdown">
                    <a href="/brands">Brands ▾</a>

                    <ul className="dropdown-menu">
                        <li>
                            <a href="/brands/category1">Category 1</a>
                        </li>

                        <li>
                            <a href="/brands/category2">Category 2</a>
                        </li>
                    </ul>
                </li>

                <li className="dropdown">
                    <a href="/fabrics">Fabrics ▾</a>

                    <ul className="dropdown-menu">
                        <li>
                            <a href="/fabrics/category1">Category 1</a>
                        </li>

                        <li>
                            <a href="/fabrics/category2">Category 2</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="/about">About Us</a>
                </li>

                <li>
                    <a href="/contact">Contact Us</a>
                </li>

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