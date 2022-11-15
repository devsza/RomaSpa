// table of all products
let allProducts = [];

// product class
class Product {
    productCategory;
    productImage;
    productName;
    productDescription;
    productPrice;
    productVolume;

    constructor(id, productCategory, image, productName, productDescription, productPrice, productVolume){
    		this.id = id;
        this.productCategory = productCategory;
        this.productImage = image;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productVolume = productVolume;
        allProducts.push(this);
        localStorage.setItem('products', JSON.stringify(allProducts)); // create product list in localStorage
    }
}

// products created through class Product
// the kits
let kitVoyage = new Product(1, "kit", "../assets/images/products/kit-voyage.png", "Collection Rituels de Beauté", ` Partez à la découverte des recettes de beauté ancestrales avec cette collection de 5 incontournables visage et corps. Des formats voyage rassemblés dans une charmante trousse qui ne quittera plus votre sac !`, 35, "15-30");
let kitCorps = new Product(2, "kit", "../assets/images/products/kit-corps.png", "Collection pour le Corps", ` Revivez à la maison l'expérience du Voyage sensoriel® Roma Spa. Des textures sensorielles inédites, des parfums envoûtants…`, 40, "15-30");
let kitVisage = new Product(3, "kit", "../assets/images/products/kit-visage.png", "Collection pour le Visage", ` La recherche Roma Spa a mis au point des solutions naturellement efficaces pour tous les types de peau et chaque besoin spécifique.`, 40, "15-30");
let kitfragrances = new Product(4, "kit", "../assets/images/products/kit-fragrances.png", "Collection de Frangrances", ` Prolongez l'Expérience du Spa chez vous grâce aux parfums uniques de nos Bougies et Huiles Phyto-aromatiques de Bain.`, 40, "15-30");
let kitCadeau = new Product(5, "kit", "../assets/images/products/kit-cadeau.png", "Idées cadeaux", ` Soyez sûr de faire plaisir en offrant des produits Roma Spa : coffrets à thème, collections découverte de produits au format voyage, ...`, 70, "15-30");
// facial products
let visage1 = new Product(6, "visage", "../assets/images/products/visage1.png", "Crème confort intense", ` Crème SOS nourrissante pour peaux sèches et abîmées. S'utilise aussi en masque réparateur de nutrition intense.`, 39, "15-30");
let visage2 = new Product(7, "visage", "../assets/images/products/visage2.png", "Cème lumière sublime", `Cette crème innovante anti-taches s’inspire des secrets de la pharmacopée coréenne pour un teint zéro défaut. Les ingrédients actifs végétaux utilisés dans ce soin permettent de corriger les taches et illuminer le teint pour une peau parfaite et protégée à long terme.`, 50, "15-30");
// body products
let corps1 = new Product(8, "body", "../assets/images/products/corps1.png", "Huile somptueuse de l'orient", ` Huile sèche au parfum intense et enveloppant pour une peau nourrie en profondeur, régénérée et satinée.`, 25, "15-30");
let corps2 = new Product(9, "body", "../assets/images/products/corps2.png", "Baume fondant aux noix tropicales", ` Ce baume hydratant pour le corps à la texture onctueuse laisse la peau satinée et éclatante, profondément nourrie.`, 60, "15-30");
// frangrances
let fragrance1 = new Product(10, "parfum", "../assets/images/products/fragrance1.png", "Huile de douche et bain", ` Cette huile de douche et bain se transforme au contact de l'eau en un voile lacté puis en une mousse onctueuse. La peau est subtilement parfumée de fragrances d'huiles essentielles de Feuilles et Fleurs d'Oranger.`, 55, "15-30");
let fragrance2 = new Product(11, "parfum", "../assets/images/products/fragrance2.png", "Eau de Bengalore", ` Eau Fraîche Aromatique corps, cheveux et oreiller fraîche et relaxante au chaleureux mélange de Cardamome et Vanille.`, 20, "15-30");

// retrieve product list placement
const productList = document.querySelector(".product-list");

// push product(object) to html
for(let i = 0 ; i < allProducts.length ; i ++){
  showProduct(allProducts[i]);
}

// push products to html
function showProduct(product)
{
	productList.innerHTML +=
          `
              <div class="cardProduct">
                  <div class="product">
                 
                      <img src="${product.productImage}" class="imgProduct" />
                      <div class="divDescription"> <p class="descriptionProduct">${product.productDescription}</p></div> 
                      <h4 class="productName">${product.productName}</h4>
                      <p class="volumePrice">${product.productVolume} ml   |   ${product.productPrice} €</p>
                  </div>
                      <button class="button-buy" id="button${[product.id]}" name="${product.productName}" value="${product.productPrice}">Acheter</button>
              </div>
          `;
}

// filter products
function filterProducts(category){
	productList.innerHTML = '';
        allProducts.forEach(item => {
            if (category == 'none' || item.productCategory == category)
            {
                    showProduct(item);
            }
        });
}

// get user information
let retrievedUser = localStorage.getItem('user'); // local json string
let user = JSON.parse(retrievedUser); // changed to object

// retrieve all buy buttons
const allBuyButtons = document.querySelectorAll(".button-buy");

// if buy button clicked, add product to user cart.
allBuyButtons.forEach(item =>{
    item.addEventListener("click", addToCart =>{
        let myObj = {
            name: item.name,
            value: item.value
        };
        user.userCart.push(myObj); // add product to cart
        user.userCartTotal+= Number(item.value); // update total amount
        localStorage.setItem('user', JSON.stringify(user)); // update user on localStorage
        updateCart();
    })
})



//-----------------------js Filtre

const customersChoice = document.querySelector('#product-select');

customersChoice.addEventListener("change", () => { 
	filterProducts(customersChoice.value);
})
