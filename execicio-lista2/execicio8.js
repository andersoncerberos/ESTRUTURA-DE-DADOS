//08. Faça uma função para converter um número decimal em hexadecimal.

function decimalParaHexadecimal(decimal) {
    // Usando o método toString com a base 16 para converter o número decimal em hexadecimal
    let hexadecimal = decimal.toString(16).toUpperCase();
    return hexadecimal;
}

// Exemplo de uso
let numeroDecimal = 255;
let numeroHexadecimal = decimalParaHexadecimal(numeroDecimal);
console.log("Número decimal", numeroDecimal, "em hexadecimal:", numeroHexadecimal);