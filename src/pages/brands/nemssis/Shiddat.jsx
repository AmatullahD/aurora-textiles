import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";


export default function ShiddatPage() {
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
            question: "What is Shiddat by Nemssis?",
            answer:
                "Shiddat is an ethnic fabric line by Nemssis, tailored for men's traditional clothing such as kurtas, sherwanis, and festive jackets.",
        },
        {
            question: "Are the Shiddat fabrics available unstitched?",
            answer:
                "Yes, all Shiddat fabrics are available in unstitched format, making them ideal for bespoke tailoring and custom garment production.",
        },
        {
            question: "Do you offer bulk orders for ethnic dress fabrics?",
            answer:
                "Absolutely. Aurora Textiles supplies Shiddat ethnic dress fabrics in bulk to tailoring units, garment stores, and designers across Dubai and the MENA region.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Shiddat by Nemssis - Luxury Ethnic Print & Embroidery Fabrics | Aurora Textiles</title>
                <meta name="description" content="EExplore Shiddat by Nemssis at Aurora Textiles – your trusted source for premium luxury ethnic Print and embroidery fabrics for men. Shop high-quality, stylish fabrics perfect for traditional and festive wear in Dubai." />
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
                        Shiddat by Nemssis
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
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                </div>

                {/* Right: Heading + Description — 50% */}
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
                        Shiddat By Nemssis – Supplied By Aurora Textiles, Dubai
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
                        Ethnic Print Fabrics For Men's Wear
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
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
                        height: "460px",
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
                        Available Ethnic Fabric Types And Styles
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
                        Aurora Textiles supplies the Shiddat ethnic collection in a variety
                        of blends and finishes suitable for unstitched garments:
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
                        <li>Ethnic Print Fabrics</li>
                        <li>Light to Mid-Weight Blended Fabrics</li>
                        <li>Subtle Jacquard and Textured Weaves</li>
                        <li>Festive Embroidery Options (based on design)</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
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
                        Why Choose Aurora Textiles For Shiddat By Nemssis?
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
                        We cater to the growing demand for men's ethnic wear by offering{" "}
                        <strong>Shiddat ethnic dress fabrics</strong> in bulk quantities to
                        tailoring units, garment stores, and designers across Dubai and the
                        MENA region. Our commitment to quality, reliable stock, and
                        personalized service makes us the go-to fabric partner for premium
                        men's ethnic fabrics.
                    </p>
                </div>

                {/* Right: Image — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
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
                        src="/shiddat-5.webp"
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