let mensaje;
let mensajeResultante;

function encriptar(){
    estadosIniciales();
    mensaje = document.getElementById('texto').value;
   
    if(mensaje != ""){
         estadosConMensaje();
        mensaje.split("").forEach(letra => {
            //(letra === "e") ? mensajeResultante += "enter" : letra;
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
            console.log(typeof letra);
            asignarTextoElemento("#resultado", mensajeResultante);
        });        

    } else{
                estadosSinMensaje();
    }
    console.log(mensajeResultante);
};

function desencriptar(){
    estadosIniciales();
    mensaje = document.getElementById('texto').value;
    console.log(mensaje);

    if(mensaje != ""){
        estadosConMensaje();

        mensajeResultante = remplazoEnTexto(mensaje, "enter", "e");
        mensajeResultante = remplazoEnTexto(mensajeResultante, "imes", "i");
        mensajeResultante = remplazoEnTexto(mensajeResultante, "ai", "a");
        mensajeResultante = remplazoEnTexto(mensajeResultante, "ober", "o");
        mensajeResultante = remplazoEnTexto(mensajeResultante, "ufat", "u");
        //alert(mensajeResultante);
        asignarTextoElemento("#resultado", mensajeResultante);
    } else{
                estadosSinMensaje();
    }
    console.log(mensajeResultante);
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
