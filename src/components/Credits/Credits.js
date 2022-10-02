import React from "react";
import images from "./Images";
import * as style from "./Credits.module.css";
import { sliceArray, className } from "../../helpers";
import * as shared from "../shared.module.css";
import Column from "./Column";
import { Link } from "react-router-dom";

const columns = sliceArray(images, 7);
const columnsPart = sliceArray(columns, 2);

function Credit() {
  return (
    <section {...className(style.credit)}>
      <span {...className(shared.sectionName)}>Credits</span>
      <h2 {...className(shared.sectionTitle)}>
        Images used in the landing page
      </h2>
      <div {...className(shared.galleryCon, style.galleryCon)}>
        {columnsPart.map((currentPart, index) => {
          return (
            <div {...className(shared.galleryPart)} key={index}>
              {currentPart.map((currentCol, index) => (
                <Column columnArray={currentCol} key={index} />
              ))}
            </div>
          );
        })}
      </div>
      <div {...className(style.backToMain)}>
        <Link to="/">
          <button {...className(shared.btnBook, shared.btnBody, style.btnBack)}>
            Back to the landing page
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Credit;
