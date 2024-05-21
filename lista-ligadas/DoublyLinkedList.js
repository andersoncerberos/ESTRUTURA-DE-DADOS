function DoublyLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null; // Nova referência para o nó anterior
    };
    let length = 0;
    let head = null;
    let tail = null; // Referência para o último nó

    this.append = function (element) {
        const node = new Node(element);
        if (head === null) {
            head = node;
            tail = node; // Se for o primeiro nó, também é a cauda
        } else {
            tail.next = node;
            node.prev = tail;
            tail = node;
        }
        length++;
    };

    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                if (!head) { // Se a lista estiver vazia
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node; // Atualiza a referência do nó atual para o novo nó
                node.prev = previous; // Atualiza a referência do novo nó para o nó anterior
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next;
                if (length === 1) { // Se houver apenas um nó na lista
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    // Outros métodos como getElementAt, indexOf, isEmpty, size, getHead, toString permanecem os mesmos
}