import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function UniformFabricSupplier() {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);

    const faqs = [
        {
            question: "What makes a uniform fabric high quality?",
            answer: "High quality uniform fabric offers durability, breathability, comfort, color retention, and resistance to repeated washing and daily wear. It maintains a professional appearance over time and performs well in demanding environments.",
        },
        {
            question: "Does fabric quality affect uniform lifespan?",
            answer: "Yes. High-quality fabrics maintain structure, texture, and color consistency for a longer period, reducing replacement frequency and long-term costs.",
        },
        {
            question: "How does uniform fabric impact customer perception?",
            answer: "Customers associate clean, structured, and well-maintained uniforms with professionalism, trust, and quality service. Poor fabric quality can negatively affect brand image.",
        },
        {
            question: "Which fabric is best for uniforms in UAE?",
            answer: "Polycotton blends and advanced performance fabrics are among the best options because they provide durability, breathability, and comfort in hot climates.",
        },
        {
            question: "What is the most durable uniform fabric?",
            answer: "Industrial performance fabrics and high-quality polycotton blends are considered highly durable due to their resistance to repeated washing and heavy daily use.",
        },
        {
            question: "Is cotton good for uniforms?",
            answer: "Yes, cotton is breathable and comfortable, making it suitable for healthcare and office uniforms. However, it wrinkles more easily and may shrink after repeated washing.",
        },
        {
            question: "Which fabric is best for hotel uniforms?",
            answer: "Hospitality performance blends are ideal because they maintain elegance, wrinkle resistance, and colour consistency over time.",
        },
        {
            question: "Which fabric is best for healthcare uniforms?",
            answer: "Breathable cotton blends and lightweight polycotton fabrics are commonly preferred for healthcare uniforms because they offer comfort during long working hours.",
        },
        {
            question: "Which fabric is best for corporate uniforms?",
            answer: "Premium poly-viscose blends and lightweight suiting fabrics are commonly used for corporate uniforms due to their professional appearance and comfort.",
        },
        {
            question: "Why is fabric quality important in UAE climate?",
            answer: "High temperatures, humidity, sweat exposure, and frequent washing can quickly damage low-quality fabrics. High-quality fabrics maintain comfort and appearance in demanding UAE conditions.",
        },
        {
            question: "How to choose the right uniform fabric supplier in UAE?",
            answer: "Look for suppliers with consistent quality, reliable delivery, industry expertise, climate-suitable fabrics, and strong product knowledge.",
        },
    ];

    // ── SECTION 1: Intro inline links ──
    const industryLinks = [
        { label: "hospitality uniforms", route: "/products/uniform" },
        { label: "healthcare workwear", route: "/products/uniform" },
        { label: "industrial workwear", route: "/products/uniform" },
        { label: "corporate uniforms", route: "/products/uniform" },
    ];

    // ── SECTION 2: Fabric types list ──
    const fabricTypes = [
        { label: "Cotton", route: "/products/uniform", desc: "Breathable and skin-friendly — ideal for healthcare and light office uniforms that demand all-day comfort." },
        { label: "Poly-Cotton Blend", route: "/products/uniform", desc: "The most preferred uniform fabric in UAE — balances durability, comfort, and easy maintenance for hospitality and corporate sectors." },
        { label: "PolyViscose", route: "/products/suiting", desc: "Smooth drape and professional finish, perfect for corporate and aviation uniforms that need a premium look." },
        { label: "Industrial Performance Fabric", route: "/products/uniform", desc: "Built for demanding environments — high wash durability, abrasion resistance, and tear strength for factories and logistics." },
        { label: "Hospitality Performance Blend", route: "/products/uniform", desc: "Wrinkle-resistant and colour-retentive — engineered for front-of-house staff who represent your brand every day." },
        { label: "Lightweight Suiting Fabric", route: "/products/suiting", desc: "Structured yet breathable — suited for aviation crew, corporate executives, and service professionals." },
        { label: "Anti-bacterial Cotton Blend", route: "/products/uniform", desc: "Designed for healthcare environments, offering hygiene, softness, and breathability during long shifts." },
        { label: "Reinforced PolyCotton", route: "/products/uniform", desc: "A heavy-duty variant of polycotton offering superior strength for construction, logistics, and industrial workwear." },
    ];

    // ── SECTION 3: Industry cards with hover description ──
    const industryCards = [
        {
            alt: "Healthcare",
            src: "/healthcare.jpg",
            route: "/products/uniform",
            desc: "Breathable cotton blends and lightweight polycotton fabrics designed for comfort and hygiene during long working hours in clinics and hospitals.",
        },
        {
            alt: "Hospitality",
            src: "/hospitality.jpg",
            route: "/products/uniform",
            desc: "Wrinkle-resistant, colour-retentive hospitality blends that maintain a polished appearance through full service shifts in hotels and restaurants.",
        },
        {
            alt: "Industrial",
            src: "/industrial.jpg",
            route: "/products/uniform",
            desc: "Heavy-duty performance fabrics with abrasion resistance and high wash durability — engineered for factories, construction, and logistics environments.",
        },
        {
            alt: "Corporate",
            src: "/corporate.jpg",
            route: "/products/uniform",
            desc: "Premium poly-viscose and suiting blends that deliver a professional, structured finish for office and corporate staff across the GCC.",
        },
        {
            alt: "Aviation & Travel",
            src: "/aviation.jpg",
            route: "/products/uniform",
            desc: "Lightweight, wrinkle-resistant performance blends that retain a premium appearance through extended flight hours and international travel.",
        },
        {
            alt: "Retail & Service",
            src: "/retail-service.jpg",
            route: "/products/uniform",
            desc: "Comfortable, colour-fast polycotton fabrics that keep retail and service staff looking sharp and professional throughout busy shifts.",
        },
    ];

    const LinkText = ({ label, route }) => (
        <a
            href={route}
            onClick={(e) => { e.preventDefault(); navigate(route); window.scrollTo(0, 0); }}
            style={{ color: "#344886", fontWeight: "600", textDecoration: "underline", cursor: "pointer" }}
        >
            {label}
        </a>
    );

    return (
        <div style={{ width: "100%", background: "#fff", fontFamily: "'Poppins', sans-serif", color: "#222" }}>

            <Helmet>
                <title>High Quality Uniform Fabric Supplier in UAE - Aurora Textiles</title>
                <meta name="description" content="Aurora Textiles are the high quality fabric suppliers in UAE. We offer all types of uniform fabrics that suit the taste of every customer. Check out now." />
                <script type="application/ld+json">{`
                  ${JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What makes a uniform fabric high quality?", "acceptedAnswer": { "@type": "Answer", "text": "High quality uniform fabric offers durability, breathability, comfort, color retention, and resistance to repeated washing and daily wear. It maintains a professional appearance over time and performs well in demanding environments." } },
                        { "@type": "Question", "name": "Does fabric quality affect uniform lifespan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. High-quality fabrics maintain structure, texture, and color consistency for a longer period, reducing replacement frequency and long-term costs." } },
                        { "@type": "Question", "name": "Which fabric is best for uniforms in UAE?", "acceptedAnswer": { "@type": "Answer", "text": "Polycotton blends and advanced performance fabrics are among the best options because they provide durability, breathability, and comfort in hot climates." } },
                        { "@type": "Question", "name": "Which fabric is best for hotel uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Hospitality performance blends are ideal because they maintain elegance, wrinkle resistance, and color consistency over time." } },
                        { "@type": "Question", "name": "Which fabric is best for healthcare uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Breathable cotton blends and lightweight polycotton fabrics are commonly preferred for healthcare uniforms because they offer comfort during long working hours." } },
                        { "@type": "Question", "name": "Which fabric is best for corporate uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Premium poly-viscose blends and lightweight suiting fabrics are commonly used for corporate uniforms due to their professional appearance and comfort." } },
                        { "@type": "Question", "name": "Why is fabric important in UAE climate?", "acceptedAnswer": { "@type": "Answer", "text": "High temperatures, humidity, sweat exposure, and frequent washing can quickly damage low-quality fabrics. High-quality fabrics maintain comfort and appearance in demanding UAE conditions." } },
                        { "@type": "Question", "name": "How to choose the right uniform fabric supplier in UAE?", "acceptedAnswer": { "@type": "Answer", "text": "Look for suppliers with consistent quality, reliable delivery, industry expertise, climate-suitable fabrics, and strong product knowledge." } },
                    ]
                  })}
                `}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO BANNER ── */}
            <section
                style={{
                    width: "100%",
                    height: "420px",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "70px",
                }}
            >
                <img
                    src="/about-banner.jpg"
                    alt="High Quality Uniform Fabric Supplier in UAE"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.50)" }} />
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
                            fontSize: window.innerWidth < 768 ? "28px" : "58px",
                            fontWeight: "700",
                            margin: 0,
                            lineHeight: "1.2",
                            fontFamily: "'Cinzel Decorative', serif",
                            letterSpacing: "1px",
                        }}
                    >
                        High Quality Uniform Fabric<br />Supplier in UAE
                    </h1>
                </div>
            </section>

            {/* ── SECTION 1: YOUR TRUSTED UNIFORM FABRIC PARTNER ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 60px" : "0 6% 80px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/egypt-1.webp"
                            alt="Premium uniform fabric rolls at Aurora Textiles UAE"
                            style={{
                                width: "100%",
                                height: "760px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* Right Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "26px" : "42px",
                                fontWeight: "700",
                                color: "#344886",
                                lineHeight: "1.2",
                                marginBottom: "28px",
                            }}
                        >
                            Your Trusted Uniform Fabric<br />Partner in UAE
                        </h2>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "20px" }}>
                            When it comes to <strong>high quality uniform fabric suppliers in UAE</strong>, <strong>Aurora Textiles</strong> is a name businesses across the GCC trust. We specialise in uniform fabrics engineered for real-world performance — covering{" "}
                            <LinkText label="hospitality uniforms" route="/products/uniform" />,{" "}
                            <LinkText label="healthcare workwear" route="/products/uniform" />,{" "}
                            <LinkText label="industrial workwear" route="/products/uniform" />, and{" "}
                            <LinkText label="corporate uniforms" route="/products/uniform" />.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "20px" }}>
                            With deep expertise as <strong>uniform fabric distributors and textile suppliers</strong>, Aurora Textiles serves hotels, hospitals, factories, airlines, and corporate businesses that demand consistent quality and reliable supply across every order.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "32px" }}>
                            As one of the most established <strong>fabric suppliers in the UAE</strong>, we source materials specifically suited to the UAE climate — breathable, fade-resistant, wash-durable, and designed to maintain a professional appearance long after day one.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "36px" }}>
                            Whether it's a crisp hotel uniform, a functional healthcare scrub, or a polished corporate outfit —{" "}
                            <a
                                href="/"
                                onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo(0, 0); }}
                                style={{ color: "#344886", fontWeight: "600", textDecoration: "underline" }}
                            >
                                Aurora Textiles
                            </a>{" "}
                            delivers fabrics that perform as well as they look.
                        </p>

                        {/* Contact Us + Call + WhatsApp */}
                        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                            <a
                                href="/contact-us"
                                onClick={(e) => { e.preventDefault(); navigate("/contact-us"); window.scrollTo(0, 0); }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "#0a089bd3";
                                    e.currentTarget.style.borderColor = "#e0b219";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = "#8b7d3a";
                                    e.currentTarget.style.borderColor = "#050e5f";
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
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                Contact Us
                            </a>

                            {/* Call Button */}
                            <a
                                href="tel:+9197154172009"
                                style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "50%",
                                    background: "#111",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    flexShrink: 0,
                                    transition: "transform 0.2s ease",
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                aria-label="Call us"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1v3.61a1 1 0 01-1 1C10.01 22 2 13.99 2 4a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.31 2.2z" />
                                </svg>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/971554172009"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "50%",
                                    background: "#25D366",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    flexShrink: 0,
                                    transition: "transform 0.2s ease",
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                aria-label="WhatsApp us"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: EXPLORE OUR UNIFORM FABRIC RANGE ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 40px" : "0 6% 20px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "24px" : "38px",
                                fontWeight: "700",
                                color: "#344886",
                                lineHeight: "1.2",
                                marginBottom: "24px",
                            }}
                        >
                            Explore Our Uniform<br />Fabric Range
                        </h2>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "20px" }}>
                            We offer a comprehensive collection of uniform fabrics covering every industry, climate requirement, and durability standard. Our inventory includes:
                        </p>

                        <ul style={{ paddingLeft: "30px", margin: 0 }}>
                            {fabricTypes.map((item, i) => (
                                <li key={i} style={{ fontSize: "16px", lineHeight: "1.2", color: "#333", marginBottom: "4px" }}>
                                    <LinkText label={item.label} route={item.route} />
                                    : {item.desc}
                                </li>
                            ))}
                        </ul>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginTop: "24px" }}>
                            At <strong>Aurora Textiles</strong>, our collection ensures every business finds the right <strong>uniform fabric in UAE</strong> — built for the environment it will work in.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 44%", minWidth: "280px" }}>
                        <img
                            src="/fabric-supplier-2.webp"
                            alt="Diverse range of uniform fabrics at Aurora Textiles UAE"
                            style={{
                                width: "100%",
                                height: "650px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: UNIFORM FABRIC SOLUTIONS BY INDUSTRY ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "50px 5% 40px" : "40px 6% 40px",
                    boxSizing: "border-box",
                    background: "#ffffff",
                }}
            >
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: window.innerWidth < 768 ? "22px" : "42px",
                            fontWeight: "700",
                            color: "#344886",
                            textAlign: "center",
                            marginBottom: "16px",
                            lineHeight: "1.3",
                        }}
                    >
                        Uniform Fabric Solutions<br />by Industry
                    </h2>
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "17px",
                            color: "#333",
                            marginBottom: "50px",
                            lineHeight: "1.7",
                        }}
                    >
                        As trusted <strong>uniform fabric suppliers in UAE</strong>, we understand that different industries face different challenges — and we stock fabrics built for each one.
                    </p>

                    {/* Industry Cards Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: window.innerWidth < 768 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                            gap: "24px",
                        }}
                    >
                        {industryCards.map((card, index) => (
                            <div
                                key={index}
                                onClick={() => { navigate(card.route); window.scrollTo(0, 0); }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    border: "5px solid #071d42",
                                    borderRadius: "26px",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    height: "240px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "24px",
                                    boxSizing: "border-box",
                                    position: "relative",
                                    background: "#fff",
                                    transition: "box-shadow 0.3s ease",
                                    boxShadow: hoveredCard === index ? "0 8px 30px rgba(11,44,102,0.15)" : "none",
                                }}
                            >
                                {/* Default: Industry name */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "20px",
                                        opacity: hoveredCard === index ? 0 : 1,
                                        transition: "opacity 0.3s ease",
                                        pointerEvents: "none",
                                    }}
                                >
                                    {card.src ? (
                                        <img
                                            src={card.src}
                                            alt={card.alt}
                                            style={{
                                                maxWidth: "100%",
                                                maxHeight: "200px",
                                                objectFit: "contain",
                                                borderRadius: "12px",
                                            }}
                                        />
                                    ) : (
                                        <span
                                            style={{
                                                fontFamily: "'Cinzel Decorative', serif",
                                                fontSize: "30px",
                                                fontWeight: "700",
                                                color: "#0B2C66",
                                                textAlign: "center",
                                            }}
                                        >
                                            {card.alt}
                                        </span>
                                    )}
                                </div>

                                {/* Hover: Description */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "20px 22px",
                                        opacity: hoveredCard === index ? 1 : 0,
                                        transition: "opacity 0.3s ease",
                                        pointerEvents: "none",
                                        background: "#fff",
                                        borderRadius: "16px",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "15px",
                                            lineHeight: "1.5",
                                            color: "#333",
                                            textAlign: "center",
                                            margin: 0,
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: "500",
                                        }}
                                    >
                                        <strong style={{ color: "#082352", fontFamily: "'Cinzel Decorative', serif", fontSize: "20px", display: "block", marginBottom: "6px" }}>
                                            {card.alt}
                                        </strong>
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: WHY UAE BUSINESSES CHOOSE AURORA TEXTILES ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "50px 5% 60px" : "40px 6%",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/oxford-2.webp"
                            alt="Uniform fabric wholesale solutions UAE"
                            style={{
                                width: "100%",
                                height: "700px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* Right Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "24px" : "38px",
                                fontWeight: "700",
                                color: "#344886",
                                lineHeight: "1.2",
                                marginBottom: "28px",
                            }}
                        >
                            Uniform Fabric Supply<br />Solutions in UAE
                        </h2>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "20px" }}>
                            As experienced <strong>wholesale uniform fabric suppliers</strong>, Aurora Textiles supports both bulk and bespoke orders. Whether you're a hotel chain, hospital group, factory, or corporate business, our streamlined supply ensures consistent quality and timely delivery across Dubai, Abu Dhabi, and the wider GCC.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "32px" }}>
                            Our wide textile network and climate-focused fabric sourcing make us the preferred partner for <strong>uniform fabric UAE</strong> buyers who value performance, consistency, and long-term value.
                        </p>

                        <h3
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: "22px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                            }}
                        >
                            Why Businesses Choose Aurora Textiles?
                        </h3>

                        <ul style={{ paddingLeft: "25px", margin: 0 }}>
                            {[
                                "Consistent fabric quality across every batch and order",
                                "Wide selection of uniform fabrics for all industries and climates",
                                "Industry-focused solutions for hospitality, healthcare, industrial, and corporate sectors",
                                "Fade-resistant, wash-durable, and breathable fabric options",
                                "Reliable supply capability across UAE and GCC",
                                "Experienced team with deep understanding of UAE climate requirements",
                            ].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "4px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: CONNECT WITH AURORA TEXTILES ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "20px 5% 20px" : "20px 6% 20px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: window.innerWidth < 768 ? "22px" : "34px",
                            fontWeight: "700",
                            color: "#344886",
                            marginBottom: "24px",
                            lineHeight: "1.3",
                        }}
                    >
                        Looking for High Quality Uniform Fabric in UAE?
                    </h2>
                    <p style={{ fontSize: "19px", lineHeight: "1.5", color: "#333" }}>
                        If you're searching for the most reliable{" "}
                        <strong>uniform fabric suppliers in UAE</strong> for wholesale, retail, or corporate needs — Aurora Textiles is your destination. Discover our collection, explore fabric performance options, and source premium uniform fabrics engineered for the UAE climate and your industry.
                    </p>
                </div>
            </section>

            {/* ── FAQ SECTION ── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
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
                            fontSize: "38px",
                            fontWeight: "700",
                            margin: 0,
                            letterSpacing: "2px",
                            textDecoration: "none",
                        }}
                    >
                        FAQ
                    </h2>
                </div>

                {/* FAQ Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid #ddd",
                                borderBottom: index === faqs.length - 1 ? "1px solid #ddd" : "none",
                                background: "#fff",
                            }}
                        >
                            {/* Question Row */}
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
                                        fontSize: "19px",
                                        fontWeight: "700",
                                        color: openFaq === index ? "#b39131" : hoveredFaq === index ? "#070e46" : "#0b18a1",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.4",
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    style={{
                                        fontSize: "18px",
                                        color: openFaq === index ? "#b39131" : hoveredFaq === index ? "#070e46" : "#0b18a1",
                                        fontWeight: "600",
                                        marginLeft: "20px",
                                        flexShrink: 0,
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    {openFaq === index ? "−" : "+"}
                                </span>
                            </div>

                            {/* Answer */}
                            {openFaq === index && (
                                <div
                                    style={{
                                        padding: "0 28px 24px 28px",
                                        fontFamily: "sans-serif",
                                        fontSize: "17px",
                                        color: "#292626",
                                        lineHeight: "1.5",
                                        borderTop: "1px solid #eee",
                                        paddingTop: "20px",
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </div>
    );
}