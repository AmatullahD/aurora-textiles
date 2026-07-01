import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function OxfordPage() {
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
            question: "Do you supply Oxford fabric in bulk?",
            answer:
                "Yes, Aurora Textiles offers Oxford fabric in bulk quantities with consistent quality and competitive pricing for garment manufacturers, brands, and tailors.",
        },
        {
            question: "Can I order Oxford fabric in custom colors or finishes?",
            answer:
                "Yes, we can source Oxford fabrics in a wide range of custom colors and finishes to match your brand requirements. Contact our team to discuss your specific needs.",
        },
        {
            question: "Is Oxford fabric suitable for uniforms?",
            answer:
                "Absolutely. Oxford fabrics are widely used for corporate uniforms, school uniforms, and hospitality uniforms due to their durability, structure, and professional appearance.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>


            <Helmet>
                <title>Oxford Fabric in Dubai | Shop Oxford Men&#39;s Shirt Fabric Material</title>
                <meta name="description" content="Oxford fabric is elegant, durable, &amp; breathable. Shop Oxford Fabric in Dubai, UAE at Aurora Textiles to sew lightweight and stylish men&#39;s casual, formal, and daily wear shirts." />

                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Product", "name": "Oxford Fabrics", "description": "Shop Oxford men's shirt fabric material wholesale in Dubai from Aurora Textiles. Premium Oxford fabric for men's shirts in UAE.", "brand": { "@type": "Brand", "name": "Oxford" }, "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": { "@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app" } }, "url": "https://aurora-textiles.vercel.app/products/oxford" })}</script>
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
                        Oxford Fabrics
                    </h1>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 1 — Heading + paragraph left, Oxford logo image right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1100px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — heading + paragraph */}
                <div style={{ flex: "1 1 50%", minWidth: "230px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "28px" : "44px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 28px 0",
                        }}
                    >
                        Oxford Fabric for Men's Clothing Supplier in UAE
                    </h2>
                    <p
                        style={{
                            fontSize: "17px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: 0,
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        At{" "}
                        <a
                            href="/"
                            style={{
                                color: "#1a4fd6",
                                fontWeight: "700",
                                textDecoration: "none",
                            }}
                        >
                            Aurora Textiles
                        </a>
                        , we
                        supply premium <strong>Oxford shirting fabrics</strong> exclusively
                        for men's fashion needs in Dubai, UAE and across the MENA Region.
                        Designed for structure, style, and daily wear, Oxford fabrics are a
                        staple in shirtmaking, from refined formalwear to relaxed weekend
                        looks. Our commitment is to support tailors, retailers, and garment
                        manufacturers with reliable quality, professional service, and
                        flexible bulk ordering. Whether you're developing a private label or
                        scaling uniform production, Aurora Textiles makes it simple to source
                        top-grade shirting material.
                    </p>
                </div>

                {/* Right — Oxford logo image */}
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
                        src="/oxford.webp"
                        alt="Oxford Brand Logo"
                        style={{
                            width: "100%",
                            maxWidth: "420px",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 2 — Image left + heading & paragraph right
            ───────────────────────────────────────── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1100px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image */}
                <div style={{ flex: "0 0 auto", width: window.innerWidth < 768 ? "100%" : "420px" }}>
                    <img
                        src="/oxford-1.webp"
                        alt="Oxford Shirt Men"
                        style={{
                            width: "100%",
                            height: "420px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "6px",
                        }}
                    />
                </div>

                {/* Right — heading + paragraph */}
                <div style={{ flex: "1 1 0" }}>
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
                        Oxford Shirt Men – Tailored for Style & Function
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.5",
                            margin: 0,
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        Built for versatility, our collection of Oxford's shirtings fabric
                        suits the diverse needs of modern menswear—from executive office
                        looks to everyday smart casuals. Shirt makers crafting high-end and
                        value-driven pieces alike benefit from our fabric's easy tailoring,
                        crisp appearance, and wide color range. Whether you're producing a
                        soft blue button-down or a structured uniform shirt, Oxford's fabrics
                        help you deliver consistency with every stitch.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 3 — Heading + paragraph left + image right
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
                {/* Left — heading + paragraph */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "36px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Oxford Shirt Fabric
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
                        At <strong>Aurora Textiles</strong>, we supply high-quality{" "}
                        <strong>Oxford fabrics</strong> ideal for crafting classic men's
                        shirts. Known for their sturdy yet breathable weave, Oxford shirting
                        fabrics provide structure without stiffness—making them a preferred
                        choice for both formal and casual shirting. Our collection includes
                        traditional <strong>Oxford cotton shirting fabric</strong>, lightweight
                        blends, and wrinkle-resistant options suited for high-use applications
                        such as uniforms, office wear, and everyday fashion.
                    </p>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/oxford-2.webp"
                        alt="Oxford Shirt Fabric"
                        style={{
                            width: "100%",
                            height: "340px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "15px",
                        }}
                    />
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 4 — Image left + heading, paragraphs & bullet list right
                (sections 4 & 5 from screenshots are one continuous section)
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
                {/* Left — tall image */}
                <div style={{ flex: "0 0 auto", width: window.innerWidth < 768 ? "100%" : "420px" }}>
                    <img
                        src="/oxford-3.webp"
                        alt="Oxford Shirting Dubai"
                        style={{
                            width: "100%",
                            height: "620px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "15px",
                        }}
                    />
                </div>

                {/* Right — heading + paragraphs + bullets */}
                <div style={{ flex: "1 1 0" }}>
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
                        Shop Shirting Fabric for Oxford in Dubai
                    </h2>

                    <p
                        style={{
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.3",
                            margin: "0 0 20px 0",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        As a leading name in fabric distribution, Aurora Textiles serves as a
                        dependable fabric shop for Oxford Shirting textiles in Dubai.{" "}
                        <strong>
                            We take pride in being the first to introduce{" "}
                            <em>Oxford's branded fabrics</em> to the Gulf market and remain
                            their exclusive distributors in the region.
                        </strong>{" "}
                        We maintain ready stock for popular colors and textures, provide quick
                        order turnarounds, and offer flexible support for designers,
                        manufacturers, and fashion brands. Our clients value not only the
                        quality of our Oxford fabrics but also our transparency, logistics
                        support, and deep industry understanding.
                    </p>

                    <p
                        style={{
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: "0 0 14px 0",
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: "700",
                        }}
                    >
                        Our Oxford Shirting collection also includes:
                    </p>

                    <ul
                        style={{
                            margin: "0 0 20px 0",
                            paddingLeft: "25px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        {[
                            {
                                label: "Oxford shirt fabric",
                                desc: " available in solid colors, yarn-dyed patterns, and ",
                                bold2: "pinpoint weaves",
                                suffix: " for a finer, more polished look ideal for dress shirts.",
                            },
                            {
                                label: "Oxford cotton fabric",
                                desc: " for everyday comfort and breathability",
                            },
                            {
                                label: "Polyester Oxford fabric",
                                desc: " for added wrinkle resistance",
                            },
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: "17px",
                                    color: "#333",
                                    lineHeight: "1.3",
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                <strong>{item.label}</strong>
                                {item.bold2 ? (
                                    <>
                                        {item.desc}
                                        <strong>{item.bold2}</strong>
                                        {item.suffix}
                                    </>
                                ) : (
                                    item.desc
                                )}
                            </li>
                        ))}
                    </ul>

                    <p
                        style={{
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: 0,
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        Oxford's fabrics are carefully selected to match the expectations of
                        professional tailors, menswear brands, and large-scale uniform
                        suppliers. Every fabric roll undergoes quality checks to ensure
                        consistency, durability, and customer satisfaction.
                    </p>
                </div>
            </section>

            {/* ─────────────────────────────────────────
                SECTION 5 — Why Choose Aurora: star bullets + CTA left + image right
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
                {/* Left — heading + star bullets + CTA para + button */}
                <div style={{ flex: "1 1 45%", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontSize: window.innerWidth < 768 ? "26px" : "40px",
                            fontWeight: "700",
                            color: "#344886",
                            fontFamily: "'Cinzel Decorative', serif",
                            lineHeight: "1.2",
                            margin: "0 0 28px 0",
                        }}
                    >
                        Why Choose Aurora Textiles?
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            marginBottom: "28px",

                        }}
                    >
                        {[
                            "Dedicated to men’s shirting fabrics",
                            "Strong inventory and fabric continuity",
                            "Bulk pricing for wholesale buyers",
                            "Delivery across Dubai and the UAE with export support for the GCC",
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
                                        color: "#344886",
                                        letterSpacing: "0.6px",
                                        margin: 0,
                                        lineHeight: "1.3",
                                        fontFamily: "'Cinzel Decorative', sans-serif",
                                    }}
                                >
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p
                        style={{
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            margin: "0 0 28px 0",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        <span style={{ color: "#3b39d6", fontWeight: "600" }}>
                            Get in touch
                        </span>{" "}
                        with Aurora Textiles today to request swatches, inquire about
                        pricing, or place your wholesale order.
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
                                e.currentTarget.style.borderColor = "#344886";
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
                            }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Right — image */}
                <div style={{ flex: "1 1 50%", minWidth: "280px" }}>
                    <img
                        src="/oxford-4.webp"
                        alt="Aurora Textiles Fabric Store"
                        style={{
                            width: "100%",
                            height: "530px",
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
                    alignItems: "stretch",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <img
                        src="/oxford-5.webp"
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