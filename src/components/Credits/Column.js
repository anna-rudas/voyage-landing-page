import React from "react";
import { className } from "../../helpers";
import * as shared from "../shared.module.css";
import Image from "next/image";

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
            key={currentImage.credit}
          >
            <Image src={currentImage.src} alt="" />
          </a>
        );
      })}
    </div>
  );
}

export default Column;
