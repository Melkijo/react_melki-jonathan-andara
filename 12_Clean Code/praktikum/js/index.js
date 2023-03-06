const submitBtn = document.getElementById("submitBtn");
function checkInputs(isFilled) {
    if (isFilled !== "") {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

const productName = document.getElementById("productName");
productName.addEventListener("input", function (e) {
    checkInputs(e.target.value);

    let regex = /^[^@#{}]*$/;
    if (e.target.value.length > 10) { //Mengecek panjang tulisan yang diinput
        alert("Last Name must not exceed 25 characters.");
    }
    if (!regex.test(e.target.value)) { //mengecek tulisan pada input jika memiliki symbol
        alert("Name must not contain symbols.");
    }
})



 let allProduct = [];
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

    const newProduct = {
        productName: productName.value,
        productCategory: productCategory.value,
        productImage: productImage.files[0].name,
        productFreshness: productFreshness.value,
        productDesc:  productDesc.value,
        productPrice: productPrice.value
    }
    
    for (let i = 0; i < arrProduct.length; i++) {
        if (arrProduct[i] === '') {
            validateProduct = false;
            emptyProduct = emptyProduct + arrProductName[i] + ", ";
        }
        tempProduct = tempProduct + arrProductName[i] + " = " + arrProduct[i] + ", ";
    }
   
    if (validateProduct === true) {
        alert("The product has been successfully entered : " + tempProduct);
        allProduct.push(newProduct);
        removeProductFromTable();
        inputProductToTable(allProduct);
    } else {
        alert("The " + emptyProduct + "field must be filled in")

    }

    // prioritas 1 nomer 3
    // if((productName === '') || (productPrice === '')){
    //     alert("Please enter a valid Product name.");
    // }

})


function removeProductFromTable(){
    const productTable = document.getElementById("productItems");
    productTable.querySelectorAll('tr').forEach((row) => {
        row.remove();
    });
}

function inputProductToTable(product) {
    const productTable = document.getElementById("productItems");

    for(let i = 0; i<product.length; i++){
        const row = document.createElement("tr");

        const cellNumber = document.createElement("th");
        cellNumber.textContent = i+1;
        cellNumber.setAttribute('scope',"row");
        row.appendChild(cellNumber);

        const cellProductName = document.createElement("td");
        cellProductName.textContent = product[i].productName;
        row.appendChild(cellProductName);

        const cellProductCategory = document.createElement("td");
        cellProductCategory.textContent = product[i].productCategory;
        row.appendChild(cellProductCategory);

        const cellProductImage = document.createElement("td");
        cellProductImage.textContent = product[i].productImage;
        row.appendChild(cellProductImage);

        const cellProductFreshness = document.createElement("td");
        cellProductFreshness.textContent = product[i].productFreshness;
        row.appendChild(cellProductFreshness);

        const cellProductDesc = document.createElement("td");
        cellProductDesc.textContent = product[i].productDesc;
        row.appendChild(cellProductDesc);
        

        const cellProductPrice = document.createElement("td");
        cellProductPrice.textContent = product[i].productPrice;
        row.appendChild(cellProductPrice);
        
        productTable.appendChild(row);
    }
}





