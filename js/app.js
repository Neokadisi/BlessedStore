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
  const productsSection = document.getElementById("destacados-section");
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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
}

function setCategory(cat) {
  activeCategory = cat;
  currentPage = 1;
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

  try {
    const response = await fetch(apiUrl('/api/opiniones'));
    const data = await response.json();

    if (!data.success || !data.opiniones?.length) {
      box.innerHTML = '<p class="empty-reviews">Todavía no hay opiniones. ¡Sé la primera en recomendar BlessedCarteras! 💗</p>';
      return;
    }

    box.innerHTML = data.opiniones.map(r => `
      <div class="review">
        <strong>${escapeHtml(r.nombre)}</strong>
        <div class="r-stars">${"★".repeat(Number(r.calificacion) || 0)}${"☆".repeat(5 - (Number(r.calificacion) || 0))}</div>
        <p>${escapeHtml(r.comentario)}</p>
        <small class="review-date">${escapeHtml(new Date(r.fecha_creacion).toLocaleDateString("es-CL"))}</small>
      </div>
    `).join("");

  } catch (err) {
    console.error('Error cargando opiniones:', err);
    box.innerHTML = '<p class="empty-reviews">Error cargando opiniones. Intenta recargar la página. 💗</p>';
  }
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

  try {
    const response = await fetch(apiUrl('/api/opiniones'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: name,
        email: currentUser?.email || 'anonimo@blessedcarteras.cl',
        calificacion: Number(ratingEl.value),
        comentario: comment
      })
    });

    const data = await response.json();

    if (data.success) {
      e.target.reset();
      renderReviews();
      alert("¡Gracias por compartir tu experiencia con BlessedCarteras! 💗");
    } else {
      alert(data.message || "Error al publicar la opinión");
    }
  } catch (err) {
    console.error('Error publicando opinión:', err);
    alert("Error de conexión. Intenta más tarde. 💗");
  } finally {
    btn.disabled = false;
    btn.textContent = "Publicar opinión";
  }
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
   CUENTA REGRESIVA - LANZAMIENTO
   ========================================================= */
// Viernes 4 de septiembre de 2026 a las 22:00 hrs (hora local del visitante)
const launchDate = new Date(2026, 8, 4, 22, 0, 0).getTime();

let countdownDone = false;

function updateCountdown() {
  const now = Date.now();
  const diff = launchDate - now;

  const ids = ["cd-dias", "cd-horas", "cd-minutos", "cd-segundos"];
  const msgEl = document.getElementById("countdown-message");
  const gridEl = document.getElementById("countdown-grid");
  const contentEl = document.getElementById("lanzamiento-contenido");
  const countdownSection = document.getElementById("cuenta-regresiva");

  if (diff <= 0 || true) {
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = "0";
    });
    if (msgEl) msgEl.innerHTML = "🎉 ¡Ya estamos en vivo! Visítanos y descubre toda nuestra colección 💗";
    if (gridEl) gridEl.classList.add("countdown-launched");

    if (!countdownDone && contentEl) {
      contentEl.hidden = false;
      if (countdownSection) countdownSection.style.display = "none";
      countdownDone = true;
      document.body.classList.remove("prelaunch");
      renderProducts();
      renderCart();
      renderReviews();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val).padStart(2, "0");
  };
  set("cd-dias", dias);
  set("cd-horas", horas);
  set("cd-minutos", minutos);
  set("cd-segundos", segundos);

  if (msgEl) {
    if (dias === 0 && horas < 1) {
      msgEl.innerHTML = `⏰ ¡Faltan menos de ${horas * 60 + minutos} minutos! 💗`;
    } else if (dias === 0) {
      msgEl.innerHTML = `🔥 ¡Hoy es el gran día! Nos vemos a las 22:00 hrs 💗`;
    } else if (dias === 1) {
      msgEl.innerHTML = `💫 ¡Mañana abrimos las puertas de BlessedCarteras!`;
    } else {
      msgEl.innerHTML = `💗 ¡Los esperamos con mucha ilusión!`;
    }
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =========================================================
   RENDER INICIAL
   ========================================================= */
// Asegurar que los productos se rendericen al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
  renderReviews();
  actualizarBotonLogin();
});

/* =========================================================
   LOGIN Y REGISTRO
   ========================================================= */
let currentUser = JSON.parse(localStorage.getItem("blessed_user") || "null");
let loginToken = localStorage.getItem("blessed_token") || null;

function getLocalUsers() {
  try {
    return JSON.parse(localStorage.getItem("blessed_users") || "[]");
  } catch (e) {
    return [];
  }
}

function saveLocalUser(usuario) {
  const users = getLocalUsers();
  users.push(usuario);
  localStorage.setItem("blessed_users", JSON.stringify(users));
}

function findLocalUser(email) {
  return getLocalUsers().find(u => u.email === email);
}

