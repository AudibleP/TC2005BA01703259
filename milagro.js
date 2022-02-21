function muestra_imagen(){
    document.getElementById("imagen_portero").innerHTML = '<img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/30446.png"alt="Imagen de un portero">';
}
let input_jugador = document.getElementById("jugador");

input_jugador.onkeyup = () => {
    let div_respuesta = document.getElementById("respuesta");
    div_respuesta.innerHTML = "Tu jugador se llama: " + input_jugador.value;
}
let boton_foto = document.getElementById("muestra_foto");

function mostrar_foto(){
    let div_foto = document.getElementById("foto");
    div_foto.innerHTML = '<img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/30446.png"alt="Imagen de un portero">';
    boton_foto.onclick = limpiar_foto
}  

function limpiar_foto(){
    let div_foto = document.getElementById("foto");
    div_foto.innerHTML = '';
    boton_foto.onclick = mostrar_foto;
}

boton_foto.onclick = mostrar_foto;