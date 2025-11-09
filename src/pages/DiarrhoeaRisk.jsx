import React, { useState } from "react";

export default function DiarrhoeaRisk() {
  const steps = [
    {
      q: "Have you consumed food from outside (street food, unhygienic places) recently?",
      opts: ["Yes, frequently", "Sometimes", "Rarely", "No"],
    },
    {
      q: "Do you have access to safe drinking water at home?",
      opts: ["Always (treated/boiled/filtered)", "Usually", "Sometimes", "Rarely"],
    },
    {
      q: "Any of these symptoms in the last 2–3 days?",
      opts: [
        "Loose stools 3+ times/day",
        "Abdominal cramps / nausea",
        "Fever / dehydration",
        "None of these",
      ],
    },
    {
      q: "Do you wash hands with soap before eating and after toilet?",
      opts: ["Always", "Mostly", "Sometimes", "Rarely"],
    },
    {
      q: "Do you regularly store cooked food at room temperature for long time?",
      opts: ["Yes, often", "Sometimes", "Rarely", "No"],
    },
    {
      q: "Any household member ill with similar symptoms recently?",
      opts: ["Yes", "No", "Not sure"],
    },
  ];

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const step = steps[idx];

  const select = (i) => setAnswers((p) => ({ ...p, [idx]: i }));
  const canNext = answers[idx] !== undefined;
  const progress = Math.round(((idx + 1) / steps.length) * 100);

  return (
    <div className="pb-16">
      {/* HERO (give real space; no negative margins later) */}
      <section className="relative overflow-hidden pb-10 md:pb-14">
        {/* gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-700 via-teal-600 to-blue-700" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative container-page grid md:grid-cols-2 gap-10 items-center py-12 md:py-16">
          {/* text */}
          <div className="text-white">
            <p className="uppercase tracking-widest text-white/80 text-xs">
              Diarrhoea Risk Check
            </p>
            <h1 className="font-black leading-tight text-4xl md:text-6xl">
              Is Your Water &amp; Food Safe? <br />
              <span className="text-yellow-200">Answer a Few Questions</span>
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl">
              Determine how likely your recent symptoms or surroundings may put you at
              risk of diarrhoea. Based on hygiene, food intake, and water-safety habits.
            </p>
          </div>

          {/* hero image (from /public/images) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://suryahospitaldeoria.com/wp-content/uploads/2025/03/DSCF0376-scaled.jpg"
              onError={(e) => {
                // fallback if your local image isn't present yet
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1591258739299-9c2a2f7dad5a?q=80&w=1200&auto=format&fit=crop";
              }}
              alt="hospital ward"
              className="w-full md:w-[620px] md:h-[260px] object-cover rounded-3xl ring-1 ring-white/30 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* MAIN GRID (use positive margin to avoid overlap) */}
      <section className="container-page mt-0 grid lg:grid-cols-[1fr,380px] gap-8">
        {/* left card */}
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-5 md:p-7">
          {/* progress */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">
              Question <b>{idx + 1}</b> of <b>{steps.length}</b>
            </p>
            <div className="w-44 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <h2 className="mt-4 text-lg md:text-xl font-semibold">{step.q}</h2>

          <div className="mt-4 space-y-3">
            {step.opts.map((o, i) => {
              const selected = answers[idx] === i;
              return (
                <button
                  key={o}
                  onClick={() => select(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition
                  ${selected ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:bg-slate-50"}`}
                >
                  {o}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              disabled={idx === 0}
              onClick={() => setIdx((v) => Math.max(0, v - 1))}
              className={`px-4 py-2 rounded-lg border text-sm ${
                idx === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-slate-50 border-slate-300"
              }`}
            >
              ← Back
            </button>

            {idx < steps.length - 1 ? (
              <button
                disabled={!canNext}
                onClick={() => setIdx((v) => v + 1)}
                className={`px-4 py-2 rounded-lg text-sm text-white ${
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
                onClick={() => alert("Thanks! This is a demo submission.")}
                className={`px-4 py-2 rounded-lg text-sm text-white ${
                  canNext
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-emerald-600/50 cursor-not-allowed"
                }`}
              >
                View My Risk Tips
              </button>
            )}
          </div>
        </div>

        {/* right panel */}
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="px-5 py-3 border-b rounded-t-2xl bg-teal-100 text-teal-900 font-medium">
              Quick guidance for diarrhoea-related symptoms & safety.
            </div>

            <div className="p-5 space-y-2">
              {[
                "Is my diarrhoea dangerous?",
                "How much water should I drink?",
                "What should I eat during diarrhoea?",
              ].map((x) => (
                <button
                  key={x}
                  className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl"
                  onClick={() => alert(x)}
                >
                  {x}
                </button>
              ))}

              <div className="mt-3 flex gap-2">
                <input className="flex-1 border rounded-xl px-3 py-2" placeholder="Type your question…" />
                <button className="px-3 py-2 rounded-xl bg-teal-600 text-white">Ask</button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
