/* ==========
* Exercise 1: Even or odd
========== */
function evenOrOdd(number) {
    return (number % 2 === 0) ? 'Even' : 'Odd';
}

/* ==========
* Exercise 2: A wolf in sheep's clothing
========== */
function warnTheSheep(queue) {
    let aWolf = queue.indexOf('wolf');
    let sheepPosition = (queue.length - (aWolf + 1));

    if (aWolf == (queue.length - 1)) {
        return "Pls go away and stop eating my sheep"
    }
    return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`
}

/* ==========
* Exercise 3: Decode the morse code
========== */
decodeMorse = function(morseCode){
    let newString = [];
    let string = morseCode.trim().split('  ');
    let wordFound = [];

    for (let i = 0; i < string.length; i++) {
        wordFound = string[i].split(' ');
        for (let j = 0; j < wordFound.length; j++) {
            wordFound[j] = MORSE_CODE[wordFound[j]];
        }
        newString.push(wordFound.join(''));
    }
    return newString.join(' ').trim();
};