import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function NawabiPage() {
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
            question: "What styles can be designed using Nawabi by Nemssis fabrics?",
            answer: "These fabrics are perfect for men's sherwanis, kurtas, ethnic jackets, and Indo-western occasion wear.",
        },
        {
            question: "Are these ethnic fabrics available in unstitched form?",
            answer: "Yes, all Nawabi by Nemssis fabrics are available in unstitched form, giving tailors and designers full creative freedom to craft garments as per their requirements.",
        },
        {
            question: "Can Nawabi fabrics be ordered in bulk for commercial use?",
            answer: "Absolutely. Aurora Textiles supports bulk and commercial orders of Nawabi by Nemssis fabrics for tailoring businesses, boutiques, and exporters across Dubai and the MENA region.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Nawabi by Nemssis - Ethnic Fabrics For Men's at Aurora Textiles</title>
                <meta name="description" content="Check out Nawabi by Nemssis at Aurora Textiles – your trusted source for luxury ethnic fabrics for men. Shop premium quality, stylish fabrics perfect for traditional and festive wear in Dubai." />
            
        <script type="application/ld+json">{JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Nawabi by Nemssis", "description": "Buy Nawabi by Nemssis ethnic fabrics for men wholesale in Dubai from Aurora Textiles. Traditional embroidery fabrics from Uttar Pradesh.", "brand": {"@type": "Brand", "name": "Nawabi by Nemssis"}, "offers": {"@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": {"@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app"}}, "url": "https://aurora-textiles.vercel.app/products/nawabi-by-nemssis"})}</script>
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
                        Nawabi By Nemssis
                    </h1>
                </div>
            </section>

            {/* SECTION 1: Logo left + Text right */}
            <section
                style={{
                    maxWidth: "1200px",
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
                       
                        justifyContent: "center",
                        minHeight: "340px",
                    }}
                >
                    <img
                        src="/nemssis-1.webp"
                        alt="Nawabi by Nemssis Logo"
                        style={{ width: "100%", maxWidth: "380px", objectFit: "contain", display: "block" }}
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
                            margin: "0 0 28px 0",
                            lineHeight: "1.2",
                        }}
                    >
                        Nawabi By Nemssis – Ethnic Fabrics For Men's
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "20px",
                        }}
                    >
                        At <strong>Aurora Textiles</strong>, we are proud to supply{" "}
                        <strong>Nawabi by Nemssis</strong>—a premium ethnic fabric line designed
                        exclusively for men's traditional clothing. Inspired by royal heritage and
                        timeless elegance, Nawabi fabrics combine majestic textures with striking
                        designs, making them a preferred choice for{" "}
                        <strong>kurta sets, sherwanis, ethnic jackets</strong>, and more.
                    </p>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "0",
                        }}
                    >
                        As trusted fabric suppliers in <strong>Dubai and the MENA region</strong>, we
                        ensure seamless availability of original <strong>Nemssis fabrics</strong>,
                        delivered with consistent quality and full support for bulk and commercial orders.
                    </p>
                </div>
            </section>

            {/* SECTION 2: Text left + Image right */}
            <section
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                    flexWrap: "nowrap",
                }}
            >
                {/* Left: Text — 50% */}
                <div style={{ flex: "0 0 calc(50% - 30px)", width: "calc(50% - 30px)" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "40px",
                            fontWeight: "700",
                            color: "#344886",
                            margin: "0 0 24px 0",
                            lineHeight: "1.2",
                        }}
                    >
                        Traditional Fabric With Royal Charm
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "20px",
                        }}
                    >
                        The <strong>Nawabi by Nemssis</strong> collection represents the grandeur and
                        sophistication of India's royal era. These fabrics are thoughtfully curated to
                        bring out the richness and detail in:
                    </p>
                    <ul style={{ paddingLeft: "25px", margin: "0 0 24px 0" }}>
                        {[
                            "Wedding and Occasion Sherwanis",
                            "Festive Kurtas and Pathani Sets",
                            "Designer Jackets, Nehru Coats & Waistcoats",
                            "Statement Menswear for Events & Celebrations",
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "18px",
                                    color: "#333",
                                    lineHeight: "1.4",
                                    marginBottom: "12px",
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "18px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "32px",
                        }}
                    >
                        Each fabric in the Nawabi range features intricate embroidery, woven motifs,
                        jacquard or satin finish, and luxurious fall to ensure comfort and class.
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

                {/* Right: Image — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: "560px",
                        overflow: "hidden",
                        borderRadius: "4px",
                    }}
                >
                    <img
                        src="/nawabi-1.webp"
                        alt="Traditional Fabric with Royal Charm"
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

            {/* SECTION 3: Image left + Text right */}
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
                        height: "680px",
                        overflow: "hidden",
                        borderRadius: "4px",
                    }}
                >
                    <img
                        src="/nawabi-2.webp"
                        alt="Why Source Nawabi Fabrics"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
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
                            margin: "0 0 24px 0",
                            lineHeight: "1.4",
                        }}
                    >
                        Why Source Nawabi Fabrics From Aurora Textiles?
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.4",
                            marginBottom: "24px",
                        }}
                    >
                        As one of Dubai's established men's ethnic fabric suppliers,{" "}
                        <strong>Aurora Textiles</strong> brings you original{" "}
                        <strong>fabrics by Nemssis</strong> with:
                    </p>
                    <ul style={{ paddingLeft: "35px", margin: "0 0 24px 0" }}>
                        {[
                            { bold: "Exclusive Access to Sub-Brands", text: " like Nawabi by Nemssis" },
                            { bold: null, text: "Unstitched Ethnic Fabrics for Men's Tailoring" },
                            { bold: null, text: "Ready Support for Designers, Boutiques & Exporters" },
                            { bold: null, text: "Fast Delivery Across the UAE & MENA Region" },
                            { bold: null, text: "Tailored Options for Bulk & Commercial Buyers" },
                        ].map((item, i) => (
                            <li
                                key={i}
                                style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "19px",
                                    color: "#333",
                                    lineHeight: "2",
                                    marginBottom: "20px",
                                }}
                            >
                                {item.bold ? (
                                    <><strong>{item.bold}</strong>{item.text}</>
                                ) : (
                                    item.text
                                )}
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
                        We don't just sell fabric—we deliver quality that elevates traditional fashion for modern men.
                    </p>
                </div>
            </section>

            {/* SECTION 4: Text left + Image right */}
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
                            fontSize: "42px",
                            fontWeight: "700",
                            color: "#344886",
                            margin: "0 0 24px 0",
                            lineHeight: "1.2",
                        }}
                    >
                        Nemesis Fabrics - Quality &amp; Craftsmanship That You Can Feel
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.5",
                        }}
                    >
                        Every fabric under the <strong>Nawabi by Nemssis</strong> label is created with
                        precision and artistry. Whether it's a modern groom's sherwani or a festive
                        kurta for Eid or Diwali, these fabrics are designed to help tailors and
                        designers craft garments that command attention.
                    </p>
                </div>

                {/* Right: Image — 50% */}
                <div
                    style={{
                        flex: "0 0 calc(50% - 30px)",
                        width: "calc(50% - 30px)",
                        height: "400px",
                        overflow: "hidden",
                        borderRadius: "4px",
                    }}
                >
                    <img
                        src="/nawabi-3.webp"
                        alt="Nemssis Fabrics Quality"
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

            {/* SECTION 5: Image left + FAQ right */}
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
                        src="/nawabi-4.webp"
                        alt="Nawabi Fabric"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
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
                                            color: openFaq === i ? "#b9972f" : hoveredFaq === i ? "#070e46" : "#0b18a1",
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
                                            color: openFaq === i ? "#b9972f" : hoveredFaq === i ? "#070e46" : "#0b18a1",
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