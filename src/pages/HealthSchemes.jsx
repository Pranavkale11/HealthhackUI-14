// src/pages/HealthSchemes.jsx
import React from "react";

/**
 * NOTE: Every scheme below has an official URL.
 * Clicking "More" (or the image/title) opens the government page in a new tab.
 */
const SCHEMES = [
  {
    title: "AB-PMJAY (Ayushman Bharat)",
    tag: "Central",
    img: "https://pmjay.gov.in/sites/default/files/2020-01/pmjay_0.jpg",
    desc:
      "National health cover for eligible families, up to ₹5 lakh per family per year.",
    url: "https://pmjay.gov.in/",
  },
  {
    title: "ESI Scheme",
    tag: "Insurance",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cfs4eGHEX32CsGQtsDJiYYO6f5JhZ6PCbQ&s",
    desc:
      "Employees’ State Insurance for salaried workers covering medical & disability benefits.",
    url: "https://www.esic.gov.in/",
  },
  {
    title: "CGHS",
    tag: "Central",
    img:
      "https://d28c6jni2fmamz.cloudfront.net/CT_FEB_002_Images_for_Government_Scheme_Pages_3_d2b132cd30.jpg",
    desc:
      "Central Government Health Scheme for eligible central government employees & pensioners.",
    url: "https://cghs.gov.in/",
  },
  {
    title: "Janani Suraksha Yojana (JSY)",
    tag: "Maternal",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOC0Zg8i52z2XK6lJ4OhrT9kQaZ87AWPFUuw&s",
    desc:
      "Cash incentive program to promote institutional deliveries for pregnant women.",
    url: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=842&lid=309",
  },
  {
    title: "PM Matru Vandana Yojana (PMMVY)",
    tag: "Maternal",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYN3zWezRVGBTG0k1td4OHsCFM2D9ACDweDw&s",
    desc:
      "Maternity benefit for first live birth to improve health seeking behaviour.",
    url: "https://pmmvy.wcd.gov.in/",
  },
  {
    title: "Mission Indradhanush",
    tag: "Immunization",
    img:
      "https://ehealth.eletsonline.com/wp-content/uploads/2018/01/Mandsaur-mp-The-second-phase-of-the-rainbow-mission-until-December-7-to-14-news-in-hindi-119724.png",
    desc:
      "Universal immunization drive targeting vaccine-preventable diseases in children.",
    url: "https://mohfw.gov.in/basicpage/mission-indradhanush",
  },
  {
    title: "Rashtriya Bal Swasthya Karyakram (RBSK)",
    tag: "Child Health",
    img:
      "https://www.impactguru.com/info/wp-content/uploads/2023/04/Rashtriya-Bal-Swasthya-Karyakram-RBSK-1200-x-800.jpg",
    desc:
      "Early identification & intervention for children from birth to 18 years.",
    url: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1190&lid=583",
  },
  {
    title: "Pradhan Mantri National Dialysis Programme",
    tag: "Chronic Care",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsKP5_EPONAybNWbmltkdV2aJBUxEQnEfFUg&s",
    desc:
      "Supports free/subsidized dialysis services for patients with kidney failure.",
    url:
      "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1050&lid=604",
  },
  {
    title: "PMSMA (Safe Motherhood)",
    tag: "Maternal",
    img:
      "https://i0.wp.com/ketto.blog/wp-content/uploads/2024/01/Pradhan-Mantri-Surakshit-Matritva-Abhiyan-PMSMA.jpg?fit=1024%2C576&ssl=1",
    desc:
      "Free, quality antenatal care for pregnant women on the 9th of every month.",
    url: "https://pmsma.mohfw.gov.in/",
  },
  {
    title: "Deendayal Antyodaya – Urban Health & Wellness",
    tag: "Primary Care",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Fa0sV0WfKxqJ3kZd5DgwWT_dCNEN7ChoNA&s",
    desc:
      "Comprehensive primary care through Health & Wellness Centres under Ayushman Bharat.",
    url:
      "https://ab-hwc.nhp.gov.in/",
  },
  {
    title: "State Health Insurance",
    tag: "State",
    img:
      "https://cdn.zeebiz.com/sites/default/files/2022/05/29/184147-govt-schemes.jpg",
    desc:
      "State-specific schemes (e.g., Aarogyasri, TN CM Health, Bhamashah). Visit your state’s portal.",
    url:
      "https://www.nhp.gov.in/statehealthportal",
  },
  {
    title: "Wellness & Preventive Programs",
    tag: "General",
    img:
      "https://i0.wp.com/www.opindia.com/wp-content/uploads/2018/03/Children-Celebrating-International-Yoga-Day-Picture.jpg?fit=696%2C463&ssl=1",
    desc:
      "Incentives & services for screening, yoga, fitness and healthy lifestyle.",
    url: "https://yoga.ayush.gov.in/",
  },
];

export default function HealthSchemes() {
  return (
    <div className="container-page py-10">
      <div className="grid md:grid-cols-[1fr,320px] gap-8 items-start">
        {/* LEFT: Content */}
        <div>
          <h1 className="text-3xl font-bold text-purple-700">Health Schemes</h1>
          <p className="text-gray-700 mt-3 max-w-2xl">
            Explore government and insurance-backed health schemes that can help
            reduce medical costs.
          </p>

          {/* Search (non-functional placeholder for now) */}
          <div className="mt-5 flex gap-2">
            <input
              type="search"
              placeholder="Search schemes (AB-PMJAY, ESI, State)"
              className="w-full max-w-md border rounded-lg px-3 py-2"
              onChange={() => {}}
            />
            <button className="px-4 py-2 rounded-lg bg-purple-700 text-white">
              Search
            </button>
          </div>

          {/* Filters (UI only) */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {[
              "All",
              "Central",
              "State",
              "Insurance",
              "Low-income",
              "Maternal",
              "Child Health",
              "Immunization",
              "Chronic Care",
              "Primary Care",
              "General",
            ].map((x, i) => (
              <button
                key={i}
                className={`px-3 py-1.5 rounded-full border ${
                  i === 0
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white"
                }`}
              >
                {x}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {SCHEMES.map((s, idx) => (
              <article
                key={idx}
                className="bg-white shadow rounded-xl overflow-hidden border"
              >
                {/* Make image/title clickable too */}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`Open official page for ${s.title}`}
                >
                  <img
                    src={s.img}
                    className="w-full h-44 object-cover"
                    alt={s.title}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </a>

                <div className="p-4">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                    aria-label={`Open official page for ${s.title}`}
                  >
                    {s.title}
                  </a>

                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="px-2 py-1 rounded bg-purple-100 text-purple-700">
                      {s.tag}
                    </span>

                    {/* The actual "More" button that opens the govt site */}
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 rounded bg-green-600 text-white"
                      aria-label={`Open official page for ${s.title}`}
                    >
                      More
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT: Illustration */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=900&auto=format&fit=crop"
            alt="schemes"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
