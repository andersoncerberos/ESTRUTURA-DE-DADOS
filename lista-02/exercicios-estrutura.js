//Exercício 1:
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let produtos = {};

rl.question("Digite o nome do produto 1: ", function(nome1) {
  produtos[nome1] = 0;

  rl.question("Digite o preço do produto 1: ", function(preco1) {
    produtos[nome1] = parseFloat(preco1);

    rl.question("Digite o nome do produto 2: ", function(nome2) {
      produtos[nome2] = 0;

      rl.question("Digite o preço do produto 2: ", function(preco2) {
        produtos[nome2] = parseFloat(preco2);

        rl.question("Digite o nome do produto 3: ", function(nome3) {
          produtos[nome3] = 0;

          rl.question("Digite o preço do produto 3: ", function(preco3) {
            produtos[nome3] = parseFloat(preco3);

            rl.question("Digite o nome do produto 4: ", function(nome4) {
              produtos[nome4] = 0;

              rl.question("Digite o preço do produto 4: ", function(preco4) {
                produtos[nome4] = parseFloat(preco4);

                rl.question("Digite o nome do produto 5: ", function(nome5) {
                  produtos[nome5] = 0;

                  rl.question("Digite o preço do produto 5: ", function(preco5) {
                    produtos[nome5] = parseFloat(preco5);

                    console.log("Produtos inseridos:");
                    console.log(produtos);
                    rl.close();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
//Exercício 2:
const readline = require('readline');

const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let notas = [];

function pedirNota(numeroNota) {
  r2.question(`Digite a nota ${numeroNota}: `, function(nota) {
    notas.push(parseFloat(nota));
    if (notas.length < 4) {
      pedirNota(notas.length + 1);
    } else {
      // Calcular média
      let soma = notas.reduce((a, b) => a + b, 0);
      let media = soma / notas.length;
      console.log("Notas inseridas:", notas);
      console.log("Média das notas:", media);
      r2.close();
    }
  });
}

pedirNota(1);
//Exercício 3:
const readline = require('readline');

const r3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let caixaMisteriosa = {};

function inserirCoisa(numero) {
  r3.question(`Digite a ${numero}ª coisa: `, function(coisa) {
    caixaMisteriosa[numero] = coisa;
    if (numero < 4) {
      inserirCoisa(numero + 1);
    } else {
      rl.question("Digite um número de 1 a 4: ", function(numeroInserido) {
        console.log(`Na posição ${numeroInserido} está: ${caixaMisteriosa[numeroInserido]}`);
        r3.close();
      });
    }
  });
}

inserirCoisa(1);
//Exercício 4:
const readline = require('readline');

const r4 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let funcionarios = [];

function pedirFuncionario(numeroFuncionario) {
  r4.question(`Digite o nome do funcionário ${numeroFuncionario}: `, function(nome) {
    funcionarios.push(nome);
    if (funcionarios.length < 3) {
      pedirFuncionario(funcionarios.length + 1);
    } else {
      console.log("Funcionários:");
      console.log(funcionarios);
      r4.question("Digite o nome do funcionário a ser demitido: ", function(nomeDemitir) {
        let indice = funcionarios.indexOf(nomeDemitir);
        if (indice !== -1) {
          funcionarios.splice(indice, 1);
        }
        console.log("Funcionários restantes:");
        console.log(funcionarios);
        r4.close();
      });
    }
  });
}

pedirFuncionario(1);




