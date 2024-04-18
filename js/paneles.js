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
    constructor (pedido, linea, cantidad, precioUnitario, fecha) {
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


// AGREGAR AL PROYECTO AGREGAR UN TEXTO Y
// CAMBIAR EL COLOR DE FONDO LOS FINES DE SEMANA CON DOM USANDO CREATE ELEMENT

