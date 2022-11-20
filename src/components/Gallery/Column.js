import React from "react";
import * as style from "./Gallery.module.css";
import { className } from "../../helpers";
import * as shared from "../shared.module.css";
import Image from "next/image";

function Column({ columnArray }) {
  return (
    <div {...className(shared.column)}>
      {columnArray.map((currentImage) => {
        return (
          <a
            href="#gallery"
            {...className(shared.imgs)}
            key={currentImage.credit}
          >
            <Image src={currentImage.src} alt="" key={currentImage.credit} />
            <div {...className(style.credit)} key={style.credit}>
              {currentImage.credit}
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Column;
