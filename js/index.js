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
const divResultado = document.getElementById('resultado');

let divPosicao = document.getElementById('11'); //primeira posicao
let apertouAdivinhar = false;


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


//transform: scale(1.1)
//transform: rotate(90deg)


//colocando event listener no botão adivinhar
const btnAdivinhar = document.querySelector('#adivinhar');
btnAdivinhar.onclick = () => {
    
    //se pressionar Advinhar
    if (wordle.letters.length === 5) {

        let cor = "";
        let tile = "";
        let palavra = wordle.letters.join("");

        //se palavra nao existe no dicionario
        if (!wordle.palavraValida(palavra)){
            divResultado.innerText = "Esta palavra não existe!";
            divResultado.classList.remove("hidden");
            apertouAdivinhar = false;
            return;

        } 
        //se a palavra existe, checar as letras
        else {
            //chamar checar palavra
            wordle.letters.forEach((letra, indice) => {
                //console.log("dentro btnAdivinhar",letra, indice);
                cor = wordle.checarPalpite(letra, indice);
                tile = document.getElementById(wordle.getPosicao(indice + 1));
                
                //mudando a cor do div do dom
                tile.classList.add(cor);
            });   
            //se ganhou:
            if (wordle.letters === wordle.palavraSecreta) {
                divResultado.innerText = "Você ganhou!";
                divResultado.classList.remove("hidden");
            } 
            
        }
        
        
        //mudar a rodada
        //wordle.rodadaAtual++;
        //wordle.letters = [];
        apertouAdivinhar = true;
    }
}

const btnApagar = document.querySelector('#apagar');
btnApagar.onclick = () => {

    //console.log("letters.length", wordle.letters.length);
    //console.log(apertouAdivinhar);

    if ((wordle.letters.length <= 5) && 
        (wordle.letters.length > 0) &&
        (!apertouAdivinhar)) {
        //console.log("btnApagar rodada", wordle.rodadaAtual);
        //console.log("btnApagar letters.length", wordle.letters.length);

        divPosicao = document.getElementById(wordle.getPosicao(wordle.letters.length));
        //console.log("apagar posicao", divPosicao);

        //apagando a ultima letra
        wordle.letters.pop(); 
        //console.log("apagar letters.length", wordle.letters.length);

        //apagando a letra no html
        divPosicao.innerText = "";
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
            //console.log("rodada", wordle.rodadaAtual);

            //obtendo a próxima posição
            //console.log("add posicao antes", divPosicao);
            divPosicao = document.getElementById(wordle.getPosicao(wordle.letters.length) + 1);
            //console.log("add posicao depois", divPosicao);

            //adicionando letra no array 
            wordle.letters.push(letra.innerText);
            //console.log("add", wordle.letters);
            
            //console.log(divPosicao);
            //preencher o html
            divPosicao.innerText = letra.innerText;

            
            

        } else {
            //o jogo terminou
        }
        
        
        

    }
});

