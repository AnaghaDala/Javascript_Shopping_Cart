// Initialize the cartItems array to store selected items
let cartItems = [];

// Function to add an item to the cart
function addToCart(name, image, price) {
  const item = { name, image, price };
  cartItems.push(item);
  alert(`${name} is added to the cart!!!`);
  // Save the cartItems array to localStorage to persist the data across page reloads
  saveCartItemsToLocalStorage();
  // Redirect to the cart page
  window.location.href = './Cart.html';
}

// Function to display cart items on the cart page
function displayCartItems() {
  const cartContainer = document.getElementById('cartItems');
  if (cartContainer) {
    // Clear previous content
    cartContainer.innerHTML = '';
    // Iterate through each item in the cartItems array and create a card for it
    cartItems.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'card';
      const cardHeader = document.createElement('div');
      cardHeader.className = 'card-header';
      const imageElement = document.createElement('img');
      imageElement.src = item.image;
      imageElement.className = 'card-img-top';
      cardHeader.appendChild(imageElement);
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body text-center';
      const itemName = document.createElement('h5');
      itemName.className = 'card-title';
      itemName.textContent = item.name;
      cardBody.appendChild(itemName);
      const itemPrice = document.createElement('div');
      itemPrice.className = 'cart-price';
      itemPrice.textContent = `₹${item.price}`;
      cardBody.appendChild(itemPrice);
      // Add any other details you want to display on the cart page
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      cartContainer.appendChild(card);
    });
  }
}

// Function to calculate and display the total price of items in the cart
function updateTotalPrice() {
  const quantity = document.querySelector('.cart-quantity').value;
  const price = 3000; // Price per item (you can change this as needed)
  const totalPrice = price * quantity;
  document.querySelector('#totalPrice').textContent = `₹${totalPrice}`;
}

// Function to save the cartItems array to localStorage
function saveCartItemsToLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to load cartItems array from localStorage (called on cart page load)
function loadCartItemsFromLocalStorage() {
  const savedCartItems = localStorage.getItem('cartItems');
  if (savedCartItems) {
    cartItems = JSON.parse(savedCartItems);
  }
}

// Load cart items from localStorage when the cart page loads
document.addEventListener('DOMContentLoaded', () => {
  loadCartItemsFromLocalStorage();
  displayCartItems();
});
