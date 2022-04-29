var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutri";

var paciente = document.querySelectorAll(".paciente");

for (let i = 0; i < paciente.length; i++) {
  var tdPeso = paciente[i].querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var altura = paciente[i].querySelector(".info-altura").textContent;

  var pesoValido = true;
  var alturaValida = true;
  if (peso < 0 || peso > 1000) {
    var tdImc = paciente[i].querySelector(".info-imc");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    paciente[i].classList.add("paciente-invalido");
  }
  if (altura < 0 || altura > 4) {
    var tdImc = paciente[i].querySelector(".info-imc");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
    paciente[i].classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    var imc = calculaImc(peso, altura);

    var tdImc = paciente[i].querySelector(".info-imc");
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  return (imc = (peso / (altura * altura)).toFixed(2));
}
