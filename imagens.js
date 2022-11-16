let imagemEstrada;
let imagemJogador;
let imagemCarroVerde;
let imagemCarroPreto;
let imagemCarroAmarelo;

let pontoSom;
let bateSom;
let trilhaSom;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemJogador = loadImage("imagens/ator-1.png");
  imagemCarroVerde = loadImage("imagens/carro-1.png");
  imagemCarroPreto = loadImage("imagens/carro-2.png");
  imagemCarroAmarelo = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo, imagemCarroPreto, imagemCarroAmarelo, imagemCarroVerde];
  
  trilhaSom = loadSound("sons/trilha.mp3");
  pontoSom = loadSound("sons/pontos.wav");
  bateSom = loadSound("sons/colidiu.mp3");
}

