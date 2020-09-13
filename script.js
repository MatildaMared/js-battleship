let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let currentGuess;
let hits = 0;
let totalGuesses = 0;
let isSunk = false;

while (isSunk == false) {
    currentGuess = prompt("Ready, aim, fire! (enter a number 0-6");

    if (currentGuess < 0 || currentGuess > 6) {
        alert("Please enter a valid number!");
    } else {
        totalGuesses += 1;

        if (currentGuess == location1 || currentGuess == location2 || currentGuess == location3) {
            hits += 1;
            alert("Hit!");

            if (hits == 3) {
                isSunk = true;
                alert("You sank the battleship!");
            }
        } else {
            alert("Miss!");
        }
    }   
}

let stats = `You took ${totalGuesses} guesses to sink the battleship, which means your shooting accuracy was ${3 / totalGuesses}`;
alert(stats);