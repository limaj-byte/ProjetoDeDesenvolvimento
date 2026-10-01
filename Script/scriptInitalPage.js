const email = document.getElementById("email");
const senha = document.getElementById("senha");
const realizarLogin = document.getElementById("realizarLog");

realizarLogin.addEventListener('click',function(event){
    event.preventDefault();
    if(email.value === "teste@gmail" && senha.value=="teste"){window.location.href = "/pages/homepage.html"}
    else(alert("Email ou senha Incorretos!"))
});
