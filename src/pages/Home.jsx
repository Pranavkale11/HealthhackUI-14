// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-page py-10">
      {/* HERO */}
      <section>
        <div className="relative overflow-hidden rounded-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600" />
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
            <div className="max-w-xl">
              <p className="text-fuchsia-200/90 tracking-wide text-xs md:text-sm mb-2">
                Aarogya
              </p>
              <h1 className="leading-[0.95] text-[44px] md:text-7xl font-black text-white drop-shadow-sm">
                Saarthi
              </h1>
              <p className="mt-5 text-white/90 text-sm md:text-base leading-relaxed">
                Your friendly health co-pilot — learn prevention, handle
                emergencies, and discover schemes that actually help. Built for
                speed, clarity, and peace of mind.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
                <Link
                  to="/features"
                  className="group inline-flex items-center justify-center rounded-xl bg-white/95 text-brand-800 font-semibold px-5 py-3 shadow-md hover:shadow-lg transition ring-1 ring-white/50 backdrop-blur"
                >
                  <span>Explore Features</span>
                  <svg
                    className="ml-2 size-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <Link
                  to="/prevention"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 text-white px-5 py-3 hover:bg-white/10 transition backdrop-blur"
                >
                  Disease Prevention
                </Link>
              </div>
            </div>

            <div className="md:pr-6 flex items-center justify-center">
              <img
                alt="Healthy foods"
                src="/images/AS.png"
                className="rounded-[1.75rem] w-full h-72 md:h-[22rem] object-cover ring-1 ring-white/25 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KNOW MORE */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold mb-6">Know More About Us</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Diet & Nutrition */}
          <Link
            to="/diet"
            className="rounded-2xl overflow-hidden bg-white shadow-md border hover:shadow-lg transition block"
          >
            <img
              className="w-full h-56 object-cover"
              src="https://www.health.com/thmb/VTFKH3uDDUdr-xekmilbNim5QOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1498826563-db5d95e08d294ae6bc3860f901ee0c40.jpg"
              alt="diet"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Diet & Nutrition</h3>
              <p className="text-sm text-gray-600 mt-1">
                Calculate BMI, calories, and get a daily plan tailored to you.
              </p>
              <span className="mt-3 inline-block text-green-600 font-medium text-sm">
                Explore →
              </span>
            </div>
          </Link>

          {/* Fitness & Exercise — NOW CLICKABLE */}
          <Link
            to="/fitness"
            className="rounded-2xl overflow-hidden bg-white shadow-md border hover:shadow-lg transition block"
          >
            <img
              className="w-full h-56 object-cover"
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=900&auto=format&fit=crop"
              alt="fitness"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Fitness & Exercise</h3>
              <p className="text-sm text-gray-600 mt-1">
                Simple workouts to keep your body active and strong.
              </p>
              <span className="mt-3 inline-block text-green-600 font-medium text-sm">
                Explore →
              </span>
            </div>
          </Link>

          {/* More Features */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-md border hover:shadow-lg transition">
            <img
              className="w-full h-56 object-cover"
              src="https://us-en-cdn.square.ncms.io/content/uploads/2022/10/1007553badb498e6b084c.jpg.jpeg"
              alt="more features"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">More Features</h3>
              <p className="text-sm text-gray-600 mt-1">
                Mindfulness & yoga routines for everyday wellness.
              </p>
              <Link to="/features">
                <span className="mt-3 inline-block text-green-600 font-medium text-sm">
                  Explore →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
