// Function to handle the guess button click event
let randomNumber = Math.floor( Math.random()* 10)
function checkGuess() {
    const playerName = document.getElementById('box-1').value;
    const guess = parseInt(document.getElementById('box-2').value);
    if (isNaN(guess) || guess < 1 || guess > 10) {
      document.getElementById('answer').textContent = 'Please enter a valid number between 1 and 10.';
      return;
    }

  
    if (guess === randomNumber) {
    
      document.getElementById('answer').textContent = `Congratulations! ${playerName} You guessed the number correctly `;
     
    } else if (guess < randomNumber) {
       
      document.getElementById('answer').textContent = `Try a higher number ${playerName}. `;
    } else {
       
      document.getElementById('answer').textContent = `Try a lower number ${playerName}.`
  }
}