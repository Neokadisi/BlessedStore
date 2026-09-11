/* =========================================================
   JAVASCRIPT: comportamiento y funcionalidades de BlessedCarteras
   ========================================================= */

const products = [
  // ===== PRODUCTOS NUEVOS (precios y colores por definir) =====
  { id: 101, name: "Billeteras artesanal 01", price: 2000, precioMayorista: 1200, category: "billeteras",   img: "img/nueva-01.jpg", pendiente: true },
  { id: 102, name: "Estuche Cosmetiquero 02", price: 3000, precioMayorista: 2000, category: "cosmetiqueros",   img: "img/nueva-02.jpg", pendiente: true },
  { id: 103, name: "Cross Body 03", price: 7000, precioMayorista: 5000, category: "cross body",     img: "img/nueva-03.jpg", pendiente: true },
  { id: 104, name: "Cross Body 04", price: 7000, precioMayorista: 5000, category: "cross body",   img: "img/nueva-04.jpg", pendiente: true },
  { id: 105, name: "Cartera Sobre 05", price: 4000, precioMayorista: 2500, category: "cartera sobre", img: "img/nueva-05.jpg", pendiente: true },
  { id: 106, name: "Estuche Cosmetiquero Vintage 06", price: 1500, precioMayorista: 1000, category: "cosmetiqueros",   img: "img/nueva-06.jpg", pendiente: true },
  { id: 107, name: "Estuche Cosmetiquero XL 07", price: 3000, precioMayorista: 2000, category: "cosmetiqueros",   img: "img/nueva-07.jpg", pendiente: true },
  { id: 108, name: "Estuche Cosmetiquero XL 08", price: 3000, precioMayorista: 2000, category: "cosmetiqueros",   img: "img/nueva-08.jpg", pendiente: true },
  { id: 144, name: "Producto nuevo 01", pendiente: true, img: "img/producto_01.jpg", category: "billeteras" },
  { id: 145, name: "Producto nuevo 02", pendiente: true, img: "img/producto_02.jpg", category: "billeteras" },
  { id: 146, name: "Producto nuevo 03", pendiente: true, img: "img/producto_03.jpg", category: "billeteras" },
  { id: 147, name: "Producto nuevo 04", pendiente: true, img: "img/producto_04.jpg", category: "billeteras" },
  { id: 148, name: "Producto nuevo 05", pendiente: true, img: "img/producto_05.jpg", category: "billeteras" },
  { id: 149, name: "Producto nuevo 06", pendiente: true, img: "img/producto_06.jpg", category: "billeteras" },
  { id: 150, name: "Producto nuevo 07", pendiente: true, img: "img/producto_07.jpg", category: "billeteras" },
  { id: 151, name: "Producto nuevo 08", pendiente: true, img: "img/producto_08.jpg", category: "billeteras" },
  { id: 152, name: "Producto nuevo 09", pendiente: true, img: "img/producto_09.jpg", category: "billeteras" },
  { id: 153, name: "Producto nuevo 10", pendiente: true, img: "img/producto_10.jpg", category: "billeteras" },
  { id: 154, name: "Producto nuevo 11", pendiente: true, img: "img/producto_11.jpg", category: "billeteras" },
  { id: 155, name: "Producto nuevo 12", pendiente: true, img: "img/producto_12.jpg", category: "billeteras" },
  { id: 156, name: "Producto nuevo 13", pendiente: true, img: "img/producto_13.jpg", category: "billeteras" },
  { id: 157, name: "Producto nuevo 14", pendiente: true, img: "img/producto_14.jpg", category: "billeteras" },
  { id: 158, name: "Producto nuevo 15", pendiente: true, img: "img/producto_15.jpg", category: "billeteras" },
  { id: 159, name: "Producto nuevo 16", pendiente: true, img: "img/producto_16.jpg", category: "billeteras" },
  { id: 160, name: "Producto nuevo 17", pendiente: true, img: "img/producto_17.jpg", category: "billeteras" },
  { id: 161, name: "Producto nuevo 18", pendiente: true, img: "img/producto_18.jpg", category: "billeteras" },
  { id: 162, name: "Producto nuevo 19", pendiente: true, img: "img/producto_19.jpg", category: "billeteras" },
  { id: 163, name: "Producto nuevo 20", pendiente: true, img: "img/producto_20.jpg", category: "billeteras" },

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
let currentPage = 1;
const productsPerPage = 8;
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
    const pagination = document.getElementById("pagination");
    if (pagination) pagination.innerHTML = "";
    return;
  }

  if (target === "productGrid") {
    const totalPages = Math.ceil(list.length / productsPerPage);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const visible = list.slice(start, end);
    grid.innerHTML = visible.map(productCard).join("");

    const count = document.getElementById("productCount");
    if (count) {
      count.textContent = `${list.length} modelo${list.length === 1 ? "" : "s"} disponible${list.length === 1 ? "" : "s"} · Compra mínima $20.000`;
    }

    renderPagination(totalPages);
  } else {
    grid.innerHTML = list.map(productCard).join("");
  }
}

