//Classe do jogo

class Wordle {

    constructor() {
        this.jogador = "";
        this.rodadas = 6;
        this.rodadaAtual = 1;
        this.palavraSecreta = "";
        this.palpites =[
            [1, "aaaaa"],
            [2, "bc"],
            [3, "def"],
            [4, "ghij"],
            [5, "klmno"],
            [6, ""]
        ]
        // this.palpites = {
        //     palpite1: [],
        //     palpite2: [],
        //     palpite3: [],
        //     palpite4: [],
        //     palpite5: [],
        //     palpite6: []
        // }
        this.ganhou = false;
    }

    //método para sortear a palavra secreta
    sortearPalavraSecreta() {
        return this.palavraSecreta = WORD[Math.floor(Math.random() * WORD.length)];
    }

    //método para indicar onde inserir a letra digitada
    addLetra(letra) {
       //console.log(this.palpites);
        for (let key of this.palpites) {
            //console.log(key, key[1].length);
            if (key[1].length < 5) {
                key[1] += letra;
                return true;
            } 
        }
        return false;
    }

    //método para renderizar o board
    renderPalpites() {

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

// if (typeof module !== 'undefined') {
//     module.exports = {
//         sortearPalavraSecreta,
//         renderPalpites,
//         checarTentativa,
//         apagarLetra
//     }
// }