//obtendo a lista de palavras
//import { WORD } from "./words.js";
const WORD = require('./words.js');

//console.log(WORD);

//Classe do jogo

class Wordle {

    constructor() {
        this.rodadas = 6;
        this.rodadaAtual = 1;
        this.palavraSecreta = "arted";
        this.palpites = {
            palpite1: ["dassl",],
            palpite2: [],
            palpite3: [],
            palpite4: [],
            palpite5: [],
            palpite6: []
        }
        this.ganhou = false;
    }

    //método para sortear a palavra secreta
    sortearPalavraSecreta() {
        return this.palavraSecreta = WORD[Math.floor(Math.random() * WORD.length)];
    }

    //método para renderizar o board
    renderTentativas() {

    }

    //método para checar a palavra-tentativa (botao enter)
    checarTentativa(palavraTentativa) {

    }

    //método para apagar letra
    apagarLetra() {

    }


}

class Teclado {

    constructor() {

    }
}