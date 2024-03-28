const zero = 0;

const arraypositivo = [ 1 , 2 ,3 ];
const arraynegativo = [ -3 , -2 , -1 ];

let numero = arraynegativo.concat(zero, arraypositivo);

console.log(numero.join('  ,  '));