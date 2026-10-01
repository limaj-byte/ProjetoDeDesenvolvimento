async function carregarComponente(id, arquivo) {
    const elemento = document.getElementById(id);

    if (elemento) {
        const resposta = await fetch(arquivo);
        const conteudo = await resposta.text();

        elemento.innerHTML = conteudo;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    carregarComponente("header", "../Components/header.html");
    carregarComponente("footer", "../Components/footer.html");
});