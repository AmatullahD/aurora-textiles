import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function FabricSuppliers() {
    const navigate = useNavigate();
    const [hoveredBrand, setHoveredBrand] = useState(null);

    // ── SECTION 1: Intro text inline links ──
    const fabricLinks = [
        { label: "ethnic wear", route: "/products/ethnic" },
        { label: "uniforms", route: "/products/uniform" },
        { label: "suiting", route: "/products/suiting" },
        { label: "shirting", route: "/products/shirting" },
    ];

    // ── SECTION 2: Fabric types list with links ──
    const fabricTypes = [
        { label: "Wool", route: "/products/suiting", desc: "Perfect for formal suits and blazers, offering warmth, structure, and timeless sophistication." },
        { label: "Polyester", route: "/products/reliance-fabrics", desc: "Wrinkle-resistant, breathable, and elegant." },
        { label: "Cotton", route: "/products/shirting", desc: "Lightweight, soft, and ideal for casual shirting or uniforms." },
        { label: "Linen", route: "/linen-fabric", desc: "The fabric of understated luxury, known for its natural texture and cooling properties." },
        { label: "PolyCotton", route: "/products/uniform", desc: "A practical choice for uniforms and workwear — durable and easy to maintain." },
        { label: "Cotton-Linen", route: "/linen-fabric", desc: "A breezy fusion for summer wear, combining the softness of cotton and the breathability of linen." },
        { label: "PolyViscose", route: "/products/suiting", desc: "Known for smooth drape and vibrant finish, perfect for contemporary suits." },
        { label: "Denim", route: "/products/suiting", desc: "Strong, stylish, and versatile — suitable for smart casual wear and modern tailoring." },
        { label: "PV Lycra", route: "/products/suiting", desc: "For comfort and flexibility in tailored suits, maintaining shape through long hours of wear." },
        { label: "Poly Wool Lycra", route: "/products/suiting", desc: "A premium stretch blend that offers structure and ease — ideal for travel and office attire." },
        { label: "Tencel Blend", route: "/products/shirting", desc: "Eco-friendly luxury with a silky texture, perfect for modern, breathable shirting and suits." },
    ];

    // ── SECTION 3: Brand cards with hover description ──
    const brandCards = [
        {
            src: "/donear-logo.png",
            route: "/products/donear",
            desc: "A name synonymous with innovation and style.We house a wide range of Donear suiting and shirting fabrics, known for their fine texture, rich colors, and lasting comfort - perfect for both formal and festive wear.",
        },
        {
            src: "/klopman.webp",
            route: "/products/klopman",
            desc: "Klopman International is Europe's leading workwear fabric manufacturer, offering high-performance fabrics designed for durability, safety, and comfort in demanding environments.",
        },
        {
            src: "/oxford.webp",
            route: "/products/oxford",
            desc: "Renowned for its premium cotton and polycotton shirting fabrics, Oxford fabrics at Aurora Textiles bring comfort, breathability, and classic elegance for everyday wear and uniforms.",
        },
        {
            src: "/reliance-logo1.webp",
            route: "/products/reliance-fabrics",
            desc: "Offering a modern range of polyester blends and versatile suiting materials, Reliance fabrics stand out for their quality, affordability, and resilience — ideal for mass production and corporate clients.",
        },
        {
            src: "/sammaan-1.webp",
            route: "/products/sammaan-fabrics",
            desc: "Our Sammaan fabric range primarily features premium shirting materials, complemented by elegant ethnic and formal options. Designed to balance tradition with trend, these fabrics are also ideal for kurtas, sherwanis, and ceremonial attire.",
        },
        {
            src: "/reidAndTaylor.webp",
            route: "/products/reid-and-taylor",
            desc: "The epitome of luxury. Reid & Taylor suiting fabrics are crafted with superfine wool and premium blends — chosen by those who appreciate Scottish heritage and timeless sophistication.",
        },
        {
            src: "/georgia-gullini-1.webp",
            route: "/products/georgia-gullini-fabrics",
            desc: "A brand celebrated for its refined aesthetics and craftsmanship. Our Georgia Gullini collection features contemporary suiting materials perfect for business attire and eveningwear.",
        },
        {
            src: "/linoworld.webp",
            route: "/linen-fabric",
            desc: "Dedicated to the finest linen fabrics, Linoworld represents natural luxury and comfort — ideal for Dubai's warm climate and resort-style fashion.",
        },
        {
            src: "/john-cavendish.webp",
            route: "/products/john-cavendish-fabrics",
            desc: "A classic brand offering a versatile collection of cotton, wool, and blended fabrics, combining style and practicality for both formal and semi-formal looks.",
        },
        {
            src: "/nemssis-1.webp",
            route: "/products/nemssis",
            desc: "Our Nemssis fabrics are known for their sleek texture, durability, and modern appeal — perfect for uniforms and commercial applications.",
        },
        {
            src: "/spaadaa-1.webp",
            route: "/products/spaadaa-fabrics",
            desc: "Spaadaa Fabrics delivers a distinctive range of menswear fabrics combining modern designs with superior quality, ideal for retail and bespoke tailoring applications.",
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
                <title>Fabric Suppliers in Dubai, UAE | Men's Fabric Distributors &amp; Wholesaler</title>
                <meta name="description" content="Aurora Textiles is the leading Men's fabric supplier, Wholesaler &amp; distributor in Dubai, UAE. We deal in all types of fabrics and brands in UAE." />
                <script type="application/ld+json">{`
                  ${JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Aurora Textiles",
                    "description": "Aurora Textiles is the leading Men's fabric supplier, Wholesaler & distributor in Dubai, UAE. We deal in all types of fabrics and brands in UAE.",
                    "url": "https://aurora-textiles.vercel.app/fabric-suppliers",
                    "image": "https://aurora-textiles.vercel.app/about-banner.jpg",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Al Fahidi, Wholesale Textile Market, Capital Building",
                        "addressLocality": "Dubai",
                        "addressCountry": "AE"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "25.2654",
                        "longitude": "55.2963"
                    },
                    "telephone": "+971-XX-XXXXXXX",
                    "priceRange": "$$",
                    "sameAs": ["https://aurora-textiles.vercel.app"]
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
                    alt="Leading Fabric Suppliers in Dubai UAE"
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
                        Leading Fabric Suppliers in<br />Dubai, UAE
                    </h1>
                </div>
            </section>

            {/* ── SECTION 1: YOUR TRUSTED FABRIC PARTNER ── */}
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
                            src="fabric-supplier-1.webp"
                            alt="Premium fabric rolls at Aurora Textiles Dubai"
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
                            Your Trusted Fabric<br />Partner in the UAE
                        </h2>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "20px" }}>
                            When it comes to <strong>premium fabric suppliers in Dubai</strong>, <strong>Aurora Textiles</strong> stands as a trusted name across the UAE and the Middle East. We specialise in <strong>men's fabrics</strong> that combine luxury, durability, and craftsmanship — catering to everything from{" "}
                            <LinkText label="ethnic wear" route="/products/ethnic" /> to{" "}
                            <LinkText label="uniforms" route="/products/uniform" />,{" "}
                            <LinkText label="suiting" route="/products/suiting" />, and{" "}
                            <LinkText label="shirting" route="/products/shirting" />.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "20px" }}>
                            With decades of experience as leading <strong>textile traders and men's fabric distributors</strong>, Aurora Textiles proudly serves tailors, designers, boutiques, and wholesale buyers who seek quality without compromise.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "32px" }}>
                            As one of the most established <strong>fabric suppliers in the UAE</strong>, we bring together tradition and innovation through a carefully curated selection of materials. Our fabrics are sourced from globally renowned brands and are ideal for every style, climate, and occasion.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "36px" }}>
                            Whether it's a sharp business suit, an elegant wedding sherwani, or a refined corporate uniform —{" "}
                            <a
                                href="/"
                                onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo(0, 0); }}
                                style={{ color: "#344886", fontWeight: "600", textDecoration: "underline" }}
                            >
                                Aurora Textiles
                            </a>{" "}
                            delivers fabrics that make every design exceptional.
                        </p>

                        {/* Contact Us Button + Call + WhatsApp */}
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

            {/* ── SECTION 2: EXPLORE DIVERSE RANGE ── */}
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
                            Explore Our Diverse<br />Range of Men's<br />Fabrics
                        </h2>

                        <p style={{ fontSize: "17px", lineHeight: "1.5", color: "#333", marginBottom: "20px" }}>
                            We offer an extensive collection that covers every occasion, purpose, and preference. Our inventory includes:
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
                            At <strong>Aurora Textiles</strong>, our collection ensures every designer and tailor finds the right <strong>fabric in UAE</strong> to bring their vision to life.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 44%", minWidth: "280px" }}>
                        <img
                            src="/egypt-1.webp"
                            alt="Diverse range of men's fabrics at Aurora Textiles"
                            style={{
                                width: "100%",
                                height: "780px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: OFFICIAL DISTRIBUTORS — BRAND CARDS ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "50px 5% 40px" : "60px 6% 40px",
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
                        Official Distributors of Leading Fabric<br />Brands
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
                        As trusted <strong>men's fabric distributors</strong>, we are proud to represent and stock fabrics from some of the world's most respected textile brands.
                    </p>

                    {/* Brand Cards Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: window.innerWidth < 768 ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                            gap: "24px",
                        }}
                    >
                        {brandCards.map((brand, index) => (
                            <div
                                key={index}
                                onClick={() => { navigate(brand.route); window.scrollTo(0, 0); }}
                                onMouseEnter={() => setHoveredBrand(index)}
                                onMouseLeave={() => setHoveredBrand(null)}
                                style={{
                                    border: "5px solid #071d42",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    height: "250px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "24px",
                                    boxSizing: "border-box",
                                    position: "relative",
                                    background: "#fff",
                                    transition: "box-shadow 0.3s ease",
                                    boxShadow: hoveredBrand === index ? "0 8px 30px rgba(11,44,102,0.15)" : "none",
                                }}
                            >
                                {/* Default: Logo */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "20px",
                                        opacity: hoveredBrand === index ? 0 : 1,
                                        transition: "opacity 0.3s ease",
                                        pointerEvents: "none",
                                    }}
                                >
                                    {brand.src ? (
                                        <img
                                            src={brand.src}
                                            alt={brand.alt}
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
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                color: "#0B2C66",
                                                textAlign: "center",
                                            }}
                                        >
                                            {brand.alt}
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
                                        opacity: hoveredBrand === index ? 1 : 0,
                                        transition: "opacity 0.3s ease",
                                        pointerEvents: "none",
                                        background: "#fff",
                                        borderRadius: "16px",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            lineHeight: "1.5",
                                            color: "#333",
                                            textAlign: "center",
                                            margin: 0,
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: "500",
                                        }}
                                    >
                                        <strong style={{ color: "#0B2C66", fontFamily: "'Cinzel Decorative', serif", fontSize: "12px", display: "block", marginBottom: "6px" }}>
                                            {brand.alt}
                                        </strong>
                                        {brand.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: WHOLESALE TEXTILE SOLUTIONS ── */}
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
                            src="fabric-supplier-2.webp"
                            alt="Wholesale textile solutions Dubai"
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
                                fontSize: window.innerWidth < 768 ? "24px" : "38px",
                                fontWeight: "700",
                                color: "#344886",
                                lineHeight: "1.2",
                                marginBottom: "28px",

                            }}
                        >
                            Wholesale Textile<br />Solutions in Dubai
                        </h2>

                        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
                            As experienced <strong>wholesale textile suppliers</strong>, Aurora Textiles supports both bulk and bespoke orders. Whether you're a retailer, fashion designer, or corporate client, our streamlined distribution ensures timely delivery across Dubai, Abu Dhabi, and other Middle Eastern regions.
                        </p>

                        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#333", marginBottom: "32px" }}>
                            Our wide fabric network and established relationships with global mills make us the preferred partner for <strong>fabric UAE</strong> buyers who value consistency, authenticity, and service excellence.
                        </p>

                        <h3
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: "22px",
                                fontWeight: "700",
                                color: "#222",
                                marginBottom: "20px",
                            }}
                        >
                            Why Choose Aurora Textiles?
                        </h3>

                        <ul style={{ paddingLeft: "20px", margin: 0 }}>
                            {[
                                "Premium collection from world-renowned brands",
                                "Expertise in men's suiting, shirting, ethnic, and uniform fabrics",
                                "Competitive wholesale pricing",
                                "Consistent stock availability across all fabric categories",
                                "Trusted by tailors, designers, and retailers across the UAE",
                                "Personalised service from experienced fabric consultants",
                            ].map((point, i) => (
                                <li key={i} style={{ fontSize: "16px", lineHeight: "1.9", color: "#333", marginBottom: "4px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: CONNECT WITH LEADING FABRIC SUPPLIERS ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "50px 5% 60px" : "70px 6% 80px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}>
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
                        Connect with the Leading Fabric Suppliers in UAE
                    </h2>
                    <p style={{
                        fontSize: "19px",
                        lineHeight: "1.5",
                        color: "#333"
                    }}>
                        If you're looking for the most reliable{" "}
                        <strong>fabric suppliers in Dubai</strong> for wholesale, retail, or design needs — Aurora Textiles is your destination. Discover our collection, explore textures, and source premium fabrics that define quality.
                    </p>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </div>
    );
}