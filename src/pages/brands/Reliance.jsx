import React, { useState, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function ReliancePage() {
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
            question: "What types of Reliance fabrics does Aurora Textiles carry?",
            answer: (
                <>
                    We stock <strong>Reliance poly-wool suit fabrics</strong> in various weaves, finishes, and blend
                    ratios, along with a line of <strong>100% polyester fabric</strong> specifically for{" "}
                    <strong>Dishdasha and Thawb tailoring</strong>.
                </>
            ),
        },
        {
            question: "Can I get specific poly-wool blends or stretch fabrics from Reliance at Aurora?",
            answer: (
                <>
                    Yes, we carry multiple blend ratios and weave types including stretch and non-stretch options. Contact
                    us to discuss your specific requirements and available stock.
                </>
            ),
        },
        {
            question: "Do you supply Reliance fabrics in bulk for tailors and clothing brands?",
            answer: (
                <>
                    Absolutely. We supply Reliance fabrics in bulk to tailors, fashion houses, and clothing brands across
                    Dubai and the MENA region. Reach out for wholesale pricing and minimum order details.
                </>
            ),
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>


            <Helmet>
                <title>Buy Reliance Fabrics For Men's Suiting | Reliance Textiles - Aurora Textiles</title>
                <meta name="description" content="Buy Reliance poly-wool &amp; Polyester fabrics for men's suiting from Aurora Textiles – trusted fabric supplier in Dubai. Bulk supply, consistent quality, and fast delivery across UAE &amp; MENA." />
            
        <script type="application/ld+json">{JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Reliance Fabrics", "description": "Buy Reliance fabrics for men's suiting wholesale in Dubai from Aurora Textiles. Premium Reliance textiles collection in UAE.", "brand": {"@type": "Brand", "name": "Reliance"}, "offers": {"@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": {"@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app"}}, "url": "https://aurora-textiles.vercel.app/products/reliance-fabrics"})}</script>
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
                      Reliance Fabrics
                    </h1>
                </div>
            </section>

            {/* SECTION 1 — Intro: Reliance logo left, text right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1000px",
                    margin: "0 auto 80px auto",
                    padding: "0 20px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                }}
            >
                {/* Left: Reliance brand logo image — 50% */}
                <div
                    style={{
                        flex: "0 0 50%",
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/reliance-1.webp"
                        alt="Reliance Industries Limited Logo"
                        style={{
                            width: "100%",
                            height: "340px",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right: heading + paragraph — 50% */}
                <div style={{ flex: "0 0 50%", width: "50%" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "40px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.2",
                            margin: "0 0 30px 0",
                        }}
                    >
                       Wholesale Reliance Fabrics
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "17px",
                            lineHeight: "1.4",
                            color: "#333",
                            margin: 0,
                        }}
                    >
                        At <strong>Aurora Textiles</strong>, we are reliable suppliers of{" "}
                        <strong>Reliance poly-wool suiting fabrics</strong> in Dubai, serving tailors, garment producers,
                        and menswear brands across the UAE with consistently high-quality fabric solutions. With a focus
                        on <strong>men's suiting</strong>, we help businesses source high-quality, cost-effective textiles
                        that are made for performance and appeal.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — Premium Poly-Wool: text left, image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "40px",
                }}
            >
                {/* Left: text */}
                <div style={{ flex: "0 0 50%", width: "50%" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Premium Poly-Wool Suiting from Reliance
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
                        Our stock includes a curated selection of <strong>Reliance poly-wool suitings</strong>, known for
                        their fine finish, smooth texture, and versatile usage. These fabrics are ideal for tailoring
                        men's business suits, blazers, and formalwear with superior drape and durability.
                    </p>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
                            color: "#333",
                            marginBottom: "16px",
                        }}
                    >
                        We offer variations across:
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
                        <li style={{ marginBottom: "12px" }}>
                            <strong>Blend ratios</strong> (wool-dominant or polyester-dominant)
                        </li>
                        <li style={{ marginBottom: "12px" }}>
                            <strong>Different weaves</strong> (twill, plain, textured)
                        </li>
                        <li style={{ marginBottom: "12px" }}>
                            <strong>Stretch and non-stretch options</strong>
                        </li>
                        <li style={{ marginBottom: "12px" }}>
                            <strong>Multiple weights and fineness levels</strong>
                        </li>
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
                        <strong>Finishing options</strong> suited for various tailoring needs
                    </p>
                </div>

                {/* Right: image */}
                <div
                    style={{
                        flex: "0 0 50%",
                        width: "50%",
                        height: "560px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/reliance-2.webp"
                        alt="Premium Poly-Wool Suiting"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* SECTION 3 — 100% Polyester Dishdasha: two images left, text right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",

                    gap: "40px",
                }}
            >
                {/* Left: single image */}
                <div
                    style={{
                        flex: "0 0 50%",
                        width: "50%",
                        height: "360px",
                        overflow: "hidden",
                        borderRadius: "20px",
                    }}
                >
                    <img
                        src="/reliance-3.png"
                        alt="Reliance Fabric"
                        style={{
                            width: "100%",
                            height: "560px",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>


                {/* Right: heading + paragraph */}
                <div style={{ flex: "0 0 50%", width: "50%" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "34px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.2",
                            margin: "0 0 24px 0",
                        }}
                    >
                      100% Polyester Fabric for Dishdasha
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "19px",
                            lineHeight: "1.4",
                            color: "#333",
                            margin: 0,
                        }}
                    >
                        In addition to poly-wool, we carry a <strong>dedicated line of 100% polyester fabrics</strong>{" "}
                        from Reliance—commonly used for <strong>Thawb tailoring</strong>. These fabrics are lightweight,
                        easy to maintain, and suited for traditional menswear in the Gulf region.
                    </p>
                </div>
            </section>

            {/* SECTION 4 — Why Choose Aurora: text+bullets left, image right */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                }}
            >
                {/* Left: heading + bullets + button */}
                <div style={{ flex: "0 0 50%", width: "50%" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "36px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.2",
                            margin: "0 0 36px 0",
                        }}
                    >
                       Why Choose Aurora Textiles For Reliance Fabric?
                    </h2>

                    {[
                        "Focused stock: Only the most practical Reliance poly-wool and polyester options",
                        "Trusted supplier for Dubai and MENA region bulk buyers",
                        "Competitive wholesale pricing and reliable delivery timelines",
                        "Men’s fabrics only—no mixed inventory, no confusion",
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
                                    fontWeight: "700",
                                    color: "#344886",
                                    lineHeight: "1.5",
                                    margin: 0,
                                    letterSpacing: "0.5px",
                                }}
                            >
                                {item}
                            </p>
                        </div>
                    ))}

                        {/* Button */}
                        <div
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
                                }}
                            >
                                Contact Us
                            </a>
                        </div>
                </div>

                {/* Right: fabric swatches image */}
                <div
                    style={{
                        flex: "0 0 50%",
                        width: "50%",
                        height: "560px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/reliance-4.webp"
                        alt="Reliance Fabric Swatches"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            borderRadius: "14px",
                        }}
                    />
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
                    gap: "40px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
                }}
            >
                {/* Left — image 50%, height driven by right column */}
                <div style={{
                    flex: "0 0 calc(50% - 20px)",
                    width: "calc(50% - 20px)",
                    height: `${faqImgHeight}px`,
                    minHeight: "300px",
                    transition: "height 0.4s ease",
                    overflow: "hidden",
                    borderRadius: "8px",
                }}>
                    <img
                        src="/reliance-5.webp"
                        alt="FAQ Image"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right — FAQ accordion 50% */}
                <div ref={faqColRef} style={{ flex: "0 0 calc(50% - 20px)", width: "calc(50% - 20px)" }}>
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
                                            textTransform: "uppercase",
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