class Queue {
    constructor() {
        this.count = 0;// controla o tamanho da fila
        this.lowestCount = 0;//para manter o controle do primeiro indice
        this.items = {};// armazena os elementos na fila

    }
    enqueue(element) {
        //incluir um elemto na fila
        this.items[this.count] = element;
        this.count++;
    }
    size() {
        //retorma do tamanho da fila
        return this.count - this.lowestCount;
    }
    isEmpty() {
        //retorna TRUE se a fila estiver vazia
        return this.size() === 0;
    }
    dequeue() {
        //remova o elemento de frenta da fila
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount];//armazena o valor na frente da fila 
        delete this.items[this.lowestCount]//remove o elemento da fernte
        this.lowestCount++;// incrimetando lowesCount
        return result
    }

    peek() {
        //mostra o elemnto da frente da fila 
        //este metodo devolve o item que estar na frente da fila 
        //usando lowecount como chave para opter o valor do elemento 
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    clear() {
        //limap a fila 
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;

    }
    toString() {
        //imprimi a fila 
        //nessa classe stack começamos a iterar pelos valores dos itens 
        //como o primeiro indice da classe queueu pode nao ser zero
        //começamos a iterando a partir do indice lowestcount
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;

    }
}
const fila = new Queue();

console.log(fila.isEmpty());

fila.enqueue('jhon');
fila.enqueue('jack');
console.log('\na fila possui inicialmete as pessoas: ' + fila.isEmpty());

fila.enqueue('\ncamila');
console.log('\nagora a fila possui as pessoas: ' + fila.toString());
console.log('\no tamanho da fila e: ' + fila.size());
console.log('\nremovendo as pessoa de frente da fila: ' + fila.dequeue());
console.log('\nagora a fila possui os elementos: ' + fila.toString());
console.log('\na pessoa da frente da fila e: ' + fila.peek());
console.log('\nretirando o proximo da fila: ' + fila.dequeue());
console.log('\na fila possui agora a penas: ' + fila.toString());
console.log('\nas pessoa de fernte da fila e: ' + fila.peek());



