document.addEventListener("DOMContentLoaded", function () {
    const botaoEntrar = document.getElementById("entrar");
    if (botaoEntrar) {
        botaoEntrar.addEventListener("click", entrar);
    }
});
function entrar(){
    console.log("O arquivo enxoval.js foi carregado!")
    const usuario = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const usuariocadastrado = ["Garota" , "Garoto"] ;
    const senhacadastrada = "021224";
    if(usuariocadastrado.includes(usuario)&& senha === senhacadastrada){
        window.location.href = "produtos.html";
    } else{
        window.alert("Ainda não acertou, Garota");
        document.getElementById("nome").value = "";
        document.getElementById("senha").value = "";
    }
}