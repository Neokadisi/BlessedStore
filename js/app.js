/* =========================================================
           [7] JAVASCRIPT: comportamiento y funcionalidades
           ========================================================= */
const products = [

 {
  id:1,
  name:"Porta Celulares boutique",
  price:5000,
  precioMayorista:3500,
  img:"img/24.jpg",
  variantes:[
    {img:"img/24.jpg",color:"Modelo 1"},
    {img:"img/(1).jpg",color:"Modelo 2"},
    {img:"img/(2).jpg",color:"Modelo 3"},
    {img:"img/(3).jpg",color:"Modelo 4"},
    {img:"img/(4).jpg",color:"Modelo 5"},
    {img:"img/(6).jpg",color:"Modelo 6"},
    {img:"img/21.jpg",color:"Modelo 7"},
    {img:"img/23.jpg",color:"Modelo 8"}
  ]
},
  {id:2,name:"Cartera boutique brillo",price:7000,precioMayorista:5500,img:"img/imagen1.jpg"},
  {id:3,name:"Bolso Premium (sin stock)",price:44990,precioMayorista:39990,img:"img/(13).jpg"},
  {id:4,name:"Bolso Inspiracion",price:15000,precioMayorista:8500,img:"img/(9).jpg"},
  {id:10,name:"Cartera chanel (sin stock)",price:5000,precioMayorista:3500,img:"img/(7).jpg"},
  {id:11,name:"Cartera Pinko",price:12000,precioMayorista:7500,img:"img/(8).jpg"},
  {id:12,name:"Mini bags",price:5000,precioMayorista:3500,img:"img/(10).jpg"},
  {id:13,name:"Mochila Inspiracion",price:12000,precioMayorista:7500,img:"img/(11).jpg"},
  {id:14,name:"Cartera Chanel",price:12000,precioMayorista:6500,img:"img/(12).jpg"},
  {id:15,name:"Bolso notebook hombre",price:10000,precioMayorista:6000,img:"img/(14).jpg"},
  {id:16,name:"Bandolera kipling + llavero",price:12000,precioMayorista:6000,img:"img/(15).jpg"},
  {id:17,name:"Bolso hombre",price:6000,precioMayorista:3500,img:"img/(16).jpg"},
  {id:18,name:"Cartera boutique",price:12000,precioMayorista:6500,img:"img/(17).jpg"},
  {id:19,name:"Cartera nicol lee",price:6500,precioMayorista:3500,img:"img/18.jpg"},
  {id:20,name:"Cross body",price:6000,precioMayorista:3500,img:"img/20.jpg"},
  {id:22,name:"Cartera de fiesta",price:8000,precioMayorista:5500,img:"img/22.jpg"},
  //{id:24,name:"Cartera inspiracion ",price:45990,precioMayorista:40990,img:"img/24 (1).jpg"},
 // {id:25,name:"Cartera Gold",price:37990,precioMayorista:32990,img:"img/25.jpg"},
  //{id:26,name:"Bolso Flower",price:32990,precioMayorista:28990,img:"img/26.jpg"},
  //{id:27,name:"Cartera Soft Pink",price:25990,precioMayorista:21990,img:"img/27.jpg"},
  //{id:28,name:"Mochila Pink",price:31990,precioMayorista:27990,img:"img/28.jpg",category:"mochilas"},
];

let favorites = JSON.parse(localStorage.getItem("blessed_favorites") || "[]");
let activeCategory = "todos";
let searchTerm = "";

let cart = JSON.parse(localStorage.getItem("blessed_cart") || "[]");

// [JS-01] FORMATO DE PRECIOS: convierte números a pesos chilenos.
function money(n) {
  return "$" + Number(n).toLocaleString("es-CL");
}   

// [JS-02] PRODUCTOS: genera las tarjetas de productos.
function getFilteredProducts(){
  return products.filter(p=>{
    const matchesCategory = activeCategory==="todos" || (activeCategory==="ofertas" ? p.price < 30000 : p.category===activeCategory);
    const q=searchTerm.toLowerCase();
    const matchesSearch=!q || p.name.toLowerCase().includes(q) || String(p.code||"").includes(q);
    return matchesCategory && matchesSearch;
  });
}

