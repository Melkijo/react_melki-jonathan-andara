import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import ProductImage from "../components/ProductImage";
import ProductDesc from "../components/productDesc";
import "./Form.css";
import RandomNumberBtn from "../components/RandomNumberBtn";
import { v4 as uuidv4 } from "uuid";
// import "./FormFunc";

import { useState } from "react";

export default function Form() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productList, setProductList] = useState([]);

  const handleProductName = (event) => {
    setProductName(event.target.value);
  };

  const handleProductCategory = (event) => {
    setProductCategory(event.target.value);
  };

  const handleProductFreshness = (event) => {
    setProductFreshness(event.target.value);
  };

  const handleProductPrice = (event) => {
    setProductPrice(event.target.value);
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: uuidv4(),
      productName: productName,
      productCategory: productCategory,
      productFreshness: productFreshness,
      productPrice: productPrice,
    };

    setProductList([...productList, newProduct]);

    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
  };

  const handleDeleteProduct = (product) => {
    Swal.fire({
      title: `Are you sure delete ${product.productName} ?`,
      showDenyButton: true,
      confirmButtonText: "Yeah sure",
      denyButtonText: `No, let me think`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`${product.productName} deleted`, "", "success");
        const newList = [...productList];
        newList.splice(product.id, 1);
        setProductList(newList);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  useEffect(() => {
    Swal.fire("Welcome to Create Product");
  }, []);

  return (
    <>
      <Navbar />
      <Title />
      <div className="containerForm" id="productForm">
        <h3>Product Detail</h3>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="product name"
            value={productName}
            onChange={handleProductName}
          />
        </div>
        <label htmlFor="">Product Category : </label>
        <br />
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          id="productCategory"
          value={productCategory}
          onChange={handleProductCategory}
        >
          <option value="">Choose</option>
          <option value="One">One</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
        </select>
        <ProductImage />

        <label htmlFor="">Product Freshness : </label>
        <br />
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value="Brand New"
            checked={productFreshness === "Brand New"}
            onChange={handleProductFreshness}
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
            value="Second Hand"
            checked={productFreshness === "Second Hand"}
            onChange={handleProductFreshness}
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
            value="Refurbished"
            checked={productFreshness === "Refurbished"}
            onChange={handleProductFreshness}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            {" "}
            Refurbished{" "}
          </label>
        </div>
        <ProductDesc />
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            value={productPrice}
            onChange={handleProductPrice}
          />
        </div>
        <div className="d-grid mt-5">
          <button className="btn btn-primary" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>

        <RandomNumberBtn />
      </div>
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
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td>{parseInt(product.id.split("-")[0], 16) % 10000}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
              <td className="d-flex gap-2">
                <button type="button" className="btn-edit">
                  Edit
                </button>
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => handleDeleteProduct(product)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
