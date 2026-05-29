import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function ReliancePage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT TYPES OF RELIANCE FABRICS DOES AURORA TEXTILES CARRY?",
            answer: (
                <>
                    We stock <strong>Reliance poly-wool suit fabrics</strong> in various weaves, finishes, and blend
                    ratios, along with a line of <strong>100% polyester fabric</strong> specifically for{" "}
                    <strong>Dishdasha and Thawb tailoring</strong>.
                </>
            ),
        },
        {
            question: "CAN I GET SPECIFIC POLY-WOOL BLENDS OR STRETCH FABRICS FROM RELIANCE AT AURORA?",
            answer: (
                <>
                    Yes, we carry multiple blend ratios and weave types including stretch and non-stretch options. Contact
                    us to discuss your specific requirements and available stock.
                </>
            ),
        },
        {
            question: "DO YOU SUPPLY RELIANCE FABRICS IN BULK FOR TAILORS AND CLOTHING BRANDS?",
            answer: (
                <>
                    Absolutely. We supply Reliance fabrics in bulk to tailors, fashion houses, and clothing brands across
                    Dubai and the MENA region. Reach out for wholesale pricing and minimum order details.
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
                        RELIANCE FABRICS
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Intro: Reliance logo left, text right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                }}
            >
                {/* Left: Reliance brand logo image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "420px",
                        height: "320px",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/reliance-1.webp"
                        alt="Reliance Industries Limited Logo"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: heading + paragraph */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a2a6c",
                            textTransform: "uppercase",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        WHOLESALE RELIANCE FABRICS
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            margin: 0,
                        }}
                    >
                        At <strong>Aurora Textiles</strong>, we are reliable suppliers of{" "}
                        <strong>Reliance poly-wool suiting fabrics</strong> in Dubai, serving tailors, garment producers,
                        and menswear brands across the UAE with consistently high-quality fabric solutions. With a focus
                        on <strong>men's suiting</strong>, we help businesses source high-quality, cost-effective textiles
                        that are made for performance and appeal.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — Premium Poly-Wool: text left, image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left: text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#1a2a6c",
                            textTransform: "uppercase",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        PREMIUM POLY-WOOL SUITING FROM RELIANCE
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            marginBottom: "20px",
                        }}
                    >
                        Our stock includes a curated selection of <strong>Reliance poly-wool suitings</strong>, known for
                        their fine finish, smooth texture, and versatile usage. These fabrics are ideal for tailoring
                        men's business suits, blazers, and formalwear with superior drape and durability.
                    </p>
                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            marginBottom: "16px",
                        }}
                    >
                        We offer variations across:
                    </p>
                    <ul
                        style={{
                            listStyle: "disc",
                            paddingLeft: "24px",
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            marginBottom: "24px",
                        }}
                    >
                        <li style={{ marginBottom: "12px" }}>
                            <strong>Blend ratios</strong> (wool-dominant or polyester-dominant)
                        </li>
                        <li style={{ marginBottom: "12px" }}>
                            <strong>Different weaves</strong> (twill, plain, textured)
                        </li>
                        <li style={{ marginBottom: "12px" }}>
                            <strong>Stretch and non-stretch options</strong>
                        </li>
                        <li style={{ marginBottom: "12px" }}>
                            <strong>Multiple weights and fineness levels</strong>
                        </li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            margin: 0,
                        }}
                    >
                        <strong>Finishing options</strong> suited for various tailoring needs
                    </p>
                </div>

                {/* Right: image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "560px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/reliance-2.webp"
                        alt="Premium Poly-Wool Suiting"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 3 — 100% Polyester Dishdasha: two images left, text right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                }}
            >
                {/* Left: single image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "600px",
                        height: "320px",
                        flexShrink: 0,
                        overflow: "hidden",
                        borderRadius: "8px",
                    }}
                >
                    <img
                        src="/reliance-3.png"
                        alt="Reliance Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>


                {/* Right: heading + paragraph */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#1a2a6c",
                            textTransform: "uppercase",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        100% POLYESTER FABRIC FOR DISHDASHA
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            margin: 0,
                        }}
                    >
                        In addition to poly-wool, we carry a <strong>dedicated line of 100% polyester fabrics</strong>{" "}
                        from Reliance—commonly used for <strong>Thawb tailoring</strong>. These fabrics are lightweight,
                        easy to maintain, and suited for traditional menswear in the Gulf region.
                    </p>
                </div>
            </section>

            {/* SECTION 4 — Why Choose Aurora: text+bullets left, image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                }}
            >
                {/* Left: heading + bullets + button */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a2a6c",
                            textTransform: "uppercase",
                            lineHeight: "1.2",
                            margin: "0 0 36px 0",
                        }}
                    >
                        WHY CHOOSE AURORA TEXTILES FOR RELIANCE FABRIC?
                    </h2>

                    {[
                        "FOCUSED STOCK: ONLY THE MOST PRACTICAL RELIANCE POLY-WOOL AND POLYESTER OPTIONS",
                        "TRUSTED SUPPLIER FOR DUBAI AND MENA REGION BULK BUYERS",
                        "COMPETITIVE WHOLESALE PRICING AND RELIABLE DELIVERY TIMELINES",
                        "MEN'S FABRICS ONLY—NO MIXED INVENTORY, NO CONFUSION",
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "14px",
                                marginBottom: "20px",
                            }}
                        >
                            <span style={{ fontSize: "22px", color: "#b8860b", flexShrink: 0, lineHeight: "1.3" }}>
                                ✦
                            </span>
                            <p
                                style={{
                                    fontFamily: "'Cinzel Decorative', serif",
                                    fontSize: "19px",
                                    fontWeight: "700",
                                    color: "#1a2a6c",
                                    textTransform: "uppercase",
                                    lineHeight: "1.5",
                                    margin: 0,
                                    letterSpacing: "0.5px",
                                }}
                            >
                                {item}
                            </p>
                        </div>
                    ))}

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

                {/* Right: fabric swatches image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "560px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/reliance-4.webp"
                        alt="Reliance Fabric Swatches"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "14px",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 5 — FAQ: image left, accordion right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left: colourful layered fabric image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "500px",
                        overflow: "hidden",
                        flexShrink: 0,
                        borderRadius: "8px",
                    }}
                >
                    <img
                        src="/reliance-5.webp"
                        alt="Reliance Colourful Fabrics"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: FAQ accordion */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "32px",
                            fontWeight: "700",
                            color: "#1a2a6c",
                            margin: "0 0 30px 0",
                            borderBottom: "2px solid #b8860b",
                            paddingBottom: "8px",
                            display: "inline-block",
                        }}
                    >
                        FAQ
                    </h2>

                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            style={{
                                border: "1px solid #ddd",
                                marginBottom: "12px",
                            }}
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "18px 20px",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    gap: "12px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Cinzel Decorative', serif",
                                        fontSize: "13px",
                                        fontWeight: "700",
                                        color: "#b8860b",
                                        textTransform: "uppercase",
                                        lineHeight: "1.4",
                                        letterSpacing: "0.4px",
                                    }}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    style={{
                                        fontSize: "22px",
                                        color: "#1a2a6c",
                                        fontWeight: "300",
                                        flexShrink: 0,
                                        lineHeight: 1,
                                    }}
                                >
                                    {openFaq === idx ? "−" : "+"}
                                </span>
                            </button>

                            {openFaq === idx && (
                                <div
                                    style={{
                                        padding: "16px 20px 20px 20px",
                                        fontFamily: "'Georgia', serif",
                                        fontSize: "15px",
                                        lineHeight: "1.8",
                                        color: "#333",
                                        borderTop: "1px solid #eee",
                                    }}
                                >
                                    <p style={{ margin: 0 }}>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
            <ScrollToTop />
        </div>
    );
}