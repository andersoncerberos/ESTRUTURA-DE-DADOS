//Exercício 1:
// Pedindo para o usuário inserir o nome de 5 produtos e seus respectivos preços                                                                                      
let produtos = {};
for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do produto:");
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    produtos[nome] = preco;
}

// Mostrando os produtos na tela
console.log("Produtos:");
for (let produto in produtos) {
    console.log(`${produto}: R$ ${produtos[produto].toFixed(2)}`);
}

//Exercício 2:
// Pedindo para o usuário inserir quatro notas
let notas = [];
for (let i = 0; i < 4; i++) {
    let nota = parseFloat(prompt("Digite a nota:"));
    notas.push(nota);
}

// Calculando a média das notas
let soma = 0;
for (let nota of notas) {
    soma += nota;
}
let media = soma / notas.length;

// Mostrando as notas e a média na tela
console.log("Notas:");
console.log(notas);
console.log("Média:", media.toFixed(2));
//Exercício 3:

// Pedindo para o usuário inserir quatro coisas em uma "Caixa Misteriosa"
let caixaMisteriosa = {};
for (let i = 1; i <= 4; i++) {
    let coisa = prompt(`Digite a ${i}ª coisa:`);
    caixaMisteriosa[i] = coisa;
}

// Pedindo para o usuário inserir um número
let numero = parseInt(prompt("Digite um número de 1 a 4:"));

// Mostrando na tela o que foi inserido na posição do número
console.log(`O que está na posição ${numero}: ${caixaMisteriosa[numero]}`);

//Exercício 4:
// Pedindo para o usuário inserir o nome de três funcionários
let funcionarios = [];
for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite o nome do funcionário:");
    funcionarios.push(nome);
}

// Mostrando os funcionários na tela
console.log("Funcionários:");
console.log(funcionarios);

// Pedindo para o usuário demitir um funcionário
let demitir = prompt("Digite o nome do funcionário a ser demitido:");
let indice = funcionarios.indexOf(demitir);
if (indice !== -1) {
    funcionarios.splice(indice, 1);
}

// Mostrando os funcionários restantes na tela
console.log("Funcionários restantes:");
console.log(funcionarios);