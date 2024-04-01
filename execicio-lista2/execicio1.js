//01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não
//use o método sort.

function ordenarNumeros(array) {
    if (array[0] > array[1]) {
        // Troca os elementos de posição se estiverem fora de ordem
        let temp = array[0];
        array[0] = array[1];
        array[1] = temp;
    }
    return array;
}

// Exemplo de uso
let numeros = [5, 2];
let numerosOrdenados = ordenarNumeros(numeros);
console.log(numerosOrdenados); // Saída: [2, 5]