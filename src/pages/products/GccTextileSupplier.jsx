import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function GccTextileSupplier() {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);

    const faqs = [
        {
            question: "What is a GCC textile supplier?",
            answer: "A GCC textile supplier provides fabrics and textile solutions to businesses across the Gulf Cooperation Council region, including the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. These suppliers support industries such as hospitality, healthcare, fashion, uniforms, retail, and industrial workwear.",
        },
        {
            question: "Why do businesses source textiles from Dubai?",
            answer: "Dubai is a major textile trading hub due to its strategic location, advanced logistics infrastructure, international trade connections, and access to global fabric collections. Businesses across the GCC often source through Dubai for faster delivery and better supply chain efficiency.",
        },
        {
            question: "Which fabrics perform best in GCC climates?",
            answer: "Fabrics that offer breathability, moisture management, durability, and color retention perform best in GCC climates. Popular choices include poly-cotton blends, tropical suiting fabrics, hospitality performance fabrics, and lightweight menswear textiles.",
        },
        {
            question: "How do I choose the right GCC textile supplier?",
            answer: "Look for suppliers that offer consistent quality, reliable stock availability, regional expertise, industry-specific solutions, wholesale support, and efficient logistics across GCC countries.",
        },
        {
            question: "What industries rely most on GCC textile suppliers?",
            answer: "Key industries include hospitality, healthcare, aviation, retail, corporate uniforms, education, fashion, and industrial manufacturing. Each sector requires specialized fabrics designed for its operating environment.",
        },
        {
            question: "Why is fabric quality important for hospitality businesses?",
            answer: "Hospitality uniforms and textiles are a direct reflection of brand standards. High-quality fabrics help maintain a professional appearance, improve employee comfort, and withstand frequent washing cycles.",
        },
        {
            question: "What fabrics are commonly used for corporate uniforms?",
            answer: "Corporate uniforms typically use poly-viscose blends, cotton blends, and premium suiting fabrics because they offer a balance of comfort, durability, wrinkle resistance, and professional appearance.",
        },
        {
            question: "What is the most durable fabric for workwear and industrial uniforms?",
            answer: "Industrial workwear commonly uses performance fabrics and durable poly-cotton blends because they provide strength, wash durability, and resistance to wear and tear in demanding environments.",
        },
        {
            question: "Can GCC textile suppliers support wholesale orders?",
            answer: "Yes. Most established GCC textile suppliers support wholesale orders for garment manufacturers, retailers, hospitality groups, corporate organizations, and uniform suppliers.",
        },
        {
            question: "Why is climate suitability important when sourcing fabrics in GCC?",
            answer: "The GCC experiences high temperatures, humidity, and frequent garment washing. Fabrics designed for these conditions typically last longer and provide better comfort than standard materials.",
        },
        {
            question: "Why choose a regional GCC textile supplier instead of overseas sourcing?",
            answer: "Regional suppliers often provide faster delivery, easier communication, better market understanding, reduced lead times, and fabrics better suited to GCC climate and business requirements.",
        },
    ];

    // ── SECTION 1: Intro inline links ──
    const industryLinks = [
        { label: "uniform fabrics", route: "/products/uniform" },
        { label: "hospitality textiles", route: "/products/uniform" },
        { label: "menswear fabrics", route: "/products/suiting" },
        { label: "industrial workwear fabrics", route: "/products/uniform" },
    ];

    // ── SECTION 2: Fabric types list ──
    const fabricTypes = [
        { label: "Poly-Cotton Blend", route: "/products/uniform", desc: "The most preferred fabric across GCC industries — balances durability, comfort, and easy maintenance for hospitality, corporate, and industrial sectors." },
        { label: "PolyViscose", route: "/products/suiting", desc: "Smooth drape and professional finish — ideal for corporate uniforms, menswear collections, and aviation crew attire." },
        { label: "Tropical Suiting Fabric", route: "/products/suiting", desc: "Lightweight and breathable suiting fabric — engineered for GCC climates where comfort and professional appearance are equally important." },
        { label: "Hospitality Performance Blend", route: "/products/uniform", desc: "Wrinkle-resistant and colour-retentive — designed for front-of-house hospitality staff who represent your brand every shift." },
        { label: "Industrial Performance Fabric", route: "/products/uniform", desc: "Built for demanding environments — high wash durability, abrasion resistance, and tear strength for factories, construction, and logistics." },
        { label: "Lightweight Menswear Fabric", route: "/products/suiting", desc: "Breathable and refined — suited for premium menswear collections, tailoring houses, and retail fashion in GCC markets." },
        { label: "Cotton Blend", route: "/products/uniform", desc: "Breathable and skin-friendly — commonly used for healthcare uniforms, scrubs, and light workwear requiring all-day comfort." },
        { label: "Premium Suiting Fabric", route: "/products/suiting", desc: "Sophisticated fabrics for high-end menswear, bespoke tailoring, and executive corporate wardrobes across the GCC." },
    ];

    // ── SECTION 3: Industry cards with hover description ──
    const industryCards = [
        {
            alt: "Hospitality",
            src: "/hospitality-uniform.webp",
            route: "/products/uniform",
            desc: "Wrinkle-resistant, colour-retentive hospitality blends that maintain a polished appearance through full service shifts in hotels and restaurants across the GCC.",
        },
        {
            alt: "Corporate",
            src: "/corporate-uniform.webp",
            route: "/products/uniform",
            desc: "Premium poly-viscose and suiting blends that deliver a professional, structured finish for corporate offices and government organizations across UAE and GCC.",
        },
        {
            alt: "Industrial",
            src: "/industrial-uniform.webp",
            route: "/products/uniform",
            desc: "Heavy-duty performance fabrics with abrasion resistance and high wash durability — engineered for factories, construction sites, and logistics facilities.",
        },
        {
            alt: "Menswear",
            src: "/fabric-supplier-9.webp",
            route: "/products/suiting",
            desc: "Lightweight, breathable suiting and shirting fabrics tailored for premium menswear retailers, fashion boutiques, and tailoring houses throughout the GCC.",
        },
        {
            alt: "Aviation & Travel",
            src: "/aviation-uniform.webp",
            route: "/products/uniform",
            desc: "Lightweight, wrinkle-resistant performance blends that retain a premium appearance through extended flight hours and demanding international travel schedules.",
        },
        {
            alt: "Healthcare",
            src: "/healthcare-uniform.webp",
            route: "/products/uniform",
            desc: "Breathable cotton blends and lightweight polycotton fabrics designed for comfort, hygiene, and durability during long working hours in clinics and hospitals.",
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
                <title>Leading GCC Textile Supplier for Premium Fabric - Aurora Textiles</title>
                <meta name="description" content="Aurora Textiles are the leading GCC Textiles Supplier for Premium Fabric. We offer all types of fabrics from renowned brands in UAE. Contact us now." />
                <script type="application/ld+json">{`
                  ${JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is a GCC textile supplier?", "acceptedAnswer": { "@type": "Answer", "text": "A GCC textile supplier provides fabrics and textile solutions to businesses across the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain for industries such as hospitality, healthcare, fashion, uniforms, and industrial workwear." } },
                        { "@type": "Question", "name": "Why do businesses source textiles from Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Dubai is a major textile trading hub with advanced logistics, global trade connections, and access to international fabric collections, making sourcing faster and more efficient across the GCC." } },
                        { "@type": "Question", "name": "Which fabrics perform best in GCC climates?", "acceptedAnswer": { "@type": "Answer", "text": "Breathable and durable fabrics such as poly-cotton blends, tropical suiting fabrics, hospitality performance fabrics, and lightweight menswear textiles perform best in GCC climates." } },
                        { "@type": "Question", "name": "How do I choose the right GCC textile supplier?", "acceptedAnswer": { "@type": "Answer", "text": "Choose a supplier that offers consistent quality, reliable inventory, regional expertise, wholesale support, and efficient logistics across GCC countries." } },
                        { "@type": "Question", "name": "What industries rely most on GCC textile suppliers?", "acceptedAnswer": { "@type": "Answer", "text": "Hospitality, healthcare, aviation, retail, education, corporate uniforms, fashion, and industrial manufacturing are among the industries that rely heavily on GCC textile suppliers." } },
                        { "@type": "Question", "name": "Why is fabric quality important for hospitality businesses?", "acceptedAnswer": { "@type": "Answer", "text": "High-quality fabrics help hospitality businesses maintain a professional appearance, improve employee comfort, and withstand frequent washing while preserving brand image." } },
                        { "@type": "Question", "name": "What fabrics are commonly used for corporate uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Poly-viscose blends, cotton blends, and premium suiting fabrics are commonly used for corporate uniforms because they offer comfort, durability, and a professional appearance." } },
                        { "@type": "Question", "name": "What is the most durable fabric for workwear and industrial uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Performance fabrics and durable poly-cotton blends are widely used for industrial uniforms because they offer strength, durability, and resistance to wear and tear." } },
                        { "@type": "Question", "name": "Can GCC textile suppliers support wholesale orders?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Established GCC textile suppliers typically support wholesale orders for retailers, manufacturers, hospitality groups, and corporate organizations." } },
                        { "@type": "Question", "name": "Why is climate suitability important when sourcing fabrics in GCC?", "acceptedAnswer": { "@type": "Answer", "text": "The GCC's hot climate and frequent garment washing require fabrics that offer breathability, durability, moisture management, and long-lasting appearance." } },
                        { "@type": "Question", "name": "Why choose a regional GCC textile supplier instead of overseas sourcing?", "acceptedAnswer": { "@type": "Answer", "text": "Regional GCC suppliers often provide faster delivery, better market understanding, easier communication, and fabrics better suited to local climate conditions." } },
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
                    alt="Leading GCC Textile Supplier - Aurora Textiles"
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
                        Leading GCC Textile Supplier<br />for Premium Fabric
                    </h1>
                </div>
            </section>

            {/* ── SECTION 1: YOUR TRUSTED GCC TEXTILE PARTNER ── */}
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
                            alt="Premium fabric rolls at Aurora Textiles GCC supplier UAE"
                            style={{
                                width: "100%",
                                height: "740px",
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
                            Your Trusted GCC Textile<br />Supplier Based in Dubai
                        </h2>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "20px" }}>
                            As a leading <strong>GCC textile supplier</strong>, <strong>Aurora Textiles</strong> provides premium fabric solutions to businesses across the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. We specialise in sourcing fabrics for{" "}
                            <LinkText label="uniform fabrics" route="/products/uniform" />,{" "}
                            <LinkText label="hospitality textiles" route="/products/uniform" />,{" "}
                            <LinkText label="menswear fabrics" route="/products/suiting" />, and{" "}
                            <LinkText label="industrial workwear fabrics" route="/products/uniform" />.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "20px" }}>
                            With Dubai's strategic position as the region's textile and logistics hub, Aurora Textiles serves hotels, hospitals, factories, airlines, and corporate businesses that demand consistent quality and reliable supply across every GCC market.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "32px" }}>
                            As one of the most established <strong>fabric suppliers in the GCC</strong>, we source materials specifically suited to regional climate conditions — breathable, fade-resistant, wash-durable, and designed to maintain a professional appearance long after day one.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.2", color: "#333", marginBottom: "36px" }}>
                            Whether it's a luxury hotel uniform in Doha, a corporate wardrobe in Riyadh, or industrial workwear in Abu Dhabi —{" "}
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

            {/* ── SECTION 2: EXPLORE OUR GCC FABRIC RANGE ── */}
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
                            Explore Our GCC<br />Textile Range
                        </h2>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "20px" }}>
                            We offer a comprehensive collection of fabrics covering every industry, climate requirement, and durability standard across the GCC. Our inventory includes:
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
                            At <strong>Aurora Textiles</strong>, our collection ensures every GCC business finds the right <strong>textile solution</strong> — built for the regional environment it will work in.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 44%", minWidth: "280px" }}>
                        <img
                            src="/fabric-supplier-2.webp"
                            alt="Diverse range of premium fabrics at Aurora Textiles GCC supplier"
                            style={{
                                width: "100%",
                                height: "670px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: GCC TEXTILE SOLUTIONS BY INDUSTRY ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "50px 5% 40px" : "20px 6% 20px",
                    boxSizing: "border-box",
                    background: "#fafafa",
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
                        GCC Textile Solutions by Industry
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
                        As trusted <strong>textile suppliers across the GCC</strong>, we understand that different industries face different challenges — and we stock fabrics built for each one.
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
                                    height: "280px",
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
                                {/* Default: Industry name / image */}
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

            {/* ── SECTION 4: GCC TEXTILE SUPPLY SOLUTIONS ── */}
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
                            alt="GCC textile wholesale supply solutions Aurora Textiles"
                            style={{
                                width: "100%",
                                height: "740px",
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
                            GCC Textile Supply<br />Solutions from Dubai
                        </h2>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "20px" }}>
                            As experienced <strong>wholesale textile suppliers for the GCC</strong>, Aurora Textiles supports both bulk and bespoke orders. Whether you're a hotel chain in Qatar, a hospital group in Saudi Arabia, a factory in Oman, or a corporate business in Kuwait, our streamlined supply ensures consistent quality and timely delivery across the entire region.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "32px" }}>
                            Our wide textile network and climate-focused fabric sourcing make us the preferred partner for <strong>GCC textile buyers</strong> who value performance, consistency, and long-term supply reliability.
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
                            Why Businesses Across the GCC Choose Aurora Textiles?
                        </h3>

                        <ul style={{ paddingLeft: "25px", margin: 0 }}>
                            {[
                                "Consistent fabric quality across every batch and order",
                                "Wide selection of textiles for all GCC industries and climate conditions",
                                "Industry-focused solutions for hospitality, corporate, menswear, and industrial sectors",
                                "Fade-resistant, wash-durable, and breathable fabric options",
                                "Reliable supply capability across UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain",
                                "Experienced team with deep understanding of GCC regional requirements",
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
                        Looking for a Reliable GCC Textile Supplier?
                    </h2>
                    <p style={{ fontSize: "19px", lineHeight: "1.5", color: "#333" }}>
                        If you're searching for the most reliable{" "}
                        <strong>GCC textile supplier</strong> for wholesale, retail, hospitality, or corporate needs — Aurora Textiles is your destination. Discover our collection, explore fabric performance options, and source premium textiles engineered for GCC climate conditions and your specific industry.
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