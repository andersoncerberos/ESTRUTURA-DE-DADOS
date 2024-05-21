// Definição do TAD Aluno
function Aluno(matricula, nome, nota, ativo) {
    this.matricula = matricula;
    this.nome = nome;
    this.nota = nota;
    this.ativo = ativo;
}

// Definição da lista duplamente encadeada
function DoublyLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };
    let length = 0;
    let head = null;
    let tail = null;

    // Método para adicionar aluno
    this.append = function (element) {
        const node = new Node(element);
        if (head === null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            node.prev = tail;
            tail = node;
        }
        length++;
    };

    // Método para remover aluno
    this.remove = function (matricula) {
        let current = head;
        while (current) {
            if (current.element.matricula === matricula) {
                if (current === head) {
                    head = current.next;
                    if (head) {
                        head.prev = null;
                    }
                } else if (current === tail) {
                    tail = current.prev;
                    tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                length--;
                return current.element;
            }
            current = current.next;
        }
        return null;
    };

    // Método para ordenar a lista por nota decrescente
    this.sortByNoteDescending = function () {
        let current = head;
        let swapped;
        do {
            swapped = false;
            while (current && current.next) {
                if (current.element.nota < current.next.element.nota) {
                    let temp = current.element;
                    current.element = current.next.element;
                    current.next.element = temp;
                    swapped = true;
                }
                current = current.next;
            }
            current = head;
        } while (swapped);
    };

    // Método para listar todos os alunos
    this.listAllStudents = function () {
        let current = head;
        let studentList = [];
        while (current) {
            studentList.push(current.element);
            current = current.next;
        }
        return studentList;
    };

    // Método para listar apenas os alunos com matrícula ativa
    this.listActiveStudents = function () {
        let current = head;
        let activeStudents = [];
        while (current) {
            if (current.element.ativo) {
                activeStudents.push(current.element);
            }
            current = current.next;
        }
        return activeStudents;
    };
}

// Exemplo de utilização:

// Criando a lista de alunos
let listaAlunos = new DoublyLinkedList();

// Adicionando alunos
listaAlunos.append(new Aluno(1, "João", 8.5, true));
listaAlunos.append(new Aluno(2, "Maria", 7.2, true));
listaAlunos.append(new Aluno(3, "Pedro", 6.8, false));
listaAlunos.append(new Aluno(4, "Ana", 9.0, true));
listaAlunos.append(new Aluno(5, "Lucas", 5.5, true));

// Ordenando por nota decrescente
listaAlunos.sortByNoteDescending();

// Listando todos os alunos
console.log("Lista de todos os alunos:");
console.log(listaAlunos.listAllStudents());

// Listando apenas os alunos com matrícula ativa
console.log("\nLista de alunos com matrícula ativa:");
console.log(listaAlunos.listActiveStudents());