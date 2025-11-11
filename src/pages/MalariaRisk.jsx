// src/pages/MalariaRisk.jsx
import React, { useMemo, useState } from "react";

/**
 * Malaria Surroundings Risk – quick questionnaire
 * - Hero with gradient + mosquito image on the right
 * - Left: step-by-step questions about the user's environment
 * - Right: "AI assistant" mock
 * - Final page shows risk score + tips
 *
 * NOTE: Image path expects public/images/malaria.jpg
 */

const Q = [
  {
    q: "How often do you notice mosquitoes in/around your home?",
    // higher index => higher risk weight
    opts: [
      { text: "Rarely", w: 0 },
      { text: "Sometimes (evenings)", w: 1 },
      { text: "Daily, especially nights", w: 2 },
      { text: "Almost all the time", w: 3 },
    ],
  },
  {
    q: "Do you have stagnant water nearby (open tanks, gutters, puddles)?",
    opts: [
      { text: "No stagnant water", w: 0 },
      { text: "Occasionally after rain", w: 1 },
      { text: "Frequently in a few places", w: 2 },
      { text: "Many stagnant spots around", w: 3 },
    ],
  },
  {
    q: "What best describes your locality?",
    opts: [
      { text: "Urban, clean surroundings", w: 0 },
      { text: "Semi-urban, some open drains", w: 1 },
      { text: "Rural with ponds/fields nearby", w: 2 },
      { text: "Near swamp/forest/wetlands", w: 3 },
    ],
  },
  {
    q: "Has it rained heavily in the last 2 weeks?",
    opts: [
      { text: "No", w: 0 },
      { text: "Light showers", w: 1 },
      { text: "Yes, several days of rain", w: 2 },
      { text: "Yes, flooding/large puddles", w: 3 },
    ],
  },
  {
    q: "Do you use window screens/bed nets/repellents at night?",
    opts: [
      { text: "Always", w: 0 },
      { text: "Often", w: 1 },
      { text: "Rarely", w: 2 },
      { text: "Never", w: 3 },
    ],
  },
  {
    q: "Is your community carrying out anti-mosquito measures (fogging, cleaning drains)?",
    opts: [
      { text: "Yes, regularly", w: 0 },
      { text: "Sometimes", w: 1 },
      { text: "Rarely", w: 2 },
      { text: "No / don't know", w: 3 },
    ],
  },
];

