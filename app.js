function encriptar() {
    let textoAEncriptar = document.getElementById('textoIngresado').value;
    let textoEncriptado = '';
    if (!esTextoValido(textoAEncriptar)) {
        return;
    }
    for (let i = 0; i < textoAEncriptar.length; i++) {
        switch (textoAEncriptar[i]) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += textoAEncriptar[i];
                break;
        }
    }
    document.getElementById('resultado').innerHTML = textoEncriptado;
    document.getElementById('resultContainer').classList.add('show');
    document.getElementById('noMessageContainer').style.display = 'none';
}

function desencriptar() {
    let textoADesencriptar = document.getElementById('textoIngresado').value;

    if (!esTextoValido(textoADesencriptar)) {
        return;
    }

    let textoDesencriptado = '';
    let temp = '';
    let llaves = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let letras = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < textoADesencriptar.length; i++) {
        temp += textoADesencriptar[i];
        for (let i = 0; i < llaves.length; i++) {
            if (temp.length >= llaves[i].length) {
                if (temp.includes(llaves[i])) {
                    textoDesencriptado += temp.replace(llaves[i], letras[i]);
                    temp = '';
                }
            }
        }
    }
    if (temp.length > 0) {
        textoDesencriptado += temp;
    }
    document.getElementById('resultado').innerHTML = textoDesencriptado;
    document.getElementById('resultContainer').classList.add('show');
    document.getElementById('noMessageContainer').style.display = 'none';
}

function esTextoValido(texto) {
    if (texto.length === 0) {
        mostrarMensajeError();
        return false;
    }
    if (!comprobarTexto(texto)) {
        alert("El texto ingresado no puede contener acentos ni mayúsculas");
        return false;
    }
    return true;
}

function comprobarTexto(texto) {
    // Comprobar si el texto ingresado contiene acentos
    if (texto.match(/[áéíóú]/)) {
        return false;
    }
    // Comprobar si el texto ingresado contiene mayusculas
    if (texto.match(/[A-Z]/)) {
        return false;
    }
    return true;
}

function mostrarMensajeError() {
    document.getElementById('resultContainer').classList.remove('show');
    document.getElementById('noMessageContainer').style.display = 'block';
}

function copiarAPortapapeles() {
    let texto = document.getElementById('resultado').innerHTML;
    navigator.clipboard.writeText(texto);
    let tooltip = document.getElementById("botonCopiarTooltip");
    tooltip.innerHTML = "Copiado!";
}

function outFunc() {
    var tooltip = document.getElementById("botonCopiarTooltip");
    tooltip.innerHTML = "Copiar al portapapeles";
}