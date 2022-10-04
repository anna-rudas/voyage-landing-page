import React from "react";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import * as style from "./Services.module.css";

function ServiceCard({ service, text, icon }) {
  return (
    <div {...className(shared.card, style.serviceCard)}>
      {icon}
      <span {...className(shared.titlePrimary, style.titlePrimary)}>
        {service}
      </span>
      <p {...className(shared.paragraph)}>{text}</p>
    </div>
  );
}

export default ServiceCard;
