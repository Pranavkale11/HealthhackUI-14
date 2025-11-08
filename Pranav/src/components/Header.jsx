import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="container-page flex items-center justify-between py-5">
      <Link to="/" className="font-semibold text-lg tracking-wide">
        Aarogya Saarthi
      </Link>

      <nav className="flex items-center gap-8 text-sm">
        <NavLink to="/" className={({isActive}) => isActive ? "underline" : "hover:underline"}>
          Home
        </NavLink>
        <NavLink to="/features" className={({isActive}) => isActive ? "underline" : "hover:underline"}>
          Features
        </NavLink>
        <NavLink to="/prevention" className={({isActive}) => isActive ? "underline" : "hover:underline"}>
          Prevention
        </NavLink>
        <NavLink to="/emergency" className={({isActive}) => isActive ? "underline" : "hover:underline"}>
          Emergency Aid
        </NavLink>
        <NavLink to="/schemes" className={({isActive}) => isActive ? "underline" : "hover:underline"}>
          Health Schemes
        </NavLink>
      </nav>
    </header>
  );
}
