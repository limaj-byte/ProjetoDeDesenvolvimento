const email = document.getElementById("email")
const senha = document.getElementById("senha")

function MudarPagina(){ 
    if(email==="teste@gmail" && senha==="1234"){
        window.location.href="homepage.html"
    }
    else{
        alert("Email ou senha Invalidos")
    }
}