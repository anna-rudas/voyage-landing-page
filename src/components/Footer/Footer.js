import React from "react";
import style from "./Footer.module.css";
import shared from "../shared.module.css";
import { className } from "../../helpers";
import CompanyIcon from "../../icons/CompanyIcon";
import { socialMediaLinks } from "../../constants";
import { Link } from "react-router-dom";

const menuItems = [
  "Home",
  "Destinations",
  "Services",
  "Gallery",
  "About us",
  "Contact",
];

function Footer() {
  return (
    <footer {...className(style.footer)}>
      <a {...className(shared.companyCon)} href=".">
        <CompanyIcon {...className(shared.companyIcon)} />
        <span {...className(shared.companyName)}>Voyage</span>
      </a>
      <ul {...className(shared.navList, style.navList)}>
        {menuItems.map((currentItem) => {
          return (
            <li key={currentItem}>
              <a href={`#${currentItem.split(" ")[0].toLowerCase()}`}>
                {currentItem}
              </a>
            </li>
          );
        })}
      </ul>
      <Link to="/credits" {...className(style.creditStyle)}>
        Images credit
      </Link>
      <div {...className(style.iconCon)}>
        {socialMediaLinks.map((currentLink) => {
          return (
            <a href="." key={currentLink.name}>
              {currentLink.icon}
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
