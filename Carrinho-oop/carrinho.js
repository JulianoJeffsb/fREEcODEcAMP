// Obtendo os elementos do DOM
const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
// Obtendo os botões do DOM
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
// Obtendo os totais do DOM
const totalNumberOfItems = document.getElementById('total-items');
const cartSubTotal = document.getElementById('subtotal');
const cartTaxes = document.getElementById('taxes');
const cartTotal = document.getElementById('total');
// Obtendo o elemento #show-hide-cart do DOM
const showHideCartSpan = document.getElementById('show-hide-cart');

// Declarando a variável isCartShowing e definindo-a como false
let isCartShowing = false;
// Declarando a variável products e definindo-a como um array vazio
const products = [];