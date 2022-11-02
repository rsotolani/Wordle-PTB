//Arquivo de manipulação do DOM

//instanciar a minha classe
const wordle = new Wordle();

//capturar todos os itens necessários
const boasVindas = document.getElementById('boasvindas');
const jogador = document.getElementById('inputName');
const btnJogar = document.getElementById('btnJogar');
const board = document.getElementById('board');
const secreta = document.getElementById('secreta');
const palpites = document.getElementById('palpites');
const nomeJogador = document.getElementById('nome-jogador');


//sorteando a palavra secreta
secreta.innerText = wordle.sortearPalavraSecreta();

//adicionar o event listener no btnStart
btnJogar.addEventListener("click", () => {
    //ocultando a tela de boasVindas
    boasVindas.classList.add("hidden");
    
    //mostrando o board e o teclado
    board.classList.remove("hidden");
    teclado.classList.remove("hidden");
  
    //colocando o nome do jogador na classe wordle
    wordle.jogador = jogador.value; 
    //colocando o nome do jogador no html
    nomeJogador.innerText = wordle.jogador; 
  
  });

//Controlando o jogo em 6 palpites





//colocando event listener no botão jogar

//colocando os event listeners no teclado 
const letras = document.querySelectorAll('.tecla');
letras.forEach( (letra) => {
    letra.onclick = () => {
        //console.log(letra.innerText);
        console.log(wordle.addLetra(letra.innerText));
    }
});

console.log(letras);

//capturar todos os itens necessários

//capturando todos os elementos de html
// const startScreen = document.getElementById("startScreen");
// const inputName = document.getElementById("inputName");
// const gameScreen = document.getElementById("gameScreen");
// const gameScore = document.getElementById("gameScore");
// const playerName = document.getElementById("name");
// const points = document.getElementById("points");
// const board = document.getElementById("board");
// const btnStart = document.getElementById("btnStart");
