document.addEventListener("DOMContentLoaded", function () {

    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // Máscara CPF
    if (cpf) {
        cpf.addEventListener("input", function () {
            let valor = cpf.value.replace(/\D/g, "");

            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            cpf.value = valor;
        });
    }

    // Máscara telefone
    if (telefone) {
        telefone.addEventListener("input", function () {
            let valor = telefone.value.replace(/\D/g, "");

            valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

            telefone.value = valor;
        });
    }

    // Máscara CEP
    if (cep) {
        cep.addEventListener("input", function () {
            let valor = cep.value.replace(/\D/g, "");

            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

            cep.value = valor;
        });
    }

    // Abre e fecha o menu no celular
    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }

});
