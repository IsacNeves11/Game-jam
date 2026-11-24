let pontosJogador = 0;
let pontosComputador = 0;
let empates = 0;

function jogar(escolha) {
  let opcoes = ["pedra", "papel", "tesoura"];
  let computador = opcoes[Math.floor(Math.random() * 3)];
  let resultado = document.querySelector("#resultado");

  if (escolha === computador) {
    resultado.textContent = "Empate! O computador escolheu " + computador + ".";
    empates++;
  } else if (
    (escolha === "pedra" && computador === "tesoura") ||
    (escolha === "papel" && computador === "pedra") ||
    (escolha === "tesoura" && computador === "papel")
  ) {
    resultado.textContent = "Você ganhou! O computador escolheu " + computador + ".";
    pontosJogador++;
  } else {
    resultado.textContent = "Você perdeu! O computador escolheu " + computador + ".";
    pontosComputador++;
  }

  document.querySelector("#pontosJogador").textContent = pontosJogador;
  document.querySelector("#pontosComputador").textContent = pontosComputador;
  document.querySelector("#empates").textContent = empates;
}

document.querySelector("#pedra").addEventListener("click", function() {
  jogar("pedra");
});

document.querySelector("#papel").addEventListener("click", function() {
  jogar("papel");
});

document.querySelector("#tesoura").addEventListener("click", function() {
  jogar("tesoura");
});

document.querySelector("#zerar").addEventListener("click", function() {
  pontosJogador = 0;
  pontosComputador = 0;
  empates = 0;

  document.querySelector("#pontosJogador").textContent = 0;
  document.querySelector("#pontosComputador").textContent = 0;
  document.querySelector("#empates").textContent = 0;
  document.querySelector("#resultado").textContent = "Placar zerado!";
});
