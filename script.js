var productos = [
    { nombre: "Aqua 200$", precio: 200 },
    { nombre: "Emoción 180$", precio: 180 },
    { nombre: "Alegría 160$", precio: 160 },
    { nombre: "Frescura 150$", precio: 150 }
];
var ventas = [
    { nombre: "Juana", ventas: [0, 0, 0, 0], total: 0 },
    { nombre: "Pedro", ventas: [0, 0, 0, 0], total: 0 }
];
var Empleadodelmes = null;
function Ventasactuales(persona, productIndex, value) {
    if (isNaN(value)) {
        alert("Por favor ingrese un valor numerico.");
        return;
    }
    ventas[persona].ventas[productIndex] = parseInt(value);
    ventas[persona].total = ventas[persona].ventas.reduce((a, b) => a + b) * productos[productIndex].precio;
    Tabla();
}
function Tabla() {
    var table = document.getElementById("salesTable");
    table.innerHTML = "<tr><th>Perfumes</th><th>Juana</th><th>Pedro</th></tr>";
    for (var i = 0; i < productos.length; i++) {
        var row = "<tr><td>" + productos[i].nombre + "</td>";
        for (var j = 0; j < ventas.length; j++) {
            row += "<td><input type='text' onchange='Ventasactuales(" + j + ", " + i + ", this.value)' value='" + ventas[j].ventas[i] + "'></td>";
        }
        row += "</tr>";
        table.innerHTML += row;
    }
    if (ventas[0].total > ventas[1].total) {
        Empleadodelmes = "Juana";
    } else if (ventas[1].total > ventas[0].total) {
        Empleadodelmes = "Pedro";
    } else {
        Empleadodelmes = "Es un empate";
    }  
}

function Resultados() {
    alert("Total Ventas:\nJuana: " + ventas[0].total + "\nPedro: " + ventas[1].total + "\n\nEmpleado del mes:\n" + Empleadodelmes);
    
}

function Guardarventas() {
    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("ventas", JSON.stringify(ventas));
}

function Borrardatos() {
    localStorage.removeItem("productos");
    localStorage.removeItem("ventas");
    location.reload();
}