import React, { useState } from "react";
import { activityDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={dropdown ? "activity-submenu clicked" : "activity-submenu"}
      onClick={() => {
        setDropdown(!dropdown);
      }}
    >
      {activityDropdown.map((item) => {
        return (
          <li key={item.id}>
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
