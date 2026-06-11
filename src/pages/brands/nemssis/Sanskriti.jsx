import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function SanskritiPage() {
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
            question: "What is unique about Sanskriti ethnic fabrics for men?",
            answer:
                "These fabrics feature timeless prints and versatile textures crafted especially for ethnic menswear. They combine tradition with modern wearability.",
        },
        {
            question: "Do you offer customization or guidance on selection?",
            answer:
                "Yes, our team at Aurora Textiles provides expert guidance on fabric selection, customization options, and design recommendations tailored to your specific requirements.",
        },
        {
            question: "Are Sanskriti fabrics available for export or large-scale retail?",
            answer:
                "Absolutely. We supply Sanskriti by Nemssis fabrics across the UAE and MENA region, and support large-scale retail and export orders with consistent quality and timely logistics.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Sanskriti by Nemssis - Luxury Ethnic Print &amp; Embroidery Fabrics</title>
                <meta name="description" content="Check out Sanskriti Ethnic by Nemssis at Aurora Textiles – your trusted source for premium luxury ethnic Print and embroidery fabrics for men. Shop high-quality, stylish fabrics perfect for traditional and festive wear in Dubai." />
            
        <script type="application/ld+json">{JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Sanskriti by Nemssis", "description": "Buy Sanskriti by Nemssis luxury ethnic print and embroidery fabrics wholesale in Dubai from Aurora Textiles. The art of embroidery from across India.", "brand": {"@type": "Brand", "name": "Sanskriti by Nemssis"}, "offers": {"@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": {"@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app"}}, "url": "https://aurora-textiles.vercel.app/products/sanskriti-by-nemssis"})}</script>
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
                        Sanskriti by Nemssis
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
                            maxWidth: "320px",
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

                        Sanskriti Ethnic by Nemssis – Supplied by Aurora Textiles, Dubai
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
                        At Aurora Textiles, we bring you{" "}
                        <strong>Sanskriti by Nemssis</strong>, a thoughtfully curated line
                        of men's ethnic fabrics that blend heritage with functionality.
                        Developed for today's modern yet culturally rooted wardrobe,
                        Sanskriti fabrics celebrate craftsmanship through elegant textures,
                        statement prints, and versatile fabric finishes. As a trusted ethnic
                        fabric supplier in Dubai, we ensure that every meter you receive is
                        suitable for both bespoke tailoring and high-volume production.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — Ethnic Print Fabrics: Text left, Image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                   
                    gap: "60px",
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Text — 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "40px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.25",
                            marginBottom: "24px",
                            marginTop: 0,
                        }}
                    >
                        Ethnic Print Fabrics For Elegant Occasions
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
                        <strong>Sanskriti ethnic print fabrics</strong> reflect the refined
                        taste of men who value subtlety and style in their traditional wear.
                        These prints are inspired by regional patterns, detailed but
                        wearable, designed to bring visual richness to kurtas, ethnic
                        jackets, and semi-formal menswear. With breathable fabric options
                        and color palettes suited for every festive mood, this line is a
                        go-to for ethnic elegance.
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
                        height: "480px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/sanskriti-1.webp"
                        alt="Ethnic Print Fabrics"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 3 — Fabric Types & Finish Options: Image left, Text right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                   
                    gap: "60px",
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Image — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: "440px",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/sanskriti-2.webp"
                        alt="Fabric Types"
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
                        Fabric Types &amp; Finish Options
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
                        Sanskriti by Nemssis is available in a well-balanced range of:
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
                        <li>Lightweight Ethnic Dress Fabrics (Unstitched)</li>
                        <li>Subtle Jacquards and Printed Blends</li>
                        <li>Poly-viscose, Poly-modal, and Comfort-Soft Finishes</li>
                        <li>Drapable Blends Designed for Movement and Fit</li>
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
                        From groomwear to event-ready kurtas, these fabrics are cut to meet
                        the expectations of designers and tailors looking for reliable ethnic
                        material.
                    </p>
                </div>
            </section>

            {/* SECTION 4 — What Sets Aurora Apart: Text left, Image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                   
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
                        What Sets Aurora Textiles Apart?
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
                        We don't just stock fabrics—we partner with fashion-forward clients
                        across the UAE and MENA region to provide reliable sourcing for
                        brands, tailors, and retailers. Our supply of{" "}
                        <strong>Sanskriti by Nemssis</strong> ensures access to consistent
                        quality, trend-aligned designs, and logistics you can count on for
                        your seasonal or ongoing ethnicwear needs.
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
                        src="/sanskriti-3.webp"
                        alt="Aurora Textiles"
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
                        minHeight: "300px",
                        transition: "height 0.4s ease",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/sanskriti-4.webp"
                        alt="FAQ Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
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
                            marginBottom: "28px",
                            marginTop: 0,
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

            {/* LAST LINE before Footer */}
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "24px 20px 48px 20px",
                    boxSizing: "border-box",
                }}
            >
                <p
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "16px",
                        color: "#333",
                        margin: 0,
                        lineHeight: "1.4",
                    }}
                >
                    Get in touch with Aurora Textiles to supply Sanskriti by Nemssis ethnic fabrics—crafted for refined tradition and modern versatility.
                </p>
            </div>

            {/* FOOTER */}
            <Footer />
            <ScrollToTop />
        </div>
    );
}