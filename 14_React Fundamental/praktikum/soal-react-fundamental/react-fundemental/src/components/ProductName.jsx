export default function ProductName() {
  return (
    <div className="mb-3">
      <label htmlFor="productName" className="form-label">
        Product Name
      </label>
      <input
        type="text"
        className="form-control"
        id="productName"
        defaultValue=""
        name="product name"
      />
    </div>
  );
}
