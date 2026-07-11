import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function SouthAfricaPage() {
    const [openFaq, setOpenFaq] = useState(null);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const faqs = [
        {
            question: "Do you supply men's fabrics to South Africa from Dubai?",
            answer: "Yes, Aurora Textiles exports men's fabrics from Dubai, UAE to South Africa with reliable logistics support.",
        },
        {
            question: "Are your fabrics suitable for South African weather conditions?",
            answer: "Absolutely. Our cotton and blended fabrics are selected for comfort and durability in varying climates.",
        },
        {
            question: "What types of fabrics do you supply for men?",
            answer: "We supply cotton, polycotton, linen blends, wool, polywool, polyviscose, and suiting fabrics.",
        },
        {
            question: "How can South African buyers contact Aurora Textiles?",
            answer: "Buyers can connect with us through our official website to discuss fabric requirements and export details.",
        },
        {
            question: "Do you handle bulk and wholesale fabric orders?",
            answer: "Yes, we specialize in bulk and wholesale textile supply for retailers, tailors, and manufacturers.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>
            <Helmet>
                <title>Fabric Suppliers and Wholesaler in South Africa - Aurora Textiles</title>
                <meta
                    name="description"
                    content="Aurora Textiles are one of the leading fabric suppliers and wholesalers in South Africa, offering Cotton, poly viscose, poly wool, and other types of fabrics."
                />
            
        <script type="application/ld+json">{JSON.stringify({"@context": "https://schema.org", "@type": "LocalBusiness", "name": "Aurora Textiles South Africa", "description": "Aurora Textiles supplies premium wholesale fabrics to retailers, tailors and distributors in South Africa.", "url": "https://aurora-textiles.vercel.app/south-africa", "areaServed": {"@type": "Country", "name": "South Africa"}, "brand": {"@type": "Brand", "name": "Aurora Textiles"}, "address": {"@type": "PostalAddress", "streetAddress": "Dubai Textile City, Warehouse 47, Al Awir Road", "addressLocality": "Dubai", "addressCountry": "AE"}, "telephone": "+971554172009", "email": "info@aurora-textiles.com"})}</script>
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
                    alt="Fabric Suppliers in South Africa"
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
                        South Africa
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Text LEFT, Image RIGHT (SS1) */}
            {/* "Fabric Suppliers South Africa" */}
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
                            fontSize: "36px",
                            fontWeight: "700",
                            lineHeight: "1.25",
                            margin: "0 0 20px 0",
                        }}
                    >
                        Fabric Suppliers South Africa
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
                        Aurora Textiles is a trusted name among international{" "}
                        <strong>fabric suppliers in South Africa</strong>, delivering premium
                        men's fabrics from Dubai, UAE. As experienced global textile traders,
                        we supply high-quality fabrics to tailors, designers, retailers, and
                        garment manufacturers across South Africa.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 32px 0",
                        }}
                    >
                        Our focus is on men's fabrics that combine comfort, durability, and
                        refined appearance — suitable for formalwear, casual wear, ethnic
                        clothing, and uniforms.
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
                                     padding: "14px 32px",
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "18px",
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
                        src="/suiting-fabric.jpg"
                        alt="Fabric Suppliers South Africa"
                        style={{
                            width: "100%",
                            height: "420px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "20px",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 2 — Image LEFT, Text RIGHT (SS2) */}
            {/* "Cotton Fabric Suppliers South Africa" */}
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
                        src="/suitings.webp"
                        alt="Cotton Fabric Suppliers South Africa"
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
                            fontSize: "36px",
                            fontWeight: "700",
                            lineHeight: "1.25",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Cotton Fabric Suppliers South Africa
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
                        As reliable <strong>cotton fabric suppliers in South Africa</strong>,
                        Aurora Textiles offers breathable and versatile cotton fabrics ideal
                        for everyday menswear and uniforms.
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
                        Our Cotton Fabric Offerings
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
                        <li>Pure cotton for shirts and traditional wear</li>
                        <li>Poly-cotton blends for uniforms and workwear</li>
                        <li>Cotton-linen blends for warm climates</li>
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
                        Our cotton fabrics are sourced to perform well in varying South African
                        weather conditions while maintaining softness and strength.
                    </p>
                </div>
            </section>

            {/* SECTION 3 — Text LEFT, Image RIGHT (SS3) */}
            {/* "Poly Viscose Fabric Suppliers South Africa" */}
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
                            fontSize: "36px",
                            fontWeight: "700",
                            lineHeight: "1.25",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Poly Viscose Fabric Suppliers South Africa
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
                        As trusted <strong>poly viscose fabric suppliers in South Africa</strong>,
                        Aurora Textiles provides smooth, durable, and cost-effective poly
                        viscose fabrics ideal for men's suiting, uniforms, and formal wear.
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
                        Our Poly Viscose Fabric Offerings
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
                        <li>Poly viscose fabrics for men's suits and trousers</li>
                        <li>Wrinkle-resistant poly viscose blends for daily office wear</li>
                        <li>Easy-care poly viscose fabrics for uniforms and corporate use</li>
                    </ul>

                    {/* Contact Us Button */}
                    <a
                        href="/contact"
                        style={{
                            display: "inline-block",
                            background: "#b39131",
                            color: "#fff",
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            fontWeight: "600",
                            padding: "14px 36px",
                            borderRadius: "6px",
                            textDecoration: "none",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Contact Us
                    </a>
                </div>

                {/* Right Image */}
                <div style={{ flex: "0 0 42%", maxWidth: "42%" }}>
                    <img
                        src="/suitings-1.webp"
                        alt="Poly Viscose Fabric Suppliers South Africa"
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
            {/* "Bulk Fabric Suppliers" + "Wholesale Textile" */}
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
                        src="/zarista-1.jpg"
                        alt="Bulk Fabric Suppliers South Africa"
                        style={{
                            width: "100%",
                            height: "680px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "20px",
                        }}
                    />
                </div>

                {/* Right Text */}
                <div style={{ flex: 1 }}>
                    {/* Block 1: Bulk Fabric Suppliers */}
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
                        Bulk Fabric Suppliers
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
                        Aurora Textiles works closely with buyers looking for dependable{" "}
                        <strong>bulk fabric suppliers</strong> for men's clothing.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Bulk Supply Advantages
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
                        <li>Consistent quality across large quantities</li>
                        <li>Competitive pricing for bulk orders</li>
                        <li>Reliable export supply from Dubai to South Africa</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 36px 0",
                        }}
                    >
                        We support tailors, retailers, and manufacturers who require steady
                        fabric availability for production and resale.
                    </p>

                    {/* Block 2: Wholesale Textile */}
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "28px",
                            fontWeight: "700",
                            lineHeight: "1.3",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Wholesale Textile
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
                        As an established <strong>wholesale textile</strong> supplier, Aurora
                        Textiles offers an extensive portfolio of men's fabrics suitable for
                        multiple applications.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Wholesale Fabric Categories
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
                        <li>Suiting fabrics (wool, polywool, polyviscose)</li>
                        <li>Shirting fabrics (cotton, blends, easy-care fabrics)</li>
                        <li>Uniform and workwear fabrics</li>
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
                        Our wholesale textile solutions are designed to meet commercial demands
                        without compromising on fabric quality.
                    </p>
                </div>
            </section>

            {/* SECTION 5 — Text LEFT, Image RIGHT (SS5) */}
            {/* "Fabric Wholesalers South Africa" + "Best Online Fabric Store South Africa" */}
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
                    {/* Block 1: Fabric Wholesalers South Africa */}
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
                        Fabric Wholesalers South Africa
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
                        For businesses searching for dependable{" "}
                        <strong>fabric wholesalers in South Africa</strong>, Aurora Textiles
                        provides international sourcing expertise with a strong focus on men's
                        fashion fabrics.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Why South African Buyers Choose Us
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
                        <li>Global sourcing from premium mills</li>
                        <li>Export-ready inventory</li>
                        <li>Trusted by international buyers across MENA and Africa</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 36px 0",
                        }}
                    >
                        We ensure smooth coordination, professional handling, and consistent
                        fabric standards for South African clients.
                    </p>

                    {/* Block 2: Best Online Fabric Store South Africa */}
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "28px",
                            fontWeight: "700",
                            lineHeight: "1.3",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Best Online Fabric Store South Africa
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
                        Aurora Textiles also serves customers looking for the best online
                        fabric store in South Africa for premium men's fabrics.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        What You Can Expect
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
                        <li>Easy fabric selection with detailed specifications</li>
                        <li>Access to international-quality menswear fabrics</li>
                        <li>Professional support for export and bulk inquiries</li>
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
                        Our online presence makes it simple for South African buyers to source
                        fabrics without geographic limitations.
                    </p>
                </div>

                {/* Right Image */}
                <div style={{ flex: "0 0 42%", maxWidth: "42%" }}>
                    <img
                        src="/south-africa-1.webp"
                        alt="Fabric Wholesalers South Africa"
                        style={{
                            width: "100%",
                            height: "780px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "4px",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 6 — Text LEFT, Single Image RIGHT (SS6) */}
            {/* "Why Choose Aurora Textiles for South Africa" */}
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
                            margin: "0 0 20px 0",
                        }}
                    >
                        Why Choose Aurora Textiles for South Africa
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
                        <li>Based in Dubai, UAE, a global textile trading hub</li>
                        <li>
                            Supplies men's fabrics across South Africa, MENA, and international
                            markets
                        </li>
                        <li>Wide range of cotton, suiting, shirting, and blended fabrics</li>
                        <li>Ideal for wholesale, bulk, and commercial buyers</li>
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
                        Aurora Textiles combines global reach with reliable service to meet
                        South Africa's growing demand for premium men's fabrics.
                    </p>

                    {/* Contact Us Button */}
                    {/* Button */}
                        <div
                            onClick={() => (window.location.href = "/contact-us")}
                            style={{ display: "flex", alignItems: "center", gap: "14px" }}>

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
                                    padding: "14px 32px",
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "18px",
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

                {/* Right — Single Image */}
                <div style={{ flex: "0 0 44%", maxWidth: "44%" }}>
                    <img
                        src="/polywool-lycra3.webp"
                        alt="Why Choose Aurora Textiles South Africa"
                        style={{
                            width: "100%",
                            height: "520px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "4px",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 7 — FAQ 2-column grid (SS7/SS8) */}
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