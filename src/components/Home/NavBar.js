import React, { useEffect, useState } from "react";
import * as style from "./Home.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import HamburgerIcon from "../../icons/HamburgerIcon";
import { menuItems } from "../../constants";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window?.addEventListener("resize", handleResize);
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

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
