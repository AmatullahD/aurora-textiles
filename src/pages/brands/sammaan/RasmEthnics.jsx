import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function RasmEthnicsPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT TYPES OF GARMENTS CAN BE MADE FROM RASM BY SAMMAAN FABRICS?",
            answer:
                "These fabrics are perfect for men's ethnic garments like kurtas, sherwanis, jackets, and festive Indo-western outfits.",
        },
        {
            question: "ARE THESE FABRICS AVAILABLE IN BULK FOR TAILORING BUSINESSES?",
            answer:
                "Yes, Aurora Textiles offers bulk supply of Rasm Ethnic fabrics for tailoring businesses, wholesalers, and fashion retailers across Dubai and the MENA region.",
        },
        {
            question: "ARE RASM FABRICS PRE-STITCHED OR UNSTITCHED?",
            answer:
                "All Rasm fabrics by Sammaan are available unstitched, giving tailors and designers the freedom to craft garments as per their unique fit and style.",
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
                        RASM ETHNIC BY SAMMAAN
                    </h1>
                </div>
            </section>

            {/* ── SECTION 1: Logo Left + Text Right ── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Logo Image Left */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "100%",
                        maxWidth: "460px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "320px",
                    }}
                >
                    <img
                        src="/faq-image.jpg"
                        alt="Rasm Ethnics by Sammaan Logo"
                        style={{
                            width: "100%",
                            maxWidth: "340px",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>

                {/* Text Right */}
                <div style={{ flex: 1, minWidth: "280px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a1a5e",
                            marginBottom: "28px",
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                            margin: "0 0 28px 0",
                        }}
                    >
                        Rasm Ethnics By Sammaan – Supplied By Aurora Textiles
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                            marginBottom: "0",
                        }}
                    >
                        Aurora Textiles proudly supplies <strong>Rasm Ethnics by Sammaan</strong>, a
                        premium sub-brand designed specifically for men's traditional and festive
                        clothing. Known for its elegance and craftsmanship, this collection brings a
                        refined ethnic touch to garments such as{" "}
                        <strong>kurtas, sherwanis, and ethnic jackets</strong>. As a leading fabric
                        supplier in Dubai and the MENA region, Aurora Textiles ensures seamless access
                        to high-quality unstitched fabric for tailors, designers, and fashion retailers.
                    </p>
                </div>
            </section>

            {/* ── SECTION 2: Text Left + Image Right ── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Text Left */}
                <div style={{ flex: 1, minWidth: "280px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a1a5e",
                            marginBottom: "24px",
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Ethnic Fabrics For Men With Modern Versatility
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                            marginBottom: "32px",
                        }}
                    >
                        <strong>Rasm by Sammaan</strong> combines tradition with trend by offering{" "}
                        <strong>ethnic fabrics for men</strong> that blend timeless designs with
                        wearable comfort. The collection features detailed ethnic motifs, jacquards, and
                        printed fabrics that are ideal for weddings, festive events, and cultural
                        ceremonies. These fabrics are designed to bring structure, sheen, and
                        sophistication to any traditional garment.
                    </p>
                    <a
                        href="/contact"
                        style={{
                            display: "inline-block",
                            padding: "14px 32px",
                            background: "#c8a84b",
                            color: "#fff",
                            fontWeight: "600",
                            fontSize: "15px",
                            textDecoration: "none",
                            borderRadius: "4px",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Contact Us
                    </a>
                </div>

                {/* Image Right */}
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
                    <img
                        src="/faq-image.jpg"
                        alt="Ethnic Fabrics for Men"
                        style={{
                            width: "100%",
                            height: "480px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "4px",
                        }}
                    />
                </div>
            </section>

            {/* ── SECTION 3: Image Left + Text Right ── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Image Left */}
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
                    <img
                        src="/faq-image.jpg"
                        alt="Wide Range of Unstitched Fabrics"
                        style={{
                            width: "100%",
                            height: "460px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "4px",
                        }}
                    />
                </div>

                {/* Text Right */}
                <div style={{ flex: 1, minWidth: "280px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a1a5e",
                            marginBottom: "24px",
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Wide Range Of Unstitched Fabrics
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                            marginBottom: "20px",
                        }}
                    >
                        At Aurora Textiles, we offer Rasm fabrics in multiple finishings and blends:
                    </p>
                    <ul style={{ paddingLeft: "20px", margin: "0 0 24px 0" }}>
                        {[
                            "Jacquard and Printed Ethnic Fabrics",
                            "Poly-viscose and Poly-cotton Blends",
                            "Embroidered and Value-Added Ethnic Textures",
                            "Fabrics suited for Kurta Sets, Sherwanis, Ethnic Jackets, and Indo-Westerns",
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "16px",
                                    color: "#333",
                                    lineHeight: "1.8",
                                    marginBottom: "8px",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                        }}
                    >
                        All fabrics come unstitched, allowing designers and customers the flexibility to
                        craft garments as per their unique fit and style
                    </p>
                </div>
            </section>

            {/* ── SECTION 4: Text Left + Image Right ── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Text Left */}
                <div style={{ flex: 1, minWidth: "280px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#1a1a5e",
                            marginBottom: "24px",
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Trusted Supplier Of Rasm Ethnic Fabrics
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                        }}
                    >
                        Aurora Textiles stands out as a dependable partner for sourcing{" "}
                        <strong>Rasm Ethnic fabrics by Sammaan</strong> across Dubai and MENA. With
                        strong logistics, bulk supply capabilities, and a sharp focus on men's fashion
                        fabrics, we provide businesses with timely access to premium-quality ethnic
                        textiles.
                    </p>
                </div>

                {/* Image Right */}
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "520px" }}>
                    <img
                        src="/faq-image.jpg"
                        alt="Trusted Supplier of Rasm Ethnic Fabrics"
                        style={{
                            width: "100%",
                            height: "320px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "4px",
                        }}
                    />
                </div>
            </section>

            {/* ── SECTION 5: Image Left + FAQ Right ── */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Image Left */}
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "380px" }}>
                    <img
                        src="/faq-image.jpg"
                        alt="Rasm Ethnic Garment"
                        style={{
                            width: "100%",
                            height: "500px",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                            borderRadius: "4px",
                        }}
                    />
                </div>

                {/* FAQ Right */}
                <div style={{ flex: 1, minWidth: "280px" }}>
                    {/* FAQ Title */}
                    <div style={{ marginBottom: "32px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: "42px",
                                fontWeight: "700",
                                color: "#1a1a5e",
                                display: "inline-block",
                                letterSpacing: "4px",
                                margin: 0,
                                position: "relative",
                            }}
                        >
                            FAQ
                            <span
                                style={{
                                    position: "absolute",
                                    bottom: "-6px",
                                    right: "-28px",
                                    width: "55px",
                                    height: "3px",
                                    background: "#c8a84b",
                                    borderRadius: "2px",
                                }}
                            />
                        </h2>
                    </div>

                    {/* FAQ Items */}
                    <div>
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "4px",
                                    marginBottom: "12px",
                                    overflow: "hidden",
                                }}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "18px 24px",
                                        background: "#fff",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Cinzel Decorative', serif",
                                            fontSize: "12px",
                                            fontWeight: "700",
                                            color: "#c8a84b",
                                            letterSpacing: "0.5px",
                                            lineHeight: "1.4",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {faq.question}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "22px",
                                            color: "#1a1a5e",
                                            fontWeight: "300",
                                            flexShrink: 0,
                                            marginLeft: "16px",
                                        }}
                                    >
                                        {openFaq === i ? "−" : "+"}
                                    </span>
                                </button>
                                {openFaq === i && (
                                    <div
                                        style={{
                                            padding: "16px 24px 20px",
                                            borderTop: "1px solid #eee",
                                            background: "#fff",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: "15px",
                                                color: "#333",
                                                lineHeight: "1.75",
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
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}