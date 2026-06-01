import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function KlopmanPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "WHAT TYPE OF KLOPMAN FABRICS DOES AURORA TEXTILES OFFER?",
            answer:
                "A wide range of Fit for purpose durable fabrics for all work applications – From Health Care, Hospitality, Facility Management , Food Production, Police, Military, Civil Defence , Construction, Landscape, Railways, Utilities Workers, Oil and Gas, Welding , Molten Metal etc....",
        },
        {
            question: "CAN I ORDER KLOPMAN FABRICS IN BULK FROM AURORA TEXTILES?",
            answer:
                "Yes, we specialize in bulk and wholesale orders. Whether you need 100 meters or 10,000, Aurora Textiles can fulfill your requirements with consistent quality and timely delivery.",
        },
        {
            question: "DO YOU PROVIDE FLAME-RETARDANT KLOPMAN FABRICS FOR INDUSTRIAL USE?",
            answer:
                "Absolutely. We stock Klopman's flame-retardant and antistatic fabric ranges specifically designed for oil & gas, welding, and other high-risk industrial environments.",
        },
        {
            question: "CAN I REQUEST FABRIC SWATCHES BEFORE PLACING AN ORDER?",
            answer:
                "Yes, we can arrange fabric swatches for your review before committing to a bulk order. Contact our team to request samples tailored to your specific application.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>


            <Helmet>
                <title>Klopman Fabric Supplier in Dubai | Aurora Textiles</title>
                <meta name="description" content="Shop Klopman uniform and workwear fabrics in Dubai. Aurora Textiles supplies premium Klopman fabrics wholesale across UAE, GCC and Africa." />
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
                        KLOPMAN FABRICS
                    </h1>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 1 — Logo image left + heading & paragraph right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "80px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — logo image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: window.innerWidth < 768 ? "100%" : "420px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/klopman.webp"
                        alt="Klopman International Logo"
                        style={{
                            width: "100%",
                            maxWidth: "420px",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right — heading + paragraph */}
                <div style={{ flex: "1 1 0" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "46px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.15",
                            margin: "0 0 24px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Aurora Textiles – Premier Klopman Fabrics Supplier in Dubai, UAE
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.9",
                            margin: 0,
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        Aurora Textiles is a trusted name in the UAE's textile industry,
                        proudly representing Klopman International—renowned globally for
                        high-performance, durable workwear fabrics. As a leading Klopman
                        fabrics supplier in Dubai and the broader MENA region, we offer
                        original, certified textile solutions tailored for industries such as
                        healthcare, hospitality, manufacturing, and oil & gas. With over 50
                        years of innovation, Klopman pioneered the use of polyester-cotton
                        blends in workwear, setting global standards for comfort, durability,
                        and wash resistance.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 2 — Heading + para + bullet list left + image right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + para + bullets */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "40px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 20px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Klopman Workwear Fabric Dubai
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.85",
                            margin: "0 0 20px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        Klopman is a European leader in technical fabrics that are
                        specifically engineered for professional use. At Aurora Textiles, we
                        stock an extensive range of <strong>Klopman workwear fabrics</strong>,
                        tailored for:
                    </p>

                    <ul
                        style={{
                            margin: 0,
                            paddingLeft: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        {[
                            {
                                label: "Corporate Uniforms",
                                desc: "– Stylish and functional textiles for office wear.",
                            },
                            {
                                label: "Industrial Workwear",
                                desc: "– Durable, tear-resistant fabrics for heavy-duty operations.",
                            },
                            {
                                label: "Protective Clothing",
                                desc: "– Flame-retardant, antistatic, and high-visibility options that prioritize safety.",
                            },
                            {
                                label: "Medical Apparel",
                                desc: "– Hygienic, breathable materials suited for scrubs, lab coats, and medical uniforms.",
                            },
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "15px",
                                    color: "#333",
                                    lineHeight: "1.75",
                                    fontFamily: "'Cinzel Decorative', serif",
                                }}
                            >
                                <strong>{item.label}</strong> {item.desc}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/klopman-1.webp"
                        alt="Klopman Workwear Fabric"
                        style={{
                            width: "100%",
                            height: "420px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 3 — Image left + heading & emoji bullet list right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <img
                        src="/klopman-2.webp"
                        alt="Klopman Textile UAE"
                        style={{
                            width: "100%",
                            height: "500px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>

                {/* Right — heading + para + emoji bullets */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "40px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 20px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Benefits of Buying Klopman Textile UAE
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.85",
                            margin: "0 0 20px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        Klopman's reputation is built on advanced fabric technology and
                        rigorous testing. When you choose Klopman fabrics from Aurora
                        Textiles, you get:
                    </p>

                    <ul
                        style={{
                            margin: 0,
                            paddingLeft: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                        }}
                    >
                        {[
                            {
                                emoji: "🌐",
                                label: "Made in Europe & Indonesia",
                                desc: ": State-of-the-art manufacturing facilities ensure consistent quality and regional supply flexibility.",
                            },
                            {
                                emoji: "🏆",
                                label: "Trusted Worldwide",
                                desc: ": Supplying uniform programs in healthcare, hospitality, food, facility management, oil & gas, and more.",
                            },
                            {
                                emoji: "🔬",
                                label: "Engineered for Performance",
                                desc: ": Excellent color retention, low shrinkage, wearer comfort, and built to withstand ",
                                boldEnd: "industrial laundering",
                                suffix: ".",
                            },
                            {
                                emoji: "♻️",
                                label: "Certified Sustainable",
                                desc: ": Offering ",
                                boldMid: "eco-labelled fabrics",
                                suffix: " that support your ESG and circular economy goals.",
                            },
                            {
                                emoji: "💰",
                                label: "Economical in the Long Run",
                                desc: ": Proven to reduce ",
                                boldMid: "replacement frequency",
                                suffix: ", saving both cost and environmental impact.",
                            },
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "15px",
                                    color: "#333",
                                    lineHeight: "1.75",
                                    fontFamily: "'Cinzel Decorative', serif",
                                    listStyle: "none",
                                    marginLeft: "-20px",
                                }}
                            >
                                <span style={{ marginRight: "6px" }}>{item.emoji}</span>
                                <strong>{item.label}</strong>
                                {item.boldEnd ? (
                                    <>
                                        {item.desc}
                                        <strong>{item.boldEnd}</strong>
                                        {item.suffix}
                                    </>
                                ) : item.boldMid ? (
                                    <>
                                        {item.desc}
                                        <strong>{item.boldMid}</strong>
                                        {item.suffix}
                                    </>
                                ) : (
                                    item.desc
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 4 — Why Choose: heading + centered bullets + CTA left + image right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 0 auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + centered para + centered bullets + button */}
                <div
                    style={{
                        flex: "1 1 45%",
                        minWidth: "280px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "40px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 20px 0",
                            textTransform: "uppercase",
                        }}
                    >
                        Why Choose Aurora Textiles as Klopman Fabric Supplier in UAE?
                    </h2>
                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.85",
                            margin: "0 0 16px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                            textAlign: "center",
                            width: "100%",
                        }}
                    >
                        As an authorized{" "}
                        <strong>Klopman fabrics supplier in Dubai, UAE</strong>, Aurora
                        Textiles is committed to delivering quality, value, and reliability.
                        Our strengths include:
                    </p>

                    <ul
                        style={{
                            margin: "0 0 20px 0",
                            paddingLeft: "0",
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            width: "100%",
                        }}
                    >
                        {[
                            {
                                label: "Wide Product Selection",
                                desc: "– From classic polyester-cotton blends to advanced technical fabrics.",
                            },
                            {
                                label: "Bulk Order Fulfillment",
                                desc: "– Whether you need 100 meters or 10,000, we can supply.",
                            },
                            {
                                label: "Tailored Advice",
                                desc: "– Our team assists with product matching based on your end-use.",
                            },
                            {
                                label: "Export-Ready",
                                desc: "– We ship across the UAE and export to Oman, Qatar, Bahrain, and other MENA countries.",
                            },
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "15px",
                                    color: "#333",
                                    lineHeight: "1.75",
                                    fontFamily: "'Cinzel Decorative', serif",
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "8px",
                                }}
                            >
                                <span style={{ flexShrink: 0 }}>•</span>
                                <span>
                                    <strong>{item.label}</strong> {item.desc}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p
                        style={{
                            fontSize: "15px",
                            color: "#333",
                            lineHeight: "1.85",
                            margin: "0 0 28px 0",
                            fontFamily: "'Cinzel Decorative', serif",
                        }}
                    >
                        We ensure availability and timely delivery for all popular{" "}
                        <strong>Klopman fabric types</strong> being searched in Dubai and
                        across the Middle East.
                    </p>

                    <button
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "#0a089bd3";
                            e.currentTarget.style.borderColor = "#bd930c";
                            e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "#bd930c";
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

                {/* Right — image (full figure, no crop) */}
                <div
                    style={{
                        flex: "1 1 50%",
                        minWidth: "280px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                    }}
                >
                    <img
                        src="/klopman-3.webp"
                        alt="Klopman Workwear Model"
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 5 — Centered heading + centered paragraph (text only)
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "60px auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        fontSize: window.innerWidth < 768 ? "26px" : "44px",
                        fontWeight: "700",
                        color: "#1e2a5e",
                        fontFamily: "'Cinzel Decorative', serif",
                        lineHeight: "1.2",
                        margin: "0 0 28px 0",
                        textTransform: "uppercase",
                    }}
                >
                    Buy Klopman Fabrics in Dubai at Aurora Textiles
                </h2>
                <p
                    style={{
                        fontSize: "15px",
                        color: "#333",
                        lineHeight: "1.9",
                        margin: "0 0 16px 0",
                        fontFamily: "'Cinzel Decorative', serif",
                    }}
                >
                    Whether you're a garment manufacturer, industrial supplier, or uniform
                    brand, Aurora Textiles is your go-to destination to{" "}
                    <strong>buy Klopman fabrics</strong> in Dubai. Get in touch with us for
                    bulk quotations, fabric swatches, or customized supply plans tailored to
                    your business.
                </p>
                <p
                    style={{
                        fontSize: "15px",
                        color: "#333",
                        lineHeight: "1.9",
                        margin: 0,
                        fontFamily: "'Cinzel Decorative', serif",
                    }}
                >
                    <strong>Contact Aurora Textiles Today</strong> – For quality you can
                    trust, service you can count on, and fabrics that perform.
                </p>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 6 — FAQ: image left + accordion right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <img
                        src="/klopman-4.webp"
                        alt="Klopman Fabric Swatches"
                        style={{
                            width: "100%",
                            height: "520px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>

                {/* Right — FAQ accordion */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "42px",
                            fontWeight: "700",
                            color: "#1e2a5e",
                            fontFamily: "'Cinzel Decorative', serif",
                            margin: "0 0 28px 0",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                        }}
                    >
                        FAQ_
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    border: "1px solid #ddd",
                                    borderTop: i === 0 ? "1px solid #ddd" : "none",
                                }}
                            >
                                {/* Question row */}
                                <div
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "18px 20px",
                                        cursor: "pointer",
                                        gap: "16px",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "13px",
                                            fontWeight: "700",
                                            color: "#b8860b",
                                            letterSpacing: "0.6px",
                                            textTransform: "uppercase",
                                            margin: 0,
                                            lineHeight: "1.55",
                                            fontFamily: "'Cinzel Decorative', serif",
                                        }}
                                    >
                                        {faq.question}
                                    </p>
                                    <span
                                        style={{
                                            fontSize: "24px",
                                            color: "#1e2a5e",
                                            flexShrink: 0,
                                            fontWeight: "300",
                                            lineHeight: 1,
                                        }}
                                    >
                                        {openFaq === i ? "−" : "+"}
                                    </span>
                                </div>

                                {/* Answer panel */}
                                {openFaq === i && (
                                    <div
                                        style={{
                                            padding: "0 20px 20px 20px",
                                            borderTop: "1px solid #eee",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: "15px",
                                                color: "#333",
                                                lineHeight: "1.85",
                                                margin: "16px 0 0 0",
                                                fontFamily: "'Cinzel Decorative', serif",
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
            <ScrollToTop />
        </div>
    );
}