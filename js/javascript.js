
//Variables
let lineaPanel = parseInt(prompt("Ingrese la linea de paneles a consultar para asesorar a su cliente\n" +
    "1 Línea Espacios Comunes\n" +
    "2 Línea Dormitorios\n" +
    "3 Línea Infantil\n" +
    "4 Línea Oficinas\n" +
    "0 Finalizar la consulta"));

while (lineaPanel != 0) {
    switch (lineaPanel) {
        case 1:
            console.log(paneles[0]);
            break
        case 2:
            console.log(paneles[1]);
            break;
        case 3:
            console.log(paneles[2]);
            break;
        case 4:
            console.log(paneles[3]);
            break;
        default:
            alert("Error en la selección. Ingrese un número de línea de paneles válido, por ejemplo: 1, 2, 3, 4 o 0 para finalizar la consulta");
            break;
    }
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

/* console.log("pedido" + vtaPaneles); */

console.log(vtaPaneles);
console.log("Total vtas: $"+ vtaPaneles.multiplicarValores());
//
const fechaPedido = new Date ();
console.log( "Fecha de Pedido: " + fechaPedido.toLocaleDateString() );


/* let ventaPanel = parseInt(prompt("A continuación seleccione el código de línea de panel que solicita comprar el cliente\n" +
    "1 Línea Espacios Comunes\n" +
    "2 Línea Dormitorios\n" +
    "3 Línea Infantil\n" +
    "4 Línea Oficinas\n" +
    "0 Finalizar la compra"));

while (ventaPanel != 0) {
    switch (ventaPanel) {
        case 1:
            console.log(paneles[0]);
            break
        case 2:
            console.log(paneles[1]);
            break;
        case 3:
            console.log(paneles[2]);
            break;
        case 4:
            console.log(paneles[3]);
            break;
        default:
            alert("Error en la selección. Ingrese un número de línea de paneles válido, por ejemplo: 1, 2, 3, 4 o 0 para finalizar la venta");
            break;
    }
    ventaPanel = parseInt(prompt("A continuación seleccione el código de línea de panel que solicita comprar el cliente\n" +
    "1 Línea Espacios Comunes\n" +
    "2 Línea Dormitorios\n" +
    "3 Línea Infantil\n" +
    "4 Línea Oficinas\n" +
    "0 Finalizar la compra")); 
}    
/*    const nuevoArray = [paneles[0]];

    console.log(nuevoArray); */

/* class Panel{
    constructor (nombrePanel, medidaPanel, materialPanel){
        this.nombre = nombrePanel;
        this.medida = medidaPanel;
        this.material = materialPanel;   
//Metodo personalizado para la class Panel   
        this.enStock = true;
    }
    sinStock(){
        this.enStock = false;
    }
}
//Cambiar medida de los paneles utilizando el Metodo creado

let nombrePanel = prompt ("Ingrese el nombre deseado para sus paneles");
let medidaPanel = prompt ("Ingrese la medida en cm2 (centímetros cuadrados) de cada panel");
let materialPanel = prompt ("Ingrese el material de recubrimiento de los paneles. Materiales disponibles: Cuerina o Silicona")

// Crear un nuevo producto pidiendo los datos al usuario 
// Se guardan los datos pedidos en Variables y se crea una Constante usando esas variables como parametros usando la Class


const panelPersonalizado = new Panel (nombrePanel, medidaPanel, materialPanel);
console.log(panelPersonalizado); 

const fechaPedido = new Date ();
console.log( fechaPedido.toLocaleDateString() ); 
 */