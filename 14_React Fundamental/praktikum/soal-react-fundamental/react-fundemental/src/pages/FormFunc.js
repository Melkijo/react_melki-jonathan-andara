//Mengecek panjang tulisan yang diinput
function checkInputlength(input) {
    if (input.target.value.length > 10) {
        alert("Last Name must not exceed 25 characters.");
    }
}

//mengecek tulisan pada field input jika memiliki symbol
function checkInputSymbol(input) {
    let regex = /^[^@#{}]*$/;
    if (!regex.test(input.target.value)) {
        alert("Name must not contain symbols.");
    }
}

// Listener untuk mengecek input user pada field product name
const productName = document.getElementById("productName");
productName.addEventListener("input", (e) => {
    checkInputlength(e);
    checkInputSymbol(e);
})

let allProduct = [];
const productPrice = document.getElementById("productPrice");
const productFreshness = document.querySelector('input[name="flexRadioDefault"]:checked');
const productImage = document.getElementById("productImage");
const productCategory = document.getElementById("productCategory");
const productDesc = document.getElementById("productDesc");

//fungsi untuk mengecek input product data pada form untuk dimasukan kedalam table
function checkProductData(productData, productDataInputName) {
    let tempProduct = "";
    let emptyProduct = "";
    let productDataValid = true;
    for (let i = 0; i < productData.length; i++) {
        if (productData[i] === '') {
            productDataValid = false;
            emptyProduct = emptyProduct + productDataInputName[i] + ", ";
        }
        tempProduct = tempProduct + productDataInputName[i] + " = " + productData[i] + ", ";
    }

    const newProduct = {
        productName: productName.value,
        productCategory: productCategory.value,
        productImage: productImage.files[0].name,
        productFreshness: productFreshness.value,
        productDesc: productDesc.value,
        productPrice: productPrice.value
    }
    if (productDataValid === true) {
        alert("The product has been successfully entered : " + tempProduct);
        allProduct.push(newProduct);
        removeProductFromTable();
        inputProductToTable(allProduct);
    } else {
        alert("The " + emptyProduct + "field must be filled in")

    }
}

//fungsi untuk menghapus semua data pada table untuk di re-render
function removeProductFromTable() {
    const productTable = document.getElementById("productItems");
    productTable.querySelectorAll('tr').forEach((row) => {
        row.remove();
    });
}

//fungsi untuk memasukan produck yang sudah valid kedalam table
function inputProductToTable(product) {
    const productTable = document.getElementById("productItems");

    for (let i = 0; i < product.length; i++) {
        const row = document.createElement("tr");

        const cellNumber = document.createElement("th");
        cellNumber.textContent = i + 1;
        cellNumber.setAttribute('scope', "row");
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

// prioritas 1 nomer 3 untuk mengecek field product name dan price
function checkProductNameAndPrice(productName, productPrice) {
    if ((productName === '') || (productPrice === '')) {
        alert("Please enter a valid Product name.");
    }
}

const productForm = document.getElementById("productForm");
productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkProductNameAndPrice(productName, productPrice);

    const productData = [productName.value, productCategory.value, productFreshness.value, productImage.files[0].name, productDesc.value, productPrice.value];
    const productDataTitle = ["Product Name", "Product Category", "Product Freshness", "Product Image", "Product Description", "Product Price"];

    checkProductData(productData, productDataTitle);
})












