import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function SammaanPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT TYPES OF SAMMAAN SHIRTING FABRICS DOES AURORA TEXTILES SUPPLY?",
            answer:
                "We supply a broad selection of Sammaan men's shirting fabrics, including blends such as polyester cotton, linen, and their various combinations—tailored to suit diverse menswear styles and market needs.",
        },
        {
            question: "ARE SAMMAAN SHIRTING FABRICS SUITABLE FOR BOTH CASUAL AND FORMAL SHIRTS?",
            answer:
                "Yes, Sammaan fabrics are engineered for formalwear, semi-formals, and casual shirts alike. Their wide range of textures, patterns, and finishes makes them suitable for all menswear occasions.",
        },
        {
            question: "ARE SAMMAAN SHIRTING FABRICS SUITABLE FOR BOTH CASUAL AND FORMAL SHIRTS?",
            answer:
                "Absolutely. Aurora Textiles provides bulk and wholesale supply of Sammaan shirting fabrics across Dubai and the wider UAE, with export support to MENA countries.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

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
                        SAMMAAN FABRICS
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
                        width: window.innerWidth < 768 ? "100%" : "420px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/sammaan-1.webp"
                        alt="Sammaan Exclusive Fabrics Logo"
                        style={{
                            width: "100%",
                            maxWidth: "420px",
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
                        Sammaan Fabrics by Aurora Textiles in Dubai
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
                        <strong>Aurora Textiles</strong> is a trusted supplier of{" "}
                        <strong>Sammaan fabrics</strong> in Dubai, offering a versatile and
                        contemporary range of <strong>men's shirting fabrics</strong> designed
                        for comfort, durability, and modern appeal. As specialists in fabrics
                        for men's apparel, we provide bulk and wholesale supply of Sammaan
                        fabrics to tailors, brands, and manufacturers across the UAE and MENA
                        region.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 2 — Heading + para + bold label + bullets + two paras left + image right
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
                {/* Left — heading + content */}
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
                        Sammaan Men's Shirting Fabric
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
                        <strong>Sammaan men's shirting fabrics</strong> are known for their
                        quality construction and a wide variety of textures, blends, and
                        finishes. Ideal for formalwear, semi-formals, and casual shirts, these
                        fabrics are engineered to meet the demands of today's fashion-conscious
                        consumers.
                    </p>

                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: "0 0 12px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                            fontWeight: "700",
                        }}
                    >
                        Our offerings include:
                    </p>

                    <ul
                        style={{
                            margin: "0 0 20px 0",
                            paddingLeft: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                        }}
                    >
                        {[
                            "Polyester Cotton Blends",
                            "100% cotton",
                            "Poly-Cotton",
                            "100% Linen",
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

                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: "0 0 8px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        Mixtures or blends of any of the above combinations
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
                        These fabrics are available in a wide range of patterns, textures, and
                        colors—making them suitable for all seasons and diverse menswear lines.
                    </p>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/sammaan-2.webp"
                        alt="Sammaan Shirting Fabric"
                        style={{
                            width: "100%",
                            height: "500px",
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
                        src="/sammaan-3.webp"
                        alt="Sammaan Prints Embroidery Jacquard"
                        style={{
                            width: "100%",
                            height: "420px",
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
                        Value-Added Designs: Prints, Embroidery & Jacquard Fabrics
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
                        Sammaan is also known for its <strong>value-added prints</strong>,
                        intricate <strong>embroidery</strong>, and rich{" "}
                        <strong>jacquard fabrics</strong>, which bring personality and texture
                        to every garment. Whether your focus is on stylish casual shirts or
                        elevated formal options, these value additions help your designs stand
                        out in a competitive market.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 4 — Heading + star bullet list + CTA button left + image right
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
                {/* Left — heading + star bullets + button */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "40px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 32px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Why Source Sammaan Fabrics from Aurora Textiles?
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "22px",
                            marginBottom: "32px",
                        }}
                    >
                        {[
                            "Wide range of high-demand printed and designer shirting fabrics.",
                            "Competitive wholesale pricing for fabric buyers",
                            "Reliable stock and bulk order fulfillment",
                            "Strong experience in men's shirting fabrics only",
                            "Service and delivery across Dubai and export to MENA countries",
                        ].map((point, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "14px",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#b8860b",
                                        fontSize: "22px",
                                        lineHeight: "1.3",
                                        flexShrink: 0,
                                    }}
                                >
                                    ✦
                                </span>
                                <p
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: "700",
                                        color: "#1e2a5e",
                                        letterSpacing: "0.6px",
                                        textTransform: "uppercase",
                                        margin: 0,
                                        lineHeight: "1.6",
                                        fontFamily: "'Cinzel Decorative', serif",
                                    }}
                                >
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button
                        style={{
                            background: "#b8860b",
                            color: "#fff",
                            border: "none",
                            padding: "14px 38px",
                            fontSize: "15px",
                            fontFamily: "'Cinzel Decorative', serif",
                            fontWeight: "600",
                            cursor: "pointer",
                            borderRadius: "4px",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Contact Us
                    </button>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/sammaan-4.webp"
                        alt="Sammaan Fabric Supply Aurora Textiles"
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
                        src="/sammaan-5.webp"
                        alt="Sammaan Fabric Rolls"
                        style={{
                            width: "100%",
                            height: "480px",
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