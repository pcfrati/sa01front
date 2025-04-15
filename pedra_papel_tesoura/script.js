
let scoreJogador = 0;
let scoreComputador = 0;

function jogar(escolhaJogador) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

  let resultado = '';

  if (escolhaJogador === escolhaComputador) {
    resultado = "Empate!";
  } else if (
    (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
  ) {
    resultado = "Você ganhou! ";
    scoreJogador++;
  } else {
    resultado = "Você perdeu! ";
    scoreComputador++;
  }

  document.getElementById("resultado").textContent = resultado;
  document.getElementById("escolhas").textContent =
    `Você escolheu ${escolhaJogador}, o computador escolheu ${escolhaComputador}.`;

  atualizarPlacar();
}

function atualizarPlacar() {
  document.getElementById("score-jogador").textContent = scoreJogador;
  document.getElementById("score-computador").textContent = scoreComputador;
}

function resetarPlacar() {
  scoreJogador = 0;
  scoreComputador = 0;
  atualizarPlacar();
  document.getElementById("resultado").textContent = "";
  document.getElementById("escolhas").textContent = "";
}