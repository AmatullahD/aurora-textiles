import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function SuitingPage() {
    const navigate = useNavigate();

    const brands = [
        { src: "/john-cavendish.webp",      route: "/products/john-fabrics" },
        { src: "/gullini.webp",              route: "/products/gullini" },
        { src: "/regency.webp",              route: "" },
        { src: "/donear-logo.png",           route: "/products/donear" },
        { src: "/opulent.webp",              route: "" },
        { src: "/brand-3.jpg",               route: "" },
        { src: "/dignity.webp",              route: "" },
        { src: "/cotton-wool.webp",          route: "" },
        { src: "/fc-collection.webp",        route: "" },
        { src: "/elegant-3.webp",            route: "" },
        { src: "/platinum-collection.webp",  route: "" },
        { src: "/john-cavendish.webp",       route: "/products/john-fabrics" },
        { src: "/gullini.webp",              route: "/products/gullini" },
        { src: "/regency.webp",              route: "" },
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
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const faqColRef = useRef(null);
    const [faqImgHeight, setFaqImgHeight] = useState(630);

    useEffect(() => {
        if (faqColRef.current) {
            setFaqImgHeight(faqColRef.current.offsetHeight);
        }
    }, [openFaq]);

    const faqs = [
        {
            question: "What types of branded suiting fabrics does Aurora Textiles offer?",
            answer: (
                <>
                    <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333", marginBottom: "12px", fontFamily: "'Poppins', sans-serif" }}>
                        At Aurora Textile we offer suits fabrics from multiple brands including:
                    </p>
                    <ul style={{ paddingLeft: "22px", margin: 0 }}>
                        {["Donear", "Regency", "Opulent", "Dignity", "John Cavendish", "Reid & Taylor", "Georgia Gullini"].map((brand) => (
                            <li key={brand} style={{ fontSize: "16px", lineHeight: "1.5", color: "#333", fontFamily: "'Poppins', sans-serif" }}>
                                {brand}
                            </li>
                        ))}
                    </ul>
                </>
            ),
        },
        {
            question: "What types of suit fabrics are available at Aurora Textile?",
            answer: (
                <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333", fontFamily: "'Poppins', sans-serif" }}>
                    We offer a wide range of suiting fabrics including wool, wool blends, polyester, poly-viscose blends, linen, and cotton. Whether you need lightweight summer fabrics or heavier winter weights, our collection covers every need.
                </p>
            ),
        },
        {
            question: "How to buy suit fabric from Aurora Textile?",
            answer: (
                <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333", fontFamily: "'Poppins', sans-serif" }}>
                    You can visit our store in Dubai's Textile City or contact us via phone or email. You can also reach out through our website contact form and our team will assist you with fabric selection, pricing, and delivery options.
                </p>
            ),
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>


            <Helmet>
                <title>Luxury Mens Suiting Fabrics | High-Quality Suit Fabrics Supplier</title>
                <meta name="description" content="Explore Aurora Textiles' luxurious collection of high-quality men's suiting fabrics. Find the perfect fabric to craft elegant suits that reflect your style and sophistication." />
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
                    alt="Suiting Fabrics Banner"
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
                        Suiting Fabrics
                    </h1>
                </div>
            </section>

            {/* SUITING INTRO SECTION */}
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
                        <h2
                            style={{
                                fontSize: window.innerWidth < 768 ? "14px" : "40px",
                                lineHeight: "1.15",
                                marginBottom: "20px",
                                color: "#344886",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",
                               
                            }}
                        >
                            Suiting Fabric By <br />
                            Aurora Textiles
                        </h2>

                        <p
                            style={{
                                fontSize: "18px",
                                lineHeight: "1.5",
                                color: "#333",
                                maxWidth: "620px",
                                marginBottom: "35px",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Our exquisite suiting fabrics are the foundation of sophisticated,
                            <br />
                            stylish, and luxurious attire. Whether you're crafting a formal
                            <br />
                            business suit, a casual blazer, or professional suiting, the right
                            <br />
                            fabric makes all the difference. At Aurora Textiles in Dubai, UAE, we
                            <br />
                            offer an exclusive selection of premium suiting fabrics from our
                            <br />
                            renowned partner brands, ensuring the perfect choice for every
                            <br />
                            taste and occasion.
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

                    {/* RIGHT IMAGE */}
                    <div
                        style={{
                            flex: "1 1 450px",
                        }}
                    >
                        <img
                            src="/suiting-fabric.jpg"
                            alt="Suiting Fabric"
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
                            <div
                                key={index}
                                onClick={() => brand.route && navigate(brand.route)}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: brand.route ? "pointer" : "default",
                                }}
                            >
                                <img
                                    src={brand.src}
                                    alt="brand"
                                    style={{
                                        width: "180px",   // ← change width here
                                        height: "180px",  // ← change height here
                                        objectFit: "contain",   // no cropping, shows full image
                                        borderRadius: "12px",
                                        display: "block",
                                    }}
                                />
                            </div>
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


            {/* TYPES OF SUITING FABRICS SECTION */}
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
                            src="/suitings.webp"
                            alt="Suiting Fabrics"
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
                                lineHeight: "1.5",
                                marginBottom: "12px",
                                color: "#344886",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",
                               
                            }}
                        >
                            Types Of Suit Fabrics <br />
                            At Aurora Textiles
                        </h2>

                        <p
                            style={{
                                fontSize: "17px",
                                lineHeight: "1.3",
                                color: "#222",
                                marginBottom: "12px",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Our suiting fabrics blend functionality, durability, and elegance,
                            each offering its own unique qualities, perfect for crafting a
                            professional wardrobe attire that enhances both style and confidence.
                            At Aurora Textiles, we offer a wide range of options to suit every
                            preference.
                        </p>

                        {/* LIST */}
                        <ul
                            style={{
                                paddingLeft: "30px",
                                margin: "2px",
                                lineHeight: "1.5",
                                fontSize: "19px",
                                color: "#111",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            <li>Wool</li>
                            <li>Polywool</li>
                            <li>Cotton</li>
                            <li>Linen</li>
                            <li>PolyCotton</li>
                            <li>Cotton-Linen</li>
                            <li>PolyViscose</li>
                            <li>Denim</li>
                            <li>PV Lycra</li>
                            <li>Poly Wool Lycra</li>
                            <li>Tencel Blend</li>
                        </ul>
                    </div>

                </div>
            </section>


            {/* BUY SUIT FABRIC SECTION */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "10px 15% 50px" : "10px 5% 70px",
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
                            Buy Suit Fabric <br />
                            Online at Aurora <br />
                            Textiles
                        </h2>

                        <p
                            style={{
                                fontSize: "18px",
                                lineHeight: "1.5",
                                color: "#333",
                                maxWidth: "620px",
                                marginBottom: "20px",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Your clothing plays a vital role in shaping your confidence and
                            presence. Repeating the same outfits can feel uninspiring, but the
                            right fabric can transform your look and mindset. At Aurora
                            Textiles, we offer a premium collection of suiting fabrics, designed
                            to enhance your style with elegance and professionalism.
                        </p>

                        <p
                            style={{
                                fontSize: "18px",
                                lineHeight: "1.5",
                                color: "#333",
                                maxWidth: "620px",
                                marginBottom: "0",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            With a diverse selection of high-quality fabrics from premium
                            partner brands, you'll find the perfect material to craft a sharp and
                            distinguished look. Visit our store or contact us today to explore our
                            exclusive range and enhance your collection with timeless grace.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div
                        style={{
                            flex: "1 1 450px",
                        }}
                    >
                        <img
                            src="/suitings-1.webp"
                            alt="Buy Suit Fabric"
                            style={{
                                width: "100%",
                                height: "460px",
                                objectFit: "cover",
                                borderRadius: "24px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>


            {/* FAQ SECTION */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "20px 5% 60px" : "20px 5% 80px",
                    boxSizing: "border-box",
                    background: "#ffffff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1250px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "40px",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >

                    {/* LEFT IMAGE */}
                    <div
                        style={{
                            flex: "1 1 420px",
                        }}
                    >
                        <img
                            src="/suitings-2.webp"
                            alt="Suiting FAQ"
                            style={{
                                width: "100%",
                                height: `${faqImgHeight}px`,
                                objectFit: "cover",
                                borderRadius: "24px",
                                display: "block",
                                transition: "height 0.4s ease",
                            }}
                        />
                    </div>

                    {/* RIGHT FAQ */}
                    <div
                        ref={faqColRef}
                        style={{
                            flex: "1 1 450px",
                        }}
                    >
                        {/* FAQ TITLE */}
                        <h6
                            style={{
                                fontSize: window.innerWidth < 768 ? "32px" : "32px",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",
                                color: "#344886",
                               
                                marginBottom: "24px",
                                display: "flex",
                                alignItems: "baseline",
                                gap: "6px",
                            }}
                        >
                            FAQ
                           
                        </h6>

                        {/* FAQ ITEMS */}
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
                                {/* QUESTION ROW */}
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
                                    }}
                                >
                                    <h4
                                        style={{
                                            fontSize: window.innerWidth < 768 ? "11px" : "19px",
                                            fontWeight: "700",
                                            fontFamily: "'Cinzel Decorative', serif",
                                            color: openFaq === index
                                                ? "#b9972f"
                                                : hoveredFaq === index
                                                    ? "#0a1e3d"
                                                    : "#122a4b",
                                            letterSpacing: "0.5px",
                                            lineHeight: "1.5",
                                            margin: 0,
                                            flex: 1,
                                            paddingRight: "16px",
                                            transition: "color 0.2s ease",
                                        }}
                                    >
                                        {faq.question}
                                    </h4>
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
                                        }}
                                    >
                                        {openFaq === index ? "−" : "+"}
                                    </span>
                                </div>

                                {/* ANSWER */}
                                {openFaq === index && (
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

                </div>
            </section>


            {/* FOOTER */}
            <Footer />
            <ScrollToTop />
        </div>
    );
}