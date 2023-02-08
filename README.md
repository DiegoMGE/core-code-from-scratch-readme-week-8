# Diego Orellana - CoreCode Bootcamp 🚀
## Week 8
## Monday Challenges
- [Training JS #7: if..else and ternary operator!](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#training-js-7-ifelse-and-ternary-operator)
- [Training JS #8: Conditional statement--switch](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#training-js-8-conditional-statement--switch)
- [Basic calculator](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#basic-calculator)

## Tuesday Challenges
- [Even or odd](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#even-or-odd)
- [A wolf in sheep's clothing](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#a-wolf-in-sheeps-clothing)
- [Decode the morse code](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#decode-the-morse-code)

## Wednesday Challenges
- [Who likes it?](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#who-likes-it)
- [Bit counting](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#bit-counting)
- [Your order, please](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-8/blob/main/README.md#your-order-please)

## Thursday Challenges
- [Counting duplicates]()
- [Encrypt this!]()
- [Valid parentheses]()
- [Convert string to camel case]()

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

### Who likes it?
```javascript
function likes(names) {
  return (names.length == 0) ? 'no one likes this'
    : (names.length == 1) ? `${names[0]} likes this`
    : (names.length == 2) ? `${names[0]} and ${names[1]} like this`
    : (names.length == 3) ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : (names.length >= 4) ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    : null;
}
```

### Bit counting
```javascript
let numStr = n.toString(2);
let bitsCount = 0;

  for(let i = 0; i < numStr.length; i++) {
      if (numStr[i] === '1') {
          bitsCount++;
      }
  }
  return bitsCount;
```

### Your order, please
```javascript
function order(words) {
    let split = words.split(' ');
    let sorted = [];
    
    for (let i = 0; i <= split.length; i++) {
        for (let j = 0; j < split.length; j++) {
            if (split[j].indexOf(i) >= 0) {
                sorted.push(split[j]);
            }
        }
    }
    return sorted.join(' ');
}
```

### Counting duplicates
```javascript
function duplicateCount(text) {
    let txt = text.toLowerCase().split('');

    return txt.filter((word, index, text) => {
        return ((text.indexOf(word) !== index) && (text.lastIndexOf(word) === index))
    }).length;
}
duplicateCount('indivisibilities');
```

### Encrypt this!
```javascript
function encrypt(word) {
  if (word.length === 1) return word.charCodeAt(0);
  const charBackup = word[1];
  word = word.replace(word[0], word.charCodeAt(0));
  word = word.replace(charBackup, word[word.length - 1]);
  word = word.replace(/\w$/, charBackup);
  return word;
}

var encryptThis = function (text) {
  const textArray = text.split(' ');
  let result = '';
  textArray.forEach((w) => {
    result = result + ' ' + encrypt(w);
  });
  return result.trim();
};
```

### Valid parentheses
```javascript
function validParentheses(parens) {
  return [...parens].reduce((a, c) => (a + c).replace('()', ''), '') === '';
}
```

### Convert string to camel case
```javascript
function toCamelCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if((str[i - 1] === '-' || str[i-1] === '_')) {
            result += str[i].toUpperCase();
        } else if (str[i] != '-' && str[i] != '_') {
            console.log(str[i]);
            result += str[i];
            console.log(result);
        }
    }
    return result;
}
```
