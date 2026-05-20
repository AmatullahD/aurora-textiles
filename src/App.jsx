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
      <Route path="/brands/gullini" element={<Gullini />} />
      <Route path="/brands/reliance" element={<Reliance />} />
      <Route path="/brands/nemssis" element={<Nemssis />} />
      <Route path="/brands/spaadaa" element={<Spaadaa />} />
    </Routes>
  );
}

export default App;