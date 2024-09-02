// Arrays de datos
const imagenes = ['uno.jpg','dos.jpg','tres.jpg','cuatro.jpg','cinco.jpg','seis.jpg','siete.jpg','ocho.jpg','nueve.jpg','diez.jpg','once.jpg','doce.jpg','trece.jpg','catorce.jpg','quince.jpg'];
const nombres = ['Coca cola light','Fideos Marolio','Azucar Ledesma','Cream Ilolay','Yogurt Ilolay','Jugo La Campagnola','Bolsas Ziploc','Balde Colombraro','Cesto Colombraro','Alimento Pedigree','Cerveza Quilmes lata','Lavandina Esencial','Axe Black 150ML','Fijador Roby','Milanesas Lucchetti'];
const precios = [3359, 1417, 997, 1759, 779, 1399, 2519, 7499, 9990, 31990, 1154, 1364, 1489, 4514, 1399];   
const stock = [400, 250, 53, 45, 56, 150, 25, 5, 4, 12, 700, 25, 35, 20, 15];

// Selecciona el contenedor donde se agregarán las tarjetas
const container = document.querySelector('.container');

// Función para generar las tarjetas dinámicamente
function pintarProductos(arrayImagenes, arrayNombres, arrayPrecios, arrayStock) {
    // Limpiar el contenedor antes de agregar nuevos elementos
    container.innerHTML = '';

    for (let i = 0; i < arrayNombres.length; i++) {
        console.log(`Agregando producto: ${arrayNombres[i]} con imagen: ${arrayImagenes[i]}`); 

        container.innerHTML += `
            <div class="card">
                <img src="${arrayImagenes[i]}" alt="${arrayNombres[i]}" class="card-img">
                <h2 class="card-title">${arrayNombres[i]}</h2>
                <p class="card-precio">Precio: $${arrayPrecios[i]}</p>
                <p class="card-stock">Stock: <input type="number" id="stock${i}" value="${arrayStock[i]}" readonly></p>
                <p class="card-cantidad">Cantidad: <input type="number" id="entrada${i}" min="0" value="0" placeholder="Ingrese cantidad"></p>
                <button id="btn${i}" class="comprar" onclick="comprar(${i})">Comprar</button>
            </div>
        `;
    }
}

// Llamar a la función para generar las tarjetas
pintarProductos(imagenes, nombres, precios, stock);

// Función para manejar la compra
function comprar(index) {
    const stockHTML = document.getElementById(`stock${index}`);
    const entradaHTML = document.getElementById(`entrada${index}`);
    const stock = parseInt(stockHTML.value);
    const cantidad = parseInt(entradaHTML.value);

    // Verifica si el stock es 0
    if (stock === 0) {
        alert('No hay stock');
        return; // Salir de la función para evitar que se procese la compra
    }

    if (cantidad > 0 && cantidad <= stock) {
        stockHTML.value = stock - cantidad;
        total += cantidad * precios[index]; // Sumar al total el precio multiplicado por la cantidad comprada
        totalText.textContent = `Total: $${total}`; // Actualizar el total en la barra de navegación
        entradaHTML.value = "0"; // Resetear la cantidad a 0
        alert('Compra realizada exitosamente');
    } else {
        alert('Cantidad inválida');
    }
}

// Variables para el total
let totalText = document.querySelector(".total");
let total = 0;
