import Navbar from "../components/Navbar";
import Title from "../components/Title";
import ProductName from "../components/ProductName";
import ProductCategory from "../components/ProductCategory";
import ProductImage from "../components/ProductImage";
import ProductFresh from "../components/ProductFresh";
import ProductDesc from "../components/productDesc";
import ProductPrice from "../components/ProductPrice";
import BtnSubmit from "../components/BtnSubmit";
import "./Form.css";
import RandomNumberBtn from "../components/RandomNumberBtn";
// import "./FormFunc";

import ProductList from "../components/ProductList";
export default function Form() {
  return (
    <>
      <Navbar />
      <Title />
      <div className="containerForm" id="productForm">
        <h3>Product Detail</h3>
        <ProductName />
        <ProductCategory />
        <ProductImage />
        <ProductFresh />
        <ProductDesc />
        <ProductPrice />
        <BtnSubmit title="submit" />
        <RandomNumberBtn />
      </div>
      <ProductList />
    </>
  );
}
