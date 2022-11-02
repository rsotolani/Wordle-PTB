//Classe do jogo

class Wordle {

    constructor() {
        this.jogador = "";
        this.rodadas = 6;
        this.rodadaAtual = 1;
        this.palavraSecreta = "";
        this.palpites = ["", "", "", "", "", ""];
        this.letters = [];
        // this.palpites =[
        //     [1, ""],
        //     [2, ""],
        //     [3, ""],
        //     [4, ""],
        //     [5, ""],
        //     [6, ""]
        // ]
        
        this.posicao = 11;
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

    proximaPosicao(atual) {
        console.log("atual",atual, typeof(atual));
        
        //se passou a ultima rodada
        //if (atual > 65) return -1;

        //ultima letra -> proxima rodada
        //if (atual % 5 === 0) return this.posicao = atual + 6;

        //mesma rodada -> proxima letra
        return this.posicao = atual + 1;
    }

    //método para renderizar o board
    renderPalpites() {

    }

    //método para checar a palavra-tentativa (botao enter)
    checarTentativa(palavraTentativa) {
        //se a letra não está inclusa -> cinza (usar includes)

        //para cada letra, iterando
        //se a letra esta inclusa na palavra E na posicao correta -> verde (ver o indexof())

        //se a letra esta incluida na palavra -> amarelo


        
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