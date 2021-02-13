/*
Input: get the values of the user's numbers operator and guess.
Computation: compute the numbers according to the operator using a switch statement.
compare the answer with their guess.
Output: if the guess is right return Correct! 🏆 otherwise return Incorrect 😢
*/
function simpleCalculator() {

    //input in these 4 lines
    const Number1 = parseInt(document.getElementById('firstNumber').value);//I am casting to an integer to avoid the float problem I mentioned in the forum.
    let operator = document.getElementById('operator').value;
    const Number2 = parseInt(document.getElementById('sencondNumber').value);
    const guess = parseFloat(document.getElementById('guess').value);
    //Computation check what the answer should be.
    let answer
    switch (operator) {
        case "+":
            answer = Number1 + Number2;
            break;
        case "-":
            answer = Number1 - Number2;
            break;
        case "*":
            answer = Number1 * Number2;
            break;
        case "/":
            answer = Number1 / Number2;
            let digits = 1;
            let multiplier = Math.pow(10, digits);
            answer = Math.round(answer * multiplier) / multiplier;
            break;
    }
    let output = ""    
    //Output
    if (answer == guess) {
        output = "Correct! 🏆";
    }else {
        output = "Incorrect 😢";
    }
    
    document.getElementById('output').innerHTML = output;  
}
