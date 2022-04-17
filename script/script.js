function solution(operator) {

    var firstValue = parseFloat(document.forms["inputForm"]["firstValue"].value);

    var secondValue = parseFloat(document.forms["inputForm"]["secondValue"].value);

    var result;


    if (isNaN(firstValue) || isNaN(secondValue)) {

        alert('Please enter both operands');

        return;

    }


    switch (operator) {

        case 'add':

            result = eval(firstValue) + eval(secondValue);

            output = firstValue + " + " + secondValue + " = " + result;

            document.getElementById('result').value = output;

            console.log(output);

            break;

        case 'multiply':

            result = eval(firstValue) * eval(secondValue);

            output = firstValue + " x " + secondValue + " = " + result;

            document.getElementById('result').value = output;

            console.log(output);

            break;

        case 'divide':

            result = eval(firstValue) / eval(secondValue);

            output = firstValue + " / " + secondValue + " = " + result;

            document.getElementById('result').value = output;

            console.log(output);

            break;

        default:

            break;

    }

}


function clr() {

    document.getElementById("result").value = "";

    document.forms["inputForm"]["firstValue"].value = "";

    document.forms["inputForm"]["secondValue"].value = "";

}

