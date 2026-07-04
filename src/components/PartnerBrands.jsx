import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function PartnerBrands() {
    const navigate = useNavigate();

    const brands = [
        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/su-3.png.webp",
             route: "/products/donear",
            alt: "Donear" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2025/01/Sammaan-Logo-1-1024x425.png.webp",
             route: "/products/sammaan-fabrics",
             alt: "Sammaan" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/su-1.png.webp",
             route: "/products/reid-and-taylor",
             alt: "Reid & Taylor" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2025/01/JC_LOGO_Vector-01-1024x644.png.webp", route: "/products/john-cavendish-fabrics", alt: "John Cavendish" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/Reliance-Logo.png.webp",
             route: "/products/reliance-fabrics",
             alt: "Reliance" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/Oxford-Logo_page-0001-e1736148501624.jpg.webp",
             route: "/products/oxford",
             alt: "Oxford" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/kolpaam.jpg.webp",
             route: "/products/klopman",
             alt: "Klopman" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/lino.jpg.webp",
             route: "/linen-fabric",
            alt: "lino" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/nemssis.jpg.webp",
             route: "/products/nemssis",
             alt: "Nemssis" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/spada.jpg.webp",
             route: "/products/spaadaa-fabrics",
            alt: "Spaadaa" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/su-4.png.webp",
              route: "/products/georgia-gullini-fabrics",
            alt: "Georgia Gullini" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/su-3.png.webp",
             route: "/products/donear",
            alt: "Donear" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2025/01/Sammaan-Logo-1-1024x425.png.webp",
             route: "/products/sammaan-fabrics",
             alt: "Sammaan" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/su-1.png.webp",
             route: "/products/reid-and-taylor",
            alt: "Reid & Taylor" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2025/01/JC_LOGO_Vector-01-1024x644.png.webp",
            route: "/products/john-cavendish-fabrics",
             alt: "John Cavendish" },

        { src: "https://aurora-textiles.com/wp-content/uploads/2024/12/Reliance-Logo.png.webp",
             route: "/products/reliance-fabrics",
             alt: "Reliance" },
    ];

    const isMobile = window.innerWidth < 768;
    const visibleItems = isMobile ? 2 : 6;
    const totalSlides = brands.length - visibleItems + 1;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Live drag offset (in % of track width) applied on top of currentSlide's position
    const [dragOffsetPct, setDragOffsetPct] = useState(0);
    const [isDraggingState, setIsDraggingState] = useState(false);

    // Auto-slide
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

    const handlePrev = () => {
        stopAutoSlide();
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : totalSlides - 1));
        startAutoSlide();
    };

    const handleNext = () => {
        stopAutoSlide();
        setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : 0));
        startAutoSlide();
    };

    // Drag-to-scroll (smooth, follows cursor in real time)
    const dragRef = useRef(null);
    const dragStartX = useRef(0);
    const isDragging = useRef(false);
    const trackWidthPx = useRef(0);

    const clampSlide = (slide) => Math.max(0, Math.min(totalSlides - 1, slide));

    const beginDrag = (clientX) => {
        stopAutoSlide();
        isDragging.current = true;
        dragStartX.current = clientX;
        trackWidthPx.current = dragRef.current ? dragRef.current.offsetWidth : 1;
        setIsDraggingState(true);
        if (dragRef.current) dragRef.current.style.cursor = "grabbing";
    };

    const moveDrag = (clientX) => {
        if (!isDragging.current) return;
        const deltaPx = dragStartX.current - clientX; // positive = moved left
        const pct = (deltaPx / trackWidthPx.current) * 100;
        setDragOffsetPct(pct);
    };

    const endDrag = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        setIsDraggingState(false);
        if (dragRef.current) dragRef.current.style.cursor = "grab";

        // Decide how many slides to move based on how far we dragged
        setDragOffsetPct((pct) => {
            const slideMove = Math.round(pct / itemWidthPct);
            if (slideMove !== 0) {
                setCurrentSlide((prev) => clampSlide(prev + slideMove));
            }
            return 0;
        });

        startAutoSlide();
    };

    // Mouse events
    const onMouseDown = (e) => {
        e.preventDefault(); // stops native browser link/image drag ghost + URL tooltip
        beginDrag(e.clientX);
    };
    const onMouseMove = (e) => moveDrag(e.clientX);
    const onMouseUp = () => endDrag();
    const onMouseLeave = () => endDrag();
    const onDragStart = (e) => e.preventDefault();

    // Touch events (smooth, same logic as mouse)
    const onTouchStart = (e) => beginDrag(e.touches[0].clientX);
    const onTouchMove = (e) => moveDrag(e.touches[0].clientX);
    const onTouchEnd = () => endDrag();

    // Each item width as percentage of the track
    const itemWidthPct = 100 / visibleItems;

    const translatePct = currentSlide * itemWidthPct + dragOffsetPct;

    return (
        <section
            style={{
                width: "100%",
                background: "#ffffff",
                padding: isMobile ? "10px 20px 40px" : "10px 6% 50px",
                boxSizing: "border-box",
                textAlign: "center",
            }}
        >
            <h4
                style={{
                    fontSize: isMobile ? "28px" : "38px",
                    color: "#0B2C66",
                    marginBottom: "60px",
                    fontFamily: "'Cinzel Decorative', sans-serif",
                    textTransform: "lowercase",
                    fontWeight: "600",
                }}
            >
                Partner Brands
            </h4>

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
                    style={{ cursor: "pointer", flexShrink: 0, color: "#aaaaaa", fontSize: "40px", userSelect: "none", lineHeight: 1 }}
                >
                    &#8249;
                </div>

                {/* Sliding track viewport */}
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
                        onMouseLeave={onMouseLeave}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            transform: `translateX(-${translatePct}%)`,
                            transition: isDraggingState ? "none" : "transform 0.45s ease",
                            cursor: "grab",
                            userSelect: "none",
                            willChange: "transform",
                        }}
                    >
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                style={{
                                    minWidth: `${itemWidthPct}%`,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: isMobile ? "0 10px" : "0 20px",
                                    boxSizing: "border-box",
                                }}
                            >
                                <a
                                    href={brand.route}
                                    draggable={false}
                                    onDragStart={onDragStart}
                                    onClick={(e) => { e.preventDefault(); navigate(brand.route); window.scrollTo(0, 0); }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textDecoration: "none",
                                        transform: hoveredIndex === index ? "scale(1.07)" : "scale(1)",
                                        transition: "transform 0.25s ease",
                                    }}
                                >
                                    <img
                                        src={brand.src}
                                        alt={brand.alt}
                                        draggable="false"
                                        style={{
                                            width: "100%",
                                            maxWidth: isMobile ? "120px" : "180px",
                                            objectFit: "contain",
                                            transition: "opacity 0.3s ease",
                                            opacity: hoveredIndex === index ? 0.85 : 1,
                                            pointerEvents: "none",
                                        }}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <div
                    onClick={handleNext}
                    style={{ cursor: "pointer", flexShrink: 0, color: "#aaaaaa", fontSize: "40px", userSelect: "none", lineHeight: 1 }}
                >
                    &#8250;
                </div>
            </div>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => { stopAutoSlide(); setCurrentSlide(index); startAutoSlide(); }}
                        style={{
                            width: currentSlide === index ? "12px" : "9px",
                            height: currentSlide === index ? "12px" : "9px",
                            borderRadius: "50%",
                            background: currentSlide === index ? "#000" : "#c7c7c7",
                            cursor: "pointer",
                            transition: "0.3s ease",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}