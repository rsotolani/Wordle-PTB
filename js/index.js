//Arquivo de manipulação do DOM

//instanciar a minha classe
const wordle = new Wordle();

//capturar todos os itens necessários
const boasVindas = document.getElementById('boasvindas');
const jogador = document.getElementById('inputName');
const btnJogar = document.getElementById('btnJogar');
const board = document.getElementById('board');
const secreta = document.getElementById('boasvindas');
const palpites = document.getElementById('palpites');



  


//console.log(wordle);

//colocando event listener no botão jogar

//colocando os event listeners no teclado 
const letras = document.querySelectorAll('.tecla');
letras.forEach( (letra) => {
    letra.onclick = () => {
        console.log(letra.innerText);
        wordle.position();
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
