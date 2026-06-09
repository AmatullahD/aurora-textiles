import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function ReidAndTaylorPage() {
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const faqColRef = useRef(null);
    const [faqImgHeight, setFaqImgHeight] = useState(500);

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

    const navigate = useNavigate();

    const faqs = [
        {
            question: "What types of Reid & Taylor fabrics do you supply?",
            answer:
                "We offer a wide range of original Reid & Taylor suitings and shirtings, including wool-rich, poly wool, merino wool and easy-care blends designed for tailored menswear.",
        },
        {
            question: "Can I place bulk orders for Reid & Taylor fabrics?",
            answer:
                "Yes, Aurora Textiles specializes in bulk and wholesale orders for Reid & Taylor fabrics. We ensure consistent quality, reliable stock availability, and quick turnaround on large orders.",
        },
        {
            question: "Do you export Reid & Taylor fabrics to other countries?",
            answer:
                "Yes, we export Reid & Taylor fabrics across the MENA region including Oman, Qatar, Bahrain, and other GCC countries. Contact us for export inquiries and pricing.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>


            <Helmet>
                <title>Reid &amp; Taylor Men&#39;s Suiting &amp; Shirting Fabrics| Buy Reid and Taylor Fabrics in UAE</title>
                <meta name="description" content="Aurora Textiles offers Reid &amp; Taylor premium collection of suitings and shirtings Men&#39;s Fabrics in Dubai, UAE. Buy Reid and Taylor Fabrics and fill your wardrobe with our collection of men &amp; formal wear." />
            
        <script type="application/ld+json">{JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Reid & Taylor Fabrics", "description": "Buy Reid and Taylor men's suiting and shirting fabrics wholesale in Dubai, UAE from Aurora Textiles. Luxury British heritage fabrics.", "brand": {"@type": "Brand", "name": "Reid & Taylor"}, "offers": {"@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": {"@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app"}}, "url": "https://aurora-textiles.vercel.app/products/reid-and-taylor"})}</script>
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
                        Reid & Taylor Fabrics
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
                        width: window.innerWidth < 768 ? "100%" : "500px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/reidAndTaylor.webp"
                        alt="Reid and Taylor Logo"
                        style={{
                            width: "100%",
                            maxWidth: "500px",
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
                            fontSize: window.innerWidth < 768 ? "28px" : "44px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Reid & Taylor Fabrics for Men's Wear
                    </h2>
                    <p
                        style={{
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: 0,
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        <strong>Aurora Textiles</strong> is a trusted distributor of{" "}
                        <strong>Reid & Taylor men's fabrics</strong> in Dubai, delivering
                        premium <strong>suiting</strong> and <strong>shirtings</strong> for
                        fashion-forward and professional menswear collections. Known for its
                        heritage of excellence, <strong>Reid & Taylor</strong> offers a
                        perfect blend of elegance, comfort, and performance—making it a
                        preferred choice for designers, retailers, and tailors across the UAE.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 2 — Heading + two paragraphs left + image right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                   
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + two paragraphs */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "38px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Reid & Taylor Suiting
                    </h2>
                    <p
                        style={{
                            fontSize: "17px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: "0 0 20px 0",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        Our extensive collection of{" "}
                        <strong>Reid & Taylor suiting fabrics</strong> includes 100% wool and
                        poly wool blends that offer a refined drape, natural stretch, and
                        superior finish. These fabrics are perfect for formal suits, blazers,
                        ceremonial wear, and business attire. With options that combine
                        timeless patterns and modern tones, Reid & Taylor suitings bring out
                        sharp, structured looks without compromising on comfort.
                    </p>
                    <p
                        style={{
                            fontSize: "17px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: 0,
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        At <strong>Aurora Textiles</strong>, we ensure bulk availability of
                        authentic Reid & Taylor suiting fabrics to meet the production needs
                        of tailors, fashion houses, and uniform manufacturers across Dubai and
                        the wider UAE.
                    </p>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/reid&taylor-1.webp"
                        alt="Reid and Taylor Suiting"
                        style={{
                            width: "100%",
                            height: "560px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "6px",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 3 — Image left + heading & paragraph right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <img
                        src="/reid&taylor-2.webp"
                        alt="Reid and Taylor Shirting"
                        style={{
                            width: "100%",
                            height: "560px",
                            objectFit: "contain",
                            display: "block",
                            borderRadius: "6px",
                        }}
                    />
                </div>

                {/* Right — heading + paragraph */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "45px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 15px 0",
                        }}
                    >
                        Reid & Taylor Shirting
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: 0,
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        <strong>Reid & Taylor shirting fabrics</strong> are created using
                        yarn of only the highest quality fibres and known for their crisp
                        feel, breathable construction, and polished appeal. Whether you need
                        classic plains, subtle stripes, or elegant textures, these fabrics
                        are ideal for creating Formal, Informal, and premium business wear.
                        We supply Reid & Taylor shirtings in bulk, with consistent quality
                        and finish you can rely on.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 4 — Heading + para + bullet list + CTA button left + image right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                   
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + para + bullets + button */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "40px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Supplying Reid & Taylor Men's Fabric Across the UAE
                    </h2>
                    <p
                        style={{
                            fontSize: "17px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: "0 0 16px 0",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        As dedicated textile suppliers,{" "}
                        <strong>Aurora Textiles</strong> works closely with manufacturers,
                        boutiques, and tailoring units to deliver premium{" "}
                        <strong>Reid & Taylor men's fabrics</strong> across Dubai and export
                        to the MENA region. We support:
                    </p>

                    <ul
                        style={{
                            margin: "0 0 30px 0",
                            paddingLeft: "40px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        {[
                            "Bulk and wholesale fabric supply",
                            "Quick turnaround on large orders",
                            "Sourcing of latest Reid & Taylor collections",
                            "Tailor-friendly, ready-to-stitch fabric options",
                            "Original Reid & Taylor labeling and quality",
                            "Competitive wholesale pricing",
                            "Reliable stock availability",
                            "Expert support and logistics across the UAE",
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "17px",
                                    color: "#333",
                                    lineHeight: "1.2",
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Button */}
                    <a
                        href="/contact-us"
                        onClick={(e) => { e.preventDefault(); navigate("/contact-us"); window.scrollTo(0, 0); }}
                        style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none" }}
                    >
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
                    </a>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/reid&taylor-3.webp"
                        alt="Reid and Taylor Fabric Supply UAE"
                        style={{
                            width: "100%",
                            height: "680px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "6px",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 5 — FAQ: image left + accordion right
            ───────────────────────────────────────── */}
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
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <img
                        src="/reid&taylor-4.webp"
                        alt="FAQ Image"
                        style={{
                            width: "100%",
                            height: `${faqImgHeight}px`,
                            minHeight: "300px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "15px",
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
                                {/* Question row */}
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