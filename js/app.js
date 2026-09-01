/* =========================================================
   JAVASCRIPT: comportamiento y funcionalidades de BlessedCarteras
   ========================================================= */

const products = [
  // ===== PRODUCTOS NUEVOS (precios y colores por definir) =====
  { id: 101, name: "Producto nuevo 01", price: 0, precioMayorista: 0, category: "carteras",   img: "img/nueva-01.jpg", pendiente: true },
  { id: 102, name: "Producto nuevo 02", price: 0, precioMayorista: 0, category: "carteras",   img: "img/nueva-02.jpg", pendiente: true },
  { id: 103, name: "Producto nuevo 03", price: 0, precioMayorista: 0, category: "bolsos",     img: "img/nueva-03.jpg", pendiente: true },
  { id: 104, name: "Producto nuevo 04", price: 0, precioMayorista: 0, category: "mochilas",   img: "img/nueva-04.jpg", pendiente: true },
  { id: 105, name: "Producto nuevo 05", price: 0, precioMayorista: 0, category: "bandoleras", img: "img/nueva-05.jpg", pendiente: true },
  { id: 106, name: "Producto nuevo 06", price: 0, precioMayorista: 0, category: "carteras",   img: "img/nueva-06.jpg", pendiente: true },
  { id: 107, name: "Producto nuevo 07", price: 0, precioMayorista: 0, category: "bolsos",     img: "img/nueva-07.jpg", pendiente: true },
  { id: 108, name: "Producto nuevo 08", price: 0, precioMayorista: 0, category: "mochilas",   img: "img/nueva-08.jpg", pendiente: true },

  // ===== CATÁLOGO EXISTENTE =====
  {
    id: 1,
    name: "Porta Celulares boutique",
    price: 5000,
    precioMayorista: 3500,
    category: "carteras",
    img: "img/24.jpg",
    variantes: [
      { img: "img/24.jpg",  color: "Color beige"      },
      { img: "img/(1).jpg", color: "Color celeste"    },
      { img: "img/(2).jpg", color: "Color rojo"       },
      { img: "img/(3).jpg", color: "Color gris"       },
      { img: "img/(4).jpg", color: "Color beige 1"    },
      { img: "img/(6).jpg", color: "Color burdeo"     },
      { img: "img/21.jpg",  color: "Color verde agua" },
      { img: "img/23.jpg",  color: "Color celeste 1"  },
      { img: "img/19.jpg",  color: "Color rosado"     }
    ]
  },
  {
    id: 2,
    name: "Cartera boutique brillo",
    price: 7000,
    precioMayorista: 5500,
    category: "carteras",
    img: "img/imagen1.jpg",
    variantes: [
      { img: "img/imagen1.jpg", color: "Color rojo brillo"   },
      { img: "img/brillo.jpg",  color: "Color blanco brillo" }
    ]
  },
  {
    id: 3,
    name: "Bolso Inspiracion",
    price: 15000,
    precioMayorista: 8500,
    category: "bolsos",
    img: "img/(9).jpg",
    variantes: [
      { img: "img/(9).jpg",        color: "Color negro" },
      { img: "img/inspiracion.jpg", color: "Color gris"  },
      { img: "img/inspiracion2.jpg",color: "Color azul"  }
    ]
  },
  {
    id: 4,
    name: "Bandolera Impermiable",
    price: 5000,
    precioMayorista: 3000,
    category: "bandoleras",
    img: "img/26.jpg",
    variantes: [
      { img: "img/26.jpg",       color: "Modelo 06" },
      { img: "img/bandolera.jpg",color: "Modelo 07" }
    ]
  },
  {
    id: 5,
    name: "2 en 1 Cartera Mochila",
    price: 8000,
    precioMayorista: 5000,
    category: "mochilas",
    img: "img/27.jpg",
    variantes: [
      { img: "img/27.jpg",  color: "Verde oscuro"  },
      { img: "img/-27.jpg", color: "Negro"         },
      { img: "img/+27.jpg", color: "Lila oscuro"   },
      { img: "img/.27.jpg", color: "Burdeo"        }
    ]
  },
  { id: 11, name: "Cartera Pinko",            price: 12000, precioMayorista: 7500, category: "carteras",   img: "img/(8).jpg"  },
  { id: 12, name: "Mini bags",                price: 5000,  precioMayorista: 3500, category: "carteras",   img: "img/(10).jpg" },
  { id: 13, name: "Mochila Inspiracion",      price: 12000, precioMayorista: 7500, category: "mochilas",   img: "img/(11).jpg" },
  { id: 14, name: "Cartera Chanel",           price: 12000, precioMayorista: 6500, category: "carteras",   img: "img/(12).jpg" },
  { id: 15, name: "Bolso notebook hombre",    price: 10000, precioMayorista: 6000, category: "bolsos",     img: "img/(14).jpg" },
  { id: 16, name: "Bandolera kipling + llavero", price: 12000, precioMayorista: 6000, category: "bandoleras", img: "img/(15).jpg" },
  { id: 17, name: "Bolso hombre",             price: 6000,  precioMayorista: 3500, category: "bolsos",     img: "img/(16).jpg" },
  { id: 18, name: "Cartera boutique",         price: 12000, precioMayorista: 6500, category: "carteras",   img: "img/(17).jpg" },
  { id: 19, name: "Cartera nicol lee",        price: 6500,  precioMayorista: 3500, category: "carteras",   img: "img/18.jpg"   },
  { id: 20, name: "Cross body",               price: 6000,  precioMayorista: 3500, category: "bandoleras", img: "img/20.jpg"   },
  { id: 22, name: "Cartera de fiesta",        price: 8000,  precioMayorista: 5500, category: "carteras",   img: "img/22.jpg"   }
];

