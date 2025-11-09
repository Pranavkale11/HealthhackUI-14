// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import DiseasePrevention from "./pages/DiseasePrevention.jsx";
import EmergencyAid from "./pages/EmergencyAid.jsx";
import HealthSchemes from "./pages/HealthSchemes.jsx";
import MalariaRisk from "./pages/MalariaRisk.jsx";
import DiabetesRisk from "./pages/DiabetesRisk.jsx";
import DietNutrition from "./pages/DietNutrition.jsx";
import DiarrhoeaRisk from "./pages/DiarrhoeaRisk.jsx";
import TyphoidRisk from "./pages/TyphoidRisk.jsx";

// NEW
import FitnessExercise from "./pages/FitnessExercise.jsx";

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
          <Route path="/malaria-risk" element={<MalariaRisk />} />
          <Route path="/diabetes-risk" element={<DiabetesRisk />} />
          <Route path="/diet" element={<DietNutrition />} />
          <Route path="/diarrhoea-risk" element={<DiarrhoeaRisk />} />
          <Route path="/typhoid-risk" element={<TyphoidRisk />} />
          {/* NEW */}
          <Route path="/fitness" element={<FitnessExercise />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
