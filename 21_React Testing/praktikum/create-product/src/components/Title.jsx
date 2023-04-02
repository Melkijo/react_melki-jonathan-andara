import { useState } from "react";
import bootstrapLogo from "../assets/bootstrapLogo.png";
import article from "../articleData";
export default function Title() {
  const newArticle = article;
  const [language, setlanguage] = useState({
    title: newArticle.title.id,
    desc: newArticle.description.id,
  });

  function changeToEnglish() {
    setlanguage({
      ...language,
      title: newArticle.title.en,
      desc: newArticle.description.en,
    });
  }

  function changeToIndo() {
    setlanguage({
      ...language,
      title: newArticle.title.id,
      desc: newArticle.description.id,
    });
  }

  return (
    <>
      <div className="container d-flex flex-column align-items-center w-50 mt-5">
        <img
          src={bootstrapLogo}
          alt=""
          className="img-fluid"
          style={{ maxWidth: "100%" }}
        />
        <h1>{language.title}</h1>
        <p>{language.desc}</p>
        <div className="d-flex gap-2">
          <input
            type="radio"
            className="btn-check"
            name="options"
            id="option1"
            autoComplete="off"
            defaultChecked
            onClick={changeToIndo}
          />
          <label className="btn btn-secondary" htmlFor="option1">
            Indonesia
          </label>
          <input
            type="radio"
            className="btn-check"
            name="options"
            id="option2"
            autoComplete="off"
            onClick={changeToEnglish}
          />
          <label className="btn btn-secondary" htmlFor="option2">
            English
          </label>
        </div>
      </div>
    </>
  );
}
