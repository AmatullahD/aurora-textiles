import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function SuitingPage() {

    const brands = [
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
        "/brand-3.jpg",
    ];

    const visibleItems = window.innerWidth < 768 ? 2 : 4;

    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = brands.length - visibleItems + 1;

    const nextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const visibleBrands = brands.slice(
        currentSlide,
        currentSlide + visibleItems
    );

    // FAQ STATE
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "What types of branded suiting fabrics does Aurora Textiles offer?",
            answer: (
                <>
                    <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px", fontFamily: "'Poppins', sans-serif" }}>
                        At Aurora Textile we offer suits fabrics from multiple brands including:
                    </p>
                    <ul style={{ paddingLeft: "22px", margin: 0 }}>
                        {["Donear", "Regency", "Opulent", "Dignity", "John Cavendish", "Reid & Taylor", "Georgia Gullini"].map((brand) => (
                            <li key={brand} style={{ fontSize: "15px", lineHeight: "1.9", color: "#333", fontFamily: "'Poppins', sans-serif" }}>
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
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", fontFamily: "'Poppins', sans-serif" }}>
                    We offer a wide range of suiting fabrics including wool, wool blends, polyester, poly-viscose blends, linen, and cotton. Whether you need lightweight summer fabrics or heavier winter weights, our collection covers every need.
                </p>
            ),
        },
        {
            question: "How to buy suit fabric from Aurora Textile?",
            answer: (
                <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", fontFamily: "'Poppins', sans-serif" }}>
                    You can visit our store in Dubai's Textile City or contact us via phone or email. You can also reach out through our website contact form and our team will assist you with fabric selection, pricing, and delivery options.
                </p>
            ),
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff" }}>

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
                            textTransform: "uppercase",
                        }}
                    >
                        SUITING FABRICS
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
                        <h3
                            style={{
                                fontSize: window.innerWidth < 768 ? "14px" : "40px",
                                lineHeight: "1.15",
                                marginBottom: "20px",
                                color: "#122a4b",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",
                                textTransform: "uppercase",
                            }}
                        >
                            Suiting Fabric By <br />
                            Aurora Textiles
                        </h3>

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

                        <button
                            onClick={() => (window.location.href = "/contact")}
                            style={{
                                padding: "14px 34px",
                                background: "#b9972f",
                                color: "#fff",
                                border: "2px solid #122a4b",
                                borderRadius: "12px",
                                fontSize: "18px",
                                cursor: "pointer",
                                fontWeight: "500",
                                fontFamily: "'Poppins', sans-serif",
                                transition: "0.3s",
                            }}
                        >
                            Contact Us
                        </button>
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
                                style={{
                                    width: "100%",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={brand}
                                    alt="brand"
                                    style={{
                                        width: "100%",
                                        height: window.innerWidth < 768 ? "120px" : "170px",
                                        objectFit: "cover",
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
                            onClick={() => setCurrentSlide(index)}
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
                            src="/suiting-fabric.jpg"
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
                        <h3
                            style={{
                                fontSize: window.innerWidth < 768 ? "26px" : "38px",
                                lineHeight: "1.25",
                                marginBottom: "22px",
                                color: "#21408f",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",
                                textTransform: "uppercase",
                            }}
                        >
                            Types Of Suit Fabrics <br />
                            At Aurora Textiles
                        </h3>

                        <p
                            style={{
                                fontSize: "17px",
                                lineHeight: "1.8",
                                color: "#222",
                                marginBottom: "20px",
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
                                paddingLeft: "22px",
                                margin: "2px",
                                lineHeight: "1.8",
                                fontSize: "17px",
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
                    padding: window.innerWidth < 768 ? "10px 5% 50px" : "10px 5% 70px",
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
                                fontSize: window.innerWidth < 768 ? "26px" : "40px",
                                lineHeight: "1.15",
                                marginBottom: "24px",
                                color: "#122a4b",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",
                                textTransform: "uppercase",
                            }}
                        >
                            Buy Suit Fabric <br />
                            Online at Aurora <br />
                            Textiles
                        </h3>

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
                            Your clothing plays a vital role in shaping your confidence and
                            presence. Repeating the same outfits can feel uninspiring, but the
                            right fabric can transform your look and mindset. At Aurora
                            Textiles, we offer a premium collection of suiting fabrics, designed
                            to enhance your style with elegance and professionalism.
                        </p>

                        <p
                            style={{
                                fontSize: "16px",
                                lineHeight: "1.7",
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
                            src="/suiting-fabric.jpg"
                            alt="Buy Suit Fabric"
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
                            src="/faq-image.jpg"
                            alt="Suiting FAQ"
                            style={{
                                width: "100%",
                                height: "630px",
                                objectFit: "cover",
                                borderRadius: "24px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* RIGHT FAQ */}
                    <div
                        style={{
                            flex: "1 1 500px",
                        }}
                    >
                        {/* FAQ TITLE */}
                        <h3
                            style={{
                                fontSize: window.innerWidth < 768 ? "32px" : "42px",
                                fontWeight: "700",
                                fontFamily: "'Cinzel Decorative', serif",
                                color: "#122a4b",
                                fontStyle: "italic",
                                marginBottom: "24px",
                                display: "flex",
                                alignItems: "baseline",
                                gap: "6px",
                            }}
                        >
                            FAQ
                            <span
                                style={{
                                    display: "inline-block",
                                    width: "28px",
                                    borderBottom: "3px solid #122a4b",
                                    marginBottom: "6px",
                                    marginLeft: "4px",
                                }}
                            />
                        </h3>

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
                                            fontSize: window.innerWidth < 768 ? "11px" : "13px",
                                            fontWeight: "700",
                                            fontFamily: "'Cinzel Decorative', serif",
                                            color: "#b9972f",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                            lineHeight: "1.5",
                                            margin: 0,
                                            flex: 1,
                                            paddingRight: "16px",
                                        }}
                                    >
                                        {faq.question}
                                    </h4>
                                    <span
                                        style={{
                                            fontSize: "24px",
                                            color: "#b9972f",
                                            fontWeight: "300",
                                            lineHeight: "1",
                                            flexShrink: 0,
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

        </div>
    );
}