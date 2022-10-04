import React from "react";
import * as style from "./Destinations.module.css";
import { className } from "../../helpers";
import * as shared from "../shared.module.css";
import StarIcon from "../../icons/StarIcon";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function DestinationCard({ source, duration, location, reviews }) {
  return (
    <a href="#destinations" {...className(style.destCard, shared.card)}>
      <LazyLoadImage
        src={source}
        alt=""
        effect="blur"
        {...className(style.destCardImg)}
      />
      <span {...className(shared.textSecondaryLight, style.textSecondaryLight)}>
        {duration} day trip
      </span>
      <span {...className(shared.titlePrimary, style.titlePrimary)}>
        {location}
      </span>
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
