import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function RaagReshamPage() {
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const faqColRef = useRef(null);
    const [faqImgHeight, setFaqImgHeight] = useState(500);

    useLayoutEffect(() => {
        const el = faqColRef.current;
        if (!el) return;
        setFaqImgHeight(el.getBoundingClientRect().height);
        const ro = new ResizeObserver(entries => {
            for (const entry of entries) {
                setFaqImgHeight(entry.contentRect.height);
            }
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, [openFaq]);

    const faqs = [
        {
            question: "What is unique about Raag Resham by Nemssis?",
            answer:
                "Raag Resham offers a blend of festive flair and traditional aesthetics, crafted especially for men's ethnic wear like kurtas, sherwanis, and jackets.",
        },
        {
            question: "Are Raag Resham fabrics suitable for bulk purchase?",
            answer:
                "Yes, Aurora Textiles supports bulk orders of Raag Resham fabrics for tailors, retailers, and fashion exporters across Dubai and the MENA region with competitive pricing and on-time delivery.",
        },
        {
            question: "What fabric types are available in the Raag Resham collection?",
            answer:
                "The Raag Resham collection includes unstitched fabrics in poly-viscose, cotton blends, and silk-touch finishes, available in jacquard, printed, and embellished options for premium ethnic menswear.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Raag Resham by Nemssis - Festival Collection Ethnic Fabrics for Mens</title>
                <meta name="description" content="Check out Raag Resham by Nemssis – a premium festive collection of ethnic fabrics for men. Perfect for kurtas, sherwanis, and jackets. Available now at Aurora Textiles, Dubai." />

                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Product", "name": "Raag Resham by Nemssis", "description": "Buy Raag Resham by Nemssis festival collection ethnic fabrics wholesale in Dubai. Precious silk embroidery fabrics from Varanasi at Aurora Textiles.", "brand": { "@type": "Brand", "name": "Raag Resham by Nemssis" }, "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": { "@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app" } }, "url": "https://aurora-textiles.vercel.app/products/raag-resham-by-nemssis" })}</script>
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
                        Raag Resham by Nemssis
                    </h1>
                </div>
            </section>

            {/* SECTION 1: Brand Logo Left + Text Right */}
            <section
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",

                    gap: "60px",
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Logo — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "320px",
                    }}
                >
                    <img
                        src="/ethnic-icon3.webp"
                        alt="Raag Resham by Nemssis Logo"
                        style={{
                            width: "100%",
                            maxWidth: "460px",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: Text — 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "42px",
                            fontWeight: "700",
                            color: "#344886",
                            margin: "0 0 28px 0",
                            lineHeight: "1.2",
                        }}
                    >
                        Raag Resham By Nemssis By Aurora Textiles, Dubai
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "0",
                        }}
                    >
                        <strong>Aurora Textiles</strong> proudly brings you{" "}
                        <strong>Raag Resham by Nemssis</strong>, a distinguished collection of ethnic
                        fabrics curated for men's traditional wear. Rooted in artistic heritage and
                        festive opulence, these fabrics are ideal for crafting kurtas, sherwanis, ethnic
                        jackets, and celebration-ready menswear. We cater to designers and tailors
                        across Dubai and the MENA region who seek quality, character, and craftsmanship
                        in every meter.
                    </p>
                </div>
            </section>

            {/* SECTION 2: Text Left + Image Right */}
            <section
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",

                    gap: "60px",
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Text — 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#344886",
                            margin: "0 0 24px 0",
                            lineHeight: "1.2",
                        }}
                    >
                        Premium Ethnic Fabrics With Festive Appeal
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "32px",
                        }}
                    >
                        The <strong>Raag Resham collection</strong> is known for its luxurious finish
                        and culturally inspired motifs. Designed with intricate patterns, contemporary
                        color palettes, and textures that shine on special occasions, these fabrics
                        embody the essence of festive fashion for men. Whether you're dressing for a
                        wedding, cultural event, or religious celebration, Raag Resham offers the
                        perfect base for impactful attire.
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

                {/* Right: Image — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: "500px",
                        overflow: "hidden",
                        borderRadius: "4px",
                    }}
                >
                    <img
                        src="/resham-2.webp"
                        alt="Premium Ethnic Fabrics with Festive Appeal"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 3: Image Left + Text Right */}
            <section
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",

                    gap: "60px",
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Image — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: "500px",
                        overflow: "hidden",
                        borderRadius: "4px",
                    }}
                >
                    <img
                        src="/resham-3.webp"
                        alt="Raag Resham Fabric Features"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: Text — 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#344886",
                            margin: "0 0 24px 0",
                            lineHeight: "1.2",
                        }}
                    >
                        Fabric Features &amp; Composition
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "20px",
                        }}
                    >
                        Raag Resham by Nemssis includes:
                    </p>
                    <ul style={{ paddingLeft: "20px", margin: "0 0 24px 0" }}>
                        {[
                            "Unstitched fabrics ideal for bespoke ethnic wear",
                            "Lightweight and drapable textures",
                            "Poly-viscose, cotton blends, and silk-touch finishes",
                            "Jacquard, printed, and embellished options for premium look and feel",
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "19px",
                                    color: "#333",
                                    lineHeight: "1.4",
                                    marginBottom: "10px",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                        }}
                    >
                        The fabrics are tailored to ensure comfortable wear and ease of stitching while
                        offering a refined appearance suitable for grand occasions.
                    </p>
                </div>
            </section>

            {/* SECTION 4: Text Left + Image Right */}
            <section
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",

                    gap: "60px",
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Text — 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#344886",
                            margin: "0 0 24px 0",
                            lineHeight: "1.2",
                        }}
                    >
                        Why Choose Aurora Textiles For Raag Resham?
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                        }}
                    >
                        Aurora Textiles is a trusted supplier of men's ethnic fabrics in Dubai, known
                        for delivering authentic, original brands like Nemssis. With a strong network
                        and bulk-ready inventory, we ensure on-time delivery, competitive pricing, and
                        dependable service. Designers, retailers, and tailoring units across the MENA
                        region rely on us for consistent quality and a curated collection of
                        fashion-forward textiles.
                    </p>
                </div>

                {/* Right: Image — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: "420px",
                        overflow: "hidden",
                        borderRadius: "4px",
                    }}
                >
                    <img
                        src="/resham-4.webp"
                        alt="Why Choose Aurora Textiles for Raag Resham"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 5: Image Left + FAQ Right */}
            <section
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "stretch",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left: Image — 50% (dynamic height) */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: `${faqImgHeight}px`,
                        minHeight: "300px",
                        transition: "height 0.4s ease",
                        overflow: "hidden",
                        borderRadius: "8px",
                    }}
                >
                    <img
                        src="/resham-5.webp"
                        alt="Raag Resham Fabric Swatch"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: FAQ — 50% */}
                <div ref={faqColRef} style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: window.innerWidth < 768 ? "28px" : "42px",
                            fontWeight: "700",
                            color: "#344886",
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
                                            fontFamily: "'Cinzel Decorative', serif",
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