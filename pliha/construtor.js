class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        //adiciona um novo intema pilha
        this.items.push(element);
    }
    pop() {
        //remove o iten do topo da pilha
        return this.items.pop();
    }
    peek() {
        //devolve o elemento que esta no topo da pilha
        return this.items[this.items.length - 1];
    }
    isempty() {
        // informa se a pilha esta vazia ou nao  
        return this.items.length === 0;
    }
    clear() {
        //limpa a pilha
        this.items = [];
    }
    size() {
        //informa o tamanho da pilha 
        return this.items.length;
    }
    print() {
        //imprime a pilha no console
        console.log(this.items.toString());
    }


}

let stack = new Stack();

console.log(stack.isempty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);

console.log(stack.size());
console.log(stack.isempty());
stack.push(15);
stack.print();

stack.print();
stack.pop();
stack.pop();
stack.print();

var pilha = new Stack();
console.log(pilha.isempty());
 pilha.push(5);
 pilha.print();
 pilha.push(8);
 pilha.print();
 pilha.push(11);
 pilha.print();
 pilha.push(15);
 pilha.print();
 pilha.push();
 pilha.pop();
 pilha.print();
 pilha.pop();
 pilha.print();
 pilha.pop();
 pilha.print();
 pilha.pop();
  console.log(pilha.isempty());


  function decimalToBinary(decNumber){
    var restStack = new Stack(),rest, binaryString = '';

    while(decNumber > 0){
        rest = Math.floor(decNumber % 2);

        restStack.push(rest);

        decNumber = Math.floor(decNumber / 2);
    }
    while(restStack.isempty()){
        binaryString += restStack.pop().toString();
    }
    return binaryString;

    console.log(decimalToBinary(10));
    console.log(decimalToBinary(25));
    console.log(decimalToBinary(233));
    console.log(decimalToBinary(1000));


  }
