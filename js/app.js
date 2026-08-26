/* =========================================================
           [7] JAVASCRIPT: comportamiento y funcionalidades
           ========================================================= */
const products = [
  {id:1,name:"Porta Celulares ",price:5000,img:"img/24.jpg"},
  {id:2,name:"Cartera bandolera 2",price:39990,img:"img/imagen1.jpg"},
  {id:3,name:"Bolso Premium 3",price:44990,img:"img/(13).jpg"},
  {id:4,name:"Bolso Elegance",price:24990,img:"img/(9).jpg"},
  {id:5,name:"Bolso Classic",price:35990,img:"img/(1).jpg"},
  {id:6,name:"Bolso Paris",price:42990,img:"img/(2).jpg"},
  {id:7,name:"Bolso Milano",price:49990,img:"img/(3).jpg"},
  {id:8,name:"Bolso Rose",price:27990,img:"img/(4).jpg"},
  {id:9,name:"Bolso Royal",price:54990,img:"img/(6).jpg"},
  {id:10,name:"Bolso Bella",price:31990,img:"img/(7).jpg"},
  {id:11,name:"Bolso Chic",price:32990,img:"img/(8).jpg"},
  {id:12,name:"Bolso Queen",price:38990,img:"img/(10).jpg"},
  {id:13,name:"Cartera Sweet Pink",price:22990,img:"img/(11).jpg"},
  {id:14,name:"Cartera Heart",price:29990,img:"img/(12).jpg"},
  {id:15,name:"Cartera Clásica Beige",price:26990,img:"img/(14).jpg"},
  {id:16,name:"Cartera Elegance Negra",price:24990,img:"img/(15).jpg"},
  {id:17,name:"Mochila Mini Black",price:28990,img:"img/(16).jpg"},
  {id:18,name:"Mochila Elegance",price:33990,img:"img/(17).jpg"},
  {id:19,name:"Bolso Casual",price:27990,img:"img/18.jpg"},
  {id:20,name:"Bolso Romantic",price:30990,img:"img/20.jpg"},
  {id:21,name:"Cartera Paris Pink",price:34990,img:"img/21.jpg"},
  {id:22,name:"Cartera Mini",price:21990,img:"img/22.jpg"},
  {id:23,name:"Bolso Daily",price:29990,img:"img/23.jpg"},
  {id:24,name:"Bolso Luxury",price:45990,img:"img/p24.jpg"},
  {id:25,name:"Cartera Gold",price:37990,img:"img/p25.jpg"},
  {id:26,name:"Bolso Flower",price:32990,img:"img/p26.jpg"},
  {id:27,name:"Cartera Soft Pink",price:25990,img:"img/p27.jpg"},
  {id:28,name:"Mochila Pink",price:31990,img:"img/p28.jpg",category:"mochilas"},
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
    <div class="product-img" onclick="openProduct(${p.id})">
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
        src="${p.img}" 
        alt="${p.name}"
        onerror="this.onerror=null; this.src='images/placeholder.jpg';"
      >
    </div>

    <div class="product-info">

      <h3>${p.name}</h3>

     <div class="product-meta">
  <span class="product-code">
    ${p.code ? "Código " + p.code : "Blessed"}
  </span>
</div>

      <!-- PRECIOS -->
      <div class="product-prices">

        <div class="price-normal">
          <span>Precio normal</span>
          <strong>${money(p.price)}</strong>
        </div>

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
    Valor detalle
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
    <strong>${money(p.wholesalePrice || p.price)}</strong>
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
          Añadir al carrito 🛍️
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
  document.getElementById("modalProductCode").textContent=p.code?`Código: ${p.code}`:"Producto Blessed.Carteras";
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

  const selected = document.querySelector(`input[name="price_${id}"]:checked`);
  const tipoPrecio = selected ? selected.value : "normal";
  const precioElegido = tipoPrecio === "wholesale" ? (p.wholesalePrice || p.price) : p.price;

  const item = cart.find(x => x.id === id && x.tipoPrecio === tipoPrecio);

  if (item) {
    item.qty++;
  } else {
    cart.push({
      ...p,
      price: precioElegido,
      precioNormal: p.price,
      precioMayorista: p.wholesalePrice || p.price,
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
  if (cartCountEl) cartCountEl.textContent = cart.reduce((s, x) => s + x.qty, 0);

  const box = document.getElementById("cartItems");
  if (!box) return;

  if (!cart.length) {
    box.innerHTML = '<p class="empty-cart">Tu carrito está vacío 💗</p>';
  } else {
    box.innerHTML = cart.map(x => {
      const tipoPrecio = x.tipoPrecio === "wholesale" ? "✦ PRECIO MAYORISTA" : "PRECIO NORMAL";
      const precioElegido = x.price;
      const precioNormal = x.precioNormal || x.price;
      const precioMayorista = x.precioMayorista || x.wholesalePrice || x.price;
      const subtotal = precioElegido * x.qty;

      return `
        <div class="cart-item">
          <img src="${x.img}" onerror="this.src='images/placeholder.jpg'" alt="${x.name}">
          <div class="cart-item-content">
            <strong>${x.name}</strong>
            <div class="cart-price-detail">
              <div class="cart-price-type">${tipoPrecio}</div>
              <div class="cart-selected-price">
                Precio elegido: <strong>${money(precioElegido)}</strong>
              </div>
              <div class="cart-price-options">
                <small>Precio normal: ${money(precioNormal)}</small>
                <small>Precio mayorista: ${money(precioMayorista)}</small>
              </div>
            </div>

            <div class="cart-subtotal">
              Subtotal: <strong>${money(subtotal)}</strong>
            </div>

            <div class="qty">
              <button onclick="changeQty(${x.id},-1)">−</button>
              <span>${x.qty}</span>
              <button onclick="changeQty(${x.id},1)">+</button>
              <button class="remove-item" onclick="removeItem(${x.id})">🗑️</button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  const total = cart.reduce((s, x) => s + (x.price * x.qty), 0);
  const cartTotalEl = document.getElementById("cartTotal");
  if (cartTotalEl) cartTotalEl.textContent = "Total: " + money(total);
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
    text += "🛍️ QUIERO REALIZAR ESTE PEDIDO\n\n";
    text += "📦 PRODUCTOS\n\n";

    cart.forEach(x => {
        const subtotal = x.price * x.qty;
        text += `• ${x.name}\n`;
        text += `  Cantidad: ${x.qty}\n`;
        text += `  Subtotal: ${money(subtotal)}\n\n`;
    });

    const total = cart.reduce((s, x) => s + (x.price * x.qty), 0);
    text += `💰 TOTAL: ${money(total)}\n\n`;
    text += "💗 Gracias por comprar en BlessedCarteras.\n";
    text += "Quedo atenta para coordinar el pago y envío.";

    const numeroWhatsApp = "56968762137";
    const url = `https://wa.me/${numeroWhatsApp}?text=` + encodeURIComponent(text);
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