let favorites = JSON.parse(localStorage.getItem("blessed_favorites") || "[]");
let activeCategory = "todos";
let searchTerm = "";
let visibleCount = 8;
let cart = JSON.parse(localStorage.getItem("blessed_cart") || "[]");
window.productGalleryIndex = window.productGalleryIndex || {};
window.zoomGalleryIndex = window.zoomGalleryIndex || 0;

/* =========================================================
   UTILIDADES
   ========================================================= */
function money(n) {
  if (!n || n === 0) return "Por definir";
  return "$" + Number(n).toLocaleString("es-CL");
}

function escapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}

function placeholderImg(img) {
  img.onerror = null;
  img.src = "img/p01.jpg";
}

/* =========================================================
   PRODUCTOS: filtrado + renderizado
   ========================================================= */
function getFilteredProducts() {
  return products.filter(p => {
    let matchesCategory;
    if (activeCategory === "todos") {
      matchesCategory = true;
    } else if (activeCategory === "ofertas") {
      matchesCategory = p.onSale === true;
    } else {
      matchesCategory = p.category === activeCategory;
    }

    const q = searchTerm.toLowerCase();
    const matchesSearch = !q
      || p.name.toLowerCase().includes(q)
      || String(p.code || "").includes(q);

    return matchesCategory && matchesSearch;
  });
}

function renderProducts(list = getFilteredProducts(), target = "productGrid") {
  const grid = document.getElementById(target);
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = '<div class="panel empty-results">💗 No encontramos productos con esa búsqueda.</div>';
    const moreBtn = document.getElementById("loadMoreBtn");
    if (moreBtn) moreBtn.style.display = "none";
    return;
  }

  if (target === "productGrid") {
    const visible = list.slice(0, visibleCount);
    grid.innerHTML = visible.map(productCard).join("");

    const count = document.getElementById("productCount");
    if (count) {
      count.textContent = `${list.length} modelo${list.length === 1 ? "" : "s"} disponible${list.length === 1 ? "" : "s"} · Compra mínima $20.000`;
    }

    const moreBtn = document.getElementById("loadMoreBtn");
    if (moreBtn) {
      if (visibleCount >= list.length) {
        moreBtn.style.display = "none";
      } else {
        moreBtn.style.display = "inline-block";
        const remaining = list.length - visibleCount;
        moreBtn.textContent = `Ver más productos (${remaining})`;
      }
    }
  } else {
    grid.innerHTML = list.map(productCard).join("");
  }
}

