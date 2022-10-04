import React from "react";
import * as style from "./Gallery.module.css";
import * as shared from "../shared.module.css";
import { className, sliceArray } from "../../helpers";
import images from "./Images";
import Column from "./Column";

const columns = sliceArray(images, 4);
const columnsPart = sliceArray(columns, 2);

function Gallery() {
  return (
    <section id="gallery" {...className(shared.section)}>
      <span {...className(shared.sectionName)}>Gallery</span>
      <h2 {...className(shared.sectionTitle)}>What other people shared</h2>
      <div {...className(shared.galleryCon, style.galleryCon)}>
        {columnsPart.map((currentPart, indexPart) => {
          return (
            <div {...className(shared.galleryPart)} key={indexPart}>
              {currentPart.map((currentCol, indexCol) => (
                <Column columnArray={currentCol} key={indexCol} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
