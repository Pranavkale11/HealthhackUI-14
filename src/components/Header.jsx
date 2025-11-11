// src-components-header.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी (under development)" },
  { code: "mr", label: "मराठी (under development)" },
  { code: "bn", label: "বাংলা (under development)" },
];

export default function Header() {
  const location = useLocation();

  // language
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [openLang, setOpenLang] = useState(false);

  // theme: 'light' | 'dark' | 'system'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [openSettings, setOpenSettings] = useState(false);

  // apply language persistence
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // apply theme to <html> using Tailwind dark mode (class)
  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const next =
      theme === "system" ? (prefersDark ? "dark" : "light") : theme;

    if (next === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }

    localStorage.setItem("theme", theme);

    // listen for system changes when in system mode
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (theme === "system") {
        if (mq.matches) {
          root.classList.add("dark");
          root.style.colorScheme = "dark";
        } else {
          root.classList.remove("dark");
          root.style.colorScheme = "light";
        }
      }
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [theme]);

  // helpers
  const isActive = (path) =>
    location.pathname === path
      ? "text-brand-600 dark:text-brand-400 font-semibold"
      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
      <div className="container-page flex items-center justify-between py-3 text-slate-900 dark:text-slate-100">
        {/* LEFT: logo */}
        <Link to="/" className="text-xl font-semibold">
          Aarogya Saarthi
        </Link>

        {/* CENTER: nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className={isActive("/")}>Home</Link>
          <Link to="/features" className={isActive("/features")}>Features</Link>
          <Link to="/prevention" className={isActive("/prevention")}>Prevention</Link>
          <Link to="/emergency" className={isActive("/emergency")}>Emergency Aid</Link>
          <Link to="/schemes" className={isActive("/schemes")}>Health Schemes</Link>
        </nav>

        {/* RIGHT: language + theme */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => {
                setOpenLang((v) => !v);
                setOpenSettings(false);
              }}
              className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
              aria-haspopup="menu"
              aria-expanded={openLang}
            >
              🌐 {LANGS.find((l) => l.code === lang)?.label}
            </button>

            {openLang && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setOpenLang(false);
                    }}
                    className={`w-full rounded-md px-3 py-2 text-left text-sm
                      ${lang === l.code
                        ? "bg-brand-50 text-brand-700 dark:bg-slate-700 dark:text-white"
                        : "hover:bg-slate-50 dark:hover:bg-slate-700"}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme */}
          <div className="relative">
            <button
              onClick={() => {
                setOpenSettings((v) => !v);
                setOpenLang(false);
              }}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
              aria-haspopup="menu"
              aria-expanded={openSettings}
              title="Theme"
            >
              {/* icon changes by theme */}
              <span aria-hidden>
                {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "🖥️"}
              </span>
              <span className="hidden sm:inline">Theme</span>
            </button>

            {openSettings && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <p className="px-2 pb-1 text-xs text-slate-500 dark:text-slate-400">Appearance</p>
                <div className="grid grid-cols-3 gap-2 px-2">
                  <button
                    onClick={() => setTheme("light")}
                    className={`rounded-md border px-2 py-1 text-sm
                      ${theme === "light"
                        ? "border-brand-600 text-brand-700 dark:text-brand-400"
                        : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700"}`}
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={`rounded-md border px-2 py-1 text-sm
                      ${theme === "dark"
                        ? "border-brand-600 text-brand-700 dark:text-brand-400"
                        : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700"}`}
                  >
                    Dark
                  </button>
                  <button
                    onClick={() => setTheme("system")}
                    className={`rounded-md border px-2 py-1 text-sm
                      ${theme === "system"
                        ? "border-brand-600 text-brand-700 dark:text-brand-400"
                        : "border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700"}`}
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
