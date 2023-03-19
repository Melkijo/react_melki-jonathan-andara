export default function ProductFresh() {
  return (
    <>
      <label htmlFor="">Product Freshness : </label>
      <br />
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          defaultValue="Brand New"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {" "}
          Brand New{" "}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          defaultValue="Second Hand"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          {" "}
          Second Hand{" "}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          defaultValue="Refurbished"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          {" "}
          Refurbished{" "}
        </label>
      </div>
    </>
  );
}
