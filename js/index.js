const cartaContainer = document.getElementById("carta-container")

function insertarCarta(productos){
    productos.forEach(producto =>{
        const nuevoProducto = document.createElement("div")
        nuevoProducto.classList = "producto"
        nuevoProducto.innerHTML = `
            <img src=${producto.img}>
            <div class = "producto-info">
                <p>${producto.nombre}</p>
                <p>${producto.descripcion}</p>
            </div>
            <div class = "producto-precio">
                <p>S/ ${producto.precio}</p>
                <button id= "btn-agregar-carrito">Agregar al Carrito</button>
            </div>
        `
        cartaContainer.appendChild(nuevoProducto)
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarCarrito(producto))
    })
}

insertarCarta(carta)