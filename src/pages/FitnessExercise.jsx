// src/pages/FitnessExercise.jsx
import React, { useMemo, useState } from "react";

const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const FOCUS = ["Full Body", "Strength", "Fat Loss", "Mobility"];

const WORKOUTS = [
  {
    level: "Beginner",
    focus: "Full Body",
    title: "Beginner Full Body (No Equipment)",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop",
    blocks: [
      { name: "Jumping Jacks", reps: "30 sec", note: "Warm-up" },
      { name: "Bodyweight Squats", reps: "3 x 12", note: "Slow & controlled" },
      { name: "Incline Push-ups (table/wall)", reps: "3 x 10", note: "Core tight" },
      { name: "Glute Bridge", reps: "3 x 12", note: "Squeeze at top" },
      { name: "Plank", reps: "3 x 20–30 sec", note: "Neutral spine" },
      { name: "Cool Down", reps: "5 min", note: "Light stretching" },
    ],
  },
  {
    level: "Intermediate",
    focus: "Strength",
    title: "Strength Circuit (Minimal Equipment)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi1MEw1oO9vLSK7aYPeM1UvUxkZfS5jICJw&s",
    blocks: [
      { name: "Goblet Squat (DB)", reps: "4 x 10", note: "Weight in heels" },
      { name: "Push-ups", reps: "4 x 10–15", note: "Full range" },
      { name: "Single-arm Row (DB/Bottle)", reps: "4 x 12/side", note: "Flat back" },
      { name: "Reverse Lunges", reps: "3 x 10/side", note: "Soft knees" },
      { name: "Side Plank", reps: "3 x 20–30 sec/side", note: "Hips high" },
      { name: "Cool Down", reps: "5–8 min", note: "Stretch + breathe" },
    ],
  },
  {
    level: "Advanced",
    focus: "Fat Loss",
    title: "HIIT Burner",
    img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1200&auto=format&fit=crop",
    blocks: [
      { name: "High Knees", reps: "40 sec", note: "Fast feet" },
      { name: "Burpees", reps: "12–15", note: "Explosive but controlled" },
      { name: "Jump Squats", reps: "15–20", note: "Land softly" },
      { name: "Mountain Climbers", reps: "40 sec", note: "Hips steady" },
      { name: "Rest", reps: "60–90 sec", note: "Repeat 4–6 rounds" },
      { name: "Cool Down", reps: "8–10 min", note: "Walk + stretch" },
    ],
  },
  {
    level: "Beginner",
    focus: "Mobility",
    title: "Everyday Mobility Flow",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    blocks: [
      { name: "Neck Circles", reps: "1 min", note: "Gentle" },
      { name: "Cat–Cow", reps: "2 x 8–10", note: "Slow breaths" },
      { name: "World’s Greatest Stretch", reps: "1–2 x /side", note: "Open hips" },
      { name: "Hamstring Sweep", reps: "1–2 x /side", note: "Soft knee" },
      { name: "Thoracic Rotations", reps: "2 x 8–10/side", note: "No pain" },
      { name: "Breathing", reps: "2–3 min", note: "Nasal, slow" },
    ],
  },
];

export default function FitnessExercise() {
  const [level, setLevel] = useState("Beginner");
  const [focus, setFocus] = useState("Full Body");

  const plan = useMemo(() => {
    return (
      WORKOUTS.find((w) => w.level === level && w.focus === focus) ??
      WORKOUTS.find((w) => w.level === level) ??
      WORKOUTS[0]
    );
  }, [level, focus]);

  return (
    <div className="pb-16">
      {/* HERO (spaced to avoid overlap) */}
      <section className="relative overflow-hidden pb-16 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 container-page pt-12 md:pt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <p className="uppercase tracking-widest text-white/80 text-xs">
              Fitness & Exercise
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Move Better. <span className="text-yellow-200">Feel Strong.</span>
            </h1>
            <p className="mt-4 text-white/90 max-w-xl">
              Pick your level and focus to get a simple, safe workout you can
              do at home. No gym? No problem.
            </p>
          </div>

          <img
            className="w-full md:h-72 object-cover rounded-3xl ring-1 ring-white/30 shadow-xl"
            alt="workout"
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* CONTROLS */}
      <section className="container-page">
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Level */}
            <div>
              <p className="text-sm font-medium mb-2">Level</p>
              <div className="flex flex-wrap gap-2">
                {LEVELS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`px-3 py-1.5 rounded-full border text-sm ${
                      level === l
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white hover:bg-slate-50"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Focus */}
            <div>
              <p className="text-sm font-medium mb-2">Focus</p>
              <div className="flex flex-wrap gap-2">
                {FOCUS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFocus(f)}
                    className={`px-3 py-1.5 rounded-full border text-sm ${
                      focus === f
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-white hover:bg-slate-50"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PLAN */}
          <div className="mt-6 grid md:grid-cols-[260px,1fr] gap-6 items-start">
            <img
              src={plan.img}
              alt={plan.title}
              className="w-full h-44 md:h-56 object-cover rounded-xl ring-1 ring-slate-200"
            />

            <div>
              <h2 className="text-xl font-semibold">{plan.title}</h2>
              <ul className="mt-3 divide-y border rounded-xl">
                {plan.blocks.map((b) => (
                  <li
                    key={b.name}
                    className="p-3 flex items-start gap-3 bg-white/60"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                    <div className="flex-1">
                      <p className="font-medium">{b.name}</p>
                      <p className="text-sm text-slate-600">{b.reps}</p>
                      {b.note && (
                        <p className="text-xs text-slate-500 mt-0.5">{b.note}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-slate-500 mt-3">
                Tip: Warm up 5–8 minutes. Focus on form. Stop if you feel pain
                (sharp/stabby). Hydrate and cool down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY / FAQ-ish */}
      <section className="container-page mt-10 grid md:grid-cols-3 gap-6">
        {[
          {
            t: "How many days per week?",
            d: "2–3x for beginners, 3–4x for intermediate/advanced. Rest at least one day between hard sessions.",
          },
          {
            t: "How long should a session be?",
            d: "20–35 minutes for beginners; 30–50 minutes if you’re used to training.",
          },
          {
            t: "Any equipment needed?",
            d: "None for basics. A backpack with books or a single dumbbell helps progress strength work.",
          },
        ].map((x) => (
          <div
            key={x.t}
            className="rounded-2xl bg-white shadow ring-1 ring-slate-200 p-5"
          >
            <p className="font-semibold">{x.t}</p>
            <p className="text-sm text-slate-600 mt-1">{x.d}</p>
          </div>
        ))}
      </section>

      <p className="container-page text-xs text-slate-500 mt-6">
        *General guidance only. If you have injuries or medical conditions,
        talk to a qualified professional before starting a program.
      </p>
    </div>
  );
}
