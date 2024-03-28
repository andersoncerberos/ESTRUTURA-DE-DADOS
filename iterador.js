let numero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 let iterador = numero[Symbol.iterator]();

 for(const n of iterador){
    console.log(n);
 }