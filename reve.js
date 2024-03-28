let numero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numero.reverse();
console.log("meu array com revese " + numero.join(' , '));

numero.sort();
console.log("array com sort " + numero.join(' , '));

function compare(a,b){

    if(a < b){
        return -1;
    }
    if(a > b){
        return 1;
    }
    return 0;
}
numero.sort(compare)
console.log("array executamdo com a função compara " + numero.join(' , '));