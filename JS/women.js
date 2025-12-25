const watches = [
    {
        id: 1,
        name: "Rose Gold Elegance",
        price: "PKR 5500",
        img: "Images/women1.jpg",
        desc: "A delicate rose gold watch that adds elegance to any outfit. Perfect for evening events.\nComes with a 1-year warranty."
    },
    {
        id: 2,
        name: "Classic Silver Charm",
        price: "PKR 4800",
        img: "Images/women2.jpg",
        desc: "Timeless silver watch with classic design. Comfortable strap and scratch-resistant glass.\nWarranty included."
    },
    {
        id: 3,
        name: "Diamond Bezel",
        price: "PKR 7200",
        img: "Images/women3.jpg",
        desc: "Luxury diamond bezel watch that sparkles in any light. Elegant for daily and special occasions.\nIncludes 1-year warranty."
    },
    {
        id: 4,
        name: "Pearl White",
        price: "PKR 5000",
        img: "Images/women4.jpg",
        desc: "Soft pearl white dial watch, lightweight and chic. Great for casual and formal wear.\nWarranty provided."
    },
    {
        id: 5,
        name: "Rose Quartz",
        price: "PKR 6100",
        img: "Images/women5.jpg",
        desc: "Feminine rose quartz watch with subtle shine. Comes with stainless steel back.\n1-year warranty included."
    },
    {
        id: 6,
        name: "Gold Minimal",
        price: "PKR 5300",
        img: "Images/women6.jpg",
        desc: "Minimalistic gold watch for everyday elegance. Adjustable strap.\nWarranty included."
    },
    {
        id: 7,
        name: "Pink Leather",
        price: "PKR 4700",
        img: "Images/women7.jpg",
        desc: "Soft pink leather strap watch, comfortable and stylish.\n1-year warranty included."
    },
    {
        id: 8,
        name: "Silver Mesh",
        price: "PKR 6900",
        img: "Images/women8.jpg",
        desc: "Silver mesh watch with modern design. Perfect for office and parties.\nComes with warranty."
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

// Add to Cart Function
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
