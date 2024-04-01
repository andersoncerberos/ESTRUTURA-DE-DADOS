//07. Peça ao usuário uma quantidade de linhas e outra de colunas, depois declare tal matriz,
//inicialize todos os elementos de 1 até 'linha x coluna'. Para preencher cada elemento use a
//soma dos seus índices.

function criarMatriz(linhas, colunas) {
    let matriz = [];
    let contador = 1;

    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            // Preenche cada elemento da matriz com a soma dos índices
            linha.push(i + j + contador);
        }
        contador += colunas; // Incrementa o contador pelo número de colunas para cada nova linha
        matriz.push(linha);
    }

    return matriz;
}

// Solicitar ao usuário o número de linhas e colunas
let numLinhas = parseInt(prompt("Digite o número de linhas:"));
let numColunas = parseInt(prompt("Digite o número de colunas:"));

// Verificar se os números fornecidos são válidos
if (numLinhas > 0 && numColunas > 0 && Number.isInteger(numLinhas) && Number.isInteger(numColunas)) {
    // Criar e preencher a matriz conforme as regras
    let matrizPreenchida = criarMatriz(numLinhas, numColunas);
    console.log("Matriz preenchida:", matrizPreenchida);
} else {
    console.log("Número de linhas e/ou colunas inválido(s). Por favor, digite números inteiros positivos.");
}