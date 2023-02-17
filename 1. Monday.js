/* ==========
* Exercise 1: Training JS #7: if..else and ternary operator!
========== */
function saleHotdogs(n) {
    return n < 5 ? (n*100) : n >= 5 && n < 10 ? (n*95) : n >= 10 ? (n*90) : 0;
  }

/* ==========
* Exercise 2: Training JS #8: Conditional statement--switch
========== */
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

/* ==========
* Exercise 3: Basic calculator
========== */
function calculate(num1, operation, num2) {
    return (operation === '+') ? (num1 + num2)
      : (operation === '-') ? (num1 - num2)
      : (operation === '*') ? (num1 * num2)
      : (operation === '/' && num2 != 0) ? (num1 / num2)
      : null;
  }