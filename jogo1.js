// Jogo de Adivinhação de Números em JavaScript

// Gera um número aleatório entre 1 e 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Contador de tentativas
var tentativas = 0;

// Função para jogar o jogo
function jogar() {
  // Pergunta ao usuário para adivinhar o número
  var palpite = prompt("Adivinhe um número entre 1 e 100:");

  // Converte o palpite para um número
  palpite = Number(palpite);

  // Verifica se o palpite é correto
  if (palpite === numeroAleatorio) {
    alert("Parabéns! Você acertou! O número era " + numeroAleatorio + ". Você precisou de " + tentativas + " tentativas.");
  } else if (palpite < numeroAleatorio) {
    alert("Seu palpite é muito baixo!");
    tentativas++;
    jogar();
  } else if (palpite > numeroAleatorio) {
    alert("Seu palpite é muito alto!");
    tentativas++;
    jogar();
  } else {
    alert("Por favor, insira um número válido.");
    jogar();
  }
}

// Inicia o jogo
jogar();
