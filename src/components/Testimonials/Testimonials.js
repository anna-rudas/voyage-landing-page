import React from "react";
import * as style from "./Testimonials.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import TestimonialCard from "./TestimonialCard";
import { testimonies } from "../../constants";

function Testimonials() {
  return (
    <section {...className(style.testimonials)}>
      <span {...className(shared.sectionName)}>Testimonials</span>
      <h2 {...className(shared.sectionTitle)}>Our clients say</h2>
      <div {...className(shared.cardsCon, style.cardsCon)}>
        {testimonies.map((currentTest) => {
          return <TestimonialCard {...currentTest} key={currentTest.name} />;
        })}
      </div>
      <button {...className(shared.btnBook, shared.btnBody)}>Book now</button>
    </section>
  );
}

export default Testimonials;
