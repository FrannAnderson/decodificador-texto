var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("output");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/f/g, "uga");

    document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">' + resultCripto + '</textarea>' +
        '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace
        (/ufat/g, "u").replace(/uga/g, "f");

    document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + '</textarea>' +
        '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCopiar = document.getElementById("input-texto");

    textoCopiar.select();
    document.execCommand("copy");
    alert("O texto foi copiado para a área de transferência")
}