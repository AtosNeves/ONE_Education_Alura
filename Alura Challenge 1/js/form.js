



var botaoPegarPalavra = document.querySelector("#pegar-palavra");
botaoAdicionar.addEventListener("click",setInfo);

function setInfo(event) {
    event.preventDefault();
    var palavraForm = document.querySelector("#entrada");

    var palavra = palavraForm.textContent;

    console.log(palavra);
}




