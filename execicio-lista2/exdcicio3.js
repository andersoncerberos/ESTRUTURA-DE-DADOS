//03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal
//array. Modifique os elementos do array de modo a a sequência de números ficar do contrário.
//Ou seja, se digitou: 1,2,3
//Vai aparecer: 3,2,1

// Solicitar os números ao usuário e armazená-los em um array
let numeros = [];
for (let i = 0; i < 3; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
}

// Exibir o array original
console.log("Array original:", numeros);

// Modificar o array para a sequência contrária
let tamanho = numeros.length;
for (let i = 0; i < Math.floor(tamanho / 2); i++) {
    let temp = numeros[i];
    numeros[i] = numeros[tamanho - 1 - i];
    numeros[tamanho - 1 - i] = temp;
}

// Exibir o array modificado
console.log("Array com a sequência contrária:", numeros);