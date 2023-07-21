function cambia_nombre() {

    var etiqueta_h1 = document.querySelector(".h1");
    etiqueta_h1.innerText = "Melissa Solano";
}

function eliminar(elemento) {
    elemento.remove();
}

var num_clicks= 418;

function menos_conexion() {
    num_clicks--;
    var span_clicks = document.querySelector("h4 span");
    span_clicks.innerText = num_clicks;
}



var num_clicks= 418;

function nueva_conexion() {
    num_clicks++;
    var span_clicks = document.querySelector("h4 span");
    span_clicks.innerText = num_clicks;
}