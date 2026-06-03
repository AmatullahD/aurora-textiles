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
        <title>Premium Fabric Store in Dubai | Wholesale Textile Supplier and Exporter</title>
        <meta name="description" content="Aurora Textiles is Dubai's premier destination for premium fabrics, offering a curated selection of high-quality textiles from renowned brands. Experience exceptional craftsmanship and timeless elegance—contact us to source the finest fabrics today." />
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