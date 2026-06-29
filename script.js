let random_number = Math.floor(Math.random() *20) + 1;
let attempt = 0;
const maxAttempt =5;

const guessInput = document.getElementById("guess-value");
const guessBtn = document.getElementById("guess-btn");
const restartBtn = document.getElementById("restart-btn");
const attemptDisplay = document.getElementById('attempt-text');
const result = document.getElementById("result");

attemptDisplay.textContent = `${attempt}/${maxAttempt}`;
guessBtn.style.display = "none";
restartBtn.style.display = "block";


restartBtn.onclick = function(){
    target = Math.floor(Math.random() * 20) + 1;
    attempt = 0;
    attemptDisplay.textContent = `${attempt}/${maxAttempt}`;;
    result.textContent = "";
    guessInput.value = "";
    guessBtn.focus()
    restartBtn.style.display = "none";
    guessBtn.style.display = "block";
    console.log(target);
};

guessBtn.onclick = function(){
    let value = guessInput.value;

    if (value == ""){
        result.textContent = "Guess a Valid Number"
    }
    else {
        value = Number(value);
        if(value > 20 || value < 1){
            result.textContent = "Out of Range!! Guess between 1 to 20";
        }
        
        else if(value > target){
            result.textContent = value+" is too High!!! Guess Lower";
            attempt++;
            attemptDisplay.textContent = `${attempt}/${maxAttempt}`;
        }
        else if(value < target){
            result.textContent = value + " is too Low!!! Guess Higher";
            attempt++;
            attemptDisplay.textContent = `${attempt}/${maxAttempt}`;
        }
        else{
            attempt++;
            attemptDisplay.textContent = `${attempt}/${maxAttempt}`;
            result.textContent = "You Win!!! You guess it right!!";
            guessBtn.style.display = "none";
            guessBtn.focus()
            restartBtn.style.display = "block";
            guessInput.value = "";
            return;
        }
    } 
 
    if(attempt == maxAttempt){
        attemptDisplay.textContent = `${attempt}/${maxAttempt}`;
        result.textContent = "You LOSE";
        guessBtn.style.display = "none";
        restartBtn.style.display = "block";
 
    }
    guessInput.value = "";
    guessBtn.focus()
};