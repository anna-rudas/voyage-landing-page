import React, { useState } from "react";
import style from "./Newsletter.module.css";
import shared from "../shared.module.css";
import { className } from "../../helpers";
import { emailRegex } from "../../constants";
import CheckIcon from "../../icons/CheckIcon";

function Newsletter() {
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [isBtnPressed, setIsBtnPressed] = useState(false);

  const checkEmail = (event) => {
    if (event.target.value !== "" && !emailRegex.test(event.target.value)) {
      setError("Whoops, make sure it's an email");
    } else {
      setError("");
    }
  };

  const inputChange = (event) => {
    checkEmail(event);
    setEmailInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error === "" && emailInput != "") {
      setEmailInput("");
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

  return (
    <section {...className(style.newsletter)}>
      <div {...className(style.newsCon)}>
        <div {...className(style.newsPart)}>
          <h2 {...className(style.newsMain)}>Subscribe to our newsletter!</h2>
          <span {...className(style.newsSecondary)}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus odio aliquid rerum, alias ipsa consectetur?
          </span>
        </div>
        <form {...className(style.newsPart)} onSubmit={handleSubmit}>
          <div {...className(style.emailCon)}>
            <label {...className(style.newsSecondary)} htmlFor="news-email">
              Your email address:
            </label>
            <div
              {...className(style.inputCon, error !== "" ? style.errorCon : "")}
            >
              <input
                {...className(shared.inputStyle, style.newsInput)}
                id="news-email"
                type="email"
                maxLength="50"
                value={emailInput}
                onChange={inputChange}
              />
              <div className={style.errorMsg}>{error}</div>
            </div>
          </div>
          <button
            {...className(
              shared.btnBook,
              shared.btnHome,
              isBtnPressed && shared.sentBtn
            )}
            type="submit"
          >
            {isCheck ? <CheckIcon {...className(shared.check)} /> : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
