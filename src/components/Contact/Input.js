import React from "react";
import style from "./Contact.module.css";
import shared from "../shared.module.css";
import { className } from "../../helpers";

function Input({ id, innerText, formData, setValue }) {
  return (
    <div {...className(style.formInput)}>
      <label htmlFor={id}>{innerText}:</label>
      <input
        {...className(shared.inputStyle)}
        id={id}
        type="text"
        maxLength="50"
        value={formData[id]}
        onChange={(event) => setValue(id, event.target.value)}
      />
    </div>
  );
}

export default Input;
