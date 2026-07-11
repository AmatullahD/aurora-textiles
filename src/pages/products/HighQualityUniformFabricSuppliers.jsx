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
            question: "Is polycotton good for industrial uniforms?",
            answer: "Yes. Polycotton blends combine durability, comfort, and easier maintenance, making them ideal for industrial workwear.",
        },
        {
            question: "Which fabric is best for hotel uniforms?",
            answer: "Hospitality performance blends are ideal because they maintain elegance, wrinkle resistance, and color consistency over time.",
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
            question: "Why is fabric important in UAE climate?",
            answer: "High temperatures, humidity, sweat exposure, and frequent washing can quickly damage low-quality fabrics. High-quality fabrics maintain comfort and appearance in demanding UAE conditions.",
        },
        {
            question: "Which fabric works best in hot climates?",
            answer: "Breathable polycotton blends and lightweight performance fabrics are among the best choices for hot climates because they offer better airflow and moisture management.",
        },
        {
            question: "What fabrics are best for industrial washing?",
            answer: "Industrial performance fabrics and durable polycotton blends are designed to withstand repeated industrial washing cycles without losing shape or color.",
        },
        {
            question: "Which fabric resists fading the most?",
            answer: "Performance fabrics and high-quality blended fabrics typically offer better color fastness and fade resistance compared to low-grade materials.",
        },
        {
            question: "How long should uniform fabric last?",
            answer: "The lifespan depends on usage and washing frequency, but high-quality uniform fabrics are designed for long-term performance and repeated daily wear.",
        },
        {
            question: "How to choose the right uniform fabric supplier in UAE?",
            answer: "Look for suppliers with consistent quality, reliable delivery, industry expertise, climate-suitable fabrics, and strong product knowledge.",
        },
        {
            question: "What should businesses check before buying uniform fabrics?",
            answer: "Businesses should check fabric composition, GSM, color fastness, shrinkage resistance, wash durability, breathability, and supplier consistency.",
        },
        {
            question: "What GSM is ideal for workwear fabrics?",
            answer: "Medium to heavier GSM fabrics are typically preferred for industrial workwear, while lighter GSM fabrics are suitable for hospitality and healthcare sectors.",
        },
        {
            question: "Why is fabric consistency important?",
            answer: "Inconsistent fabric quality can affect garment appearance, customer trust, employee comfort, and overall brand presentation.",
        },
        {
            question: "What is color fastness in fabrics?",
            answer: "Color fastness refers to a fabric's ability to maintain its color after washing, sunlight exposure, sweat, and daily wear.",
        },
        {
            question: "Why do uniforms fade after repeated washing?",
            answer: "Uniforms fade because of low-quality dyes, weak fabric construction, harsh detergents, and repeated industrial washing cycles.",
        },
        {
            question: "What are the advantages of performance fabrics?",
            answer: "Performance fabrics offer better durability, wrinkle resistance, stain resistance, moisture management, and long-lasting appearance.",
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
                        { "@type": "Question", "name": "What is the most durable uniform fabric?", "acceptedAnswer": { "@type": "Answer", "text": "Industrial performance fabrics and high-quality polycotton blends are considered highly durable due to their resistance to repeated washing and heavy daily use." } },
                        { "@type": "Question", "name": "Is cotton good for uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, cotton is breathable and comfortable, making it suitable for healthcare and office uniforms. However, it wrinkles more easily and may shrink after repeated washing." } },
                        { "@type": "Question", "name": "Is polycotton good for industrial uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Polycotton blends combine durability, comfort, and easier maintenance, making them ideal for industrial workwear." } },
                        { "@type": "Question", "name": "Which fabric is best for hotel uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Hospitality performance blends are ideal because they maintain elegance, wrinkle resistance, and color consistency over time." } },
                        { "@type": "Question", "name": "Which fabric is best for healthcare uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Breathable cotton blends and lightweight polycotton fabrics are commonly preferred for healthcare uniforms because they offer comfort during long working hours." } },
                        { "@type": "Question", "name": "Which fabric is best for corporate uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Premium poly-viscose blends and lightweight suiting fabrics are commonly used for corporate uniforms due to their professional appearance and comfort." } },
                        { "@type": "Question", "name": "Why is fabric important in UAE climate?", "acceptedAnswer": { "@type": "Answer", "text": "High temperatures, humidity, sweat exposure, and frequent washing can quickly damage low-quality fabrics. High-quality fabrics maintain comfort and appearance in demanding UAE conditions." } },
                        { "@type": "Question", "name": "Which fabric works best in hot climates?", "acceptedAnswer": { "@type": "Answer", "text": "Breathable polycotton blends and lightweight performance fabrics are among the best choices for hot climates because they offer better airflow and moisture management." } },
                        { "@type": "Question", "name": "What fabrics are best for industrial washing?", "acceptedAnswer": { "@type": "Answer", "text": "Industrial performance fabrics and durable polycotton blends are designed to withstand repeated industrial washing cycles without losing shape or color." } },
                        { "@type": "Question", "name": "Which fabric resists fading the most?", "acceptedAnswer": { "@type": "Answer", "text": "Performance fabrics and high-quality blended fabrics typically offer better color fastness and fade resistance compared to low-grade materials." } },
                        { "@type": "Question", "name": "How long should uniform fabric last?", "acceptedAnswer": { "@type": "Answer", "text": "The lifespan depends on usage and washing frequency, but high-quality uniform fabrics are designed for long-term performance and repeated daily wear." } },
                        { "@type": "Question", "name": "How to choose the right uniform fabric supplier in UAE?", "acceptedAnswer": { "@type": "Answer", "text": "Look for suppliers with consistent quality, reliable delivery, industry expertise, climate-suitable fabrics, and strong product knowledge." } },
                        { "@type": "Question", "name": "What should businesses check before buying uniform fabrics?", "acceptedAnswer": { "@type": "Answer", "text": "Businesses should check fabric composition, GSM, color fastness, shrinkage resistance, wash durability, breathability, and supplier consistency before purchasing uniform fabrics." } },
                        { "@type": "Question", "name": "What GSM is ideal for workwear fabrics?", "acceptedAnswer": { "@type": "Answer", "text": "Medium to heavier GSM fabrics are typically preferred for industrial workwear, while lighter GSM fabrics are suitable for hospitality and healthcare sectors." } },
                        { "@type": "Question", "name": "Why is fabric consistency important?", "acceptedAnswer": { "@type": "Answer", "text": "Inconsistent fabric quality can affect garment appearance, customer trust, employee comfort, and overall brand presentation." } },
                        { "@type": "Question", "name": "What is color fastness in fabrics?", "acceptedAnswer": { "@type": "Answer", "text": "Color fastness refers to a fabric's ability to maintain its color after washing, sunlight exposure, sweat, and daily wear." } },
                        { "@type": "Question", "name": "Why do uniforms fade after repeated washing?", "acceptedAnswer": { "@type": "Answer", "text": "Uniforms fade because of low-quality dyes, weak fabric construction, harsh detergents, and repeated industrial washing cycles." } },
                        { "@type": "Question", "name": "What are the advantages of performance fabrics?", "acceptedAnswer": { "@type": "Answer", "text": "Performance fabrics offer better durability, wrinkle resistance, stain resistance, moisture management, and a long-lasting professional appearance." } },
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
                            src="/oxford-5.webp"
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
                                  marginTop: "0",
                            }}
                        >
                            Your Trusted Uniform Fabric<br />Partner in UAE
                        </h2>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.5", color: "#333", marginBottom: "20px", letterSpacing: "0.3px" }}>
                            When it comes to <strong>high quality uniform fabric suppliers in UAE</strong>, <strong>Aurora Textiles</strong> is a name businesses across the GCC trust. We specialise in uniform fabrics engineered for real-world performance — covering{" "}
                            <LinkText label="hospitality uniforms" route="/products/uniform" />,{" "}
                            <LinkText label="healthcare workwear" route="/products/uniform" />,{" "}
                            <LinkText label="industrial workwear" route="/products/uniform" />, and{" "}
                            <LinkText label="corporate uniforms" route="/products/uniform" />.
                        </p>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.2", color: "#333", marginBottom: "20px", letterSpacing: "0.3px" }}>
                            With deep expertise as <strong>uniform fabric distributors and textile suppliers</strong>, Aurora Textiles serves hotels, hospitals, factories, airlines, and corporate businesses that demand consistent quality and reliable supply across every order.
                        </p>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.2", color: "#333", marginBottom: "32px", letterSpacing: "0.3px" }}>
                            As one of the most established <strong>fabric suppliers in the UAE</strong>, we source materials specifically suited to the UAE climate — breathable, fade-resistant, wash-durable, and designed to maintain a professional appearance long after day one.
                        </p>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.2", color: "#333", marginBottom: "36px", letterSpacing: "0.3px" }}>
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

            {/* ── SECTION 2: WHAT MAKES A UNIFORM FABRIC HIGH QUALITY ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
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
                    {/* Left Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "22px" : "34px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "0",
                            }}
                        >
                            What Makes a Uniform Fabric High Quality?
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            High quality uniform fabric combines durability, breathability, comfort, color retention, and long-term appearance. The best uniform fabrics for UAE and GCC businesses are designed to withstand heat, repeated industrial washing, daily wear, and demanding work environments while maintaining a professional look over time.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            A uniform is not just fabric. It becomes:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 16px 0" }}>
                            {["your brand image", "employee comfort", "customer trust", "operational efficiency"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                            That's why choosing the right fabric matters more than most businesses realize.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/image-2.png"
                            alt="What makes a uniform fabric high quality"
                            style={{
                                width: "100%",
                                height: "540px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: WHY FABRIC QUALITY MATTERS MORE THAN MOST BUSINESSES REALIZE ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
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
                            src="/sammaan-2.webp"
                            alt="Why uniform fabric quality matters"
                            style={{
                                width: "100%",
                                height: "680px",
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
                                fontSize: window.innerWidth < 768 ? "22px" : "34px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "0",
                            }}
                        >
                            Why Fabric Quality Matters More Than Most Businesses Realize
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            Many businesses focus only on:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 16px 0" }}>
                            {["color", "stitching", "design", "logo placement"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            But the real long-term difference comes from the fabric itself.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            Low-quality fabrics may look acceptable initially, but after repeated use, businesses often face:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 16px 0" }}>
                            {["fading colors", "shrinking", "wrinkling", "sweat retention", "rough texture - pilling", "poor durability"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                            Over time, this affects both employees and customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: DOES FABRIC QUALITY AFFECT UNIFORM LIFESPAN ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
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
                    {/* Left Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "22px" : "34px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "0",
                            }}
                        >
                            Does Fabric Quality Affect Uniform Lifespan?
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            Yes.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            Low-quality fabrics lose structure faster after repeated washing and heavy daily use. High quality uniform fabrics maintain:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 16px 0" }}>
                            {["shape", "texture", "color consistency", "professional appearance"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                            This reduces replacement costs and improves long-term value for businesses.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/uniform-3.webp"
                            alt="Does fabric quality affect uniform lifespan"
                            style={{
                                width: "100%",
                                height: "500px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: HOW UNIFORM FABRIC IMPACTS CUSTOMER PERCEPTION ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
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
                            src="/polyviscose-3.webp"
                            alt="How uniform fabric impacts customer perception"
                            style={{
                                width: "100%",
                                height: "680px",
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
                                fontSize: window.innerWidth < 768 ? "22px" : "34px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "0",
                            }}
                        >
                            How Uniform Fabric Impacts Customer Perception
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            Customers may not know fabric composition, but they notice:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 16px 0" }}>
                            {["dull uniforms", "wrinkles", "fading", "poor fitting garments"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            Clean and structured uniforms create trust.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            This is especially important in:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 16px 0" }}>
                            {["healthcare", "hospitality", "aviation", "retail", "luxury service sectors"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                            In cities like Dubai, where presentation standards are high, uniform quality directly impacts brand perception.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SECTION 6: BEST FABRIC TYPES FOR UNIFORMS ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        background: "#1e2d6b",
                        borderRadius: "24px",
                        border: "3px solid #e6e213e7",
                        maxWidth: "1120px",
                        margin: "0 auto",
                        padding: "30px 40px",
                        color: "#fff",
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: window.innerWidth < 768 ? "22px" : "34px",
                            fontWeight: "700",
                            letterSpacing: "2px",
                            textAlign: "center",
                            marginBottom: "20px",
                            lineHeight: "1.3",
                              marginTop: "0",
                        }}
                    >
                        Best Fabric Types for Uniforms
                    </h2>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#d0d5ee", marginBottom: "8px", letterSpacing: "0.3px" }}>
                        Different industries require different fabric performance. Choosing the right fabric depends on:
                    </p>
                    <ul style={{ paddingLeft: "30px", margin: "0 0 28px 0" }}>
                        {["climate", "work environment", "wash frequency", "comfort needs", "durability requirements"].map((point, i) => (
                            <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#d0d5ee", marginBottom: "6px" }}>
                                {point}
                            </li>
                        ))}
                    </ul>

                    <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {[
                            {
                                num: "1.",
                                title: "Cotton Uniform Fabric",
                                intro: "Cotton fabrics are widely used because they are breathable, soft, and comfortable for long wear.",
                                groups: [
                                    { label: "Best For:", items: ["healthcare", "clinics", "light office uniforms"] },
                                    { label: "Advantages:", items: ["Natural feel", "Comfortable in warm environments", "Skin-friendly"] },
                                    { label: "Limitations:", items: ["Wrinkles easily", "Can shrink after washing", "Lower durability in industrial environments"] },
                                ],
                            },
                            {
                                num: "2.",
                                title: "Poly-Cotton Blend Uniform Fabric",
                                intro: "Polycotton blends combine polyester durability with cotton comfort. These fabrics are among the most preferred options for UAE businesses because they balance durability, comfort, and maintenance efficiency.",
                                groups: [
                                    { label: "Best For:", items: ["hospitality", "corporate uniforms", "schools", "retail staff"] },
                                    { label: "Advantages:", items: ["Better wrinkle resistance", "Longer lifespan", "Easy maintenance", "Better color retention"] },
                                    { label: "Limitations:", items: ["Slightly less breathable than pure cotton"] },
                                ],
                            },
                            {
                                num: "3.",
                                title: "Industrial Performance Fabrics",
                                intro: "Industrial environments require stronger fabrics designed for heavy usage, repeated industrial washing, heat exposure, and demanding working conditions.",
                                groups: [
                                    { label: "Best For:", items: ["factories", "construction", "logistics", "industrial workwear"] },
                                    { label: "Advantages:", items: ["High durability", "Tear resistance", "Long-term performance", "Better stain resistance"] },
                                    { label: "Limitations:", items: ["Heavier feel compared to lighter fabrics"] },
                                ],
                            },
                        ].map((fabric, idx) => (
                            <li key={idx} style={{ marginBottom: idx < 2 ? "24px" : "0", fontSize: "16px", lineHeight: "1.6", color: "#dde", fontFamily: "Poppins, sans-serif", letterSpacing: "0.3px" }}>
                                <span style={{ marginRight: "4px", fontWeight: "400" }}>{fabric.num}</span>
                                <strong style={{ color: "#fff" }}>{fabric.title}:</strong> {fabric.intro}
                                <ul style={{ listStyle: "disc", paddingLeft: "40px", marginTop: "10px" }}>
                                    {fabric.groups.map((group, gi) => (
                                        <li key={gi} style={{ marginBottom: "10px", fontSize: "16px", lineHeight: "1.4", color: "#ccc" }}>
                                            <strong style={{ color: "#dde" }}>{group.label}</strong>{" "}{group.items.join(", ")}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ── SECTION 7: UNIFORM FABRIC COMPARISON CHART ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
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
                              marginTop: "0",
                        }}
                    >
                        Uniform Fabric Comparison Chart
                    </h2>
                    <div style={{ overflowX: "auto" }}>
                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                fontFamily: "'Poppins', sans-serif",
                                minWidth: "600px",
                            }}
                        >
                            <thead>
                                <tr style={{ background: "#344886" }}>
                                    {["Fabric Type", "Durability", "Breathability", "Wrinkle Resistance", "Best For"].map((head, i) => (
                                        <th
                                            key={i}
                                            style={{
                                                color: "#fff",
                                                padding: "14px 18px",
                                                textAlign: "left",
                                                fontSize: "15px",
                                                fontWeight: "600",
                                                border: "1px solid #344886",
                                            }}
                                        >
                                            {head}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { type: "Cotton", durability: "Medium", breathability: "High", wrinkle: "Low", bestFor: "Healthcare" },
                                    { type: "Poly-Cotton", durability: "High", breathability: "Medium-High", wrinkle: "Medium", bestFor: "Corporate" },
                                    { type: "Performance Fabric", durability: "Very High", breathability: "Medium", wrinkle: "High", bestFor: "Industrial" },
                                ].map((row, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8f9fc" }}>
                                        <td style={{ padding: "14px 18px", fontSize: "15px", color: "#333", border: "1px solid #ddd", fontWeight: "600" }}>{row.type}</td>
                                        <td style={{ padding: "14px 18px", fontSize: "15px", color: "#333", border: "1px solid #ddd" }}>{row.durability}</td>
                                        <td style={{ padding: "14px 18px", fontSize: "15px", color: "#333", border: "1px solid #ddd" }}>{row.breathability}</td>
                                        <td style={{ padding: "14px 18px", fontSize: "15px", color: "#333", border: "1px solid #ddd" }}>{row.wrinkle}</td>
                                        <td style={{ padding: "14px 18px", fontSize: "15px", color: "#333", border: "1px solid #ddd" }}>{row.bestFor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── SECTION 8: EXPLORE OUR UNIFORM FABRIC RANGE ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 40px" : "0 6% 20px",
                    boxSizing: "border-box",
                    marginBottom:"20px",
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
                                  marginTop: "0",
                            }}
                        >
                            Explore Our Uniform<br />Fabric Range
                        </h2>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.5", color: "#333", marginBottom: "20px", letterSpacing: "0.3px" }}>
                            We offer a comprehensive collection of uniform fabrics covering every industry, climate requirement, and durability standard. Our inventory includes:
                        </p>

                        <ul style={{ paddingLeft: "30px", margin: 0 }}>
                            {fabricTypes.map((item, i) => (
                                <li key={i} style={{ fontSize: "16px", lineHeight: "1.5", color: "#333", marginBottom: "4px" }}>
                                    <LinkText label={item.label} route={item.route} />
                                    : {item.desc}
                                </li>
                            ))}
                        </ul>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.5", color: "#333", marginTop: "24px", letterSpacing: "0.3px" }}>
                            At <strong>Aurora Textiles</strong>, our collection ensures every business finds the right <strong>uniform fabric in UAE</strong> — built for the environment it will work in.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 44%", minWidth: "280px" }}>
                        <img
                            src="/uniform-5.webp"
                            alt="Diverse range of uniform fabrics at Aurora Textiles UAE"
                            style={{
                                width: "100%",
                                height: "790px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 9: UNIFORM FABRIC SOLUTIONS BY INDUSTRY (DETAILED) ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 40px" : "0 6% 50px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        background: "#1e2d6b",
                        borderRadius: "24px",
                        border: "3px solid #e6e213e7",
                        maxWidth: "1120px",
                        margin: "0 auto",
                        padding: "30px 40px",
                        color: "#fff",
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: window.innerWidth < 768 ? "22px" : "34px",
                            fontWeight: "700",
                            letterSpacing: "2px",
                            marginBottom: "20px",
                            lineHeight: "1.3",
                            textAlign: "center",
                              marginTop: "0",
                        }}
                    >
                        Uniform Fabric Solutions by Industry
                    </h2>
                    <p style={{ fontFamily: "Poppins, sans-serif", textAlign: "center", fontSize: "16px", lineHeight: "1.6", color: "#d0d5ee", marginBottom: "28px", letterSpacing: "0.3px" }}>
                        Different industries face different challenges. A one-size-fits-all approach rarely works.
                    </p>

                    <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {[
                            {
                                num: "1.",
                                title: "Healthcare Uniform Fabrics",
                                intro: "Healthcare professionals work long shifts in demanding conditions.",
                                groups: [
                                    { label: "Recommended features:", items: ["breathable fabrics", "easy stain removal", "comfort-focused materials", "antibacterial finishes"] },
                                    { label: "Best suited fabrics:", items: ["cotton blends", "lightweight polycotton"] },
                                ],
                            },
                            {
                                num: "2.",
                                title: "Hospitality Uniform Fabrics",
                                intro: "Hospitality businesses rely heavily on appearance and customer experience.",
                                groups: [
                                    { label: "Recommended features:", items: ["wrinkle resistance", "premium finish", "color retention", "lightweight comfort"] },
                                    { label: "Best suited fabrics:", items: ["hospitality performance blends", "luxury suiting blends"] },
                                ],
                            },
                            {
                                num: "3.",
                                title: "Industrial Workwear Fabrics",
                                intro: "Industrial uniforms need maximum durability and safety.",
                                groups: [
                                    { label: "Recommended features:", items: ["abrasion resistance", "high wash durability", "stronger fabric construction"] },
                                    { label: "Best suited fabrics:", items: ["industrial performance fabrics", "reinforced polycotton blends"] },
                                ],
                            },
                            {
                                num: "4.",
                                title: "Corporate Uniform Fabrics",
                                intro: "Corporate uniforms should feel professional without sacrificing comfort.",
                                groups: [
                                    { label: "Recommended features:", items: ["smooth finish", "structure retention", "breathable construction"] },
                                    { label: "Best suited fabrics:", items: ["premium poly-viscose blends", "lightweight suiting fabrics"] },
                                ],
                            },
                            {
                                num: "5.",
                                title: "Aviation & Travel Uniform Fabrics",
                                intro: "Aviation staff uniforms require long-lasting structure, wrinkle resistance, and premium appearance during extended use.",
                                groups: [
                                    { label: "Best suited fabrics:", items: ["lightweight performance blends", "wrinkle-resistant suiting fabrics"] },
                                ],
                            },
                        ].map((industry, idx, arr) => (
                            <li key={idx} style={{ marginBottom: idx < arr.length - 1 ? "24px" : "0", fontSize: "16px", lineHeight: "1.6", color: "#dde", fontFamily: "Poppins, sans-serif", letterSpacing: "0.3px" }}>
                                <span style={{ marginRight: "4px", fontWeight: "400" }}>{industry.num}</span>
                                <strong style={{ color: "#fff" }}>{industry.title}:</strong> {industry.intro}
                                <ul style={{ listStyle: "disc", paddingLeft: "40px", marginTop: "10px" }}>
                                    {industry.groups.map((group, gi) => (
                                        <li key={gi} style={{ marginBottom: "10px", fontSize: "16px", lineHeight: "1.4", color: "#ccc" }}>
                                            <strong style={{ color: "#dde" }}>{group.label}</strong>{" "}{group.items.join(", ")}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ── SECTION 10: UNIFORM FABRIC SOLUTIONS BY INDUSTRY ── */}
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
                              marginTop: "0",
                        }}
                    >
                        Uniform Fabric Solutions<br />by Industry
                    </h2>
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "16px",
                            color: "#333",
                            marginBottom: "50px",
                            lineHeight: "1.7",
                            fontFamily: "Poppins, sans-serif",
                            letterSpacing: "0.3px"
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
                                            fontSize: "16px",
                                            lineHeight: "1.5",
                                            color: "#333",
                                            textAlign: "center",
                                            margin: 0,
                                            fontFamily: "Poppins, sans-serif",
                                            fontWeight: "500",
                                            letterSpacing: "0.3px"
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

            {/* ── SECTION 11: WHY UAE CLIMATE REQUIRES BETTER UNIFORM FABRICS ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
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
                            src="/egypt-3.webp"
                            alt="Why UAE climate requires better uniform fabrics"
                            style={{
                                width: "100%",
                                height: "700px",
                                objectFit: "cover",
                                borderRadius: "20px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* Right Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "22px" : "34px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "30px",
                            }}
                        >
                            Why UAE Climate Requires Better Uniform Fabrics
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            The UAE climate creates unique challenges for uniforms.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            Businesses in Dubai and GCC regions deal with:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 16px 0" }}>
                            {["extreme temperatures", "humidity", "sweat exposure", "frequent washing cycles", "UV exposure"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            Low-quality fabrics degrade quickly under these conditions. Common problems include:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 16px 0" }}>
                            {["fading", "odor retention", "rough texture", "shrinking", "color inconsistency"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                            That's why businesses increasingly prefer fabrics designed specifically for hot-climate performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SECTION 12: BEST UNIFORM FABRICS FOR UAE CLIMATE ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
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
                    {/* Left Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "22px" : "34px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "0",
                            }}
                        >
                            Best Uniform Fabrics for UAE Climate
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            The best fabrics for UAE businesses typically offer:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 16px 0" }}>
                            {["Breathability", "Sweat management", "Color retention", "Lightweight comfort", "Long-term durability"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", lineHeight: "1.4", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            Polycotton and advanced performance blends are often ideal for:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: 0 }}>
                            {["hospitality", "retail", "industrial uniforms", "healthcare workwear"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/sanskriti-3.webp"
                            alt="Best uniform fabrics for UAE climate"
                            style={{
                                width: "100%",
                                height: "500px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 13: HOW TO CHOOSE THE RIGHT UNIFORM FABRIC SUPPLIER IN UAE ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
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
                        src="/suitings-2.webp"
                        alt="How to choose the right uniform fabric supplier in UAE"
                        style={{
                            width: "100%",
                            height: "1100px",
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
                            fontSize: window.innerWidth < 768 ? "22px" : "34px",
                            fontWeight: "700",
                            color: "#344886",
                            marginBottom: "20px",
                            lineHeight: "1.3",
                              marginTop: "0",
                        }}
                    >
                        How to Choose the Right Uniform Fabric Supplier in UAE
                    </h2>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.5", color: "#333", marginBottom: "28px", letterSpacing: "0.3px" }}>
                        Choosing the right supplier matters just as much as choosing the right fabric. Businesses should evaluate suppliers based on:
                    </p>

                    {[
                        {
                            title: "1. Fabric Consistency",
                            body: "Every batch should maintain:",
                            list: ["same color", "same texture", "same performance"],
                            closing: "Inconsistent supply affects brand image.",
                        },
                        {
                            title: "2. Wash Durability",
                            body: "Uniforms must survive repeated washing without:",
                            list: ["fading", "shrinking", "losing structure"],
                            closing: null,
                        },
                        {
                            title: "3. Color Fastness",
                            body: null,
                            list: null,
                            closing: "High-quality fabrics retain appearance even after multiple washes and daily exposure.",
                        },
                        {
                            title: "4. Climate Suitability",
                            body: "Fabrics should perform well in:",
                            list: ["UAE heat", "humidity", "long working hours"],
                            closing: null,
                        },
                        {
                            title: "5. Industry Expertise",
                            body: "Different sectors require different fabric solutions. A good supplier understands:",
                            list: ["hospitality needs", "industrial requirements", "healthcare functionality", "corporate presentation standards"],
                            closing: null,
                        },
                    ].map((criteria, idx, arr) => (
                        <div key={idx} style={{ marginBottom: idx < arr.length - 1 ? "28px" : "0" }}>
                            <h3
                                style={{
                                    fontFamily: "'Cinzel Decorative', serif",
                                    fontSize: "22px",
                                    fontWeight: "700",
                                    color: "#344886",
                                    marginBottom: "12px",
                                }}
                            >
                                {criteria.title}
                            </h3>
                            {criteria.body && (
                                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.2", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                                    {criteria.body}
                                </p>
                            )}
                            {criteria.list && (
                                <ul style={{ paddingLeft: "30px", margin: "0 0 8px 0" }}>
                                    {criteria.list.map((point, i) => (
                                        <li key={i} style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "4px" }}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {criteria.closing && (
                                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.2", color: "#333", margin: 0, letterSpacing: "0.3px" }}>
                                    {criteria.closing}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                </div>
            </section>

            {/* ── SECTION 14: WHY UAE BUSINESSES CHOOSE AURORA TEXTILES ── */}
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

                    {/* left Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "24px" : "38px",
                                fontWeight: "700",
                                color: "#344886",
                                lineHeight: "1.2",
                                marginBottom: "28px",
                                  marginTop: "0",
                            }}
                        >
                            Uniform Fabric Supply<br />Solutions in UAE
                        </h2>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.5", color: "#333", marginBottom: "20px", letterSpacing: "0.3px" }}>
                            As experienced <strong>wholesale uniform fabric suppliers</strong>, Aurora Textiles supports both bulk and bespoke orders. Whether you're a hotel chain, hospital group, factory, or corporate business, our streamlined supply ensures consistent quality and timely delivery across Dubai, Abu Dhabi, and the wider GCC.
                        </p>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.5", color: "#333", marginBottom: "32px", letterSpacing: "0.3px" }}>
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

                        <ul style={{ paddingLeft: "30px", margin: 0 }}>
                            {[
                                "Consistent fabric quality",
                                "Wide textile sourcing expertise",
                                "Industry-focused fabric solutions",
                                "Hospitality and industrial textile experience",
                                "Reliable supply capability",
                                "Understanding of UAE climate requirements",
                            ].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.1", color: "#333", marginBottom: "4px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.5", color: "#333", marginTop: "20px", letterSpacing: "0.3px" }}>
                            From hospitality uniforms to industrial workwear fabrics, Aurora Textiles supports businesses looking for long-term textile performance — not just short-term appearance.
                        </p>
                    </div>

                      {/* Right Image */}
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
                    
                </div>
            </section>

            {/* ── SECTION 15: CONNECT WITH AURORA TEXTILES ── */}
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
                            fontSize: window.innerWidth < 768 ? "22px" : "38px",
                            fontWeight: "700",
                            color: "#344886",
                            marginBottom: "24px",
                            lineHeight: "1.3",
                              marginTop: "0",
                        }}
                    >
                        Looking for High Quality Uniform Fabric in UAE?
                    </h2>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.5", color: "#333", letterSpacing: "0.3px" }}>
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
                                        fontSize: "17px",
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
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: "16px",
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