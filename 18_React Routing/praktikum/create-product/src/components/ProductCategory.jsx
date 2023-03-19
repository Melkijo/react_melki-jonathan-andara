import { useState } from "react";

export default function ProductCategory() {
  const [selectedOption, setSelectedOption] = useState("0");

  return (
    <>
      <label htmlFor="">Product Category : </label>
      <br />
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        id="productCategory"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="0">Choose</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
    </>
  );
}