function loadMoreProducts() {
  visibleCount += 8;
  renderProducts();
}

function productCard(p) {
  const saved = favorites.includes(p.id);
  const currentIndex = window.productGalleryIndex[p.id] || 0;
  const imgSrc = p.variantes ? p.variantes[currentIndex].img : p.img;

  const galleryHtml = p.variantes ? `
      <button type="button" class="gallery-arrow gallery-prev"
              onclick="event.stopPropagation(); changeProductGallery(${p.id}, -1)">‹</button>
      <button type="button" class="gallery-arrow gallery-next"
              onclick="event.stopPropagation(); changeProductGallery(${p.id}, 1)">›</button>
      <div class="gallery-dots">
        ${p.variantes.map((v, index) => `
          <span class="gallery-dot ${index === currentIndex ? "active" : ""}"
                onclick="event.stopPropagation(); setProductGallery(${p.id}, ${index})"></span>
        `).join("")}
      </div>
  ` : "";

  return `<article class="product">
    <div class="product-img" onclick="${p.variantes ? `openProductImage(${p.id})` : `openProduct(${p.id})`}">
      <div class="product-top">
        <button class="favorite-btn ${saved ? "saved" : ""}"
                onclick="event.stopPropagation(); toggleFavorite(${p.id})"
                aria-label="Favorito">${saved ? "♥" : "♡"}</button>
      </div>
      ${p.pendiente ? '<span class="badge-new">NUEVO</span>' : ""}
      <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(p.name)}" onerror="placeholderImg(this)">
    </div>
    ${galleryHtml}
    <div class="product-info">
      <h3>${escapeHtml(p.name)}</h3>
      <div class="product-meta">
        <span class="product-code">${p.code ? "Código " + escapeHtml(p.code) : "Blessed"}</span>
      </div>
      ${p.pendiente ? `
      <div class="product-prices">
        <div class="pending-box">
          <span class="pending-label">✦ PRÓXIMAMENTE</span>
          <strong class="pending-msg">Precio y colores por definir</strong>
          <small>Contáctanos por WhatsApp para reservar 💗</small>
        </div>
      </div>
    ` : `
      <div class="product-prices">
        <div class="wholesale-box">
          <span class="wholesale-label">✦ ELIGE TU PRECIO</span>
          <label class="price-option">
            <input type="radio" name="price_${p.id}" value="normal" checked>
            <span>Precio Detalle<strong>${money(p.price)}</strong></span>
          </label>
          <label class="price-option">
            <input type="radio" name="price_${p.id}" value="wholesale">
            <span>Precio mayorista<strong>${money(p.precioMayorista || p.price)}</strong></span>
          </label>
        </div>
      </div>
    `}
      <div class="product-actions">
        ${p.pendiente
          ? '<button class="product-btn" disabled style="opacity:.55;cursor:not-allowed">Próximamente</button>'
          : `<button class="product-btn" onclick="addToCart(${p.id})">Agregar 🛍️</button>`}
        <button class="details-btn" onclick="openProduct(${p.id})">Ver</button>
      </div>
    </div>
  </article>`;
}

function filterProducts() {
  searchTerm = document.getElementById("productSearch").value.trim();
  visibleCount = 8;
  renderProducts();
}

function setCategory(cat) {
  activeCategory = cat;
  visibleCount = 8;
  document.querySelectorAll(".filter").forEach(b => {
    b.classList.toggle("active", b.dataset.cat === cat);
  });
  renderProducts();
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(x => x !== id);
  } else {
    favorites = [...favorites, id];
  }
  localStorage.setItem("blessed_favorites", JSON.stringify(favorites));
  renderProducts();
}

/* =========================================================
   MODAL DE PRODUCTO
   ========================================================= */
