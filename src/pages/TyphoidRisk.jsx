import React, { useState } from "react";

export default function TyphoidRisk() {
  const steps = [
    {
      q: "Have you consumed untreated water or street food recently?",
      opts: ["Yes, frequently", "Sometimes", "Rarely", "No"],
    },
    {
      q: "Any of these symptoms in the last week?",
      opts: [
        "High fever (≥38.5°C)",
        "Headache / body ache",
        "Abdominal pain / constipation / diarrhoea",
        "None of these",
      ],
    },
    {
      q: "Do you live in an area with poor sanitation or recent outbreaks?",
      opts: ["Yes", "Not sure", "No"],
    },
    {
      q: "Do you regularly wash hands with soap before meals?",
      opts: ["Always", "Mostly", "Sometimes", "Rarely"],
    },
    {
      q: "Have you been vaccinated against typhoid?",
      opts: ["Yes", "No", "Not sure"],
    },
    {
      q: "Any contact with a person having long fever recently?",
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
      {/* HERO */}
      <section className="relative overflow-hidden pb-10 md:pb-14">
        <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-700 via-violet-600 to-indigo-700" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative container-page grid md:grid-cols-2 gap-10 items-center py-12 md:py-16">
          <div className="text-white">
            <p className="uppercase tracking-widest text-white/80 text-xs">
              Typhoid Risk Check
            </p>
            <h1 className="font-black leading-tight text-4xl md:text-6xl">
              Is Your Food &amp; Water <span className="text-yellow-200">Typhoid-Safe?</span>
              <br />Answer a Few Questions
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl">
              Quick screening to estimate risk and offer immediate prevention tips.
              If high fever persists, seek clinical care early.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXbJkHL4RLeJeLIZj8ZcKBltxhrciNwzWqw&s"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop";
              }}
              alt="typhoid"
              className="w-full md:w-[620px] md:h-[260px] object-cover rounded-3xl ring-1 ring-white/30 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="container-page mt-0 grid lg:grid-cols-[1fr,380px] gap-8">
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-5 md:p-7">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">
              Question <b>{idx + 1}</b> of <b>{steps.length}</b>
            </p>
            <div className="w-44 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-600 transition-all"
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
                  ${selected ? "border-violet-600 bg-violet-50" : "border-slate-200 hover:bg-slate-50"}`}
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

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="px-5 py-3 border-b rounded-t-2xl bg-violet-100 text-violet-900 font-medium">
              AI Health Assistant (Under Development)
            </div>
            <div className="p-5 space-y-2">
              {[
                "What are typhoid symptoms?",
                "How can I prevent typhoid at home?",
                "When should I visit a doctor?",
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
                <button className="px-3 py-2 rounded-xl bg-violet-600 text-white">Ask</button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