function renderProducts(list=getFilteredProducts(), target="productGrid") {
  const grid=document.getElementById(target); if(!grid)return;
  if(!list.length){grid.innerHTML='<div class="panel empty-results">💗 No encontramos productos con esa búsqueda.</div>'; return;}
  grid.innerHTML=list.map(p=>productCard(p)).join("");
  if(target==="productGrid") document.getElementById("productCount").textContent=`${list.length} modelo${list.length===1?"":"s"} disponible${list.length===1?"":"s"} · Compra mínima $20.000`;
}

function productCard(p){
  const saved = favorites.includes(p.id);

  return `<article class="product">
   <div class="product-img" onclick="${p.variantes ? `openProductImage(${p.id})` : `openProduct(${p.id})`}">
      <div class="product-top">
        <button 
          class="favorite-btn ${saved ? "saved" : ""}" 
          onclick="event.stopPropagation();toggleFavorite(${p.id})" 
          aria-label="Favorito"
        >
          ${saved ? "♥" : "♡"}
        </button>
      </div>

    <img 
        src="${
          p.variantes
          ? p.variantes[window.productGalleryIndex?.[p.id] || 0].img
          : p.img
       }"
         alt="${p.name}"
      onerror="this.onerror=null; this.src='images/placeholder.jpg';"
    >
    </div>

    ${
  p.variantes
    ? `
      <button
        type="button"
        class="gallery-arrow gallery-prev"
        onclick="event.stopPropagation(); changeProductGallery(${p.id}, -1)"
      >
        ‹
      </button>

      <button
        type="button"
        class="gallery-arrow gallery-next"
        onclick="event.stopPropagation(); changeProductGallery(${p.id}, 1)"
      >
        ›
      </button>

      <div class="gallery-dots">
        ${p.variantes.map((v, index) => `
          <span
            class="gallery-dot ${
              index === (window.productGalleryIndex?.[p.id] || 0)
                ? "active"
                : ""
            }"
            onclick="event.stopPropagation(); setProductGallery(${p.id}, ${index})"
          ></span>
        `).join("")}
      </div>
    `
    : ""
}

    <div class="product-info">

      <h3>${p.name}</h3>

     <div class="product-meta">
  <span class="product-code">
    ${p.code ? "Código " + p.code : "Blessed"}
  </span>
</div>

      <!-- PRECIOS -->
      <div class="product-prices">
        <div class="wholesale-box">
        <span class="wholesale-label">✦ ELIGE TU PRECIO</span>

<label class="price-option">
  <input
    type="radio"
    name="price_${p.id}"
    value="normal"
    checked
  >
  <span>
    Precio Detalle
    <strong>${money(p.price)}</strong>
  </span>
</label>

<label class="price-option">
  <input
    type="radio"
    name="price_${p.id}"
    value="wholesale"
  >
  <span>
    Precio mayorista
    <strong>${money(p.precioMayorista || p.price)}</strong>
  </span>
</label>

<small>Desde ${p.wholesaleMin || 1} unidad</small>
        </div>

      </div>

      <div class="product-actions">
        <button 
          class="product-btn" 
          onclick="addToCart(${p.id})"
        >
          Agregar 🛍️
        </button>

        <button 
          class="details-btn" 
          onclick="openProduct(${p.id})"
        >
          Ver
        </button>
      </div>

    </div>
  </article>`;
}

