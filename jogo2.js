// Configurações do jogo
var alturaJogo = 600;
var larguraJogo = 400;
var velocidadeFoguete = 5;
var velocidadeObstaculo = 2;
var obstaculos = [];

// Cria o elemento do foguete
var foguete = document.createElement('div');
foguete.style.width = '20px';
foguete.style.height = '40px';
foguete.style.background = 'red';
foguete.style.position = 'absolute';
foguete.style.bottom = '0px';
foguete.style.left = '50%';
document.body.appendChild(foguete);

// Função para mover o foguete
function moverFoguete(e) {
  var posicaoFoguete = foguete.offsetLeft;
  if (e.keyCode == 37) { // Esquerda
    if (posicaoFoguete > 0) {
      foguete.style.left = (posicaoFoguete - velocidadeFoguete) + 'px';
    }
  } else if (e.keyCode == 39) { // Direita
    if (posicaoFoguete < (larguraJogo - 20)) {
      foguete.style.left = (posicaoFoguete + velocidadeFoguete) + 'px';
    }
  }
}

// Adiciona o listener para o evento de pressionar tecla
window.addEventListener('keydown', moverFoguete);

// Função para criar um novo obstáculo
function criarObstaculo() {
  var obstaculo = document.createElement('div');
  obstaculo.style.width = '50px';
  obstaculo.style.height = '50px';
  obstaculo.style.background = 'blue';
  obstaculo.style.position = 'absolute';
  obstaculo.style.top = '0px';
  obstaculo.style.left = Math.random() * (larguraJogo - 50) + 'px';
  document.body.appendChild(obstaculo);
  obstaculos.push(obstaculo);
}

// Função para mover os obstáculos
function moverObstaculos() {
  for (var i = 0; i < obstaculos.length; i++) {
    var obstaculo = obstaculos[i];
    var posicaoObstaculo = obstaculo.offsetTop;
    if (posicaoObstaculo < alturaJogo) {
      obstaculo.style.top = (posicaoObstaculo + velocidadeObstaculo) + 'px';
    } else {
      obstaculo.parentNode.removeChild(obstaculo);
      obstaculos.splice(i, 1);
    }
  }
}

// Cria um novo obstáculo a cada 2 segundos
setInterval(criarObstaculo, 2000);

// Move os obstáculos a cada 20 milissegundos
setInterval(moverObstaculos, 20);
