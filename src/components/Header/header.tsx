import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  const links = [
    { to: "/people", label: "People" },
    { to: "/planets", label: "Planets" },
    { to: "/starships", label: "Starships" },
  ].map(({ to, label })=> {
    return (
      <li key={label}>
        <NavLink to={to}>{label}</NavLink>
    </li>
  )
  })
  return (
    <div className="header d-flex">
      <h3>
        <NavLink to='/'>Starwars database</NavLink>
      </h3>
      <ul className="d-flex">
          {links}
      </ul>
    </div>
  );
};

export default Header;
