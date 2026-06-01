import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function NemssisPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT TYPES OF NEMSSIS SHIRTING FABRICS DOES AURORA TEXTILES OFFER?",
            answer:
                "We stock Nemssis shirting fabrics in popular blends like 100% cotton, poly-cotton, linen, and tencel. They are available in printed, plain, and jacquard variants.",
        },
        {
            question: "WHAT MAKES NEMSSIS SHIRTING A GOOD CHOICE FOR INSTITUTIONAL OR COMMERCIAL BUYERS?",
            answer:
                "Nemssis shirting fabrics are designed for consistent quality and high-volume production. They are wrinkle-resistant, easy to maintain, and ideal for uniforms, corporate shirts, and retail collections.",
        },
        {
            question: "ARE NEMSSIS SHIRTING FABRICS SUITABLE FOR MEN'S FORMALWEAR AND DAILY SHIRTS?",
            answer:
                "Yes, Nemssis fabrics are crafted for both formal and daily-wear applications. Their smooth finish and durable construction make them a preferred choice for tailors and garment brands alike.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Nemssis Ethnic Fabric Supplier in Dubai | Aurora Textiles</title>
                <meta name="description" content="Explore Nemssis ethnic fabric collections at Aurora Textiles Dubai. Wholesale supplier of Shiddat, Sanskriti, Raag Resham, Zarista and Nawabi collections." />
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
                        NEMSSIS FABRICS
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Intro: Nemssis logo left, heading + text right */}
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
                {/* Left: Nemssis brand logo */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "420px",
                        height: "300px",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/nemssis-1.webp"
                        alt="Nemssis Logo"
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
                        NEMSSIS FABRICS – MEN'S SHIRTING SOLUTIONS BY AURORA TEXTILES
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
                        At <strong>Aurora Textiles</strong>, we supply premium <strong>Nemssis fabrics</strong> tailored
                        exclusively for men's fashion. From casual to evening wear to office-ready shirts, our Nemssis
                        shirting fabrics are designed to meet the evolving needs of tailors, retailers, and fashion brands
                        across Dubai and the MENA region.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — Nemssis Shirting Fabric: text left, image right */}
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
                {/* Left: heading + paragraphs + bullet list */}
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
                        NEMSSIS SHIRTING FABRIC
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
                        <strong>Nemssis shirting fabrics</strong> are crafted with a perfect balance of form and
                        function. These fabrics are known for their smooth finish, smart appearance, and long-lasting
                        durability. Whether you're designing workwear or daily-wear shirts, Nemssis shirting delivers on
                        both aesthetics and practicality.
                    </p>
                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            marginBottom: "16px",
                            fontWeight: "700",
                        }}
                    >
                        Key Features:
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
                        <li style={{ marginBottom: "10px" }}>
                            Available in <strong>cotton, polycotton</strong>, and <strong>lyocell blends</strong>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            Designed for <strong>wrinkle resistance</strong>, easy care, and all-day comfort
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            Offered in <strong>solids, stripes, checks, and minimal textures</strong>
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            Suitable for both <strong>mass production</strong> and bespoke tailoring
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
                        From corporate uniforms to semi-casual staples, Nemssis shirting fabric brings versatility that
                        garment manufacturers rely on.
                    </p>
                </div>

                {/* Right: man in light blue shirt image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "480px",
                        height: "580px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/nemssis-2.webp"
                        alt="Nemssis Shirting Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 3 — Range of Nemssis: image left, text right */}
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
                {/* Left: man in royal blue shirt image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "480px",
                        height: "580px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/nemssis-3.webp"
                        alt="Range of Nemssis Shirting Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: heading + blends + design options + paragraph */}
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
                        RANGE OF NEMSSIS SHIRTING FABRIC
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
                        We exclusively stock <strong>Nemssis shirting fabrics</strong> in a range of blends and finishes
                        that include:
                    </p>
                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            fontWeight: "700",
                            marginBottom: "10px",
                        }}
                    >
                        Available Blends:
                    </p>
                    <ul
                        style={{
                            listStyle: "disc",
                            paddingLeft: "24px",
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            marginBottom: "20px",
                        }}
                    >
                        <li style={{ marginBottom: "8px" }}>100% Cotton</li>
                        <li style={{ marginBottom: "8px" }}>Poly-Cotton</li>
                        <li style={{ marginBottom: "8px" }}>Linen Blends</li>
                        <li style={{ marginBottom: "8px" }}>Tencel Blends</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            fontWeight: "700",
                            marginBottom: "10px",
                        }}
                    >
                        Design Options:
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
                        <li style={{ marginBottom: "8px" }}>Printed Shirting Fabrics</li>
                        <li style={{ marginBottom: "8px" }}>Plain Shirting Fabrics</li>
                        <li style={{ marginBottom: "8px" }}>Jacquard Shirting Fabrics</li>
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
                        Our collection is suitable for year-round wear and supports large-scale production for retail or
                        institutional use. Whether you're outfitting a fashion label or sourcing uniforms, Aurora Textiles
                        offers consistent stock and timely delivery.
                    </p>
                </div>
            </section>

            {/* SECTION 4 — Smart Shirting Solutions: full-width centered text banner */}
            <section
                style={{
                    width: "100%",
                    padding: "60px 40px",
                    boxSizing: "border-box",
                    textAlign: "center",
                    marginBottom: "80px",
                }}
            >
                <h2
                    style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        fontSize: "36px",
                        fontWeight: "700",
                        color: "#1a2a6c",
                        textTransform: "uppercase",
                        lineHeight: "1.2",
                        margin: "0 auto 28px auto",
                        maxWidth: "900px",
                    }}
                >
                    SMART SHIRTING SOLUTIONS FOR MODERN MEN
                </h2>
                <p
                    style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: "16px",
                        lineHeight: "1.8",
                        color: "#333",
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}
                >
                    Nemssis shirting fabrics are designed to meet modern men's style needs, providing a great balance of
                    comfort, structure, and durability. These fabrics are known for their easy maintenance and are ideal
                    for uniforms, daily shirts, and semi-formal wear. With both classic and contemporary patterns,
                    Nemssis blends practicality with elegance.
                </p>
            </section>

            {/* SECTION 5 — Why Source Nemssis: text+bullets left, image right */}
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
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#1a2a6c",
                            textTransform: "uppercase",
                            lineHeight: "1.2",
                            margin: "0 0 36px 0",
                        }}
                    >
                        WHY SOURCE NEMSSIS FABRICS FROM AURORA TEXTILES?
                    </h2>

                    {[
                        "VERIFIED NEMSSIS FABRIC SUPPLIER IN DUBAI",
                        "WE SPECIALIZE IN HIGH-QUALITY SHIRTING FABRICS TAILORED FOR MEN'S FASHION AND APPAREL.",
                        "REGULAR STOCK AVAILABILITY FOR BULK AND RECURRING ORDERS",
                        "TRUSTED BY TAILORS, EXPORTERS, AND MENSWEAR BRANDS",
                        "EXPORT SUPPORT ACROSS UAE AND MENA COUNTRIES",
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
                            <span
                                style={{
                                    fontSize: "22px",
                                    color: "#b8860b",
                                    flexShrink: 0,
                                    lineHeight: "1.3",
                                }}
                            >
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

                {/* Right: Nemssis fabric folded image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "560px",
                        height: "580px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/nemssis-4.webp"
                        alt="Nemssis Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 6 — FAQ: image left, accordion right */}
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
                {/* Left: striped fabric close-up image */}
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
                        src="/nemssis-5.webp"
                        alt="Nemssis Striped Fabric"
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