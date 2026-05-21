import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Suiting from "./pages/products/Suiting";
import Uniform from "./pages/products/Uniform";
import Ethnic from "./pages/products/Ethnic";
import Donear from "./pages/brands/Donear";
import Klopman from "./pages/brands/Klopman";
import Oxford from "./pages/brands/Oxford";
import ReidAndTaylor from "./pages/brands/ReidAndTaylor";
import John from "./pages/brands/John";
import Sammaan from "./pages/brands/Sammaan";
import Gullini from "./pages/brands/Gullini";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/suiting" element={<Suiting />} />
      <Route path="/products/uniform" element={<Uniform />} />
      <Route path="/products/ethnic" element={<Ethnic />} />
      <Route path="/brands/donear" element={<Donear />} />
      <Route path="/brands/klopman" element={<Klopman />} />
      <Route path="/brands/oxford" element={<Oxford />} />
      <Route path="/brands/reid-and-taylor" element={<ReidAndTaylor />} />
      <Route path="/brands/john" element={<John />} />
      <Route path="/brands/sammaan" element={<Sammaan />} />
      <Route path="/brands/sammaan/rasm-ethnics" element={<RasmEthnics />} />
      <Route path="/brands/gullini" element={<Gullini />} />
      <Route path="/brands/reliance" element={<Reliance />} />
      <Route path="/brands/nemssis" element={<Nemssis />} />
      <Route path="/brands/nemssis/shiddat" element={<Shiddat />} />
      <Route path="/brands/nemssis/sanskriti" element={<Sanskriti />} />
      <Route path="/brands/nemssis/raag-resham" element={<RaagResham />} />
      <Route path="/brands/nemssis/zarista" element={<Zarista />} />
      <Route path="/brands/nemssis/nawabi" element={<Nawabi />} />
      <Route path="/brands/spaadaa" element={<Spaadaa />} />
      <Route path="/fabrics/cotton" element={<Cotton />} />
      <Route path="/fabrics/denim" element={<Denim />} />
      <Route path="/fabrics/linen" element={<Linen />} />
      <Route path="/fabrics/poly-cotton" element={<PolyCotton />} />
      <Route path="/fabrics/poly-viscose" element={<PolyViscose />} />
      <Route path="/fabrics/poly-wool" element={<PolyWool />} />
      <Route path="/fabrics/poly-wool-lycra" element={<PolyWoolLycra />} />
      <Route path="/fabrics/pv-lycra" element={<PvLycra />} />
      <Route path="/fabrics/tencel-blend" element={<TencelBlend />} />
      <Route path="/fabrics/wool" element={<Wool />} />
    </Routes>
  );
}

export default App;