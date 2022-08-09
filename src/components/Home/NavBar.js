import React, { useState } from "react";
import style from "./Home.module.css";
import shared from "../shared.module.css";
import { className } from "../../helpers";
import HamburgerIcon from "../../icons/HamburgerIcon";

const menuItems = [
  "Home",
  "Destinations",
  "Services",
  "Gallery",
  "About us",
  "Contact",
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav {...className(style.nav)}>
      <div {...className(isMenuOpen && style.triangle)}></div>
      <ul
        {...className(
          shared.navList,
          style.menu,
          isMenuOpen && style.mobileMenu
        )}
      >
        {menuItems.map((currentItem) => {
          return (
            <li key={currentItem}>
              <a
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                href={`#${currentItem.split(" ")[0].toLowerCase()}`}
              >
                {currentItem}
              </a>
            </li>
          );
        })}
      </ul>
      <HamburgerIcon
        {...className(style.hamburgerIcon)}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
    </nav>
  );
}

export default NavBar;
