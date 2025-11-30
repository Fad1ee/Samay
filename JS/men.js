document.addEventListener("DOMContentLoaded", () => {
    const watchCards = document.querySelectorAll(".watch-card");
    const detailImg = document.getElementById("detail-img");
    const detailName = document.getElementById("detail-name");
    const detailPrice = document.getElementById("detail-price");
    const detailDesc = document.getElementById("detail-desc");
    const detailAddBtn = document.getElementById("detail-add-btn");

    let currentWatch = null;

    // Longer multi-paragraph descriptions
    const descriptions = {
        "Classic Elegance": [
            "Elegant leather strap watch designed for formal occasions.",
            "Minimalist dial with gold accents for timeless style.",
            "Durable and comfortable for all-day wear.",
            "Comes with 1-year official warranty."
        ],
        "Sporty Chrono": [
            "Sporty chronograph design with precision timing.",
            "Water-resistant up to 50 meters.",
            "Perfect for outdoor and active lifestyle.",
            "Includes 2-year warranty and service coverage."
        ],
        "Luxury Gold": [
            "Gold-tone automatic movement watch with luxurious finish.",
            "Perfect for business and premium events.",
            "Scratch-resistant sapphire glass protects the dial.",
            "3-year warranty included for complete peace of mind."
        ],
        "Minimalist Black": [
            "Sleek black watch with minimalist design.",
            "Matches casual and formal wear seamlessly.",
            "Lightweight and comfortable for daily use.",
            "1-year manufacturer warranty included."
        ],
        "Adventure Explorer": [
            "Durable watch with built-in compass and water resistance.",
            "Designed for adventurers and explorers.",
            "Shock-resistant and reliable in all conditions.",
            "2-year warranty covers manufacturing defects."
        ],
        "Modern Silver": [
            "Silver stainless steel watch with contemporary design.",
            "Minimalist dial with clear markers.",
            "Durable and stylish for everyday wear.",
            "Includes 1-year warranty for parts and service."
        ],
        "Vintage Leather": [
            "Retro-inspired leather strap watch with classic dial.",
            "Timeless design that never goes out of style.",
            "Soft leather strap for comfort.",
            "1-year warranty included."
        ],
        "Titanium Pro": [
            "Titanium case watch built for professionals.",
            "Robust, lightweight, and scratch-resistant.",
            "Perfect for outdoor and business use.",
            "3-year warranty included for peace of mind."
        ]
    };

    // Show details
    watchCards.forEach(card => {
        const detailsBtn = card.querySelector(".details-btn");
        detailsBtn.addEventListener("click", () => {
            detailImg.src = card.querySelector("img").src;
            detailName.textContent = card.dataset.name;
            detailPrice.textContent = `Price: ${card.dataset.price} PKR`;

            detailDesc.innerHTML = "";
            descriptions[card.dataset.name].forEach(text => {
                const p = document.createElement("p");
                p.textContent = text;
                detailDesc.appendChild(p);
            });

            currentWatch = card;
        });
    });

    // Add to Cart
    detailAddBtn.addEventListener("click", () => {
        if(!currentWatch) return alert("Select a watch first!");
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const item = {
            name: currentWatch.dataset.name,
            price: currentWatch.dataset.price,
            img: currentWatch.querySelector("img").src,
        };
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${item.name} added to cart!`);
    });

    // Zoom image
    detailImg.addEventListener("click", () => {
        if(detailImg.style.transform === "scale(2)") {
            detailImg.style.transform = "scale(1)";
        } else {
            detailImg.style.transform = "scale(2)";
        }
        detailImg.style.transition = "transform 0.3s";
    });
});
// LIVE SEARCH FOR WATCHES
const searchInput = document.getElementById("searchBar");

searchInput.addEventListener("input", () => {
    let filter = searchInput.value.toLowerCase();

    document.querySelectorAll(".watch-card").forEach(card => {
        let name = card.querySelector("h3").textContent.toLowerCase();

        if (name.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
