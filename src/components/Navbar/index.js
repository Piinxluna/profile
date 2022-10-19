import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/activities" activeStyle>
            Activities
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/hobbies" activeStyle>
            Hobbies
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
