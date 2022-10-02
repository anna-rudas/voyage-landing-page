import React from "react";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import * as style from "./Services.module.css";

function ServiceCard({ service, text, icon }) {
  return (
    <div {...className(shared.card, style.serviceCard)}>
      {icon}
      <span {...className(shared.cardMain, style.cardMain)}>{service}</span>
      <p>{text}</p>
    </div>
  );
}

export default ServiceCard;
