import React from "react";
import style from "./About.module.css";
import { className } from "../../helpers";

function StatisticBubble({ amount, des }) {
  return (
    <div {...className(style.bubble)}>
      <span {...className(style.bubbleMain)}>{amount}</span>
      <span {...className(style.bubbleText)}>{des}</span>
    </div>
  );
}

export default StatisticBubble;
