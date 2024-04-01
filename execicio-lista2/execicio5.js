//05. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array
//com os números de Fibonacci. Exiba o resultado usando o método join.

// Função para gerar os números de Fibonacci até um determinado número
function fibonacciAteN(n) {
    let fibonacci = [0, 1]; // Inicializa a sequência de Fibonacci com os dois primeiros números
    while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= n) {
        // Adiciona o próximo número de Fibonacci à sequência até atingir ou ultrapassar n
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    return fibonacci;
}

// Solicitar um inteiro positivo ao usuário
let numero = parseInt(prompt("Digite um número inteiro positivo:"));

// Verificar se o número fornecido é válido
if (numero >= 0 && Number.isInteger(numero)) {
    // Gerar os números de Fibonacci até o número fornecido
    let fibonacciAteNumero = fibonacciAteN(numero);
    // Exibir o resultado usando o método join para separar os números por vírgula
    console.log("Sequência de Fibonacci até " + numero + ":", fibonacciAteNumero.join(', '));
} else {
    console.log("Número inválido. Por favor, digite um número inteiro positivo.");
}