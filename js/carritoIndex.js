const productosContainer = document.getElementById("productos-container");
const btnContinuarCompra = document.getElementById("continuar-compra");

function insertarCarrito() {
  let total = 0;
  productosContainer.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("productos"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "producto-carrito";
      nuevoProducto.innerHTML = `
              <img src = "${producto.img}">
              <div class="info-producto-carrito">
                  <p>${producto.nombre}</p>
                  <p>${producto.descripcion}</p>
              </div>
              <div class="precio-producto-carrito">
                  <p>S/ ${producto.precio}</p>
              </div>
              <div class="cantidad-producto-carrito">
                  <button>-</button>
                  <span id="cantidad-carrito">${producto.cantidad}</span>
                  <button>+</button>
              </div>
              `;
      total += producto.precio * producto.cantidad;
      productosContainer.appendChild(nuevoProducto);
      calcularTotal(total);
      nuevoProducto
        .getElementsByTagName("button")[1]
        .addEventListener("click", () => {
          agregarCarrito(producto);
          insertarCarrito();
          total += producto.precio;
          calcularTotal(total);
        });
      nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => {
          restarCarrito(producto);
          insertarCarrito();
          total -= producto.precio;
          calcularTotal(total);
        });
    });
  } else {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "carrito-vacio";
    nuevoProducto.innerHTML = `
              <p>Su carrito esta vacio :(</p>
              <a href = "./index.html#carta-container-title">Ver Carta</a>
              `;
    productosContainer.appendChild(nuevoProducto);
  }
}

insertarCarrito();

function calcularTotal(total) {
  const subtotalProductos = document.getElementById("subtotal-productos");
  const igvProductos = document.getElementById("igv-productos");
  const totalProductos = document.getElementById("total-productos");
  const calcularIgv = total * 0.18;
  const calcularTotal = total + calcularIgv;
  subtotalProductos.innerHTML = `${total.toFixed(2)}`;
  igvProductos.innerHTML = `${calcularIgv.toFixed(2)}`;
  totalProductos.innerHTML = `${calcularTotal.toFixed(2)}`;
}

btnContinuarCompra.addEventListener("click", () => {
  const productos = JSON.parse(localStorage.getItem("productos"));
  if (productos && productos.length > 0) {
    location.href = "../ordenCompra.html";
  } else {
    alert("Cariito Vacio");
  }
});



