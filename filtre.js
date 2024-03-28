let numero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function isEven(x){

    return ( x % 2 === 0) ? true : false;
}

const evennumero = numero.filter(isEven);

console.log(evennumero);