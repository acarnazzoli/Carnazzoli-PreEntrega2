

class Panel{
    constructor (nombrePanel, medidaPanel, materialPanel){
        this.nombre = nombre;
        this.medida = medida;
        this.material = material;   
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