const watches = [
    {
        id: 1,
        name: "Galaxy Smartwatch",
        price: "PKR 15,000",
        img: "Images/smart1.jpg",
        desc: "Galaxy Smartwatch with advanced fitness tracking, notifications, and customizable watch faces.\n1-year warranty included."
    },
    {
        id: 2,
        name: "Apple Watch Series 9",
        price: "PKR 22,000",
        img: "Images/smart2.jpg",
        desc: "Apple Watch Series 9, featuring always-on retina display, health monitoring, and seamless connectivity.\nComes with warranty."
    },
    {
        id: 3,
        name: "Fitbit Charge 6",
        price: "PKR 12,500",
        img: "Images/smart3.jpg",
        desc: "Fitbit Charge 6 with heart rate monitor, sleep tracking, and sports modes.\nWarranty included."
    },
    {
        id: 4,
        name: "Garmin Venu",
        price: "PKR 18,000",
        img: "Images/smart4.jpg",
        desc: "Garmin Venu smartwatch with GPS, fitness apps, and AMOLED display.\n1-year warranty included."
    },
    {
        id: 5,
        name: "Huawei Watch GT",
        price: "PKR 14,500",
        img: "Images/smart5.jpg",
        desc: "Huawei Watch GT featuring long battery life, fitness tracking, and elegant design.\nWarranty included."
    },
    {
        id: 6,
        name: "Amazfit GTS 4",
        price: "PKR 13,800",
        img: "Images/smart6.jpg",
        desc: "Amazfit GTS 4 with AMOLED display, GPS, and heart rate monitoring.\n1-year warranty included."
    },
    {
        id: 7,
        name: "Galaxy Watch 6",
        price: "PKR 20,000",
        img: "Images/smart7.jpg",
        desc: "Samsung Galaxy Watch 6 with fitness tracking, notifications, and customizable watch faces.\nWarranty included."
    },
    {
        id: 8,
        name: "Fossil Gen 6",
        price: "PKR 16,500",
        img: "Images/smart8.jpg",
        desc: "Fossil Gen 6 with Wear OS, heart rate monitor, and stylish design.\n1-year warranty included."
    }
];

const detailImg = document.getElementById("detail-img");
const detailName = document.getElementById("detail-name");
const detailPrice = document.getElementById("detail-price");
const detailDesc = document.getElementById("detail-desc");
const addBtn = document.getElementById("detail-add-btn");

document.querySelectorAll(".see-detail").forEach((btn, i) => {
    btn.addEventListener("click", () => {
        const watch = watches[i];
        detailImg.src = watch.img;
        detailImg.alt = watch.name;
        detailName.textContent = watch.name;
        detailPrice.textContent = watch.price;
        detailDesc.innerHTML = watch.desc.split("\n").map(p => `<p>${p}</p>`).join('');
        addBtn.dataset.id = watch.id;
    });
});

// Add to Cart
addBtn.addEventListener("click", () => {
    const id = addBtn.dataset.id;
    if (!id) return alert("Select a watch first!");
    const watch = watches.find(w => w.id == id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(watch);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${watch.name} added to cart!`);
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
  // Zoom image
    detailImg.addEventListener("click", () => {
        if(detailImg.style.transform === "scale(2)") {
            detailImg.style.transform = "scale(1)";
        } else {
            detailImg.style.transform = "scale(2)";
        }
        detailImg.style.transition = "transform 0.3s";
    });