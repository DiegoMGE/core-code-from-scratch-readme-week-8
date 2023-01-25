# Diego Orellana - CoreCode Bootcamp 🚀
## Week 8
## Monday Challenges
- [Training JS #7: if..else and ternary operator!](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#training-js-7-ifelse-and-ternary-operator)
- [Training JS #8: Conditional statement--switch](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#training-js-8-conditional-statement--switch)
- [Basic calculator](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#basic-calculator)

## Tuesday Challenges
- [Even or odd]()
- [A wolf in sheep's clothing]()
- [Decode the morse code]()

## Wednesday Challenges

## Thursday Challenges

### Training JS #7: if..else and ternary operator!
```javascript
function saleHotdogs(n) {
  return n < 5 ? (n*100) : n >= 5 && n < 10 ? (n*95) : n >= 10 ? (n*90) : 0;
}
```

### Training JS #8: Conditional statement--switch
```javascript
function howManydays(month) {
  let days;

  switch (month) {
    case 2:
      days = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      days = 31
  }
    return days;
}
```

### Basic calculator
```javascript
function calculate(num1, operation, num2) {
  return (operation === '+') ? (num1 + num2)
    : (operation === '-') ? (num1 - num2)
    : (operation === '*') ? (num1 * num2)
    : (operation === '/' && num2 != 0) ? (num1 / num2)
    : null;
}
```

### Even or odd
```javascript
function evenOrOdd(number) {
    return (number % 2 === 0) ? 'Even' : 'Odd';
}
```

### A wolf in sheep's clothing
```javascript
function warnTheSheep(queue) {
    let aWolf = queue.indexOf('wolf');
    let sheepPosition = (queue.length - (aWolf + 1));

    if (aWolf == (queue.length - 1)) {
        return "Pls go away and stop eating my sheep"
    }
    return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`
}
```

### Decode the morse code
```javascript
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
```
