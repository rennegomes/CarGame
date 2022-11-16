function setup() {
  createCanvas(600, 400);
  alert("Use a tecla W para mover para cima e S para mover para baixo!")
  trilhaSom.loop();
}

function draw() {
  background(imagemEstrada);
  desenhaJogador();
  desenhaCarros();
  movimentaCarro();
  voltaCarro();
  movimentaJogador();
  marcaEVoltaJogador();
  colisaoJogador();
  mostraPontos()
}

