// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown Game Type: ${gameType}`);
        throw `Unknown Game Type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calcuatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calcuatedAnswer[0];
    if (isCorrect){
        alert("Hey! You got it right! :D");
    } else{
        alert(`Awwww... You answered ${userAnswer}. The correct answer was ${calcuatedAnswer[0]}`);
    }

    runGame(calcuatedAnswer[1]);
}

/**
 * Gets the operands (numbers) and the oeprator (plus, minus etc)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    
    // innerText returns the visible text contained in a node.
    // parseInt returns data as integer. JS returns all data from the DOM as a string.
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw(`Unimplemented operator ${operator}. Aborting!`);
    }
}

function incremementScore() {

}

function incremementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    // textContent returns all text contained in an element (including its child elements, like a span).
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}