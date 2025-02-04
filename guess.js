const number = Math.floor(Math.random() * (20 - 1) + 1);


let result = document.getElementById("result");  
let btn = document.getElementById("btn");
let restart = document.getElementById("restart");

let attempts = 3;

btn.addEventListener("click", function() {

    const guess = parseInt(document.getElementById("guess").value, 10);

    if (guess === number) {
        result.style.color = "green";
        result.textContent = "You guessed right!";
        restart.style.display = "block";
    } else if (guess < number) {
        result.textContent = "You guessed too low!";
        result.style.color = "orange";
        restart.style.display = "none";
        lives(); // Reduce a life
    } else if (guess > number) {
        result.textContent = "You guessed too high!";
        result.style.color = "orange";
        restart.style.display = "none";
        lives(); // Reduce a life
    } else if (isNaN(guess)) {
        result.textContent = "Please enter a valid number";
        result.style.color = "red";
    }
});

function lives() {
    const hearts = [ document.querySelector(".heart1"), document.querySelector(".heart2"), 
                     document.querySelector(".heart3")];

    // Reduce attempts and hide the corresponding heart
    if (attempts >= 0) {
        attempts--;
        hearts[attempts].style.display = "none";
        console.log(attempts)

    }

    // Check if no lives are left
    if (attempts === 0) {
        result.textContent = `Game Over! The number was ${number}`;
        result.style.color = "red";
        btn.disabled = true; // Disable submit button
        restart.style.display = "block"; // Show restart button
    }
};


console.log(number)

restart.addEventListener("click", function() {
    location.reload();
});


