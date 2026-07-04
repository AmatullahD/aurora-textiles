import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function GulliniPage() {
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
            question: "What types of Georgia Gullini fabrics are available at Aurora Textiles?",
            answer: "We offer a wide range of Georgia Gullini suit and blazer fabrics, including poly-wool blends, textured weaves, and self-checks—ideal for creating formal suits, trousers, and smart jackets.",
        },
        {
            question: "Can I buy Georgia Gullini fabrics in bulk for tailoring or resale?",
            answer: "Yes, we offer bulk purchasing options for tailors, fashion houses, and resellers. Contact us for wholesale pricing and minimum order quantities.",
        },
        {
            question: "Are Georgia Gullini suiting fabrics suitable for high-end formalwear?",
            answer: "Absolutely. Georgia Gullini fabrics are crafted with European quality standards, making them ideal for premium formalwear, bespoke suits, and luxury occasionwear.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Shop Georgia Gullini Shirting, Suitings, and Blazer Fabrics in Dubai</title>
                <meta name="description" content="Shop premium Georgia Gullini shirting, suiting, and blazer fabrics in Dubai with Aurora Textiles – trusted wholesale fabric suppliers for men's clothing across the UAE and MENA." />

                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Product", "name": "Georgia Gullini Fabrics", "description": "Shop Georgia Gullini shirting, suiting and blazer fabrics wholesale in Dubai. Premium Italian-quality fabrics by Aurora Textiles UAE.", "brand": { "@type": "Brand", "name": "Georgia Gullini" }, "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": { "@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app" } }, "url": "https://aurora-textiles.vercel.app/products/georgia-gullini-fabrics" })}</script>
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
                        Georgia Gullini Fabrics
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Intro: Logo images left, text right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto",
                    padding: "40px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "30px",
                }}
            >
                {/* LEFT SIDE */}
                <div
                    style={{
                        width: "50%",
                        position: "relative",
                        height: "420px",
                    }}
                >
                    {/* BACK IMAGE */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "20px",
                            left: "20px",
                            width: "250px",
                            height: "250px",
                            background: "#efefef",
                            border: "1px solid #ddd",
                        }}
                    >
                        <img
                            src="/georgia-gullini-1.webp"
                            alt="Georgia Gullini"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    {/* FRONT IMAGE */}
                    <div
                        style={{
                            position: "absolute",
                            top: "0",
                            right: "20px",
                            width: "250px",
                            height: "250px",
                            background: "#efefef",
                            border: "1px solid #ddd",
                            zIndex: 2,
                        }}
                    >
                        <img
                            src="/georgia-gullini-1.webp"
                            alt="Georgia Gullini"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div
                    style={{
                        width: "50%",
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "45px",
                            lineHeight: "1.25",
                            color: "#344886",
                            margin: "0 0 25px 0",
                            fontWeight: "700",
                        }}
                    >
                        Georgia Gullini Fabrics – Premium Suiting Solutions from Aurora Textiles
                    </h2>

                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: "1.4",
                            color: "#333",
                            margin: 0,
                        }}
                    >
                        At <strong>Aurora Textiles</strong>, we supply a refined
                        selection of <strong>Georgia Gullini suit</strong> and{" "}
                        <strong>blazer fabrics</strong>, trusted by tailors and
                        menswear brands across Dubai and the MENA region.
                        Known for their European-inspired quality and elegant
                        finish, Georgia Gullini fabrics are perfect for
                        formalwear, business attire, and premium occasionwear.
                    </p>
                </div>
            </section>


            {/* SECTION 2 — Suit Fabrics: text left, image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    gap: "60px",
                }}
            >
                {/* Left: text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.2",
                            marginBottom: "24px",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Georgia Gullini Suit Fabrics
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
                        Our offering includes a variety of <strong>Georgia Gullini suiting fabrics</strong> known for:
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
                        <li style={{ marginBottom: "12px" }}>Sharp drape and structure</li>
                        <li style={{ marginBottom: "12px" }}>Breathable poly-wool blends</li>
                        <li style={{ marginBottom: "12px" }}>Easy tailoring and wrinkle resistance</li>
                        <li style={{ marginBottom: "12px" }}>A broad selection of classic and contemporary colors</li>
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
                        These suiting materials are ideal for creating full suits, trousers, and structured formal
                        pieces. Whether for seasonal collections or bespoke tailoring, Georgia Gullini fabrics deliver
                        both style and substance.
                    </p>
                </div>

                {/* Right: image */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "540px",
                        height: "460px",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/gullini-2.webp"
                        alt="Georgia Gullini Suit Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 3 — Blazer Fabrics: image left, text right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    gap: "60px",
                }}
            >
                {/* Left: image */}
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
                        src="/gullini-3.webp"
                        alt="Georgia Gullini Blazer Fabric"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.2",
                            marginBottom: "24px",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Georgia Gullini Blazer Fabrics
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "18px",
                            lineHeight: "1.4",
                            color: "#333",
                            margin: 0,
                        }}
                    >
                        Looking to create standout blazers or sport coats? Our{" "}
                        <strong>Georgia Gullini blazer fabrics</strong> include textured finishes, subtle checks, and
                        solid hues designed for smart casual and formal looks. The fabrics are engineered for comfort,
                        style retention, and long-term wear, suiting professionals and fashion-forward clients alike.
                    </p>
                </div>
            </section>

            {/* SECTION 4 — Why Source: text left, images right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "40px",
                }}
            >
                {/* Left: heading + bullet points + paragraph + button */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.2",
                            marginBottom: "36px",
                            margin: "0 0 36px 0",
                        }}
                    >
                        Why Source Georgia Gullini from Aurora Textiles?
                    </h2>

                    {[
                        "Genuine Georgia Gullini fabrics are available for wholesale",
                        "Expertise in men's formalwear fabric sourcing",
                        "Competitive pricing and consistent stock availability",
                        "Bulk supply with support for tailors, fashion houses & exporters",
                        "Delivery across Dubai and export options throughout MENA",
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
                            <span style={{ fontSize: "22px", color: "#b8860b", flexShrink: 0, lineHeight: "1.3" }}>
                                ✦
                            </span>
                            <p
                                style={{
                                    fontFamily: "'Cinzel Decorative', serif",
                                    fontSize: "19px",
                                    fontWeight: "bold",
                                    color: "#344886",
                                    lineHeight: "1.2",
                                    margin: 0,
                                    letterSpacing: "0.3px",
                                }}
                            >
                                {item}
                            </p>
                        </div>
                    ))}

                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "18px",
                            lineHeight: "1.4",
                            color: "#333",
                            margin: "24px 0 32px 0",
                        }}
                    >
                        <strong>Aurora Textiles</strong> is more than just a supplier—we're a reliable sourcing partner
                        for those looking to craft standout menswear using trusted international brands like{" "}
                        <strong>Georgia Gullini</strong>.
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

                {/* Right: fabric image grid */}
                <div
                    style={{
                        flex: "0 0 auto",
                        width: "520px",
                        marginTop: "40px",
                        flexShrink: 0,
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gridTemplateRows: "240px 240px",
                        gap: "20px",
                    }}
                >
                    {/* Top image: two fabric rolls — spans full width */}
                    <div
                        style={{
                            gridColumn: "1 / span 2",
                            width: "100%",
                            height: "250px",
                            overflow: "hidden",
                            borderRadius: "6px",
                        }}
                    >
                        <img
                            src="/gullini-4.webp"
                            alt="Georgia Gullini Fabric Rolls"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* Bottom-left image: dark fabric close-up */}
                    <div
                        style={{
                            width: "100%",
                            height: "280px",
                            overflow: "hidden",
                            borderRadius: "6px",
                        }}
                    >
                        <img
                            src="/gullini-5.webp"
                            alt="Georgia Gullini Dark Fabric"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* Bottom-right image: dark check fabric with label */}
                    <div
                        style={{
                            width: "100%",
                            height: "280px",
                            overflow: "hidden",
                            borderRadius: "6px",
                        }}
                    >
                        <img
                            src="/gullini-6.webp"
                            alt="Georgia Gullini Check Fabric"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
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
                {/* Left — image 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <img
                        src="/gullini-7.webp"
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
                            fontFamily: "'Cinzel Decorative', sans-serif",
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
            <WhatsAppButton />
            <ScrollToTop />

        </div>
    );
}