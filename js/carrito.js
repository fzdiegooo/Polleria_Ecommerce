function agregarCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("productos"));
  if (!memoria) {
    let nuevoProducto = getNuevoProductoParaMemoria(producto);
    localStorage.setItem("productos", JSON.stringify([nuevoProducto]));
  } else {
    const indiceProducto = memoria.findIndex(
      (nuevoProducto) => nuevoProducto.id === producto.id
    );
    const nuevaMemoria = memoria;
    if (indiceProducto === -1) {
      nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
    } else {
      nuevaMemoria[indiceProducto].cantidad++;
    }
    localStorage.setItem("productos", JSON.stringify(nuevaMemoria));
  }
  actualizarNumeroCarrito();
}

function restarCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("productos"));
  const indiceProducto = memoria.findIndex(
    (nuevoProducto) => nuevoProducto.id === producto.id
  );
  if(memoria[indiceProducto].cantidad === 1){
    memoria.splice(indiceProducto,1);
  }else{
    memoria[indiceProducto].cantidad--;
  }
  localStorage.setItem("productos", JSON.stringify(memoria))
  actualizarNumeroCarrito();
}

function getNuevoProductoParaMemoria(producto) {
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}

const cuentaCarrito = document.getElementById("cuenta-carrito");
const cantidadProductos = document.getElementById("cantidad-productos");
function actualizarNumeroCarrito() {
  const memoria = JSON.parse(localStorage.getItem("productos"));
  const cantProductos = memoria.reduce(
    (base, current) => base + current.cantidad,
    0
  );
  cuentaCarrito.innerHTML = `${cantProductos}`;
  cantidadProductos.innerHTML = `${cantProductos}`;
}

actualizarNumeroCarrito();
