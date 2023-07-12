const magicNumber = Math.floor(Math.random() * 100) + 1;
console.log(magicNumber);
var hint = alert(magicNumber);

function checkGuess() {
  const guessedNumber = parseInt(document.getElementById("guess").value);
  const resultElement = document.getElementById("result");

  if (guessedNumber < 1 || guessedNumber > 100) {
    alert("Please enter a number between 1 and 100."); 
  } else {
    const difference = Math.abs(guessedNumber - magicNumber);
    const percentage = Math.floor(((100 - difference) / 100) * 100);
    
    resultElement.textContent = `You are ${percentage}% close to the magic number.`;
  
    if(percentage == 100) {
      resultElement.textContent = "Congratulations";
    }
  }
}

document.getElementById("checkButton").addEventListener("click", checkGuess);
