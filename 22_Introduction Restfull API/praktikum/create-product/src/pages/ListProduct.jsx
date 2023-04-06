import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
export default function ListProduct() {
  const [products, setProducts] = useState([]);
  //   const axios = require("axios");

  const freshness = ["one", "two", "three"];
  function fillProduct(products) {
    products.forEach((product) => {
      product.fresh = freshness;
    });
    return products;
  }

  let urlApi = "https://642c0a47208dfe2547263d12.mockapi.io//products";

  useEffect(() => {
    axios({
      method: "get",
      url: urlApi,
    })
      // .then((products) => console.log(products.data))
      .then((products) => setProducts(fillProduct(products.data)))
      .catch((error) => console.error(error));
  }, []);

  //   useEffect(() => {
  //     fetch("https://642c0a47208dfe2547263d12.mockapi.io//products")
  //       .then((response) => response.json())
  //       .then((products) => setProducts(fillProduct(products)))
  //       .catch((error) => console.error(error));
  //   }, []);

  return (
    <>
      <h1 className="text-center">List Product</h1>
      <Table striped bordered hover variant="dark" className="container">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Freshness</th>
            <th>Price</th>
            {/* <th>Image</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.fresh[Math.floor(Math.random() * 3)]}</td>
              <td>{product.price}</td>
              {/* <td>
                <img src={product.image} alt="" width={100} height={100} />{" "}
              </td> */}

              <td className="d-flex gap-2">
                <Button variant="warning">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
