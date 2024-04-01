//10. Escreva um programa que leia 10 números. Para cada número lido, verifique e codifique de
//acordo com as regras a seguir:
//a. Se o número for par, empilhe na pilha chamada par;
//b. Se o número for ímpar, empilhe na pilha chamada impar;
//c. Se o número for zero (0), desempilhe um elemento de cada pilha. Caso alguma pilha
//esteja vazia, mostre uma mensagem de erro na tela.
//d. Ao final do programa desempilhe todos os elementos das duas pilhas, imprimindo-os na
//tela

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

// Criação das pilhas para números pares e ímpares
let pilhaPar = new Pilha();
let pilhaImpar = new Pilha();

// Leitura e processamento dos 10 números
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    if (numero % 2 === 0) { // número par
        pilhaPar.empilhar(numero);
    } else { // número ímpar
        pilhaImpar.empilhar(numero);
    }

    if (numero === 0) {
        let desempilhadoPar = pilhaPar.desempilhar();
        let desempilhadoImpar = pilhaImpar.desempilhar();

        if (desempilhadoPar === "A pilha está vazia!" || desempilhadoImpar === "A pilha está vazia!") {
            console.log("Erro: alguma pilha está vazia após desempilhar.");
        } else {
            console.log(`Número 0 encontrado. Desempilhado da pilha par: ${desempilhadoPar}, Desempilhado da pilha ímpar: ${desempilhadoImpar}`);
        }
    }
}

// Desempilhando todos os elementos das pilhas ao final do programa
console.log("Desempilhando todos os elementos da pilha par:", pilhaPar.imprimirPilha());
console.log("Desempilhando todos os elementos da pilha ímpar:", pilhaImpar.imprimirPilha());