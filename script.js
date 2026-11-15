let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
  alert(name + " added to your cart!");
}

function updateCartUI() {
  const cartList = document.getElementById("cart-items");
  const totalSpan = document.getElementById("cart-total");
  cartList.innerHTML = "";
  
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price.toLocaleString()} RWF`;
    cartList.appendChild(li);
  });

  totalSpan.textContent = total.toLocaleString();
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "Hello Sedrick Store! I want to order:\n";
  let total = 0;

  cart.forEach(item => {
    message += `- ${item.name} (${item.price.toLocaleString()} RWF)\n`;
    total += item.price;
  });

  message += `\nTotal: ${total.toLocaleString()} RWF`;

  // Replace 250780000000 with your actual WhatsApp phone number
 const phone = "250791545614";
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
function filterCategory(category) {
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        if (product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
function showAllProducts() {
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        product.style.display = "block";
    });
}
function showAllProducts() {
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        product.style.display = "block";
    });
}

function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        let name = product.querySelector("h3").textContent.toLowerCase();

        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

let wishlist = [];

function addToWishlist(productName) {
    wishlist.push(productName);
    alert(productName + " added to wishlist!");
}
function viewProduct(productName) {
    document.getElementById("recentlyViewed").innerHTML =
        "Last viewed: " + productName;
}