import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import ProductImage from "../components/ProductImage";
import ProductDesc from "../components/productDesc";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

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

  const freshness = ["Brand New", "Second Hand", "Refurbished"];
  const category = ["one", "two", "three"];

  function fillProduct(products) {
    products.forEach((product) => {
      product.fresh = freshness[Math.floor(Math.random() * 3)];
      product.category = category[Math.floor(Math.random() * 3)];
    });
    return products;
  }

  let urlApi = "https://642c0a47208dfe2547263d12.mockapi.io//products";

  useEffect(() => {
    axios({
      method: "get",
      url: urlApi,
    })
      .then((products) => setProductList(fillProduct(products.data)))

      .catch((error) => console.error(error));
  }, []);

  const handleAddProduct = () => {
    const newProduct = {
      id: uuidv4(),
      name: productName,
      category: productCategory,
      fresh: productFreshness,
      price: productPrice,
    };

    axios({
      method: "post",
      url: urlApi,
      data: {
        name: productName,
        category: productCategory,
        fresh: productFreshness,
        price: productPrice,
      },
    });

    Swal.fire(`${productName} added in mockApi`, "", "success");
    setProductList([...productList, newProduct]);

    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
  };

  const handleDeleteProduct = (index, product) => {
    Swal.fire({
      title: `Are you sure delete ${product.name} ?`,
      showDenyButton: true,
      confirmButtonText: "Yeah sure",
      denyButtonText: `No, let me think`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`${product.name} deleted in mockApi`, "", "success");

        axios({
          method: "delete",
          url: `${urlApi}/${product.id}`,
        });

        const newList = [...productList];
        newList.splice(index, 1);
        setProductList(newList);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const handleEditProduct = async (product) => {
    const { value: newProductName } = await Swal.fire({
      title: `Edit Name`,
      input: "text",
      showDenyButton: true,
      confirmButtonText: "Update",
      denyButtonText: `Cancel`,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });
    if (newProductName) {
      Swal.fire(`Product updated`, "", "success");

      axios({
        method: "put",
        url: `${urlApi}/${product.id}`,
        data: {
          name: newProductName,
        },
      });

      const newProductList = productList.map((item) => {
        if (item.id === product.id) {
          return { ...item, name: newProductName };
        } else {
          return item;
        }
      });
      setProductList(newProductList);
    }
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
          {productList.map((product, index) => (
            <tr key={product.id}>
              <td>{index}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.fresh}</td>
              <td>{product.price}</td>
              <td className="d-flex gap-2">
                <button
                  type="button"
                  className="btn-edit"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => handleDeleteProduct(index, product)}
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
