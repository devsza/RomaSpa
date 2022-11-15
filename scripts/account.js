const userLogOut = document.querySelector('#logout'); // account page, logout button
const allTabButtons = document.querySelectorAll('.tabs button'); // account page, all tab buttons
const payButton = document.querySelector('#pay'); // account page, pay button
const reserveTreatment = document.querySelector('#reserve-treatment'); // account page, reserve button
const selectedProducts = document.querySelector(".selected-products"); // account block, product section

// retrieve user signed-up
let retrieveUserInfo = localStorage.getItem('user'); // format string
let user = JSON.parse(retrieveUserInfo);// format objet

// personalized welcome message  
document.querySelector("h2").innerText = `Bienvenue ${user.userFirstName}!`; // welcome message

// update user cart information
function updateCart(){
    if((user.userCart.length) === 0){
        buttonPlaceHolder();
    } else {
        selectedProductList(user.userCart);
    }
}

// update user cart when page refreshed
updateCart();

// user logging out
userLogOut.addEventListener("click", logOut =>{
    user.loggedIn = false;
    localStorage.clear;
    window.location.href = "../pages/log-in.html";
})

// if cart empty, show link to product page
function buttonPlaceHolder(){
    selectedProducts.innerHTML =
    `
    <div class="empty-cart">
        <button id="descover-products"><a href="../pages/products.html">Découvrir nos produits</a></button>
    </div>
    `;
}

// if full, show list of products in cart
function selectedProductList(cart){
    selectedProducts.innerHTML =
    `
    <div class="full-cart">
        <h3>Voici les produits dans votre panier:</h3>
    `;

    cart.forEach(item =>{
        selectedProducts.innerHTML +=
        `
        <div class="items-in-cart">
            <p>${item.name}</p>
            <p>${item.value}€</p>
        </div>
        `;
    })
        
    selectedProducts.innerHTML +=
        `
        <div class="cart-total-account">
            <p>Nombre de produits dans le panier : ${cart.length} </p>
            <p>Prix total : ${user.userCartTotal}€</p>
        </div>
        <button id="pay">Régler</button>
        `;
}


// retrieve product list
let getProductList = localStorage.getItem('products'); // format string
let productList = JSON.parse(getProductList);// format objet
const uniqueProducts = [...new Map(productList.map(item => [item.id, item])).values()]// remove duplicates

// retrieve treatment list
let getTreatmentList = localStorage.getItem('treatments'); // format string
let treatmentList = JSON.parse(getTreatmentList);// format objet
const uniqueTreatments = [...new Map(treatmentList.map(item => [item.treatmentCategory, item])).values()]// remove duplicates

let treatmentCategory = document.querySelector("#treatment-category");// retrieve treatment category dropdown menu in modal
let treatType = document.querySelector("#treatment");// retrieve treatment dropdown menu in modal

// add unique categories (no duplicates) to dropdown menu
treatmentCategory.innerHTML =
    `
    <option></option>
    `;

uniqueTreatments.forEach(element =>{
    treatmentCategory.innerHTML +=
    `
    <option value="${element.treatmentCategory}">${element.treatmentCategory}</option>
    `;
})

// retrieve selected category
function update() {
    const option = treatmentCategory.options[treatmentCategory.selectedIndex].value; // selected category
    const selectedCat = treatmentList.filter(item => item["treatmentCategory"] === option);
    console.log(selectedCat);
   
    
        treatType.innerHTML =
        `
        <option></option>
        `;
    
    selectedCat.forEach(element =>{
        treatType.innerHTML +=
        `
        <option value="${element.treatmentName}">${element.treatmentName}</option>
        `;
    })
}




let treatmentDate = document.querySelector('#treatment-date');
let treatmentTime = document.querySelector('#treatment-timeframe');
let treatment = document.querySelector('#treatment');
let resetBtn = document.querySelector('#reset');
let submitBtn = document.querySelector('#submit');
const container = document.querySelector(".container");
const modal = document.querySelector(".myModal");
const span = document.getElementsByClassName("close")[0];
let messageSent = document.querySelector(".message-sent");

/**
 * ---------------------------
 * MODAL
 * --------------------------
* */
reserveTreatment.addEventListener("click", openModal =>{
    container.style.display = "block";
})

const hideModal = () => {
    container.style.display = "none";
}
const hideModalFromWindow = (event) => {
    if (event.target == container) {
        container.style.display = "none";
    }
}

submitBtn.addEventListener("click", () =>{
    container.style.display = "none";
})

span.addEventListener("click", hideModal)
// Si on clique n'importe où sur la page
window.addEventListener("click", hideModalFromWindow)


