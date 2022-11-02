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
let posicao = document.getElementById('11'); //primeira posicao


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
    //wordle.jogador = jogador.value; 
    //colocando o nome do jogador no html
    //nomeJogador.innerText = wordle.jogador; 
  
  });

//Controlando o jogo em 6 palpites



//transform: scale(1.1)
//transform: rotate(90deg)


//colocando event listener no botão adivinhar
const btnAdivinhar = document.querySelector('#adivinhar');
btnAdivinhar.onclick = () => {
    //se pressionar Advinhar
    if (wordle.letters.length === 5) {
        console.log("checar palavra");
        //chamar checar palavra
        
        //mudar a rodada
        wordle.rodadaAtual++;
        wordle.posicao = wordle.posicao + 10;
    }
}

const btnApagar = document.querySelector('#apagar');
btnApagar.onclick = () => {
    if ((wordle.letters.length <= 5) || (wordle.letters.length > 0)) {
        console.log("apagar a tecla");
    }
}



//colocando os event listeners no teclado 
const letras = document.querySelectorAll('.tecla');
letras.forEach( (letra) => {
    letra.onclick = () => {

        if (wordle.letters.length === 5) {
            return;
        }

        //se estiver entre a rodada 1 e 6:
        if (wordle.rodadaAtual <= wordle.rodadas) {
            console.log("rodada", wordle.rodadaAtual);
            console.log("posicao", wordle.palpites[wordle.rodadaAtual].length);
            console.log("palpite", wordle.palpites[wordle.rodadaAtual]);

            wordle.letters.push(letra.innerText);
            console.log(wordle.letters);

            //se não for a última letra
            //if (wordle.posicao)

            //se pressionar uma letra:

            //preencher o html
            posicao.innerText = letra.innerText;

            
            //obtendo a próxima posição
            posicao = document.getElementById(wordle.proximaPosicao(wordle.posicao));

        } else {
            //o jogo terminou
        }
        
        
        

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
