function calcularTotal2() {
  const productos = JSON.parse(localStorage.getItem("productos"));
  const subtotalProductos = document.getElementById("subtotal-productos");
  const igvProductos = document.getElementById("igv-productos");
  const totalProductos = document.getElementById("total-productos");
  let total = 0;
  productos.forEach((producto) => {
    total += producto.cantidad * producto.precio;
  });
  const calcularIgv = total * 0.18;
  const calcularTotal = total + calcularIgv;
  subtotalProductos.innerHTML = `${total.toFixed(2)}`;
  igvProductos.innerHTML = `${calcularIgv.toFixed(2)}`;
  totalProductos.innerHTML = `${calcularTotal.toFixed(2)}`;
}

calcularTotal2();

const tipoComprobante = document.getElementById("comprobante-form");
tipoComprobante.addEventListener("change", (e) => {
  const inputRazonSocial = document.getElementById("input-razon-social");
  const inputRuc = document.getElementById("input-ruc");
  const inputTipoDocumento = document.getElementById("input-tipo-documento");
  const inputNumeroDocumento = document.getElementById(
    "input-numero-documento"
  );
  if (e.target.value === "boleta") {
    inputTipoDocumento.style.display = "flex";
    inputNumeroDocumento.style.display = "flex";
    inputRazonSocial.style.display = "none";
    inputRuc.style.display = "none";
  } else if (e.target.value === "factura") {
    inputTipoDocumento.style.display = "none";
    inputNumeroDocumento.style.display = "none";
    inputRazonSocial.style.display = "flex";
    inputRuc.style.display = "flex";
  }
});

const resumenCompraContainer = document.getElementById("resumen-compra");
function agregarResumenCarrito() {
  const productos = JSON.parse(localStorage.getItem("productos"));
  productos.forEach((producto) => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "producto-resumen-carrito";
    nuevoProducto.innerHTML = `
        <p class = "cantidad-producto-resumen">${producto.cantidad}<p>
        <p class = "nombre-producto-resumen">${producto.nombre}<p>
        <p class = "precio-producto-resumen">S/ ${producto.precio}<p>
        `;
    resumenCompraContainer.appendChild(nuevoProducto);
  });
}

agregarResumenCarrito();
