"use client";

import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [brandsOpen, setBrandsOpen] = useState(false);
    const [fabricsOpen, setFabricsOpen] = useState(false);
    const [sammaanOpen, setSammaanOpen] = useState(false);
    const [nemssisOpen, setNemssisOpen] = useState(false);

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
                    <span style={{ width: "24px", height: "2px", background: "#000" }} />
                    <span style={{ width: "24px", height: "2px", background: "#000" }} />
                    <span style={{ width: "24px", height: "2px", background: "#000" }} />
                </div>

                {/* LOGO */}
                <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                    <img
                        src="/aurora-logo.png"
                        alt="logo"
                        style={{ width: "180px", objectFit: "contain" }}
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
                                fontFamily: "Poppins, sans-serif",
                                 fontSize: "17px",
                                fontWeight: 500,
                                  letterSpacing: "0.5px",
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
                            href="/product-new"
                            style={{
                                textDecoration: "none",
                                color: "#131212",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "17px",
                                fontWeight: 500,
                                letterSpacing: "0.5px",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                            }}
                        >
                            Products
                            <TiArrowSortedDown style={{ fontSize: "16px" }} />
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
                                {[
                                    { label: "Suiting", href: "/products/suiting" },
                                    { label: "Shirting", href: "/products/shirting" },
                                    { label: "Uniform", href: "/products/uniform" },
                                    { label: "Ethnic", href: "/products/ethnic-fabric" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            style={{
                                                display: "block",
                                                padding: "14px 26px",
                                                textDecoration: "none",
                                                color: "#111",
                                                fontSize: "13px",
                                                fontWeight: 500,
                                                letterSpacing: "0.5px",
                                                fontFamily: "'Roboto', sans-serif",
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
                                            {item.label}
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
                        onMouseLeave={() => {
                            setBrandsOpen(false);
                            setSammaanOpen(false);
                            setNemssisOpen(false);
                        }}
                    >
                        <a
                            href="/products/donear"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontFamily: "'Poppins', sans-serif",
                                 fontSize: "17px",
                                fontWeight: 500,
                                  letterSpacing: "0.5px",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                            }}
                        >
                            Brands
                            <TiArrowSortedDown style={{ fontSize: "16px" }} />
                        </a>

                        {brandsOpen && (
                            <ul
                                style={{
                                    position: "absolute",
                                    top: "95px",
                                    left: "-10px",
                                    width: "190px",
                                    background: "#fff",
                                    listStyle: "none",
                                    padding: "0",
                                    margin: 0,
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                }}
                            >
                                {/* Simple brand items */}
                                {[
                                    { label: "Donear", href: "/products/donear" },
                                    { label: "Klopman", href: "/products/klopman" },
                                    { label: "Oxford", href: "/products/oxford" },
                                    { label: "Reid & Taylor", href: "/products/reid-and-taylor" },
                                    { label: "John Cavendish", href: "/products/john-cavendish-fabrics" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            style={{
                                                display: "block",
                                                padding: "11px 20px",
                                                textDecoration: "none",
                                                color: "#111",
                                                 fontFamily: "'Poppins', sans-serif",
                                                fontSize: "13px",
                                                fontWeight: 500,
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
                                            {item.label}
                                        </a>
                                    </li>
                                ))}

                                {/* SAMMAAN — with right flyout */}
                                <li
                                    style={{ position: "relative" }}
                                    onMouseEnter={() => {
                                        setSammaanOpen(true);
                                        setNemssisOpen(false);
                                    }}
                                    onMouseLeave={() => setSammaanOpen(false)}
                                >
                                    <a
                                        href="/products/sammaan-fabrics"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "11px 20px",
                                            textDecoration: "none",
                                            color: sammaanOpen ? "#fff" : "#111",
                                             fontFamily: "'Poppins', sans-serif",
                                            fontSize: "13px",
                                            fontWeight: 500,
                                            background: sammaanOpen ? "#122a4b" : "transparent",
                                            transition: "0.3s",
                                        }}
                                    >
                                        Sammaan
                                        <span style={{ fontSize: "14px" }}>▶</span>
                                    </a>

                                    {sammaanOpen && (
                                        <ul
                                            style={{
                                                position: "absolute",
                                                top: "0",
                                                left: "190px",
                                                width: "220px",
                                                background: "#fff",
                                                listStyle: "none",
                                                padding: "0",
                                                margin: 0,
                                                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                            }}
                                        >
                                            <li>
                                                <a
                                                    href="/products/rasm-ethnics-by-sammaan"
                                                    style={{
                                                        display: "block",
                                                        padding: "11px 20px",
                                                        textDecoration: "none",
                                                        color: "#111",
                                                         fontFamily: "'Poppins', sans-serif",
                                                        fontSize: "13px",
                                                        fontWeight: 500,
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
                                                    Rasm Ethnics by Sammaan
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                {/* GEORGIA GULLINI */}
                                <li>
                                    <a
                                        href="/products/georgia-gullini-fabrics"
                                        style={{
                                            display: "block",
                                            padding: "11px 20px",
                                            textDecoration: "none",
                                            color: "#111",
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "13px",
                                            fontWeight: 500,
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
                                        Georgia Gullini
                                    </a>
                                </li>

                                {/* RELIANCE */}
                                <li>
                                    <a
                                        href="/products/reliance-fabrics"
                                        style={{
                                            display: "block",
                                            padding: "11px 20px",
                                            textDecoration: "none",
                                            color: "#111",
                                             fontFamily: "'Poppins', sans-serif",
                                            fontSize: "13px",
                                            fontWeight: 500,
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
                                        Reliance
                                    </a>
                                </li>

                                {/* NEMSSIS — with right flyout */}
                                <li
                                    style={{ position: "relative" }}
                                    onMouseEnter={() => {
                                        setNemssisOpen(true);
                                        setSammaanOpen(false);
                                    }}
                                    onMouseLeave={() => setNemssisOpen(false)}
                                >
                                    <a
                                        href="/products/nemssis-fabrics"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "11px 20px",
                                            textDecoration: "none",
                                            color: nemssisOpen ? "#fff" : "#111",
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "13px",
                                            fontWeight: 500,
                                            background: nemssisOpen ? "#122a4b" : "transparent",
                                            transition: "0.3s",
                                        }}
                                    >
                                        Nemssis
                                        <span style={{ fontSize: "14px" }}>▶</span>
                                    </a>

                                    {nemssisOpen && (
                                        <ul
                                            style={{
                                                position: "absolute",
                                                top: "0",
                                                left: "190px",
                                                width: "220px",
                                                background: "#fff",
                                                listStyle: "none",
                                                padding: "0",
                                                margin: 0,
                                                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                            }}
                                        >
                                            {[
                                                { label: "Shiddat by Nemssis", href: "/products/shiddat-by-nemssis" },
                                                { label: "Sanskriti by Nemssis", href: "/products/sanskriti-by-nemssis" },
                                                { label: "Raag Resham by Nemssis", href: "/products/raag-resham-by-nemssis" },
                                                { label: "Zarista by Nemssis", href: "/products/zarista-by-nemssis" },
                                                { label: "Nawabi by Nemssis", href: "/products/nawabi-by-nemssis" },
                                            ].map((sub) => (
                                                <li key={sub.label}>
                                                    <a
                                                        href={sub.href}
                                                        style={{
                                                            display: "block",
                                                            padding: "11px 20px",
                                                            textDecoration: "none",
                                                            color: "#111",
                                                            fontFamily: "'Poppins', sans-serif",
                                                            fontSize: "13px",
                                                            fontWeight: 500,
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
                                                        {sub.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>

                                {/* SPAADAA */}
                                <li>
                                    <a
                                        href="/products/spaadaa-fabrics"
                                        style={{
                                            display: "block",
                                            padding: "11px 20px",
                                            textDecoration: "none",
                                            color: "#111",
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "13px",
                                            transition: "0.3s",
                                            fontWeight: 500,
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
                                        Spaadaa
                                    </a>
                                </li>
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
                            href="/cotton-fabric"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontFamily: "'Poppins', sans-serif",
                                 fontSize: "16px",
                                fontWeight: 500,
                                  letterSpacing: "0.5px",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                            }}
                        >
                            Fabrics
                            <TiArrowSortedDown style={{ fontSize: "16px" }} />
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
                                    { label: "Cotton Fabric", href: "/cotton-fabric" },
                                    { label: "Wool Fabrics", href: "/wool-fabric" },
                                    { label: "Polywool Fabric", href: "/poly-wool-fabric" },
                                    { label: "Linen", href: "/linen-fabrics" },
                                    { label: "Polycotton", href: "/poly-cotton-fabric" },
                                    { label: "Denim", href: "/denim" },
                                    { label: "Poly Viscose", href: "/poly-viscose" },
                                    { label: "Tencel Blend", href: "/tencel-fabric" },
                                    { label: "PV Lycra", href: "/pv-lycra" },
                                    { label: "Poly Wool Lycra", href: "/poly-wool-lycra" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            style={{
                                                display: "block",
                                                padding: "11px 20px",
                                                textDecoration: "none",
                                                color: "#111",
                                                 fontFamily: "'Poppins', sans-serif",
                                                fontSize: "13px",
                                                fontWeight: 500,
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
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* ABOUT */}
                    <li>
                        <a
                            href="/about-us"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                 fontFamily: "'Poppins', sans-serif",
                                 fontSize: "17px",
                                fontWeight: 500,
                                  letterSpacing: "0.5px",
                            }}
                        >
                            About Us
                        </a>
                    </li>

                    {/* CONTACT */}
                    <li>
                        <a
                            href="/contact-us"
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "17px",
                                fontWeight: 500,
                                letterSpacing: "0.5px",
                            }}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>

                {/* ENQUIRE BUTTON */}
                <a
                    href="/contact-us"
                    style={{
                        background: "#012650",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "10px 28px",
                        borderRadius: "4px",
                        fontSize: "15px",
                        fontWeight: 400,
                        fontFamily: "'Poppins', sans-serif",
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
                        { label: "Home", href: "/" },
                        { label: "Products", href: "/product-new" },
                        { label: "Brands", href: "/products/donear" },
                        { label: "Fabrics", href: "/cotton-fabric" },
                        { label: "About Us", href: "/about-us" },
                        { label: "Contact Us", href: "/contact-us" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            style={{
                                display: "block",
                                padding: "14px 0",
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "18px",
                                borderBottom: "1px solid #eee",
                            }}
                        >
                            {item.label}
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
          nav a[href="/contact-us"] {
            padding: 10px 18px !important;
            font-size: 14px !important;
          }
        }
      `}</style>
        </>
    );
}