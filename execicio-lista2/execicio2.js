//02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie
//sua própria função para isso.
function ordenarTresNumeros(array) {
    // Verifica se o primeiro número é maior que o segundo, se sim, troca-os
    if (array[0] > array[1]) {
        let temp = array[0];
        array[0] = array[1];
        array[1] = temp;
    }

    // Agora, o primeiro e o segundo número estão em ordem crescente
    // Vamos verificar se o terceiro número precisa ser trocado
    if (array[1] > array[2]) {
        let temp = array[1];
        array[1] = array[2];
        array[2] = temp;

        // Se o terceiro número foi trocado, precisamos verificar novamente se o primeiro número precisa ser trocado com o segundo
        if (array[0] > array[1]) {
            let temp = array[0];
            array[0] = array[1];
            array[1] = temp;
        }
    }

    return array;
}

// Exemplo de uso
let numeros = [5, 2, 7];
let numerosOrdenados = ordenarTresNumeros(numeros);
console.log(numerosOrdenados); // Saída: [2, 5, 7]