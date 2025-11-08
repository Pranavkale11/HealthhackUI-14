import React from "react";

export default function Footer(){
  return (
    <footer className="mt-16 bg-brand-700 text-white">
      <div className="container-page py-10">
        <h3 className="text-2xl md:text-4xl font-bold">Let's Talk</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm opacity-90">
          <div>
            <p className="font-semibold mb-2">Aarogya Saarthi</p>
            <ul className="space-y-1">
              <li>Home</li><li>Dashboard</li><li>Health Assessment</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Disease Info</p>
            <ul className="space-y-1">
              <li>Disease Info</li><li>Meet</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Company</p>
            <ul className="space-y-1">
              <li>About Us</li><li>Contact Us</li><li>FAQ</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs opacity-75">© 2025 Aarogya Saarthi | AI Health Assistant</p>
      </div>
    </footer>
  );
}