function filterProducts(){
  searchTerm=document.getElementById("productSearch").value.trim();
  renderProducts();
}
function setCategory(cat){
  activeCategory=cat;
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.cat===cat));
  renderProducts();
}
function toggleFavorite(id){
  favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];
  localStorage.setItem("blessed_favorites",JSON.stringify(favorites));
  renderProducts();
}
function openProduct(id){
  const p=products.find(x=>x.id===id); if(!p)return;
  document.getElementById("modalProductImage").src=p.img;
  document.getElementById("modalProductName").textContent=p.name;
  document.getElementById("modalProductCode").textContent=p.code?`Código: ${p.code}`:"Producto BlessedCarteras";
  document.getElementById("modalProductMeasures").textContent=p.measures?`Medidas: ${p.measures}`:"Producto seleccionado de nuestra colección.";
  document.getElementById("modalProductPrice").textContent=money(p.price);
  document.getElementById("modalCartButton").onclick=()=>addToCart(p.id);
  const fb=document.getElementById("modalFavoriteButton"); fb.classList.toggle("saved",favorites.includes(p.id)); fb.textContent=favorites.includes(p.id)?"♥ Guardado en favoritos":"♡ Guardar en favoritos"; fb.onclick=()=>{toggleFavorite(p.id);openProduct(p.id)};
  document.getElementById("productModal").classList.add("open"); document.body.style.overflow="hidden";
}
function closeProductModal(e){if(e && e.target.id!=="productModal")return;document.getElementById("productModal").classList.remove("open");document.body.style.overflow="";}

function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  // Detectar qué precio seleccionó el cliente
  const selected = document.querySelector(`input[name="price_${id}"]:checked`);
  const tipoPrecio = selected ? selected.value : "normal";

  // Obtener SOLO el precio seleccionado
  const precioDetalle =
    tipoPrecio === "wholesale"
      ? p.precioMayorista
      : p.price;

  const item = cart.find(
    x => x.id === id && x.tipoPrecio === tipoPrecio
  );

  if (item) {
    item.qty++;
  } else {
    cart.push({
      ...p,

      // Este será el precio que utilizará el carrito
      price: precioDetalle,

      // Guardamos el tipo seleccionado
      tipoPrecio: tipoPrecio,

      qty: 1
    });
  }

  saveCart();
  openCart();
}

// [JS-04] CARRITO: guarda el carrito en el navegador y re-renderiza.
function saveCart() {
  localStorage.setItem("blessed_cart", JSON.stringify(cart));
  renderCart();
}

// [NUEVO] FUNCIONES AGREGADAS PARA MODIFICAR Y ELIMINAR PRODUCTOS
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

// [JS-05] CARRITO: actualiza visualmente los productos y el total.
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

      // Tipo de precio seleccionado
      const tipoPrecio = x.tipoPrecio === "wholesale"
        ? "✦ PRECIO MAYORISTA"
        : "✦ PRECIO DETALLE";

      // Precio que realmente seleccionó el cliente
      const precioElegido = x.price;

      // Subtotal
      const subtotal = precioElegido * x.qty;

      return `
        <div class="cart-item">

          <img 
            src="${x.img}" 
            onerror="this.src='images/placeholder.jpg'" 
            alt="${x.name}"
          >

          <div class="cart-item-content">

            <strong>${x.name}</strong>

            <div class="cart-price-detail">

              <!-- TIPO DE PRECIO -->
              <div class="cart-price-type">
                ${tipoPrecio}
              </div>

              <!-- SOLO MUESTRA EL PRECIO SELECCIONADO -->
              <div class="cart-selected-price">
                Precio: <strong>${money(precioElegido)}</strong>
              </div>

            </div>

            <div class="cart-subtotal">
              Subtotal: <strong>${money(subtotal)}</strong>
            </div>

            <div class="qty">

              <button onclick="changeQty(${x.id},-1)">
                −
              </button>

              <span>${x.qty}</span>

              <button onclick="changeQty(${x.id},1)">
                +
              </button>

              <button 
                class="remove-item" 
                onclick="removeItem(${x.id})"
              >
                🗑️
              </button>

            </div>

          </div>

        </div>
      `;

    }).join("");
  }

  // TOTAL DEL CARRITO
  const total = cart.reduce(
    (s, x) => s + (x.price * x.qty),
    0
  );

  const cartTotalEl = document.getElementById("cartTotal");

  if (cartTotalEl) {
    cartTotalEl.textContent = "Total: " + money(total);
  }
}
function openCart() {
  document.getElementById("cartDrawer")?.classList.add("open");
  document.getElementById("backdrop")?.classList.add("open");
}

function closeCart() {
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.getElementById("backdrop")?.classList.remove("open");
}

