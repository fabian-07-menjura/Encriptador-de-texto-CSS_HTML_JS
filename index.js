function botonEncriptar() {
  var encriptar = document.getElementById("entrada_texto").value;
  if (encriptar !== "") {
    console.log(encriptar);
    var encriptado = encriptar
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    document.getElementById("salida_texto").innerText = encriptado;
    document.getElementById("entrada_texto").value = " ";

    var titulo = document.getElementById("titulo");
    titulo.innerText = "Encriptado";
    titulo.style.color = "blue";
    document.getElementById("candadoCerrado").src =
      "imagenes/candadoCerrado.jpg";
  } else if (encriptar === "" || !encriptar) {
    var titulo = document.getElementById("titulo");
    titulo.innerText = "Por fravor dijita un texto";
    titulo.style.color = "red";
    document.getElementById("candadoCerrado").src = "imagenes/imgTriste.jpg";
  }
}

function botonDesencriptar() {
  var desencriptar = document.getElementById("entrada_texto").value;
  if (desencriptar === "") {
    var titulo = document.getElementById("titulo");
    titulo.innerText = "Por fravor dijita un texto";
    titulo.style.color = "red";
    document.getElementById("candadoCerrado").src = "imagenes/imgTriste.jpg";
  } else {
    var desencriptado = desencriptar
      .replace(/ai/gi, "a")
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    document.getElementById("salida_texto").innerText = desencriptado;
    document.getElementById("entrada_texto").value = " ";
    var titulo = document.getElementById("titulo");
    titulo.innerText = "Desencriptado";
    titulo.style.color = "green";
    document.getElementById("candadoCerrado").src =
      "imagenes/candadoAbierto.png";
  }
}

function botonCopiar() {
  const copyText = document.getElementById("salida_texto").textContent;
  if (copyText === "") {
    document.getElementById("entrada_texto").value = "";
  } else {
    document.getElementById("entrada_texto").value = copyText;
    document.getElementById("salida_texto").innerText = " ";
  }
}
