import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function SaudiArabiaPage() {
    const [openFaq, setOpenFaq] = useState(null);
    const [hoveredFaq, setHoveredFaq] = useState(null);

    const faqs = [
        {
            question: "Do you supply men's fabrics to Saudi Arabia from Dubai?",
            answer: "Yes, Aurora Textiles exports men's fabrics from Dubai, UAE to Saudi Arabia with reliable logistics support.",
        },
        {
            question: "What types of men's fabrics do you supply?",
            answer: "We supply cotton, poly cotton, poly viscose, poly wool, suiting fabrics, and fire retardant fabrics.",
        },
        {
            question: "Can I order fabric from Saudi Arabia?",
            answer: "Yes, buyers in Saudi Arabia can explore and purchase fabrics online by contacting our team through the website.",
        },
        {
            question: "Who can source fabrics from Aurora Textiles?",
            answer: "We supply to tailors, retailers, wholesalers, uniform suppliers, designers, and garment manufacturers.",
        },
        {
            question: "Do you offer wholesale and bulk fabric supply?",
            answer: "Yes, we specialize in wholesale fabric and bulk textile supply for businesses across Saudi Arabia.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>
            <Helmet>
                <title>Fabric Suppliers and Wholesaler in Saudi Arabia - Aurora Textiles</title>
                <meta
                    name="description"
                    content="Aurora Textiles are one of the leading fabric suppliers and wholesalers in Saudi Arabia, offering Cotton, poly viscose, poly wool, and other types of fabrics."
                />
            </Helmet>

            <Navbar />

            {/* HERO BANNER */}
            <section
                style={{
                    width: "100%",
                    height: "360px",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "60px",
                }}
            >
                <img
                    src="/about-banner.jpg"
                    alt="Fabric Suppliers in Saudi Arabia"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        width: "100%",
                        padding: "0 20px",
                        boxSizing: "border-box",
                    }}
                >
                    <h1
                        style={{
                            color: "#fff",
                            fontSize: window.innerWidth < 768 ? "26px" : "58px",
                            fontWeight: "600",
                            margin: 0,
                            lineHeight: "1.1",
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        Saudi Arabia
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Text LEFT, Image RIGHT (SS1) */}
            {/* "Fabric Suppliers in Saudi Arabia" */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "50px",
                }}
            >
                {/* Left Text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "46px",
                            fontWeight: "700",
                            lineHeight: "1.25",
                            margin: "0 0 20px 0",
                        }}
                    >
                        Fabric Suppliers in Saudi Arabia
                    </h2>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "18px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Aurora Textiles is a trusted international name among{" "}
                        <strong>fabric suppliers in Saudi Arabia</strong>,{" "}
                        <a href="/egypt" style={{ color: "#1a237e" }}>Egypt</a>,{" "}
                        <a href="/south-africa" style={{ color: "#1a237e" }}>South Africa</a>,{" "}
                        <strong>regions of Africa and GCC</strong>. offering premium men's
                        fabrics sourced and supplied from <strong>Dubai, UAE</strong>. As
                        experienced textile traders, we support tailors, retailers, uniform
                        suppliers, and garment manufacturers across Saudi Arabia with
                        consistent quality, reliable export supply, and a wide fabric portfolio.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "18px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 32px 0",
                        }}
                    >
                        Our focus is on <strong>men's fabrics</strong> designed for traditional
                        wear, formal clothing, uniforms, and everyday menswear — aligned with
                        the climate and style preferences of the Saudi market.
                    </p>

                    {/* Contact Us Button */}
                     <div
                            onClick={() => (window.location.href = "/contact-us")}
                            style={{ display: "flex", alignItems: "center", gap: "16px" }}>

                            <button
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "#0a089bd3";
                                    e.currentTarget.style.borderColor = "#e0b219";
                                    e.currentTarget.style.color = "#ffffff";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = "#8b7d3a";
                                    e.currentTarget.style.borderColor = "#050e5f";
                                    e.currentTarget.style.color = "#fff";
                                }}
                                style={{
                                    background: "#8b7d3a",
                                    color: "#fff",
                                    border: "2px solid #050e5f",
                                    padding: "14px 36px",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    letterSpacing: "0.5px",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                Contact Us
                            </button>
                        </div>
                </div>

                {/* Right Image */}
                <div style={{ flex: "0 0 42%", maxWidth: "42%" }}>
                    <img
                        src="/polyviscose.webp"
                        alt="Fabric Suppliers Saudi Arabia"
                        style={{
                            width: "100%",
                            height: "480px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "20px",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 2 — Image LEFT, Text RIGHT (SS2) */}
            {/* "Wholesale Fabric Suppliers" */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left Image */}
                <div style={{ flex: "0 0 42%", maxWidth: "42%" }}>
                    <img
                        src="/denim-2.webp"
                        alt="Wholesale Fabric Suppliers Saudi Arabia"
                        style={{
                            width: "100%",
                            height: "460px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "20px",
                        }}
                    />
                </div>

                {/* Right Text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "42px",
                            fontWeight: "700",
                            lineHeight: "1.25",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Wholesale Fabric Suppliers
                    </h2>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 16px 0",
                        }}
                    >
                        As established <strong>wholesale fabric suppliers</strong>, Aurora
                        Textiles provides bulk fabric solutions to businesses across Saudi
                        Arabia.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 10px 0",
                        }}
                    >
                        Wholesale Supply Benefits
                    </p>
                    <ul
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "2",
                            margin: "0 0 16px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Competitive pricing for bulk and repeat orders</li>
                        <li>Consistent fabric quality across batches</li>
                        <li>Smooth export and logistics support from Dubai</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: 0,
                        }}
                    >
                        We work closely with wholesalers and large buyers seeking long-term
                        sourcing partners.
                    </p>
                </div>
            </section>

            {/* SECTION 3 — Text LEFT, Image RIGHT (SS3) */}
            {/* "Fabric Online in Saudi Arabia" */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left Text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "42px",
                            fontWeight: "700",
                            lineHeight: "1.25",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Fabric Online in Saudi Arabia
                    </h2>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Aurora Textiles makes it simple for buyers in Saudi Arabia to source
                        fabrics from us through a professional and export-ready process.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 10px 0",
                        }}
                    >
                        Why to Choose Aurora Textiles for Fabrics in Saudi Arabia
                    </p>
                    <ul
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.4",
                            margin: "0 0 16px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Access to international men's fabric collections</li>
                        <li>Detailed fabric specifications for informed decisions</li>
                        <li>Dedicated support for wholesale and bulk inquiries</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 32px 0",
                        }}
                    >
                        Our online sourcing model allows Saudi buyers to purchase premium
                        fabrics without geographic limitations.
                    </p>

                    {/* Contact Us Button */}
                    <div
                            onClick={() => (window.location.href = "/contact-us")}
                            style={{ display: "flex", alignItems: "center", gap: "16px" }}>

                            <a
                                href="/contact-us"
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "#0a089bd3";
                                    e.currentTarget.style.borderColor = "#e0b219";
                                    e.currentTarget.style.color = "#ffffff";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = "#8b7d3a";
                                    e.currentTarget.style.borderColor = "#050e5f";
                                    e.currentTarget.style.color = "#fff";
                                }}
                                style={{
                                    background: "#8b7d3a",
                                    color: "#fff",
                                    border: "2px solid #050e5f",
                                    padding: "14px 36px",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    letterSpacing: "0.5px",
                                    transition: "all 0.3s ease",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Contact Us
                            </a>
                        </div>
                </div>

                {/* Right Image */}
                <div style={{ flex: "0 0 42%", maxWidth: "42%" }}>
                    <img
                        src="/polywool-lycra2.webp"
                        alt="Fabric Online Saudi Arabia"
                        style={{
                            width: "100%",
                            height: "460px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "20px",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 4 — Image LEFT, Text RIGHT (SS4) */}
            {/* "Wholesale Fabric" */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left Image */}
                <div style={{ flex: "0 0 42%", maxWidth: "42%" }}>
                    <img
                        src="/saudi-arabia-1.webp"
                        alt="Wholesale Fabric Saudi Arabia"
                        style={{
                            width: "100%",
                            height: "380px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "20px",
                        }}
                    />
                </div>

                {/* Right Text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "38px",
                            fontWeight: "700",
                            lineHeight: "1.2",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Wholesale Fabric
                    </h2>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 12px 0",
                        }}
                    >
                        Aurora Textiles specializes in <strong>wholesale fabric</strong> supply
                        for men's clothing across Saudi Arabia.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "18px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Applications of Our Wholesale Fabrics
                    </p>
                    <ul
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.4",
                            margin: "0 0 16px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Men's shirts and trousers</li>
                        <li>Traditional and formal wear</li>
                        <li>Corporate uniforms and workwear</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: 0,
                        }}
                    >
                        Our wholesale fabric solutions are designed to support scalable and
                        consistent production needs.
                    </p>
                </div>
            </section>

            {/* SECTION 5 — Text LEFT, Image RIGHT (SS5 + SS6) */}
            {/* "Fabric Offered by Aurora Textiles" — long left text, single tall image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left Text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "38px",
                            fontWeight: "700",
                            lineHeight: "1.2",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Fabric Offered by Aurora Textiles
                    </h2>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "18px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 20px 0",
                        }}
                    >
                        Aurora Textiles offers a carefully curated range of{" "}
                        <strong>men's fabrics</strong> to meet different functional, formal,
                        and industrial requirements in Saudi Arabia.
                    </p>

                    {/* Cotton Fabric Online */}
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Cotton Fabric Online
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 10px 0",
                        }}
                    >
                        As reliable suppliers of <strong>cotton fabric online</strong>, Aurora
                        Textiles offers breathable and versatile cotton fabrics ideal for Saudi
                        Arabia's climate.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 6px 0",
                        }}
                    >
                        Our Cotton Fabric
                    </p>
                    <ul
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.2",
                            margin: "0 0 10px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Pure cotton for shirts and traditional wear</li>
                        <li>Poly cotton blends for uniforms and daily use</li>
                        <li>Easy-care cotton fabrics for commercial applications</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 20px 0",
                        }}
                    >
                        These fabrics are selected to deliver comfort, durability, and
                        long-lasting performance.
                    </p>

                    {/* Suit Fabric Online */}
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Suit Fabric Online
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 10px 0",
                        }}
                    >
                        Our premium <strong>suit fabrics</strong> are designed for formal
                        menswear and ceremonial attire.
                    </p>
                    <ul
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.4",
                            margin: "0 0 20px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Suitable for business suits and traditional formal wear</li>
                        <li>Clean drape and professional finish</li>
                        <li>Ideal for tailors and garment manufacturers</li>
                    </ul>

                    {/* Poly Viscose Fabric */}
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Poly Viscose Fabric
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 10px 0",
                        }}
                    >
                        Poly viscose fabrics are widely used for men's suits and trousers due
                        to their smooth finish and commercial value.
                    </p>
                    <ul
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.4",
                            margin: "0 0 20px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Clean appearance with good drape</li>
                        <li>Cost-effective for bulk production</li>
                        <li>Suitable for formal and uniform applications</li>
                    </ul>

                    {/* Poly Cotton Fabric */}
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Poly Cotton Fabric
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 10px 0",
                        }}
                    >
                        Poly cotton blends offer comfort and durability, making them ideal for
                        daily wear and uniforms.
                    </p>
                    <ul
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.4",
                            margin: "0 0 20px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Breathable and easy to maintain</li>
                        <li>Ideal for shirts and workwear</li>
                        <li>Designed for frequent use</li>
                    </ul>

                    {/* Poly Wool Fabric */}
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Poly Wool Fabric
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 10px 0",
                        }}
                    >
                        Poly wool fabrics are preferred for structured and formal menswear.
                    </p>
                    <ul
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.4",
                            margin: 0,
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Suitable for cooler seasons and indoor wear</li>
                        <li>Maintains shape and elegance</li>
                        <li>Ideal for suits, blazers, and formal garments</li>
                    </ul>
                </div>

                {/* Right — Single tall image */}
                <div style={{ flex: "0 0 44%", maxWidth: "44%" }}>
                    <img
                        src="/linen-4.webp"
                        alt="Fabric Offered by Aurora Textiles Saudi Arabia"
                        style={{
                            width: "100%",
                            height: "1200px",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                            borderRadius: "20px",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 6 — Image LEFT (2×2 grid) + Text RIGHT (SS7) */}
            {/* "Why Choose Aurora Textiles for Saudi Arabia" */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left — Single Image */}
                <div style={{ flex: "0 0 44%", maxWidth: "44%" }}>
                    <img
                        src="/polywool-lycra3.webp"
                        alt="Why Choose Aurora Textiles Saudi Arabia"
                        style={{
                            width: "100%",
                            height: "520px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "10px",
                        }}
                    />
                </div>

                {/* Right Text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "46px",
                            fontWeight: "700",
                            lineHeight: "1.2",
                            margin: "0 0 20px 0",
                        }}
                    >
                        Why Choose Aurora Textiles for Saudi Arabia
                    </h2>
                    <ul
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "2",
                            margin: "0 0 16px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>
                            Based in <strong>Dubai, UAE</strong>, a global textile trading hub
                        </li>
                        <li>
                            Reliable supply across{" "}
                            <strong>Saudi Arabia and the MENA region</strong>
                        </li>
                        <li>Wide range of men's fabrics for wholesale and bulk buyers</li>
                        <li>Trusted by tailors, retailers, and uniform suppliers</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 32px 0",
                        }}
                    >
                        Aurora Textiles combines global sourcing expertise with regional market
                        understanding.
                    </p>

                    {/* Contact Us Button */}
                      <div
                            style={{ display: "flex", alignItems: "center", gap: "16px" }}>

                            <a
                                href="/contact-us"
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "#0a089bd3";
                                    e.currentTarget.style.borderColor = "#e0b219";
                                    e.currentTarget.style.color = "#ffffff";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = "#8b7d3a";
                                    e.currentTarget.style.borderColor = "#050e5f";
                                    e.currentTarget.style.color = "#fff";
                                }}
                                style={{
                                    background: "#8b7d3a",
                                    color: "#fff",
                                    border: "2px solid #050e5f",
                                    padding: "14px 36px",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    letterSpacing: "0.5px",
                                    transition: "all 0.3s ease",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Contact Us
                            </a>
                        </div>
                </div>
            </section>

            {/* SECTION 7 — FAQ 2-column grid (SS8) */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1100px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                }}
            >
                {/* FAQ Title */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "36px",
                            fontWeight: "700",
                            margin: 0,
                            letterSpacing: "1px",
                        }}
                    >
                        Frequently Asked Questions (FAQs)
                    </h2>
                </div>

                {/* 2-column FAQ grid — left col: items 0,2,4 / right col: items 1,3 */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px",
                        alignItems: "start",
                    }}
                >
                    {/* Left column items: 0, 2, 4 */}
                    <div>
                        {[0, 2, 4].map((index) => {
                            const faq = faqs[index];
                            return (
                                <div
                                    key={index}
                                    style={{
                                        border: "1px solid #ddd",
                                        borderBottom: "none",
                                        borderRight: "1px solid #ddd",
                                        background: "#fff",
                                    }}
                                >
                                    <div
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        onMouseEnter={() => setHoveredFaq(index)}
                                        onMouseLeave={() => setHoveredFaq(null)}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "22px 28px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "'Cinzel Decorative', serif",
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                color:
                                                    openFaq === index
                                                        ? "#b39131"
                                                        : hoveredFaq === index
                                                            ? "#070e46"
                                                            : "#0b18a1",
                                                letterSpacing: "0.5px",
                                                lineHeight: "1.4",
                                                transition: "color 0.2s ease",
                                                flex: 1,
                                                paddingRight: "10px",
                                            }}
                                        >
                                            {faq.question}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "19px",
                                                color:
                                                    openFaq === index
                                                        ? "#b39131"
                                                        : hoveredFaq === index
                                                            ? "#070e46"
                                                            : "#0b18a1",
                                                fontWeight: "600",
                                                flexShrink: 0,
                                                transition: "color 0.2s ease",
                                            }}
                                        >
                                            {openFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {openFaq === index && (
                                        <div
                                            style={{
                                                padding: "0 28px 24px 28px",
                                                fontFamily: "'poppins',sans-serif",
                                                fontSize: "17px",
                                                color: "#292626",
                                                lineHeight: "1.6",
                                                borderTop: "1px solid #eee",
                                                paddingTop: "18px",
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        {/* bottom border for left col */}
                        <div style={{ borderTop: "1px solid #ddd", borderRight: "none" }} />
                    </div>

                    {/* Right column items: 1, 3 */}
                    <div>
                        {[1, 3].map((index) => {
                            const faq = faqs[index];
                            return (
                                <div
                                    key={index}
                                    style={{
                                        border: "1px solid #ddd",
                                        borderBottom: "none",
                                        background: "#fff",
                                    }}
                                >
                                    <div
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        onMouseEnter={() => setHoveredFaq(index)}
                                        onMouseLeave={() => setHoveredFaq(null)}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "22px 28px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "'Cinzel Decorative', serif",
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                color:
                                                    openFaq === index
                                                        ? "#b39131"
                                                        : hoveredFaq === index
                                                            ? "#070e46"
                                                            : "#0b18a1",
                                                letterSpacing: "0.5px",
                                                lineHeight: "1.4",
                                                transition: "color 0.2s ease",
                                                flex: 1,
                                                paddingRight: "10px",
                                            }}
                                        >
                                            {faq.question}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "19px",
                                                color:
                                                    openFaq === index
                                                        ? "#b39131"
                                                        : hoveredFaq === index
                                                            ? "#070e46"
                                                            : "#0b18a1",
                                                fontWeight: "600",
                                                flexShrink: 0,
                                                transition: "color 0.2s ease",
                                            }}
                                        >
                                            {openFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {openFaq === index && (
                                        <div
                                            style={{
                                                padding: "0 28px 24px 28px",
                                                fontFamily: "'poppins',sans-serif",
                                                fontSize: "17px",
                                                color: "#292626",
                                                lineHeight: "1.6",
                                                borderTop: "1px solid #eee",
                                                paddingTop: "18px",
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        {/* bottom border for right col */}
                        <div style={{ borderTop: "1px solid #ddd" }} />
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </div>
    );
}