function copiarUrl(){
    let url = document.getElementById("url").textContent;
    let button = document.getElementById("botonCopiar");

    navigator.clipboard.writeText(url);
    button.textContent = "copiado";
};