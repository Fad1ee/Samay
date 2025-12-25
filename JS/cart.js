document.addEventListener("DOMContentLoaded", () => {
    const totalPriceEl = document.getElementById("total-price");
    const cartContainer = document.querySelector(".cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to create cart item DOM element
    function createCartItem(item) {
        const div = document.createElement("div");
        div.classList.add("item");
        div.dataset.price = parseInt(item.price.replace(/[^0-9]/g, ''));

        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-details">
                <p class="item-name">${item.name}</p>
                <p class="item-price">${item.price}</p>
                <button class="remove-btn">Remove</button>
            </div>
        `;

        // Quantity buttons
        const minusBtn = document.createElement("button");
        const plusBtn = document.createElement("button");
        const span = document.createElement("span");
        minusBtn.textContent = "-";
        plusBtn.textContent = "+";
        span.textContent = "1";
        span.classList.add("quantity-value");

        const container = document.createElement("div");
        container.classList.add("quantity-container");
        container.appendChild(minusBtn);
        container.appendChild(span);
        container.appendChild(plusBtn);
        div.querySelector(".item-details").appendChild(container);

        // Minus / plus functionality
        minusBtn.addEventListener("click", () => {
            let val = parseInt(span.textContent);
            if (val > 1) {
                span.textContent = val - 1;
                updateTotal();
            }
        });
        plusBtn.addEventListener("click", () => {
            let val = parseInt(span.textContent);
            span.textContent = val + 1;
            updateTotal();
        });

        // Remove item
        div.querySelector(".remove-btn").addEventListener("click", () => {
            div.remove();
            cart = cart.filter(c => c.name !== item.name);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateTotal();
        });

        return div;
    }

    // Function to update total price
    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".cart-items .item").forEach(item => {
            const price = parseInt(item.dataset.price);
            const qty = parseInt(item.querySelector(".quantity-value").textContent);
            total += price * qty;
        });
        totalPriceEl.textContent = `PKR ${total}`;
    }

    // Render cart items from localStorage
    cart.forEach(item => {
        const cartItem = createCartItem(item);
        cartContainer.appendChild(cartItem);
    });

    // Checkout form
    const form = document.getElementById("checkoutForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Order Placed Successfully!");
        form.reset();
        document.querySelectorAll(".cart-items .item").forEach(item => item.remove());
        localStorage.removeItem("cart");
        updateTotal();
    });

    // Initial total calculation
    updateTotal();
});

const checkoutForm = document.getElementById("checkoutForm");
const popup = document.getElementById("orderPopup");

checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh
    popup.style.display = "flex";
});

function closePopup() {
    popup.style.display = "none";
}
