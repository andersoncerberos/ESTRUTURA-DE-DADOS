class Set{
    constructor() {
        this.items = {}
    }

    add(element) {
        //adiciona uma novo elemento ao conjunto
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        } else {
            return false;
        }
    }
    delete(element) {
        //remove o element do conjunto
        if (this.has(element)) {
            this.items[element];
            return true;
        } else {
            return false;
        }

    }
    has(element) {
        //devolver true se element estive no conjunto e false caso contrario
        return element in this.items;// verifica se o elemento existe usando o in em javascript
    }
    clear(element) {
        //remove todos os elementos do conjunto
        this.items = {};
    }
    size(elemnet) {
        //devolver quantos elementos estao no conjunto
        return Object.keys(this.items).length
    }
    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }
    valuesLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                this.values.push(key);
            }
        }
        return this.values;
    }
    values(elemneti) {
        //devolver o array com todos os valores (elementos) qua estao no conjunto
        return Object.values(this.items);
    }
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach((values) => unionSet.add(values));
        otherSet.values().forEach((values) => unionSet.add(values));
        return unionSet;
    }
    otherunion(otherSet){
        const unionSet = new setA();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            
        }
    }
    intersection(otherSet) {
        const intersertionSet = new Set();
        const valoues = this.values();
        for (let i = 0; i < valoues.length; i++) {
            if (otherSet.has(valoues[i])) {
                intersertionSet.add(valoues[i]);
            }
        }
        return intersertionSet;
    }
    otherintersection(otherSet) {
        const intersertionSet = new Set();
        const values = this.values();
        const othervalues = otherSet.values();
        let biggerSet = values;
        let smallerSet = othervalues;
        if (othervalues.length - values.length > 0) {
            biggerSet = othervalues;
            smallerSet = values;
        }
        smallerSet.forEach(values => {
            if (biggerSet.includes(values)) {
                intersertionSet.add(values);
            }

        });
        return intersertionSet
    }
}

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
console.log(setA.values());

const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
console.log(setB.values());

const unionAB = setA.union(setB);
console.log(unionAB.values());

const otherunionAB = setA.otherunion(setB);
console.log(otherunionAB.values());

//const setA = new Set();
//setA.add(1);
//setA.add(2);
//setA.add(3);

//const setB = new Set();
//setA.add(2);
//setA.add(3);
//setA.add(4);
//const intersectionAB = setA.intersection(setB)
//console.log(intersectionAB.values())





//const set = new Set();
//set.add(1)
//console.log(set.values());// exibe [2]
//console.log(set.has(1));//exube true
//console.log(set.size());//exibe 1
//console.log(set.sizeLegacy());// exibe 1 tambem
//set.add(2);
//console.log(set);
//console.log(set.values());//exibe [2]
//console.log(set.has(1));//exibe true
//console.log(set.size());//exibe 2
//console.log(set.sizeLegacy());// exibe 2 tambem
//console.log(set.delete(1));
//console.log(set.values());//exibe [2]
//console.log(set.delete(2));
//console.log(set.values());// exibe[]