export default function MalariaRisk() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // { [idx]: optionIndex }
  const [showResult, setShowResult] = useState(false);

  const step = Q[idx];
  const canNext = answers[idx] !== undefined;
  const progress = Math.round(((idx + 1) / Q.length) * 100);

  // total risk out of (maxWeight * number of questions)
  const { scorePct, level, color } = useMemo(() => {
    const max = Q.length * 3; // per-question max weight
    const sum = Object.entries(answers).reduce((acc, [i, optIdx]) => {
      const w = Q[Number(i)].opts[optIdx]?.w ?? 0;
      return acc + w;
    }, 0);
    const pct = Math.round((sum / max) * 100);

    let lvl = "Low";
    let c = "text-emerald-700";
    if (pct >= 65) {
      lvl = "High";
      c = "text-rose-700";
    } else if (pct >= 35) {
      lvl = "Moderate";
      c = "text-amber-700";
    }
    return { scorePct: pct, level: lvl, color: c };
  }, [answers]);

  const resetAll = () => {
    setAnswers({});
    setIdx(0);
    setShowResult(false);
  };

  return (
    <div className="pb-16">
      {/* ---------- HERO (no overlap) ---------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-indigo-600" />
        <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative container-page grid md:grid-cols-2 gap-10 items-center py-12 md:py-16">
          {/* Left copy */}
          <div className="text-white">
            <p className="uppercase tracking-widest text-white/80 text-xs">
              Malaria Surroundings Check
            </p>
            <h1 className="font-black leading-tight text-4xl md:text-6xl">
              Answer a Few Questions & Know
              <br />
              Your <span className="text-yellow-200">Area’s Risk</span>
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl">
              A quick check to estimate if your surroundings are favorable for
              mosquito breeding and malaria transmission—plus practical steps to
              reduce risk.
            </p>
          </div>

          {/* Right image — served from /public */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://media.istockphoto.com/id/1317059852/photo/aedes-mosquitoe-is-sucking-blood-on-human-skin.jpg?s=612x612&w=0&k=20&c=FJoItD-SqroiLNBfnKfGD7kjOssT5P9JsYBt7vJSkTM="
              alt="mosquito"
              className="w-full md:w-[620px] md:h-[260px] object-cover rounded-3xl ring-1 ring-white/30 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ---------- MAIN GRID (Questionnaire + Assistant) ---------- */}
      <section className="container-page mt-6 grid lg:grid-cols-[1fr,380px] gap-8">
        {/* LEFT: Questionnaire / Result */}
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-5 md:p-7">
          {!showResult ? (
            <>
              {/* Progress */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600">
                  Question <b>{idx + 1}</b> of <b>{Q.length}</b>
                </p>
                <div className="w-44 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <h2 className="mt-4 text-lg md:text-xl font-semibold">
                {step.q}
              </h2>

              <div className="mt-4 space-y-3">
                {step.opts.map((o, i) => {
                  const selected = answers[idx] === i;
                  return (
                    <button
                      key={o.text}
                      onClick={() =>
                        setAnswers((p) => ({ ...p, [idx]: i }))
                      }
                      className={`w-full text-left px-4 py-3 rounded-xl border transition
                        ${
                          selected
                            ? "border-indigo-600 bg-indigo-50"
                            : "border-slate-200 hover:bg-slate-50"
                        }`}
                    >
                      {o.text}
                    </button>
                  );
                })}
              </div>

              {/* Nav buttons */}
              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  disabled={idx === 0}
                  onClick={() => setIdx((v) => Math.max(0, v - 1))}
                  className={`px-4 py-2 rounded-lg border text-sm
                    ${
                      idx === 0
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:bg-slate-50 border-slate-300"
                    }`}
                >
                  ← Back
                </button>

                {idx < Q.length - 1 ? (
                  <button
                    disabled={!canNext}
                    onClick={() => setIdx((v) => v + 1)}
                    className={`px-4 py-2 rounded-lg text-sm text-white
                      ${
                        canNext
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "bg-emerald-600/50 cursor-not-allowed"
                      }`}
                  >
                    Next Question →
                  </button>
                ) : (
                  <button
                    disabled={!canNext}
                    onClick={() => setShowResult(true)}
                    className={`px-4 py-2 rounded-lg text-sm text-white
                      ${
                        canNext
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "bg-emerald-600/50 cursor-not-allowed"
                      }`}
                  >
                    Show My Area’s Risk
                  </button>
                )}
              </div>
            </>
          ) : (
            // ---------- RESULT ----------
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">
                Your Surroundings Risk
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-xl border p-4">
                  <p className="text-xs uppercase text-slate-500">Score</p>
                  <p className="text-3xl font-extrabold">{scorePct}%</p>
                </div>
                <div className="rounded-xl border p-4">
                  <p className="text-xs uppercase text-slate-500">Level</p>
                  <p className={`text-2xl font-bold ${color}`}>{level}</p>
                </div>
                <div className="rounded-xl border p-4">
                  <p className="text-xs uppercase text-slate-500">
                    What it means
                  </p>
                  <p className="text-sm text-slate-700">
                    {level === "Low" &&
                      "Your area is less favorable for mosquito breeding. Keep up basic precautions."}
                    {level === "Moderate" &&
                      "Some conditions support mosquito breeding. Improve prevention to reduce risk."}
                    {level === "High" &&
                      "Your surroundings strongly favor mosquito breeding. Act now to reduce exposure and remove stagnant water."}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border p-5">
                <p className="font-medium mb-2">Practical Tips</p>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Remove or cover any containers that hold water.</li>
                  <li>Keep drains clear; report community stagnant spots.</li>
                  <li>Use bed nets/window screens and repellents at night.</li>
                  <li>
                    Wear long sleeves and light-colored clothing in the evening.
                  </li>
                  <li>
                    If you develop fever with chills, get tested and consult a
                    clinician promptly.
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={resetAll}
                  className="px-4 py-2 rounded-lg border hover:bg-slate-50"
                >
                  Retake
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Back to Top
                </button>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: Assistant mock */}
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="px-5 py-3 border-b rounded-t-2xl bg-violet-100 text-violet-900 font-medium">
              AI Health Assistant (Under Development)
            </div>

            <div className="p-5 space-y-3">
              <p className="text-sm text-slate-600">
                Ask quick questions about prevention or testing. (This is a mock
                UI — wire your chatbot later.)
              </p>

              <div className="space-y-2">
                {[
                  "How can I reduce mosquito breeding near home?",
                  "When should I get tested for malaria?",
                  "What are common malaria symptoms?",
                ].map((x) => (
                  <button
                    key={x}
                    className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl"
                    onClick={() => alert(x)}
                  >
                    {x}
                  </button>
                ))}
              </div>

              <div className="mt-3 flex gap-2">
                <input
                  className="flex-1 border rounded-xl px-3 py-2"
                  placeholder="Type your question…"
                />
                <button className="px-3 py-2 rounded-xl bg-indigo-600 text-white">
                  Ask
                </button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
