// import React, { useState } from "react";
// import "./NavBar.css";
// import { Link, NavLink } from "react-router-dom";
// import { BiChevronDown } from "react-icons/bi";

// const Navbar = () => {
//   const [isMenuSubMenu, setMenuSubMenu] = useState(false);

//   const toggleSubMenu = () => {
//     setMenuSubMenu(isMenuSubMenu === false ? true : false);
//   };

//   let boxClass = ["main-menu menu-right menuq1"];
//   if (isMenu) {
//     boxClass.push("menuq2");
//   } else {
//     boxClass.push("");
//   }

//   let boxClassSubMenu = ["sub__menus"];
//   if (isMenuSubMenu) {
//     boxClassSubMenu.push("sub__menus__Active");
//   } else {
//     boxClassSubMenu.push("");
//   }

//   return (
//     <>
//       <header>
//         <div className="container">
//           <div className="row">
//             <div className="header__middle__logo">
//               <NavLink exact activeClassName="is-active" to="/">
//                 <img src="images/test1.jpg" alt="logo" />
//               </NavLink>
//             </div>
//             <div className="main-nav">
//               <nav>
//                 {isResponsiveclose === true ? (
//                   <>
//                     <span
//                       className="menubar__button"
//                       style={{ display: "none" }}
//                       onClick={toggleClass}
//                     >
//                       {" "}
//                       <FiXCircle />{" "}
//                     </span>
//                   </>
//                 ) : (
//                   <>
//                     <span
//                       className="menubar__button"
//                       style={{ display: "none" }}
//                       onClick={toggleClass}
//                     >
//                       {" "}
//                       <FiAlignRight />{" "}
//                     </span>
//                   </>
//                 )}
//                 <ul className={boxClass.join(" ")}>
//                   <li className="menu-item">
//                     <NavLink
//                       exact
//                       activeClassName="is-active"
//                       onClick={toggleClass}
//                       to={`/`}
//                     >
//                       Home
//                     </NavLink>
//                   </li>

//                   <li className="menu-item">
//                     <NavLink
//                       activeClassName="is-active"
//                       onClick={toggleClass}
//                       to={`/projects`}
//                     >
//                       Projects
//                     </NavLink>
//                   </li>

//                   <li
//                     onClick={toggleSubMenu}
//                     className="menu-item sub__menus__arrows"
//                   >
//                     <Link to="#">
//                       Activities <BiChevronDown />
//                     </Link>
//                     <ul className={boxClassSubMenu.join(" ")}>
//                       <li>
//                         <NavLink
//                           activeClassName="is-active"
//                           onClick={toggleClass}
//                           to={`/activities/computer`}
//                         >
//                           Computer
//                         </NavLink>
//                         <NavLink
//                           activeClassName="is-active"
//                           onClick={toggleClass}
//                           to={`/activities/volunteer`}
//                         >
//                           Volunteer
//                         </NavLink>
//                         <NavLink
//                           activeClassName="is-active"
//                           onClick={toggleClass}
//                           to={`/activities/others`}
//                         >
//                           Others
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="menu-item">
//                     <NavLink
//                       activeClassName="is-active"
//                       onClick={toggleClass}
//                       to={`/hobbies`}
//                     >
//                       Hobbies
//                     </NavLink>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
