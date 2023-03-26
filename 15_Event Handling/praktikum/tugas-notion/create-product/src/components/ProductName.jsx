import { useState } from "react";
import styles from "./Product.module.css";
export default function ProductName() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const checkValid = (e) => {
    setName(e.target.value);
    if (name.length >= 10) {
      alert("Nama produk tidak boleh lebih dari 10 karakter");
      setError(true);
    } else {
      setError(false);
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
        // style={{ border: error ? "2px red solid" : "2px yellow solid" }}
        value={name}
        onChange={checkValid}
      />
    </div>
  );
}
