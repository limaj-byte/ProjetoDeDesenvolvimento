async function carregarComponente(id, arquivo) {
    const elemento = document.getElementById(id);

    if (!elemento) {
        return;
    }

    try {
        const resposta = await fetch(arquivo);

        if (!resposta.ok) {
            throw new Error(`Não foi possível carregar ${arquivo}`);
        }

        elemento.innerHTML = await resposta.text();
    } catch (erro) {
        console.error(erro);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    carregarComponente("header", "/Components/header.html");
    carregarComponente("footer", "/Components/footer.html");
});