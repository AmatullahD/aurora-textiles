import { useState } from "react";

export default function PartnerBrands() {
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
        "/brand-3.jpg",
        "/brand-3.jpg",
    ];

    const visibleItems = 6;
    const totalSlides = brands.length - visibleItems + 1;

    const [currentSlide, setCurrentSlide] = useState(0);

    const getVisibleBrands = () => {
        return brands.slice(
            currentSlide,
            currentSlide + visibleItems
        );
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
                    fontSize: window.innerWidth < 768 ? "28px" : "36px",
                    color: "#0B2C66",
                    marginBottom: "60px",
                    fontFamily: "Times New Roman, serif",
                    textTransform: "uppercase",
                    fontWeight: "800",
                }}
            >
                Partner Brands
            </h4>

            {/* Brands Row */}
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
                    marginBottom: "50px",
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
                            background:
                                currentSlide === index ? "#000" : "#c7c7c7",
                            cursor: "pointer",
                            transition: "0.3s ease",
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
}