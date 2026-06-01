import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function ZaristaPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT TYPES OF GARMENTS CAN BE MADE FROM ZARISTA FABRICS?",
            answer:
                "Zarista fabrics are ideal for men's kurtas, sherwanis, Indo-western jackets, and festive ethnic wear.",
        },
        {
            question: "ARE ZARISTA BY NEMSSIS FABRICS AVAILABLE UNSTITCHED?",
            answer:
                "Yes, all Zarista fabrics are available in unstitched format, perfect for bespoke tailoring and custom garment production.",
        },
        {
            question: "CAN I BULK ORDER ZARISTA ETHNIC FABRICS?",
            answer:
                "Absolutely. Aurora Textiles fulfils bulk orders for Zarista ethnic fabrics across Dubai and the MENA region with consistent quality and timely delivery.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Zarista by Nemssis | Ethnic Fabric Dubai | Aurora Textiles</title>
                <meta name="description" content="Shop Zarista by Nemssis at Aurora Textiles Dubai. Exclusive ethnic fabric collection for men's festive and traditional wear. Wholesale supplier in UAE." />
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
                        ZARISTA BY NEMSSIS
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Brand Intro: Logo left, Heading + Two paragraphs right */}
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

                {/* Right: Heading + Two paragraphs */}
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
                        Zarista By Nemssis – Ethnic Elegance For Men's Fashion
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            marginBottom: "20px",
                        }}
                    >
                        <strong>Aurora Textiles</strong> proudly presents{" "}
                        <strong>Zarista by Nemssis</strong>, a distinguished collection of
                        ethnic fabrics crafted exclusively for men's traditional wear. Known
                        for its bold aesthetics and regal textures, Zarista blends
                        time-honored heritage with contemporary appeal—making it an
                        excellent choice for{" "}
                        <strong>kurtas, sherwanis, ethnic jackets</strong>, and festive
                        menswear.
                    </p>
                    <p
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: 0,
                        }}
                    >
                        As a trusted fabric supplier in{" "}
                        <strong>Dubai and the wider MENA region</strong>, Aurora Textiles
                        offers consistent supply, quality assurance, and bulk order
                        fulfillment for fashion studios, tailoring units, and retailers
                        seeking original Nemssis ethnic fabric collections.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — Refined Ethnic Fabrics: Text + bullets + Contact Us left, Image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
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
                        Refined Ethnic Fabrics For Every Occasion
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
                        <strong>Zarista ethnics by Nemssis</strong> are specially designed
                        to capture the richness of Indian festive culture. With rich color
                        palettes, jacquard weaves, and traditional motifs, this line is
                        well-suited for:
                    </p>
                    <ul
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "2.4",
                            paddingLeft: "24px",
                            marginBottom: "24px",
                        }}
                    >
                        <li>Designer Kurtas &amp; Pathani Suits</li>
                        <li>Grand Sherwanis for Weddings &amp; Functions</li>
                        <li>Statement-Making Jackets &amp; Waistcoats</li>
                        <li>Customised Festive Outfits</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            marginBottom: "36px",
                        }}
                    >
                        These fabrics are ideal for tailors and designers creating high-end
                        ethnic wear that demands elegance and durability.
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
                        height: "620px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/zarista-1.jpg"
                        alt="Refined Ethnic Fabrics"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 3 — Why Choose Zarista: Image left, Heading + bullets right */}
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
                        height: "560px",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/zarista-2.jpg"
                        alt="Why Choose Zarista"
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
                        }}
                    >
                        Why Choose Zarista Fabrics From Aurora Textiles?
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
                        As one of the leading textile suppliers in Dubai, Aurora Textiles
                        ensures:
                    </p>
                    <ul
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "2.4",
                            paddingLeft: "24px",
                            margin: 0,
                        }}
                    >
                        <li>
                            Original Nemssis fabric collections like <strong>Zarista</strong>
                        </li>
                        <li>Unstitched ethnic fabrics tailored for men's clothing</li>
                        <li>Quick access to seasonal festive lines</li>
                        <li>Expert guidance for fabric selection and bulk buying</li>
                        <li>Delivery and export options across the UAE and MENA region</li>
                    </ul>
                </div>
            </section>

            {/* SECTION 4 — Designed With Quality: Text left, Image right */}
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
                        Designed With Quality For Celebration
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
                        The <strong>Zarista by Nemssis</strong> range includes fabrics with
                        intricate detailing, value-added finishes, and smooth drape—perfect
                        for ceremonial menswear. Whether you're a boutique, a designer, or a
                        wholesaler, sourcing from Aurora Textiles ensures you get authentic,
                        high-performance fabrics suited for premium traditional fashion.
                    </p>
                </div>

                {/* Right: Image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "400px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/zarista-3.webp"
                        alt="Designed With Quality"
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
                        height: "460px",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/zarista-4.webp"
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
                                    background: openFaq === index ? "#f9f6ee" : "#fff",
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
                                        color: openFaq === index ? "#8b8000" : "#1a2657",
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

            {/* FOOTER */}
            <Footer />
            <ScrollToTop />
        </div>
    );
}