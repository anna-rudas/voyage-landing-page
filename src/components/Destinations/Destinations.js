import React from "react";
import * as style from "./Destinations.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import DestinationCard from "./DestinationCard";
import { destinations } from "../../constants";

function Destinations() {
  return (
    <section id="destinations" {...className(style.destinations)}>
      <span {...className(shared.sectionName)}>Destinations</span>
      <h2 {...className(shared.sectionTitle)}>Popular right now</h2>
      <div {...className(shared.cardsCon)}>
        {destinations.map((currentDest) => {
          return (
            <DestinationCard {...currentDest} key={currentDest.location} />
          );
        })}
      </div>
      <div {...className(style.viewCon)}>
        <div {...className(style.viewMore)}>
          <a href="#destinations">View more</a>
        </div>
      </div>
      <button {...className(shared.btnBook, shared.btnBody)}>Book now</button>
    </section>
  );
}

export default Destinations;
