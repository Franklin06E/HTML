document.getElementById("meuBotao").addEventListener("click", function(){
    document.getElementById("mensagem").textContent = "Você clicou no botão!";
});

document.getElementById("meuBotao").addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue";
});
document.getElementById("meuBotao").addEventListener("mouseout", function(){
    this.style.backgroundColor = "initial";
});
