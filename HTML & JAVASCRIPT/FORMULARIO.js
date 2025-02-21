document.getElementById("Formulario").addEventListener("submit", function(event){
    let email = document.getElementById("email").ariaValueMax;
    if (!email.includes("@")){
        alert("Por favor, insira um e-mail válido.");
        event.preventDefault();
    }
});