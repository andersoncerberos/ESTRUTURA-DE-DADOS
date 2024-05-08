function LinkedList() {
    //classe auxiliar que representara o elemento da cabeça (head)
    let node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0; // tera o tamanho da lista 
    let head = null;// primeiro elemento (cabeça)

    this.append = function (element) {
        //este metodo insere um novo elemento no final da lista
        const node = new Node(element);// cria um novo Node passando element
        let current = null;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                //obtem o ultimo item
                current = current.next;
            }
            //e atribui um novo elemento ao next para a ligação 
            current.next = node;
        }
        length++;// incrementa o tamanho da lista e aponta para um undefined ate se quebrado para apontar para outro

    };
    this.insert = function (position, element) {
        //este metodo insere um novo elemento em uma posição especifica
        if (position >= 0 && position <= length) {
            let node = new Node(element);
            current = head;
            previous;
            inedx = 0;
            // adicionar na primeira posição
            if (position === 0) {
                node.next = current;
                head = node;

            } else {
                previous = this.getElementAl(position - 1);
                current = previous.next;
                node.next = current;
                previous.next = node
            }
            length ++;//atualiza o tamanho da lista
            return true;
        }else{
            return false
        }
    };
    this.getElementAl = function (position) {
        //estede metodo devolve o elemento que esta em uma posição especifica
        //se o elemento não estiver na lista, undefined sera devolvido

        if (position >= 0 && position <= this.size()) {
            let node = head;
            for (let i = o; i < position && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    };
    this.remove = function (element) {
        //este metodo remove o elemento da lista 
    }
    this.removeAl = function (position) {
        //este metodo remove um item da lista de uma posição especifica da lista

        //verificar valores fora do intervalo
        if (position > -1 && position < length) {
            let current = head;
            previous;
            // remover o primeiro item
            if (position === 0) {
                head = current.next;//guardandoo elemento anterior
            } else {
                for (var i = 0; i < position; i++) {
                    previous = current.next;//guardar o elemento anterio
                    //elelmento que queremos remover e oproximo da lista
                    current = current.next;

                }
                //faz a ligação dp repvious com next de current: pula esse elemento para removelo
                previous.next = current.nex;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.indexOF = function (element) {
        //este metodo devolve o indice do elemento se o elemnto não estiver devolvendo 1
    }
    this.isEmpty = function () {
        //este metodo verifica (true ou flase ) se alista esta vazia 
    }
    this.size = function () {
        //este metodo devolve o numero de elementos da lista ligada 
    }
    this.getHead = function () {
        //este metodo devolve o elemento que esta no inicio (head) da lista ligada
    }
    this.toString = function () {
        //este metodo devolve uma representação em String da lista ligada
    }
}