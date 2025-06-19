
// Declaración de variables y arrays
const productos = [
    { id: 1, nombre: "Milanesa de carne", precio: 11000 },
    { id: 2, nombre: "Milanesa de pollo", precio: 7200 },
    { id: 3, nombre: "Milanesa de cerdo", precio: 9000 }
];

let orden_de_compra = [];

let total = 0;

// Función para mostrar productos disponibles
function mostrar_productos() {
    alert("Productos disponibles:\n1. Milanesa de carne $11000 \n2. Milanesa de pollo $7200 \n3. Milanesa de Cerdo $9000");
}

// Función para agregar producto al carrito
function agregar_producto() {
    let id_producto = Number(prompt("Ingrese el número del producto que desea comprar:"));

    if(id_producto == 1){
        let producto1 =  { id: 1, nombre: "Milanesa de carne", precio: 11000 };
       
        orden_de_compra.push(producto1);
       
        total += 11000;
       
        alert(`Milanesa de carne ha sido añadido a tu orden de compra. Total actual: $${total}`);
    }
    else if(id_producto == 2){
        let producto2 =  { id: 2, nombre: "Milanesa de pollo", precio: 7200 };
        
        orden_de_compra.push(producto2);
        
        total += 7200;
        
        alert(`Milanesa de pollo ha sido añadido a tu orden de compra. Total actual: $${total}`);
    }else if(id_producto == 3){
        let producto3 = { id: 3, nombre: "Milanesa de cerdo", precio: 9000 };
        
        orden_de_compra.push(producto3);
        
        total += 9000;
        
        alert(`Milanesa de cerdo ha sido añadido a tu orden de compra. Total actual: $${total}`);
    }else {
        alert("Número incorrecto. Intentelo nuevamente.");
        
        mostrar_productos();
        
        agregar_producto();
    }
}

// Función para finalizar compra
function finalizarCompra() {
    alert(`Total a pagar: $${total}`);
}

// Función principal que controla el flujo del simulador
function iniciarSimulador() {
    alert("Bienvenido a la tienda virtual de la Carnicería Fabian.");

    let decision = true;

    while (decision) {
        mostrar_productos();
        
        agregar_producto();
        
        decision = confirm("¿Desea agregar otro producto a la orden de compra?");
    }

    finalizarCompra();
}

// Llamada a la función principal
iniciarSimulador();
