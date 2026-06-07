import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function SpaadaaPage() {
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
            question: "WHY CHOOSE SPAADAA SHIRTING FABRICS FROM AURORA TEXTILES?",
            answer:
                "Spaadaa shirting fabrics are known for their exceptional comfort, easy maintenance, and professional appeal—making them a top choice for men's shirting needs across industries.",
        },
        {
            question: "DO SPAADAA SHIRTING FABRICS COME IN A VARIETY OF STYLES?",
            answer:
                "Yes, we offer Spaadaa shirting fabrics in a wide variety of styles including poly-cotton blends, tencel blends, printed shirtings, and jacquard and textured finishes to suit every fashion and functional need.",
        },
        {
            question: "CAN I PLACE A BULK ORDER FOR SPAADAA SHIRTING FABRICS?",
            answer:
                "Absolutely. Aurora Textiles supplies Spaadaa fabrics in bulk to retail brands, wholesalers, and corporate tailoring units across Dubai and MENA. Contact us for wholesale pricing and delivery options.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Buy Spaadaa Men's Shirting Fabrics in Dubai | Unstitched Shirting Fabrics</title>
                <meta name="description" content="Buy Spaadaa men's shirting fabrics from Aurora Textiles in Dubai. Explore premium unstitched shirting fabrics in poly-cotton and blended finishes—available for bulk orders across UAE &amp; MENA." />
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
                       Spaadaa Fabrics
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Intro: Spaadaa logo left, heading + text right */}
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
                {/* Left: Spaadaa brand logo */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "420px",
                        height: "300px",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/spaadaa-1.webp"
                        alt="Spaadaa Logo"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: heading + paragraph */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                            textAlign: "center",
                        }}
                    >
                       Spaadaa Shirting Fabrics
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
                        Aurora Textiles is a leading supplier of men's shirting fabrics in Dubai, specializing in
                        premium brands like <strong>Spaadaa</strong>. We offer a carefully curated selection of{" "}
                        <strong>Spaadaa shirting fabrics</strong>, known for their comfort, finish, and suitability for
                        everyday and business wear. Our fabrics are ideal for designers, tailors, and uniform
                        manufacturers seeking consistent quality and commercial-grade durability.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — Designed for Men's Shirting Needs: text left, image right */}
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
                {/* Left: heading + paragraph */}
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
                    Designed for Men’s Shirting Needs
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
                        At Aurora Textiles, we carry <strong>Spaadaa shirting fabrics</strong>, ensuring a focused
                        inventory that meets the demands of men's fashion. These fabrics are available in various blends
                        including poly-cotton and cotton-linen-like textures. They are easy to stitch, breathable, and
                        ideal for shirts meant for formal or semi-formal use.
                    </p>
                </div>

                {/* Right: man in dark checked suit image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "460px",
                        height: "480px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/spaadaa-2.webp"
                        alt="Designed for Men's Shirting Needs"
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

            {/* SECTION 3 — Material Options & Designs: image left, text right */}
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
                {/* Left: man in grey suit on blue background image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "540px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/spaadaa-3.webp"
                        alt="Material Options for Spaadaa Shirtings"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: heading + bullet list + paragraph */}
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
                        Material Options & Designs for Spaadaa Shirtings
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
                            color: "#333",
                            marginBottom: "16px",
                        }}
                    >
                        Our Spaadaa shirting range includes:
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
                        <li style={{ marginBottom: "10px" }}>Poly-Cotton Blends</li>
                        <li style={{ marginBottom: "10px" }}>Tencel Blends</li>
                        <li style={{ marginBottom: "10px" }}>Cotton-Feel Poly Blends</li>
                        <li style={{ marginBottom: "10px" }}>Printed Shirtings</li>
                        <li style={{ marginBottom: "10px" }}>Jacquard and Textured Finishes</li>
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
                        These fabrics are known for their fine finish, consistent dyeing, and easy maintenance, making
                        them an excellent choice for both tailored shirts and mass production.
                    </p>
                </div>
            </section>

            {/* SECTION 4 — Sourcing Spaadaa with Aurora: text + button left, fabric image right */}
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
                {/* Left: heading + paragraph + button */}
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
                        Sourcing Spaadaa with Aurora Textiles
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
                            color: "#333",
                            marginBottom: "32px",
                        }}
                    >
                        Aurora Textiles supplies <strong>Spaadaa shirting fabrics</strong> across Dubai and exports to
                        MENA countries. We work with retail brands, wholesalers, and corporate tailoring units to ensure
                        timely delivery and bulk availability. As a trusted textile partner, we prioritize fabric
                        reliability and responsive service.
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

                {/* Right: dark Spaadaa fabric roll close-up image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "560px",
                        height: "400px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/spaadaa-4.webp"
                        alt="Spaadaa Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 5 — FAQ: image left, accordion right */}
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
                {/* Left — image 50%, height driven by right column */}
                <div style={{
                    flex: "0 0 calc(50% - 30px)",
                    width: "calc(50% - 30px)",
                    height: `${faqImgHeight}px`,
                    minHeight: "420px",
                    transition: "height 0.4s ease",
                    overflow: "hidden",
                    borderRadius: "8px",
                }}>
                    <img
                        src="/spaadaa-5.webp"
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
                        Faq
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