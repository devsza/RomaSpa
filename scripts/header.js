//hamburger menu - side bar, push html

document.querySelector('header').innerHTML = 
        `

        <!-- header top -->
        <div class="header-top">

        <!-- 3 lines of hamburger menu -->
        <div class="header_mobile" onclick="toggleMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>

        <!-- side bar closing X -->
        <nav class="nav-mobile">
            <div class="nav-mobile_close" onclick="toggleMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            
            <!-- side bar menu list -->
            <div class="menu_a">
                <ul class="nav-mobile_menu">
                    <li><a href="../pages/index.html">Accueil</a></li>
                    <li><a href="../pages/treatments.html">Soins</a></li>
                    <li><a href="../pages/products.html">Produits</a></li>
                    <li><a href="../pages/gallery.html">Galerie</a></li>
                    <li><a href="../pages/contact.html">Contact</a></li>
                </ul>
            </div>
        </nav> 
            
        <!-- makes closing x disappear -->
        <div class="mobile-overlay" onclick="toggleMenu()"></div>

        <!--logo-->
        <div id = "div_logo_romaheader">
            <img src="../assets/images/logos/logowhite.png" alt="logo Roma SPA" id="logo_romaheader">
            
            <!--line under the logo-->
            <div id="div_border_line" ></div>
        </div>

        <!-- user icon -->
        <div class = "icon_header">
            <input type="image" src="../assets/images/icons/user_profil.png" id="user_profil">

            <!-- cart icon -->
            <input type="image" src="../assets/images/icons/buy_list.png" class="buy_list">
            <div class="divShoppingList exit"><p id="productsSelected"></p></div>    
        </div>

        </div> <!-- end header top -->

        <div class="header-bottom">
        <!-- page title -->
        <div class="title-header">
            <h1>Spa ROMA</h1>
            <h2>Spa de Luxe</h2>
        </div>
        </div>
      
`;

//Menu Burger
function toggleMenu() {
    const navMobile = document.querySelector('.nav-mobile');
    const mobileOverlay = document.querySelector('.mobile-overlay');  

    if(navMobile.classList.contains('active')) {
        navMobile.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.querySelector("svg").style.color ="white";

    } else {
        navMobile.classList.add('active');
        mobileOverlay.classList.add('active');
        document.querySelector("svg").style.color = "transparent";
    } 
}

// user profile icon
const iconUserProfile = document.querySelector("#user_profil");

//Shoppingiconlist
const divShoppingList = document.querySelector('.divShoppingList'); // rectangle
const iconShoppingList = document.querySelector('.buy_list'); // cart icon
const exitDiv = document.createElement("div"); // create transparent div to exit cart
const exitSpace = document.querySelector(".icon_header"); // apply exitDiv here

// retrieve user signed-up
let retrieveUserInfo = localStorage.getItem('user'); // format string
let user = JSON.parse(retrieveUserInfo);// format objet

// add transparent div to control cart menu exit
exitSpace.appendChild(exitDiv);
exitDiv.classList.add("exit-div");
    

// when user clicks on user profile icon, if logged in => account
// else => log in page
iconUserProfile.addEventListener("click", isValid =>{
    if(user.loggedIn){
        window.location.href = "../pages/account.html";
    } else { 
        window.location.href = "../pages/log-in.html";
    }
})

let show = [];

// mouse over cart icon
iconShoppingList.addEventListener("mouseover",function(){
    
    divShoppingList.classList.add("show");
    exitDiv.classList.add("show");

    // rectangle containing cart items
    divShoppingList.style.cssText =
    `
    display:block;
    margin-left:-160px;
    `;

    exitDiv.style.cssText = 
    `
    display:block;
    `;
        
    show = document.querySelectorAll(".show");
    leave();

},true);

// mouse exit div transparent and cart
function leave(){
show.forEach(element =>{
    element.addEventListener("mouseleave",function(){
         element.style.cssText = "none";  
         element.classList.remove("show");
    });  
})
}

iconShoppingList.addEventListener("mouseover", isValid =>{
    if(user.loggedIn){
        updateCart();
    } else { 
        notLoggedIn();
    }
})
  
// update user cart information
function notLoggedIn(){

    // rectangle containing cart items
    divShoppingList.style.cssText =
    `
    display:block;
    margin-left:0px;
    `;

    divShoppingList.innerHTML = 
        `
        <a href="../pages/log-in.html">
        <button class="not-logged-in">Se connecter</button>
        </a>
        `
        ;       
}

// update user cart information
function updateCart(){
    divShoppingList.innerHTML = 
        `
        <h2> Bienvenue ${user.userFirstName}! </h2>
        `
        ;
        
    if((user.userCart.length) === 0){
        emptyCart();
    } else {
        selectedProductList(user.userCart);
    }
}

// if cart empty, show link to product page
function emptyCart(){
    divShoppingList.innerHTML +=
    `
    <div class="empty-cart">
        <p>Votre panier est vide.</p>
    </div>
    `;
}

// if full, show list of products in cart
function selectedProductList(cart){
    divShoppingList.innerHTML +=
    `
    <div class="full-cart">
        <h3>Voici les produits dans votre panier:</h3>
    `;

    cart.forEach(item =>{
        divShoppingList.innerHTML +=
        `
        <div class="items-in-cart">
            <p>${item.name}</p>
            <p>${item.value}€</p>
        </div>
        `;
    })
        
    divShoppingList.innerHTML +=
        `
        <div class="cart-total">
            <p>Prix total : ${user.userCartTotal}€</p>
            <button id="pay">Régler</button>
        </div>
        `;
}