import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import AboutSection from "../components/AboutSection";
import PartnerBrands from "../components/PartnerBrands";
import WhatsAppButton from "../components/WhatsAppButton";
import CollectionSection from "../components/CollectionSection";
import FabricSliderSection from "../components/FabricSliderSection";
import CountriesSection from "../components/CountriesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogsSection from "../components/BlogsSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <BannerSlider />
      <AboutSection />
      <PartnerBrands />
      <CollectionSection />
      <FabricSliderSection />
      <CountriesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BlogsSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;