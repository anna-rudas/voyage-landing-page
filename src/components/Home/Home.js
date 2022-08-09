import React from "react";
import style from "./Home.module.css";
import shared from "../shared.module.css";
import { className } from "../../helpers";
import CompanyIcon from "../../icons/CompanyIcon";
import NavBar from "./NavBar";

function Home() {
  return (
    <section {...className(style.home)} id="home">
      <header {...className(style.header)}>
        <a {...className(shared.companyCon)} href=".">
          <CompanyIcon {...className(shared.companyIcon)} />
          <span {...className(shared.companyName)}>Voyage</span>
        </a>
        <NavBar />
      </header>
      <div {...className(style.hero)}>
        <span {...className(style.heroText)}>Make your dreams a reality</span>
        <h1 {...className(style.heroTitle)}>Plan your vacation with us</h1>
        <button {...className(shared.btnBook, shared.btnHome)}>Book now</button>
      </div>
    </section>
  );
}

export default Home;
