//Arquivo de manipulação do DOM

//instanciar a minha classe
const wordle = new Wordle();

//capturar todos os itens necessários
const boasVindas = document.getElementById('boasvindas');
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
//secreta.innerText = "ALUDA";

//adicionar o event listener no btnStart
btnJogar.addEventListener("click", () => {
    //ocultando a tela de boasVindas
    boasVindas.classList.add("hidden");
    
    //mostrando o board e o teclado
    board.classList.remove("hidden");
    teclado.classList.remove("hidden");
  });


//transform: scale(1.1)
//transform: rotate(90deg)

//--------------------------------------------------
//apertou o botao ADIVINHAR --> colocando event listener no botão adivinhar
const btnAdivinhar = document.querySelector('#adivinhar');
btnAdivinhar.onclick = () => {
    
    //se pressionar Advinhar
    if (wordle.letters.length === 5) {

        let cor = "";
        let tile = "";
        let palavra = wordle.letters.join("");
        apertouAdivinhar = true;

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
                cor = wordle.checarPalpite(letra, indice);
                tile = document.getElementById(wordle.getPosicao(indice + 1));
                
                //mudar a cor do div dos palpites
                tile.classList.add(cor);

                //mudar a cor do teclado para letras ja digitadas


            });   

            //se ganhou
            if (palavra === wordle.palavraSecreta) {
                wordle.ganhou = true;
                divResultado.innerText = "Você ganhou!";
                divResultado.classList.remove("hidden");

                //mostrar botao para jogar de novo

                return;
            } 
            //se ainda não ganhou
            if (wordle.rodadaAtual < 60) {
                //limpar letters
                wordle.letters = [];
                //mudar rodada
                wordle.rodadaAtual += 10;
                apertouAdivinhar = false;
            }
            //se não tem mais rodadas disponíveis
            else {
                //
                divResultado.innerText = "Você perdeu!";
                divResultado.classList.remove("hidden");
                secreta.classList.remove("hidden");

                //mostrar botao para jogar de novo


            }
            
        }
    }
}

//--------------------------------------------------
//apertou o botao APAGAR
const btnApagar = document.querySelector('#apagar');
btnApagar.onclick = () => {

    console.log("letters", wordle.letters);

    if ((wordle.letters.length <= 5) && 
        (wordle.letters.length > 0) &&
        (!apertouAdivinhar)) {
            
        divResultado.innerText = "";
        divPosicao = document.getElementById(wordle.getPosicao(wordle.letters.length));

        //apagando a ultima letra
        wordle.letters.pop(); 

        //apagando a letra no html
        divPosicao.innerText = "";
    }
}



//colocando os event listeners no teclado 
const letras = document.querySelectorAll('.tecla');
letras.forEach( (letra) => {
    letra.onclick = () => {

        if (wordle.ganhou) return;

        if (wordle.letters.length === 5) {
            return;
        }

        //se estiver entre a rodada 1 e 6:
        if (wordle.rodadaAtual <= wordle.rodadas) {
            //console.log("rodada", wordle.rodadaAtual);

            //obtendo a próxima posição
            divPosicao = document.getElementById(wordle.getPosicao(wordle.letters.length) + 1);

            //adicionando letra no array 
            wordle.letters.push(letra.innerText);
            
            //preencher o html
            divPosicao.innerText = letra.innerText;


        }    


    }
});

const btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", () => {
    wordle.reset();
    //resetar o dom
    secreta.innerText = wordle.sortearPalavraSecreta();

})