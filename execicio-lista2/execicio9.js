//09. Escreva um programa que leia 10 números. Para cada número lido, verifique e codifique de
//acordo com as regras a seguir:
//a. Se o número for par, empilhe na pilha;
//b. Se o número for ímpar, desempilhe um número da pilha. Caso a pilha esteja vazia,
//mostre uma mensagem;
//c. Se ao final do programa a pilha não estiver vazia, desempilhe todos os elementos,
//imprimindo-os na tela.

class Pilha {
    constructor() {
        this.items = [];
    }

    empilhar(elemento) {
        this.items.push(elemento);
    }

    desempilhar() {
        if (this.estaVazia()) {
            return "A pilha está vazia!";
        }
        return this.items.pop();
    }

    estaVazia() {
        return this.items.length === 0;
    }

    imprimirPilha() {
        return this.items.join(', ');
    }
}

// Função para verificar se um número é par
function ehPar(numero) {
    return numero % 2 === 0;
}

// Criação da pilha
let pilha = new Pilha();

// Leitura e processamento dos 10 números
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    if (ehPar(numero)) {
        pilha.empilhar(numero);
    } else {
        let desempilhado = pilha.desempilhar();
        if (desempilhado === "A pilha está vazia!") {
            console.log("A pilha está vazia! Não é possível desempilhar.");
        } else {
            console.log(`Número ímpar (${numero}) encontrado. Desempilhado: ${desempilhado}`);
        }
    }
}

// Verificação da pilha ao final do programa
if (!pilha.estaVazia()) {
    console.log("Desempilhando todos os elementos da pilha:", pilha.imprimirPilha());
}