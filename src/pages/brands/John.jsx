import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function JohnCavendishPage() {
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const faqColRef = useRef(null);
    const [faqImgHeight, setFaqImgHeight] = useState(480);

    useLayoutEffect(() => {
        const el = faqColRef.current;
        if (!el) return;
        setFaqImgHeight(el.offsetHeight);
        const ro = new ResizeObserver(() => {
            setFaqImgHeight(el.offsetHeight);
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, [openFaq]);

    const faqs = [
        {
            question: "What makes John Cavendish suiting fabric ideal for formal menswear?",
            answer:
                "John Cavendish suiting fabrics are known for their fine wool content, excellent drape, and premium finish—making them ideal for crafting structured suits and business attire that maintain form and comfort over time.",
        },
        {
            question: "Can I order John Cavendish fabrics in bulk for commercial tailoring?",
            answer:
                "Yes, Aurora Textiles provides bulk and wholesale supply of John Cavendish fabrics for commercial tailors, fashion houses, and uniform manufacturers across Dubai and the MENA region.",
        },
        {
            question: "Are John Cavendish fabrics available in pure wool and blended options?",
            answer:
                "Yes, our John Cavendish collection includes pure wool suit fabrics as well as high-performance blended options, catering to a range of budgets and end-use requirements.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>John Cavendish Men&#39;s Fabric Supplier in Dubai, UAE | Formal Wear Fabrics by Aurora Textiles</title>
                <meta name="description" content="Aurora Textiles is the leading John Cavendish men&#39;s fabric supplier in Dubai, UAE. It offers fine wool content, excellent drape, and a premium finish that is ideal for formal suits and business attire. Check out our website and contact us to shop now." />
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
                        }}
                    >
                        John Cavendish Fabrics
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
                        src="/john-cavendish.webp"
                        alt="John Cavendish Logo"
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
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        John Cavendish Fabrics Supplier in Dubai, UAE
                    </h2>
                    <p
                        style={{
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: 0,
                            fontFamily: "\'Poppins\', sans-serif",
                        }}
                    >
                        <strong>Aurora Textiles</strong> is a trusted{" "}
                        <strong>John Cavendish fabrics supplier in the UAE</strong>, offering
                        premium-quality fabrics designed specifically for men's suiting needs.
                        Known for its rich finish and refined construction,{" "}
                        <strong>John Cavendish</strong> is a name that represents timeless
                        tailoring and unmatched fabric quality. We provide wholesale and bulk
                        support for brands, tailors, and clothing manufacturers across Dubai
                        and the wider MENA region.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 2 — Heading + paragraph left + image right
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
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        John Cavendish Suiting
                    </h2>
                    <p
                        style={{
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: 0,
                            fontFamily: "\'Poppins\', sans-serif",
                        }}
                    >
                        Our collection of <strong>John Cavendish suiting</strong> includes{" "}
                        <strong>pure wool suit fabrics</strong> and high-performance blends
                        that deliver both luxury and longevity. Ideal for business suits,
                        formalwear, and occasion wear, these fabrics offer a polished drape,
                        excellent stitchability, and long-term durability. Whether your
                        clients prefer classic textures or modern styling, John Cavendish
                        fabrics help create garments that stand out for the right reasons.
                    </p>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/john-1.webp"
                        alt="John Cavendish Suiting Fabric"
                        style={{
                            width: "100%",
                            height: "420px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "6px",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 3 — Image left + heading, paragraphs & bullet list right
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
                        src="/john-2.webp"
                        alt="John Cavendish Men's Fabrics"
                        style={{
                            width: "100%",
                            height: "520px",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                            borderRadius: "6px",
                        }}
                    />
                </div>

                {/* Right — heading + para + bullet list */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "40px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        John Cavendish Men's Fabrics – Trusted by Professionals
                    </h2>
                    <p
                        style={{
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: "0 0 20px 0",
                            fontFamily: "\'Poppins\', sans-serif",
                        }}
                    >
                        From fashion houses to uniform suppliers,{" "}
                        <strong>John Cavendish men's fabrics</strong> are preferred for their
                        consistency, comfort, and visual appeal. These fabrics are crafted for
                        structured suiting and tailored excellence, making them a reliable
                        choice for menswear lines that demand quality without compromise.
                    </p>
                    <p
                        style={{
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: "0 0 16px 0",
                            fontFamily: "\'Poppins\', sans-serif",
                        }}
                    >
                        At Aurora Textiles, we ensure you receive:
                    </p>
                    <ul
                        style={{
                            margin: 0,
                            paddingLeft: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        {[
                            "Verified John Cavendish collections",
                            "Competitive pricing for bulk and wholesale orders",
                            "Reliable stock levels with on-time delivery",
                            "Personalized support for sourcing and order fulfillment",
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "19px",
                                    color: "#333",
                                    lineHeight: "1.4",
                                    fontFamily: "\'Poppins\', sans-serif",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 4 — Heading + two paras + CTA button left + image right
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
                {/* Left — heading + paragraphs + button */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "40px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Commercial-Grade Fabrics by Aurora Textiles
                    </h2>
                    <p
                        style={{
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: "0 0 20px 0",
                            fontFamily: "\'Poppins\', sans-serif",
                        }}
                    >
                        As a supplier focused exclusively on men's clothing fabrics,{" "}
                        <strong>Aurora Textiles</strong> bridges the gap between global
                        fabric brands and regional garment makers. We supply{" "}
                        <strong>John Cavendish fabrics</strong> to businesses looking for
                        authentic materials, flexible ordering, and long-term partnerships.
                    </p>
                    <p
                        style={{
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: "0 0 28px 0",
                            fontFamily: "\'Poppins\', sans-serif",
                        }}
                    >
                        <strong>Contact Aurora Textiles</strong> today to place your order
                        or request samples of our latest{" "}
                        <strong>John Cavendish suiting</strong> range.
                    </p>
                    {/* Button */}
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

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/john-3.webp"
                        alt="John Cavendish Commercial Fabrics"
                        style={{
                            width: "100%",
                            height: "420px",
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
                    alignItems: "stretch",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <img
                        src="/john-4.webp"
                        alt="FAQ Image"
                        style={{
                            width: "100%",
                            height: `${faqImgHeight}px`,
                            minHeight: "480px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                            transition: "height 0.4s ease",
                        }}
                    />
                </div>

                {/* Right — FAQ accordion 50% */}
                <div ref={faqColRef} style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "42px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            margin: "0 0 28px 0",
                            letterSpacing: "1px",
                        }}
                    >
                        FAQ
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    border: "1px solid #ddd",
                                    borderTop: i === 0 ? "1px solid #ddd" : "none",
                                    borderRadius: i === 0 ? "8px 8px 0 0" : i === faqs.length - 1 ? "0 0 8px 8px" : "0",
                                }}
                            >
                                {/* Question row */}
                                <div
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    onMouseEnter={() => setHoveredFaq(i)}
                                    onMouseLeave={() => setHoveredFaq(null)}
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
                                            fontSize: "17px",
                                            fontWeight: "700",
                                            color: openFaq === i
                                                ? "#b9972f"
                                                : hoveredFaq === i
                                                    ? "#070e46"
                                                    : "#0b18a1",
                                            margin: 0,
                                            lineHeight: "1.4",
                                            fontFamily: "'Poppins', sans-serif",
                                            transition: "color 0.2s ease",
                                            flex: 1,
                                        }}
                                    >
                                        {faq.question}
                                    </p>
                                    <span
                                        style={{
                                            fontSize: "22px",
                                            color: openFaq === i
                                                ? "#b9972f"
                                                : hoveredFaq === i
                                                    ? "#070e46"
                                                    : "#0b18a1",
                                            flexShrink: 0,
                                            fontWeight: "500",
                                            lineHeight: 1,
                                            transition: "color 0.2s ease",
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
                                                fontSize: "16px",
                                                color: "#333",
                                                lineHeight: "1.4",
                                                margin: "16px 0 0 0",
                                                fontFamily: "'Poppins', sans-serif",
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