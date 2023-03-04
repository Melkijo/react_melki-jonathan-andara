

const submitBtn = document.getElementById("submitBtn");

function checkInputs(isFilled) {
    if (isFilled !== "") {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

const productName = document.getElementById("productName");
productName.addEventListener("input", function (event) {
    checkInputs(event.target.value);

    let regex = /^[^@#{}]*$/;
    if (event.target.value.length > 10) {
        alert("Last Name must not exceed 25 characters.");
    }
    if (!regex.test(event.target.value)) {
        alert("Name must not contain symbols.");
    }
})







const productForm = document.getElementById("productForm");
productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");
    const productFreshness = document.querySelector('input[name="flexRadioDefault"]:checked');
    const productImage = document.getElementById("productImage");
    const productCategory = document.getElementById("productCategory");
    const productDesc = document.getElementById("productDesc");

    const arrProduct = [productName.value, productCategory.value, productFreshness.value, productImage.files[0].name , productDesc.value, productPrice.value];
    const arrProductName = ["Product Name", "Product Category" , "Product Freshness", "Product Image", "Product Description","Product Price"];
    let tempProduct = "";
    let emptyProduct = "";
    let validateProduct = true;
    for (let i = 0; i < arrProduct.length; i++) {
        if (arrProduct[i] === '') {
            validateProduct = false;
            emptyProduct = emptyProduct + arrProductName[i] + ", ";
        }
        tempProduct = tempProduct + arrProductName[i] + " = " + arrProduct[i] + ", ";
    }

    if (validateProduct === true) {
        alert("The product has been successfully entered : " + tempProduct);
    } else {
        alert("The " + emptyProduct + "field must be filled in")

    }

    // prioritas 1 nomer 3
    // if((productName === '') || (productPrice === '')){
    //     alert("Please enter a valid Product name.");
    // }

})


