import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import "./Form.css";
import RandomNumberBtn from "../components/RandomNumberBtn";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Form() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productList, setProductList] = useState([]);
  const [productDesc, setProductDesc] = useState("");
  const productImg = useRef(null);
  const imageRef = useRef(null);

  const handleProductName = (event) => {
    setProductName(event.target.value);
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(event.target.value)) {
      Swal.fire("Name must not include number or symbol");
    }
  };

  const handleProductCategory = (event) => {
    setProductCategory(event.target.value);
    const regex = /^\s*$/;
    if (!regex.test(productCategory)) {
      Swal.fire("Category is required");
    }
  };

  const handleProductFreshness = (event) => {
    setProductFreshness(event.target.value);
    const regex = /^\s*$/;
    // if (!regex.test(productFreshness)) {
    //   Swal.fire("this field is required");
    // }
  };

  const handleProductPrice = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductDesc = (event) => {
    setProductDesc(event.target.value);
  };

  const handleProductImg = (event) => {
    const files = event.target.files[0];
    const regex = new RegExp(/^.+\.(jpg|jpeg|png)$/i);
    if (!regex.test(files.name)) {
      Swal.fire("file must be in image format");
    }
  };

  const checkValid = () => {
    if (
      productName === "" ||
      productCategory === "" ||
      productFreshness === "" ||
      productPrice === ""
    ) {
      return false;
    }
    return true;
  };

  const handleOnSubmit = (data) => {
    data.preventDefault(0);
    if (!checkValid()) {
      Swal.fire("all inputs are required");
    } else {
      // imageRef.current.src = URL.createObjectURL(productImg.current.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
        imageRef.current.src = e.target.result;
      };
      reader.readAsDataURL(productImg.current.files[0]);
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
    }
  };

  const handleDeleteProduct = (e, product) => {
    Swal.fire({
      title: `Are you sure delete ${product.productName} ?`,
      showDenyButton: true,
      confirmButtonText: "Yeah sure",
      denyButtonText: `No, let me think`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`${product.productName} deleted`, "", "success");
        const newList = [...productList];
        newList.splice(e, 1);
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
      <form
        className="containerForm"
        id="productForm"
        onSubmit={handleOnSubmit}
      >
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
            data-testid="productName"
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
        <label htmlFor="">Image of Product : </label>
        <br />
        <div className="input mb-3">
          <input
            type="file"
            className="form-control form-edit"
            id="productImage"
            ref={productImg}
            onChange={handleProductImg}
          />
        </div>

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
        <label className="mt-3" htmlFor="">
          Additional Description
        </label>
        <br />
        <div className="form mb-3">
          <textarea
            className="form-control"
            id="productDesc"
            style={{ height: 100 }}
            value={productDesc}
            onChange={handleProductDesc}
          />
        </div>
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
          <button
            type="submit"
            className="btn btn-primary"
            data-testid="formSubmit"
          >
            Add Product
          </button>
        </div>

        <RandomNumberBtn />
      </form>
      <h3 className="text-center mt-5">List Product</h3>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Freshness</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={product.id}>
              <td>{parseInt(product.id.split("-")[0], 16) % 10000}</td>
              <td data-testid="productNameCol">{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
              <td>
                <img src="" width={100} ref={imageRef} />
              </td>
              <td className="d-flex gap-2">
                <button type="button" className="btn-edit">
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
