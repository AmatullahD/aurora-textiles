import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function ShirtingPage() {
    const navigate = useNavigate();

    const brands = [
        { src: "/john-cavendish.webp", route: "/products/john-cavendish-fabrics" },
        { src: "/gullini.webp", route: "/products/georgia-gullini-fabrics" },
        { src: "/regency.webp", route: "" },
        { src: "/donear-logo.png", route: "/products/donear" },
        { src: "/opulent.webp", route: "" },
        { src: "/brand-3.jpg", route: "/products/reid-and-taylor" },
        { src: "/dignity.webp", route: "" },
        { src: "/cotton-wool.webp", route: "" },
        { src: "/fc-collection.webp", route: "" },
        { src: "/elegant-3.webp", route: "" },
        { src: "/platinum-collection.webp", route: "" },
        { src: "/john-cavendish.webp", route: "/products/john-cavendish-fabrics" },
        { src: "/gullini.webp", route: "/products/georgia-gullini-fabrics" },
        { src: "/regency.webp", route: "" },
    ];

    const visibleItems = window.innerWidth < 768 ? 2 : 4;

    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = brands.length - visibleItems + 1;

    const autoSlideRef = useRef(null);

    const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : 0));
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

    const nextSlide = () => {
        stopAutoSlide();
        setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : 0));
        startAutoSlide();
    };

    const prevSlide = () => {
        stopAutoSlide();
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : totalSlides - 1));
        startAutoSlide();
    };

    const visibleBrands = brands.slice(
        currentSlide,
        currentSlide + visibleItems
    );

    // FAQ STATE
    const [openFaq, setOpenFaq] = useState(null);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const faqColRef = useRef(null);
    const [faqImgHeight, setFaqImgHeight] = useState(520);

    useEffect(() => {
        if (faqColRef.current) {
            setFaqImgHeight(faqColRef.current.offsetHeight);
        }
    }, [openFaq]);

    const faqs = [
        {
            question: "What types of men's shirt fabrics do you offer?",
            answer: (
                <>
                    <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px", fontFamily: "'Poppins', sans-serif" }}>
                        We offer a diverse range of men's shirting fabrics, including:
                    </p>
                    <ul style={{ paddingLeft: "22px", margin: 0 }}>
                        {["Cotton for quilting apparel", "Linen for lightweight clothing", "Printed shirt fabrics for occasional wear", "Formal shirt fabrics for business attire"].map((item) => (
                            <li key={item} style={{ fontSize: "15px", lineHeight: "1.9", color: "#333", fontFamily: "'Poppins', sans-serif" }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
            ),
        },
        {
            question: "Where is Your Retail Store Located?",
            answer: (
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", fontFamily: "'Poppins', sans-serif" }}>
                    Our store is located in Al Fahidi, Wholesale Textile Market, Capital Building, Dubai. You can visit our retail store:{" "}
                    <a href="https://maps.app.goo.gl/4XVdGmxDpRs5Yxa37" target="_blank" rel="noopener noreferrer" style={{ color: "#b9972f" }}>
                        https://maps.app.goo.gl/4XVdGmxDpRs5Yxa37
                    </a>
                </p>
            ),
        },
        {
            question: "Do you offer a wholesale price for bulk purchases?",
            answer: (
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", fontFamily: "'Poppins', sans-serif" }}>
                    Yes, we offer wholesale prices for bulk purchases. If you are looking to buy bulk fabrics in Dubai at wholesale prices, then you can contact us directly through email, Call, or WhatsApp, and we will discuss your specific needs for the quote.
                </p>
            ),
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

            <Helmet>
                <title>Men's Shirting Fabrics by Aurora Textile | Luxury Shirting Fabrics</title>
                <meta name="description" content="Buy High-quality and premium unstitched Men's Shirting Fabrics by Aurora Textiles in Dubai, UAE. Check out our website and contact us to order now." />
            
        <script type="application/ld+json">{`
          ${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Men's Shirting Fabric",
            "description": "High-quality men's shirting fabrics wholesale from Aurora Textiles Dubai. Premium unstitched shirting fabrics for retailers and tailors.",
            "brand": { "@type": "Brand", "name": "Aurora Textiles" },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "AED",
              "seller": { "@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app" }
            },
            "url": "https://aurora-textiles.vercel.app/products/shirting"
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
                {/* BACKGROUND IMAGE */}
                <img
                    src="/about-banner.jpg"
                    alt="Men's Shirting Fabrics"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />

                {/* DARK OVERLAY */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.45)",
                    }}
                />

                {/* CENTER CONTENT */}
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
                        Shirting Fabrics
                    </h1>
                </div>
            </section>

            {/* SHIRTING INTRO SECTION */}
            <section
                style={{
                    width: "100%",
                    padding: "10px 5%",
                    boxSizing: "border-box",
                    background: "#ffffff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1250px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "30px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >

                    {/* LEFT CONTENT */}
                    <div
                        style={{
                            flex: "1 1 500px",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: window.innerWidth < 768 ? "14px" : "40px",
                                lineHeight: "1.15",
                                marginBottom: "20px",
                                color: "#344886",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",

                            }}
                        >
                            Shirting Fabric By <br />
                            Aurora Textiles
                        </h3>

                        <p
                            style={{
                                fontSize: "16px",
                                lineHeight: "1.5",
                                color: "#333",
                                maxWidth: "620px",
                                marginBottom: "35px",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            A perfectly tailored shirt crafted from quality fabrics forms the foundation of every stylish man's wardrobe. At Aurora Textiles, Dubai, we offer an exceptional collection of men's shirting fabrics designed to meet all your sartorial needs. From formal attire to casual elegance, discover the finest fabric selections that blend sophistication with comfort.
                            <br /><br />
                            Whether your day demands the crisp elegance of pure cotton formal shirts or the relaxed luxury of linen shirts in Dubai's warm climate, Aurora Textiles ensures you are impeccably dressed for every occasion. Our range is versatile, timeless, and designed for real-world comfort, offering the perfect fabric for shirts that feel as good as they look.
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

                    {/* RIGHT IMAGE */}
                    <div
                        style={{
                            flex: "1 1 450px",
                        }}
                    >
                        <img
                            src="/nemssis-2.webp"
                            alt="Men's Shirting Fabrics"
                            style={{
                                width: "100%",
                                height: "420px",
                                objectFit: "contain",
                                borderRadius: "24px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* BRANDS SLIDER */}
            <section
                style={{
                    width: "100%",
                    padding:
                        window.innerWidth < 768
                            ? "20px 20px 70px"
                            : "40px 6% 90px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                {/* SLIDER */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                    }}
                >

                    {/* LEFT ARROW */}
                    <button
                        onClick={prevSlide}
                        style={{
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            flexShrink: 0,
                        }}
                    >
                        <span
                            style={{
                                fontSize: "48px",
                                color: "#bdbdbd",
                                fontWeight: "300",
                                lineHeight: "1",
                            }}
                        >
                            &#8249;
                        </span>
                    </button>

                    {/* IMAGES */}
                    <div
                        style={{
                            flex: 1,
                            display: "grid",
                            gridTemplateColumns:
                                window.innerWidth < 768
                                    ? "repeat(2,1fr)"
                                    : "repeat(4,1fr)",
                            gap: window.innerWidth < 768 ? "16px" : "28px",
                            alignItems: "center",
                        }}
                    >
                        {visibleBrands.map((brand, index) => (
                            brand.route ? (
                                <a
                                    key={index}
                                    href={brand.route}
                                    onClick={(e) => { e.preventDefault(); navigate(brand.route); window.scrollTo(0, 0); }}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img
                                        src={brand.src}
                                        alt="brand"
                                        style={{
                                            width: "180px",
                                            height: "180px",
                                            objectFit: "contain",
                                            borderRadius: "12px",
                                            display: "block",
                                        }}
                                    />
                                </a>
                            ) : (
                                <div
                                    key={index}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "default",
                                    }}
                                >
                                    <img
                                        src={brand.src}
                                        alt="brand"
                                        style={{
                                            width: "180px",
                                            height: "180px",
                                            objectFit: "contain",
                                            borderRadius: "12px",
                                            display: "block",
                                        }}
                                    />
                                </div>
                            )
                        ))}
                    </div>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={nextSlide}
                        style={{
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            flexShrink: 0,
                        }}
                    >
                        <span
                            style={{
                                fontSize: "48px",
                                color: "#bdbdbd",
                                fontWeight: "300",
                                lineHeight: "1",
                            }}
                        >
                            &#8250;
                        </span>
                    </button>
                </div>

                {/* DOTS */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "45px",
                        flexWrap: "wrap",
                    }}
                >
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <div
                            key={index}
                            onClick={() => { stopAutoSlide(); setCurrentSlide(index); startAutoSlide(); }}
                            style={{
                                width: currentSlide === index ? "11px" : "8px",
                                height: currentSlide === index ? "11px" : "8px",
                                borderRadius: "50%",
                                background:
                                    currentSlide === index ? "#000" : "#cfcfcf",
                                cursor: "pointer",
                                transition: "0.3s ease",
                            }}
                        />
                    ))}
                </div>
            </section>


            {/* WHY CHOOSE AURORA TEXTILES SHIRTING FABRIC SECTION */}
            <section
                style={{
                    width: "100%",
                    padding: "5px 5%",
                    margin: "5px 0",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "32px",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >

                    {/* LEFT IMAGE */}
                    <div
                        style={{
                            flex: "1 1 520px",
                        }}
                    >
                        <img
                            src="/shirting-2.png"
                            alt="Shirting Fabrics in Dubai, UAE"
                            style={{
                                width: "100%",
                                height: window.innerWidth < 768 ? "420px" : "620px",
                                objectFit: "cover",
                                borderRadius: "18px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div
                        style={{
                            flex: "1 1 500px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: window.innerWidth < 768 ? "26px" : "38px",
                                lineHeight: "1.25",
                                marginBottom: "22px",
                                color: "#344886",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",

                            }}
                        >
                            Why Choose Aurora Textiles <br />
                            Shirting Fabric?
                        </h2>

                        <p
                            style={{
                                fontSize: "19px",
                                lineHeight: "1.5",
                                color: "#222",
                                marginBottom: "20px",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Our shirting fabrics are crafted to deliver the perfect balance of comfort, durability, and style, making every shirt a testament to quality and sophistication.
                        </p>

                        {/* LIST */}
                        <ul
                            style={{
                                paddingLeft: "22px",
                                margin: "2px",
                                lineHeight: "1.5",
                                fontSize: "16px",
                                color: "#111",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            <li><strong>Breathable Comfort:</strong> Experience fabrics crafted to be lightweight and breathable, ideal for keeping you cool and comfortable throughout long days in Dubai's warm weather.</li>
                            <li><strong>Exceptional Durability:</strong> Invest in quality with our fabrics that resist pilling and wear, maintaining their pristine appearance wash after wash.</li>
                            <li><strong>Eco-Friendly Choices:</strong> Committed to sustainability, Aurora Textiles offers responsibly sourced fabrics that reduce environmental impact without compromising on style or quality.</li>
                            <li><strong>Fade-Resistant Quality:</strong> Preserve the vibrancy of your shirts with fabrics designed for exceptional fade resistance, ensuring your favorite colors remain fresh and bold even after extensive use.</li>
                        </ul>
                    </div>

                </div>
            </section>


            {/* OUR EXTENSIVE RANGE SECTION */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "10px 5% 50px" : "10px 5% 70px",
                    boxSizing: "border-box",
                    background: "#ffffff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1250px",
                        margin: "50px 0",
                        display: "flex",
                        gap: "30px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >

                    {/* LEFT CONTENT */}
                    <div
                        style={{
                            flex: "1 1 500px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: window.innerWidth < 768 ? "26px" : "40px",
                                lineHeight: "1.15",
                                marginBottom: "24px",
                                color: "#344886",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",

                            }}
                        >
                            Our Extensive Range of <br />
                            Collection for the Best <br />
                            Fabric for Men's Shirts
                        </h2>

                        <p
                            style={{
                                fontSize: "16px",
                                lineHeight: "1.7",
                                color: "#333",
                                maxWidth: "620px",
                                marginBottom: "20px",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            From formal shirt fabric ideal for business attire to vibrant printed shirt fabric available for casual and party wear, Aurora Textiles has something to suit every personality and occasion. Choose from various shades and textures—rich, bold hues like navy, black, maroon, and teal, or softer, subtle tones such as pastel blues, gentle pinks, and sophisticated beige. Additionally, our fabrics feature unique textures and practical benefits such as easy ironing, fragrance infusion, stain resistance, cooling comfort, washing durability, and eco-friendly qualities to simplify care and enhance sustainability. With Aurora Textiles, you are always spoilt for choice.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div
                        style={{
                            flex: "1 1 450px",
                        }}
                    >
                        <img
                            src="/suitings-2.webp"
                            alt="Men's Shirting Fabrics"
                            style={{
                                width: "100%",
                                height: "420px",
                                objectFit: "cover",
                                borderRadius: "24px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>


            {/* SHOP THE BEST FABRIC SECTION */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "10px 5% 50px" : "10px 5% 60px",
                    boxSizing: "border-box",
                    background: "#ffffff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1250px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "30px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >

                    {/* LEFT IMAGE */}
                    <div
                        style={{
                            flex: "1 1 450px",
                        }}
                    >
                        <img
                            src="/donear-1.webp"
                            alt="Men's Shirting Fabrics"
                            style={{
                                width: "100%",
                                height: "420px",
                                objectFit: "cover",
                                borderRadius: "24px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div
                        style={{
                            flex: "1 1 500px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: window.innerWidth < 768 ? "26px" : "40px",
                                lineHeight: "1.15",
                                marginTop:"1px",
                                marginBottom: "24px",
                                color: "#344886",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",

                            }}
                        >
                            Shop the Best Fabric <br />
                            for Shirts at Aurora <br />
                            Textile
                        </h2>

                        <p
                            style={{
                                fontSize: "16px",
                                lineHeight: "1.7",
                                color: "#333",
                                maxWidth: "620px",
                                marginBottom: "20px",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            When purchasing men's shirting fabric, quality and trust matter. At Aurora Textiles, we combine decades of expertise with unparalleled customer care, ensuring every fabric meets your highest expectations. Discover the best shirt fabric and redefine your wardrobe with ease and elegance.
                        </p>
                    </div>
                </div>
            </section>


            {/* FAQ SECTION */}
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto 80px",
                    padding: "0 40px",
                    display: "flex",
                    gap: "60px",
                    alignItems: "flex-start",
                }}
            >
                

                {/* left FAQ ACCORDION */}
                <div ref={faqColRef} style={{ flex: "1" }}>
                    <div
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: "32px",
                            fontWeight: "700",
                            color: "#344886",
                            marginBottom: "24px",
                            display: "flex",
                            alignItems: "baseline",
                            gap: "4px",
                        }}
                    >
                        <span>FAQ</span>
                    </div>

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid #dde0e8",
                                borderRadius: "8px",
                                marginBottom: "12px",
                                overflow: "hidden",
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
                                    padding: "18px 22px",
                                    cursor: "pointer",
                                    userSelect: "none",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Cinzel Decorative', serif",
                                        fontSize: window.innerWidth < 768 ? "11px" : "19px",
                                        fontWeight: "700",
                                        color: openFaq === index
                                            ? "#b9972f"
                                            : hoveredFaq === index
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
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: openFaq === index
                                            ? "#b9972f"
                                            : hoveredFaq === index
                                                ? "#0a1e3d"
                                                : "#122a4b",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.4",
                                        transition: "color 0.2s ease",
                                        flexShrink: 0,
                                    }}
                                >
                                    {openFaq === index ? "−" : "+"}
                                </span>
                            </div>
                            {openFaq === index && (
                                <div
                                    style={{
                                        padding: "0 22px 20px",
                                        borderTop: "1px solid #eee",
                                        paddingTop: "16px",
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#474747",
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* right IMAGE */}
                <div style={{ flex: "0 0 47%" }}>
                    <img
                        src="/suitings-2.webp"
                        alt="Men's Shirting Fabrics"
                        style={{
                            width: "100%",
                            height: `${faqImgHeight}px`,
                            minHeight: "300px",
                            objectFit: "cover",
                            borderRadius: "12px",
                            transition: "height 0.4s ease",
                        }}
                    />
                </div>
            </div>


            {/* FOOTER */}
            <Footer />
            <ScrollToTop />
        </div>
    );
}