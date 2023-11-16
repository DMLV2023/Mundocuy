// script.js

$(document).ready(function() {
    // Agregar desplazamiento suave a todos los enlaces
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        const target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Otras funciones aquí...
});

var carrito = []; // Arreglo para almacenar productos en el carrito

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });

    // Actualizar el carrito visualmente
    mostrarCarrito();

    // Actualizar el total del carrito
    actualizarTotal(precio);
}

// Función para actualizar el total del carrito
function actualizarTotal(precio) {
    // Obtener el elemento span que muestra el total
    var totalElement = document.getElementById('totalCarrito');

    // Obtener el valor actual del total
    var totalActual = parseFloat(totalElement.textContent);

    // Sumar el precio del nuevo producto al total actual
    var nuevoTotal = totalActual + precio;

    // Actualizar el contenido del elemento span con el nuevo total
    totalElement.textContent = nuevoTotal.toFixed(2);
}

// Función para mostrar el carrito
function mostrarCarrito() {
    // Obtener el elemento ul que contiene la lista del carrito
    var listaCarrito = document.getElementById('listaCarrito');

    // Limpiar la lista antes de mostrar los elementos
    listaCarrito.innerHTML = '';

    // Recorrer el arreglo del carrito y agregar elementos a la lista
    carrito.forEach(function (producto) {
        var listItem = document.createElement('li');
        listItem.textContent = producto.nombre + ' - $' + producto.precio.toFixed(2);

        // Agregar botón para quitar el producto del carrito
        var botonQuitar = document.createElement('button');
        botonQuitar.textContent = 'Quitar';
        botonQuitar.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
        botonQuitar.onclick = function () {
            quitarDelCarrito(producto);
        };

        listItem.appendChild(botonQuitar);

        // Agregar el elemento a la lista del carrito
        listaCarrito.appendChild(listItem);
    });
}

// Función para quitar productos del carrito
function quitarDelCarrito(producto) {
    // Encontrar el índice del producto en el arreglo
    var index = carrito.findIndex(function (item) {
        return item.nombre === producto.nombre && item.precio === producto.precio;
    });

    // Si el producto se encuentra en el carrito, quitarlo
    if (index !== -1) {
        carrito.splice(index, 1);
    }

    // Actualizar el carrito visualmente
    mostrarCarrito();

    // Restar el precio del producto eliminado al total del carrito
    actualizarTotal(-producto.precio);
}

// Función para mostrar el modal del carrito
function mostrarModalCarrito() {
    // Obtener el modal
    var modal = document.getElementById('modalCarrito');

    // Mostrar el modal
    modal.style.display = 'block';
}

// Función para cerrar el modal del carrito
function cerrarModalCarrito() {
    // Obtener el modal
    var modal = document.getElementById('modalCarrito');

    // Cerrar el modal
    modal.style.display = 'none';
}
