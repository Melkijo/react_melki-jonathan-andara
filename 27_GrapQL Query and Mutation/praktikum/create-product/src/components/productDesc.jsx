import { useState } from "react";
export default function ProductDesc() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <label className="mt-3" htmlFor="">
        Additional Description
      </label>
      <br />
      <div className="form mb-3">
        <textarea
          className="form-control"
          id="productDesc"
          style={{ height: 100 }}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
