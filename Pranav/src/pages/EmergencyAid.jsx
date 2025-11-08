import React, { useMemo, useState } from "react";

// Simple dataset (you can edit images/text freely)
const EMERGENCIES = [
  {
    title: "CPR Basics",
    tag: "CPR",
    desc: "Hands-only CPR steps to keep blood flowing until help arrives.",
    img: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/cpr",
  },
  {
    title: "Severe Bleeding",
    tag: "Bleeding",
    desc: "Apply direct pressure with clean cloth; elevate and call emergency.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1qufVv4ZsDh5WQIrTGKg1F4bhOJcDmbBZg&s",
  },
  {
    title: "Treating Burns",
    tag: "Burns",
    desc: "Cool the burn under running water; cover loosely; avoid home remedies.",
    img: "https://study.com/cimages/videopreview/videopreview-full/94z5bvd8bv.jpg",
  },
  {
    title: "Choking (Adult)",
    tag: "Choking",
    desc: "Use abdominal thrusts if they can’t breathe or speak; call emergency.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JgwjYglazvSLp2jWV6w3E7Ho4HFXwdZTgA&s",
  },
  {
    title: "Fracture / Sprain",
    tag: "Fracture",
    desc: "Immobilize, apply cold pack, and avoid moving the injured limb.",
    img: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/blogs/July2024/vbPKxOg3PeKsIhgVO5Vf.webp",
  },
  {
    title: "Heatstroke",
    tag: "Heat",
    desc: "Move to a cool place, cool with wet cloths/ice packs; call emergency.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhiHPnmAvzqW5BN9s6IfQYl3_0OTPTSD12g&s",
  },
  {
    title: "Snakebite",
    tag: "Bite",
    desc: "Keep victim calm, immobilize limb below heart; do NOT cut or suck.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEA5bDqS5zhQq3u_c5xTCXRQc7b7rdqdhjg&s",
  },
  {
    title: "Poisoning",
    tag: "Poison",
    desc: "Do NOT induce vomiting; check label if available; call poison helpline.",
    img: "https://dravinashtank.in/wp-content/uploads/2023/10/Food-Poisoning-CausesTreatment-Prevention-1200x900.jpg",
  },
  {
    title: "Asthma Attack",
    tag: "Breathing",
    desc: "Sit upright, use reliever inhaler; if no relief, call emergency.",
    img: "https://www.hindustantimes.com/ht-img/img/2025/05/05/1600x900/asthma_1746434726513_1746434747246.jpg",
  },
  {
    title: "Stroke (FAST)",
    tag: "Stroke",
    desc: "Face drooping, Arm weakness, Speech trouble—Time to call emergency.",
    img: "https://npr.brightspotcdn.com/dims4/default/8c1b836/2147483647/strip/true/crop/4211x2369+0+754/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F6f%2Fcf%2F8274844b4ad99d41f993a881361f%2Fworld-stroke-day.jpg",
  },
  {
    title: "Heart Attack",
    tag: "Cardiac",
    desc: "Chest pressure, sweating, nausea—call emergency; chew aspirin if advised.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymFa913CHcaVxwDIJgvWwGj2ulRkUvriZQg&s",
  },
  {
    title: "Electric Shock",
    tag: "Shock",
    desc: "Turn off power first; don’t touch victim until safe; call emergency.",
    img: "data:image/jpeg;base64,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",
  },
  {
    title: "Drowning (Rescue/CPR)",
    tag: "Water",
    desc: "Get person out safely; check breathing; start rescue breaths/CPR.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNe6xxU5e-WmHXabxTKkvUJKrn6wRdKN7NSQ&s",
  },
  {
    title: "Seizure",
    tag: "Neuro",
    desc: "Protect head, clear area; don’t restrain; roll to side when seizure ends.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOT7WiJ_kgpvMlZwF2QDtFA4P45Rb8G0tbA&s",
  },
  {
    title: "Hypoglycemia",
    tag: "Diabetes",
    desc: "Give fast-acting sugar (juice/glucose gel) if conscious; recheck.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14nnUmyOCPel06g53eIRTsvfFJjFU6o6dyQ&s",
  },
  {
    title: "Dog Bite / Animal Bite",
    tag: "Bite",
    desc: "Wash with soap & water 10–15 min; seek medical care for rabies shots.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHRnyuOJoRvwmVP24UuqF_ZSJQfc84eCcDQ&s",
  },
];

const CATEGORIES = [
  "All",
  "CPR",
  "Bleeding",
  "Burns",
  "Choking",
  "Fracture",
  "Heat",
  "Bite",
  "Poison",
  "Breathing",
  "Stroke",
  "Cardiac",
  "Shock",
  "Water",
  "Neuro",
  "Diabetes",
];

export default function EmergencyAid() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return EMERGENCIES.filter((item) => {
      const matchCat = active === "All" || item.tag === active;
      const q = query.trim().toLowerCase();
      const matchText =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q);
      return matchCat && matchText;
    });
  }, [active, query]);

  return (
    <div className="container-page py-10">
      <div className="grid md:grid-cols-[1fr,320px] gap-8 items-start">
        {/* Left: content */}
        <div>
          <h1 className="text-3xl font-bold text-purple-700">Emergency Aid</h1>
          <p className="text-gray-700 mt-3 max-w-2xl">
            Quick actions and guides for common emergencies. Learn the do's and
            don'ts before help arrives.
          </p>

          {/* Search */}
          <div className="mt-5 flex gap-2">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search emergencies (CPR, Burns, Choking...)"
              className="w-full max-w-md border rounded-lg px-3 py-2"
            />
            <button
              onClick={() => setQuery("")}
              className="px-4 py-2 rounded-lg bg-purple-700 text-white"
            >
              {query ? "Clear" : "Search"}
            </button>
          </div>

          {/* Category pills */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {CATEGORIES.map((x) => (
              <button
                key={x}
                onClick={() => setActive(x)}
                className={`px-3 py-1.5 rounded-full border transition ${
                  active === x
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white hover:bg-slate-50"
                }`}
              >
                {x}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {filtered.map((item) => (
              <div
                key={item.title}
                className="bg-white shadow rounded-xl overflow-hidden border"
              >
                <img
                  src={item.img}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="w-full h-44 object-cover"
                  alt={item.title}
                />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 text-xs">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="opacity-70">
                      Learn steps • Do’s & Don’ts
                    </span>
                    <button className="px-2.5 py-1.5 rounded bg-green-600 text-white">
                      More
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full text-sm text-gray-600">
                No results. Try another category or clear the search.
              </div>
            )}
          </div>
        </div>

        {/* Right: illustration */}
        <div className="hidden md:block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKe1hBvwaKKzcCb-EhjqhroEhIWq7x87C7-A&s"
            alt="first aid"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
