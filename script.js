/* =========================================
   CART
========================================= */

let cart = [];


/* =========================================
   ADD PRODUCT TO CART
========================================= */

function addToCart(name, price) {

    const existingProduct =
        cart.find(item => item.name === name);


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }


    updateCart();


    showToast(
        name + " added to cart!"
    );

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");


    const cartItems =
        document.getElementById("cartItems");


    const cartTotal =
        document.getElementById("cartTotal");


    let totalItems = 0;

    let totalPrice = 0;


    cart.forEach(item => {

        totalItems += item.quantity;

        totalPrice +=
            item.price * item.quantity;

    });


    cartCount.textContent =
        totalItems;


    cartTotal.textContent =
        "₹" + totalPrice;


    /* EMPTY CART */

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">
                Your cart is empty.
            </p>

        `;

        return;

    }


    /* CART PRODUCTS */

    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        const div =
            document.createElement("div");


        div.className =
            "cart-item";


        div.innerHTML = `

            <div>

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ₹${item.price}
                    ×
                    ${item.quantity}
                </p>

            </div>


            <button
                class="remove-item"
                onclick="removeItem(${index})">

                Remove

            </button>

        `;


        cartItems.appendChild(div);

    });

}


/* =========================================
   REMOVE ITEM
========================================= */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    document
        .getElementById("cartSidebar")
        .classList.add("active");


    document
        .getElementById("cartOverlay")
        .classList.add("active");

}


/* =========================================
   CLOSE CART
========================================= */

function closeCart() {

    document
        .getElementById("cartSidebar")
        .classList.remove("active");


    document
        .getElementById("cartOverlay")
        .classList.remove("active");

}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    document
        .getElementById("navLinks")
        .classList.toggle("active");

}


/* =========================================
   SEARCH PRODUCTS
========================================= */

function searchProducts() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const products =
        document.querySelectorAll(".product-card");


    products.forEach(product => {

        const name =
            product.dataset.name;


        if (name.includes(search)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


/* =========================================
   NEWSLETTER
========================================= */

function subscribeUser(event) {

    event.preventDefault();


    showToast(
        "Thank you for subscribing! ❤️"
    );


    event.target.reset();

}


/* =========================================
   CHECKOUT
========================================= */

function checkout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty!"
        );

        return;

    }


    showToast(
        "Checkout system will be connected next."
    );

}


/* =========================================
   TOAST MESSAGE
========================================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================
   INITIALIZE
========================================= */

updateCart();