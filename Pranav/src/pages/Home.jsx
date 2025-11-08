import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-page py-10">
      {/* HERO */}
      <section>
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 rounded-3xl bg-brand-300/60 p-8 md:p-12 overflow-hidden">
          <div className="z-10">
            <p className="text-white/90 font-semibold text-xl">Aarogya</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Saarthi
            </h1>
            <p className="mt-4 text-white/90 max-w-md text-sm">
              This app is here to implement and diagnose most of the common
              diseases while keeping information simple and useful.
            </p>
          </div>
          <div className="md:pr-6 flex items-center justify-center">
            <img
              alt="Healthy foods"
              className="rounded-[2rem] w-full h-72 object-cover md:h-auto"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* KNOW MORE */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Know More About Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <img
            className="rounded-2xl w-full h-56 object-cover"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop"
            alt="nutrition"
          />
          <div className="rounded-2xl bg-brand-200 h-56" />
          <Link to="/features">
            <img
              className="rounded-2xl w-full h-56 object-cover cursor-pointer hover:opacity-90 transition"
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=900&auto=format&fit=crop"
              alt="yoga"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
