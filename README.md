# Diego Orellana - CoreCode Bootcamp 🚀
## Week 8
## Monday Challenges
- [Training JS #7: if..else and ternary operator!]()
- [Training JS #8: Conditional statement--switch]()
- [Basic calculator]()

## Tuesday Challenges
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
  return (operation === '+') ? (num1 + num2) : (operation === '-') ? (num1 - num2) : (operation === '*') ? (num1 * num2) : (operation === '/' && num2 != 0) ? (num1 / num2) : null;
}
```
