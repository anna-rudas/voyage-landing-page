import React from "react";
import style from "./Testimonials.module.css";
import shared from "../shared.module.css";
import { className } from "../../helpers";

function TestimonialCard({ name, testimony, profession, image }) {
  return (
    <div {...className(style.testimonialCard, shared.card)}>
      <div {...className(style.partCard)}>
        <img src={image} alt="" />
        <p>{testimony}</p>
      </div>
      <div {...className(style.partCard, style.bottom)}>
        <span {...className(shared.cardMain)}>{name}</span>
        <span {...className(shared.secondaryDark)}>{profession}</span>
      </div>
    </div>
  );
}

export default TestimonialCard;
