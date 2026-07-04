import { useState, useEffect, useRef } from "react";

const slides = [
  {
    image: "/banner1.png",
    heading1: " 30 Years of Excellence in",
    heading2: " Men's Fine fabrics",
    text: "Supplying Premium Men's Suiting & Shirting Fabrics from top brands.",
  },
  {
    image: "/banner2.jpg",
    heading1: "Men's Shirting and Suiting",
    heading2: "Fabric Store in Dubai",
    text: "We are the leading fabric store in Dubai with a wider range of fabrics offered from multiple brands.",
  },
  {
    image: "/banner3.jpg",
    heading1: "Wholesale Textile Shop and Suppliers in Dubai",
    text: "Aurora Textiles are suppliers of the highest quality textiles in the UAE, Middle East and North African countries.",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Live drag offset (in % of track width) applied on top of current slide's position
  const [dragOffsetPct, setDragOffsetPct] = useState(0);
  const [isDraggingState, setIsDraggingState] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide
  const autoSlideRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
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
  }, []);

  const prevSlide = () => {
    stopAutoSlide();
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoSlide();
  };

  const nextSlide = () => {
    stopAutoSlide();
    setCurrent((prev) => (prev + 1) % slides.length);
    startAutoSlide();
  };

  // Drag-to-scroll (smooth, follows cursor in real time)
  const dragRef = useRef(null);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const trackWidthPx = useRef(0);

  const itemWidthPct = 100 / slides.length;

  const clampSlide = (slide) => {
    if (slide < 0) return slides.length - 1;
    if (slide > slides.length - 1) return 0;
    return slide;
  };

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

    setDragOffsetPct((pct) => {
      const slideMove = Math.round(pct / itemWidthPct);
      if (slideMove !== 0) {
        setCurrent((prev) => clampSlide(prev + slideMove));
      }
      return 0;
    });

    startAutoSlide();
  };

  // Mouse events
  const onMouseDown = (e) => {
    e.preventDefault(); // stops native browser image/link drag ghost
    beginDrag(e.clientX);
  };
  const onMouseMove = (e) => moveDrag(e.clientX);
  const onMouseUp = () => endDrag();
  const onMouseLeave = () => endDrag();
  const onDragStart = (e) => e.preventDefault();

  // Touch events
  const onTouchStart = (e) => beginDrag(e.touches[0].clientX);
  const onTouchMove = (e) => moveDrag(e.touches[0].clientX);
  const onTouchEnd = () => endDrag();

  const translatePct = current * itemWidthPct + dragOffsetPct;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? "85vh" : "100vh",
        overflow: "hidden",
      }}
    >
      {/* Sliding track */}
      <div
        ref={dragRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onDragStart={onDragStart}
        style={{
          display: "flex",
          width: `${slides.length * 100}%`,
          height: "100%",
          transform: `translateX(-${translatePct}%)`,
          transition: isDraggingState ? "none" : "transform 0.5s ease",
          cursor: "grab",
          userSelect: "none",
          willChange: "transform",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: `${100 / slides.length}%`,
              height: "100%",
              flexShrink: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0, 0, 0, 0.35)",
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "900px",
                paddingLeft: isMobile ? "20px" : "60px",
                paddingRight: isMobile ? "20px" : "0px",
                color: "white",
                pointerEvents: isDraggingState ? "none" : "auto",
              }}
            >
              <h1
                style={{
                  fontSize: isMobile ? "34px" : "38px",
                  lineHeight: "1.4",
                  fontWeight: "600",
                  marginBottom: "22px",
                  fontFamily: "'Cinzel Decorative', sans-serif",
                }}
              >
                {slide.heading1}
                <br />
                {slide.heading2}
              </h1>

              <p
                style={{
                  fontSize: isMobile ? "16px" : "16px",
                  lineHeight: isMobile ? "1.6" : "1.8",
                  marginBottom: "35px",
                  maxWidth: "650px",
                  fontFamily: "'poppins', sans-serif",
                  fontWeight: "400",
                }}
              >
                {slide.text}
              </p>

              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                draggable={false}
                onDragStart={onDragStart}
                style={{
                  padding: isMobile ? "12px 24px" : "16px 34px",
                  background: hovered ? "white" : "transparent",
                  border: "2px solid white",
                  color: hovered ? "black" : "white",
                  fontSize: isMobile ? "16px" : "20px",
                  cursor: "pointer",
                  transition: "0.3s ease",
                }}
              >
                Explore Our Collection
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 5,
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: isMobile ? "28px" : "42px",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 5,
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: isMobile ? "28px" : "42px",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        ❯
      </button>
    </div>
  );
}