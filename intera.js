function  isEven(x){
    // verifica de e verdadeiro ou falso
    console.log(x);
    return( x % 2 == 0 ) ? true : false;// uma forma pratica de for
}

let numero = [1,2,10,4,5,6,7,8,9,10,11,12,13,14,15];


const mymap = numero.map(isEven);
//numero.every(isEven)// para avarredura se for false
//numero.some(isEven)//para avarredura se for true
//numero.forEach(x => console.log(x % 2 === 0));// verifica o resultado de cada posição do array


console.log(mymap);// armazena os dado de um arrya