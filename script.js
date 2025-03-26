




// Get the HTML elements
var homeBtn = document.getElementById('home-btn');
var exploreNavBtn = document.getElementById('explore-nav-btn');
var cartBtn = document.getElementById('cart-btn');
var accountBtn = document.getElementById('account-btn');
var signUpBtn = document.getElementById('sign-up-btn');
var addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
var cartTable = document.getElementById('cart-table');
var checkoutBtn = document.getElementById('checkout-btn');
var usernameSpan = document.getElementById('username');
var orderHistoryList = document.getElementById('order-history');
var signUpForm = document.getElementById('sign-up-form');

// Initialize cart
var cart = [];

// Add event listeners to navigation buttons
homeBtn.addEventListener('click', function() {
    document.getElementById('home-page').classList.add('active');
    document.getElementById('explore-page').classList.remove('active');
    document.getElementById('cart-page').classList.remove('active');
    document.getElementById('account-page').classList.remove('active');
    document.getElementById('sign-up-page').classList.remove('active');
});

exploreBtn.addEventListener('click', function() {
    document.getElementById('explore-page').classList.add('active');
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('cart-page').classList.remove('active');
    document.getElementById('account-page').classList.remove('active');
    document.getElementById('sign-up-page').classList.remove('active');
});

cartBtn.addEventListener('click', function() {
    document.getElementById('cart-page').classList.add('active');
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('explore-page').classList.remove('active');
    document.getElementById('account-page').classList.remove('active');
    document.getElementById('sign-up-page').classList.remove('active');
});

accountBtn.addEventListener('click', function() {
    document.getElementById('account-page').classList.add('active');
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('explore-page').classList.remove('active');
    document.getElementById('cart-page').classList.remove('active');
    document.getElementById('sign-up-page').classList.remove('active');
});

signUpBtn.addEventListener('click', function() {
    document.getElementById('sign-up-page').classList.add('active');
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('explore-page').classList.remove('active');
    document.getElementById('cart-page').classList.remove('active');
    document.getElementById('account-page').classList.remove('active');
});

// Add event listeners to add to cart buttons
addToCartBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var product = btn.getAttribute('data-product');
        var price = btn.getAttribute('data-price');
        var existingProduct = cart.find(function(item) {
            return item.product === product;
        });
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ product: product, price: price, quantity: 1 });
        }
        updateCartTable();
    });
});

// Update cart table
function updateCartTable() {
    var tableBody = cartTable.tBodies[0];
    tableBody.innerHTML = '';
    cart.forEach(function(item) {
        var row = tableBody.insertRow();
        var productCell = row.insertCell();
        var priceCell = row.insertCell();
        var quantityCell = row.insertCell();
        var totalCell = row.insertCell();
        productCell.textContent = item.product;
        priceCell.textContent = item.price;
        quantityCell.textContent = item.quantity;
        totalCell.textContent = item.price * item.quantity;
    });
}

// Add event listener to sign-up form
signUpForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Store the user data in local storage
    localStorage.setItem('username', name);
    localStorage.setItem('orderHistory', JSON.stringify([])); // Initialize order history as an empty array
});

// Display username and order history
var username = localStorage.getItem('username');
var orderHistory = JSON.parse(localStorage.getItem('orderHistory'));

usernameSpan.textContent = username;

if (orderHistory) {
    orderHistory.forEach(function(order) {
        var listItem = document.createElement('LI');
        listItem.textContent = 'Order #' + order.orderId + ': ' + order.date;
        orderHistoryList.appendChild(listItem);
    });
}
