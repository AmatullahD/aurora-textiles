import { useState } from "react";

export default function PartnerBrands() {
    const brands = [
        "https://aurora-textiles.com/wp-content/uploads/2024/12/su-3.png.webp",
        "https://aurora-textiles.com/wp-content/uploads/2025/01/Sammaan-Logo-1-1024x425.png.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/su-1.png.webp",
        "https://aurora-textiles.com/wp-content/uploads/2025/01/JC_LOGO_Vector-01-1024x644.png.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/Reliance-Logo.png.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/Oxford-Logo_page-0001-e1736148501624.jpg.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/kolpaam.jpg.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/lino.jpg.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/nemssis.jpg.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/spada.jpg.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/su-4.png.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/su-3.png.webp",
        "https://aurora-textiles.com/wp-content/uploads/2025/01/Sammaan-Logo-1-1024x425.png.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/su-1.png.webp",
        "https://aurora-textiles.com/wp-content/uploads/2025/01/JC_LOGO_Vector-01-1024x644.png.webp",
        "https://aurora-textiles.com/wp-content/uploads/2024/12/Reliance-Logo.png.webp",
    ];

    const visibleItems = 6;
    const totalSlides = brands.length - visibleItems + 1;

    const [currentSlide, setCurrentSlide] = useState(0);

    const getVisibleBrands = () => {
        return brands.slice(currentSlide, currentSlide + visibleItems);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    return (
        <section
            style={{
                width: "100%",
                background: "#ffffff",
                padding: window.innerWidth < 768 ? "10px 20px 40px" : "10px 6% 50px",
                boxSizing: "border-box",
                textAlign: "center",
            }}
        >
            {/* Heading */}
            <h4
                style={{
                    fontSize: window.innerWidth < 768 ? "28px" : "38px",
                    color: "#0B2C66",
                    marginBottom: "60px",
                    fontFamily: "'Cinzel Decorative', sans-serif",
                    textTransform: "lowercase",
                    fontWeight: "600",
                }}
            >
                Partner Brands
            </h4>

            {/* Slider Row with Arrows */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                    marginBottom: "50px",
                }}
            >
                {/* Left Arrow */}

                <div
                    onClick={handlePrev}
                    style={{
                        cursor: "pointer",
                        flexShrink: 0,
                        color: "#aaaaaa",
                        fontSize: "40px",
                        userSelect: "none",
                        lineHeight: 1,
                    }}
                >
                    &#8249;
                </div>

                {/* Brands Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            window.innerWidth < 768
                                ? "repeat(2, 1fr)"
                                : "repeat(6, 1fr)",
                        gap: window.innerWidth < 768 ? "30px" : "40px",
                        alignItems: "center",
                        justifyItems: "center",
                        flex: 1,
                        transition: "0.4s ease",
                    }}
                >
                    {getVisibleBrands().map((brand, index) => (
                        <div
                            key={index}
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={brand}
                                alt="brand"
                                style={{
                                    width: "100%",
                                    maxWidth: window.innerWidth < 768 ? "120px" : "180px",
                                    objectFit: "contain",
                                    transition: "0.3s ease",
                                    cursor: "pointer",
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                {/* Right Arrow */}
                <div
                    onClick={handleNext}
                    style={{
                        cursor: "pointer",
                        flexShrink: 0,
                        color: "#aaaaaa",
                        fontSize: "40px",
                        userSelect: "none",
                        lineHeight: 1,
                    }}
                >
                    &#8250;
                </div>
            </div>

            {/* Dots */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                }}
            >
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        style={{
                            width: currentSlide === index ? "12px" : "9px",
                            height: currentSlide === index ? "12px" : "9px",
                            borderRadius: "50%",
                            background: currentSlide === index ? "#000" : "#c7c7c7",
                            cursor: "pointer",
                            transition: "0.3s ease",
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
}