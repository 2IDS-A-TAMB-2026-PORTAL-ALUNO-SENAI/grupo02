// Tamanho inicial da fonte
let tamanhoFonte = 16;

// Espera a página carregar completamente
document.addEventListener("DOMContentLoaded", function () {

    // Aumentar fonte
    document.getElementById("aumentar").addEventListener("click", function () {
        if (tamanhoFonte < 24) {
            tamanhoFonte += 2;
            document.body.style.fontSize = tamanhoFonte + "px";
        }
    });

    // Diminuir fonte
    document.getElementById("diminuir").addEventListener("click", function () {
        if (tamanhoFonte > 12) {
            tamanhoFonte -= 2;
            document.body.style.fontSize = tamanhoFonte + "px";
        }
    });

    // Alto contraste
    document.getElementById("contraste").addEventListener("click", function () {
        document.body.classList.toggle("alto-contraste");
        this.classList.toggle("ativo");

        if (document.body.classList.contains("alto-contraste")) {
            this.innerHTML = "🌙";
        } else {
            this.innerHTML = "☀️";
        }
    });

});