




// Get the HTML elements
var homeBtn = document.getElementById('home-btn');
var exploreBtn = document.getElementById('explore-btn');
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




signUpForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user input values
    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create a new user object
    var user = {
        username: username,
        email: email,
        password: password
    };

    // Add the new user to the users array
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);

    // Store the users array in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

    // Display a success message
    console.log('User signed up successfully!');
});






// Add event listener for checkout button
checkoutBtn.addEventListener('click', function() {
    // Handle checkout functionality here
    console.log('Checkout button clicked!');
});

    orderHistory.forEach(function(order) {
        var listItem = document.createElement('LI');
        listItem.textContent = 'Order #' + order.orderId + ': ' + order.date;
        orderHistoryList.appendChild(listItem);
    });
}
