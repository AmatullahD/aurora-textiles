import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DonearPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT TYPES OF DONEAR FABRICS DOES AURORA TEXTILES OFFER?",
            answer: (
                <>
                    We supply a full range of <strong>Donear suitings</strong> and{" "}
                    <strong>Donear shirtings</strong>, including poly viscose blends,
                    wool-rich suiting fabrics, and easy-care shirtings ideal for men's
                    fashion and uniforms.
                </>
            ),
        },
        {
            question: "IS DONEAR FABRIC SUITABLE FOR CORPORATE UNIFORMS?",
            answer: (
                <>
                    Yes, Donear fabrics are widely used for corporate uniforms due to their
                    durability, wrinkle resistance, and professional finish. We supply bulk
                    quantities to businesses across Dubai and the UAE.
                </>
            ),
        },
        {
            question: "DOES AURORA TEXTILES OFFER DELIVERY ACROSS DUBAI AND THE UAE?",
            answer: (
                <>
                    Absolutely. We provide timely deliveries across Dubai and all emirates
                    of the UAE, ensuring your orders arrive on schedule and in perfect
                    condition.
                </>
            ),
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
                        DONEAR FABRICS
                    </h1>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 1 —
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — 50% */}
                <div
                    style={{
                        width: window.innerWidth < 768 ? "100%" : "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="/donear-logo.png"
                        alt="Donear Logo"
                        style={{
                            width: "100%",
                            maxWidth: "550px",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />

                </div>

                {/* Right — 50% */}
                <div
                    style={{
                        width: window.innerWidth < 768 ? "100%" : "50%",
                    }}
                >
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "44px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.15",
                            margin: "0 0 24px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Donear Fabrics for <br /> Men's Clothing
                    </h2>

                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.85",
                            margin: 0,
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        At <strong>Aurora Textiles</strong>, we are proud to supply premium{" "}
                        <strong>Donear fabrics</strong> for men's clothing needs across Dubai
                        and the UAE. Renowned for quality, innovation, and performance,{" "}
                        <strong>Donear</strong> is a trusted name in the world of shirting and
                        suiting textiles. As dedicated fabric suppliers, we offer businesses
                        access to original Donear suitings and shirtings, ensuring consistency,
                        reliability, and professional-grade fabric supply for tailoring,
                        uniforms, and men's fashion collections.
                    </p>
                </div>
            </section>


            {/* ─────────────────────────────────────────
                SECTION 2 —
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                }}
            >
                <h2
                    style={{
                        fontSize: window.innerWidth < 768 ? "26px" : "42px",
                        fontWeight: "700",
                        color: "#1e2a5e",
                        fontFamily: "'Cinzel Decorative', serif",
                        lineHeight: "1.2",
                        margin: "0 0 30px 0",
                        textTransform: "uppercase",
                        textAlign: "center",
                    }}
                >
                    Donear Suitings – Style, Comfort, and Durability
                </h2>
                <p
                    style={{
                        fontSize: "19px",
                        color: "#333",
                        lineHeight: "1.2",
                        margin: "0 0 20px 0",
                        fontFamily: "'Cinzel Decorative', serif",
                    }}
                >
                    Our range of <strong>Donear suitings</strong> includes a variety of poly
                    viscose blends, wool-rich fabrics, and innovative textures perfect for
                    crafting formal suits, blazers, and business attire. Known for their
                    wrinkle resistance, excellent drape, and color retention, Donear suitings
                    are ideal for retail brands, tailoring houses, and corporate uniform
                    programs.
                </p>
                <p
                    style={{
                        fontSize: "19px",
                        color: "#333",
                        lineHeight: "1.2",
                        margin: 0,
                        fontFamily: "'Cinzel Decorative', serif",
                    }}
                >
                    Whether you're looking for lightweight suiting fabrics for all-season
                    wear or rich textures for special occasions, Aurora Textiles ensures you
                    receive consistent quality and bulk availability of genuine Donear
                    materials.
                </p>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 3 —
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + star bullet list */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "38px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 32px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Why Choose Aurora Textiles for Donear Fabric?
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                        {[
                            "Exclusive Authorized Distributor & Dealer of Donear Fabrics in UAE",
                            "Specialization in Fabrics for Men's Clothing",
                            "Bulk and Wholesale Solutions",
                            "Strong Sourcing Network Ensuring Genuine Donear Fabrics",
                            "Reliable Service with a Focus on Client Satisfaction",
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
                                        letterSpacing: "0.8px",
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
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/faq-image.jpg"
                        alt="Donear Fabric Swatches"
                        style={{
                            width: "100%",
                            height: "420px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 4 —
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image with beige accent block behind */}
                <div
                    style={{
                        flex: "1 1 45%",
                        minWidth: "280px",
                        position: "relative",
                        paddingTop: "24px",
                        paddingLeft: "24px",
                    }}
                >
                    {/* Accent rectangle behind image */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "85%",
                            height: "92%",
                            background: "#f0ece4",
                            borderRadius: "6px",
                            zIndex: 0,
                        }}
                    />
                    <img
                        src="/faq-image.jpg"
                        alt="Donear Shirting"
                        style={{
                            width: "88%",
                            height: "360px",
                            objectFit: "cover",
                            display: "block",
                            position: "relative",
                            zIndex: 1,
                            borderRadius: "4px",
                        }}
                    />
                </div>

                {/* Right — heading + paragraph */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "42px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 20px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Donear Shirting
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.85",
                            margin: 0,
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        <strong>Donear shirting fabrics</strong> are engineered for comfort
                        and durability, combining smart designs with easy maintenance. From
                        classic plains and checks to sophisticated textures, Donear shirtings
                        are suited for office wear, casual shirts, and uniforms. Aurora
                        Textiles supplies a wide selection of Donear shirting fabrics to meet
                        diverse styling and manufacturing needs, helping brands deliver
                        impeccable garments every time.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 5 
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + bullets + button */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "42px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 20px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Donear Fabric
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.85",
                            margin: "0 0 14px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        Sourcing <strong>Donear fabric</strong> through Aurora Textiles means
                        gaining a reliable partner for your production and retail needs. We
                        ensure:
                    </p>

                    <ul
                        style={{
                            margin: "0 0 18px 0",
                            paddingLeft: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                        }}
                    >
                        {[
                            "Access to the latest collections and textures",
                            "Competitive wholesale pricing",
                            "Consistent stock availability",
                            "Timely deliveries across Dubai and the UAE",
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "15px",
                                    color: "#333",
                                    lineHeight: "1.7",
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
                            lineHeight: "1.85",
                            margin: "0 0 28px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        As a committed men's fabric supplier, we help businesses maintain
                        product quality, control costs, and meet customer expectations without
                        hassle.
                    </p>

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
                        src="/faq-image.jpg"
                        alt="Donear Fabric Stack"
                        style={{
                            width: "100%",
                            height: "460px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 6 — FAQ: image left + accordion right
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
                        src="/faq-image.jpg"
                        alt="Fabric Swatches FAQ"
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
        </div>
    );
}