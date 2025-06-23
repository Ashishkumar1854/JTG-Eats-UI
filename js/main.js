window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("productGrid");
  const cartList = document.getElementById("cartList");
  const cartCount = document.getElementById("cartCount");
  const cartIcon = document.getElementById("cartIcon");
  const cartBox = document.getElementById("cartBox");

  const cartItems = [];

  function renderCart() {
    cartList.innerHTML = "";

    if (cartItems.length === 0) {
      cartList.innerHTML = "<li>No items in cart</li>";
      cartCount.textContent = "0";
      return;
    }

    cartItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
      ${item.title} - ${item.price}
      <button class="remove-btn" data-index="${index}">🗑️</button>
    `;
      cartList.appendChild(li);
    });

    cartCount.textContent = cartItems.length;

    // Remove button handler
    document.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        cartItems.splice(index, 1);
        renderCart();
      });
    });
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2000);
  }

  function addToCart(item) {
    cartItems.push(item);
    renderCart();
    showToast(`${item.title} added to cart!`);
  }

  //  check cart list
  cartIcon.addEventListener("click", () => {
    cartBox.style.display =
      cartBox.style.display === "block" ? "none" : "block";
  });

  // Load kitchen items
  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.position = "relative";

    const offerBadge =
      item.offer && item.offer !== "No Offer"
        ? `<div class="offer-badge">${item.offer}</div>`
        : "";

    card.innerHTML = `
      ${offerBadge}
      <img src="${item.imgSrc}" alt="${item.title}">
      <div class="card-details">
        <h3>${item.title}</h3>
        <div class="card-info">
          <span class="rating">⭐ ${item.rating}</span>
          <span class="eta">🕒 ${item.eta}</span>
        </div>
      </div>
      <div class="price-cart">
        <span class="price">${item.price}</span>
        <button class="add-btn">+</button>
      </div>
    `;

    const addButton = card.querySelector(".add-btn");
    addButton.addEventListener("click", () => {
      addToCart(item);
    });

    container.appendChild(card);
  });

  renderCart();
});

//  Support + icon in Popular Items
const carousel = document.getElementById("popularCarousel");
popularItems.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("popular-card");

  const offerBadge =
    item.offer && item.offer !== "No Offer"
      ? `<div class="offer-badge">${item.offer}</div>`
      : "";

  const ratingEta = `
    <div class="card-info">
      ${item.rating ? `<span class="rating">⭐ ${item.rating}</span>` : ""}
      ${item.eta ? `<span class="eta">🕒 ${item.eta}</span>` : ""}
    </div>
  `;

  card.innerHTML = `
    ${offerBadge}
    <img src="${item.imgSrc}" alt="${item.title}" />
    <div class="card-details">
      <h3>${item.title}</h3>
      ${ratingEta}
    </div>
    <div class="price-cart">
      <span class="price">${item.price}</span>
      <button class="add-btn">+</button>
    </div>
  `;

  const addButton = card.querySelector(".add-btn");
  addButton.addEventListener("click", () => {
    addToCart(item);
  });

  carousel.appendChild(card);
});

// Carousel Scroll
document.getElementById("prevBtn").addEventListener("click", () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
});

document.getElementById("nextBtn").addEventListener("click", () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
});

//  Dish Modal
const modal = document.getElementById("dishRequestBox");
const openModalBtn = document.getElementById("openRequest");
const cancelModalBtn = document.getElementById("cancelModal");
const submitRequestBtn = document.getElementById("submitRequest");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

cancelModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

submitRequestBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

document.addEventListener("DOMContentLoaded", () => {
  const promoVideo = document.getElementById("promoVideo");

  if (promoVideo) {
    promoVideo.addEventListener("click", () => {
      if (promoVideo.paused) {
        promoVideo.play();
      } else {
        promoVideo.pause();
      }
    });
  }
});

// Hamburger  for Mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});
