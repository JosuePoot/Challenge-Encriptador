let mensaje;
let mensajeResultante;


function limpiarTexto() {
    var texto = document.getElementById("texto").value;

    // Verificar si se ingresaron caracteres no permitidos antes de limpiar el texto
    if (/[^a-z]/g.test(texto)) {
        mostrarMensajeCaracterNoPermitido();
        // Eliminar caracteres no permitidos y reasignar el valor al textarea
        //texto = texto.replace(/[^a-záéíóú\s]/gi, '');
        //document.getElementById("texto").value = texto;
        //return;
    }

    // Normalizar caracteres y reemplazar caracteres acentuados
    //texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, '');

    // Convertir todo a minúsculas
    //texto = texto.toLowerCase();

    document.getElementById("texto").value = texto;
}

function limpiarTexto2() {
    var texto = document.getElementById("texto").value;
    // Normalizar caracteres y reemplazar caracteres acentuados
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    // Convertir todo a minúsculas
    texto = texto.toLowerCase();
    // Eliminar caracteres especiales
    var textoLimpiado = texto.replace(/[^a-z\s]/g, '');
    if (texto !== textoLimpiado) {
        mostrarMensajeCaracterNoPermitido();
    }

    document.getElementById("texto").value = textoLimpiado;
}

function mostrarMensajeCaracterNoPermitido() {
    var advertencia = document.querySelector("#advertencia");
    advertencia.setAttribute('style','color: red;');
}

function encriptar(){
    estadosIniciales();
    mensaje = document.getElementById('texto').value;
    if(mensaje != ""){
        estadosConMensaje();
        mensaje.split("").forEach(letra => {
            if(letra === "e"){
                mensajeResultante += "enter";
            } else if (letra === "i"){
                mensajeResultante += "imes";
            } else if (letra === "a"){
                mensajeResultante += "ai";
            } else if (letra === "o"){
                mensajeResultante += "ober";
            } else if (letra === "u"){
                mensajeResultante += "ufat";
            } else{
                mensajeResultante += letra;
            };
            asignarTextoElemento("#resultado", mensajeResultante);
        });
    } else{
        estadosSinMensaje();
    };
};

function desencriptar(){
    estadosIniciales();
    mensaje = document.getElementById('texto').value;
    if(mensaje != ""){
        estadosConMensaje();
        mensajeResultante = remplazoEnTexto(mensaje, "enter", "e");
        mensajeResultante = remplazoEnTexto(mensajeResultante, "imes", "i");
        mensajeResultante = remplazoEnTexto(mensajeResultante, "ai", "a");
        mensajeResultante = remplazoEnTexto(mensajeResultante, "ober", "o");
        mensajeResultante = remplazoEnTexto(mensajeResultante, "ufat", "u");
        asignarTextoElemento("#resultado", mensajeResultante);
    } else{
        estadosSinMensaje();
    };
};

function remplazoEnTexto(mensaje, texto, remplazo){
    let regex = new RegExp(texto, "g");
    if(mensaje.includes(texto)){
        mensaje = mensaje.replace(regex, remplazo);
    }
    return mensaje;
};

function estadosConMensaje(){
    document.getElementById('sin').setAttribute('style','display: none;');
    document.getElementById('con').removeAttribute('style','display: none;');
};

function estadosSinMensaje(){
    document.getElementById('con').setAttribute('style','display: none;');
    document.getElementById('sin').removeAttribute('style','display: none;');
};

function estadosIniciales(){
    mensajeResultante = "";
    estadosSinMensaje();
};

function copiarTexto(){
    let texto = document.getElementById("resultado").textContent;
    navigator.clipboard.writeText(texto);
};

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
