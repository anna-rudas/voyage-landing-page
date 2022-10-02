import React from "react";
import * as style from "./Contact.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import { details } from "../../constants";
import IconAndText from "./IconAndText";

function Details() {
  return (
    <div {...className(style.detailsCon)}>
      <span {...className(shared.secondaryTitle)}>Contact Information</span>
      <div {...className(style.details)}>
        {details.map((currentItem) => {
          return <IconAndText key={currentItem.text} {...currentItem} />;
        })}
      </div>
    </div>
  );
}

export default Details;
