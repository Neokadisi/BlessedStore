/* =========================================================
   CYBER · BlessedCarteras
   Para cambiar fechas o descuento edita SOLO el bloque CYBER.
   ========================================================= */
const CYBER = {
  modoPrueba: false,   // true = fuerza el Cyber activo para probarlo en tu PC (déjalo en false al publicar)
  inicio: new Date("2026-10-05T00:00:00-03:00"),  // CAMBIA: inicio del Cyber
  fin:    new Date("2026-10-07T23:59:59-03:00"),  // CAMBIA: término del Cyber
  descuento: 20,       // % de descuento aplicado a todos los precios
  avisoDias: 7         // días antes del inicio en que aparece el banner "Empieza en..."
};

function cyberActivo() {
  if (CYBER.modoPrueba) return true;
  const ahora = new Date();
  return ahora >= CYBER.inicio && ahora <= CYBER.fin;
}

function cyberEstado() {
  if (cyberActivo()) return "durante";
  const falta = CYBER.inicio - new Date();
  if (falta > 0 && falta <= CYBER.avisoDias * 86400000) return "antes";
  return "fuera";
}

function clp(n) {
  return "$" + Number(n).toLocaleString("es-CL");
}

/* Precio final con descuento (redondeado a la decena). Fuera del Cyber devuelve el mismo precio. */
function precioCyber(precio) {
  if (!precio || !cyberActivo()) return precio;
  return Math.round(precio * (1 - CYBER.descuento / 100) / 10) * 10;
}

/* HTML de precio: tachado + precio Cyber durante el evento, o el precio normal fuera de él. */
function precioHTML(precio) {
  if (!precio) return "Por definir";
  if (!cyberActivo()) return clp(precio);
  return `<span class="precio-antes">${clp(precio)}</span><span class="precio-cyber">${clp(precioCyber(precio))}</span>`;
}

/* ---------- Banner con cuenta regresiva ---------- */
let cyberEstadoPrevio = null;

function actualizarBannerCyber() {
  const banner = document.getElementById("cyber-banner");
  if (!banner) return;

  const estado = cyberEstado();

  // Si el evento empieza o termina con la página abierta, refrescar precios
  if (estado !== cyberEstadoPrevio) {
    const huboCambio = cyberEstadoPrevio !== null;
    cyberEstadoPrevio = estado;
    if (huboCambio) {
      if (typeof renderProducts === "function") renderProducts();
      if (typeof renderCart === "function") renderCart();
    }
  }

  if (estado === "fuera") {
    banner.style.display = "none";
    return;
  }

  const ahora = Date.now();
  let destino, etiqueta, mensaje;

  if (estado === "durante") {
    destino = (CYBER.modoPrueba && CYBER.fin.getTime() < ahora) ? ahora + 172800000 : CYBER.fin.getTime();
    etiqueta = "Termina en";
    mensaje = `${CYBER.descuento}% de descuento en toda la tienda`;
  } else {
    destino = CYBER.inicio.getTime();
    etiqueta = "Empieza en";
    mensaje = "¡Se viene el Cyber de BlessedCarteras!";
  }

  const resto = Math.max(0, destino - ahora);
  const d = Math.floor(resto / 86400000);
  const h = Math.floor(resto / 3600000) % 24;
  const m = Math.floor(resto / 60000) % 60;
  const s = Math.floor(resto / 1000) % 60;

  banner.style.display = "flex";
  document.getElementById("cyber-texto").textContent = mensaje;
  document.getElementById("cyber-label").textContent = etiqueta;
  document.getElementById("cyber-timer").textContent = `${d}d ${h}h ${m}m ${s}s`;
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarBannerCyber();
  setInterval(actualizarBannerCyber, 1000);
});
