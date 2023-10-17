// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  // 1A. sposób na stringa
  // number += ''
  // let output = ''
  // for (let n = number.length - 1; n >= 0; n--) {
  //   output += number[n] + ''
  // }
  // return Number(output)

  // 1B. oneliner
  // return Number(number.toString().split('').reverse().join(''))

  // 2. sposób na "mod 10"
  let output2 = number % 10
  while (number = parseInt(number / 10)) output2 = output2 * 10 + number % 10
  return output2
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  // 1A. forEach mod 2
  // let sum = 0
  // array.forEach(element => {
  //   if (element % 2 === 0) sum += element
  // });
  // return sum;

  // 1B. "for" loop mod 2
  let sum = 0
  for (let n = 0; n < array.length; n++) sum += array[n] % 2 ? 0 : array[n];
  return sum;
}

console.log("2.", addEven(tab));
