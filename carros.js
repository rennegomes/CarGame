//carro verde, preto, amarelo

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [35, 92, 145, 205, 257, 310];
let velocidades = [3, 7, 5, 4, 3, 5];
let larguraCarro = 60;
let alturaCarro = 40;

function desenhaCarros(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    xCarros[i] -= velocidades[i];
  }
}

function voltaCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    if(xCarros[i] < -60){
      xCarros[i] = 610;
    }
  }
}