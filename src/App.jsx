import { Routes, Route } from "react-router-dom";
import FloatingButtons from "./components/FloatingButtons";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Suiting from "./pages/products/Suiting";
import Shirting from "./pages/products/Shirting";
import Uniform from "./pages/products/Uniform";
import Ethnic from "./pages/products/Ethnic";
import Donear from "./pages/brands/Donear";
import Klopman from "./pages/brands/Klopman";
import Oxford from "./pages/brands/Oxford";
import ReidAndTaylor from "./pages/brands/ReidAndTaylor";
import JohnCavendish from "./pages/brands/JohnCavendish";
import Sammaan from "./pages/brands/Sammaan";
import GeorgiaGullini from "./pages/brands/GeorgiaGullini";
import Reliance from "./pages/brands/Reliance";
import Nemssis from "./pages/brands/Nemssis";
import Spaadaa from "./pages/brands/Spaadaa";
import RasmEthnics from "./pages/brands/sammaan/RasmEthnics";
import Shiddat from "./pages/brands/nemssis/Shiddat";
import Sanskriti from "./pages/brands/nemssis/Sanskriti";
import RaagResham from "./pages/brands/nemssis/RaagResham";
import Zarista from "./pages/brands/nemssis/Zarista";
import Nawabi from "./pages/brands/nemssis/Nawabi";
import Cotton from "./pages/fabrics/Cotton";
import Denim from "./pages/fabrics/Denim";
import Linen from "./pages/fabrics/Linen";
import PolyCotton from "./pages/fabrics/PolyCotton";
import PolyViscose from "./pages/fabrics/PolyViscose";
import PolyWool from "./pages/fabrics/PolyWool";
import PolyWoolLycra from "./pages/fabrics/PolyWoolLycra";
import PvLycra from "./pages/fabrics/PvLycra";
import TencelBlend from "./pages/fabrics/TencelBlend";
import Wool from "./pages/fabrics/Wool";
import SouthAfrica from "./pages/locations/SouthAfrica";
import Egypt from "./pages/locations/Egypt";
import SaudiArabia from "./pages/locations/SaudiArabia";

function App() {
  return (
    <>
      <FloatingButtons />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* Products */}
        <Route path="/products/suiting" element={<Suiting />} />
        <Route path="/products/shirting" element={<Shirting />} />
        <Route path="/products/uniform" element={<Uniform />} />
        <Route path="/products/ethnic-fabrics" element={<Ethnic />} />

        {/* Brands */}
        <Route path="/products/donear" element={<Donear />} />
        <Route path="/products/klopman" element={<Klopman />} />
        <Route path="/products/oxford" element={<Oxford />} />
        <Route path="/products/reid-and-taylor" element={<ReidAndTaylor />} />
        <Route path="/products/john-cavendish-fabrics" element={<JohnCavendish />} />
        <Route path="/products/sammaan-fabrics" element={<Sammaan />} />
        <Route path="/products/rasm-ethnics-by-sammaan" element={<RasmEthnics />} />
        <Route path="/products/georgia-gullini-fabrics" element={<GeorgiaGullini />} />
        <Route path="/products/reliance-fabrics" element={<Reliance />} />
        <Route path="/products/nemssis" element={<Nemssis />} />
        <Route path="/products/shiddat-by-nemssis" element={<Shiddat />} />
        <Route path="/products/sanskriti-by-nemssis" element={<Sanskriti />} />
        <Route path="/products/raag-resham-by-nemssis" element={<RaagResham />} />
        <Route path="/products/zarista-by-nemssis" element={<Zarista />} />
        <Route path="/products/nawabi-by-nemssis" element={<Nawabi />} />
        <Route path="/products/spaadaa-fabrics" element={<Spaadaa />} />

        {/* Fabrics */}
        <Route path="/cotton-fabric" element={<Cotton />} />
        <Route path="/denim" element={<Denim />} />
        <Route path="/linen-fabric" element={<Linen />} />
        <Route path="/poly-cotton-fabric" element={<PolyCotton />} />
        <Route path="/poly-viscose" element={<PolyViscose />} />
        <Route path="/poly-wool-fabric" element={<PolyWool />} />
        <Route path="/poly-wool-lycra" element={<PolyWoolLycra />} />
        <Route path="/pv-lycra" element={<PvLycra />} />
        <Route path="/tencel-fabric" element={<TencelBlend />} />
        <Route path="/wool-fabric" element={<Wool />} />

        {/* Locations */}
        <Route path="/south-africa" element={<SouthAfrica />} />
        <Route path="/egypt" element={<Egypt />} />
        <Route path="/saudi-arabia" element={<SaudiArabia />} />
      </Routes>
    </>
  );
}

export default App;