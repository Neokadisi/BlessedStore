/* =========================================================
   JAVASCRIPT: comportamiento y funcionalidades de BlessedCarteras
   ========================================================= */

// URL base del backend (vacío = mismo dominio). Si tu backend está en otro dominio, ponlo aquí.
const API_BASE = "";
function apiUrl(path) {
  return API_BASE + path;
}

const products = [
  // ===== PRODUCTOS NUEVOS (precios y colores por definir) =====
  { id: 101, name: "Billeteras artesanal 01", price: 1200, precioMayorista: 1200, category: "billeteras",   img: "img/nueva-01.jpg", pendiente: true },
  { id: 102, name: "Estuche Cosmetiquero 02", price: 2000, precioMayorista: 2000, category: "cosmetiqueros",   img: "img/nueva-02.jpg", pendiente: true },
  { id: 103, name: "Cross Body 03", price: 5000, precioMayorista: 5000, category: "cross body",     img: "img/nueva-03.jpg", pendiente: true },
  { id: 104, name: "Cross Body 04", price: 5000, precioMayorista: 5000, category: "cross body",   img: "img/nueva-04.jpg", pendiente: true },
  { id: 105, name: "Cartera Sobre 05", price: 2500, precioMayorista: 2500, category: "cartera sobre", img: "img/nueva-05.jpg", pendiente: true },
  { id: 106, name: "Estuche Cosmetiquero Vintage 06", price: 1000, precioMayorista: 1000, category: "cosmetiqueros",   img: "img/nueva-06.jpg", pendiente: true },
  { id: 107, name: "Estuche Cosmetiquero XL 07", price: 2000, precioMayorista: 2000, category: "cosmetiqueros",   img: "img/nueva-07.jpg", pendiente: true },
  { id: 108, name: "Estuche Cosmetiquero XL 08", price: 2000, precioMayorista: 2000, category: "cosmetiqueros",   img: "img/nueva-08.jpg", pendiente: true },
  { id: 144, name: "Porta Celular 09",  precioMayorista: 2500, img: "img/producto_01.jpg", category: "porta celulares" },
  { id: 145, name: "Billetera Peluda 10", precioMayorista: 2000, img: "img/producto_02.jpg", category: "billeteras" },
  { id: 146, name: "Billetera estilo Sobre 11", precioMayorista: 2000, img: "img/producto_03.jpg", category: "billeteras" },
  { id: 147, name: "Billetera Grande 12", precioMayorista: 2000, img: "img/producto_04.jpg", category: "billeteras" },
  { id: 148, name: "Mini Estuche unicornio 13", precioMayorista: 1000, img: "img/producto_05.jpg", category: "mini estuches" },
  { id: 149, name: "Billetra de Hombre 14", precioMayorista: 1500, img: "img/producto_06.jpg", category: "billeteras" },
  { id: 150, name: "Billetera Nicol Lee 15", precioMayorista: 1000, img: "img/producto_07.jpg", category: "billeteras" },
  { id: 151, name: "Estuche Cosmetiquero 16", precioMayorista: 2000, img: "img/producto_08.jpg", category: "cosmetiqueros" },
  { id: 152, name: "Estuche Cosmetiquero 17", precioMayorista: 2000, img: "img/producto_09.jpg", category: "cosmetiqueros" },
  { id: 153, name: "Billetera Elefante 18", precioMayorista: 1000, img: "img/producto_10.jpg", category: "billeteras" },
  { id: 154, name: "Estuche Cosmetiquero 19", precioMayorista: 2000, img: "img/producto_11.jpg", category: "cosmetiqueros" },
  { id: 155, name: "Estuche Cosmetiquero 20", precioMayorista: 2000, img: "img/producto_12.jpg", category: "cosmetiqueros" },
  { id: 157, name: "Mini Billetera Lentejuela 21", precioMayorista: 1000, img: "img/producto_14.jpg", category: "billeteras" },
  { id: 158, name: "Billetera Peluda 22", precioMayorista: 2000, img: "img/producto_15.jpg", category: "billeteras" },
  { id: 159, name: "Billetera peluda Mariposa 23", precioMayorista: 2000, img: "img/producto_16.jpg", category: "billeteras" },
  { id: 160, name: "Billetera Peluda 24", precioMayorista: 1000, img: "img/producto_17.jpg", category: "billeteras" },
  { id: 161, name: "Billetera Peluda Gatito 25", precioMayorista: 2000, img: "img/producto_18.jpg", category: "billeteras" },
  { id: 162, name: "Billetera Boutique 26", precioMayorista: 2000, img: "img/producto_19.jpg", category: "billeteras" },

  // ===== CATÁLOGO EXISTENTE =====
  {
    id: 1,
    name: "Porta Celulares boutique 27",
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
    name: "Cartera boutique brillo 28",
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
    name: "Bolso Inspiracion 29",
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
    name: "Bandolera Impermiable 30",
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
    name: "2 en 1 Cartera Mochila 31",
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
  { id: 11, name: "Cartera Pinko 32",            price: 12000, precioMayorista: 7500, category: "carteras",   img: "img/(8).jpg"  },
  { id: 12, name: "Mini bags 33",                price: 5000,  precioMayorista: 3500, category: "carteras",   img: "img/(10).jpg" },
  { id: 13, name: "Mochila Inspiracion 34",      price: 12000, precioMayorista: 7500, category: "mochilas",   img: "img/(11).jpg" },
  { id: 14, name: "Cartera Chanel 35",           price: 12000, precioMayorista: 6500, category: "carteras",   img: "img/(12).jpg" },
  { id: 15, name: "Bolso notebook hombre 36",    price: 10000, precioMayorista: 6000, category: "bolsos",     img: "img/(14).jpg" },
  { id: 16, name: "Bandolera kipling + llavero 37", price: 12000, precioMayorista: 6000, category: "bandoleras", img: "img/(15).jpg" },
  { id: 17, name: "Bolso hombre 38",             price: 6000,  precioMayorista: 3500, category: "bolsos",     img: "img/(16).jpg" },
  { id: 18, name: "Cartera boutique 39",         price: 12000, precioMayorista: 6500, category: "carteras",   img: "img/(17).jpg" },
  { id: 19, name: "Cartera nicol lee 40",        price: 6500,  precioMayorista: 3500, category: "carteras",   img: "img/18.jpg"   },
  { id: 20, name: "Cross body 41",               price: 6000,  precioMayorista: 3500, category: "bandoleras", img: "img/20.jpg"   },
  { id: 22, name: "Cartera de fiesta 42",        price: 8000,  precioMayorista: 5500, category: "carteras",   img: "img/22.jpg"   }
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
   STOCK
   Número = unidades disponibles | 0 = AGOTADO | null = sin control (se muestra normal)
   Para actualizar: cambia los números y vuelve a subir app.js
   ========================================================= */
const LOW_STOCK = 5; // con este número o menos se muestra "¡Quedan N!"

const STOCK = {
  101: 0, // Billeteras artesanal 01
  102: null, // Estuche Cosmetiquero 02
  103: null, // Cross Body 03
  104: null, // Cross Body 04
  105: null, // Cartera Sobre 05
  106: null, // Estuche Cosmetiquero Vintage 06
  107: null, // Estuche Cosmetiquero XL 07
  108: null, // Estuche Cosmetiquero XL 08
  144: null, // Porta Celular 09
  145: null, // Billetera Peluda 10
  146: null, // Billetera estilo Sobre 11
  147: null, // Billetera Grande 12
  148: null, // Mini Estuche unicornio 13
  149: null, // Billetra de Hombre 14
  150: null, // Billetera Nicol Lee 15
  151: null, // Estuche Cosmetiquero 16
  152: null, // Estuche Cosmetiquero 17
  153: null, // Billetera Elefante 18
  154: null, // Estuche Cosmetiquero 19
  155: null, // Estuche Cosmetiquero 20
  157: null, // Mini Billetera Lentejuela 21
  158: null, // Billetera Peluda 22
  159: null, // Billetera peluda Mariposa 23
  160: null, // Billetera Peluda 24
  161: null, // Billetera Peluda Gatito 25
  162: null, // Billetera Boutique 26
  1: null, // Porta Celulares boutique 27
  2: null, // Cartera boutique brillo 28
  3: null, // Bolso Inspiracion 29
  4: null, // Bandolera Impermiable 30
  5: null, // 2 en 1 Cartera Mochila 31
  11: null, // Cartera Pinko 32
  12: null, // Mini bags 33
  13: null, // Mochila Inspiracion 34
  14: null, // Cartera Chanel 35
  15: null, // Bolso notebook hombre 36
  16: null, // Bandolera kipling + llavero 37
  17: null, // Bolso hombre 38
  18: null, // Cartera boutique 39
  19: null, // Cartera nicol lee 40
  20: null, // Cross body 41
  22: null, // Cartera de fiesta 42
};

function getStock(p) {
  const s = STOCK[p.id];
  return (s === undefined || s === null) ? null : Number(s);
}

function isSoldOut(p) {
  return getStock(p) === 0;
}

function cartQtyFor(id) {
  return cart.filter(x => x.id === id).reduce((s, x) => s + x.qty, 0);
}

function stockLabelHTML(p) {
  const s = getStock(p);
  if (s === null) return "";
  if (s === 0) return '<span class="stock-tag stock-out">Agotado</span>';
  if (s <= LOW_STOCK) return `<span class="stock-tag stock-low">¡Quedan ${s}!</span>`;
  return '<span class="stock-tag stock-ok">✓ Disponible</span>';
}

/* =========================================================
   ESTILOS DE STOCK (etiqueta AGOTADO, "Quedan N", etc.)
   ========================================================= */
(function injectStockStyles() {
  if (document.getElementById("stock-style")) return;
  const st = document.createElement("style");
  st.id = "stock-style";
  st.textContent = `
    .product .badge-agotado{
      position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
      background:rgba(40,40,40,.82); color:#fff;
      padding:8px 22px; border-radius:30px;
      font-size:.85rem; font-weight:800; letter-spacing:2px;
      z-index:3; pointer-events:none; white-space:nowrap;
      box-shadow:0 4px 14px rgba(0,0,0,.25);
    }
    .product.agotado .product-img img{ filter:grayscale(.85); opacity:.55; }
    .product.agotado .product-info h3{ color:#777; }
    .product.agotado .wholesale-price{ text-decoration:line-through; color:#999; }
    .product .stock-tag{
      font-size:.72rem; font-weight:700; padding:3px 9px; border-radius:20px; white-space:nowrap;
    }
    .product .stock-out{ background:#eee; color:#777; }
    .product .stock-low{ background:#fff0d6; color:#b25e00; }
    .product .stock-ok { background:#e3f7e8; color:#1f7a3a; }
  `;
  document.head.appendChild(st);
})();

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

function hasProductPrice(p) {
  return Number(p.price) > 0 || Number(p.precioMayorista) > 0;
}

function isPendingProduct(p) {
  return p.pendiente === true;
}

function needsPrice(p) {
  return !hasProductPrice(p);
}

function wholesalePrice(p) {
  return p.precioMayorista || p.price;
}

/* ===== CYBER: helpers (usan las funciones de cyber.js; si no cargó, todo funciona con precio normal) ===== */
function cyberOn() {
  return typeof cyberActivo === "function" && cyberActivo();
}

function unitPrice(base) {
  return typeof precioCyber === "function" ? precioCyber(base) : base;
}

function priceHTML(base) {
  return typeof precioHTML === "function" ? precioHTML(base) : money(base);
}

function cartTotals() {
  const normal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const total = cart.reduce((s, x) => s + unitPrice(x.price) * x.qty, 0);
  return { normal, total, ahorro: normal - total };
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
      matchesCategory = p.onSale === true || cyberOn();
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
    grid.innerHTML = visible.map((p, i) => productCard(p, start + i + 1)).join("");

    const count = document.getElementById("productCount");
    if (count) {
      count.textContent = `${list.length} modelo${list.length === 1 ? "" : "s"} disponible${list.length === 1 ? "" : "s"} · Compra mínima $20.000`;
    }

    renderPagination(totalPages);
  } else {
    grid.innerHTML = list.map((p, i) => productCard(p, i + 1)).join("");
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

function productCard(p, index) {
  const saved = favorites.includes(p.id);
  const productNeedsPrice = needsPrice(p);
  const soldOut = isSoldOut(p);
  const currentIndex = window.productGalleryIndex[p.id] || 0;
  const imgSrc = p.variantes ? p.variantes[currentIndex].img : p.img;
  const num = String(index).padStart(2, "0");

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

  return `<article class="product${soldOut ? " agotado" : ""}">
    <div class="product-img" onclick="${p.variantes ? `openProductImage(${p.id})` : `openProduct(${p.id})`}">
      <div class="product-top">
        <button class="favorite-btn ${saved ? "saved" : ""}"
                onclick="event.stopPropagation(); toggleFavorite(${p.id})"
                aria-label="Favorito">${saved ? "♥" : "♡"}</button>
      </div>
      <span class="product-num">${num}</span>
      ${needsPrice(p) ? '<span class="badge-new">POR DEFINIR</span>' : ""}
      ${cyberOn() && !needsPrice(p) && !soldOut ? `<span class="badge-cyber">⚡ -${CYBER.descuento}%</span>` : ""}
      ${soldOut ? '<span class="badge-agotado">AGOTADO</span>' : ""}
      <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" onerror="placeholderImg(this)">
    </div>
    ${galleryHtml}
    <div class="product-info">
      <h3>${escapeHtml(p.name)}</h3>
      <div class="product-meta">
        <span class="product-code">${p.code ? "Código " + escapeHtml(p.code) : "Blessed"}</span>${stockLabelHTML(p)}
      </div>
      <div class="product-prices">
        <div class="wholesale-box">
          <span class="wholesale-label">✦ PRECIO MAYORISTA</span>
          <strong class="wholesale-price">${priceHTML(wholesalePrice(p))}</strong>
        </div>
      </div>
      <div class="product-actions">
        ${productNeedsPrice
          ? '<button class="product-btn" disabled style="opacity:.55;cursor:not-allowed">Próximamente</button>'
          : soldOut
            ? '<button class="product-btn" disabled style="opacity:.55;cursor:not-allowed">Agotado</button>'
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
  document.getElementById("modalProductPrice").innerHTML = needsPrice(p) ? "Precio por definir" : priceHTML(wholesalePrice(p));

  const cartBtn = document.getElementById("modalCartButton");
  cartBtn.disabled = isSoldOut(p) && !needsPrice(p);
  if (needsPrice(p)) {
    cartBtn.textContent = "💗 Consultar por WhatsApp";
    cartBtn.onclick = () => {
      window.open("https://wa.me/56968762137?text=" + encodeURIComponent(`Hola BlessedCarteras 💗 quiero consultar por "${p.name}"`), "_blank");
    };
  } else if (isSoldOut(p)) {
    cartBtn.textContent = "Agotado";
    cartBtn.onclick = null;
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

  if (needsPrice(p)) {
    alert("Este producto está próximo a publicarse. Contáctanos por WhatsApp 💗");
    return;
  }

  if (isSoldOut(p)) {
    alert("Este producto está agotado por ahora 💗");
    return;
  }

  const stockDisponible = getStock(p);
  if (stockDisponible !== null && cartQtyFor(id) + 1 > stockDisponible) {
    alert(`Solo quedan ${stockDisponible} unidad${stockDisponible === 1 ? "" : "es"} de este producto 💗`);
    return;
  }

  const tipoPrecio = "wholesale";
  const precioProducto = p.precioMayorista || p.price;

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
      price: precioProducto,
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

  if (delta > 0) {
    const prod = products.find(x => x.id === id);
    const stockMax = prod ? getStock(prod) : null;
    if (stockMax !== null && cartQtyFor(id) + delta > stockMax) {
      alert(`Solo quedan ${stockMax} unidad${stockMax === 1 ? "" : "es"} de este producto 💗`);
      return;
    }
  }

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
      const subtotal = unitPrice(x.price) * x.qty;

      return `
        <div class="cart-item">
          <img src="${escapeHtml(x.img)}" loading="lazy" decoding="async" onerror="placeholderImg(this)" alt="${escapeHtml(x.name)}">
          <div class="cart-item-content">
            <strong>${escapeHtml(x.name)}</strong>
            ${x.colorSeleccionado
              ? `<div class="cart-selected-color">🎨 Color: <strong>${escapeHtml(x.colorSeleccionado)}</strong></div>`
              : ""}
            <div class="cart-price-detail">
              <div class="cart-price-type">${tipoPrecio}</div>
              <div class="cart-selected-price">Precio: <strong>${priceHTML(x.price)}</strong></div>
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

  const { total, ahorro } = cartTotals();
  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.textContent = "Total: " + money(total) + (ahorro > 0 ? ` · ⚡ Ahorras ${money(ahorro)}` : "");

  renderShippingLink();
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
   DATOS DE ENVÍO (se piden en el carrito antes de enviar el pedido)
   ========================================================= */
const REGIONES = [
  "Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo",
  "Valparaíso", "Metropolitana de Santiago", "Libertador General Bernardo O'Higgins",
  "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos",
  "Aysén del General Carlos Ibáñez del Campo", "Magallanes y de la Antártica Chilena"
];

const METODOS_ENVIO = {
  starken:    "Starken (retiro en agencia)",
  bluexpress: "Bluexpress (retiro en agencia)",
  domicilio:  "Despacho a domicilio"
};

function getShipping() {
  try { return JSON.parse(localStorage.getItem("blessed_shipping") || "null"); }
  catch (e) { return null; }
}

function shippingComplete(s) {
  if (!s || !s.nombre || !s.telefono || !s.metodo || !s.region || !s.comuna) return false;
  return s.metodo === "domicilio" ? !!s.direccion : !!s.agencia;
}

function ensureShippingUI() {
  if (!document.getElementById("shipping-style")) {
    const st = document.createElement("style");
    st.id = "shipping-style";
    st.textContent = `
      #shippingLinkBox{margin:0 0 10px;text-align:center}
      #shippingLinkBox .ship-link{background:none;border:0;color:#f85b8b;font-weight:700;font-size:.95rem;text-decoration:underline;cursor:pointer;padding:6px}
      #shippingLinkBox .ship-summary{font-size:.85rem;color:#444;margin-bottom:4px;line-height:1.35}
      #shippingLinkBox .ship-pending{font-size:.85rem;color:#b3261e;margin-bottom:2px}
      #shippingModal{position:fixed;inset:0;background:rgba(0,0,0,.55);display:none;align-items:center;justify-content:center;z-index:10000;padding:14px}
      #shippingModal.open{display:flex}
      #shippingModal .ship-card{background:#fff;border-radius:18px;width:100%;max-width:440px;max-height:92vh;overflow-y:auto;padding:20px;box-shadow:0 10px 40px rgba(0,0,0,.3);position:relative}
      #shippingModal h2{margin:0 0 4px;font-size:1.25rem;color:#f85b8b}
      #shippingModal .ship-sub{margin:0 0 14px;font-size:.85rem;color:#666}
      #shippingModal label{display:block;font-size:.85rem;font-weight:600;margin:10px 0 4px;color:#333}
      #shippingModal input[type=text],#shippingModal input[type=tel],#shippingModal select,#shippingModal textarea{width:100%;box-sizing:border-box;padding:10px;border:1.5px solid #e5c6d1;border-radius:10px;font-size:1rem;font-family:inherit}
      #shippingModal .ship-methods label{display:flex;align-items:center;gap:8px;font-weight:500;border:1.5px solid #e5c6d1;border-radius:10px;padding:10px;margin:6px 0;cursor:pointer}
      #shippingModal .ship-methods input{accent-color:#f85b8b}
      #shippingModal .ship-error{color:#b3261e;font-size:.85rem;margin-top:10px;min-height:1em}
      #shippingModal .ship-actions{display:flex;gap:8px;margin-top:14px}
      #shippingModal .ship-actions button{flex:1;padding:12px;border-radius:12px;border:0;font-weight:700;font-size:1rem;cursor:pointer}
      #shippingModal .ship-save{background:#f85b8b;color:#fff}
      #shippingModal .ship-cancel{background:#f3e3e9;color:#333}
      #shippingModal .ship-close{position:absolute;top:8px;right:12px;background:none;border:0;font-size:1.6rem;cursor:pointer;color:#888}
    `;
    document.head.appendChild(st);
  }

  if (!document.getElementById("shippingLinkBox")) {
    const foot = document.querySelector(".cart-foot");
    if (foot) {
      const linkBox = document.createElement("div");
      linkBox.id = "shippingLinkBox";
      const checkout = foot.querySelector(".checkout");
      foot.insertBefore(linkBox, checkout || foot.firstChild);
    }
  }

  if (!document.getElementById("shippingModal")) {
    const modal = document.createElement("div");
    modal.id = "shippingModal";
    modal.innerHTML = `
      <div class="ship-card" onclick="event.stopPropagation()">
        <button type="button" class="ship-close" onclick="closeShippingForm()" aria-label="Cerrar">×</button>
        <h2>📦 Datos de envío</h2>
        <p class="ship-sub">Completa tus datos para coordinar el despacho de tu pedido.</p>
        <form id="shippingForm" novalidate>
          <label for="shipNombre">Nombre completo</label>
          <input type="text" id="shipNombre" autocomplete="name" placeholder="Ej: María González Pérez">

          <label for="shipTelefono">Teléfono / WhatsApp</label>
          <input type="tel" id="shipTelefono" autocomplete="tel" placeholder="Ej: +56 9 1234 5678">

          <label>¿Cómo quieres recibir tu pedido?</label>
          <div class="ship-methods">
            <label><input type="radio" name="shipMetodo" value="starken"> 🚚 Agencia Starken</label>
            <label><input type="radio" name="shipMetodo" value="bluexpress"> 🚚 Agencia Bluexpress</label>
            <label><input type="radio" name="shipMetodo" value="domicilio"> 🏠 Despacho a domicilio</label>
          </div>

          <label for="shipRegion">Región</label>
          <select id="shipRegion">
            <option value="">Selecciona tu región</option>
            ${REGIONES.map(r => `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`).join("")}
          </select>

          <label for="shipComuna">Comuna</label>
          <input type="text" id="shipComuna" autocomplete="address-level2" placeholder="Ej: Maipú">

          <div id="shipAgenciaWrap" style="display:none">
            <label for="shipAgencia">Agencia / sucursal de retiro</label>
            <input type="text" id="shipAgencia" placeholder="Ej: Sucursal Maipú centro">
          </div>

          <div id="shipDireccionWrap" style="display:none">
            <label for="shipDireccion">Dirección (calle, número, depto/casa)</label>
            <input type="text" id="shipDireccion" autocomplete="street-address" placeholder="Ej: Av. Las Rosas 1234, depto 56">
          </div>

          <label for="shipNotas">Observaciones (opcional)</label>
          <textarea id="shipNotas" rows="2" placeholder="Ej: horario de entrega, referencias..."></textarea>

          <div class="ship-error" id="shipError"></div>
          <div class="ship-actions">
            <button type="button" class="ship-cancel" onclick="closeShippingForm()">Cancelar</button>
            <button type="submit" class="ship-save">Guardar datos</button>
          </div>
        </form>
      </div>
    `;
    modal.addEventListener("click", closeShippingForm);
    document.body.appendChild(modal);

    modal.querySelectorAll('input[name="shipMetodo"]').forEach(r => {
      r.addEventListener("change", toggleShippingFields);
    });
    modal.querySelector("#shippingForm").addEventListener("submit", saveShippingForm);
  }

  renderShippingLink();
}

function toggleShippingFields() {
  const checked = document.querySelector('input[name="shipMetodo"]:checked');
  const metodo = checked ? checked.value : "";
  const ag = document.getElementById("shipAgenciaWrap");
  const dir = document.getElementById("shipDireccionWrap");
  if (ag)  ag.style.display  = (metodo === "starken" || metodo === "bluexpress") ? "block" : "none";
  if (dir) dir.style.display = (metodo === "domicilio") ? "block" : "none";
}

function renderShippingLink() {
  const box = document.getElementById("shippingLinkBox");
  if (!box) return;

  if (!cart.length) {
    box.innerHTML = "";
    return;
  }

  const s = getShipping();
  if (shippingComplete(s)) {
    const lugar = `${escapeHtml(s.comuna)}, ${escapeHtml(s.region)}`;
    box.innerHTML = `
      <div class="ship-summary">📦 <strong>${escapeHtml(METODOS_ENVIO[s.metodo] || "")}</strong><br>${lugar}</div>
      <button type="button" class="ship-link" onclick="openShippingForm()">✏️ Editar datos de envío</button>`;
  } else {
    box.innerHTML = `
      <div class="ship-pending">Falta completar tus datos de envío</div>
      <button type="button" class="ship-link" onclick="openShippingForm()">📦 Completar datos de envío</button>`;
  }
}

function openShippingForm() {
  ensureShippingUI();
  const s = getShipping() || {};

  let nombrePorDefecto = "";
  try {
    const u = JSON.parse(sessionStorage.getItem("usuario") || "null");
    if (u && u.nombre_completo) nombrePorDefecto = u.nombre_completo;
  } catch (e) {}

  document.getElementById("shipNombre").value    = s.nombre    || nombrePorDefecto;
  document.getElementById("shipTelefono").value  = s.telefono  || "";
  document.getElementById("shipRegion").value    = s.region    || "";
  document.getElementById("shipComuna").value    = s.comuna    || "";
  document.getElementById("shipAgencia").value   = s.agencia   || "";
  document.getElementById("shipDireccion").value = s.direccion || "";
  document.getElementById("shipNotas").value     = s.notas     || "";
  document.querySelectorAll('input[name="shipMetodo"]').forEach(r => {
    r.checked = (r.value === s.metodo);
  });
  document.getElementById("shipError").textContent = "";
  toggleShippingFields();

  document.getElementById("shippingModal").classList.add("open");
}

function closeShippingForm() {
  const m = document.getElementById("shippingModal");
  if (m) m.classList.remove("open");
}

function saveShippingForm(e) {
  e.preventDefault();
  const checked = document.querySelector('input[name="shipMetodo"]:checked');
  const data = {
    nombre:    document.getElementById("shipNombre").value.trim(),
    telefono:  document.getElementById("shipTelefono").value.trim(),
    metodo:    checked ? checked.value : "",
    region:    document.getElementById("shipRegion").value,
    comuna:    document.getElementById("shipComuna").value.trim(),
    agencia:   document.getElementById("shipAgencia").value.trim(),
    direccion: document.getElementById("shipDireccion").value.trim(),
    notas:     document.getElementById("shipNotas").value.trim()
  };

  const err = document.getElementById("shipError");
  const digitos = data.telefono.replace(/\D/g, "");

  if (data.nombre.length < 3)  { err.textContent = "Escribe tu nombre completo."; return; }
  if (digitos.length < 8)      { err.textContent = "Escribe un teléfono válido."; return; }
  if (!data.metodo)            { err.textContent = "Elige cómo quieres recibir tu pedido."; return; }
  if (!data.region)            { err.textContent = "Selecciona tu región."; return; }
  if (!data.comuna)            { err.textContent = "Escribe tu comuna."; return; }
  if (data.metodo === "domicilio" && !data.direccion) { err.textContent = "Escribe tu dirección de despacho."; return; }
  if (data.metodo !== "domicilio" && !data.agencia)   { err.textContent = "Indica la agencia o sucursal donde retirarás."; return; }

  // Solo guardamos lo que corresponde al método elegido
  if (data.metodo === "domicilio") data.agencia = "";
  else data.direccion = "";

  localStorage.setItem("blessed_shipping", JSON.stringify(data));
  renderShippingLink();
  closeShippingForm();
}

/* =========================================================
   CHECKOUT WHATSAPP
   ========================================================= */
function checkoutWhatsApp() {
  if (!cart.length) {
    alert("Tu carrito está vacío 💗");
    return;
  }

  const sinStock = [...new Set(cart.map(x => x.id))]
    .map(id => products.find(p => p.id === id))
    .filter(p => p && getStock(p) !== null && cartQtyFor(p.id) > getStock(p));

  if (sinStock.length) {
    alert(
      "Algunos productos de tu carrito ya no tienen stock suficiente 💗\n\n" +
      sinStock.map(p => `• ${p.name}: ${getStock(p) === 0 ? "agotado" : "quedan " + getStock(p)}`).join("\n") +
      "\n\nAjusta las cantidades y vuelve a intentar."
    );
    return;
  }

  const envio = getShipping();
  if (!shippingComplete(envio)) {
    alert("Antes de enviar tu pedido, completa tus datos de envío 📦");
    openShippingForm();
    return;
  }

  let text = "Hola BlessedCarteras 💗\n\n";

  // Si el cliente inició sesión, agregamos su nombre al mensaje
  try {
    const usuarioGuardado = JSON.parse(sessionStorage.getItem("usuario") || "null");
    if (usuarioGuardado && usuarioGuardado.nombre_completo) {
      text += `👤 *Cliente:* ${usuarioGuardado.nombre_completo}\n\n`;
    }
  } catch (e) {
    // si algo falla leyendo el usuario, seguimos sin el nombre
  }

  if (cyberOn()) text += `⚡ *PEDIDO CYBER (-${CYBER.descuento}%)*\n\n`;
  text += "🛍️ *QUIERO REALIZAR ESTE PEDIDO*\n\n";
  text += "📦 *PRODUCTOS*\n\n";

  cart.forEach(x => {
    const subtotal = unitPrice(x.price) * x.qty;
    const tipoPrecio = x.tipoPrecio === "wholesale" ? "✦ Precio Mayorista" : "✦ Precio Detalle";

    text += `👜 *${x.name}*\n`;
    if (x.colorSeleccionado) {
      text += `   🎨 Color: ${x.colorSeleccionado}\n`;
    }
    text += `   ${tipoPrecio}\n`;
    text += `   Precio: ${money(unitPrice(x.price))}` + (cyberOn() ? ` ⚡ (antes ${money(x.price)})` : "") + "\n";
    text += `   Cantidad: ${x.qty}\n`;
    text += `   Subtotal: ${money(subtotal)}\n\n`;
  });

  const { total, ahorro } = cartTotals();
  text += "━━━━━━━━━━━━━━\n";
  text += `💰 *TOTAL: ${money(total)}*\n`;
  if (ahorro > 0) text += `⚡ *Ahorro Cyber: ${money(ahorro)}*\n`;
  text += "━━━━━━━━━━━━━━\n\n";
  text += "📦 *DATOS DE ENVÍO*\n";
  text += `   👤 Nombre: ${envio.nombre}\n`;
  text += `   📱 Teléfono: ${envio.telefono}\n`;
  text += `   🚚 Entrega: ${METODOS_ENVIO[envio.metodo]}\n`;
  text += `   📍 Región: ${envio.region}\n`;
  text += `   📍 Comuna: ${envio.comuna}\n`;
  if (envio.metodo === "domicilio") text += `   🏠 Dirección: ${envio.direccion}\n`;
  else text += `   🏢 Agencia: ${envio.agencia}\n`;
  if (envio.notas) text += `   📝 Obs.: ${envio.notas}\n`;
  text += "\n";
  text += "💗 *¡Listo!*, una vez confirmado su pedido envíanos fotito del depósito o transferencia.\n\n";
  text += "🚚 *Enviaremos tu pedido por Starken o Bluexpress y te compartiremos el número de seguimiento.*\n";
  text += "✦ *WhatsApp: +56 9 6876 2137* | Mínimo de compra: \$20.000\n\n";
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
  const box = document.getElementById("reviewsList")
    || document.getElementById("reviews")
    || document.getElementById("reviewsBox")
    || document.getElementById("reviewList");
  if (!box) return; // si la página no tiene sección de opiniones, no hace nada

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
          <div id="zoom-product-price" class="zoom-product-price"></div>
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
  const price = document.getElementById("zoom-product-price");

  if (image) {
    image.src = images[index].img;
    image.alt = product.name;
    image.onerror = () => placeholderImg(image);
  }
  if (name) {
    name.textContent = `${product.name} · ${images[index].color || ""}`;
  }
  if (price) {
    price.textContent = hasProductPrice(product)
      ? `✦ PRECIO MAYORISTA · ${money(unitPrice(wholesalePrice(product)))}${cyberOn() ? " · ⚡ Cyber" : ""}`
      : "Precio por definir";
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
    closeShippingForm();
  }
});

/* =========================================================
   AÑO EN FOOTER
   ========================================================= */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =========================================================
   PUBLICIDAD CYBER (sección elegante + aviso en la barra superior)
   Fechas: lunes 5 oct 2026 00:00 → miércoles 7 oct 2026 23:59 (hora de Chile)
   ========================================================= */
const CYBER_PROMO_INICIO = new Date("2026-10-05T00:00:00-03:00");
const CYBER_PROMO_FIN    = new Date("2026-10-07T23:59:59-03:00");

function cyberPromoEstado() {
  const now = new Date();
  if (cyberOn() || (now >= CYBER_PROMO_INICIO && now <= CYBER_PROMO_FIN)) return "activo";
  if (now < CYBER_PROMO_INICIO) return "proximo";
  return "terminado";
}

function cyberPromoDescuento() {
  return (typeof CYBER !== "undefined" && CYBER && CYBER.descuento) ? Number(CYBER.descuento) : 0;
}

function cyberPromoStyles() {
  if (!document.getElementById("cyber-fonts")) {
    const l = document.createElement("link");
    l.id = "cyber-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Great+Vibes&display=swap";
    document.head.appendChild(l);
  }
  if (document.getElementById("cyber-promo-style")) return;
  const st = document.createElement("style");
  st.id = "cyber-promo-style";
  st.textContent = `
    #cyberPromo{
      position:relative; overflow:hidden; text-align:center; color:#fff;
      margin:28px auto; max-width:1180px; border-radius:26px;
      padding:clamp(28px,5vw,56px) clamp(16px,4vw,40px);
      background:radial-gradient(circle at 20% 15%, #7a1c47 0%, transparent 55%),
                 radial-gradient(circle at 85% 90%, #b8325f 0%, transparent 50%),
                 linear-gradient(135deg,#2b0d1c,#4a1230 55%,#2b0d1c);
      box-shadow:0 14px 40px rgba(74,18,48,.35);
      border:1.5px solid rgba(232,199,122,.55);
      font-family:"Cormorant Garamond",Georgia,serif;
    }
    #cyberPromo::before,#cyberPromo::after{
      content:"✦"; position:absolute; color:#e8c77a; opacity:.7; font-size:1.6rem;
    }
    #cyberPromo::before{ top:16px; left:22px; }
    #cyberPromo::after { bottom:16px; right:22px; }
    #cyberPromo .cp-eyebrow{
      font-size:clamp(.85rem,2vw,1.05rem); letter-spacing:.38em; text-transform:uppercase;
      color:#e8c77a; font-weight:600; margin-bottom:4px;
    }
    #cyberPromo .cp-title{
      font-family:"Great Vibes","Cormorant Garamond",cursive; font-weight:400;
      font-size:clamp(3rem,10vw,6rem); line-height:1.05; margin:0;
      background:linear-gradient(90deg,#f6dc9a,#fff 45%,#e8c77a);
      -webkit-background-clip:text; background-clip:text; color:transparent;
      text-shadow:0 2px 18px rgba(232,199,122,.25);
    }
    #cyberPromo .cp-off{
      font-size:clamp(1.5rem,4.5vw,2.6rem); font-weight:700; margin:6px 0 2px; color:#ffd6e4;
    }
    #cyberPromo .cp-off b{ color:#e8c77a; font-size:1.25em; }
    #cyberPromo .cp-dates{
      font-size:clamp(1.05rem,2.6vw,1.35rem); font-style:italic; color:#f3dfe7; margin:0 0 20px;
    }
    #cyberPromo .cp-timer{
      display:flex; justify-content:center; gap:clamp(8px,2vw,18px); margin:0 0 6px; flex-wrap:wrap;
    }
    #cyberPromo .cp-box{
      min-width:clamp(62px,14vw,92px); padding:10px 8px; border-radius:14px;
      background:rgba(255,255,255,.08); border:1px solid rgba(232,199,122,.45);
    }
    #cyberPromo .cp-box strong{ display:block; font-size:clamp(1.6rem,5vw,2.6rem); line-height:1; color:#fff; font-weight:700; }
    #cyberPromo .cp-box small{ font-size:.78rem; letter-spacing:.18em; text-transform:uppercase; color:#e8c77a; }
    #cyberPromo .cp-label{ font-size:1rem; letter-spacing:.22em; text-transform:uppercase; color:#e8c77a; margin:0 0 10px; }
    #cyberPromo .cp-btn{
      display:inline-block; margin-top:18px; padding:13px 34px; border-radius:40px;
      background:linear-gradient(90deg,#e8c77a,#f6dc9a); color:#4a1230; text-decoration:none;
      font-weight:700; font-size:1.1rem; letter-spacing:.06em; font-family:inherit;
      box-shadow:0 6px 18px rgba(0,0,0,.3);
    }
    #cyberPromo .cp-note{ margin-top:14px; font-size:.98rem; color:#e9cbd7; }
    .topbar-movimiento .cyber-topbar-item{ background:#4a1230; color:#f6dc9a !important; font-weight:800; padding:3px 16px; border-radius:20px; border:1px solid #e8c77a; letter-spacing:.04em; text-shadow:none; display:inline-block; }

    /* ===== ANIMACIONES CYBER ===== */
    #cyberPromo{ opacity:0; transform:translateY(50px) scale(.94);
      transition:opacity .9s ease, transform .9s cubic-bezier(.2,.8,.2,1); }
    #cyberPromo.cp-in{ opacity:1; transform:none; animation:cpGlow 3s ease-in-out 1s infinite; }
    #cyberPromo.cp-in .cp-eyebrow{ animation:cpUp .7s .25s both cubic-bezier(.2,.8,.2,1); }
    #cyberPromo.cp-in .cp-title  { animation:cpUp .8s .4s both cubic-bezier(.2,.8,.2,1), cpShine 3.5s 1.5s linear infinite; }
    #cyberPromo.cp-in .cp-off    { animation:cpUp .7s .6s both cubic-bezier(.2,.8,.2,1); }
    #cyberPromo.cp-in .cp-dates  { animation:cpUp .7s .75s both cubic-bezier(.2,.8,.2,1); }
    #cyberPromo.cp-in .cp-label  { animation:cpUp .7s .9s both cubic-bezier(.2,.8,.2,1); }
    #cyberPromo.cp-in .cp-box:nth-child(1){ animation:cpPop .6s 1.0s both cubic-bezier(.3,1.5,.5,1); }
    #cyberPromo.cp-in .cp-box:nth-child(2){ animation:cpPop .6s 1.15s both cubic-bezier(.3,1.5,.5,1); }
    #cyberPromo.cp-in .cp-box:nth-child(3){ animation:cpPop .6s 1.3s both cubic-bezier(.3,1.5,.5,1); }
    #cyberPromo.cp-in .cp-box:nth-child(4){ animation:cpPop .6s 1.45s both cubic-bezier(.3,1.5,.5,1), cpBoxGlow 1s 2.2s ease-in-out infinite; }
    #cyberPromo.cp-in .cp-btn    { animation:cpUp .7s 1.6s both cubic-bezier(.2,.8,.2,1), cpPulse 2.4s 2.4s ease-in-out infinite; }
    #cyberPromo.cp-in .cp-note   { animation:cpUp .7s 1.8s both cubic-bezier(.2,.8,.2,1); }

    #cyberPromo .cp-title{
      background-image:linear-gradient(100deg,#e8c77a 20%,#fff 40%,#fff 60%,#e8c77a 80%);
      background-size:250% auto;
    }
    #cyberPromo .cp-box{ perspective:300px; }
    #cyberPromo .cp-box strong.flip{ animation:cpFlip .45s ease-out; }
    #cyberPromo .cp-btn{ transition:transform .2s; }
    #cyberPromo .cp-btn:hover{ transform:scale(1.08) !important; }
    #cyberPromo[data-estado="activo"] .cp-eyebrow::before{
      content:"●"; color:#ff4d7d; margin-right:10px; animation:cpBlink 1s infinite;
    }
    #cyberPromo::before,#cyberPromo::after{ animation:cpTwinkle 2.4s ease-in-out infinite; }
    #cyberPromo::after{ animation-delay:1.2s; }
    #cyberPromo .cp-spark{
      position:absolute; left:var(--x); bottom:-24px; font-size:var(--s); color:#e8c77a;
      opacity:0; pointer-events:none; animation:cpFloat var(--t) var(--dl) linear infinite;
    }

    @keyframes cpUp{ from{ opacity:0; transform:translateY(26px); } to{ opacity:1; transform:none; } }
    @keyframes cpPop{ from{ opacity:0; transform:scale(.4) rotate(-8deg); } to{ opacity:1; transform:none; } }
    @keyframes cpShine{ from{ background-position:200% center; } to{ background-position:-200% center; } }
    @keyframes cpFlip{ from{ transform:rotateX(80deg) translateY(-30%); opacity:0; } to{ transform:none; opacity:1; } }
    @keyframes cpPulse{ 0%,100%{ transform:scale(1); box-shadow:0 6px 18px rgba(0,0,0,.3); } 50%{ transform:scale(1.07); box-shadow:0 0 28px rgba(246,220,154,.75); } }
    @keyframes cpGlow{ 0%,100%{ box-shadow:0 14px 40px rgba(74,18,48,.35); } 50%{ box-shadow:0 14px 55px rgba(232,199,122,.45); } }
    @keyframes cpBoxGlow{ 0%,100%{ box-shadow:0 0 0 rgba(246,220,154,0); } 50%{ box-shadow:0 0 16px rgba(246,220,154,.7); } }
    @keyframes cpTwinkle{ 0%,100%{ opacity:.35; transform:scale(.8) rotate(0); } 50%{ opacity:1; transform:scale(1.35) rotate(90deg); } }
    @keyframes cpBlink{ 50%{ opacity:.2; } }
    @keyframes cpFloat{
      0%{ transform:translateY(0) rotate(0); opacity:0; }
      10%{ opacity:.85; }
      90%{ opacity:.5; }
      100%{ transform:translateY(-620px) rotate(200deg); opacity:0; }
    }
    @media (max-width:800px){
      #cyberPromo.cp-in{ animation:none; }
      #cyberPromo.cp-in .cp-title{ animation:cpUp .8s .4s both cubic-bezier(.2,.8,.2,1); }
      #cyberPromo.cp-in .cp-box:nth-child(4){ animation:cpPop .6s 1.45s both cubic-bezier(.3,1.5,.5,1); }
      #cyberPromo.cp-in .cp-btn{ animation:cpUp .7s 1.6s both cubic-bezier(.2,.8,.2,1); }
      #cyberPromo .cp-spark{ display:none; }
      #cyberPromo::before, #cyberPromo::after{ animation:none; opacity:.7; }
    }
    @media (prefers-reduced-motion:reduce){
      #cyberPromo, #cyberPromo *, #cyberPromo::before, #cyberPromo::after{ animation:none !important; transition:none !important; }
      #cyberPromo{ opacity:1; transform:none; }
      #cyberPromo .cp-spark{ display:none; }
    }
  `;
  document.head.appendChild(st);
}

function cyberPromoTick() {
  if (document.hidden) return;
  const sec = document.getElementById("cyberPromo");
  if (!sec) return;

  const estado = cyberPromoEstado();
  if (estado !== sec.dataset.estado) { renderCyberPromo(); return; }

  const objetivo = estado === "activo" ? CYBER_PROMO_FIN : CYBER_PROMO_INICIO;
  let diff = Math.max(0, objetivo - new Date());
  const d = Math.floor(diff / 86400000); diff %= 86400000;
  const h = Math.floor(diff / 3600000);  diff %= 3600000;
  const m = Math.floor(diff / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const set = (id, v) => {
    const el = document.getElementById(id);
    if (!el) return;
    const t = String(v).padStart(2, "0");
    if (el.textContent !== t) {
      el.textContent = t;
      el.classList.remove("flip"); void el.offsetWidth; el.classList.add("flip");
    }
  };
  set("cpD", d); set("cpH", h); set("cpM", m); set("cpS", s);
}

function renderCyberPromo() {
  const prev = document.getElementById("cyberPromo");
  const estado = cyberPromoEstado();

  // Aviso en la barra superior (se desliza con los demás mensajes)
  const bar = document.querySelector(".topbar-movimiento");
  if (bar) {
    const old = bar.querySelector(".cyber-topbar-item");
    if (old) old.remove();
    if (estado !== "terminado") {
      const dsc = cyberPromoDescuento();
      const s = document.createElement("span");
      s.className = "cyber-topbar-item";
      s.textContent = estado === "activo"
        ? `⚡ CYBER BLESSED ¡YA ESTÁ AQUÍ!${dsc ? " · " + dsc + "% OFF" : ""} ⚡`
        : `⚡ CYBER BLESSED · 5 al 7 de octubre${dsc ? " · hasta " + dsc + "% OFF" : ""} ⚡`;
      bar.insertBefore(s, bar.firstChild);
    }
  }

  if (estado === "terminado") { if (prev) prev.remove(); return; }

  cyberPromoStyles();

  const dsc = cyberPromoDescuento();
  const off = dsc ? `<b>${dsc}%</b> de descuento` : "Descuentos <b>especiales</b>";
  const chispas = ["✦", "✧", "♥", "✦"];
  const sparks = Array.from({ length: 14 }, (_, i) =>
    `<span class="cp-spark" style="--x:${Math.round(Math.random() * 96)}%;--s:${(0.8 + Math.random() * 1.1).toFixed(2)}rem;--t:${(5 + Math.random() * 6).toFixed(1)}s;--dl:${(Math.random() * 6).toFixed(1)}s">${chispas[i % chispas.length]}</span>`
  ).join("");
  const html = `
    ${sparks}
    <div class="cp-eyebrow">${estado === "activo" ? "Ya disponible" : "Edición especial · Muy pronto"}</div>
    <h2 class="cp-title">Cyber Blessed</h2>
    <div class="cp-off">${off} en toda la tienda</div>
    <p class="cp-dates">Lunes 5 al miércoles 7 de octubre</p>
    <div class="cp-label">${estado === "activo" ? "Termina en" : "Comienza en"}</div>
    <div class="cp-timer">
      <div class="cp-box"><strong id="cpD">00</strong><small>Días</small></div>
      <div class="cp-box"><strong id="cpH">00</strong><small>Horas</small></div>
      <div class="cp-box"><strong id="cpM">00</strong><small>Min</small></div>
      <div class="cp-box"><strong id="cpS">00</strong><small>Seg</small></div>
    </div>
    <a class="cp-btn" href="#destacados">${estado === "activo" ? "Comprar ahora" : "Ver productos"} →</a>
    <div class="cp-note">💗 Pedidos por WhatsApp · Mínimo de compra $20.000</div>
  `;

  let sec = prev;
  if (!sec) {
    sec = document.createElement("section");
    sec.id = "cyberPromo";
    const dest = document.getElementById("destacados");
    if (dest && dest.parentNode) dest.parentNode.insertBefore(sec, dest);
    else document.querySelector("main")?.appendChild(sec);
  }
  sec.dataset.estado = estado;
  sec.innerHTML = html;

  if (!sec.dataset.obs) {
    sec.dataset.obs = "1";
    const io = new IntersectionObserver((en) => {
      if (en[0].isIntersecting) { sec.classList.add("cp-in"); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(sec);
  }

  cyberPromoTick();
  if (!window.__cyberPromoTimer) window.__cyberPromoTimer = setInterval(cyberPromoTick, 1000);
}

/* =========================================================
   RENDER INICIAL
   ========================================================= */
// Asegurar que los productos se rendericen al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  ensureShippingUI();
  renderCyberPromo();
  renderProducts();
  renderCart();
  renderReviews();
});

/* =========================================================
   ANIMACIONES AL HACER SCROLL (toda la página)
   ========================================================= */
(() => {
  // [selector, tipo de animación]  →  up | pop | zoom | lr (izquierda, arriba, derecha)
  const MAPA = [
    ['.section-title', 'up'],
    ['.shop-tools', 'up'],
    ['.filters', 'up'],
    ['.benefit', 'pop'],
    ['.product', 'up'],
    ['.step', 'pop'],
    ['.shipping-agencies', 'up'],
    ['.shipping-logos > *', 'pop'],
    ['.contact-grid .panel', 'lr'],
    ['.inspiration', 'zoom'],
    ['.politica-section', 'up'],
    ['.social-link', 'pop'],
    ['.footer-bottom', 'up']
  ];

  const style = document.createElement('style');
  style.textContent = `
    /* --- estado inicial y animación de entrada --- */
    .rv{ opacity:0; }
    .rv.rv-in{
      opacity:1; animation-duration:.85s; animation-fill-mode:backwards;
      animation-timing-function:cubic-bezier(.2,.8,.2,1); animation-delay:var(--d,0ms);
    }
    .rv[data-rv="up"].rv-in   { animation-name:rvUp; }
    .rv[data-rv="pop"].rv-in  { animation-name:rvPop; animation-timing-function:cubic-bezier(.3,1.5,.5,1); animation-duration:.7s; }
    .rv[data-rv="zoom"].rv-in { animation-name:rvZoom; animation-duration:1s; }
    .rv[data-rv="left"].rv-in { animation-name:rvLeft; }
    .rv[data-rv="right"].rv-in{ animation-name:rvRight; }

    @keyframes rvUp   { from{ opacity:0; transform:translateY(46px) scale(.96); } }
    @keyframes rvPop  { from{ opacity:0; transform:scale(.4) rotate(-6deg); } }
    @keyframes rvZoom { from{ opacity:0; transform:scale(.8); filter:blur(6px); } }
    @keyframes rvLeft { from{ opacity:0; transform:translateX(-80px) rotate(-2deg); } }
    @keyframes rvRight{ from{ opacity:0; transform:translateX(80px) rotate(2deg); } }

    /* --- entrada del hero al cargar la página --- */
    .hero-content > *{ animation:rvUp .9s cubic-bezier(.2,.8,.2,1) backwards; }
    .hero-content > :nth-child(1){ animation-delay:.1s; }
    .hero-content > :nth-child(2){ animation-delay:.3s; }
    .hero-content > :nth-child(3){ animation-delay:.5s; }
    .hero-content > :nth-child(4){ animation-delay:.7s; }
    .hero-content > :nth-child(5){ animation-delay:.9s; }

    /* --- detalles entretenidos --- */
    .inspiration .heart{ display:inline-block; animation:rvBeat 1.6s ease-in-out infinite; }
    @keyframes rvBeat{ 0%,100%{ transform:scale(1); } 15%{ transform:scale(1.3); } 30%{ transform:scale(1); } 45%{ transform:scale(1.2); } }
    .benefit:hover .ico, .step:hover .stepico{ animation:rvWiggle .6s ease; }
    @keyframes rvWiggle{ 0%,100%{ transform:rotate(0); } 25%{ transform:rotate(-14deg) scale(1.15); } 75%{ transform:rotate(14deg) scale(1.15); } }
    .floating-wa{ animation:rvPop .8s 1.2s cubic-bezier(.3,1.5,.5,1) backwards; }

    /* --- barra de progreso de scroll --- */
    .rv-progress{
      position:fixed; top:0; left:0; width:100%; height:4px; z-index:99999; pointer-events:none;
      transform-origin:0 50%; transform:scaleX(0);
      background:linear-gradient(90deg,#e8c77a,#ff6f9f,#e8c77a);
    }

    @media (max-width:800px){
      .rv[data-rv="zoom"].rv-in{ animation-name:rvUp; }
    }
    @media (prefers-reduced-motion:reduce){
      .rv{ opacity:1 !important; }
      .rv.rv-in, .hero-content > *, .floating-wa, .inspiration .heart{ animation:none !important; }
      .rv-progress{ display:none; }
    }
  `;
  document.head.appendChild(style);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('rv-in');
      io.unobserve(e.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

  const preparar = () => {
    MAPA.forEach(([sel, tipo]) => {
      document.querySelectorAll(sel).forEach(el => {
        if (el.dataset.rv) return;
        const idx = Array.prototype.indexOf.call(el.parentNode.children, el);
        el.dataset.rv = tipo === 'lr' ? ['left', 'up', 'right'][idx % 3] : tipo;
        el.classList.add('rv');
        el.style.setProperty('--d', `${(idx % 4) * 120}ms`);
        io.observe(el);
      });
    });
  };

  let pendiente = false;
  const programar = () => {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(() => { pendiente = false; preparar(); });
  };

  preparar();
  new MutationObserver((muts) => {
    for (const m of muts) {
      for (const n of m.addedNodes) {
        if (n.nodeType === 1) { programar(); return; }
      }
    }
  }).observe(document.body, { childList: true, subtree: true });

  // barra de progreso
  const bar = document.createElement('div');
  bar.className = 'rv-progress';
  document.body.appendChild(bar);
  const actualizar = () => {
    const h = document.documentElement;
    const total = h.scrollHeight - h.clientHeight;
    bar.style.transform = `scaleX(${total > 0 ? h.scrollTop / total : 0})`;
    // al llegar al final de la página, mostrar todo lo que quede oculto (ej. el pie de página)
    if (total > 0 && h.scrollTop >= total - 80) {
      document.querySelectorAll('.rv:not(.rv-in)').forEach(el => {
        if (el.getBoundingClientRect().top < innerHeight + 200) el.classList.add('rv-in');
      });
    }
  };
  let rafScroll = false;
  addEventListener('scroll', () => {
    if (rafScroll) return;
    rafScroll = true;
    requestAnimationFrame(() => { rafScroll = false; actualizar(); });
  }, { passive: true });
  addEventListener('resize', actualizar);
  actualizar();
})();
