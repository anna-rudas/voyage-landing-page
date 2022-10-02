import React from "react";
import * as style from "./Contact.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";

function Map() {
  return (
    <div {...className(style.mapCon, shared.lightShadow)}>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.752751770252!2d13.408728755378013!3d52.51981346196431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e21d1e7da37%3A0x47fd591cdad2e587!2sRathausstra%C3%9Fe%205%2C%2010178%20Berlin!5e0!3m2!1sen!2sde!4v1658915083013!5m2!1sen!2sde"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
