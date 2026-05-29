import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function OxfordPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "DO YOU SUPPLY OXFORD FABRIC IN BULK?",
            answer:
                "Yes, Aurora Textiles offers Oxford fabric in bulk quantities with consistent quality and competitive pricing for garment manufacturers, brands, and tailors.",
        },
        {
            question: "CAN I ORDER OXFORD FABRIC IN CUSTOM COLORS OR FINISHES?",
            answer:
                "Yes, we can source Oxford fabrics in a wide range of custom colors and finishes to match your brand requirements. Contact our team to discuss your specific needs.",
        },
        {
            question: "IS OXFORD FABRIC SUITABLE FOR UNIFORMS?",
            answer:
                "Absolutely. Oxford fabrics are widely used for corporate uniforms, school uniforms, and hospitality uniforms due to their durability, structure, and professional appearance.",
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
                        OXFORD FABRICS
                    </h1>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 1 — Heading + paragraph left, Oxford logo image right
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
                {/* Left — heading + paragraph */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "44px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 28px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Oxford Fabric for Men's Clothing Supplier in UAE
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
                        At{" "}
                        <strong style={{ color: "#b8860b" }}>Aurora Textiles</strong>, we
                        supply premium <strong>Oxford shirting fabrics</strong> exclusively
                        for men's fashion needs in Dubai, UAE and across the MENA Region.
                        Designed for structure, style, and daily wear, Oxford fabrics are a
                        staple in shirtmaking, from refined formalwear to relaxed weekend
                        looks. Our commitment is to support tailors, retailers, and garment
                        manufacturers with reliable quality, professional service, and
                        flexible bulk ordering. Whether you're developing a private label or
                        scaling uniform production, Aurora Textiles makes it simple to source
                        top-grade shirting material.
                    </p>
                </div>

                {/* Right — Oxford logo image */}
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
                        src="/oxford.webp"
                        alt="Oxford Brand Logo"
                        style={{
                            width: "100%",
                            maxWidth: "420px",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 2 — Image left + heading & paragraph right
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
                <div style={{ flex: "0 0 auto", width: window.innerWidth < 768 ? "100%" : "380px" }}>
                    <img
                        src="/oxford-1.webp"
                        alt="Oxford Shirt Men"
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
                <div style={{ flex: "1 1 0" }}>
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
                        Oxford Shirt Men – Tailored for Style & Function
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
                        Built for versatility, our collection of Oxford's shirtings fabric
                        suits the diverse needs of modern menswear—from executive office
                        looks to everyday smart casuals. Shirt makers crafting high-end and
                        value-driven pieces alike benefit from our fabric's easy tailoring,
                        crisp appearance, and wide color range. Whether you're producing a
                        soft blue button-down or a structured uniform shirt, Oxford's fabrics
                        help you deliver consistency with every stitch.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 3 — Heading + paragraph left + image right
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
                {/* Left — heading + paragraph */}
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
                        Oxford Shirt Fabric
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
                        At <strong>Aurora Textiles</strong>, we supply high-quality{" "}
                        <strong>Oxford fabrics</strong> ideal for crafting classic men's
                        shirts. Known for their sturdy yet breathable weave, Oxford shirting
                        fabrics provide structure without stiffness—making them a preferred
                        choice for both formal and casual shirting. Our collection includes
                        traditional <strong>Oxford cotton shirting fabric</strong>, lightweight
                        blends, and wrinkle-resistant options suited for high-use applications
                        such as uniforms, office wear, and everyday fashion.
                    </p>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/oxford-2.webp"
                        alt="Oxford Shirt Fabric"
                        style={{
                            width: "100%",
                            height: "380px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 4 — Image left + heading, paragraphs & bullet list right
                (sections 4 & 5 from screenshots are one continuous section)
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
                {/* Left — tall image */}
                <div style={{ flex: "0 0 auto", width: window.innerWidth < 768 ? "100%" : "420px" }}>
                    <img
                        src="/oxford-3.webp"
                        alt="Oxford Shirting Dubai"
                        style={{
                            width: "100%",
                            height: "580px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>

                {/* Right — heading + paragraphs + bullets */}
                <div style={{ flex: "1 1 0" }}>
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
                        Shop Shirting Fabric for Oxford in Dubai
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
                        As a leading name in fabric distribution, Aurora Textiles serves as a
                        dependable fabric shop for Oxford Shirting textiles in Dubai.{" "}
                        <strong>
                            We take pride in being the first to introduce{" "}
                            <em>Oxford's branded fabrics</em> to the Gulf market and remain
                            their exclusive distributors in the region.
                        </strong>{" "}
                        We maintain ready stock for popular colors and textures, provide quick
                        order turnarounds, and offer flexible support for designers,
                        manufacturers, and fashion brands. Our clients value not only the
                        quality of our Oxford fabrics but also our transparency, logistics
                        support, and deep industry understanding.
                    </p>

                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: "0 0 14px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                            fontWeight: "700",
                        }}
                    >
                        Our Oxford Shirting collection also includes:
                    </p>

                    <ul
                        style={{
                            margin: "0 0 20px 0",
                            paddingLeft: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        {[
                            {
                                label: "Oxford shirt fabric",
                                desc: " available in solid colors, yarn-dyed patterns, and ",
                                bold2: "pinpoint weaves",
                                suffix: " for a finer, more polished look ideal for dress shirts.",
                            },
                            {
                                label: "Oxford cotton fabric",
                                desc: " for everyday comfort and breathability",
                            },
                            {
                                label: "Polyester Oxford fabric",
                                desc: " for added wrinkle resistance",
                            },
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
                                <strong>{item.label}</strong>
                                {item.bold2 ? (
                                    <>
                                        {item.desc}
                                        <strong>{item.bold2}</strong>
                                        {item.suffix}
                                    </>
                                ) : (
                                    item.desc
                                )}
                            </li>
                        ))}
                    </ul>

                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: 0,
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        Oxford's fabrics are carefully selected to match the expectations of
                        professional tailors, menswear brands, and large-scale uniform
                        suppliers. Every fabric roll undergoes quality checks to ensure
                        consistency, durability, and customer satisfaction.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 5 — Why Choose Aurora: star bullets + CTA left + image right
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
                {/* Left — heading + star bullets + CTA para + button */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "40px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 28px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Why Choose Aurora Textiles?
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            marginBottom: "28px",
                        }}
                    >
                        {[
                            "DEDICATED TO MEN'S SHIRTING FABRICS",
                            "STRONG INVENTORY AND FABRIC CONTINUITY",
                            "BULK PRICING FOR WHOLESALE BUYERS",
                            "DELIVERY ACROSS DUBAI AND THE UAE WITH EXPORT SUPPORT FOR THE GCC",
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

                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.85",
                            margin: "0 0 28px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        <span style={{ color: "#b8860b", fontWeight: "600" }}>
                            Get in touch
                        </span>{" "}
                        with Aurora Textiles today to request swatches, inquire about
                        pricing, or place your wholesale order.
                    </p>

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
                        src="/oxford-4.webp"
                        alt="Aurora Textiles Fabric Store"
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
                        src="/oxford-5.webp"
                        alt="Oxford Fabric Swatches"
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