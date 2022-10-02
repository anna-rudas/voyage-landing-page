import React from "react";
import * as style from "./Services.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import ServiceCard from "./ServiceCard";
import { services } from "../../constants";

function Services() {
  return (
    <section id="services" {...className(style.services)}>
      <span {...className(shared.sectionName)}>Services</span>
      <h2 {...className(shared.sectionTitle)}>What we can offer</h2>
      <div {...className(shared.cardsCon, style.cardsCon)}>
        {services.map((currentServ) => {
          return <ServiceCard {...currentServ} key={currentServ.service} />;
        })}
      </div>
      <button {...className(shared.btnBook, shared.btnBody)}>Book now</button>
    </section>
  );
}

export default Services;
