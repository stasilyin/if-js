let user = "John Doe";
console.log(user);

let student = "Stas Ilyin";
console.log(student);
//Переменная student примит значение user
student = user;
console.log(user);

let test = 1;
test += 1;
//Конкатенация
test += "1";
console.log(test);
--test;
//20
console.log(test);
// true
console.log(Boolean(test));

function calculate(arr) {
  return arr.reduce((accumulate, elem) => (accumulate *= elem));
}

function fiveToTen(arr) {
  let finalArr = [];
  for (let value of arr) {
    if (value > 5 && value < 10) {
      finalArr.push(value);
    }
  }
  return finalArr;
}

function arrModTwo(arr) {
  let finalArr = [];
  for (let value of arr) {
    if (!(value % 2)) {
      finalArr.push(value);
    }
  }
  return finalArr;
}
console.log("Произведение чисел массива: " + calculate([2, 3, 5, 8]));
console.log(
  "Произведение чисел массива: " + fiveToTen([2, 5, 8, 15, 0, 6, 20, 3])
);
console.log("Четные числа массива: " + arrModTwo([2, 5, 8, 15, 0, 6, 20, 3]));
