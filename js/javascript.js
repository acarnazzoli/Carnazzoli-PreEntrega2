
//Variables
let lineaPanel = parseInt(prompt("Ingrese la linea de paneles a consultar para asesorar a su cliente\n" +
    "1 Línea Espacios Comunes\n" +
    "2 Línea Dormitorios\n" +
    "3 Línea Infantil\n" +
    "4 Línea Oficinas\n" +
    "0 Finalizar la consulta"));

while (lineaPanel != 0) {

    const panelEncontrado = paneles.find(p => p.id === lineaPanel);
    console.log(panelEncontrado);

    lineaPanel = parseInt(prompt("Ingrese la linea de paneles a consultar para asesorar a su cliente\n" +
        "1 Línea Espacios Comunes\n" +
        "2 Línea Dormitorios\n" +
        "3 Línea Infantil\n" +
        "4 Línea Oficinas\n" +
        "0 Finalizar la consulta"));
}

const vtaPaneles = new PedidoPaneles(
    parseFloat(prompt("Ingrese el número de pedido correspondiente")),
    prompt("Ingrese el nombre de la línea solicitada"),
    parseInt(prompt("Ingrese la cantidad")),
    parseFloat(prompt("Ingrese el precio por unidad"))
);

console.log(vtaPaneles);
console.log("Total vtas: $" + vtaPaneles.multiplicarValores());
//
const fechaPedido = new Date();
console.log("Fecha de Pedido: " + fechaPedido.toLocaleDateString());