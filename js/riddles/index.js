// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  // uzupełnij tutaj
  let start1 = new Date();
  number += ''
  let output = ''
  for(let n = number.length-1;n>=0;n--){
    output += number[n]+''
  }
  number = Number(output)
  let end1 = new Date();
  let start2 = new Date();
  let output2 = 0
  while(number>0){
    output2 = output2*10 + number%10
    number/=10
  }
  let end2 =new Date();
  console.log(start1-end1)
  console.log(start2-end2)
  return 
}

console.log("1.", reverseNumber(12345234567898765432345678));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  let sum = 0
  array.forEach(element => {
    if(element%2===0) sum+=element
  });
  return sum;
  // uzupełnij tutaj
}

console.log("2.", addEven(tab));
