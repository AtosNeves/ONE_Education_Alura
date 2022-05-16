

var botao = document.getElementsByClassName("botao-letra");

console.log(botao);

for (const b of botao) {
    b.addEventListener('click', function onClick() {
        b.classList.add("clicado","errado");
        b.classList.remove("botao-letra");
        console.log('b clicked');
        b.setAttribute("disabled","disabled");

        //document.getElementById("c").disabled = true;
    });
}
