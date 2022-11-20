import React from "react";
import * as style from "./Testimonials.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import Image from "next/image";

function TestimonialCard({ name, testimony, profession, image }) {
  return (
    <div {...className(style.testimonialCard, shared.card)}>
      <div {...className(style.partCard)}>
        <Image src={image} alt="" />
        <p {...className(shared.paragraph)}>{testimony}</p>
      </div>
      <div {...className(style.partCard, style.bottom)}>
        <span {...className(shared.titlePrimary)}>{name}</span>
        <span {...className(shared.textSecondaryDark)}>{profession}</span>
      </div>
    </div>
  );
}

export default TestimonialCard;
