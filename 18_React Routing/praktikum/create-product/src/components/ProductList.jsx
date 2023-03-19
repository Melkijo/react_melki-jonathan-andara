export default function ProductList() {
  return (
    <>
      <h3 className="text-center mt-5">List Product</h3>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Freshness</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="product-list" id="productItems"></tbody>
      </table>
    </>
  );
}
