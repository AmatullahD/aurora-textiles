import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function EthnicPage() {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const faqColRef = useRef(null);
    const [faqImgHeight, setFaqImgHeight] = useState(480);
    const autoSlideRef = useRef(null);

    useEffect(() => {
        if (faqColRef.current) {
            setFaqImgHeight(faqColRef.current.offsetHeight);
        }
    }, [openFaq]);

    const brandLogos = [
        { name: "Rasm", subtitle: "ETHNIC BY SAMMAAN", src: "/ethnic-icon1.webp", route: "/products/rasm-ethnics-by-sammaan" },
        { name: "Sanskriti", subtitle: "THE ART OF EMBROIDERY FROM ACROSS INDIA", src: "/ethnic-icon2.webp", route: "/products/sanskriti-by-nemssis" },
        { name: "Raag Resham", subtitle: "PRECIOUS SILK EMBROIDERY FABRICS FROM VARANASI", src: "/ethnic-icon3.webp", route: "/products/raag-resham-by-nemssis" },
        { name: "Nawabi", subtitle: "TRADITIONAL EMBROIDERY FROM UTTAR PRADESH", src: "/ethnic-icon4.webp", route: "/products/nawabi-by-nemssis" },
        { name: "Zarista", subtitle: "MODERN ETHNIC FABRICS FOR CONTEMPORARY STYLE", src: "/ethnic-icon5.webp", route: "/products/zarista-by-nemssis" },
        { name: "Shiddat", subtitle: "EMBROIDERY FABRICS CRAFTED WITH PASSION", src: "/ethnic-icon6.webp", route: "/products/shiddat-by-nemssis" },
    ];

    const isMobile = window.innerWidth < 768;
    const visibleItems = isMobile ? 2 : 4;
    const itemWidthPct = 100 / visibleItems;
    const totalSlides = brandLogos.length - visibleItems + 1;

    const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideRef.current = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % totalSlides);
        }, 3000);
    };

    const stopAutoSlide = () => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
            autoSlideRef.current = null;
        }
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [totalSlides]);

    // Drag-to-scroll
    const dragRef = useRef(null);
    const dragStartX = useRef(0);
    const dragStartSlide = useRef(0);
    const isDragging = useRef(false);

    const onMouseDown = (e) => {
        isDragging.current = true;
        dragStartX.current = e.clientX;
        dragStartSlide.current = activeSlide;
        if (dragRef.current) dragRef.current.style.cursor = "grabbing";
    };
    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        const diff = dragStartX.current - e.clientX;
        const threshold = 60;
        if (diff > threshold) {
            stopAutoSlide();
            setActiveSlide((dragStartSlide.current + 1) % totalSlides);
            isDragging.current = false;
            startAutoSlide();
        } else if (diff < -threshold) {
            stopAutoSlide();
            setActiveSlide((dragStartSlide.current - 1 + totalSlides) % totalSlides);
            isDragging.current = false;
            startAutoSlide();
        }
    };
    const onMouseUp = () => {
        isDragging.current = false;
        if (dragRef.current) dragRef.current.style.cursor = "grab";
    };

    const touchStartX = useRef(0);
    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        stopAutoSlide();
        if (diff > 50) setActiveSlide((prev) => (prev + 1) % totalSlides);
        else if (diff < -50) setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        startAutoSlide();
    };

    const faqs = [
        {
            question: "What type of Ethnic Fabrics does Aurora Textile offer?",
            answer: (
                <>
                    <p style={{ fontFamily: "Poppins, sans-serif", margin: "0 0 10px 0", fontSize: "16px", letterSpacing: "0.3px" }}>At Aurora Textile, we offer ethnic fabrics including:</p>
                    <ul style={{ margin: 0, paddingLeft: "30px", lineHeight: "1.3" }}>
                        <li>Printed Cotton</li>
                        <li>Velvet Tuxedo Fabrics</li>
                        <li>Embroided Fabrics</li>
                        <li> Trendy Ethnic Print Fabrics, etc.</li>
                    </ul>
                </>
            ),
        },
        {
            question: "Where to buy Ethnic Fabrics in Dubai?",
            answer: "You can buy ethnic fabrics in Dubai directly from Aurora Textiles, located at Dubai Textile City – Warehouse #47, Al Awir Road. We welcome walk-ins and bulk inquiries from designers, boutiques, and retailers.",
        },
        {
            question: "Can I order bulk Ethnic Fabric from Aurora Textiles?",
            answer: "Yes! Aurora Textiles specializes in bulk ethnic fabric orders. Whether you need large quantities for retail, manufacturing, or bespoke fashion production, we can accommodate your requirements with consistent quality and timely delivery,"
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>


            <Helmet>
                <title>Buy Ethnic Fabrics in Dubai, UAE | Ethnic Fabric Suppliers</title>
                <meta name="description" content="Check out our Ethnic Fabrics collection and buy high-quality fabrics in Dubai, UAE. Premium and affordable fabrics in Dubai at Aurora Textiles. Visit our website or shop now." />
            
        <script type="application/ld+json">{`
          ${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Ethnic Fabric",
            "description": "Buy premium ethnic fabrics in Dubai, UAE from Aurora Textiles. Exclusive collection of men's ethnic fabrics including embroidery and traditional styles.",
            "brand": { "@type": "Brand", "name": "Aurora Textiles" },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "AED",
              "seller": { "@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app" }
            },
            "url": "https://aurora-textiles.vercel.app/products/ethnic"
          })}
        `}</script>
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
                        Ethnic Fabrics
                    </h1>
                </div>
            </section>

            {/* ─── SECTION 1: ETHNIC FABRICS WITH AURORA TEXTILES ─── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left Image */}
                <div
                    style={{
                        flex: "0 0 48%",
                        borderRadius: "12px",
                        overflow: "hidden",
                        height: "780px",
                    }}
                >
                    <img
                        src="/ethnic-1.webp"
                        alt="Ethnic Fabrics Collection"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right Content */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "38px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.3",
                            margin: "0 0 24px 0",
                        }}
                    >
                        Ethnic Fabrics with Aurora Textiles
                    </h2>

                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.3",
                            margin: "0 0 24px 0",
                            fontFamily: "Poppins, sans-serif",
                            letterSpacing: "0.3px"
                        }}
                    >
                        Celebrate tradition with a modern twist through{" "}
                        <Link
                            to="/"
                            style={{
                                color: "#0d1574",
                                fontWeight: "600",
                                textDecoration: "none",
                            }}
                        >
                            Aurora Textiles'
                        </Link>
                        stunning collection of <strong>ethnic textiles</strong> in Dubai, UAE. We are the
                        leading <strong>suppliers</strong> of unstitched ethnic fabrics for designers, tailors,
                        and fashion businesses. As reliable <strong>ethnic Fabric suppliers in Dubai</strong>,
                        our fabrics reflect cultural richness and suit modern design sensibilities—perfect for
                        retail or bespoke ethnic fashion.
                    </p>

                    <h3
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "17px",
                            fontWeight: "700",
                            color: "#344886",
                            letterSpacing: "1px",
                            margin: "0 0 16px 0",
                        }}
                    >
                        Our Collection Includes:
                    </h3>

                    <ul
                        style={{
                            margin: "0 0 24px 0",
                            paddingLeft: "30px",
                            fontSize: "19px",
                            color: "#333",
                            lineHeight: "1.2",
                        }}
                    >
                        <li>
                            <strong>Printed Cotton:</strong> Earthy, breathable, and rooted in Indian craft traditions.
                        </li>
                        <li>
                            <strong>Velvet tuxedo fabrics:</strong> Luxurious velvet with elegant prints crafted for a
                            refined, contemporary statement. Ideal for evening wear and formal ethnic attire, combining
                            timeless sophistication with a bold, fashion twist.
                        </li>
                        <li>
                            <strong>Embroidered fabrics:</strong> Add a royal touch to your look with our beautifully
                            embroidered fabrics. Perfect for sherwanis, jodhpuri suits, and festive wear, these fabrics
                            feature intricate detailing and fine craftsmanship—just right for weddings, celebrations,
                            and standout traditional outfits.
                        </li>
                        <li>
                            <strong>Trendy Ethnic Print Fabric:</strong> Bold motifs, florals, tribal patterns, and
                            fusion prints for modern ethnic fusion wear.
                        </li>
                    </ul>

                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.6",
                            margin: 0,
                            fontFamily: "Poppins, sans-serif",
                            letterSpacing: "0.3px"
                        }}
                    >
                        Whether you're a boutique, fashion brand, or designer, we have the perfect{" "}
                        <strong>ethnic</strong>{" "}
                        <span style={{ color: "#344886", textDecoration: "none" }}>fabric</span>{" "}
                      for sale to meet your vision with consistent quality and creative freedom.
                    </p>
                </div>
            </section>

            {/* ─── SECTION 2: BRAND LOGOS CAROUSEL ─── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "20px",
                    }}
                >
                    {/* Prev Arrow */}
                    <button
                        onClick={() => { stopAutoSlide(); setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides); startAutoSlide(); }}
                        style={{
                            background: "none",
                            border: "none",
                            fontSize: "28px",
                            cursor: "pointer",
                            color: "#555",
                            padding: "0 10px",
                            flexShrink: 0,
                        }}
                    >
                        ‹
                    </button>

                    {/* Logos */}
                    <div
                        style={{
                            flex: 1,
                            overflow: "hidden",
                        }}
                    >
                        <div
                            ref={dragRef}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={onMouseUp}
                            onMouseLeave={onMouseUp}
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                transform: `translateX(-${activeSlide * itemWidthPct}%)`,
                                transition: "transform 0.45s ease",
                                cursor: "grab",
                                userSelect: "none",
                                willChange: "transform",
                            }}
                        >
                        {brandLogos.map((brand, i) => (
                            brand.route ? (
                                <a
                                    key={i}
                                    href={brand.route}
                                    onClick={(e) => { e.preventDefault(); navigate(brand.route); window.scrollTo(0, 0); }}
                                    style={{
                                        minWidth: `${itemWidthPct}%`,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        minHeight: "100px",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        boxSizing: "border-box",
                                        padding: "0 10px",
                                    }}
                                >
                                    {brand.src ? (
                                        <img
                                            src={brand.src}
                                            alt={brand.name}
                                            draggable="false"
                                            style={{ maxWidth: "200px", maxHeight: "160px", objectFit: "contain", pointerEvents: "none" }}
                                        />
                                    ) : (
                                        <>
                                            <span
                                                style={{
                                                    fontFamily: "'Cinzel Decorative', serif",
                                                    fontSize: "26px",
                                                    fontWeight: "600",
                                                    color: "#222",
                                                    letterSpacing: "1px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {brand.name}
                                            </span>
                                            {brand.subtitle && (
                                                <span
                                                    style={{
                                                        fontSize: "9px",
                                                        color: "#666",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "1px",
                                                        textAlign: "center",
                                                        marginTop: "4px",
                                                        maxWidth: "160px",
                                                        lineHeight: "1.4",
                                                    }}
                                                >
                                                    {brand.subtitle}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </a>
                            ) : (
                                <div
                                    key={i}
                                    style={{
                                        minWidth: `${itemWidthPct}%`,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        minHeight: "100px",
                                        cursor: "default",
                                        boxSizing: "border-box",
                                        padding: "0 10px",
                                    }}
                                >
                                    {brand.src ? (
                                        <img
                                            src={brand.src}
                                            alt={brand.name}
                                            draggable="false"
                                            style={{ maxWidth: "200px", maxHeight: "160px", objectFit: "contain", pointerEvents: "none" }}
                                        />
                                    ) : (
                                        <>
                                            <span
                                                style={{
                                                    fontFamily: "'Cinzel Decorative', serif",
                                                    fontSize: "26px",
                                                    fontWeight: "600",
                                                    color: "#222",
                                                    letterSpacing: "1px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {brand.name}
                                            </span>
                                            {brand.subtitle && (
                                                <span
                                                    style={{
                                                        fontSize: "9px",
                                                        color: "#666",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "1px",
                                                        textAlign: "center",
                                                        marginTop: "4px",
                                                        maxWidth: "160px",
                                                        lineHeight: "1.4",
                                                    }}
                                                >
                                                    {brand.subtitle}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </div>
                            )
                        ))}
                        </div>
                    </div>

                    {/* Next Arrow */}
                    <button
                        onClick={() => { stopAutoSlide(); setActiveSlide((prev) => (prev + 1) % totalSlides); startAutoSlide(); }}
                        style={{
                            background: "none",
                            border: "none",
                            fontSize: "28px",
                            cursor: "pointer",
                            color: "#555",
                            padding: "0 10px",
                            flexShrink: 0,
                        }}
                    >
                        ›
                    </button>
                </div>

                {/* Dots */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "8px",
                        marginTop: "24px",
                    }}
                >
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { stopAutoSlide(); setActiveSlide(i); startAutoSlide(); }}
                            style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                border: "none",
                                background: i === activeSlide ? "#555" : "#ccc",
                                cursor: "pointer",
                                padding: 0,
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* ─── SECTION 3: BEST ETHNIC FABRIC FOR SALE ─── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left Content */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "44px",
                            fontWeight: "700",
                            color: "#344886",

                            lineHeight: "1.1",
                            margin: "0 0 28px 0",
                        }}
                    >
                        Best Ethnic Fabric For Sale
                    </h2>

                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.2",
                            margin: "0 0 20px 0",
                            fontFamily: "Poppins, sans-serif",
                            letterSpacing: "0.3px"
                        }}
                    >
                        Our ethnic fabric range blends timeless artistry with contemporary textile innovation. As a
                        trusted seller of unstitched{" "}
                        <span style={{ color: "#344886", textDecoration: "underline" }}>ethnic fabrics</span>{" "}
                        in Dubai, we cater to customers who appreciate fabric as a medium of personal expression and
                        cultural pride. From handloom-inspired weaves to traditional embroidery and trendy ethnic
                        prints, our offerings help you create garments that carry tradition forward with a fresh,
                        modern touch.
                    </p>

                    <p
                        style={{
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.2",
                            margin: 0,
                            fontFamily: "Poppins, sans-serif",
                            letterSpacing: "0.3px"
                        }}
                    >
                        Each fabric in our collection tells a unique story—whether it's inspired by centuries-old
                        Indian craftsmanship or designed to complement the evolving tastes of global ethnic fashion
                        lovers. Whether you're designing for weddings, festivals, or elegant daily wear, you can now{" "}
                        <strong>buy ethnic fabrics</strong> that are rich in character and versatile in use.
                    </p>
                </div>

                {/* Right Image */}
                <div
                    style={{
                        flex: "0 0 48%",
                        borderRadius: "12px",
                        overflow: "hidden",
                        height: "480px",
                    }}
                >
                    <img
                        src="/sale-image.png"
                        alt="Best Ethnic Fabric For Sale"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* ─── SECTION 4: BUY ETHNIC FABRICS IN DUBAI ─── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1300px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "60px",
                }}
            >
                {/* Left Image */}
                <div
                    style={{
                        flex: "0 0 48%",
                        borderRadius: "12px",
                        overflow: "hidden",
                        height: "460px",
                    }}
                >
                    <img
                        src="/faq-image.jpg"
                        alt="Buy Ethnic Fabrics in Dubai"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* Right Content */}
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "46px",
                            fontWeight: "700",
                            color: "#344886",
                            lineHeight: "1.1",
                            margin: "0 0 28px 0",
                        }}
                    >
                        Buy Ethnic Fabrics in Dubai
                    </h2>

                    <p
                        style={{
                            fontSize: "16px",
                            color: "#344886",
                            lineHeight: "1.8",
                            margin: "0 0 20px 0",
                            fontFamily: "Poppins, sans-serif",
                            letterSpacing: "0.3px"
                        }}
                    >
                        From Men'S Sherwanisto boho fusion wear, our ethnic fabrics are made for expressions that
                        bridge generations. Whether you're creating capsule collections or seasonal drops, Aurora
                        Textiles helps you stand out.
                    </p>

                    <p
                        style={{
                            fontSize: "16px",
                            color: "#344886",
                            lineHeight: "1.8",
                            margin: "0 0 36px 0",
                            fontFamily: "Poppins, sans-serif",
                            letterSpacing: "0.3px"
                        }}
                    >
                        Choose Aurora Textiles when you want more than just fabric—choose storytelling, artistry,
                        and cultural connection.
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
            </section>

            {/* ─── SECTION 5: DARK BLUE CARD ─── */}
            <section
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto 80px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        background: "#2d3b7a",
                        borderRadius: "16px",
                        border: "2px solid #eeea16",
                        padding: "48px 52px",
                        color: "#fff",
                    }}
                >
                    {/* Sub-section 1 */}
                    <div style={{ marginBottom: "40px" }}>
                        <h3
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: "22px",
                                fontWeight: "700",

                                letterSpacing: "1px",
                                margin: "0 0 16px 0",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <span style={{ fontSize: "18px" }}>▶</span>
                            Ethnic Fabric for Designers, Boutiques & Bulk Buyers
                        </h3>

                        <ul
                            style={{
                                margin: "0 0 16px 0",
                                paddingLeft: "50px",
                                lineHeight: "1.2",
                                fontSize: "19px",

                            }}
                        >
                            <li>Fashion designers creating bespoke ethnic wear</li>
                            <li>Boutiques and retailers curating premium fabric collections</li>
                            <li>Apparel manufacturers seeking a dependable ethnic fabric supply</li>
                            <li>Costume designers for cultural events and productions</li>
                        </ul>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.2", margin: 0, letterSpacing: "0.3px" }}>
                            Whether you're designing one-of-a-kind garments or looking to scale production, Aurora
                            Textiles ensures reliable access to quality fabrics and timely service.
                        </p>
                    </div>

                    {/* Divider */}
                    <div
                        style={{
                            borderTop: "1px solid rgba(255,255,255,0.15)",
                            marginBottom: "40px",
                        }}
                    />

                    {/* Sub-section 2 */}
                    <div style={{ marginBottom: "40px" }}>
                        <h3
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: "25px",
                                fontWeight: "700",

                                letterSpacing: "1px",
                                margin: "0 0 16px 0",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <span style={{ fontSize: "18px" }}>▶</span>
                            Sustainability & Craftsmanship
                        </h3>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.5", margin: 0, letterSpacing: "0.3px" }}>
                            We are committed to responsible sourcing and promoting traditional textile arts. Our
                            collaborations with skilled artisans and ethical manufacturers ensure that each fabric
                            tells a story of sustainability, culture, and skill.
                        </p>
                    </div>

                    {/* Divider */}
                    <div
                        style={{
                            borderTop: "1px solid rgba(255,255,255,0.15)",
                            marginBottom: "40px",
                        }}
                    />

                    {/* Sub-section 3 */}
                    <div>
                        <h3
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: "25px",
                                fontWeight: "700",
                                letterSpacing: "1px",
                                margin: "0 0 16px 0",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <span style={{ fontSize: "18px" }}>▶</span>
                            Buy Ethnic Fabric Online or In-Store with Aurora Textiles
                        </h3>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.5", margin: 0, letterSpacing: "0.3px" }}>
                            Are you looking to buy ethnic fabrics that reflect tradition with a modern flair? Contact
                            Aurora Textiles and browse our latest catalogues of ethnic fabrics for sale.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 6: FAQ ─── */}
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
                {/* Left Image */}
                <div
                    style={{
                        flex: "0 0 48%",
                        borderRadius: "12px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="/uniform-1.jpg"
                        alt="Ethnic Fabrics FAQ"
                        style={{
                            width: "100%",
                            height: `${faqImgHeight}px`,
                            minHeight: "300px",
                            objectFit: "cover",
                            display: "block",
                            transition: "height 0.4s ease",
                        }}
                    />
                </div>

                {/* Right FAQ */}
                <div ref={faqColRef} style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: window.innerWidth < 768 ? "32px" : "32px",
                            fontWeight: "700",
                            color: "#344886",
                            margin: "0 0 28px 0",
                            display: "flex",
                            alignItems: "baseline",
                            gap: "6px",
                        }}
                    >
                        FAQ
                    </h2>

                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            style={{
                                border: "1px solid #dde0e8",
                                borderRadius: "8px",
                                marginBottom: "12px",
                                overflow: "hidden",
                            }}
                        >
                            {/* Question Row */}
                            <div
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                onMouseEnter={() => setHoveredFaq(i)}
                                onMouseLeave={() => setHoveredFaq(null)}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "18px 22px",
                                    cursor: "pointer",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Cinzel Decorative', serif",
                                        fontSize: window.innerWidth < 768 ? "11px" : "17px",
                                        fontWeight: "700",
                                        color: openFaq === i
                                            ? "#b9972f"
                                            : hoveredFaq === i
                                                ? "#0a1e3d"
                                                : "#122a4b",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.5",
                                        flex: 1,
                                        paddingRight: "16px",
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    style={{
                                        fontFamily: "'Cinzel Decorative', serif",
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        color: openFaq === i
                                            ? "#b9972f"
                                            : hoveredFaq === i
                                                ? "#0a1e3d"
                                                : "#122a4b",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.4",
                                        transition: "color 0.2s ease",
                                        flexShrink: 0,
                                    }}
                                >
                                    {openFaq === i ? "−" : "+"}
                                </span>
                            </div>

                            {/* Answer */}
                            {openFaq === i && (
                                <div
                                    style={{
                                        padding: "0 22px 20px",
                                        borderTop: "1px solid #eee",
                                        paddingTop: "16px",
                                        fontSize: "18px",
                                        color: "#333",
                                        lineHeight: "1.5",
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
            <ScrollToTop />
        </div>
    );
}