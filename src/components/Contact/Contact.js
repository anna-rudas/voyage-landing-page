import React from "react";
import * as style from "./Contact.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import Map from "./Map";
import Form from "./Form";
import Details from "./Details";

function Contact() {
  return (
    <section id="contact" {...className(shared.section)}>
      <span {...className(shared.sectionName)}>Contact</span>
      <h2 {...className(shared.sectionTitle)}>How to get in touch</h2>
      <div {...className(style.contactCon)}>
        <Form />
        <div {...className(style.detailsAndMap)}>
          <Details />
          <Map />
        </div>
      </div>
    </section>
  );
}

export default Contact;
