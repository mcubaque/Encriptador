const teaxtArea = document.querySelector('.text-area');
const mensaje = document.querySelector(`.mensaje`);

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncpriptado = encriptar(teaxtArea.value)
        mensaje.value = textoEncpriptado; 
        teaxtArea.value = "";
        mensaje.style.backgroundImage = "none";
}

function encriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    // Validar que solo se utilicen letras minúsculas
    if (!/^[a-z]+$/.test(stringDesencriptada)) {
        return "Solo se permiten letras minúsculas sin caracteres especiales.";
    }
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada;
}

function btnDesencriptar(){
    const textoEncpriptado = desencriptar(teaxtArea.value)
        mensaje.value = textoEncpriptado; 
        teaxtArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    // Validar que solo se utilicen letras minúsculas
    if (!/^[a-z]+$/.test(stringDesencriptada)) {
        return "Solo se permiten letras minúsculas sin caracteres especiales.";
    }
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

document.getElementById("btnCopiar").addEventListener("click", function() {
    var texto = document.querySelector(".mensaje");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});