//Faça o mesmo do exercício anterior, mas com fatorial.
//Fatorial de 0: 0! = '
//Fatorial de 1: 1 x elemento0 = 1
//Fatorial de 2: 2 x elemento1 = 2
//Fatorial de 3: 3 x elemento2 = 3 x 2 = 6

// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
    if (numero === 0) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Solicitar um inteiro positivo ao usuário
let numero = parseInt(prompt("Digite um número inteiro positivo:"));

// Verificar se o número fornecido é válido
if (numero >= 0 && Number.isInteger(numero)) {
    // Gerar os fatoriais até o número fornecido
    let fatoriaisAteNumero = [];
    for (let i = 0; i <= numero; i++) {
        fatoriaisAteNumero.push(`${i}! = ${calcularFatorial(i)}`);
    }
    // Exibir o resultado usando o método join para separar os fatoriais por vírgula
    console.log("Fatoriais até " + numero + ":", fatoriaisAteNumero.join(', '));
} else {
    console.log("Número inválido. Por favor, digite um número inteiro positivo.");
}