console.log("script running");

// Select buttons
const appleButton = document.querySelector("#apple");
const bananaButton = document.querySelector("#banana");
const mangoButton = document.querySelector("#mango");

// Select cart elements
const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

// Store prices
let total = 0;
const prices = {
  apple: 0.75,
  banana: 0.30,
  mango: 1.25
};

// Generic function for all items
const addItem = (itemName) => {
  const price = prices[itemName];

  // Add item text to cart
  shoppingCart.innerHTML += `<p>${itemName} - $${price.toFixed(2)}</p>`;

  // Update total
  total += price;
  totalSpan.textContent = total.toFixed(2);
};

// Event listeners
appleButton.addEventListener("click", () => addItem("apple"));
bananaButton.addEventListener("click", () => addItem("banana"));
mangoButton.addEventListener("click", () => addItem("mango"));
