import React from "react";
import * as style from "./Gallery.module.css";
import { className } from "../../helpers";
import * as shared from "../shared.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Column({ columnArray }) {
  return (
    <div {...className(shared.column)}>
      {columnArray.map((currentImage) => {
        return (
          <a href="#gallery" {...className(shared.imgs)} key={currentImage.src}>
            <LazyLoadImage
              src={currentImage.src}
              alt=""
              key={currentImage.src}
              effect="blur"
            />
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