function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  const modalImg = document.getElementById("modalProductImage");
  modalImg.src = p.img;
  modalImg.onerror = () => placeholderImg(modalImg);

  document.getElementById("modalProductName").textContent = p.name;
  document.getElementById("modalProductCode").textContent = p.code ? `Código: ${p.code}` : "Producto BlessedCarteras";
  document.getElementById("modalProductMeasures").textContent = p.measures ? `Medidas: ${p.measures}` : "Producto seleccionado de nuestra colección.";
  document.getElementById("modalProductPrice").textContent = p.pendiente ? "Precio por definir" : money(p.price);

  const cartBtn = document.getElementById("modalCartButton");
  if (p.pendiente) {
    cartBtn.textContent = "💗 Consultar por WhatsApp";
    cartBtn.onclick = () => {
      window.open("https://wa.me/56968762137?text=" + encodeURIComponent(`Hola BlessedCarteras 💗 quiero consultar por "${p.name}"`), "_blank");
    };
  } else {
    cartBtn.textContent = "🛍️ Agregar al carrito";
    cartBtn.onclick = () => addToCart(p.id);
  }

  const fb = document.getElementById("modalFavoriteButton");
  const isFav = favorites.includes(p.id);
  fb.classList.toggle("saved", isFav);
  fb.textContent = isFav ? "♥ Guardado en favoritos" : "♡ Guardar en favoritos";
  fb.onclick = () => {
    toggleFavorite(p.id);
    openProduct(p.id);
  };

  const modal = document.getElementById("productModal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal(e) {
  const modal = document.getElementById("productModal");
  if (!modal) return;
  if (e && e.target && e.target.id !== "productModal") return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

/* =========================================================
   CARRITO
   ========================================================= */
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  if (p.pendiente) {
    alert("Este producto está próximo a publicarse. Contáctanos por WhatsApp 💗");
    return;
  }

  const selected = document.querySelector(`input[name="price_${id}"]:checked`);
  const tipoPrecio = selected ? selected.value : "normal";
  const precioDetalle = tipoPrecio === "wholesale" ? p.precioMayorista : p.price;

  const varianteIndex = p.variantes ? (window.productGalleryIndex[id] || 0) : 0;
  const variante = p.variantes ? p.variantes[varianteIndex] : null;
  const colorSeleccionado = variante ? variante.color : "";
  const imagenSeleccionada = variante ? variante.img : p.img;

  const item = cart.find(x =>
    x.id === id &&
    x.tipoPrecio === tipoPrecio &&
    (x.colorSeleccionado || "") === colorSeleccionado
  );

  if (item) {
    item.qty++;
  } else {
    cart.push({
      ...p,
      img: imagenSeleccionada,
      price: precioDetalle,
      tipoPrecio: tipoPrecio,
      colorSeleccionado: colorSeleccionado,
      qty: 1
    });
  }

  saveCart();
  openCart();
}

function saveCart() {
  localStorage.setItem("blessed_cart", JSON.stringify(cart));
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    removeItem(id);
  } else {
    saveCart();
  }
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
}

function clearCart() {
  if (cart.length === 0) return;
  if (!confirm("¿Estás segura de que deseas vaciar tu carrito? 💗")) return;
  cart = [];
  saveCart();
}

