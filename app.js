/* const Persona = function (id, nombre,distrito, negocio, monto){
    this.id          = id;
    this.nombre     = nombre;
    this.distrito   = distrito;
    this.negocio    = negocio;
    this.monto      = monto;
}

let persona1 = new Persona(123,"Fritz Guzmán", "Olivos", "Zapateria", 1000);
let persona2 = new Persona(123,"Carmen Terrones", "Olivos", "Floreria", 1200);
let persona3 = new Persona(123,"Domitila Satiago", "San Isidro", "Ferreteria", 2000);
let persona4 = new Persona(123,"Luis Miguel", "San Martin", "Confiteria", 500);
let persona5 = new Persona(123,"Manuel Servantes", "Lima", "Polleria", 3000);
let persona6 = new Persona(123,"Natalia", "San Borja", "Panaderia", 2500);

let cartera = [persona1, persona2, persona3, persona4, persona5, persona6];


function filtrarPorDistrito (){
    let palabraClave = prompt("Ingresa el distrito para buscar por distrito");
    palabraClave = palabraClave.toLocaleLowerCase();
    let resultado = cartera.filter((per) => per.distrito.toLowerCase().includes(palabraClave));

    if(resultado.length > 0){
        console.log(resultado);
    }else{
        alert(`No hay clientes en el distrito ${palabraClave}`)
    }
}

console.log(filtrarPorDistrito()); */

const Persona = function (id, nombre, distrito, negocio, monto) {
    this.id = id;
    this.nombre = nombre;
    this.distrito = distrito;
    this.negocio = negocio;
    this.monto = monto;
}

let persona1 = new Persona(123, "Fritz Guzmán", "Olivos", "Zapateria", 1000);
let persona2 = new Persona(124, "Carmen Terrones", "Olivos", "Floreria", 1200);
let persona3 = new Persona(125, "Domitila Satiago", "San Isidro", "Ferreteria", 2000);
let persona4 = new Persona(126, "Luis Miguel", "San Martin", "Confiteria", 500);
let persona5 = new Persona(127, "Manuel Servantes", "Lima", "Polleria", 3000);
let persona6 = new Persona(128, "Natalia", "San Borja", "Panaderia", 2500);

let cartera = [persona1, persona2, persona3, persona4, persona5, persona6];

function filtrarPorDistrito() {
    do {
        let palabraClave = prompt("Ingresa el distrito para buscar por distrito");
        palabraClave = palabraClave.toLowerCase(); // Convertir a minúsculas

        let resultado = cartera.filter((per) => per.distrito.toLowerCase().includes(palabraClave));

        if (resultado.length > 0) {
            console.log(resultado);
            alert(`Cliente encontrado en el distrito ${palabraClave}. Revisar la consola para más detalles.`);
        } else {
            alert(`Distrito no encontrado: ${palabraClave}`);
        }

        var respuesta = prompt("¿Deseas hacer otra búsqueda? (Si/No)").toUpperCase();
    } while (respuesta === "SI");
}

filtrarPorDistrito();
