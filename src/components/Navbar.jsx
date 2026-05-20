"use client";

import React, { useState } from "react";

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [brandsOpen, setBrandsOpen] = useState(false);
    const [fabricsOpen, setFabricsOpen] = useState(false);

    return (
        <>
            <nav
                style={{
                    width: "100%",
                    height: "95px",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 5%",
                    position: "sticky",
                    top: 0,
                    zIndex: 9999,
                    boxSizing: "border-box",
                }}
            >
                {/* MOBILE MENU ICON */}
                <div
                    onClick={() => setMobileMenu(!mobileMenu)}
                    style={{
                        display: "none",
                        flexDirection: "column",
                        gap: "5px",
                        cursor: "pointer",
                    }}
                    className="mobile-menu-icon"
                >
                    <span
                        style={{
                            width: "24px",
                            height: "2px",
                            background: "#000",
                        }}
                    />
                    <span
                        style={{
                            width: "24px",
                            height: "2px",
                            background: "#000",
                        }}
                    />
                    <span
                        style={{
                            width: "24px",
                            height: "2px",
                            background: "#000",
                        }}
                    />
                </div>

                {/* LOGO */}
                <a
                    href="/"
                    style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/aurora-logo.png"
                        alt="logo"
                        style={{
                            width: "180px",
                            objectFit: "contain",
                        }}
                    />
                </a>

                {/* DESKTOP MENU */}
                <ul
                    className="desktop-menu"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "42px",
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {/* HOME */}
                    <li>
                        <a
                            href="/"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "20px",
                                fontWeight: 600,
                            }}
                        >
                            Home
                        </a>
                    </li>

                    {/* PRODUCTS */}
                    <li
                        style={{
                            position: "relative",
                            height: "95px",
                            display: "flex",
                            alignItems: "center",
                        }}
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                    >
                        <a
                            href="/products"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "20px",
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                            }}
                        >
                            Products
                            <span style={{ fontSize: "13px" }}>▼</span>
                        </a>

                        {productsOpen && (
                            <ul
                                style={{
                                    position: "absolute",
                                    top: "95px",
                                    left: "-10px",
                                    width: "135px",
                                    background: "#fff",
                                    listStyle: "none",
                                    padding: "0",
                                    margin: 0,
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                    overflow: "hidden",
                                }}
                            >
                                {["Suiting", "Shirting", "Uniform", "Ethnic"].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={
                                                item === "Suiting"
                                                    ? "/products/suiting"
                                                    : item === "Shirting"
                                                        ? "/products/shirting"
                                                        : item === "Uniform"
                                                            ? "/products/uniform"
                                                            : "/products/ethnic"
                                            }
                                            style={{
                                                display: "block",
                                                padding: "14px 26px",
                                                textDecoration: "none",
                                                color: "#111",
                                                fontSize: "16px",
                                                transition: "0.3s",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.background = "#122a4b";
                                                e.target.style.color = "#fff";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.background = "transparent";
                                                e.target.style.color = "#111";
                                            }}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* BRANDS */}
                    <li
                        style={{
                            position: "relative",
                            height: "95px",
                            display: "flex",
                            alignItems: "center",
                        }}
                        onMouseEnter={() => setBrandsOpen(true)}
                        onMouseLeave={() => setBrandsOpen(false)}
                    >
                        <a
                            href="/brands"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "20px",
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                            }}
                        >
                            Brands
                            <span style={{ fontSize: "13px" }}>▼</span>
                        </a>

                        {brandsOpen && (
                            <ul
                                style={{
                                    position: "absolute",
                                    top: "95px",
                                    left: "-10px",
                                    width: "220px",
                                    background: "#fff",
                                    listStyle: "none",
                                    padding: "0",
                                    margin: 0,
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                    overflow: "hidden",
                                }}
                            >
                                {[
                                    "Donear",
                                    "Klopman",
                                    "Oxford",
                                    "Reid & Taylor",
                                    "John Cavendish",
                                    "Sammaan",
                                    "Geogia Gullini",
                                    "Reliance",
                                    "Nemssis",
                                    "Spaadaa",
                                ].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={
                                                item === "Donear"
                                                    ? "/brands/donear"
                                                    : item === "Klopman"
                                                        ? "/brands/klopman"
                                                        : item === "Oxford"
                                                            ? "/brands/oxford"
                                                            : item === "Reid & Taylor"
                                                                ? "/brands/reid-and-taylor"
                                                                : item === "John Cavendish"
                                                                    ? "/brands/john"
                                                                    : item === "Sammaan"
                                                                        ? "/brands/sammaan"
                                                                        : item === "Geogia Gullini"
                                                                            ? "/brands/gullini"
                                                                            : item === "Reliance"
                                                                                ? "/brands/reliance"
                                                                                : item === "Nemssis"
                                                                                    ? "/brands/nemssis"
                                                                                    : "/brands/spaadaa"
                                            }
                                            style={{
                                                display: "block",
                                                padding: "11px 20px",
                                                textDecoration: "none",
                                                color: "#111",
                                                fontSize: "14px",
                                                transition: "0.3s",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.background = "#122a4b";
                                                e.target.style.color = "#fff";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.background = "transparent";
                                                e.target.style.color = "#111";
                                            }}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* FABRICS */}
                    <li
                        style={{
                            position: "relative",
                            height: "95px",
                            display: "flex",
                            alignItems: "center",
                        }}
                        onMouseEnter={() => setFabricsOpen(true)}
                        onMouseLeave={() => setFabricsOpen(false)}
                    >
                        <a
                            href="/fabrics"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "20px",
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                            }}
                        >
                            Fabrics
                            <span style={{ fontSize: "13px" }}>▼</span>
                        </a>

                        {fabricsOpen && (
                            <ul
                                style={{
                                    position: "absolute",
                                    top: "95px",
                                    left: "-10px",
                                    width: "220px",
                                    background: "#fff",
                                    listStyle: "none",
                                    padding: "0",
                                    margin: 0,
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                    overflow: "hidden",
                                }}
                            >
                                {[
                                    "Cotton Fabric",
                                    "Wool Fabrics",
                                    "Polywool Fabric",
                                    "Linen",
                                    "Polycotton",
                                    "Denim",
                                    "Poly Viscose",
                                    "Tencel Blend",
                                    "PV Lycra",
                                    "Poly Wool Lycra",
                                ].map((item) => (
                                    <li key={item}>
                                        <a
                                            href="/"
                                            style={{
                                                display: "block",
                                                padding: "11px 20px",
                                                textDecoration: "none",
                                                color: "#111",
                                                fontSize: "14px",
                                                transition: "0.3s",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.background = "#122a4b";
                                                e.target.style.color = "#fff";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.background = "transparent";
                                                e.target.style.color = "#111";
                                            }}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* ABOUT */}
                    <li>
                        <a
                            href="/about"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "20px",
                                fontWeight: 600,
                            }}
                        >
                            About Us
                        </a>
                    </li>

                    {/* CONTACT */}
                    <li>
                        <a
                            href="/contact"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "20px",
                                fontWeight: 600,
                            }}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>

                {/* ENQUIRE BUTTON */}
                <a
                    href="/contact"
                    style={{
                        background: "#122a4b",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "10px 28px",
                        borderRadius: "4px",
                        fontSize: "18px",
                        fontWeight: 500,
                    }}
                >
                    Enquire Now
                </a>
            </nav>

            {/* MOBILE MENU */}
            {mobileMenu && (
                <div
                    style={{
                        width: "100%",
                        background: "#fff",
                        padding: "20px 5%",
                        boxSizing: "border-box",
                    }}
                >
                    {[
                        "Home",
                        "Products",
                        "Brands",
                        "Fabrics",
                        "About Us",
                        "Contact Us",
                    ].map((item) => (
                        <a
                            key={item}
                            href="/"
                            style={{
                                display: "block",
                                padding: "14px 0",
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "18px",
                                borderBottom: "1px solid #eee",
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}

            {/* RESPONSIVE */}
            <style jsx>{`
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-menu-icon {
            display: flex !important;
          }

          nav {
            height: 80px !important;
          }

          nav img {
            width: 130px !important;
          }

          nav a[href="/contact"] {
            padding: 10px 18px !important;
            font-size: 14px !important;
          }
        }
      `}</style>
        </>
    );
}