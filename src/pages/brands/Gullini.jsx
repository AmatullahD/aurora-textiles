import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function GulliniPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT TYPES OF GEORGIA GULLINI FABRICS ARE AVAILABLE AT AURORA TEXTILES?",
            answer: "We offer a wide range of Georgia Gullini suit and blazer fabrics, including poly-wool blends, textured weaves, and self-checks—ideal for creating formal suits, trousers, and smart jackets.",
        },
        {
            question: "CAN I BUY GEORGIA GULLINI FABRICS IN BULK FOR TAILORING OR RESALE?",
            answer: "Yes, we offer bulk purchasing options for tailors, fashion houses, and resellers. Contact us for wholesale pricing and minimum order quantities.",
        },
        {
            question: "ARE GEORGIA GULLINI SUITING FABRICS SUITABLE FOR HIGH-END FORMALWEAR?",
            answer: "Absolutely. Georgia Gullini fabrics are crafted with European quality standards, making them ideal for premium formalwear, bespoke suits, and luxury occasionwear.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Georgia Gullini Fabric Supplier in Dubai | Aurora Textiles</title>
                <meta name="description" content="Buy Georgia Gullini premium fabrics wholesale in Dubai. Aurora Textiles supplies luxury Georgia Gullini suiting fabrics across UAE and GCC." />
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
                        GEORGIA GULLINI FABRICS
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Intro: Logo images left, text right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto",
                    padding: "40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "30px",
                }}
            >
                {/* LEFT SIDE */}
                <div
                    style={{
                        width: "50%",
                        position: "relative",
                        height: "420px",
                    }}
                >
                    {/* BACK IMAGE */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "20px",
                            left: "20px",
                            width: "250px",
                            height: "250px",
                            background: "#efefef",
                            border: "1px solid #ddd",
                        }}
                    >
                        <img
                            src="/georgia-gullini-1.webp"
                            alt="Georgia Gullini"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* FRONT IMAGE */}
                    <div
                        style={{
                            position: "absolute",
                            top: "0",
                            right: "20px",
                            width: "250px",
                            height: "250px",
                            background: "#efefef",
                            border: "1px solid #ddd",
                            zIndex: 2,
                        }}
                    >
                        <img
                            src="/georgia-gullini-1.webp"
                            alt="Georgia Gullini"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div
                    style={{
                        width: "50%",
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "48px",
                            lineHeight: "1.25",
                            color: "#233f8c",
                            margin: "0 0 25px 0",
                            textTransform: "uppercase",
                            fontWeight: "700",
                        }}
                    >
                        GEORGIA GULLINI FABRICS – PREMIUM SUITING
                        SOLUTIONS FROM AURORA TEXTILES
                    </h2>

                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: "1.9",
                            color: "#333",
                            margin: 0,
                        }}
                    >
                        At <strong>Aurora Textiles</strong>, we supply a refined
                        selection of <strong>Georgia Gullini suit</strong> and{" "}
                        <strong>blazer fabrics</strong>, trusted by tailors and
                        menswear brands across Dubai and the MENA region.
                        Known for their European-inspired quality and elegant
                        finish, Georgia Gullini fabrics are perfect for
                        formalwear, business attire, and premium occasionwear.
                    </p>
                </div>
            </section>


            {/* SECTION 2 — Suit Fabrics: text left, image right */}
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
                            marginBottom: "24px",
                            margin: "0 0 24px 0",
                        }}
                    >
                        GEORGIA GULLINI SUIT FABRICS
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
                        Our offering includes a variety of <strong>Georgia Gullini suiting fabrics</strong> known for:
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
                        <li style={{ marginBottom: "12px" }}>Sharp drape and structure</li>
                        <li style={{ marginBottom: "12px" }}>Breathable poly-wool blends</li>
                        <li style={{ marginBottom: "12px" }}>Easy tailoring and wrinkle resistance</li>
                        <li style={{ marginBottom: "12px" }}>A broad selection of classic and contemporary colors</li>
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
                        These suiting materials are ideal for creating full suits, trousers, and structured formal
                        pieces. Whether for seasonal collections or bespoke tailoring, Georgia Gullini fabrics deliver
                        both style and substance.
                    </p>
                </div>

                {/* Right: image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "460px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/gullini-2.webp"
                        alt="Georgia Gullini Suit Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 3 — Blazer Fabrics: image left, text right */}
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
                {/* Left: image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "540px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/gullini-3.webp"
                        alt="Georgia Gullini Blazer Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#1a2a6c",
                            textTransform: "uppercase",
                            lineHeight: "1.2",
                            marginBottom: "24px",
                            margin: "0 0 24px 0",
                        }}
                    >
                        GEORGIA GULLINI BLAZER FABRICS
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
                        Looking to create standout blazers or sport coats? Our{" "}
                        <strong>Georgia Gullini blazer fabrics</strong> include textured finishes, subtle checks, and
                        solid hues designed for smart casual and formal looks. The fabrics are engineered for comfort,
                        style retention, and long-term wear, suiting professionals and fashion-forward clients alike.
                    </p>
                </div>
            </section>

            {/* SECTION 4 — Why Source: text left, images right */}
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
                {/* Left: heading + bullet points + paragraph + button */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#1a2a6c",
                            textTransform: "uppercase",
                            lineHeight: "1.2",
                            marginBottom: "36px",
                            margin: "0 0 36px 0",
                        }}
                    >
                        WHY SOURCE GEORGIA GULLINI FROM AURORA TEXTILES?
                    </h2>

                    {[
                        "GENUINE GEORGIA GULLINI FABRICS ARE AVAILABLE FOR WHOLESALE",
                        "EXPERTISE IN MEN'S FORMALWEAR FABRIC SOURCING",
                        "COMPETITIVE PRICING AND CONSISTENT STOCK AVAILABILITY",
                        "BULK SUPPLY WITH SUPPORT FOR TAILORS, FASHION HOUSES & EXPORTERS",
                        "DELIVERY ACROSS DUBAI AND EXPORT OPTIONS THROUGHOUT MENA",
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
                                    fontSize: "13px",
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

                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            margin: "24px 0 32px 0",
                        }}
                    >
                        <strong>Aurora Textiles</strong> is more than just a supplier—we're a reliable sourcing partner
                        for those looking to craft standout menswear using trusted international brands like{" "}
                        <strong>Georgia Gullini</strong>.
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

                {/* Right: two fabric images stacked */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "520px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        flexShrink: 0,
                    }}
                >
                    {/* Top image: two fabric rolls side by side */}
                    <div
                        style={{
                            width: "100%",
                            height: "320px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="/gullini-4.webp"
                            alt="Georgia Gullini Fabric Rolls"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
                    {/* Bottom image: dark fabric close-up — positioned offset to the left */}
                    <div
                        style={{
                            width: "260px",
                            height: "290px",
                            overflow: "hidden",
                            alignSelf: "flex-end",
                        }}
                    >
                        <img
                            src="/gullini-5.webp"
                            alt="Georgia Gullini Dark Fabric"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
                    {/* Third image: dark check fabric with label */}
                    <div
                        style={{
                            width: "260px",
                            height: "290px",
                            overflow: "hidden",
                            alignSelf: "flex-start",
                            marginTop: "-180px",
                        }}
                    >
                        <img
                            src="/gullini-6.webp"
                            alt="Georgia Gullini Check Fabric"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
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
                {/* Left: fabric close-up image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "360px",
                        overflow: "hidden",
                        flexShrink: 0,
                    }}
                >
                    <img
                        src="/gullini-7.webp"
                        alt="Georgia Gullini Teal Fabric"
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
                            marginBottom: "30px",
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
                                        padding: "0 20px 20px 20px",
                                        fontFamily: "'Georgia', serif",
                                        fontSize: "15px",
                                        lineHeight: "1.8",
                                        color: "#333",
                                        borderTop: "1px solid #eee",
                                        paddingTop: "16px",
                                    }}
                                >
                                    <p style={{ margin: 0 }}>
                                        {faq.answer.split("Georgia Gullini suit").map((part, i) =>
                                            i === 0 ? (
                                                part
                                            ) : (
                                                <span key={i}>
                                                    <strong>Georgia Gullini suit</strong>
                                                    {part.split("blazer fabrics").map((p2, j) =>
                                                        j === 0 ? p2 : <span key={j}><strong>blazer fabrics</strong>{p2}</span>
                                                    )}
                                                </span>
                                            )
                                        )}
                                    </p>
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