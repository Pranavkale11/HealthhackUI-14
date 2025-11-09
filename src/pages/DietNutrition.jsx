// src/pages/DietNutrition.jsx
import React, { useMemo, useState } from "react";

const ACTIVITY = [
  { k: "sedentary", label: "Sedentary (desk job, little exercise)", mult: 1.2 },
  { k: "light",      label: "Light (1–3 days/week)",               mult: 1.375 },
  { k: "moderate",   label: "Moderate (3–5 days/week)",            mult: 1.55 },
  { k: "active",     label: "Active (6–7 days/week)",              mult: 1.725 },
  { k: "athlete",    label: "Very Active (hard exercise / sport)", mult: 1.9 },
];

const GOALS = [
  { k: "lose",     label: "Lose fat (-500 kcal)", delta: -500 },
  { k: "maintain", label: "Maintain (0 kcal)",    delta: 0 },
  { k: "gain",     label: "Gain muscle (+300 kcal)", delta: 300 },
];

const clamp = (n, min, max) => Math.max(min, Math.min(max, n || 0));

export default function DietNutrition() {
  const [form, setForm] = useState({
    sex: "male",
    age: "",
    height: "",
    weight: "",
    activity: ACTIVITY[0].k,
    goal: GOALS[1].k,
    vegPref: "veg",
  });

  const on = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const result = useMemo(() => {
    const age = clamp(parseFloat(form.age), 10, 100);
    const height = clamp(parseFloat(form.height), 120, 230);
    const weight = clamp(parseFloat(form.weight), 25, 250);
    if (!age || !height || !weight) return null;

    const heightM = height / 100;
    const bmi = +(weight / (heightM * heightM)).toFixed(1);

    let bmr = form.sex === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

    const mult = ACTIVITY.find((a) => a.k === form.activity)?.mult || 1.2;
    const tdee = Math.round(bmr * mult);
    const delta = GOALS.find((g) => g.k === form.goal)?.delta || 0;
    const target = Math.max(1200, tdee + delta);

    const carbs = Math.round((target * 0.4) / 4);
    const protein = Math.round((target * 0.3) / 4);
    const fat = Math.round((target * 0.3) / 9);

    let status = "Normal";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi >= 25 && bmi < 30) status = "Overweight";
    else if (bmi >= 30) status = "Obese";

    return { bmi, status, bmr: Math.round(bmr), tdee, target, carbs, protein, fat };
  }, [form]);

  const eatList =
    form.vegPref === "veg"
      ? ["Whole grains (oats, brown rice)", "Pulses/legumes & tofu", "Leafy veggies & colorful salads", "Fruits (berries, banana, citrus)", "Nuts & seeds", "Low-fat dairy / curd"]
      : ["Lean meats (chicken, fish)", "Eggs", "Whole grains (oats, brown rice)", "Veggies & salads", "Fruits (berries, banana, citrus)", "Nuts & seeds, olive oil"];

  const avoidList = ["Ultra-processed snacks", "Sugary drinks", "Excess fried foods", "Too much added sugar/salt", "Late-night overeating", "Alcohol in excess"];

  const plan = [
    {
      title: "Breakfast",
      img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop",
      items:
        form.vegPref === "veg"
          ? ["Oats porridge + fruit", "Boiled eggs/Tofu scramble (pick one)", "Green tea / black coffee"]
          : ["Omelette + veggies", "1–2 slices whole-grain toast", "Fruit bowl + green tea"],
    },
    {
      title: "Lunch",
      img: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=800&auto=format&fit=crop",
      items:
        form.vegPref === "veg"
          ? ["Brown rice / millet roti", "Dal / chickpeas", "Big mixed salad"]
          : ["Grilled chicken/fish", "Brown rice / quinoa", "Big mixed salad"],
    },
    {
      title: "Snack",
      img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop",
      items: ["Fruit + handful nuts", "Buttermilk / yogurt", "Dark chocolate (small)"],
    },
    {
      title: "Dinner",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
      items:
        form.vegPref === "veg"
          ? ["Millet khichdi / paneer bhurji", "Sautéed veggies", "Soup (clear)"]
          : ["Egg curry / grilled fish", "Sautéed veggies", "Soup (clear)"],
    },
  ];

  return (
    <div className="pb-16">
      {/* HERO (give it bottom padding, no overlap) */}
      <section className="relative overflow-hidden pb-16 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-indigo-600 to-fuchsia-600" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 container-page pt-12 md:pt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <p className="uppercase tracking-widest text-white/80 text-xs">Diet & Nutrition</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow">
              Eat Smart. <span className="text-yellow-200">Feel Strong.</span>
            </h1>
            <p className="mt-4 text-white/90 max-w-xl">
              Calculate your BMI, get a personalized daily calorie target, macro split,
              and a clean, practical day plan that fits your preference.
            </p>
          </div>

          <div className="relative">
            <img
              className="w-full md:h-72 object-cover rounded-3xl ring-1 ring-white/30 shadow-xl"
              alt="balanced plate"
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* CALCULATOR — remove negative margin, add normal top margin */}
      <section className="container-page mt-6 md:mt-10">
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-6 md:p-8">
          <h2 className="text-xl font-semibold">BMI & Calorie Calculator</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {/* Inputs */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <label className="text-sm">
                  Sex
                  <select className="mt-1 w-full border rounded-lg px-3 py-2" value={form.sex} onChange={on("sex")}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>

                <label className="text-sm">
                  Age (years)
                  <input className="mt-1 w-full border rounded-lg px-3 py-2" type="number" value={form.age} onChange={on("age")} placeholder="25" />
                </label>

                <label className="text-sm">
                  Height (cm)
                  <input className="mt-1 w-full border rounded-lg px-3 py-2" type="number" value={form.height} onChange={on("height")} placeholder="170" />
                </label>

                <label className="text-sm">
                  Weight (kg)
                  <input className="mt-1 w-full border rounded-lg px-3 py-2" type="number" value={form.weight} onChange={on("weight")} placeholder="65" />
                </label>
              </div>

              <label className="text-sm">
                Activity Level
                <select className="mt-1 w-full border rounded-lg px-3 py-2" value={form.activity} onChange={on("activity")}>
                  {ACTIVITY.map((a) => (
                    <option key={a.k} value={a.k}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm">
                Goal
                <select className="mt-1 w-full border rounded-lg px-3 py-2" value={form.goal} onChange={on("goal")}>
                  {GOALS.map((g) => (
                    <option key={g.k} value={g.k}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm">
                Preference
                <select className="mt-1 w-full border rounded-lg px-3 py-2" value={form.vegPref} onChange={on("vegPref")}>
                  <option value="veg">Vegetarian</option>
                  <option value="nonveg">Non-Vegetarian</option>
                </select>
              </label>
            </div>

            {/* Results */}
            <div className="bg-slate-50 rounded-xl p-4 md:p-5 border">
              {result ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600">BMI</p>
                    <p className="font-semibold">
                      {result.bmi} <span className="text-slate-500 font-normal">({result.status})</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600">BMR</p>
                    <p className="font-semibold">{result.bmr} kcal</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600">TDEE</p>
                    <p className="font-semibold">{result.tdee} kcal</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600">Daily Target</p>
                    <p className="font-semibold text-emerald-700">{result.target} kcal</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-medium">Suggested Macros</p>
                    <div className="grid grid-cols-3 gap-3 mt-2 text-center">
                      <div className="rounded-lg bg-white border p-3">
                        <p className="text-xs text-slate-500">Carbs</p>
                        <p className="font-semibold">{result.carbs} g</p>
                      </div>
                      <div className="rounded-lg bg-white border p-3">
                        <p className="text-xs text-slate-500">Protein</p>
                        <p className="font-semibold">{result.protein} g</p>
                      </div>
                      <div className="rounded-lg bg-white border p-3">
                        <p className="text-xs text-slate-500">Fat</p>
                        <p className="font-semibold">{result.fat} g</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-slate-600">Enter your details to see BMI, calories & macro targets.</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What to eat / avoid */}
      <section className="container-page mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white shadow ring-1 ring-slate-200 p-6">
          <h3 className="font-semibold text-lg">What to focus on</h3>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            {eatList.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white shadow ring-1 ring-slate-200 p-6">
          <h3 className="font-semibold text-lg">Try to limit</h3>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
            {avoidList.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Day plan */}
      <section className="container-page mt-10">
        <h3 className="font-semibold text-lg mb-4">Balanced Day Plan</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {plan.map((block) => (
            <div key={block.title} className="rounded-2xl overflow-hidden bg-white shadow ring-1 ring-slate-200">
              <img src={block.img} alt={block.title} className="h-36 w-full object-cover" />
              <div className="p-4">
                <p className="font-semibold">{block.title}</p>
                <ul className="mt-2 text-sm text-slate-700 list-disc pl-5 space-y-1">
                  {block.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4">
          *This tool gives general guidance. For medical conditions, consult a healthcare professional or dietitian.
        </p>
      </section>
    </div>
  );
}
