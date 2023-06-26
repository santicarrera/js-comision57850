let usuario = "santiagoca123";
let contraseña = "123456";
acceso = false;
while(acceso === false){
    let usuarioingresado = prompt("ingrese su usuario:");
    let claveingresada = prompt("ingrese su clave:");

    if(usuarioingresado === usuario && claveingresada === contraseña){
        alert("inicio de sesion correcto");
        acceso = true;
    } else{
        alert("usuario o clave invalida. vuelva a intentarlo.")
        acceso = false
    }
    acceso(usuarioingresado, usuario, claveingresada, contraseña)
}

