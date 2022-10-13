"What is 1 plus 2 minus 2 multiplied by 4"

let numberExpected = true;
let word;
let operation;
let firstOperand;
for(let i = 2; i < words.length; i++){
    word = words[i];

    if (word is a number){
        if (!numberExpected){
            throw new Error();
        }
        if(firstOperand is undefined){
            firstOperand = word;
        }
        else {
            firstOperand.operation(word);
        }
        numberExpected = false; 
    }
    else if (word is operation){
        if (numberExpected){
            throw new Error;
        }
        if (operation is divided || multiplied){
           if(words[i+1] === by){
            i++;
           }
           else {
            throw new Error();
           }     
        }
        operation = word;
        numberExpected = true;
    }
    else  {
        throw new Error()
    }
    return firstOperand;
}