function renderPagination(totalPages) {
  const pagination = document.getElementById("pagination");
  if (!pagination) return;

  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }

  let html = "";
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  if (startPage > 1) {
    html += `<button class="page-btn" onclick="goToPage(1)" aria-label="Primera página">«</button>`;
    html += `<button class="page-btn" onclick="goToPage(${currentPage - 1})" aria-label="Página anterior">‹</button>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})" aria-label="Página ${i}">${i}</button>`;
  }

  if (endPage < totalPages) {
    html += `<button class="page-btn" onclick="goToPage(${currentPage + 1})" aria-label="Página siguiente">›</button>`;
    html += `<button class="page-btn" onclick="goToPage(${totalPages})" aria-label="Última página">»</button>`;
  }

  pagination.innerHTML = html;
}

function goToPage(page) {
  currentPage = page;
  renderProducts();
  setTimeout(() => {
    const productsSection = document.getElementById("destacados");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, 100);
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
      ${p.pendiente && !p.price ? '<span class="badge-new">NUEVO</span>' : ""}
      <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(p.name)}" onerror="placeholderImg(this)">
    </div>
    ${galleryHtml}
    <div class="product-info">
      <h3>${escapeHtml(p.name)}</h3>
      <div class="product-meta">
        <span class="product-code">${p.code ? "Código " + escapeHtml(p.code) : "Blessed"}</span>
      </div>
      ${p.pendiente && !p.price ? `
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
        ${p.pendiente && !p.price
          ? '<button class="product-btn" disabled style="opacity:.55;cursor:not-allowed">Próximamente</button>'
          : `<button class="product-btn" onclick="addToCart(${p.id})">Agregar 🛍️</button>`}
        <button class="details-btn" onclick="openProduct(${p.id})">Ver</button>
      </div>
    </div>
  </article>`;
}

function filterProducts() {
  searchTerm = document.getElementById("productSearch").value.trim();
  currentPage = 1;
  renderProducts();
  setTimeout(() => {
    const el = document.getElementById("destacados");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

function setCategory(cat) {
  activeCategory = cat;
  currentPage = 1;
  document.querySelectorAll(".filter").forEach(b => {
    b.classList.toggle("active", b.dataset.cat === cat);
  });
  renderProducts();
  setTimeout(() => {
    const el = document.getElementById("destacados");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
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
  document.getElementById("modalProductPrice").textContent = (p.pendiente && !p.price) ? "Precio por definir" : money(p.price);

  const cartBtn = document.getElementById("modalCartButton");
  if (p.pendiente && !p.price) {
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

  if (p.pendiente && !p.price) {
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
async function renderReviews() {
  const box = document.getElementById("reviewsList");
  if (!box) return;

  box.innerHTML = '<p class="empty-reviews">Cargando opiniones... 💗</p>';

  // Intentar cargar desde backend
  try {
    const response = await fetch(apiUrl('/api/opiniones'));
    if (response.ok) {
      const data = await response.json();

      if (data.success && data.opiniones?.length) {
        box.innerHTML = data.opiniones.map(r => `
          <div class="review">
            <strong>${escapeHtml(r.nombre)}</strong>
            <div class="r-stars">${"★".repeat(Number(r.calificacion) || 0)}${"☆".repeat(5 - (Number(r.calificacion) || 0))}</div>
            <p>${escapeHtml(r.comentario)}</p>
            <small class="review-date">${escapeHtml(new Date(r.fecha_creacion).toLocaleDateString("es-CL"))}</small>
          </div>
        `).join("");
        return;
      }
    }
  } catch (err) {
    console.log('Backend no disponible, usando localStorage:', err.message);
  }

  // Fallback a localStorage
  const reviews = JSON.parse(localStorage.getItem("blessed_reviews") || "[]");
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

document.getElementById("reviewForm")?.addEventListener("submit", async e => {
  e.preventDefault();

  const name = document.getElementById("reviewName").value.trim();
  const ratingEl = document.querySelector('input[name="rating"]:checked');
  const comment = document.getElementById("reviewComment").value.trim();

  if (!name || !ratingEl || !comment) return;

  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = "Publicando...";

  const newReview = {
    nombre: name,
    email: 'anonimo@blessedcarteras.cl',
    calificacion: Number(ratingEl.value),
    comentario: comment,
    fecha_creacion: new Date().toISOString()
  };

  // Intentar guardar en backend
  let savedInBackend = false;
  try {
    const response = await fetch(apiUrl('/api/opiniones'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview)
    });

    const data = await response.json();

    if (data.success) {
      savedInBackend = true;
    }
  } catch (err) {
    console.log('Backend no disponible, guardando en localStorage:', err.message);
  }

  // Si no se pudo guardar en backend, usar localStorage
  if (!savedInBackend) {
    const reviews = JSON.parse(localStorage.getItem("blessed_reviews") || "[]");
    reviews.unshift({
      name: name,
      rating: Number(ratingEl.value),
      comment: comment,
      date: new Date().toLocaleDateString("es-CL")
    });
    localStorage.setItem("blessed_reviews", JSON.stringify(reviews.slice(0, 20)));
  }

  e.target.reset();
  renderReviews();
  alert("¡Gracias por compartir tu experiencia con BlessedCarteras! 💗");

  btn.disabled = false;
  btn.textContent = "Publicar opinión";
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
// Asegurar que los productos se rendericen al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
  renderReviews();
});
