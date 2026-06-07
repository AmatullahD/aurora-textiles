import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function EgyptPage() {
    const [openFaq, setOpenFaq] = useState(null);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const faqs = [
        {
            question: "Do you supply men's fabrics to Egypt from Dubai?",
            answer: "Yes, Aurora Textiles exports men's fabrics from Dubai, UAE to Egypt with reliable logistics support.",
        },
        {
            question: "Can I purchase fabric online from Egypt?",
            answer: "Yes, buyers in Egypt can explore and purchase fabrics online by contacting our team through the website.",
        },
        {
            question: "What types of fabrics do you supply for men?",
            answer: "We supply cotton, denim, polyviscose, wool blends, suiting fabrics, and blended materials for men's clothing.",
        },
        {
            question: "Who can buy fabrics from Aurora Textiles?",
            answer: "We supply to tailors, retailers, wholesalers, designers, and garment manufacturers.",
        },
        {
            question: "Do you offer wholesale and bulk fabric supply?",
            answer: "Yes, we specialize in wholesale fabric and bulk textile supply for Egyptian businesses.",
        },
    ];

    const fabricGrid = [
        { label: "WOOL", img: "/wool.webp" },
        { label: "POLYWool", img: "/poly-wool.webp" },
        { label: "POLYWool", img: "/poly-wool-1.webp" },
        { label: "WOOL", img: "/wool-1.webp" },
        { label: "COTTON", img: "/cotton.webp" },
        { label: "LINEN", img: "/linen.webp" },
        { label: "COTTON", img: "/cotton-1.webp" },
        { label: "LINEN", img: "/linen-1.webp" },
        { label: "POLYVISCOSE", img: "/poly-viscose.webp" },
        { label: "COTTON-LINEN", img: "/cotton-linen.webp" },
        { label: "COTTON-LINEN", img: "/cotton-linen-1.webp" },
        { label: "DENIM", img: "/denim.webp" },
        { label: "PV LYCRA", img: "/pv-lycra.webp" },
        { label: "POLY WOOL LYCRA", img: "/poly-wool-lycra.webp" },
        { label: "TENCEL BLEND", img: "/tencel-blend.webp" },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>
            <Helmet>
                <title>Fabric Suppliers and Wholesaler in Egypt - Aurora Textiles</title>
                <meta
                    name="description"
                    content="Aurora Textiles are one of the leading fabric suppliers and wholesalers in Egypt, offering Cotton, poly viscose, poly wool, and other types of fabrics."
                />
            </Helmet>

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
                    alt="Fabric Suppliers in Egypt"
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
                        Egypt
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Image LEFT, Text RIGHT (SS1) */}
            {/* "Fabric Suppliers In Egypt" + "Denim Fabric Suppliers" both in right column */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 30px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left — tall image */}
                <div style={{ flex: "0 0 42%", maxWidth: "42%" }}>
                    <img
                        src="/egypt-1.webp"
                        alt="Fabric Suppliers Egypt"
                        style={{
                            width: "100%",
                            height: "580px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "20px",
                        }}
                    />
                </div>

                {/* Right — two content blocks stacked */}
                <div style={{ flex: 1 }}>
                    {/* Block 1: Fabric Suppliers In Egypt */}
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "36px",
                            fontWeight: "700",
                            lineHeight: "1.25",
                            margin: "0 0 20px 0",
                        }}
                    >
                        Fabric Suppliers In Egypt
                    </h2>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 6px 0",
                        }}
                    >
                        Aurora Textiles is a trusted international name among premium{" "}
                        <strong>fabric suppliers</strong>, offering a wide range of men's
                        fabrics to buyers across <strong>Egypt</strong>. Based in{" "}
                        <strong>Dubai, UAE</strong>, we supply high-quality fabrics to
                        tailors, garment manufacturers, retailers, and wholesalers
                        throughout Egypt and the wider MENA region.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 32px 0",
                        }}
                    >
                        Our collection is designed to meet the needs of modern men's
                        fashion — combining durability, comfort, and consistent quality for
                        both casual and formal applications.
                    </p>

                    {/* Block 2: Denim Fabric Suppliers */}
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "28px",
                            fontWeight: "700",
                            lineHeight: "1.25",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Denim Fabric Suppliers
                    </h2>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 12px 0",
                        }}
                    >
                        As experienced <strong>denim fabric suppliers</strong>, Aurora
                        Textiles provides durable and stylish denim fabrics suitable for
                        men's casual and smart-casual clothing.
                    </p>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 10px 0",
                        }}
                    >
                        Our Denim Fabric Range
                    </p>
                    <ul
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.2",
                            margin: "0 0 16px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Strong denim fabrics for jeans and jackets</li>
                        <li>Comfortable denim blends for daily wear</li>
                        <li>High-quality finishes suitable for retail and bulk production</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "'poppins',sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: 0,
                        }}
                    >
                        Our denim fabrics are carefully sourced to meet international
                        standards while aligning with market demand in Egypt.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — FABRIC MATERIAL SUPPLIERS full-width cards (SS2) */}
            <section
                style={{
                    width: "100%",
                    padding: "60px 40px",
                    boxSizing: "border-box",
                    marginBottom: "70px",
                }}
            >
                {/* Title */}
                <h2
                    style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        color: "#344886",
                        fontSize: "38px",
                        fontWeight: "700",
                        textAlign: "center",
                        margin: "0 0 16px 0",
                    }}
                >
                    Fabric Material Suppliers
                </h2>
                <p
                    style={{
                        fontFamily: "sans-serif",
                        fontSize: "19px",
                        color: "#222",
                        textAlign: "center",
                        lineHeight: "1.6",
                        margin: "0 0 10px 0",
                    }}
                >
                    Aurora Textiles operates as reliable fabric material suppliers,
                    offering a broad selection of materials for men's clothing.
                </p>
                <h3
                    style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        color: "#344886",
                        fontSize: "22px",
                        fontWeight: "700",
                        textAlign: "center",
                        margin: "0 0 36px 0",
                    }}
                >
                    Men's Fabric Materials We Supply
                </h3>

                {/* 3 dashed-border cards */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "24px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        flexWrap: "wrap",
                        alignItems: "stretch",
                    }}
                >
                    {/* Card 1 — Cotton Fabric */}
                    <div
                        onMouseEnter={() => setHoveredCard(1)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                            flex: "1 1 300px",
                            maxWidth: "370px",
                            border: "2px dashed #1a237e",
                            borderRadius: "12px",
                            padding: "28px 24px",
                            background: "#fff",
                            boxSizing: "border-box",
                            transition: "box-shadow 0.3s ease",
                            boxShadow: hoveredCard === 1 ? "0 8px 32px rgba(26,35,126,0.15)" : "none",
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                color: "#344886",
                                fontSize: "16px",
                                fontWeight: "700",
                                margin: "0 0 20px 0",
                            }}
                        >
                            Cotton Fabric
                        </h3>
                        <p
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.7",
                                margin: "0 0 4px 0",
                            }}
                        >
                            As reliable cotton fabric suppliers, Aurora Textiles offers
                            breathable and versatile cotton fabrics suitable for men's
                            everyday wear, traditional clothing, and uniforms.
                        </p>
                        <p
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.7",
                                margin: "0 0 8px 0",
                            }}
                        >
                            Our Cotton Fabric Range
                        </p>
                        <ul
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.9",
                                margin: "0 0 12px 0",
                                paddingLeft: "20px",
                            }}
                        >
                            <li>Pure cotton fabrics for shirts and casual menswear</li>
                            <li>Poly-cotton blends for uniforms and workwear</li>
                            <li>Cotton-linen blends for warm climates and summer wear</li>
                        </ul>
                        <p
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.7",
                                margin: 0,
                            }}
                        >
                            Our cotton fabrics are selected for comfort, durability, and
                            consistent quality across bulk supply.
                        </p>
                    </div>

                    {/* Card 2 — Poly Wool Fabric */}
                    <div
                        onMouseEnter={() => setHoveredCard(2)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                            flex: "1 1 300px",
                            maxWidth: "370px",
                            border: "2px dashed #1a237e",
                            borderRadius: "12px",
                            padding: "28px 24px",
                            background: "#fff",
                            boxSizing: "border-box",
                            transition: "box-shadow 0.3s ease",
                            boxShadow: hoveredCard === 2 ? "0 8px 32px rgba(26,35,126,0.15)" : "none",
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                color: "#344886",
                                fontSize: "16px",
                                fontWeight: "700",
                                margin: "0 0 20px 0",
                            }}
                        >
                            Poly Wool Fabric
                        </h3>
                        <p
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.7",
                                margin: "0 0 4px 0",
                            }}
                        >
                            As experienced poly wool fabric suppliers, Aurora Textiles
                            provides refined poly wool fabrics that combine structure,
                            durability, and ease of maintenance for men's formal clothing.
                        </p>
                        <p
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.7",
                                margin: "0 0 8px 0",
                            }}
                        >
                            Our Poly Wool Fabric Range
                        </p>
                        <ul
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.9",
                                margin: "0 0 12px 0",
                                paddingLeft: "20px",
                            }}
                        >
                            <li>Poly wool fabrics for suits, blazers, and trousers</li>
                            <li>Wrinkle-resistant blends for office and business wear</li>
                            <li>Easy-care poly wool fabrics for uniforms and corporate use</li>
                        </ul>
                        <p
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.7",
                                margin: 0,
                            }}
                        >
                            These fabrics offer a balance of professional appearance and
                            long-lasting performance.
                        </p>
                    </div>

                    {/* Card 3 — Poly Viscose Fabric */}
                    <div
                        onMouseEnter={() => setHoveredCard(3)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                            flex: "1 1 300px",
                            maxWidth: "370px",
                            border: "2px dashed #1a237e",
                            borderRadius: "12px",
                            padding: "28px 24px",
                            background: "#fff",
                            boxSizing: "border-box",
                            transition: "box-shadow 0.3s ease",
                            boxShadow: hoveredCard === 3 ? "0 8px 32px rgba(26,35,126,0.15)" : "none",
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                color: "#344886",
                                fontSize: "16px",
                                fontWeight: "700",
                                margin: "0 0 20px 0",
                            }}
                        >
                            Poly Viscose Fabric
                        </h3>
                        <p
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.7",
                                margin: "0 0 4px 0",
                            }}
                        >
                            As trusted poly viscose fabric suppliers, Aurora Textiles
                            supplies smooth and cost-effective poly viscose fabrics ideal for
                            men's suiting and formalwear.
                        </p>
                        <p
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.7",
                                margin: "0 0 8px 0",
                            }}
                        >
                            Our Poly Viscose Fabric Range
                        </p>
                        <ul
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.9",
                                margin: "0 0 12px 0",
                                paddingLeft: "20px",
                            }}
                        >
                            <li>Poly viscose fabrics for men's suits and trousers</li>
                            <li>Lightweight blends with clean drape and finish</li>
                            <li>Durable poly viscose fabrics suitable for daily wear and uniforms</li>
                        </ul>
                        <p
                            style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                                color: "#222",
                                lineHeight: "1.7",
                                margin: 0,
                            }}
                        >
                            Our poly viscose fabrics are widely chosen for their comfort,
                            appearance, and commercial value.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — Text LEFT, Image RIGHT — Wholesale Fabric (SS3) */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left Text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "38px",
                            fontWeight: "700",
                            lineHeight: "1.2",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Wholesale Fabric
                    </h2>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 12px 0",
                        }}
                    >
                        As a global <strong>wholesale fabric</strong> supplier, Aurora
                        Textiles supports businesses in Egypt with dependable bulk fabric
                        sourcing.
                    </p>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Wholesale Fabric Solutions
                    </p>
                    <ul
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "2",
                            margin: "0 0 16px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Competitive pricing for bulk orders</li>
                        <li>Consistent quality across large quantities</li>
                        <li>Reliable export supply from Dubai to Egypt</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 32px 0",
                        }}
                    >
                        We work closely with wholesalers, manufacturers, and retailers who
                        require steady and scalable fabric supply.
                    </p>

                    {/* Sub-section: Wholesale Fabric for Men's Clothing */}
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "28px",
                            fontWeight: "700",
                            lineHeight: "1.3",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Wholesale Fabric for Men's Clothing
                    </h2>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 12px 0",
                        }}
                    >
                        Aurora Textiles specializes in <strong>wholesale fabric</strong>{" "}
                        for men's apparel, serving a wide range of commercial and fashion
                        needs.
                    </p>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Applications of Our Wholesale Fabrics
                    </p>
                    <ul
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "2",
                            margin: "0 0 16px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Men's suits and formalwear</li>
                        <li>Shirts, trousers, and ethnic wear</li>
                        <li>Uniforms and workwear</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: 0,
                        }}
                    >
                        Our wholesale fabric solutions are designed to support long-term
                        business growth and production efficiency.
                    </p>
                </div>

                {/* Right Image */}
                <div style={{ flex: "0 0 42%", maxWidth: "42%" }}>
                    <img
                        src="/egypt-2.webp"
                        alt="Wholesale Fabric Egypt"
                        style={{
                            width: "100%",
                            height: "620px",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                            borderRadius: "4px",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 4 — Image LEFT, Text RIGHT — Buy Fabric Online (SS4) */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left Image */}
                <div style={{ flex: "0 0 42%", maxWidth: "42%" }}>
                    <img
                        src="/zarista-1.jpg"
                        alt="Buy Fabric Online Egypt"
                        style={{
                            width: "100%",
                            height: "520px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "20px",
                        }}
                    />
                </div>

                {/* Right Text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "38px",
                            fontWeight: "700",
                            lineHeight: "1.2",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Buy Fabric Online
                    </h2>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 12px 0",
                        }}
                    >
                        Aurora Textiles is a preferred choice for buyers who want to{" "}
                        <strong>buy fabric online</strong> with confidence.
                    </p>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        What You Can Expect
                    </p>
                    <ul
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "2",
                            margin: "0 0 4px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Trusted Dubai-based textile supplier</li>
                        <li>Export-ready inventory</li>
                        <li>Support for wholesale and commercial orders</li>
                        <li>Why Purchase Fabric Online from Us</li>
                        <li>Access to international-quality fabrics</li>
                        <li>Detailed specifications for informed selection</li>
                        <li>Professional support for export and bulk inquiries</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "16px 0 0 0",
                        }}
                    >
                        We ensure a smooth buying experience for Egyptian buyers seeking
                        reliable fabric sourcing.
                    </p>
                </div>
            </section>

            {/* SECTION 5 — Text LEFT, Image Grid RIGHT — Wholesale Textile + Why Choose (SS5) */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 70px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left Text */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "38px",
                            fontWeight: "700",
                            lineHeight: "1.2",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Wholesale Textile
                    </h2>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 12px 0",
                        }}
                    >
                        As established <strong>wholesale textile</strong> traders, Aurora
                        Textiles delivers a complete men's fabric portfolio to Egypt.
                    </p>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            fontWeight: "700",
                            color: "#222",
                            margin: "0 0 8px 0",
                        }}
                    >
                        Our Wholesale Textile Expertise
                    </p>
                    <ul
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.2",
                            margin: "0 0 16px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Strong sourcing network across global mills</li>
                        <li>Experience supplying MENA and African markets</li>
                        <li>Focus on quality, consistency, and service</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: "0 0 36px 0",
                        }}
                    >
                        We help Egyptian buyers secure dependable textile supply with
                        international standards.
                    </p>

                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "28px",
                            fontWeight: "700",
                            lineHeight: "1.3",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Why Choose Aurora Textiles for Egypt
                    </h2>
                    <ul
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "17px",
                            color: "#222",
                            lineHeight: "1.2",
                            margin: "0 0 16px 0",
                            paddingLeft: "22px",
                        }}
                    >
                        <li>Based in <strong>Dubai, UAE</strong>, a global textile trading hub</li>
                        <li>Supplies men's fabrics across <strong>Egypt and the MENA region</strong></li>
                        <li>Wide range of fabrics for wholesale and bulk buyers</li>
                        <li>Trusted by tailors, retailers, and manufacturers</li>
                    </ul>
                    <p
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "19px",
                            color: "#222",
                            lineHeight: "1.6",
                            margin: 0,
                        }}
                    >
                        Aurora Textiles combines global reach with market-focused supply
                        solutions.
                    </p>
                </div>

             
                {/* Right — Single Image */}
                <div style={{ flex: "0 0 44%", maxWidth: "44%" }}>
                    <img
                        src="/egypt-3.webp"
                        alt="Wholesale Textile Egypt"
                        style={{
                            width: "100%",
                            height: "620px",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "4px",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 6 — FAQ 2-column grid (SS6) */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1100px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                }}
            >
                {/* FAQ Title */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            color: "#344886",
                            fontSize: "36px",
                            fontWeight: "700",
                            margin: 0,
                            letterSpacing: "1px",
                        }}
                    >
                        Frequently Asked Questions (FAQs)
                    </h2>
                </div>

                {/* 2-column FAQ grid — left col: items 0,2,4 / right col: items 1,3 */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px",
                        alignItems: "start",
                    }}
                >
                    {/* Left column items: 0, 2, 4 */}
                    <div>
                        {[0, 2, 4].map((index) => {
                            const faq = faqs[index];
                            return (
                                <div
                                    key={index}
                                    style={{
                                        border: "1px solid #ddd",
                                        borderBottom: "none",
                                        borderRight: "1px solid #ddd",
                                        background: "#fff",
                                    }}
                                >
                                    <div
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        onMouseEnter={() => setHoveredFaq(index)}
                                        onMouseLeave={() => setHoveredFaq(null)}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "22px 28px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "'Cinzel Decorative', serif",
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                color:
                                                    openFaq === index
                                                        ? "#b39131"
                                                        : hoveredFaq === index
                                                            ? "#070e46"
                                                            : "#0b18a1",
                                                letterSpacing: "0.5px",
                                                lineHeight: "1.4",
                                                transition: "color 0.2s ease",
                                                flex: 1,
                                                paddingRight: "10px",
                                               
                                            }}
                                        >
                                            {faq.question}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "19px",
                                                color:
                                                    openFaq === index
                                                        ? "#b39131"
                                                        : hoveredFaq === index
                                                            ? "#070e46"
                                                            : "#0b18a1",
                                                fontWeight: "600",
                                                flexShrink: 0,
                                                transition: "color 0.2s ease",
                                            }}
                                        >
                                            {openFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {openFaq === index && (
                                        <div
                                            style={{
                                                padding: "0 28px 24px 28px",
                                                fontFamily: "'poppins',sans-serif",
                                                fontSize: "17px",
                                                color: "#292626",
                                                lineHeight: "1.6",
                                                borderTop: "1px solid #eee",
                                                paddingTop: "18px",
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        {/* bottom border for left col */}
                        <div style={{ borderTop: "1px solid #ddd", borderRight: "none" }} />
                    </div>

                    {/* Right column items: 1, 3 */}
                    <div>
                        {[1, 3].map((index) => {
                            const faq = faqs[index];
                            return (
                                <div
                                    key={index}
                                    style={{
                                        border: "1px solid #ddd",
                                        borderBottom: "none",
                                        background: "#fff",
                                    }}
                                >
                                    <div
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        onMouseEnter={() => setHoveredFaq(index)}
                                        onMouseLeave={() => setHoveredFaq(null)}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "22px 28px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "'Cinzel Decorative', serif",
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                color:
                                                    openFaq === index
                                                        ? "#b39131"
                                                        : hoveredFaq === index
                                                            ? "#070e46"
                                                            : "#0b18a1",
                                                letterSpacing: "0.5px",
                                                lineHeight: "1.4",
                                                transition: "color 0.2s ease",
                                                flex: 1,
                                                paddingRight: "10px",
                                               
                                            }}
                                        >
                                            {faq.question}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "19px",
                                                color:
                                                    openFaq === index
                                                        ? "#b39131"
                                                        : hoveredFaq === index
                                                            ? "#070e46"
                                                            : "#0b18a1",
                                                fontWeight: "600",
                                                flexShrink: 0,
                                                transition: "color 0.2s ease",
                                            }}
                                        >
                                            {openFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {openFaq === index && (
                                        <div
                                            style={{
                                                padding: "0 28px 24px 28px",
                                                fontFamily: "'poppins',sans-serif",
                                                fontSize: "17px",
                                                color: "#292626",
                                                lineHeight: "1.6",
                                                borderTop: "1px solid #eee",
                                                paddingTop: "18px",
                                            }}
                                        >
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        {/* bottom border for right col */}
                        <div style={{ borderTop: "1px solid #ddd" }} />
                    </div>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </div>
    );
}