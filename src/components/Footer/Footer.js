import React from "react";
import * as style from "./Footer.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import CompanyIcon from "../../icons/CompanyIcon";
import { socialMediaLinks, menuItems } from "../../constants";
import Link from "next/link";

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
      <Link href="/credits" {...className(style.creditStyle)}>
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
