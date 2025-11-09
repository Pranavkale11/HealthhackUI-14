// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-200 pt-14">
      <div className="container-page grid md:grid-cols-4 gap-10 pb-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Aarogya Saarthi</h2>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            Your AI-powered health companion—helping with disease prevention,
            emergency readiness and personalized wellness.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white text-slate-400 text-xl">🐦</a>
            <a href="#" className="hover:text-white text-slate-400 text-xl">📘</a>
            <a href="#" className="hover:text-white text-slate-400 text-xl">📸</a>
            <a href="#" className="hover:text-white text-slate-400 text-xl">▶️</a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-semibold text-white mb-3">Navigation</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline hover:text-white">Home</Link></li>
            <li><Link to="/features" className="hover:underline hover:text-white">Features</Link></li>
            <li><Link to="/prevention" className="hover:underline hover:text-white">Disease Prevention</Link></li>
            <li><Link to="/schemes" className="hover:underline hover:text-white">Health Schemes</Link></li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <p className="font-semibold text-white mb-3">Tools</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/diet" className="hover:underline hover:text-white">Diet & Nutrition</Link></li>
            <li><Link to="/malaria-risk" className="hover:underline hover:text-white">Malaria Risk Checker</Link></li>
            <li><Link to="/diabetes-risk" className="hover:underline hover:text-white">Diabetes Screening</Link></li>
            <li><Link to="/emergency" className="hover:underline hover:text-white">Emergency Aid</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-white mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>Email: support@aarogya.ai</li>
            <li>Helpdesk: +91-98765-43210</li>
            <li>Working Hours: 9 AM – 6 PM</li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Aarogya Saarthi — AI Health Assistant
      </div>
    </footer>
  );
}
