export default function ProductPrice() {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Product Price
      </label>
      <input
        type="number"
        className="form-control"
        id="productPrice"
        placeholder="$1"
        defaultValue=""
      />
    </div>
  );
}
