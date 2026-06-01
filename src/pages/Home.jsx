import { Helmet } from "react-helmet-async";
import Schema from "../components/Schema";
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
      <Helmet>
        <title>Premium Fabric Store in Dubai | Aurora Textiles</title>
        <meta name="description" content="Aurora Textiles is a leading premium fabric supplier in Dubai. Shop premium men's suiting, shirting, uniform and ethnic fabrics from top global brands." />
      </Helmet>
      <Schema />
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