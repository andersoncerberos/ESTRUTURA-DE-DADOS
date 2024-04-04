class Deque {
    constructor() {
        this.count = 0;// controla o tamanho da fila
        this.lowestCount = 0;//para manter o controle do primeiro indice
        this.items = {};// armazena os elementos na fila

    }
    addfront(element) {
        //adiciona o elemnto na frente do deque
        if (this.isEmpty()) {
            this.addback(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount++;
            this.items[this.lowestCount] = element;
        } else {

            for (var i = this.count; i > 0; i--) {
                this, this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;

        }

    }
    addback(element) {
        //adiciona o elemento no fim do deque
        this.items[this.count] = element;
        this.count++;

    }
    removefront() {
        //remove o primeiro elemnto do deque
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;

    }
    removeback() {
        //remove o ultimo elemnto do deque
        if (this.isEmpty) {
            return undefined;
        }
        this.result = this.items[this.count];
        delete this.items[this.count];
        return this.result;

    }

    peekfront() {
        //devolve o primeiro elemento do deque 
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];

    }
    peekback() {
        //devolve o ultimo elemento do deque 
        return this.items[this.items.length - 1];

    }
    size() {
        //retorna o tamanho do deque  
        return this.count - this.lowestCount;

    }
    isEmpty() {
        //verifica se o deque esta vazio
        return this.size() === 0;
    }
    toString() {
        //apresenta o elemneto do deque
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i< this.count; i++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

const deque = new Deque();
console.log(deque.isEmpty());

deque.addback('joao');
deque.addback('pedro');
console.log(deque.toString());
deque.addback('camila');
console.log(deque.size());
console.log(deque.isEmpty());
deque.removefront();
console.log(deque.toString());
deque.removeback();
deque.addfront('joao');
console.log(deque.toString());