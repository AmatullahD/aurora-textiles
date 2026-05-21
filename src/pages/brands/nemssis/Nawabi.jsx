import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function NawabiPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT STYLES CAN BE DESIGNED USING NAWABI BY NEMSSIS FABRICS?",
            answer:
                "These fabrics are perfect for men's sherwanis, kurtas, ethnic jackets, and Indo-western occasion wear.",
        },
        {
            question: "ARE THESE ETHNIC FABRICS AVAILABLE IN UNSTITCHED FORM?",
            answer:
                "Yes, all Nawabi by Nemssis fabrics are available in unstitched form, giving tailors and designers full creative freedom to craft garments as per their requirements.",
        },
        {
            question: "CAN NAWABI FABRICS BE ORDERED IN BULK FOR COMMERCIAL USE?",
            answer:
                "Absolutely. Aurora Textiles supports bulk and commercial orders of Nawabi by Nemssis fabrics for tailoring businesses, boutiques, and exporters across Dubai and the MENA region.",
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
                        NAWABI BY NEMSSIS
                    </h1>
                </div>
            </section>

            {/* ── SECTION 1: Logo/Brand Image Left + Text Right ── */}
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
                {/* Brand Logo Left */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "100%",
                        maxWidth: "460px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "340px",
                    }}
                >
                    <img
                        src="/faq-image.jpg"
                        alt="Nawabi by Nemssis Logo"
                        style={{
                            width: "100%",
                            maxWidth: "380px",
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
                        Nawabi By Nemssis – Ethnic Fabrics For Men's
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                            marginBottom: "20px",
                        }}
                    >
                        At <strong>Aurora Textiles</strong>, we are proud to supply{" "}
                        <strong>Nawabi by Nemssis</strong>—a premium ethnic fabric line designed
                        exclusively for men's traditional clothing. Inspired by royal heritage and
                        timeless elegance, Nawabi fabrics combine majestic textures with striking
                        designs, making them a preferred choice for{" "}
                        <strong>kurta sets, sherwanis, ethnic jackets</strong>, and more.
                    </p>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                            marginBottom: "0",
                        }}
                    >
                        As trusted fabric suppliers in <strong>Dubai and the MENA region</strong>, we
                        ensure seamless availability of original <strong>Nemssis fabrics</strong>,
                        delivered with consistent quality and full support for bulk and commercial
                        orders.
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
                        Traditional Fabric With Royal Charm
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                            marginBottom: "20px",
                        }}
                    >
                        The <strong>Nawabi by Nemssis</strong> collection represents the grandeur and
                        sophistication of India's royal era. These fabrics are thoughtfully curated to
                        bring out the richness and detail in:
                    </p>
                    <ul style={{ paddingLeft: "20px", margin: "0 0 24px 0" }}>
                        {[
                            "Wedding and Occasion Sherwanis",
                            "Festive Kurtas and Pathani Sets",
                            "Designer Jackets, Nehru Coats & Waistcoats",
                            "Statement Menswear for Events & Celebrations",
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "16px",
                                    color: "#333",
                                    lineHeight: "1.8",
                                    marginBottom: "12px",
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
                            marginBottom: "32px",
                        }}
                    >
                        Each fabric in the Nawabi range features intricate embroidery, woven motifs,
                        jacquard or satin finish, and luxurious fall to ensure comfort and class.
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
                        alt="Traditional Fabric with Royal Charm"
                        style={{
                            width: "100%",
                            height: "560px",
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
                        alt="Why Source Nawabi Fabrics"
                        style={{
                            width: "100%",
                            height: "520px",
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
                        Why Source Nawabi Fabrics From Aurora Textiles?
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                            marginBottom: "20px",
                        }}
                    >
                        As one of Dubai's established men's ethnic fabric suppliers,{" "}
                        <strong>Aurora Textiles</strong> brings you original{" "}
                        <strong>fabrics by Nemssis</strong> with:
                    </p>
                    <ul style={{ paddingLeft: "20px", margin: "0 0 24px 0" }}>
                        {[
                            { bold: "Exclusive Access to Sub-Brands", text: " like Nawabi by Nemssis" },
                            { bold: null, text: "Unstitched Ethnic Fabrics for Men's Tailoring" },
                            { bold: null, text: "Ready Support for Designers, Boutiques & Exporters" },
                            { bold: null, text: "Fast Delivery Across the UAE & MENA Region" },
                            { bold: null, text: "Tailored Options for Bulk & Commercial Buyers" },
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "16px",
                                    color: "#333",
                                    lineHeight: "1.8",
                                    marginBottom: "12px",
                                }}
                            >
                                {item.bold ? (
                                    <>
                                        <strong>{item.bold}</strong>
                                        {item.text}
                                    </>
                                ) : (
                                    item.text
                                )}
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
                        We don't just sell fabric—we deliver quality that elevates traditional fashion
                        for modern men
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
                        Nemesis Fabrics - Quality &amp; Craftsmanship That You Can Feel
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                        }}
                    >
                        Every fabric under the <strong>Nawabi by Nemssis</strong> label is created with
                        precision and artistry. Whether it's a modern groom's sherwani or a festive
                        kurta for Eid or Diwali, these fabrics are designed to help tailors and
                        designers craft garments that command attention.
                    </p>
                </div>

                {/* Image Right */}
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "520px" }}>
                    <img
                        src="/faq-image.jpg"
                        alt="Nemssis Fabrics Quality"
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            objectPosition: "top",
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
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "460px" }}>
                    <img
                        src="/faq-image.jpg"
                        alt="Nawabi Fabric"
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