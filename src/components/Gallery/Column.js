import React from "react";
import style from "./Gallery.module.css";
import { className } from "../../helpers";
import shared from "../shared.module.css";

function Column({ columnArray }) {
  return (
    <div {...className(shared.column)}>
      {columnArray.map((currentImage) => {
        return (
          <a href="#gallery" {...className(shared.imgs)} key={currentImage.src}>
            <img src={currentImage.src} alt="" />
            <div {...className(style.credit)}>{currentImage.credit}</div>
          </a>
        );
      })}
    </div>
  );
}

export default Column;
