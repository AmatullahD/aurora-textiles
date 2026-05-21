import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function RaagReshamPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT IS UNIQUE ABOUT RAAG RESHAM BY NEMSSIS?",
            answer:
                "Raag Resham offers a blend of festive flair and traditional aesthetics, crafted especially for men's ethnic wear like kurtas, sherwanis, and jackets.",
        },
        {
            question: "ARE RAAG RESHAM FABRICS SUITABLE FOR BULK PURCHASE?",
            answer:
                "Yes, Aurora Textiles supports bulk orders of Raag Resham fabrics for tailors, retailers, and fashion exporters across Dubai and the MENA region with competitive pricing and on-time delivery.",
        },
        {
            question: "WHAT FABRIC TYPES ARE AVAILABLE IN THE RAAG RESHAM COLLECTION?",
            answer:
                "The Raag Resham collection includes unstitched fabrics in poly-viscose, cotton blends, and silk-touch finishes, available in jacquard, printed, and embellished options for premium ethnic menswear.",
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
                        RAAG RESHAM BY NEMSSIS
                    </h1>
                </div>
            </section>

            {/* ── SECTION 1: Brand Logo Left + Text Right ── */}
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
                {/* Brand Logo/Image Left */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "100%",
                        maxWidth: "500px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "320px",
                    }}
                >
                    <img
                        src="/faq-image.jpg"
                        alt="Raag Resham by Nemssis Logo"
                        style={{
                            width: "100%",
                            maxWidth: "460px",
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
                            margin: "0 0 28px 0",
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                        }}
                    >
                        Raag Resham By Nemssis By Aurora Textiles, Dubai
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                            marginBottom: "0",
                        }}
                    >
                        <strong>Aurora Textiles</strong> proudly brings you{" "}
                        <strong>Raag Resham by Nemssis</strong>, a distinguished collection of ethnic
                        fabrics curated for men's traditional wear. Rooted in artistic heritage and
                        festive opulence, these fabrics are ideal for crafting kurtas, sherwanis, ethnic
                        jackets, and celebration-ready menswear. We cater to designers and tailors
                        across Dubai and the MENA region who seek quality, character, and craftsmanship
                        in every meter.
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
                            margin: "0 0 24px 0",
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                        }}
                    >
                        Premium Ethnic Fabrics With Festive Appeal
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                            marginBottom: "32px",
                        }}
                    >
                        The <strong>Raag Resham collection</strong> is known for its luxurious finish
                        and culturally inspired motifs. Designed with intricate patterns, contemporary
                        color palettes, and textures that shine on special occasions, these fabrics
                        embody the essence of festive fashion for men. Whether you're dressing for a
                        wedding, cultural event, or religious celebration, Raag Resham offers the
                        perfect base for impactful attire.
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
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "540px" }}>
                    <img
                        src="/faq-image.jpg"
                        alt="Premium Ethnic Fabrics with Festive Appeal"
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
                        alt="Raag Resham Fabric Features"
                        style={{
                            width: "100%",
                            height: "500px",
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
                            margin: "0 0 24px 0",
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                        }}
                    >
                        Fabric Features &amp; Composition
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                            marginBottom: "20px",
                        }}
                    >
                        Raag Resham by Nemssis includes:
                    </p>
                    <ul style={{ paddingLeft: "20px", margin: "0 0 24px 0" }}>
                        {[
                            "Unstitched fabrics ideal for bespoke ethnic wear",
                            "Lightweight and drapable textures",
                            "Poly-viscose, cotton blends, and silk-touch finishes",
                            "Jacquard, printed, and embellished options for premium look and feel",
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "16px",
                                    color: "#333",
                                    lineHeight: "1.8",
                                    marginBottom: "10px",
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
                        The fabrics are tailored to ensure comfortable wear and ease of stitching while
                        offering a refined appearance suitable for grand occasions.
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
                            margin: "0 0 24px 0",
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                        }}
                    >
                        Why Choose Aurora Textiles For Raag Resham?
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                        }}
                    >
                        Aurora Textiles is a trusted supplier of men's ethnic fabrics in Dubai, known
                        for delivering authentic, original brands like Nemssis. With a strong network
                        and bulk-ready inventory, we ensure on-time delivery, competitive pricing, and
                        dependable service. Designers, retailers, and tailoring units across the MENA
                        region rely on us for consistent quality and a curated collection of
                        fashion-forward textiles.
                    </p>
                </div>

                {/* Image Right */}
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "520px" }}>
                    <img
                        src="/faq-image.jpg"
                        alt="Why Choose Aurora Textiles for Raag Resham"
                        style={{
                            width: "100%",
                            height: "420px",
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
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
                    <img
                        src="/faq-image.jpg"
                        alt="Raag Resham Fabric Swatch"
                        style={{
                            width: "100%",
                            height: "480px",
                            objectFit: "cover",
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