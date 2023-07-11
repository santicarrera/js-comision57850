
alert("Bienvenido/a a la pagina de fans del millonario, si no esta registrado/a lo/la invitamos a hacerlo");

class Usuarios {
    constructor(email, clave, nombre) {
        this.email = email;
        this.clave = clave;
        this.nombre = nombre;
    }
}

let listaDeUsuarios = [];

function ingresarUsuario() {
    let email = prompt("ingrese un mail para registrarse");
    let clave = prompt("ingrese una contraseña");
    let nombre = prompt("Por ultimo, ingrese su nombre");

    let nuevoUsuario = new Usuarios(email, clave, nombre);
    listaDeUsuarios.push(nuevoUsuario);
}
ingresarUsuario();

function buscarUsuario(confirmarMail) {
    let chequearEmail = prompt("ingrese su mail");
    return confirmarMail.email == chequearEmail;
}

let resultadoEmail = listaDeUsuarios.find(buscarUsuario);
if (resultadoEmail == undefined) {
    alert("lo siento, no hemos encontrado su usuario");
} else {
    function buscarClave(confirmarClave){
    let chequearClave = prompt("ingrese su contraseña");
    return confirmarClave.clave == chequearClave;
    }
}

let resultadoClave = listaDeUsuarios.find(buscarClave);

if (resultadoClave == undefined){
    alert("su clave no fue encontrada o es incorrecta");
} else{
    alert("Bienvenido/a a la pagina de fans del Millo");
}


class Combos {
    constructor(numero, camiseta, short, buzo, joggin, precio){
        this.numero = numero;
        this.camiseta = camiseta;
        this.short = short;
        this.buzo = buzo;
        this.joggin = joggin;
        this.precio = precio;
    }


    toString(){
        return `Combo N° ${this.numero}\n
        color de camiseta ${this.camiseta}\n
        color de short ${this.short}\n
        color de buzo ${this.buzo}\n
        color de joggin ${this.joggin}\n
        precio del combo ${this.precio}`;
    }
}


let combo1 = new Combos(1, "Blanca con la banda roja", "Blanco", "Blanco", "Negro", 65000);
let combo2 = new Combos(2, "Negra", "Negro", "Negro", "Blanco", 65000);
let combo3 = new Combos(3,"Roja con lineas blancas", "Rojo", "Rojo", "Rojo", 65000);

alert(combo1);
alert(combo2);
alert(combo3);

let numeroElegido = Number(prompt("selecciona el numero del combo"));


if (numeroElegido === 1){
    alert("Bonita combinacion");
    alert("El precio de su combo es de $65000");
    alert("Muchas gracias por comprar con nosotros. Lo esperamos pronto");
} else if (numeroElegido === 2){
    alert("Buena combinacion");
    alert("El precio de su combo es de $65000");
    alert("muchas gracias por comprar con nosotros. Lo esperamos pronto");
} else if (numeroElegido === 3){
    alert("bonita combinacion");
    alert ("El precio de su combo es de $65000");
    alert("Muchas gracias por comprar con nosotros. Lo esperamos pronto");
} else{
    alert("eso no es un combo válido");

    while(
        numeroElegido !== 1 ||
        numeroElegido !== 2 ||
        numeroElegido !== 3 
        ) {
        alert("tenemos tre combos de indumentaria para ofrecerte. Elija uno segun su numero");
        alert(combo1);
        alert(combo2);
        alert(combo3);
        let NumeroElegido = Number(prompt("selecciona un N° de combo"));
        if (numeroElegido === 1){
            alert("Buena combinacion");
            alert("El precio de su combo es de $65000");
            alert("muchas gracias por comprar con nosotros. Lo esperamos pronto");
            break;
        } else if(numeroElegido === 2){
            alert("Buena combinacion");
            alert("El precio de su combo es de $65000");
            alert("muchas gracias por comprar con nosotros. Lo esperamos pronto");
            break;
        } else if(numeroElegido === 3){
            alert("Buena combinacion");
            alert("El precio de su combo es de $65000");
            alert("muchas gracias por comprar con nosotros. Lo esperamos pronto");
            break;
        } else if(numeroElegido === 4){
            alert("Buena combinacion");
            alert("El precio de su combo es de $65000");
            alert("muchas gracias por comprar con nosotros. Lo esperamos pronto");
            break;
        } else{
            alert("ese no es un combo válido")
        }
    }
}

while (
    numeroElegido === 1 ||
    numeroElegido === 2 ||
    numeroElegido === 3 
    ) {
    alert("Muchas gracias por comprar con nosotros. Lo esperamos pronto");
    break;
}