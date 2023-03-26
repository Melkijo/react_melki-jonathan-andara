import { useState } from "react";

export default function ProductCategory() {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(false);

  const checkValid = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
    // if (selectedOption === "") {
    //   setError(true);
    // } else {
    //   setError(false);
    // }
  };

  return (
    <>
      <label htmlFor="">Product Category : </label>
      <br />
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        id="productCategory"
        value={selectedOption}
        onChange={checkValid}
        // style={{ border: error ? "2px red solid" : "2px yellow solid" }}
      >
        <option value="">Choose</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
    </>
  );
}