function actualizarBotonLogin() {
  const btn = document.getElementById("loginBtn");
  if (!btn) return;
  if (currentUser) {
    btn.innerHTML = `👤`;
    btn.title = `Mi cuenta (${escapeHtml(currentUser.nombre)})`;
    btn.onclick = toggleUserMenu;
  } else {
    btn.innerHTML = `👤`;
    btn.title = "Mi cuenta";
    btn.onclick = () => { closeUserMenu(); openLoginModal(); };
  }
  actualizarDropdown();
}

function actualizarDropdown() {
  const dropdown = document.getElementById("userDropdown");
  const card = document.getElementById("userDropdownCard");
  const nameEl = document.getElementById("userNameDisplay");
  const emailEl = document.getElementById("userEmailDisplay");
  const avatarEl = document.getElementById("userAvatar");

  if (!dropdown || !card || !nameEl || !emailEl || !avatarEl) return;

  const iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4.5"></circle><path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path></svg>`;

  if (currentUser) {
    nameEl.textContent = currentUser.nombre || "Usuario";
    emailEl.textContent = currentUser.email || "";
    avatarEl.innerHTML = iconSvg;
    card.classList.remove("guest");
    card.classList.add("signed-in");
  } else {
    nameEl.textContent = "Invitado";
    emailEl.textContent = "Inicia sesión para ver tu cuenta";
    avatarEl.innerHTML = iconSvg;
card.classList.add("guest");
    card.classList.remove("signed-in");
  }
}