async function checkoutWhatsApp() {
    if (!cart.length) {
        alert("Tu carrito está vacío 💗");
        return;
    }

    let text = "Hola BlessedCarteras 💗\n\n";

    text += "🛍️ *QUIERO REALIZAR ESTE PEDIDO*\n\n";

    text += "📦 *PRODUCTOS*\n\n";

    cart.forEach(x => {

        const subtotal = x.price * x.qty;

        const tipoPrecio = x.tipoPrecio === "wholesale"
            ? "✦ Precio Mayorista"
            : "✦ Precio Detalle";

        text += `👜 *${x.name}*\n`;
        text += `   ${tipoPrecio}\n`;
        text += `   Precio: ${money(x.price)}\n`;
        text += `   Cantidad: ${x.qty}\n`;
        text += `   Subtotal: ${money(subtotal)}\n\n`;
    });

    const total = cart.reduce(
        (s, x) => s + (x.price * x.qty),
        0
    );

    text += "━━━━━━━━━━━━━━\n";
    text += `💰 *TOTAL: ${money(total)}*\n`;
    text += "━━━━━━━━━━━━━━\n\n";

    text += "💗 *Listo bella*, una vez confirmado su pedido me manda fotito de la transferencia o depósito y sus datos de envío, y estamos OK.\n\n";

    text += "🥰 *Muchas gracias por comprar en BlessedCarteras.*";

    const numeroWhatsApp = "56968762137";


    const url =
        `https://wa.me/${numeroWhatsApp}?text=` +
        encodeURIComponent(text);

    window.open(url, "_blank");
}

function toggleMenu() {
  document.getElementById("navlinks")?.classList.toggle("open");
}

function focusSearch() { 
  document.getElementById("productSearch")?.focus(); 
  document.getElementById("coleccion")?.scrollIntoView({behavior:"smooth"}); 
}

document.querySelectorAll(".navlinks a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navlinks")?.classList.remove("open")));

document.getElementById("reviewForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("reviewName").value.trim();
  const rating=document.querySelector('input[name="rating"]:checked')?.value;
  const comment=document.getElementById("reviewComment").value.trim();
  if(!rating)return;
  const reviews=JSON.parse(localStorage.getItem("blessed_reviews")||"[]");
  reviews.unshift({name,rating,comment,date:new Date().toLocaleDateString("es-CL")});
  localStorage.setItem("blessed_reviews",JSON.stringify(reviews.slice(0,20)));
  e.target.reset(); renderReviews();
  alert("¡Gracias por compartir tu experiencia con BlessedCarteras! 💗");
});

function renderReviews() {
  const reviews=JSON.parse(localStorage.getItem("blessed_reviews")||"[]");
  const box=document.getElementById("reviewsList");
  if(!box) return;
  if(!reviews.length) {
    box.innerHTML='<p class="empty-reviews">Todavía no hay opiniones. ¡Sé la primera en recomendar BlessedCarteras! 💗</p>';
    return;
  }
  box.innerHTML=reviews.map(r=>`
    <div class="review">
      <strong>${escapeHtml(r.name)}</strong>
      <div class="r-stars">${"★".repeat(Number(r.rating))}${"☆".repeat(5-Number(r.rating))}</div>
      <p>${escapeHtml(r.comment)}</p>
      <small class="review-date">${r.date}</small>
    </div>`).join("");
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}

document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeProductModal();closeCart();}});

const yearEl = document.getElementById("year");
if(yearEl) yearEl.textContent = new Date().getFullYear();

renderProducts();
renderCart();
renderReviews();

/* CUENTA REGRESIVA */
const fechaEvento = new Date(2026, 8, 1, 20, 0, 0).getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    if(document.getElementById("dias")) document.getElementById("dias").textContent = "0";
    if(document.getElementById("horas")) document.getElementById("horas").textContent = "0";
    if(document.getElementById("minutos")) document.getElementById("minutos").textContent = "0";
    if(document.getElementById("segundos")) document.getElementById("segundos").textContent = "0";

    const mensaje = document.getElementById("mensaje-oferta");
    if (mensaje) mensaje.textContent = "🔥 ¡La oferta ha comenzado!";
    return;
  }

  const dias = Math.floor(diferencia / (24 * 60 * 60 * 1000));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  if(document.getElementById("dias")) document.getElementById("dias").textContent = dias;
  if(document.getElementById("horas")) document.getElementById("horas").textContent = horas;
  if(document.getElementById("minutos")) document.getElementById("minutos").textContent = minutos;
  if(document.getElementById("segundos")) document.getElementById("segundos").textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);

