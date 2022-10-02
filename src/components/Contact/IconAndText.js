import React from "react";
import * as style from "./Contact.module.css";
import { className } from "../../helpers";

function IconAndText({ text, icon }) {
  return (
    <div {...className(style.iconAndText)}>
      <div {...className(style.iconCon)}>{icon}</div>
      <span>{text}</span>
    </div>
  );
}

export default IconAndText;
