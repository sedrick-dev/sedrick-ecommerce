// U.S.M shopping website interactions
let cart = [];
let wishlist = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
    alert(name + " added to your cart!");
}

function updateCartUI() {
    const cartList = document.getElementById("cart-items");
    const totalSpan = document.getElementById("cart-total");
    const countSpan = document.getElementById("cart-count");
    if (!cartList || !totalSpan) return;

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price.toLocaleString()} RWF`;
        cartList.appendChild(li);
    });

    totalSpan.textContent = total.toLocaleString();
    if (countSpan) countSpan.textContent = cart.length;
}

function toggleCart() {
    const modal = document.getElementById("cart-modal");
    if (!modal) return;
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello U.S.M! I want to order:\n";
    let total = 0;
    cart.forEach(item => {
        message += `- ${item.name} (${item.price.toLocaleString()} RWF)\n`;
        total += item.price;
    });
    message += `\nTotal: ${total.toLocaleString()} RWF`;

    const phone = "250791545614";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function filterCategory(category) {
    document.querySelectorAll(".product-card").forEach(product => {
        product.style.display = product.dataset.category === category ? "" : "none";
    });
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
}

function showAllProducts() {
    document.querySelectorAll(".product-card").forEach(product => {
        product.style.display = "";
    });
}

function searchProducts() {
    const input = document.getElementById("searchInput");
    if (!input) return;
    const searchTerm = input.value.trim().toLowerCase();

    document.querySelectorAll(".product-card").forEach(product => {
        const name = product.querySelector("h3")?.textContent.toLowerCase() || "";
        product.style.display = name.includes(searchTerm) ? "" : "none";
    });
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
}

function addToWishlist(productName) {
    if (!wishlist.includes(productName)) {
        wishlist.push(productName);
        alert(productName + " added to your wishlist!");
    } else {
        alert(productName + " is already in your wishlist.");
    }
}

function viewProduct(productName) {
    const recentlyViewed = document.getElementById("recentlyViewed");
    if (recentlyViewed) recentlyViewed.textContent = "Last viewed: " + productName;
}

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuBtn = document.getElementById("menuBtn");
    if (!sidebar) return;

    const isMobile = window.matchMedia("(max-width: 850px)").matches;
    const expanded = sidebar.classList.toggle("expanded");

    if (isMobile) {
        overlay?.classList.toggle("visible", expanded);
    } else {
        document.body.classList.toggle("sidebar-expanded", expanded);
    }
    if (menuBtn) menuBtn.setAttribute("aria-expanded", String(expanded));
}

function closeMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuBtn = document.getElementById("menuBtn");
    sidebar?.classList.remove("expanded");
    overlay?.classList.remove("visible");
    document.body.classList.remove("sidebar-expanded");
    menuBtn?.setAttribute("aria-expanded", "false");
}

function subscribeNewsletter() {
    const emailInput = document.getElementById("newsletterEmail");
    const email = emailInput?.value.trim() || "";
    if (!email) {
        alert("Enter your email");
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    alert("Thank you for subscribing!");
    emailInput.value = "";
}

// Simple rotating promotional messages
document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(document.querySelectorAll(".slide"));
    if (slides.length > 1) {
        let currentSlide = 0;
        window.setInterval(() => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }, 3000);
    }

    // Close the mobile sidebar after a navigation link is selected.
    document.querySelectorAll(".sidebar-nav a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.matchMedia("(max-width: 850px)").matches) closeMenu();
        });
    });
    updateCartUI();
});
