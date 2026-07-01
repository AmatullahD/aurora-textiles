import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function RasmEthnicsPage() {
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const faqColRef = useRef(null);
    const [faqImgHeight, setFaqImgHeight] = useState(480);

    useLayoutEffect(() => {
        const el = faqColRef.current;
        if (!el) return;
        setFaqImgHeight(el.offsetHeight);
        const ro = new ResizeObserver(() => {
            setFaqImgHeight(el.offsetHeight);
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, [openFaq]);

    const faqs = [
        {
            question: "What types of garments can be made from Rasm by Sammaan fabrics?",
            answer:
                "These fabrics are perfect for men's ethnic garments like kurtas, sherwanis, jackets, and festive Indo-western outfits.",
        },
        {
            question: "Are these fabrics available in bulk for tailoring businesses?",
            answer:
                "Yes, Aurora Textiles offers bulk supply of Rasm Ethnic fabrics for tailoring businesses, wholesalers, and fashion retailers across Dubai and the MENA region.",
        },
        {
            question: "Are Rasm fabrics pre-stitched or unstitched?",
            answer:
                "All Rasm fabrics by Sammaan are available unstitched, giving tailors and designers the freedom to craft garments as per their unique fit and style.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Rasm Ethnics by Sammaan - Luxury Ethnic Fabrics by Aurora Textiles</title>
                <meta name="description" content="Check out Rasm Ethnics Fabrics by Sammaan at Aurora Textiles – your trusted source for premium luxury ethnic fabrics for men in Dubai. Shop high-quality, stylish fabrics perfect for traditional and festive wear in Dubai." />

                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Product", "name": "Rasm Ethnics by Sammaan", "description": "Buy Rasm Ethnics by Sammaan luxury ethnic fabrics wholesale in Dubai from Aurora Textiles. Premium ethnic fabric collection for men in UAE.", "brand": { "@type": "Brand", "name": "Rasm Ethnics by Sammaan" }, "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": { "@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app" } }, "url": "https://aurora-textiles.vercel.app/products/rasm-ethnics-by-sammaan" })}</script>
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
                        Rasm Ethnics by Sammaan
                    </h1>
                </div>
            </section>

            {/* ── SECTION 1: Logo Left + Text Right ── */}
            <section
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    display: "flex",
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
                        src="/ethnic-icon1.webp"
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
                            color: "#344886",
                            marginBottom: "28px",
                            lineHeight: "1.2",
                            margin: "0 0 28px 0",
                        }}
                    >
                        Rasm Ethnics By Sammaan – Supplied By Aurora Textiles
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.4",
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
                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Text Left */}
                <div style={{ flex: 1, minWidth: "280px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "40px",
                            fontWeight: "700",
                            color: "#344886",
                            marginBottom: "24px",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Ethnic Fabrics For Men With Modern Versatility
                    </h2>
                    <p
                        style={{
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
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
                    {/* Button */}
                    <div
                        onClick={() => (window.location.href = "/contact-us")}
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
                                padding: "14px 32px",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "18px",
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

                {/* Image Right */}
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
                    <img
                        src="/rasm-1.webp"
                        alt="Ethnic Fabrics for Men"
                        style={{
                            width: "100%",
                            height: "480px",
                            objectFit: "contain",
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

                    gap: "60px",
                    flexWrap: "wrap",
                }}
            >
                {/* Image Left */}
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
                    <img
                        src="/rasm-2.webp"
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
                            fontSize: "40px",
                            fontWeight: "700",
                            color: "#344886",
                            marginBottom: "24px",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Wide Range of Unstitched Fabrics
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.4",
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
                                    fontSize: "19px",
                                    color: "#333",
                                    lineHeight: "1.4",
                                    marginBottom: "8px",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p
                        style={{
                            fontSize: "19px",
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
                            color: "#344886",
                            marginBottom: "24px",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Trusted Supplier Of Rasm Ethnic Fabrics
                    </h2>
                    <p
                        style={{
                            fontSize: "19px",
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
                        src="/rasm-3.webp"
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
                    width: "100%",
                    maxWidth: "1100px",
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
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <img
                        src="/rasm-4.webp"
                        alt="FAQ Image"
                        style={{
                            width: "100%",
                            height: `${faqImgHeight}px`,
                            minHeight: "300px",
                            objectFit: "contain",
                            display: "block",
                            borderRadius: "8px",
                            transition: "height 0.4s ease",
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
                                            fontFamily: "'Cinzel Decorative', sans-serif",
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