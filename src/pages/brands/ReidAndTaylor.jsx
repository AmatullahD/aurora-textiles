import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function ReidAndTaylorPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT TYPES OF REID & TAYLOR FABRICS DO YOU SUPPLY?",
            answer:
                "We offer a wide range of original Reid & Taylor suitings and shirtings, including wool-rich, poly wool, merino wool and easy-care blends designed for tailored menswear.",
        },
        {
            question: "CAN I PLACE BULK ORDERS FOR REID & TAYLOR FABRICS?",
            answer:
                "Yes, Aurora Textiles specializes in bulk and wholesale orders for Reid & Taylor fabrics. We ensure consistent quality, reliable stock availability, and quick turnaround on large orders.",
        },
        {
            question: "DO YOU EXPORT REID & TAYLOR FABRICS TO OTHER COUNTRIES?",
            answer:
                "Yes, we export Reid & Taylor fabrics across the MENA region including Oman, Qatar, Bahrain, and other GCC countries. Contact us for export inquiries and pricing.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>


            <Helmet>
                <title>Reid & Taylor Fabric Supplier in Dubai | Aurora Textiles</title>
                <meta name="description" content="Shop Reid & Taylor luxury suiting fabrics in Dubai. Aurora Textiles is your trusted wholesale supplier of Reid & Taylor fabrics across UAE and GCC." />
            </Helmet>

            {/* NAVBAR */}
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
                    alt="Ethnic Fabrics Banner"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.45)",
                    }}
                />
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
                            textTransform: "uppercase",
                        }}
                    >
                        REID & TAYLOR FABRICS
                    </h1>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 1 — Logo image left + heading & paragraph right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "80px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — logo image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: window.innerWidth < 768 ? "100%" : "400px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/reidAndTaylor.webp"
                        alt="Reid and Taylor Logo"
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right — heading + paragraph */}
                <div style={{ flex: "1 1 0" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "44px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Reid & Taylor Fabrics for Men's Wear
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: 0,
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        <strong>Aurora Textiles</strong> is a trusted distributor of{" "}
                        <strong>Reid & Taylor men's fabrics</strong> in Dubai, delivering
                        premium <strong>suiting</strong> and <strong>shirtings</strong> for
                        fashion-forward and professional menswear collections. Known for its
                        heritage of excellence, <strong>Reid & Taylor</strong> offers a
                        perfect blend of elegance, comfort, and performance—making it a
                        preferred choice for designers, retailers, and tailors across the UAE.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 2 — Heading + two paragraphs left + image right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + two paragraphs */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "40px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Reid & Taylor Suiting
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: "0 0 20px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        Our extensive collection of{" "}
                        <strong>Reid & Taylor suiting fabrics</strong> includes 100% wool and
                        poly wool blends that offer a refined drape, natural stretch, and
                        superior finish. These fabrics are perfect for formal suits, blazers,
                        ceremonial wear, and business attire. With options that combine
                        timeless patterns and modern tones, Reid & Taylor suitings bring out
                        sharp, structured looks without compromising on comfort.
                    </p>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: 0,
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        At <strong>Aurora Textiles</strong>, we ensure bulk availability of
                        authentic Reid & Taylor suiting fabrics to meet the production needs
                        of tailors, fashion houses, and uniform manufacturers across Dubai and
                        the wider UAE.
                    </p>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/reid&taylor-1.webp"
                        alt="Reid and Taylor Suiting"
                        style={{
                            width: "100%",
                            height: "480px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "6px",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 3 — Image left + heading & paragraph right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <img
                        src="/reid&taylor-2.webp"
                        alt="Reid and Taylor Shirting"
                        style={{
                            width: "100%",
                            height: "480px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "6px",
                        }}
                    />
                </div>

                {/* Right — heading + paragraph */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "40px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Reid & Taylor Shirting
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: 0,
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        <strong>Reid & Taylor shirting fabrics</strong> are created using
                        yarn of only the highest quality fibres and known for their crisp
                        feel, breathable construction, and polished appeal. Whether you need
                        classic plains, subtle stripes, or elegant textures, these fabrics
                        are ideal for creating Formal, Informal, and premium business wear.
                        We supply Reid & Taylor shirtings in bulk, with consistent quality
                        and finish you can rely on.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 4 — Heading + para + bullet list + CTA button left + image right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + para + bullets + button */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "40px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Supplying Reid & Taylor Men's Fabric Across the UAE
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: "0 0 16px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        As dedicated textile suppliers,{" "}
                        <strong>Aurora Textiles</strong> works closely with manufacturers,
                        boutiques, and tailoring units to deliver premium{" "}
                        <strong>Reid & Taylor men's fabrics</strong> across Dubai and export
                        to the MENA region. We support:
                    </p>

                    <ul
                        style={{
                            margin: "0 0 28px 0",
                            paddingLeft: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        {[
                            "Bulk and wholesale fabric supply",
                            "Quick turnaround on large orders",
                            "Sourcing of latest Reid & Taylor collections",
                            "Tailor-friendly, ready-to-stitch fabric options",
                            "Original Reid & Taylor labeling and quality",
                            "Competitive wholesale pricing",
                            "Reliable stock availability",
                            "Expert support and logistics across the UAE",
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "15px",
                                    color: "#333",
                                    lineHeight: "1.75",
                                    fontFamily: "'Cinzel Decorative', serif",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "#0a089bd3";
                            e.currentTarget.style.borderColor = "#e0b219";
                            e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "#e0b219";
                            e.currentTarget.style.borderColor = "#0a089bd3";
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

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/reid&taylor-3.webp"
                        alt="Reid and Taylor Fabric Supply UAE"
                        style={{
                            width: "100%",
                            height: "520px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "6px",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 5 — FAQ: image left + accordion right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <img
                        src="/reid&taylor-4.webp"
                        alt="Reid and Taylor Fabric Rolls"
                        style={{
                            width: "100%",
                            height: "500px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>

                {/* Right — FAQ accordion */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "42px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            margin: "0 0 28px 0",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                        }}
                    >
                        FAQ_
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    border: "1px solid #ddd",
                                    borderTop: i === 0 ? "1px solid #ddd" : "none",
                                }}
                            >
                                {/* Question row */}
                                <div
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "18px 20px",
                                        cursor: "pointer",
                                        gap: "16px",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "13px",
                                            fontWeight: "700",
                                            color: "#b8860b",
                                            letterSpacing: "0.6px",
                                            textTransform: "uppercase",
                                            margin: 0,
                                            lineHeight: "1.55",
                                            fontFamily: "'Cinzel Decorative', serif",
                                        }}
                                    >
                                        {faq.question}
                                    </p>
                                    <span
                                        style={{
                                            fontSize: "24px",
                                            color: "#1e2a5e",
                                            flexShrink: 0,
                                            fontWeight: "300",
                                            lineHeight: 1,
                                        }}
                                    >
                                        {openFaq === i ? "−" : "+"}
                                    </span>
                                </div>

                                {/* Answer panel */}
                                {openFaq === i && (
                                    <div
                                        style={{
                                            padding: "0 20px 20px 20px",
                                            borderTop: "1px solid #eee",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: "15px",
                                                color: "#333",
                                                lineHeight: "1.85",
                                                margin: "16px 0 0 0",
                                                fontFamily: "'Cinzel Decorative', serif",
                                            }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
            <ScrollToTop />
        </div>
    );
}