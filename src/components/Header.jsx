import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी (under development" },
  { code: "mr", label: "मराठी (under development)" },
  { code: "bn", label: "বাংলা (under development)" },
];

export default function Header() {
  const location = useLocation();

  // Language
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [openLang, setOpenLang] = useState(false);

  // Theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [openSettings, setOpenSettings] = useState(false);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setSystemTheme = () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container-page flex items-center justify-between py-3">

        {/* LEFT LOGO */}
        <Link to="/" className="text-xl font-semibold">
          Aarogya Saarthi
        </Link>

        {/* CENTER NAV */}
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className={location.pathname === "/" ? "text-purple-600 font-semibold" : ""}>Home</Link>
          <Link to="/features" className={location.pathname === "/features" ? "text-purple-600 font-semibold" : ""}>Features</Link>
          <Link to="/prevention" className={location.pathname === "/prevention" ? "text-purple-600 font-semibold" : ""}>Prevention</Link>
          <Link to="/emergency" className={location.pathname === "/emergency" ? "text-purple-600 font-semibold" : ""}>Emergency Aid</Link>
          <Link to="/schemes" className={location.pathname === "/schemes" ? "text-purple-600 font-semibold" : ""}>Health Schemes</Link>
        </nav>

        {/* RIGHT SIDE: LANG + SETTINGS */}
        <div className="flex items-center gap-3 relative">

          {/* LANG */}
          <div className="relative">
            <button
              onClick={() => {
                setOpenLang((v) => !v);
                setOpenSettings(false);
              }}
              className="flex items-center gap-1 border px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-sm"
            >
              🌐 {LANGS.find((l) => l.code === lang)?.label}
            </button>

            {openLang && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl border bg-white shadow-lg p-1">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setOpenLang(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      lang === l.code
                        ? "bg-purple-50 text-purple-700"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SETTINGS */}
          <div className="relative">
            <button
              onClick={() => {
                setOpenSettings((v) => !v);
                setOpenLang(false);
              }}
              className="flex items-center gap-1 border px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-sm"
            >
              ⚙️ Settings
            </button>

            {openSettings && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl border bg-white shadow-lg p-2">
                <p className="text-xs text-gray-500 px-2 pb-1">Theme</p>

                <div className="grid grid-cols-3 gap-2 px-2">
                  <button
                    onClick={() => setTheme("light")}
                    className={`px-2 py-1 rounded-md text-sm border ${
                      theme === "light"
                        ? "border-purple-600 text-purple-700"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    Light
                  </button>

                  <button
                    onClick={() => setTheme("dark")}
                    className={`px-2 py-1 rounded-md text-sm border ${
                      theme === "dark"
                        ? "border-purple-600 text-purple-700"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    Dark
                  </button>

                  <button
                    onClick={setSystemTheme}
                    className="px-2 py-1 rounded-md text-sm border border-slate-200 hover:bg-slate-50"
                  >
                    System
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
