function encriptar() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output-text").value = textoEncriptado;
    document.getElementById("output-message").style.display = "none";   // Ocultar los mensaje
    document.getElementById("output-hint").style.display = "none"; // Ocultar los mensaje
    document.querySelector(".output-container img").style.display = "none"; // Oculta la imagen
}

function desencriptar() {
    let texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = textoDesencriptado;
    document.getElementById("output-message").style.display = "none"; // Ocultar los mensaje
    document.getElementById("output-hint").style.display = "none"; // Ocultar los mensaje
    document.querySelector(".output-container img").style.display = "none"; // Oculta la imagen
}

function copiarTexto() {
    let texto = document.getElementById("output-text");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

document.getElementById("input-text").addEventListener("input", function() {
    let texto = this.value;

    // Reemplaza cualquier carácter que no sea una letra minúscula sin acento
    texto = texto.replace(/[^a-z\s]/g, "");

    // Actualiza el valor del textarea con el texto filtrado
    this.value = texto;
});
