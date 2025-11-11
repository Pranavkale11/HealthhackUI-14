// src/pages/DiabetesRisk.jsx
import React, { useMemo, useState } from "react";

/**
 * Diabetes Risk Checker
 * - Lifestyle + symptoms + family history based scoring
 * - Same UI flow and design as MalariaRisk.jsx
 */

const Q = [
  {
    q: "How often do you consume sugary foods or sweetened drinks?",
    opts: [
      { text: "Rarely", w: 0 },
      { text: "1–2 times a week", w: 1 },
      { text: "Almost daily", w: 2 },
      { text: "Multiple times a day", w: 3 },
    ],
  },
  {
    q: "How active is your lifestyle?",
    opts: [
      { text: "Highly active (exercise 5–6 days a week)", w: 0 },
      { text: "Moderately active (2–3 days a week)", w: 1 },
      { text: "Low activity (rarely exercise)", w: 2 },
      { text: "Sedentary lifestyle", w: 3 },
    ],
  },
  {
    q: "Do you have a family history of diabetes?",
    opts: [
      { text: "No", w: 0 },
      { text: "Maybe / not sure", w: 1 },
      { text: "Yes, one parent", w: 2 },
      { text: "Yes, both parents", w: 3 },
    ],
  },
  {
    q: "Do you frequently feel thirsty or tired?",
    opts: [
      { text: "No", w: 0 },
      { text: "Sometimes", w: 1 },
      { text: "Often", w: 2 },
      { text: "Almost daily", w: 3 },
    ],
  },
  {
    q: "Do you experience frequent urination?",
    opts: [
      { text: "No", w: 0 },
      { text: "Sometimes", w: 1 },
      { text: "Often", w: 2 },
      { text: "Very frequently", w: 3 },
    ],
  },
  {
    q: "How would you describe your weight category?",
    opts: [
      { text: "Healthy weight", w: 0 },
      { text: "Slightly overweight", w: 1 },
      { text: "Overweight", w: 2 },
      { text: "Obese", w: 3 },
    ],
  },
];

export default function DiabetesRisk() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const step = Q[idx];
  const canNext = answers[idx] !== undefined;
  const progress = Math.round(((idx + 1) / Q.length) * 100);

  const { scorePct, level, color } = useMemo(() => {
    const max = Q.length * 3;
    const sum = Object.entries(answers).reduce((acc, [i, opt]) => {
      return acc + Q[i].opts[opt].w;
    }, 0);

    const pct = Math.round((sum / max) * 100);

    let lvl = "Low";
    let c = "text-emerald-700";
    if (pct >= 70) {
      lvl = "High";
      c = "text-rose-700";
    } else if (pct >= 40) {
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

      {/* ✅ HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600" />
        <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative container-page grid md:grid-cols-2 gap-10 items-center py-12 md:py-16">
          
          <div className="text-white">
            <p className="uppercase tracking-widest text-white/80 text-xs">
              Diabetes Risk Check
            </p>

            <h1 className="font-black leading-tight text-4xl md:text-6xl">
              Answer a Few Questions &
              <br />
              Know Your <span className="text-yellow-200">Diabetes Risk</span>
            </h1>

            <p className="mt-4 text-white/90 max-w-2xl">
              Identify early signs of diabetes risk based on your lifestyle,
              habits, symptoms, and family history. Take charge of your health.
            </p>
          </div>

          {/* ✅ IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://media.istockphoto.com/id/1403208023/photo/nurse-at-home-checking-diabetes-of-sick-middle-aged-woman-at-home-using-glucometer-concept-of.jpg?s=612x612&w=0&k=20&c=wjRAgu1PorgcD031YHprzd--1-YchBhcxBYp00MUSD8="
              alt="diabetes check"
              className="w-full md:w-[620px] md:h-[260px] object-cover rounded-3xl ring-1 ring-white/30 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ✅ QUESTIONS + AI PANEL */}
      <section className="container-page mt-6 grid lg:grid-cols-[1fr,380px] gap-8">

        {/* ✅ LEFT CARD */}
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

              {/* Question */}
              <h2 className="mt-4 text-lg md:text-xl font-semibold">{step.q}</h2>

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

              {/* Buttons */}
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
                    Next →
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
                    Show My Risk
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              {/* ✅ RESULT SCREEN */}
              <h2 className="text-xl md:text-2xl font-bold">Your Diabetes Risk</h2>

              <div className="grid md:grid-cols-3 gap-4 mt-4">
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
                    Interpretation
                  </p>
                  <p className="text-sm text-slate-700">
                    {level === "Low" &&
                      "Your lifestyle and symptoms indicate a low risk. Maintain healthy habits."}
                    {level === "Moderate" &&
                      "Some factors indicate elevated risk. Improve diet and increase activity to stay safe."}
                    {level === "High" &&
                      "Multiple strong indicators detected. Consider getting a blood sugar test soon."}
                  </p>
                </div>
              </div>

              {/* ✅ Tips */}
              <div className="rounded-2xl bg-slate-50 border p-5 mt-4">
                <p className="font-medium mb-2">Health Tips</p>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>Reduce sugar and refined carbs.</li>
                  <li>Take daily walks (20–30 minutes).</li>
                  <li>Drink plenty of water.</li>
                  <li>Focus on a high-fiber diet: vegetables, salads, whole grains.</li>
                  <li>Maintain a healthy weight.</li>
                  <li>Get fasting blood sugar tested once a year.</li>
                </ul>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={resetAll}
                  className="px-4 py-2 rounded-lg border hover:bg-slate-50"
                >
                  Retake
                </button>

                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Back to Top
                </button>
              </div>
            </>
          )}
        </div>

        {/* ✅ RIGHT SIDE AI ASSISTANT */}
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="px-5 py-3 border-b rounded-t-2xl bg-violet-100 text-violet-900 font-medium">
              AI Health Assistant (Under Development)
            </div>

            <div className="p-5 space-y-3">
              <p className="text-sm text-slate-600">
                Ask questions about diet, symptoms or diabetes prevention.  
                (This is a mock panel.)
              </p>

              <div className="space-y-2">
                {[
                  "What are early diabetes symptoms?",
                  "How can I reduce my sugar levels naturally?",
                  "What foods should diabetics avoid?",
                ].map((x) => (
                  <button
                    key={x}
                    onClick={() => alert(x)}
                    className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100
                    border border-slate-200 rounded-xl"
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
