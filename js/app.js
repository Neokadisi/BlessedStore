/* =========================================================
           [7] JAVASCRIPT: comportamiento y funcionalidades
           ========================================================= */
const products = [
  {id:1,name:"Cartera mini 1 ",price:29990,img:"img/24.jpg"},
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

products.forEach(p=>{ if(!p.category) p.category = /mochila/i.test(p.name) ? "mochilas" : /cartera/i.test(p.name) ? "carteras" : "bolsos"; });

let favorites = JSON.parse(localStorage.getItem("blessed_favorites") || "[]");
let activeCategory = "todos";
let searchTerm = "";

let cart = JSON.parse(localStorage.getItem("blessed_cart") || "[]");

        // [JS-01] FORMATO DE PRECIOS: convierte números a pesos chilenos.
function money(n) {
  return "$" + Number(n).toLocaleString("es-CL") + " CLP";
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
  const saved=favorites.includes(p.id);
  return `<article class="product">
    <div class="product-img" onclick="openProduct(${p.id})">
      <div class="product-top"><button class="favorite-btn ${saved?"saved":""}" onclick="event.stopPropagation();toggleFavorite(${p.id})" aria-label="Favorito">${saved?"♥":"♡"}</button></div>
      <img src="${p.img}" alt="${p.name}"
             onerror="this.onerror=null; this.src='images/placeholder.jpg';">
    </div>
    <div class="product-info">
      <h3>${p.name}</h3>
      <div class="product-meta"><span class="product-code">${p.code?"Código "+p.code:"Blessed"}</span><span>${p.category}</span></div>
      <div class="price">${money(p.price)}</div>
      <div class="product-actions"><button class="product-btn" onclick="addToCart(${p.id})">Añadir al carrito 🛍️</button><button class="details-btn" onclick="openProduct(${p.id})">Ver</button></div>
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
// [JS-03] CARRITO: agrega un producto seleccionado.
function addToCart(id) {
  const p=products.find(x=>x.id===id);
  const item=cart.find(x=>x.id===id);
  if(item) item.qty++;
  else cart.push({...p,qty:1});
  saveCart(); openCart();
}

        // [JS-04] CARRITO: guarda el carrito en el navegador.
function saveCart() {
  localStorage.setItem("blessed_cart",JSON.stringify(cart));
  renderCart();
}

        // [JS-05] CARRITO: actualiza visualmente los productos y el total.
function renderCart() {
  document.getElementById("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);
  const box=document.getElementById("cartItems");
  if(!cart.length) {
    box.innerHTML='<p class="empty-cart">Tu carrito está vacío 💗</p>';
  } else {
    box.innerHTML=cart.map(x=>`
      <div class="cart-item">
        <img src="${x.img}" onerror="this.src='images/placeholder.jpg'" alt="">
        <div class="cart-item-content">
          <strong>${x.name}</strong>
          <div class="cart-item-price">${money(x.price)}</div>
          <div class="qty">
            <button onclick="changeQty(${x.id},-1)">−</button>
            <span>${x.qty}</span>
            <button onclick="changeQty(${x.id},1)">+</button>
            <button class="remove-item" onclick="removeItem(${x.id})">🗑️</button>
          </div>
        </div>
      </div>`).join("");
  }
  document.getElementById("cartTotal").textContent="Total: "+money(cart.reduce((s,x)=>s+x.price*x.qty,0));
}

        // [JS-06] CARRITO: aumenta o disminuye cantidades.
function changeQty(id,d) {
  const x=cart.find(i=>i.id===id);
  if(!x)return;
  x.qty+=d;
  if(x.qty<=0) cart=cart.filter(i=>i.id!==id);
  saveCart();
}

        // [JS-07] CARRITO: elimina un producto.
function removeItem(id) {
  cart=cart.filter(x=>x.id!==id); saveCart();
}

        // [JS-08] CARRITO: vacía todos los productos.
function clearCart() {
  cart=[]; saveCart();
}

        // [JS-09] CARRITO: abre el panel lateral.
function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("backdrop").classList.add("open");
}
        // [JS-10] CARRITO: cierra el panel lateral.
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("backdrop").classList.remove("open");
}
        // [JS-11] WHATSAPP: prepara el pedido y lo envía al chat.
function checkoutWhatsApp() {
  if(!cart.length) return alert("Tu carrito está vacío.");
  let text="Hola Blessed.Carteras💗%0A%0AQuiero realizar este pedido:%0A";
  cart.forEach(x=>text+=`%0A• ${x.name} x${x.qty} - ${x.price*x.qty}`);
  const total=cart.reduce((s,x)=>s+x.price*x.qty,0);
  text+=`%0A%0ATotal: ${total} CLP%0A%0AGracias.`;
  text+=arguments[0]?"%0A%0ANota: "+encodeURIComponent(arguments[0]):"Listo bella💗 una vez que confirmes el pedido, me avisas y coordinamos el pago y envío.";
  window.open("https://wa.me/56968762137?text="+text,"_blank");
}

        // [JS-12] MENÚ RESPONSIVE: abre/cierra el menú móvil.
function toggleMenu() {
  document.getElementById("navlinks").classList.toggle("open");
}
        // [JS-13] BÚSQUEDA: permite consultar un producto.
function focusSearch() { document.getElementById("productSearch")?.focus(); document.getElementById("coleccion")?.scrollIntoView({behavior:"smooth"}); }

document.querySelectorAll(".navlinks a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navlinks").classList.remove("open")));

document.getElementById("reviewForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("reviewName").value.trim();
  const rating=document.querySelector('input[name="rating"]:checked')?.value;
  const comment=document.getElementById("reviewComment").value.trim();
  if(!rating)return;
  const reviews=JSON.parse(localStorage.getItem("blessed_reviews")||"[]");
  reviews.unshift({name,rating,comment,date:new Date().toLocaleDateString("es-CL")});
  localStorage.setItem("blessed_reviews",JSON.stringify(reviews.slice(0,20)));
  e.target.reset(); renderReviews();
  alert("¡Gracias por compartir tu experiencia con Blessed.Carteras! 💗");
});

        // [JS-14] OPINIONES: recupera y muestra opiniones guardadas.
function renderReviews() {
  const reviews=JSON.parse(localStorage.getItem("blessed_reviews")||"[]");
  const box=document.getElementById("reviewsList");
  if(!reviews.length) {
    box.innerHTML='<p class="empty-reviews">Todavía no hay opiniones. ¡Sé la primera en recomendar Blessed.Carteras! 💗</p>';
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

        // [JS-15] SEGURIDAD: evita interpretar comentarios como HTML.
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}

document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeProductModal();closeCart();}});

document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();
renderCart();
renderReviews();



/* ==========================================
   CUENTA REGRESIVA - OFERTA BLESSEDSTORE
   ========================================== */

/*
   🔧 MODIFICA SOLAMENTE ESTA PARTE

   Año   = 2026
   Mes   = 9      ← septiembre
   Día   = 1
   Hora  = 20     ← 20:00
   Min   = 00
   Seg   = 00

   IMPORTANTE:
   En JavaScript los meses comienzan desde 0:
   0 = Enero
   1 = Febrero
   2 = Marzo
   3 = Abril
   4 = Mayo
   5 = Junio
   6 = Julio
   7 = Agosto
   8 = Septiembre
   9 = Octubre
   10 = Noviembre
   11 = Diciembre
*/

const fechaEvento = new Date(
  2026, 8, 1, 20, 0, 0
).getTime();


/* ==========================================
   CONTADOR
   ========================================== */

function actualizarContador() {

  const ahora = new Date().getTime();

  const diferencia = fechaEvento - ahora;


  // Si la fecha ya llegó
  if (diferencia <= 0) {

    document.getElementById("dias").textContent = "0";
    document.getElementById("horas").textContent = "0";
    document.getElementById("minutos").textContent = "0";
    document.getElementById("segundos").textContent = "0";

    const mensaje = document.getElementById("mensaje-oferta");

    if (mensaje) {
      mensaje.textContent = "🔥 ¡La oferta ha comenzado!";
    }

    return;
  }


  /* ==========================================
     CALCULAR DÍAS
     ========================================== */

  const dias = Math.floor(
    diferencia / (24 * 60 * 60 * 1000)
  );


  /* ==========================================
     CALCULAR HORAS
     ========================================== */

  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );


  /* ==========================================
     CALCULAR MINUTOS
     ========================================== */

  const minutos = Math.floor(
    (diferencia % (1000 * 60 * 60))
    / (1000 * 60)
  );


  /* ==========================================
     CALCULAR SEGUNDOS
     ========================================== */

  const segundos = Math.floor(
    (diferencia % (1000 * 60))
    / 1000
  );


  /* ==========================================
     MOSTRAR RESULTADO
     ========================================== */

  document.getElementById("dias").textContent = dias;

  document.getElementById("horas").textContent = horas;

  document.getElementById("minutos").textContent = minutos;

  document.getElementById("segundos").textContent = segundos;
}


/* ==========================================
   INICIAR CONTADOR
   ========================================== */

actualizarContador();

setInterval(actualizarContador, 1000);
        /* FIN DEL JAVASCRIPT */
