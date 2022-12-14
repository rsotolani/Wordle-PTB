//Classe do jogo

class Wordle {

    constructor() {
        this.jogador = "";
        this.rodadas = 60;
        this.rodadaAtual = 10;
        this.palavraSecreta = "";
        this.letters = [];     
        this.posicao = 10;
        this.ganhou = false;
    }

    reset() {
        this.rodadas = 60;
        this.rodadaAtual = 10;
        this.palavraSecreta = "";
        this.letters = [];     
        this.posicao = 10;
        this.ganhou = false;
    }

    //método para sortear a palavra secreta
    sortearPalavraSecreta() {
        return this.palavraSecreta = WORD[Math.floor(Math.random() * WORD.length)].toUpperCase();
    }

    
    getPosicao(lettersLength) {
        return wordle.rodadaAtual + lettersLength;
    }
    
    setPosicao(pos) {
        return wordle.posicao = pos;
    }

    palavraValida(palavra) {
        return WORD.includes(palavra);
    }

    //método para checar a palavra-tentativa (botao enter)
    checarPalpite(letra, indice) {
        //console.log("dentro de checarPalpite", letra, indice);
        //se a letra não está inclusa -> cinza (usar includes)
        if (!this.palavraSecreta.includes(letra)) {
            return "gray";
        }

        if (this.palavraSecreta.includes(letra)) {
            //se a letra está inclusa na palavra E na posicao correta
            if (this.palavraSecreta[indice] === letra) {
                return "green";
            } 
            //se a letra esta incluida na palavra -> amarelo
            else {
                return "yellow";
            }
        }
        
    }

    initBoard(palpites) {

        for (let i = 1; i <= 6; i++) {
            let row = document.createElement("div")
            row.className = "palpite";
            row.id = `p${i}`;
        
        for (let j = 1; j <= 5; j++) {
            let box = document.createElement("div")
            box.className = "letra";
            row.appendChild(box);
            box.id = `${i}${j}`;
        }
        palpites.appendChild(row)
        }
    }

}


//método para indicar onde inserir a letra digitada
// addLetra(letra) {
//     //console.log(this.palpites);

//      for (let key of this.palpites) {
//          //console.log(key, key[1].length);
//          if (key[1].length < 5) {
//              key[1] += letra;

//              return true;
//          } 
//      }
//      return false;
//  }


// if (typeof module !== 'undefined') {
//     module.exports = {
//         sortearPalavraSecreta,
//         renderPalpites,
//         checarTentativa,
//         apagarLetra
//     }
// }