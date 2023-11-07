/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}

const pessoa1 = criaPessoa('João', 'Neto', 25)
const pessoa2 = criaPessoa('Maria', 'Betania', 68)

console.log(pessoa1.nome, pessoa2.nome)*/

const pessoa1 = {
    nome: 'Joao',
    sobrenome: 'Neto',
    idade: 25,

    fala() {
        console.log(`A minha idade é ${this.idade}`)
    },

    incrementaIdade() {
        ++this.idade
    }
}
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
