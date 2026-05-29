import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function SanskritiPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT IS UNIQUE ABOUT SANSKRITI ETHNIC FABRICS FOR MEN?",
            answer:
                "These fabrics feature timeless prints and versatile textures crafted especially for ethnic menswear. They combine tradition with modern wearability.",
        },
        {
            question: "DO YOU OFFER CUSTOMIZATION OR GUIDANCE ON SELECTION?",
            answer:
                "Yes, our team at Aurora Textiles provides expert guidance on fabric selection, customization options, and design recommendations tailored to your specific requirements.",
        },
        {
            question: "ARE SANSKRITI FABRICS AVAILABLE FOR EXPORT OR LARGE-SCALE RETAIL?",
            answer:
                "Absolutely. We supply Sanskriti by Nemssis fabrics across the UAE and MENA region, and support large-scale retail and export orders with consistent quality and timely logistics.",
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
                        SANSKRITI BY NEMSSIS
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Brand Intro: Logo + Description */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Left: Logo */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "340px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="/nemssis-1.webp"
                        alt="Nemssis Logo"
                        style={{
                            width: "100%",
                            maxWidth: "320px",
                            objectFit: "contain",
                        }}
                    />
                </div>

                {/* Right: Heading + Description */}
                <div style={{ flex: "1 1 400px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a2657",
                            lineHeight: "1.25",
                            marginBottom: "24px",
                            marginTop: 0,
                        }}
                    >
                        Sanskriti Ethnic By Nemssis – Supplied By Aurora Textiles, Dubai
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: 0,
                        }}
                    >
                        At Aurora Textiles, we bring you{" "}
                        <strong>Sanskriti by Nemssis</strong>, a thoughtfully curated line
                        of men's ethnic fabrics that blend heritage with functionality.
                        Developed for today's modern yet culturally rooted wardrobe,
                        Sanskriti fabrics celebrate craftsmanship through elegant textures,
                        statement prints, and versatile fabric finishes. As a trusted ethnic
                        fabric supplier in Dubai, we ensure that every meter you receive is
                        suitable for both bespoke tailoring and high-volume production.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — Ethnic Print Fabrics: Text left, Image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Left: Text */}
                <div style={{ flex: "1 1 400px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a2657",
                            lineHeight: "1.25",
                            marginBottom: "24px",
                            marginTop: 0,
                            textTransform: "uppercase",
                        }}
                    >
                        Ethnic Print Fabrics For Elegant Occasions
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            marginBottom: "36px",
                        }}
                    >
                        <strong>Sanskriti ethnic print fabrics</strong> reflect the refined
                        taste of men who value subtlety and style in their traditional wear.
                        These prints are inspired by regional patterns, detailed but
                        wearable, designed to bring visual richness to kurtas, ethnic
                        jackets, and semi-formal menswear. With breathable fabric options
                        and color palettes suited for every festive mood, this line is a
                        go-to for ethnic elegance.
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

                {/* Right: Image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "560px",
                        height: "480px",
                        borderRadius: "0px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/sanskriti-1.webp"
                        alt="Ethnic Print Fabrics"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 3 — Fabric Types & Finish Options: Image left, Text right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Left: Image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "440px",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/sanskriti-2.webp"
                        alt="Fabric Types"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: Text */}
                <div style={{ flex: "1 1 400px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a2657",
                            lineHeight: "1.25",
                            marginBottom: "20px",
                            marginTop: 0,
                            textTransform: "uppercase",
                        }}
                    >
                        Fabric Types & Finish Options
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            marginBottom: "16px",
                        }}
                    >
                        Sanskriti by Nemssis is available in a well-balanced range of:
                    </p>
                    <ul
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "2",
                            paddingLeft: "24px",
                            marginBottom: "24px",
                        }}
                    >
                        <li>Lightweight Ethnic Dress Fabrics (Unstitched)</li>
                        <li>Subtle Jacquards and Printed Blends</li>
                        <li>Poly-viscose, Poly-modal, and Comfort-Soft Finishes</li>
                        <li>Drapable Blends Designed for Movement and Fit</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: 0,
                        }}
                    >
                        From groomwear to event-ready kurtas, these fabrics are cut to meet
                        the expectations of designers and tailors looking for reliable ethnic
                        material.
                    </p>
                </div>
            </section>

            {/* SECTION 4 — What Sets Aurora Apart: Text left, Image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Left: Text */}
                <div style={{ flex: "1 1 400px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a2657",
                            lineHeight: "1.25",
                            marginBottom: "24px",
                            marginTop: 0,
                        }}
                    >
                        What Sets Aurora Textiles Apart?
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: 0,
                        }}
                    >
                        We don't just stock fabrics—we partner with fashion-forward clients
                        across the UAE and MENA region to provide reliable sourcing for
                        brands, tailors, and retailers. Our supply of{" "}
                        <strong>Sanskriti by Nemssis</strong> ensures access to consistent
                        quality, trend-aligned designs, and logistics you can count on for
                        your seasonal or ongoing ethnicwear needs.
                    </p>
                </div>

                {/* Right: Image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "560px",
                        height: "380px",
                        borderRadius: "0px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/sanskriti-3.webp"
                        alt="Aurora Textiles"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 5 — FAQ: Image left, Accordion right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto 60px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Left: Image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "500px",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/sanskriti-4.webp"
                        alt="FAQ Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: FAQ Accordion */}
                <div style={{ flex: "1 1 400px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a2657",
                            marginBottom: "32px",
                            marginTop: 0,
                            borderBottom: "3px solid #1a2657",
                            paddingBottom: "8px",
                            display: "inline-block",
                        }}
                    >
                        FAQ_
                    </h2>

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid #d0d0d0",
                                marginBottom: "16px",
                                borderRadius: "4px",
                                overflow: "hidden",
                            }}
                        >
                            <button
                                onClick={() =>
                                    setOpenFaq(openFaq === index ? -1 : index)
                                }
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "18px 20px",
                                    background: "#fff",
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
                                        color: "#1a2657",
                                        lineHeight: "1.4",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.3px",
                                    }}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    style={{
                                        flexShrink: 0,
                                        fontSize: "22px",
                                        color: openFaq === index ? "#1a2657" : "#8b8000",
                                        fontWeight: "300",
                                        lineHeight: 1,
                                    }}
                                >
                                    {openFaq === index ? "−" : "+"}
                                </span>
                            </button>

                            {openFaq === index && (
                                <div
                                    style={{
                                        padding: "0 20px 20px 20px",
                                        background: "#fff",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily: "'Cinzel Decorative', serif",
                                            fontSize: "14px",
                                            color: "#444",
                                            lineHeight: "1.8",
                                            margin: 0,
                                        }}
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* LAST LINE before Footer */}
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "24px 20px 48px 20px",
                    boxSizing: "border-box",
                }}
            >
                <p
                    style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        fontSize: "15px",
                        color: "#333",
                        margin: 0,
                        lineHeight: "1.8",
                    }}
                >
                    Get in touch with Aurora Textiles to supply Sanskriti by Nemssis ethnic fabrics—crafted for refined tradition and modern versatility.
                </p>
            </div>

            {/* FOOTER */}
            <Footer />
            <ScrollToTop />
        </div>
    );
}