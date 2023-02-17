/* ==========
* Exercise 1: Who likes it?
========== */
function likes(names) {
    return (names.length == 0) ? 'no one likes this'
      : (names.length == 1) ? `${names[0]} likes this`
      : (names.length == 2) ? `${names[0]} and ${names[1]} like this`
      : (names.length == 3) ? `${names[0]}, ${names[1]} and ${names[2]} like this`
      : (names.length >= 4) ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      : null;
  }

/* ==========
* Exercise 2: Bit counting
========== */
let numStr = n.toString(2);
let bitsCount = 0;

  for(let i = 0; i < numStr.length; i++) {
      if (numStr[i] === '1') {
          bitsCount++;
      }
  }
return bitsCount;

/* ==========
* Exercise 3: Your order, please
========== */
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