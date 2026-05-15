import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "62px",
        height: "62px",
        background: "#25D366",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "34px",
        textDecoration: "none",
        zIndex: "9999",
        boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
        transition: "0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <FaWhatsapp />
    </a>
  );
}