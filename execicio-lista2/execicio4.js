//04. Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os índices onde
//esse número aparece no vetor, e não só apenas o primeiro e/ou último índice em que o
//número aparece (como nos métodos indexOf e lastIndexOf).

function encontrarIndices(vetor, numero) {
    let indices = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            indices.push(i);
        }
    }
    return indices;
}

// Exemplo de uso
let vetor = [1, 3, 5, 3, 7, 3, 9];
let numero = 3;
let indicesEncontrados = encontrarIndices(vetor, numero);
console.log("Índices onde o número aparece:", indicesEncontrados);