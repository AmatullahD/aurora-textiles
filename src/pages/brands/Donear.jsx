import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function DonearPage() {
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const faqColRef = useRef(null);
    const [faqImgHeight, setFaqImgHeight] = useState(480);

    useEffect(() => {
        if (faqColRef.current) {
            setFaqImgHeight(faqColRef.current.offsetHeight);
        }
    }, [openFaq]);

    const faqs = [
        {
            question: "What types of Donear fabrics does Aurora Textiles offer?",
            answer: (
                <>
                    We supply a full range of <strong>Donear suitings</strong> and{" "}
                    <strong>Donear shirtings</strong>, including poly viscose blends,
                    wool-rich suiting fabrics, and easy-care shirtings ideal for men's
                    fashion and uniforms.
                </>
            ),
        },
        {
            question: "Is Donear fabric suitable for corporate uniforms?",
            answer: (
                <>
                    Yes, Donear fabrics are widely used for corporate uniforms due to their
                    durability, wrinkle resistance, and professional finish. We supply bulk
                    quantities to businesses across Dubai and the UAE.
                </>
            ),
        },
        {
            question: "Does Aurora Textiles offer delivery across Dubai and the UAE?",
            answer: (
                <>
                    Absolutely. We provide timely deliveries across Dubai and all emirates
                    of the UAE, ensuring your orders arrive on schedule and in perfect
                    condition.
                </>
            ),
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>


            <Helmet>
                <title>Buy Donear Men's Suiting &amp; Shirting Fabrics - Aurora Textiles</title>
                <meta name="description" content="Buy Donear Men's cottons, linens, polyester blends, worsteds and more Unstitched Shirting &amp; Suiting Fabrics at Aurora Textile in Dubai, UAE. Contact or visit our shop to buy now." />
            
        <script type="application/ld+json">{JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Donear Fabrics", "description": "Buy Donear men's suiting and shirting fabrics wholesale in Dubai from Aurora Textiles. Premium Donear fabric collection in UAE.", "brand": {"@type": "Brand", "name": "Donear"}, "offers": {"@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": {"@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app"}}, "url": "https://aurora-textiles.vercel.app/products/donear"})}</script>
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
                            fontFamily: "'Cinzel Decorative', sans-serif", 
                        }}
                    >
                        Donear Fabrics
                    </h1>
                </div>
            </section>

            {/*  SECTION 1 */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 0 auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — 50% */}
                <div
                    style={{
                        width: window.innerWidth < 768 ? "100%" : "50%",
                        display: "flex",
                        flexDirection: "column",
                       
                    }}
                >
                    <img
                        src="/donear-logo.png"
                        alt="Donear Logo"
                        style={{
                            width: "100%",
                            maxWidth: "550px",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />

                </div>

                {/* Right — 50% */}
                <div
                    style={{
                        width: window.innerWidth < 768 ? "100%" : "50%",
                    }}
                >
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "44px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.15",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Donear Fabrics for <br /> Men's Clothing
                    </h2>

                    <p
                        style={{
                            fontSize: "17px",
                            color: "#333",
                            lineHeight: "1.5",
                            margin: 0,
                            fontFamily: "'poppins', sans-serif",
                        }}
                    >
                        At <strong>Aurora Textiles</strong>, we are proud to supply premium{" "}
                        <strong>Donear fabrics</strong> for men's clothing needs across Dubai
                        and the UAE. Renowned for quality, innovation, and performance,{" "}
                        <strong>Donear</strong> is a trusted name in the world of shirting and
                        suiting textiles. As dedicated fabric suppliers, we offer businesses
                        access to original Donear suitings and shirtings, ensuring consistency,
                        reliability, and professional-grade fabric supply for tailoring,
                        uniforms, and men's fashion collections.
                    </p>
                </div>
            </section>


            {/* ─────────────────────────────────────────
                SECTION 2 —
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                }}
            >
                <h2
                    style={{
                        fontSize: window.innerWidth < 768 ? "26px" : "42px",
                        fontWeight: "700",
                        color: "#344886",
                        fontFamily: "'Cinzel Decorative', serif",
                        lineHeight: "1.2",
                        margin: "0 0 30px 0",
                        textAlign: "center",
                    }}
                >
                    Donear Suitings – Style, Comfort, and Durability
                </h2>
                <p
                    style={{
                        fontSize: "17px",
                        color: "#333",
                        lineHeight: "1.5",
                        margin: "0 0 20px 0",
                        fontFamily: "'poppins', sans-serif",
                    }}
                >
                    Our range of <strong>Donear suitings</strong> includes a variety of poly
                    viscose blends, wool-rich fabrics, and innovative textures perfect for
                    crafting formal suits, blazers, and business attire. Known for their
                    wrinkle resistance, excellent drape, and color retention, Donear suitings
                    are ideal for retail brands, tailoring houses, and corporate uniform
                    programs.
                </p>
                <p
                    style={{
                        fontSize: "17px",
                        color: "#333",
                        lineHeight: "1.5",
                        margin: 0,
                        fontFamily: "'poppins', sans-serif",
                    }}
                >
                    Whether you're looking for lightweight suiting fabrics for all-season
                    wear or rich textures for special occasions, Aurora Textiles ensures you
                    receive consistent quality and bulk availability of genuine Donear
                    materials.
                </p>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 3 —
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                 
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + star bullet list */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "38px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'cinzel decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 32px 0",
                        }}
                    >
                        Why Choose Aurora Textiles for Donear Fabric?
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {[
                            "Exclusive Authorized Distributor & Dealer of Donear Fabrics in UAE",
                            "Specialization in Fabrics for Men's Clothing",
                            "Bulk and Wholesale Solutions",
                            "Strong Sourcing Network Ensuring Genuine Donear Fabrics",
                            "Reliable Service with a Focus on Client Satisfaction",
                        ].map((point, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "14px",
                                }}
                            >
                                <span
                                    style={{
                                        color: "#b8860b",
                                        fontSize: "22px",
                                        lineHeight: "1.3",
                                        flexShrink: 0,
                                    }}
                                >
                                    ✦
                                </span>
                                <p
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#1e2a5e",
                                        letterSpacing: "0.8px",
                                        margin: 0,
                                        lineHeight: "1.4",
                                        fontFamily: "'Cinzel decorative', serif",
                                    }}
                                >
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/donear-1.webp"
                        alt="Donear Fabric Swatches"
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
                SECTION 4 —
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                   
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >

                {/* Left — rectangular image */}
                <div
                    style={{
                        flex: "1 1 45%",
                        minWidth: "280px",
                        overflow: "hidden",
                        borderRadius: "8px",
                    }}
                >
                    <img
                        src="/donear-2.png"
                        alt="Donear Shirting"
                        style={{
                            width: "100%",
                            height: "360px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>



                {/* Right — heading + paragraph */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "42px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 20px 0",
                        }}
                    >
                        Donear Shirting
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.5",
                            margin: 0,
                            fontFamily: "'poppins', sans-serif",
                        }}
                    >
                        <strong>Donear shirting fabrics</strong> are engineered for comfort
                        and durability, combining smart designs with easy maintenance. From
                        classic plains and checks to sophisticated textures, Donear shirtings
                        are suited for office wear, casual shirts, and uniforms. Aurora
                        Textiles supplies a wide selection of Donear shirting fabrics to meet
                        diverse styling and manufacturing needs, helping brands deliver
                        impeccable garments every time.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 5 
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                   
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + bullets + button */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "42px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 20px 0",
                        }}
                    >
                        Donear Fabric
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.3",
                            margin: "0 0 14px 0",
                            fontFamily: "'poppins', sans-serif",
                        }}
                    >
                        Sourcing <strong>Donear fabric</strong> through Aurora Textiles means
                        gaining a reliable partner for your production and retail needs. We
                        ensure:
                    </p>

                    <ul
                        style={{
                            margin: "0 0 18px 0",
                            paddingLeft: "50px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                        }}
                    >
                        {[
                            "Access to the latest collections and textures",
                            "Competitive wholesale pricing",
                            "Consistent stock availability",
                            "Timely deliveries across Dubai and the UAE",
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "18px",
                                    color: "#333",
                                    lineHeight: "1.3",
                                    fontFamily: "'poppins', sans-serif",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p
                        style={{
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.3",
                            margin: "0 0 28px 0",
                            fontFamily: "'poppins', sans-serif",
                        }}
                    >
                        As a committed men's fabric supplier, we help businesses maintain
                        product quality, control costs, and meet customer expectations without
                        hassle.
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

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/donear-3.webp"
                        alt="Donear Fabric Stack"
                        style={{
                            width: "100%",
                            height: "460px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>
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
                {/* Left — image 50% */}
                <div style={{ flex: "0 0 50%", width: "50%" }}>
                    <img
                        src="/donear-4.webp"
                        alt="FAQ Image"
                        style={{
                            width: "100%",
                            height: `${faqImgHeight}px`,
                            minHeight: "300px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "8px",
                            transition: "height 0.4s ease",
                        }}
                    />
                </div>

                {/* Right — FAQ accordion 50% */}
                <div ref={faqColRef} style={{ flex: "0 0 calc(50% - 60px)", width: "calc(50% - 60px)" }}>
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
                                            fontSize: "18px",
                                            fontWeight: "700",
                                            color: openFaq === i
                                                ? "#b9972f"
                                                : hoveredFaq === i
                                                    ? "#070e46"
                                                    : "#0b18a1",
                                            margin: 0,
                                            lineHeight: "1.5",
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
                                                fontSize: "17px",
                                                color: "#333",
                                                lineHeight: "1.5",
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