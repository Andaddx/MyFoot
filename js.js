

// Product Data
const products = [



    {
        id: 1,
        name: "Digitek DWM 120 ",
        price: 5500,
        category: "Mic",
        description: "Perfect for content crators ",
        features: [



            "Special Feature	Noise Reduction",
            "Compatible Devices	Camera, Smartphone",
            "Colour	Black",

            "Included Components	1 Lightning Adapter, 1 Receiver, 1 Windshield Cover, 2 Microphone, Type C Charging Cable",
            "Item Weight	400 Grams",
            "Microphone Form Factor	Handheld",
            "Item dimensions L x W x H	37 x 30 x 120 Millimeters",
            "Power Source	Battery Powered",
            "Number of Batteries 2 9V batteries required. (included)",
            "Hardware Platform	Camera, Smartphone"

        ],
        image: "d1.jpg",
        images: [
            "d2.jpg",
            "d3.jpg",
            "d7.jpg",
            "d8.jpg"

        ],
        link: "https://docs.google.com/forms/d/e/1FAIpQLScj1Cyv9ZzsnhTQ2Ucx_k2vo30hla8vvLAsKPrOvzvYwnjPGQ/viewform?usp=dialog"
    },




    // {
    //     id: 1,
    //     name: "Classic Denim Jacket",
    //     description: "Perfect for cool weather with a timeless design.",
    //     price: 59.99,
    //     oldPrice: 79.99,
    //     category: "Men",
    //     image: "img/anc1.jpg",
    //     badge: "Sale",
    //     link: "https://docs.google.com/forms/d/e/1FAIpQLScj1Cyv9ZzsnhTQ2Ucx_k2vo30hla8vvLAsKPrOvzvYwnjPGQ/viewform?usp=dialog"



    // },
    {
        id: 2,
        name: "Digitek DWM 115 ",
        price: 5500,
        category: "Mic",
        description: "Perfect for content crators ",
        features: [


            "Special Feature: Wireless",
            "Compatible Devices: Smartphone, Tablet, iOS devices",
            "Colour: Black",
            "Included Components: 1x Type-C to Lightning Connector, USB to Type C Charging Cable, 2x Wind Wool, User Manual, Charging Case, Microphone Transmitter X2, Receiver x1",
            "Polar Pattern: Omnidirectional",
            "Audio Sensitivity: 35 Decibels",
            "Item Weight: 400 Grams",
            "Microphone Form Factor: Lavalier",
            "Item Dimensions L x W x H: 12 x 12 x 6 Centimeters",
            "Power Source: Battery Powered",
            "Number of Batteries: 4 Lithium Ion batteries required (included)",
            "Signal-to-Noise Ratio: 65 dB",
            "Number of Channels: 2",
            "Frequency Response: 20 Hz",

        ],
        image: "dit1.jpg",
        images: [
            "dit2.jpg",
            "dit3.jpg",
             "dit4.jpg",
            "dit5.jpg",
             "dit6.jpg",
           

        ],
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc7Js-A4OGLBZ7a-Apf6j3JqOu9JBUHoIKBRlm73K2BCxO3aA/viewform?usp=dialog"
    },

    {
        id: 3,
        name: "Premium Leather Watch",
        description: "Elegant timepiece with genuine leather strap.",
        price: 129.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        badge: "New"
    },
    {
        id: 4,
        name: "Running Sneakers",
        description: "Comfortable athletic shoes for daily activities.",
        price: 89.99,
        oldPrice: 109.99,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 5,
        name: "Casual Blazer",
        description: "Smart-casual blazer for work or special occasions.",
        price: 99.99,
        category: "Men",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
    },
    {
        id: 6,
        name: "Handcrafted Necklace",
        description: "Beautiful silver necklace with gemstone details.",
        price: 34.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"

    },
    {
        id: 7,
        name: "Elegant Evening Gown",
        description: "Stunning gown for formal events and parties.",
        price: 149.99,
        category: "Women",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        badge: "New"
    },
    {
        id: 8,
        name: "Comfortable Loafers",
        description: "Classic loafers perfect for both casual and formal outfits.",
        price: 74.99,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
    }
];

