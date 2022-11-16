//ator
let yJogador = 367;
let xJogador = 100
let colisao = false;
let meusPontos = 0;

function desenhaJogador(){
  image(imagemJogador, xJogador, yJogador, 30, 30);
}

function movimentaJogador(){
  if(keyIsDown(87)){
    yJogador -= 3;
  }
  if(keyIsDown(83)){
    if (yJogador < 367){
      yJogador += 3;
    }
  }
}

function marcaEVoltaJogador(){
  if (yJogador < 10){
    yJogador = 367;
    pontoSom.play();
    meusPontos++;
  }
}

function colisaoJogador(){
  for (let i = 0; i < imagemCarros.length; i += 1){
     colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xJogador, yJogador, 15)
    if (colisao){
      yJogador = 367;
      bateSom.play();
    if (meusPontos > 0){
      meusPontos -= 1;
      }
    }
  }
}

function mostraPontos(){
  textSize(20);
  fill(color(255, 240, 0));
  text(meusPontos, 150, 25);
}
