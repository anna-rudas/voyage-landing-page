import React from "react";
import { className } from "../../helpers";
import shared from "../shared.module.css";

function Column({ columnArray }) {
  return (
    <div {...className(shared.column)}>
      {columnArray.map((currentImage) => {
        return (
          <a
            target="_blank"
            rel="noreferrer"
            href={currentImage.credit}
            {...className(shared.imgs)}
            key={currentImage.src}
          >
            <img src={currentImage.src} alt="" />
          </a>
        );
      })}
    </div>
  );
}

export default Column;