// Cart Data
let cart = [
    { id: 1, name: "Classic Denim Jacket", price: 59.99, quantity: 1, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" },
    { id: 3, name: "Premium Leather Watch", price: 129.99, quantity: 1, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" },
    { id: 6, name: "Handcrafted Necklace", price: 34.99, quantity: 2, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const categories = document.querySelectorAll('.category');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.querySelector('.cart-count');

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    renderProducts();
    updateCart();
    setupEventListeners();
});

// Render products to the page
function renderProducts(filter = 'All') {
    productsContainer.innerHTML = '';

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(product => product.category === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const badgeHTML = product.badge
            ? `<div class="product-badge">${product.badge}</div>`
            : '';

        const oldPriceHTML = product.oldPrice
            ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>`
            : '';

        productCard.innerHTML = `
                    ${badgeHTML}

                     <img src="${product.image}" alt="${product.name}" onclick="openProductPopup(${product.id})" class="product-img">

                    


                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">
                            <div>
                                <span class="price">Rs.${product.price.toFixed(2)}</span>
                                ${oldPriceHTML}
                            </div>
                           <!-- <div class="add-to-cart" data-id="{product.id}" ">
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            -->
                             <div class="add-to-cartt" data-link="${product.link}">
                                <i class="fa-brands fa-telegram"></i>
                            </div>
                        </div>
                    </div>
                `;

        productsContainer.appendChild(productCard);
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    document.querySelectorAll('.add-to-cartt').forEach(button => {
        button.addEventListener('click', function () {
            const productLink = this.dataset.link;

            // Redirect to product-specific Google Form
            window.open(productLink, "_blank");
        });
    });

}

// Setup event listeners
function setupEventListeners() {
    // Category filter
    categories.forEach(category => {
        category.addEventListener('click', function () {
            categories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.textContent);
        });
    });

    // Cart toggle
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    overlay.addEventListener('click', toggleCart);

    // Close cart when pressing Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    });
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : 'auto';
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }

    updateCart();

    // Show feedback
    const addButton = document.querySelector(`.add-to-cart[data-id="${productId}"]`);
    addButton.innerHTML = '<i class="fas fa-check"></i>';
    addButton.style.backgroundColor = 'var(--success)';

    setTimeout(() => {
        addButton.innerHTML = '<i class="fas fa-shopping-cart"></i>';
        addButton.style.backgroundColor = 'var(--primary)';
    }, 1000);
}

// Update cart UI
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty"><p>Your cart is empty</p><p>Add some items to get started!</p></div>';
        cartTotalPrice.textContent = '$0.00';
        return;
    }

    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" onclick="openProductPopup(${item.id}"class="cart-item-img">
                    



                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-actions">
                            <div class="quantity-btn decrease-quantity" data-id="${item.id}">-</div>
                            <div class="quantity">${item.quantity}</div>
                            <div class="quantity-btn increase-quantity" data-id="${item.id}">+</div>
                            <div class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </div>
                        </div>
                    </div>
                `;

        cartItemsContainer.appendChild(cartItem);
    });

    // Update total price
    cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;

    // Add event listeners to cart item buttons
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function () {
            const itemId = parseInt(this.getAttribute('data-id'));
            updateQuantity(itemId, -1);
        });
    });

    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function () {
            const itemId = parseInt(this.getAttribute('data-id'));
            updateQuantity(itemId, 1);
        });
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function () {
            const itemId = parseInt(this.getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
}

// Update item quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity < 1) {
        cart = cart.filter(item => item.id !== productId);
    }

    updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Simple search functionality
document.getElementById('search-icon').addEventListener('click', function () {
    const searchTerm = prompt("What are you looking for?");
    if (searchTerm) {
        alert(`Searching for "${searchTerm}"... (This is a demo - in a real site, this would show search results)`);
    }
});

// User icon functionality
document.getElementById('user-icon').addEventListener('click', function () {
    alert("Account menu would open here. In a real site, this would show login/account options.");
});



function openProductPopup(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let index = 0;

    /* Overlay */
    const overlay = document.createElement("div");
    document.body.style.overflow = "hidden";

    overlay.style.cssText = `
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.6);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:9999;
`;


    /* Popup */
    const popup = document.createElement("div");
  popup.style.cssText = `
    background:#fff;
    width:90%;
    max-width:900px;
    max-height:90vh;
    border-radius:12px;
    overflow:hidden;
    display:grid;
    grid-template-columns:1fr 1fr;
    position:relative;
    font-family:Poppins,sans-serif;
`;

    /* LEFT IMAGE SLIDER */
    const imageBox = document.createElement("div");
    imageBox.style.cssText = `
        position:relative;
        height:420px;
        background:#000;
    `;

    

    const img = document.createElement("img");
    img.src = product.images[index];
    img.style.cssText = `
        width:100%;
        height:100%;
        object-fit:cover;
    `;

    const prev = document.createElement("span");
    const next = document.createElement("span");
    prev.innerHTML = "❮";
    next.innerHTML = "❯";

    [prev, next].forEach(btn => {
        btn.style.cssText = `
            position:absolute;
            top:50%;
            transform:translateY(-50%);
            font-size:30px;
            color:#fff;
            cursor:pointer;
            padding:10px;
            user-select:none;
        `;
    });

    prev.style.left = "10px";
    next.style.right = "10px";

    prev.onclick = () => {
        index = (index - 1 + product.images.length) % product.images.length;
        img.src = product.images[index];
    };
    next.onclick = () => {
        index = (index + 1) % product.images.length;
        img.src = product.images[index];
    };

    imageBox.append(img, prev, next);

    /* RIGHT DETAILS */
    const details = document.createElement("div");
    details.style.cssText = `
    padding:25px;
    overflow-y:auto;
    max-height:90vh;
`;


    details.innerHTML = `
        <h2>${product.name}</h2>
        <h3 style="color:#ff9800;">$${product.price}</h3>
        <p><b>Category:</b> ${product.category}</p>
        <p>${product.description}</p>





        
      ${product.features ? `
    <h4>Features</h4>
    <ul>
        ${product.features.map(f => `<li>${f}</li>`).join("")}
    </ul>
` : ''}

${product.link ? `
    <a href="${product.link}"
       target="_blank"
       style="
        display:inline-block;
        margin-top:20px;
        padding:12px 30px;
        background:#ff9800;
        color:#fff;
        text-decoration:none;
        border-radius:6px;
        font-weight:600;
       ">
       Buy Now
    </a>
` : `
    <button disabled
        style="
        margin-top:20px;
        padding:12px 30px;
        background:#ccc;
        color:#666;
        border:none;
        border-radius:6px;
        cursor:not-allowed;
        ">
        Not Available
    </button>
`}

    `;

    /* CLOSE */
    const close = document.createElement("span");
    close.innerHTML = "×";
    close.style.cssText = `
        position:absolute;
        top:10px;
        right:15px;
        font-size:26px;
        cursor:pointer;
    `;
    close.onclick = () => overlay.remove();
    popup.onclick = e => e.stopPropagation();
    overlay.onclick = () => overlay.remove();


    popup.append(imageBox, details, close);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
}


