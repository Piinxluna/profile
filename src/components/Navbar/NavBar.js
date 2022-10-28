import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Activities") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
