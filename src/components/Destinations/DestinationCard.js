import React from "react";
import style from "./Destinations.module.css";
import { className } from "../../helpers";
import shared from "../shared.module.css";
import StarIcon from "../../icons/StarIcon";

function DestinationCard({ source, duration, location, reviews }) {
  return (
    <a href="#destinations" {...className(style.destCard, shared.card)}>
      <img src={source} alt="" />
      <span {...className(shared.secondaryBright, style.cardSecondary)}>
        {duration} day trip
      </span>
      <span {...className(shared.cardMain, style.cardMain)}>{location}</span>
      <div {...className(style.reviewsCon)}>
        <div {...className(style.starsCon)}>
          <StarIcon {...className(style.starIcon)} />
          <StarIcon {...className(style.starIcon)} />
          <StarIcon {...className(style.starIcon)} />
          <StarIcon {...className(style.starIcon)} />
          <StarIcon {...className(style.starIcon)} />
        </div>
        <div>({reviews})</div>
      </div>
    </a>
  );
}

export default DestinationCard;
