import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import DiseasePrevention from "./pages/DiseasePrevention.jsx";
import EmergencyAid from "./pages/EmergencyAid.jsx";
import HealthSchemes from "./pages/HealthSchemes.jsx";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/prevention" element={<DiseasePrevention />} />
          <Route path="/emergency" element={<EmergencyAid />} />
          <Route path="/schemes" element={<HealthSchemes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
