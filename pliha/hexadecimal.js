function decimalToBinary(decNumber){
    var restStack = new Stack(),rest, binaryString = '';

    while(decNumber > 0){
        rest = Math.floor(decNumber % 2);

        restStack.push(rest);

        decNumber = Math.floor(decNumber / 2);
    }
    while(restStack.isempty()){
        binaryString += restStack.pop().toString();
    }
    return binaryString;

    console.log(decimalToBinary(10));
    console.log(decimalToBinary(25));
    console.log(decimalToBinary(233));
    console.log(decimalToBinary(1000));


  }