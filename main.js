let user = "John Doe";
console.log(user);

let student = "Stas Ilyin";
console.log(student);
//The student variable will be set to user
student = user;
console.log(user);

let test = 1;
test += 1;
//Concatenation
test += "1";
console.log(test);
--test;
//20
console.log(test);
// true
console.log(Boolean(test));

function multiplicationElem(arr) {
    let arrSum = 1;
    for (let i = 0; i<arr.length; i++) {
        arrSum *= arr[i];
      }
      return arrSum;
}

function fiveToTen(arr) {
  let finalArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] > 5 && arr[i] < 10) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}

function arrModTwo(arr) {
  let finalArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (!(arr[i] % 2)) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}

console.log("Product of array numbers: " + multiplicationElem([2, 3, 5, 8]));
console.log("The numbers in the array are greater than 5, but less than 10: " + fiveToTen([2, 5, 8, 15, 0, 6, 20, 3]));
console.log("Even numbers of the array: " + arrModTwo([2, 5, 8, 15, 0, 6, 20, 3]));