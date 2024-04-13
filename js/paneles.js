//Class
class Panel {
    constructor (id, linea, medida, material, precio) {
        this.id = id;
        this.linea = linea;
        this.medida = medida;
        this.material = material;
        this.precio = parseFloat(precio);
    }
}


class PedidoPaneles {
    constructor (pedido, linea, cantidad, precioUnitario) {
        this.pedido = pedido;
        this.linea =  linea;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
    }

    multiplicarValores() {
        return this.precioUnitario * this.cantidad;
    }
}
// Array
const paneles = [
    {
        id: 1,
        linea: 'Espacios Comunes',
        medida: 35,
        material: 'Cuerina',
        precio: 3500,
    },
    {
        id: 2,
        linea: 'Dormitorios',
        medida: 40,
        material: 'Silicona',
        precio: 4000,
    },
    {
        id: 3,
        linea: 'Infantiles',
        medida: 45,
        material: 'Silicona',
        precio: 4500,
    },
    {
        id: 4,
        linea: 'Oficinas',
        medida: 50,
        material: 'Cuerina',
        precio: 2500,
    },
]

//Aplicar class utilizando forEach para modificar

paneles.forEach(objeto => {
    objeto.class = Panel;
}); 
//console.log (paneles[0]);

//Creación de otro array utilizando map



// Agregar los elementos del array original al nuevo array vacío


