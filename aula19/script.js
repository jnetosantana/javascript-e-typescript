/*
    Primitivos (imutáves) - string, number, boolean, underfined, null (bigint, symbol) - Valor

    Referência (mutável) - array, object, function
    */
const a = {
    nome: 'João',
    sobrenome: 'Neto'
}
const b = {...a}

a.nome = 'Luiz'
console.log(a)
console.log(b)