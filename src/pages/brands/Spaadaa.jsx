import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function SpaadaaPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHY CHOOSE SPAADAA SHIRTING FABRICS FROM AURORA TEXTILES?",
            answer:
                "Spaadaa shirting fabrics are known for their exceptional comfort, easy maintenance, and professional appeal—making them a top choice for men's shirting needs across industries.",
        },
        {
            question: "DO SPAADAA SHIRTING FABRICS COME IN A VARIETY OF STYLES?",
            answer:
                "Yes, we offer Spaadaa shirting fabrics in a wide variety of styles including poly-cotton blends, tencel blends, printed shirtings, and jacquard and textured finishes to suit every fashion and functional need.",
        },
        {
            question: "CAN I PLACE A BULK ORDER FOR SPAADAA SHIRTING FABRICS?",
            answer:
                "Absolutely. Aurora Textiles supplies Spaadaa fabrics in bulk to retail brands, wholesalers, and corporate tailoring units across Dubai and MENA. Contact us for wholesale pricing and delivery options.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Spaadaa Fabric Supplier in Dubai | Aurora Textiles</title>
                <meta name="description" content="Shop Spaadaa fabrics wholesale in Dubai. Aurora Textiles is your trusted supplier of Spaadaa fabric collections across UAE and GCC." />
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
                        SPAADAA FABRICS
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Intro: Spaadaa logo left, heading + text right */}
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
                {/* Left: Spaadaa brand logo */}
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
                        src="/spaadaa-1.webp"
                        alt="Spaadaa Logo"
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
                            textAlign: "center",
                        }}
                    >
                        SPAADAA SHIRTING FABRICS
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
                        Aurora Textiles is a leading supplier of men's shirting fabrics in Dubai, specializing in
                        premium brands like <strong>Spaadaa</strong>. We offer a carefully curated selection of{" "}
                        <strong>Spaadaa shirting fabrics</strong>, known for their comfort, finish, and suitability for
                        everyday and business wear. Our fabrics are ideal for designers, tailors, and uniform
                        manufacturers seeking consistent quality and commercial-grade durability.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — Designed for Men's Shirting Needs: text left, image right */}
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
                {/* Left: heading + paragraph */}
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
                        DESIGNED FOR MEN'S SHIRTING NEEDS
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
                        At Aurora Textiles, we carry <strong>Spaadaa shirting fabrics</strong>, ensuring a focused
                        inventory that meets the demands of men's fashion. These fabrics are available in various blends
                        including poly-cotton and cotton-linen-like textures. They are easy to stitch, breathable, and
                        ideal for shirts meant for formal or semi-formal use.
                    </p>
                </div>

                {/* Right: man in dark checked suit image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "460px",
                        height: "480px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/spaadaa-2.webp"
                        alt="Designed for Men's Shirting Needs"
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

            {/* SECTION 3 — Material Options & Designs: image left, text right */}
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
                {/* Left: man in grey suit on blue background image */}
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
                        src="/spaadaa-3.webp"
                        alt="Material Options for Spaadaa Shirtings"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: heading + bullet list + paragraph */}
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
                        MATERIAL OPTIONS & DESIGNS FOR SPAADAA SHIRTINGS
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            marginBottom: "16px",
                        }}
                    >
                        Our Spaadaa shirting range includes:
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
                        <li style={{ marginBottom: "10px" }}>Poly-Cotton Blends</li>
                        <li style={{ marginBottom: "10px" }}>Tencel Blends</li>
                        <li style={{ marginBottom: "10px" }}>Cotton-Feel Poly Blends</li>
                        <li style={{ marginBottom: "10px" }}>Printed Shirtings</li>
                        <li style={{ marginBottom: "10px" }}>Jacquard and Textured Finishes</li>
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
                        These fabrics are known for their fine finish, consistent dyeing, and easy maintenance, making
                        them an excellent choice for both tailored shirts and mass production.
                    </p>
                </div>
            </section>

            {/* SECTION 4 — Sourcing Spaadaa with Aurora: text + button left, fabric image right */}
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
                {/* Left: heading + paragraph + button */}
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
                        SOURCING SPAADAA WITH AURORA TEXTILES
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            color: "#333",
                            marginBottom: "32px",
                        }}
                    >
                        Aurora Textiles supplies <strong>Spaadaa shirting fabrics</strong> across Dubai and exports to
                        MENA countries. We work with retail brands, wholesalers, and corporate tailoring units to ensure
                        timely delivery and bulk availability. As a trusted textile partner, we prioritize fabric
                        reliability and responsive service.
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

                {/* Right: dark Spaadaa fabric roll close-up image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "560px",
                        height: "400px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/spaadaa-4.webp"
                        alt="Spaadaa Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
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
                {/* Left: dark textured fabric close-up image */}
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
                        src="/spaadaa-5.webp"
                        alt="Spaadaa Fabric Close-up"
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