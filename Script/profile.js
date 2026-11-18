// Dados do perfil
const formDados = document.getElementById("formDados");

const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const nascimento = document.getElementById("nascimento");
const genero = document.getElementById("genero");

const nomePerfil = document.getElementById("nomePerfil");
const emailPerfil = document.getElementById("emailPerfil");

// Carrega os dados salvos
function carregarDados() {
    const dadosSalvos = localStorage.getItem("dadosPerfil");

    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);

        nome.value = dados.nome;
        cpf.value = dados.cpf;
        email.value = dados.email;
        telefone.value = dados.telefone;
        nascimento.value = dados.nascimento;
        genero.value = dados.genero;

        nomePerfil.textContent = dados.nome;
        emailPerfil.textContent = dados.email;
    }
}

// Salva os dados do formulário
formDados.addEventListener("submit", function(event) {
    event.preventDefault();

    const dados = {
        nome: nome.value,
        cpf: cpf.value,
        email: email.value,
        telefone: telefone.value,
        nascimento: nascimento.value,
        genero: genero.value
    };

    localStorage.setItem("dadosPerfil", JSON.stringify(dados));

    nomePerfil.textContent = dados.nome;
    emailPerfil.textContent = dados.email;

    alert("Dados atualizados com sucesso!");
});

// Carrega os dados quando a página abrir
carregarDados();