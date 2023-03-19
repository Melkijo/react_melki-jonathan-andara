export default function ProductImage() {
  return (
    <>
      <label htmlFor="">Image of Product : </label>
      <br />
      <div className="input mb-3">
        <input
          type="file"
          className="form-control form-edit"
          id="productImage"
          defaultValue=""
        />
      </div>
    </>
  );
}