function toggleUserMenu(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById("userDropdown");
  if (!dropdown) return;
  const isOpen = dropdown.classList.contains("open");
  if (isOpen) {
    closeUserMenu();
  } else {
    dropdown.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeUserMenu() {
  const dropdown = document.getElementById("userDropdown");
  if (dropdown) {
    dropdown.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function abrirMiCuenta() {
  closeUserMenu();
  const user = currentUser;
  if (!user) {
    openLoginModal();
    return;
  }

  const nombreEl = document.getElementById("profileNombre");
  const emailRowEl = document.getElementById("profileEmailRow");
  const emailEl = document.getElementById("profileEmail");
  const nameEl = document.getElementById("profileName");
  const rolEl = document.getElementById("profileRol");

  if (nombreEl) nombreEl.textContent = user.nombre || "";
  if (emailRowEl) emailRowEl.textContent = user.email || "";
  if (emailEl) emailEl.textContent = user.email || "";
  if (nameEl) nameEl.textContent = user.nombre || "Mi cuenta";
  if (rolEl) rolEl.textContent = user.rol === "admin" ? "Administrador" : "Cliente";

  const modal = document.getElementById("profileModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeProfileModal(e) {
  if (e && e.target && e.target.id !== "profileModal") return;
  const modal = document.getElementById("profileModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function logoutFromProfile() {
  closeProfileModal();
  logout();
}

function refrescarPerfilBackend() {
  if (!currentUser) return;
  fetch(apiUrl(`/api/perfil/${currentUser.id}`))
    .then(res => res.ok ? res.json() : Promise.resolve(null))
    .then(data => {
      if (data && data.success && data.usuario) {
        currentUser = { ...currentUser, ...data.usuario };
        localStorage.setItem("blessed_user", JSON.stringify(currentUser));
        actualizarBotonLogin();
      }
    })
    .catch(() => {});
}

function openLoginModal() {
  const modal = document.getElementById("loginModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    switchTab('login');
    limpiarErrores();
  }
}

function closeLoginModal(e) {
  if (e && e.target && e.target.id !== "loginModal") return;
  const modal = document.getElementById("loginModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function switchTab(tab) {
  const tabLogin = document.getElementById("tabLogin");
  const tabRegistro = document.getElementById("tabRegistro");
  const loginForm = document.getElementById("loginForm");
  const registroForm = document.getElementById("registroForm");

  if (tab === 'login') {
    tabLogin.classList.add('active');
    tabRegistro.classList.remove('active');
    loginForm.classList.remove('hidden');
    registroForm.classList.add('hidden');
  } else {
    tabLogin.classList.remove('active');
    tabRegistro.classList.add('active');
    loginForm.classList.add('hidden');
    registroForm.classList.remove('hidden');
  }
  limpiarErrores();
}

function limpiarErrores() {
  const loginError = document.getElementById("loginError");
  const registroError = document.getElementById("registroError");
  if (loginError) loginError.textContent = "";
  if (registroError) registroError.textContent = "";
}

function apiUrl(path) {
  const base = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';
  return `${base}${path}`;
}

async function tryLoginBackend(email, password) {
  try {
    const response = await fetch(apiUrl('/api/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.ok ? await response.json() : null;
  } catch (e) {
    return null;
  }
}

async function tryRegistroBackend(nombre, email, password) {
  try {
    const response = await fetch(apiUrl('/api/registro'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, password })
    });
    return response.ok ? await response.json() : null;
  } catch (e) {
    return null;
  }
}

async function handleLogin(e) {
  e.preventDefault();
  limpiarErrores();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const btn = document.getElementById("loginSubmitBtn");

  if (!email || !password) {
    document.getElementById("loginError").textContent = "Completa todos los campos";
    return;
  }

  btn.disabled = true;
  btn.textContent = "Verificando...";

  try {
    const data = await tryLoginBackend(email, password);
    if (data && data.success) {
      currentUser = data.usuario;
      localStorage.setItem("blessed_user", JSON.stringify(currentUser));
      closeLoginModal();
      actualizarBotonLogin();
      refrescarPerfilBackend();
      alert(`¡Bienvenida ${data.usuario.nombre}! 💗`);
      document.getElementById("loginForm").reset();
      return;
    }
  } catch (err) {
    console.error('Error en login:', err);
  }

  const localUser = findLocalUser(email);
  if (localUser && localUser.password === password) {
    currentUser = { id: localUser.id, nombre: localUser.nombre, email: localUser.email, rol: localUser.rol };
    localStorage.setItem("blessed_user", JSON.stringify(currentUser));
    closeLoginModal();
    actualizarBotonLogin();
    alert(`¡Bienvenida ${currentUser.nombre}! 💗`);
    document.getElementById("loginForm").reset();
    return;
  }

  document.getElementById("loginError").textContent = "Email o contraseña incorrectos";
  btn.disabled = false;
  btn.textContent = "Ingresar";
}

async function handleRegistro(e) {
  e.preventDefault();
  limpiarErrores();

  const nombre = document.getElementById("registroNombre").value.trim();
  const email = document.getElementById("registroEmail").value.trim();
  const password = document.getElementById("registroPassword").value;
  const btn = document.getElementById("registroSubmitBtn");

  if (!nombre || !email || !password) {
    document.getElementById("registroError").textContent = "Completa todos los campos";
    return;
  }

  if (password.length < 6) {
    document.getElementById("registroError").textContent = "La contraseña debe tener al menos 6 caracteres";
    return;
  }

  btn.disabled = true;
  btn.textContent = "Creando cuenta...";

  try {
    const data = await tryRegistroBackend(nombre, email, password);
    if (data && data.success) {
      const loginData = await tryLoginBackend(email, password);
      if (loginData && loginData.success) {
        currentUser = loginData.usuario;
        localStorage.setItem("blessed_user", JSON.stringify(currentUser));
        closeLoginModal();
        actualizarBotonLogin();
        refrescarPerfilBackend();
        alert(`¡Bienvenida ${currentUser.nombre}! Tu cuenta ha sido creada 💗`);
        document.getElementById("registroForm").reset();
        switchTab('login');
        return;
      }
      alert("¡Cuenta creada exitosamente! Ahora inicia sesión 💗");
      document.getElementById("registroForm").reset();
      switchTab('login');
      return;
    }
  } catch (err) {
    console.error('Backend no disponible, se usará almacenamiento local:', err);
  }

  const localUser = findLocalUser(email);
  if (localUser) {
    document.getElementById("registroError").textContent = "Este email ya está registrado localmente";
    btn.disabled = false;
    btn.textContent = "Crear cuenta";
    return;
  }

  const nuevoUsuario = {
    id: Date.now(),
    nombre,
    email,
    password,
    rol: 'cliente',
    activo: true,
    fecha_creacion: new Date().toISOString()
  };

  saveLocalUser(nuevoUsuario);
  currentUser = { id: nuevoUsuario.id, nombre: nuevoUsuario.nombre, email: nuevoUsuario.email, rol: nuevoUsuario.rol };
  localStorage.setItem("blessed_user", JSON.stringify(currentUser));
  closeLoginModal();
  actualizarBotonLogin();
  alert(`¡Bienvenida ${currentUser.nombre}! Tu cuenta ha sido creada 💗`);
  document.getElementById("registroForm").reset();
  switchTab('login');
  btn.disabled = false;
  btn.textContent = "Crear cuenta";
}

function logout() {
  if (confirm("¿Cerrar sesión?")) {
    currentUser = null;
    localStorage.removeItem("blessed_user");
    actualizarBotonLogin();
    closeUserMenu();
    alert("Sesión cerrada. ¡Vuelve pronto! 💗");
  }
}

function handleLoginClick() {
  if (currentUser) {
    toggleUserMenu();
  } else {
    closeUserMenu();
    openLoginModal();
  }
}

document.addEventListener("click", e => {
  const dropdown = document.getElementById("userDropdown");
  const btn = document.getElementById("loginBtn");
  if (!dropdown || !btn) return;
  if (!dropdown.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
    closeUserMenu();
  }
});

window.addEventListener("beforeunload", () => {
  if (currentUser) {
    localStorage.setItem("blessed_user", JSON.stringify(currentUser));
  }
});

refrescarPerfilBackend();