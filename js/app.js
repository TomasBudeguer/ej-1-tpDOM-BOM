function comenzarJuego() {
  let sectionJuego = document.querySelector("#sectionJuego");
  let formNuevo = document.createElement("form");
  formNuevo.className = "container d-flex my-3";
  let inputNuevo = document.createElement("input");
  inputNuevo.placeholder = "Escriba un numero del 1 al 10";
  inputNuevo.type = "text";
  inputNuevo.className = "form-control container my-2";
  inputNuevo.id = "buscador";
  inputNuevo.maxLength = 2;
  let botonSubmit = document.createElement("button");
  botonSubmit.innerHTML = "Enviar";
  botonSubmit.className = "btn btn-primary";
  botonSubmit.type = "button";
  botonSubmit.onclick = buscar;
  sectionJuego.appendChild(formNuevo);
  formNuevo.appendChild(inputNuevo);
  formNuevo.appendChild(botonSubmit);
}
let numerosX = []
function generarNumero() {
  let numeroRandom = Math.floor(Math.random() * 10) + 1;
  numerosX.push(numeroRandom)
  console.log(numeroRandom);
}
function buscar() {
  let buscador = document.querySelector("#buscador").value;
  if (buscador == numerosX[0]) {
    alert("Felicidades es el Numero!! (Recargar para jugar otra vez)");
  } else if (buscador > numerosX[0]) {
    alert(`${buscador} es mayor que el numero`);
  } else if (buscador < numerosX[0]) {
    alert(`${buscador} es menor que el numero`);
  }
}
