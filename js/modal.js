//Seleciona o modal
const modal = document.getElementById("modalReserva");

//Seleciona todos os botões (Fotos + Reserva)
const botoes = document.querySelectorAll(".pac-reserva, .pac-fotos");

//Seleciona o botão de fechar
const fechar = document.querySelector(".fechar");


//Abrir modal
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        modal.style.display = "flex"; // ✅ corrigido
    });
});


//Fechar no X
fechar.addEventListener("click", () => {
    modal.style.display = "none";
});


//Fechar clicando fora
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});