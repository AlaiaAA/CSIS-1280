
function addValue() {
    calculate(document.mycalculator.add.value);
}


function mulValue() {
    console.log(document.mycalculator.mul.value);
    calculate(document.mycalculator.mul.value);
}

function divValue() {
    calculate(document.mycalculator.div.value);
}

function calculate(sign) {
    // get the operands value
    const valueA = document.querySelector('#input_a').value;
    const valueB = document.querySelector('#input_b').value;

    if (!isNumeric(valueA) || !isNumeric(valueB)) {
        alert("Please enter valid numbers in operands.");
        return false;
    }
    // parse to integer. You can use: parseInt(input, 10);
    let parsedValueA;
    let parsedValueB;
    if (parseInt(valueA, 10) == parseFloat(valueA)) {
        parsedValueA = parseInt(valueA, 10);
    } else {
        parsedValueA = parseFloat(valueA);
    }
    if (parseInt(valueB, 10) == parseFloat(valueB)) {
        parsedValueB = parseInt(valueB, 10);
    } else {
        parsedValueB = parseFloat(valueB);
    }

    // perform operation
    let operationResult;
    switch (sign) {
        case '+':
            operationResult = parsedValueA + parsedValueB;
            break;
        case '×':
            operationResult = parsedValueA * parsedValueB;
            break;
        case ':':
            operationResult = parsedValueA / parsedValueB;
            break;
    }
    if (operationResult.length > 8 && (sign == '*' || sign == '/')) {
        operationResult = Math.round(operationResult * 100) / 100
    }
   
    // creating the text output
    const text = parsedValueA + ' ' + sign + ' ' + parsedValueB + ' = ' + operationResult;
    // (if you want to check) print out in console
    console.log(text);
    // change the text area

    document.mycalculator.output.value = text;

}

function isNumeric(s) {
    return !isNaN(parseFloat(s)) && isFinite(s);
}