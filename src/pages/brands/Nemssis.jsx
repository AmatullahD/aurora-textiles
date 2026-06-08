import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function NemssisPage() {
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
            question: "What types of Nemssis shirting fabrics does Aurora Textiles offer?",
            answer:
                "We stock Nemssis shirting fabrics in popular blends like 100% cotton, poly-cotton, linen, and tencel. They are available in printed, plain, and jacquard variants.",
        },
        {
            question: "What makes Nemssis shirting a good choice for institutional or commercial buyers?",
            answer:
                "Nemssis shirting fabrics are designed for consistent quality and high-volume production. They are wrinkle-resistant, easy to maintain, and ideal for uniforms, corporate shirts, and retail collections.",
        },
        {
            question: "Are Nemssis shirting fabrics suitable for men's formalwear and daily shirts?",
            answer:
                "Yes, Nemssis fabrics are crafted for both formal and daily-wear applications. Their smooth finish and durable construction make them a preferred choice for tailors and garment brands alike.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Buy Nemssis Shirting Fabric | Shop Nemssis Cotton Shirting Fabric</title>
                <meta name="description" content="The Nemssis fabric is of premium quality and it ensures a skin friendly feel. Woven by using latest knitting technology and quality tested threads. Contact Aurora Textiles to buy Nemssis premium cotton Shirting Fabrics in Dubai." />
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
                {/* Left: Nemssis brand logo — 50% */}
                <div
                    style={{
                        flex: "0 0 50%",
                        width: "50%",
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
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: heading + paragraph — 50% */}
                <div style={{ flex: "0 0 50%", width: "50%" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        NEMSSIS FABRICS – MEN'S SHIRTING SOLUTIONS BY AURORA TEXTILES
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
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
                            color: "#344886",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        NEMSSIS SHIRTING FABRIC
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
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
                            color: "#344886",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        RANGE OF NEMSSIS SHIRTING FABRIC
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
                            color: "#333",
                            marginBottom: "20px",
                        }}
                    >
                        We exclusively stock <strong>Nemssis shirting fabrics</strong> in a range of blends and finishes
                        that include:
                    </p>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
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
                        color: "#344886",
                        lineHeight: "1.2",
                        margin: "0 auto 28px auto",
                        maxWidth: "900px",
                    }}
                >
                    SMART SHIRTING SOLUTIONS FOR MODERN MEN
                </h2>
                <p
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "19px",
                        lineHeight: "1.4",
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
                            color: "#344886",
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
                                    color: "#344886",
                                    lineHeight: "1.5",
                                    margin: 0,
                                    letterSpacing: "0.5px",
                                }}
                            >
                                {item}
                            </p>
                        </div>
                    ))}

                        {/* Button */}
                        <div
                            style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <a
                                href="/contact-us"
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
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Contact Us
                            </a>
                        </div>
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

            {/* SECTION — FAQ: image left, accordion right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "stretch",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image 50% */}
                <div style={{
                    flex: "0 0 calc(50% - 30px)",
                    width: "calc(50% - 30px)",
                    height: `${faqImgHeight}px`,
                    minHeight: "500px",
                    transition: "height 0.4s ease",
                    overflow: "hidden",
                    borderRadius: "8px",
                }}>
                    <img
                        src="/nemssis-5.webp"
                        alt="FAQ Image"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right — FAQ accordion 50% */}
                <div ref={faqColRef} style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "42px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
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
                                            fontSize: "17px",
                                            fontWeight: "700",
                                            color: openFaq === i
                                                ? "#b9972f"
                                                : hoveredFaq === i
                                                    ? "#070e46"
                                                    : "#0b18a1",
                                            margin: 0,
                                            lineHeight: "1.4",
                                            fontFamily: "'Poppins', sans-serif",
                                            transition: "color 0.2s ease",
                                            flex: 1,
                                        }}
                                    >
                                        {faq.question}
                                    </p>
                                    <span
                                        style={{
                                            fontSize: "22px",
                                            color: openFaq === i
                                                ? "#b9972f"
                                                : hoveredFaq === i
                                                    ? "#070e46"
                                                    : "#0b18a1",
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
                                                fontSize: "16px",
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