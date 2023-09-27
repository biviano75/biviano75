var usuarioRegistrado="eduardo"
var contraseñaRegistrada="123"
var usuarioIngresado=prompt("INGRESE EL USUARIO");
var contraseñaIngresada=prompt("INGRESE LA CONTRASEÑA");
if(usuarioIngresado==usuarioRegistrado&&contraseñaIngresada==contraseñaRegistrada)
{
    alert("acceso correcto");
}
else{
    alert("acceso denegado");
}