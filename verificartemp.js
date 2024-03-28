var verifatemp1 = [36.5,28,30,25,18,40]
var verifatemp2 = [19,22.5,29,31,23.5,32.5]

var verifatemp = [];

verifatemp[0] = verifatemp1;
verifatemp[1] = verifatemp2;

function primtmatrix(mymatrix){
    for( let i = 0 ; i < mymatrix.length; i++){
        for( let j = 0 ; j < mymatrix.length; j ++ ){
            console.log(mymatrix[i][j]);
        }
    }
}
//array bidimencional
console.table(verifatemp)