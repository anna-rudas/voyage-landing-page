import React, { useState } from "react";
import Input from "./Input";
import * as style from "./Contact.module.css";
import * as shared from "../shared.module.css";
import { className } from "../../helpers";
import CheckIcon from "../../icons/CheckIcon";
import { emptyFormData, inputs } from "../../constants";

function Form() {
  const [formData, setFormData] = useState(emptyFormData);
  const [isCheck, setIsCheck] = useState(false);
  const [isBtnPressed, setIsBtnPressed] = useState(false);

  const setFormValue = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.name != "" &&
      formData.email != "" &&
      formData.phone != "" &&
      formData.subject != "" &&
      formData.text != ""
    ) {
      clearForm();
      setIsBtnPressed(true);
      setTimeout(() => {
        setIsCheck(true);
      }, 200);
      setTimeout(() => {
        setIsCheck(false);
        setIsBtnPressed(false);
      }, 1100);
    }
  };

  const clearForm = () => {
    setFormData(emptyFormData);
  };

  return (
    <div {...className(style.formCon)}>
      <span {...className(shared.titleSecondary)}>Send us a message!</span>
      <form
        {...className(shared.textSecondaryLight, style.form)}
        onSubmit={handleSubmit}
      >
        <div {...className(style.formInputs)}>
          {inputs.map((currentInput) => {
            return (
              <Input
                {...currentInput}
                formData={formData}
                setValue={setFormValue}
                key={currentInput.id}
              />
            );
          })}
        </div>
        <div {...className(style.formText)}>
          <label htmlFor="text">Your message:</label>
          <textarea
            {...className(shared.inputStyle)}
            id="text"
            cols="30"
            rows="8"
            maxLength="1000"
            value={formData.text}
            onChange={(event) => setFormValue("text", event.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          {...className(
            shared.btn,
            shared.btnBody,
            isBtnPressed && shared.sentBtn
          )}
        >
          {isCheck ? <CheckIcon {...className(shared.check)} /> : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Form;
