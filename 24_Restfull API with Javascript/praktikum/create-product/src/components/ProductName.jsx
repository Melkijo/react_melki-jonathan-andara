import { useState } from "react";

export default function ProductName() {
  const [name, setName] = useState("");

  const checkValid = (e) => {
    setName(e.target.value);
    if (name.length > 10) {
      alert("Nama produk tidak boleh lebih dari 10 karakter");
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor="productName" className="form-label">
        Product Name
      </label>
      <input
        type="text"
        className="form-control"
        id="productName"
        name="product name"
        value={name}
        onChange={(e) => {
          checkValid(e);
        }}
      />
    </div>
  );
}
