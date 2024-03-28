let numero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


let aentries =numero.entries();
console.log(aentries.next().valor);

for(const n of aentries){
    console.log(n);
}