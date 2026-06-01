import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";


export default function ShiddatPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT IS SHIDDAT BY NEMSSIS?",
            answer:
                "Shiddat is an ethnic fabric line by Nemssis, tailored for men's traditional clothing such as kurtas, sherwanis, and festive jackets.",
        },
        {
            question: "ARE THE SHIDDAT FABRICS AVAILABLE UNSTITCHED?",
            answer:
                "Yes, all Shiddat fabrics are available in unstitched format, making them ideal for bespoke tailoring and custom garment production.",
        },
        {
            question: "DO YOU OFFER BULK ORDERS FOR ETHNIC DRESS FABRICS?",
            answer:
                "Absolutely. Aurora Textiles supplies Shiddat ethnic dress fabrics in bulk to tailoring units, garment stores, and designers across Dubai and the MENA region.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Shiddat by Nemssis | Ethnic Fabric Dubai | Aurora Textiles</title>
                <meta name="description" content="Shop Shiddat by Nemssis at Aurora Textiles Dubai. Premium men's ethnic fabric collection available wholesale across UAE and GCC." />
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
                        SHIDDAT BY NEMSSIS
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Brand Intro: Logo left, Heading + Text right */}
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
                        Shiddat By Nemssis – Supplied By Aurora Textiles, Dubai
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
                        Aurora Textiles proudly offers{" "}
                        <strong>Shiddat Ethnic by Nemssis</strong>, a refined collection
                        of ethnic dress fabrics crafted exclusively for men's traditional
                        wear. Designed for cultural celebrations, weddings, and formal
                        ethnic occasions, these fabrics reflect the rich textile heritage
                        of South Asia with a contemporary flair. As a reliable fabric
                        supplier in Dubai, we ensure original quality and timely delivery
                        for brands, tailors, and retail stores.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — Ethnic Print Fabrics for Men's Wear: Text left, Image right */}
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
                        Ethnic Print Fabrics For Men's Wear
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
                        The <strong>Shiddat by Nemssis</strong> range is focused on men's
                        ethnic garments such as kurtas, sherwanis, jackets, and festive
                        shirts. Each fabric features vibrant ethnic prints, jacquard
                        patterns, or subtle textures that bring cultural depth to modern
                        silhouettes. These materials are available in easy-to-stitch
                        formats, perfect for designers and tailoring professionals.
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
                        width: "500px",
                        height: "420px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/shiddat-2.png"
                        alt="Ethnic Print Fabrics for Men"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 3 — Available Ethnic Fabric Types: Image left, Text right */}
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
                        width: "520px",
                        height: "560px",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/shiddat-3.webp"
                        alt="Available Ethnic Fabric Types"
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
                        Available Ethnic Fabric Types And Styles
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
                        Aurora Textiles supplies the Shiddat ethnic collection in a variety
                        of blends and finishes suitable for unstitched garments:
                    </p>
                    <ul
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "2.2",
                            paddingLeft: "24px",
                            marginBottom: "24px",
                        }}
                    >
                        <li>Ethnic Print Fabrics</li>
                        <li>Light to Mid-Weight Blended Fabrics</li>
                        <li>Subtle Jacquard and Textured Weaves</li>
                        <li>Festive Embroidery Options (based on design)</li>
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
                        With colors ranging from earthy neutrals to festive jewel tones,
                        these fabrics give you the flexibility to create statement ethnic
                        outfits with comfort and style.
                    </p>
                </div>
            </section>

            {/* SECTION 4 — Why Choose Aurora Textiles: Text left, Image right */}
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
                        Why Choose Aurora Textiles For Shiddat By Nemssis?
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
                        We cater to the growing demand for men's ethnic wear by offering{" "}
                        <strong>Shiddat ethnic dress fabrics</strong> in bulk quantities to
                        tailoring units, garment stores, and designers across Dubai and the
                        MENA region. Our commitment to quality, reliable stock, and
                        personalized service makes us the go-to fabric partner for premium
                        men's ethnic fabrics.
                    </p>
                </div>

                {/* Right: Image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "500px",
                        height: "380px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/shiddat-4.webp"
                        alt="Why Choose Aurora Textiles"
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
                        width: "520px",
                        height: "540px",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/shiddat-5.webp"
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