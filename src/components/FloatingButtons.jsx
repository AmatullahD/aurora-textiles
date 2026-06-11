import WhatsAppButton from "./WhatsAppButton";
import ScrollToTop from "./ScrollToTop";

/**
 * FloatingButtons
 * ---------------
 * Drop this once inside your App.jsx (outside <Routes>).
 * It renders on every page automatically.
 *
 * Layout (bottom-right):
 *   [ WhatsApp ]   ← bottom: 80px
 *   [ ScrollTop ]  ← bottom: 20px
 */
export default function FloatingButtons() {
  return (
    <>
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

 