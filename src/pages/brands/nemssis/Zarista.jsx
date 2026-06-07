import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function ZaristaPage() {
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const faqColRef = useRef(null);
    const [faqImgHeight, setFaqImgHeight] = useState(500);

    useLayoutEffect(() => {
        const el = faqColRef.current;
        if (!el) return;
        setFaqImgHeight(el.getBoundingClientRect().height);
        const ro = new ResizeObserver(entries => {
            for (const entry of entries) {
                setFaqImgHeight(entry.contentRect.height);
            }
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, [openFaq]);

    const faqs = [
        {
            question: "What types of garments can be made from Zarista fabrics?",
            answer: "Zarista fabrics are ideal for men's kurtas, sherwanis, Indo-western jackets, and festive ethnic wear.",
        },
        {
            question: "Are Zarista by Nemssis fabrics available unstitched?",
            answer: "Yes, all Zarista fabrics are available in unstitched format, perfect for bespoke tailoring and custom garment production.",
        },
        {
            question: "Can I bulk order Zarista ethnic fabrics?",
            answer: "Absolutely. Aurora Textiles fulfils bulk orders for Zarista ethnic fabrics across Dubai and the MENA region with consistent quality and timely delivery.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Zarista by Nemssis - Ethnic Fabrics For Men</title>
                <meta name="description" content="Check out Zarista Ethnic by Nemssis at Aurora Textiles – your trusted source for premium ethnic fabrics for men. Shop high-quality, stylish fabrics perfect for traditional and festive wear in Dubai." />
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
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
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
                        }}
                    >
                        Zarista by Nemssis
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Brand Intro: Logo left, Text right */}
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
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Logo — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="/nemssis-1.webp"
                        alt="Nemssis Logo"
                        style={{ width: "100%", maxWidth: "320px", objectFit: "contain" }}
                    />
                </div>

                {/* Right: Text — 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "42px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.25",
                            marginBottom: "24px",
                            marginTop: 0,
                        }}
                    >
                        Zarista by Nemssis – Ethnic Elegance for Men’s Fashion
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "20px",
                        }}
                    >
                        <strong>Aurora Textiles</strong> proudly presents{" "}
                        <strong>Zarista by Nemssis</strong>, a distinguished collection of
                        ethnic fabrics crafted exclusively for men's traditional wear. Known
                        for its bold aesthetics and regal textures, Zarista blends
                        time-honored heritage with contemporary appeal—making it an
                        excellent choice for{" "}
                        <strong>kurtas, sherwanis, ethnic jackets</strong>, and festive menswear.
                    </p>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
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

            {/* SECTION 2 — Refined Ethnic Fabrics: Text left, Image right */}
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
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Text — 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.25",
                            marginBottom: "24px",
                            marginTop: 0,
                        }}
                    >
                        Refined Ethnic Fabrics For Every Occasion
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            paddingLeft: "24px",
                            marginBottom: "24px",
                        }}
                    >
                        <li style={{ marginBottom: "10px" }}>Designer Kurtas &amp; Pathani Suits</li>
                        <li style={{ marginBottom: "10px" }}>Grand Sherwanis for Weddings &amp; Functions</li>
                        <li style={{ marginBottom: "10px" }}>Statement-Making Jackets &amp; Waistcoats</li>
                        <li style={{ marginBottom: "10px" }}>Customised Festive Outfits</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "36px",
                        }}
                    >
                        These fabrics are ideal for tailors and designers creating high-end
                        ethnic wear that demands elegance and durability.
                    </p>
                    {/* Button */}
                    <div
                        onClick={() => (window.location.href = "/contact-us")}
                        style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <button
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "#0a089bd3";
                                e.currentTarget.style.borderColor = "#e0b219";
                                e.currentTarget.style.color = "#ffffff";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "#8b7d3a";
                                e.currentTarget.style.borderColor = "#050e5f";
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
                </div>

                {/* Right: Image — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: "620px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/zarista-1.jpg"
                        alt="Refined Ethnic Fabrics"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                </div>
            </section>

            {/* SECTION 3 — Why Choose Zarista: Image left, Text right */}
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
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Image — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: "560px",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/zarista-2.jpg"
                        alt="Why Choose Zarista"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                </div>

                {/* Right: Text — 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.25",
                            marginBottom: "20px",
                            marginTop: 0,
                        }}
                    >
                        Why Choose Zarista Fabrics From Aurora Textiles?
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "16px",
                        }}
                    >
                        As one of the leading textile suppliers in Dubai, Aurora Textiles ensures:
                    </p>
                    <ul
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            paddingLeft: "24px",
                            margin: 0,
                        }}
                    >
                        <li style={{ marginBottom: "10px" }}>Original Nemssis fabric collections like <strong>Zarista</strong></li>
                        <li style={{ marginBottom: "10px" }}>Unstitched ethnic fabrics tailored for men's clothing</li>
                        <li style={{ marginBottom: "10px" }}>Quick access to seasonal festive lines</li>
                        <li style={{ marginBottom: "10px" }}>Expert guidance for fabric selection and bulk buying</li>
                        <li style={{ marginBottom: "10px" }}>Delivery and export options across the UAE and MENA region</li>
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
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Text — 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.25",
                            marginBottom: "24px",
                            marginTop: 0,
                        }}
                    >
                        Designed With Quality For Celebration
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
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

                {/* Right: Image — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: "400px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/zarista-3.webp"
                        alt="Designed With Quality"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
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
                    alignItems: "stretch",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left: Image — 50% (dynamic height) */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: `${faqImgHeight}px`,
                        minHeight: "500px",
                        transition: "height 0.4s ease",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/zarista-4.webp"
                        alt="FAQ Fabric"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                </div>

                {/* Right: FAQ Accordion — 50% */}
                <div ref={faqColRef} style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: window.innerWidth < 768 ? "28px" : "42px",
                            fontWeight: "700",
                            color: "#344886",
                            margin: "0 0 28px 0",
                            letterSpacing: "1px",
                        }}
                    >
                        FAQ
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    border: "1px solid #ddd",
                                    borderTop: i === 0 ? "1px solid #ddd" : "none",
                                    borderRadius: i === 0 ? "8px 8px 0 0" : i === faqs.length - 1 ? "0 0 8px 8px" : "0",
                                }}
                            >
                                <div
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    onMouseEnter={() => setHoveredFaq(i)}
                                    onMouseLeave={() => setHoveredFaq(null)}
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
                                            fontSize: "18px",
                                            fontWeight: "700",
                                            color: openFaq === i ? "#b9972f" : hoveredFaq === i ? "#070e46" : "#0b18a1",
                                            margin: 0,
                                            lineHeight: "1.4",
                                            fontFamily: "'Cinzel Decorative', serif",
                                            transition: "color 0.2s ease",
                                            flex: 1,
                                        }}
                                    >
                                        {faq.question}
                                    </p>
                                    <span
                                        style={{
                                            fontSize: "22px",
                                            color: openFaq === i ? "#b9972f" : hoveredFaq === i ? "#070e46" : "#0b18a1",
                                            flexShrink: 0,
                                            fontWeight: "500",
                                            lineHeight: 1,
                                            transition: "color 0.2s ease",
                                        }}
                                    >
                                        {openFaq === i ? "−" : "+"}
                                    </span>
                                </div>

                                {openFaq === i && (
                                    <div style={{ padding: "0 20px 20px 20px", borderTop: "1px solid #eee" }}>
                                        <p
                                            style={{
                                                fontSize: "17px",
                                                color: "#333",
                                                lineHeight: "1.4",
                                                margin: "16px 0 0 0",
                                                fontFamily: "'Poppins', sans-serif",
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