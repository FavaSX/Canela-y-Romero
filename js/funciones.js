// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    // Crea un nuevo elemento de producto
    var productoHTML = `
      <div class="producto">
        <div class="producto-info">
          <img src="${imagen}" alt="${nombre}" class="img-fluid">
          <div class="descripcion">
            <h5 class="nombre">${nombre}</h5>
            <p class="precio">$${precio}</p>
          </div>
        </div>
      </div>`;
    
    // Agrega el producto al contenedor del carrito
    $('#carritoContenido').append(productoHTML);
  
    // Actualiza el total del carrito
    var totalActual = parseFloat($('#totalCarrito').text());
    var nuevoTotal = totalActual + precio;
    $('#totalCarrito').text(nuevoTotal);
  }
// Al hacer clic en el botón de abrir el carrito, muestra el modal
$('#abrirCarrito').click(function() {
  $('#modalCarrito').modal('show');
});