function renderCart() {
  const cartCountEl = document.getElementById("cartCount");
  if (cartCountEl) {
    cartCountEl.textContent = cart.reduce((s, x) => s + x.qty, 0);
  }

  const box = document.getElementById("cartItems");
  if (!box) return;

  if (!cart.length) {
    box.innerHTML = '<p class="empty-cart">Tu carrito está vacío 💗</p>';
  } else {
    box.innerHTML = cart.map(x => {
      const tipoPrecio = x.tipoPrecio === "wholesale" ? "✦ PRECIO MAYORISTA" : "✦ PRECIO DETALLE";
      const subtotal = x.price * x.qty;

      return `
        <div class="cart-item">
          <img src="${escapeHtml(x.img)}" onerror="placeholderImg(this)" alt="${escapeHtml(x.name)}">
          <div class="cart-item-content">
            <strong>${escapeHtml(x.name)}</strong>
            ${x.colorSeleccionado
              ? `<div class="cart-selected-color">🎨 Color: <strong>${escapeHtml(x.colorSeleccionado)}</strong></div>`
              : ""}
            <div class="cart-price-detail">
              <div class="cart-price-type">${tipoPrecio}</div>
              <div class="cart-selected-price">Precio: <strong>${money(x.price)}</strong></div>
            </div>
            <div class="cart-subtotal">Subtotal: <strong>${money(subtotal)}</strong></div>
            <div class="qty">
              <button onclick="changeQty(${x.id}, -1)" aria-label="Disminuir cantidad">−</button>
              <span>${x.qty}</span>
              <button onclick="changeQty(${x.id}, 1)" aria-label="Aumentar cantidad">+</button>
              <button class="remove-item" onclick="removeItem(${x.id})" aria-label="Eliminar">🗑️</button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.textContent = "Total: " + money(total);
}

function openCart() {
  document.getElementById("cartDrawer")?.classList.add("open");
  document.getElementById("backdrop")?.classList.add("open");
}

function closeCart() {
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.getElementById("backdrop")?.classList.remove("open");
}

/* =========================================================
   CHECKOUT WHATSAPP
   ========================================================= */
function checkoutWhatsApp() {
  if (!cart.length) {
    alert("Tu carrito está vacío 💗");
    return;
  }

  let text = "Hola BlessedCarteras 💗\n\n";
  text += "🛍️ *QUIERO REALIZAR ESTE PEDIDO*\n\n";
  text += "📦 *PRODUCTOS*\n\n";

  cart.forEach(x => {
    const subtotal = x.price * x.qty;
    const tipoPrecio = x.tipoPrecio === "wholesale" ? "✦ Precio Mayorista" : "✦ Precio Detalle";

    text += `👜 *${x.name}*\n`;
    if (x.colorSeleccionado) {
      text += `   🎨 Color: ${x.colorSeleccionado}\n`;
    }
    text += `   ${tipoPrecio}\n`;
    text += `   Precio: ${money(x.price)}\n`;
    text += `   Cantidad: ${x.qty}\n`;
    text += `   Subtotal: ${money(subtotal)}\n\n`;
  });

  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  text += "━━━━━━━━━━━━━━\n";
  text += `💰 *TOTAL: ${money(total)}*\n`;
  text += "━━━━━━━━━━━━━━\n\n";
  text += "💗 *Listo bella*, una vez confirmado su pedido me manda fotito de la transferencia o depósito y sus datos de envío, y estamos OK.\n\n";
  text += "🥰 *Muchas gracias por comprar en BlessedCarteras.*";

  const numeroWhatsApp = "56968762137";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

/* =========================================================
   NAVEGACIÓN / MENÚ
   ========================================================= */
function toggleMenu() {
  document.getElementById("navlinks")?.classList.toggle("open");
}

function focusSearch() {
  document.getElementById("productSearch")?.focus();
  document.getElementById("coleccion")?.scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll(".navlinks a").forEach(a => {
  a.addEventListener("click", () => {
    document.getElementById("navlinks")?.classList.remove("open");
  });
});

/* =========================================================
   OPINIONES
   ========================================================= */
function renderReviews() {
  const reviews = JSON.parse(localStorage.getItem("blessed_reviews") || "[]");
  const box = document.getElementById("reviewsList");
  if (!box) return;

  if (!reviews.length) {
    box.innerHTML = '<p class="empty-reviews">Todavía no hay opiniones. ¡Sé la primera en recomendar BlessedCarteras! 💗</p>';
    return;
  }

  box.innerHTML = reviews.map(r => `
    <div class="review">
      <strong>${escapeHtml(r.name)}</strong>
      <div class="r-stars">${"★".repeat(Number(r.rating) || 0)}${"☆".repeat(5 - (Number(r.rating) || 0))}</div>
      <p>${escapeHtml(r.comment)}</p>
      <small class="review-date">${escapeHtml(r.date)}</small>
    </div>
  `).join("");
}

document.getElementById("reviewForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("reviewName").value.trim();
  const ratingEl = document.querySelector('input[name="rating"]:checked');
  const comment = document.getElementById("reviewComment").value.trim();

  if (!name || !ratingEl || !comment) return;

  const reviews = JSON.parse(localStorage.getItem("blessed_reviews") || "[]");
  reviews.unshift({
    name: name,
    rating: Number(ratingEl.value),
    comment: comment,
    date: new Date().toLocaleDateString("es-CL")
  });

  localStorage.setItem("blessed_reviews", JSON.stringify(reviews.slice(0, 20)));
  e.target.reset();
  renderReviews();
  alert("¡Gracias por compartir tu experiencia con BlessedCarteras! 💗");
});

/* =========================================================
   GALERÍA DE PRODUCTOS (variantes)
   ========================================================= */
function changeProductGallery(id, direction) {
  const product = products.find(p => p.id === id);
  if (!product || !product.variantes) return;

  let index = window.productGalleryIndex[id] || 0;
  index += direction;

  if (index < 0) index = product.variantes.length - 1;
  if (index >= product.variantes.length) index = 0;

  window.productGalleryIndex[id] = index;
  renderProducts();
}

function setProductGallery(id, index) {
  const product = products.find(p => p.id === id);
  if (!product || !product.variantes) return;

  window.productGalleryIndex[id] = index;
  renderProducts();
}

/* =========================================================
   ZOOM DE PRODUCTO (modal de imagen)
   ========================================================= */
function openProductImage(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const images = product.variantes || [{ img: product.img, color: "" }];
  window.zoomGalleryIndex = window.productGalleryIndex[id] || 0;

  let modal = document.getElementById("product-image-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "product-image-modal";
    modal.innerHTML = `
      <div class="zoom-overlay" onclick="closeProductImage(event)">
        <button type="button" class="zoom-close" onclick="closeProductImage(event)" aria-label="Cerrar">×</button>
        <button type="button" class="zoom-arrow zoom-prev" onclick="changeZoomImage(event, -1)">‹</button>
        <div class="zoom-content" onclick="event.stopPropagation()">
          <img id="zoom-product-image" src="" alt="">
          <div id="zoom-product-name" class="zoom-product-name"></div>
        </div>
        <button type="button" class="zoom-arrow zoom-next" onclick="changeZoomImage(event, 1)">›</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  modal.dataset.productId = id;
  updateZoomImage(id);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateZoomImage(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const images = product.variantes || [{ img: product.img, color: "" }];

  let index = window.zoomGalleryIndex || 0;
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  window.zoomGalleryIndex = index;

  const image = document.getElementById("zoom-product-image");
  const name = document.getElementById("zoom-product-name");

  if (image) {
    image.src = images[index].img;
    image.alt = product.name;
    image.onerror = () => placeholderImg(image);
  }
  if (name) {
    name.textContent = `${product.name} · ${images[index].color || ""}`;
  }
}

function changeZoomImage(event, direction) {
  if (event) event.stopPropagation();

  const modal = document.getElementById("product-image-modal");
  if (!modal) return;

  const id = Number(modal.dataset.productId);
  const product = products.find(p => p.id === id);
  if (!product) return;

  const images = product.variantes || [{ img: product.img, color: "" }];

  let index = window.zoomGalleryIndex || 0;
  index += direction;

  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  window.zoomGalleryIndex = index;
  updateZoomImage(id);
}

function closeProductImage(event) {
  if (event) event.stopPropagation();
  const modal = document.getElementById("product-image-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

/* =========================================================
   ATAJOS DE TECLADO
   ========================================================= */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeProductModal();
    closeCart();
    closeProductImage();
  }
});

/* =========================================================
   AÑO EN FOOTER
   ========================================================= */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =========================================================
   RENDER INICIAL
   ========================================================= */
renderProducts();
renderCart();
renderReviews();