// [JS-06] VACIAR CARRITO: Limpia la lista del carrito y actualiza la vista
function clearCart() {
  if (cart.length === 0) return;

  // Confirmación opcional antes de vaciar
  if (confirm("¿Estás segura de que deseas vaciar tu carrito? 💗")) {
    cart = [];
    saveCart();
  }
}

// Escuchar el evento clic en el botón de vaciar carrito
document.getElementById("emptyCartBtn")?.addEventListener("click", clearCart);
window.productGalleryIndex = window.productGalleryIndex || {};

function changeProductGallery(id, direction) {
  const product = products.find(p => p.id === id);

  if (!product || !product.variantes) return;

  let index = window.productGalleryIndex[id] || 0;

  index += direction;

  if (index < 0) {
    index = product.variantes.length - 1;
  }

  if (index >= product.variantes.length) {
    index = 0;
  }

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
   ZOOM - PORTA CELULARES
   ========================================================= */

function openProductImage(id) {

  const product = products.find(p => p.id === id);

  if (!product) return;

  const images = product.variantes
    ? product.variantes
    : [{ img: product.img, color: "" }];

  const currentIndex =
    window.productGalleryIndex?.[id] || 0;

  let modal = document.getElementById("product-image-modal");

  if (!modal) {

    modal = document.createElement("div");

    modal.id = "product-image-modal";

    modal.innerHTML = `
      <div class="zoom-overlay" onclick="closeProductImage(event)">

        <button
          type="button"
          class="zoom-close"
          onclick="closeProductImage(event)"
        >
          ×
        </button>

        <button
          type="button"
          class="zoom-arrow zoom-prev"
          onclick="changeZoomImage(event, -1)"
        >
          ‹
        </button>

        <div
          class="zoom-content"
          onclick="event.stopPropagation()"
        >
          <img
            id="zoom-product-image"
            src=""
            alt=""
          >

          <div
            id="zoom-product-name"
            class="zoom-product-name"
          ></div>
        </div>

        <button
          type="button"
          class="zoom-arrow zoom-next"
          onclick="changeZoomImage(event, 1)"
        >
          ›
        </button>

      </div>
    `;

    document.body.appendChild(modal);
  }

  modal.dataset.productId = id;

  window.zoomGalleryIndex = currentIndex;

  updateZoomImage(id);

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}


function updateZoomImage(id) {

  const product = products.find(p => p.id === id);

  if (!product) return;

  const images = product.variantes
    ? product.variantes
    : [{ img: product.img, color: "" }];

  let index = window.zoomGalleryIndex || 0;

  if (index < 0) index = images.length - 1;

  if (index >= images.length) index = 0;

  window.zoomGalleryIndex = index;

  const image = document.getElementById("zoom-product-image");
  const name = document.getElementById("zoom-product-name");

  if (image) {
    image.src = images[index].img;
    image.alt = product.name;
  }

  if (name) {
    name.textContent =
      `${product.name} · ${images[index].color || ""}`;
  }
}


function changeZoomImage(event, direction) {

  if (event) {
    event.stopPropagation();
  }

  const modal = document.getElementById("product-image-modal");

  if (!modal) return;

  const id = Number(modal.dataset.productId);

  const product = products.find(p => p.id === id);

  if (!product) return;

  const images = product.variantes
    ? product.variantes
    : [{ img: product.img }];

  let index = window.zoomGalleryIndex || 0;

  index += direction;

  if (index < 0) {
    index = images.length - 1;
  }

  if (index >= images.length) {
    index = 0;
  }

  window.zoomGalleryIndex = index;

  updateZoomImage(id);
}


function closeProductImage(event) {

  if (event) {
    event.stopPropagation();
  }

  const modal = document.getElementById("product-image-modal");

  if (!modal) return;

  modal.classList.remove("active");

  document.body.style.overflow = "";
}