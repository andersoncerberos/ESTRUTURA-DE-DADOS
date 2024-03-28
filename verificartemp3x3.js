
const matrix3x3 = [];

for(var i = 0; i < 3; i ++){// conta a primeira linha
    matrix3x3[i] = [] //inicializar array 
    for( var j = 0; j < 3; j++){//conta a segunda linha
        matrix3x3[i][j] = [];
        for(var z = 0; z < 3; z++){//conta a terceira linha
            matrix3x3[i][j][z] = i + j + z;
        }
    }
}
console.table(matrix3x3);