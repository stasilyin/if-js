const user = 'John Doe';
console.log(user);

let student = 'Stas Ilyin';
console.log(student);
//  The student variable will be set to user
student = user;
console.log(user);

let test = 1;
test += 1;
//  Concatenation
test += '1';
console.log(test);
--test;
//  20
console.log(test);
// true
console.log(Boolean(test));

function multiplicationElem(arr) {
  let arrSum = 1;
  for (let i = 0; i < arr.length; i++) {
    arrSum *= arr[i];
  }
  return arrSum;
}

function fiveToTen(arr) {
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5 && arr[i] < 10) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}

function arrModTwo(arr) {
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2)) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}

console.log('Product of array numbers: ' + multiplicationElem([2, 3, 5, 8]));
console.log('The numbers in the array are greater than 5, but less than 10:' + fiveToTen([2, 5, 8, 15, 0, 6, 20, 3]));
console.log('Even numbers of the array: ' + arrModTwo([2, 5, 8, 15, 0, 6, 20, 3]));
console.log('-------------------------------');

//  polindrom

const isPolindrome = (str) => {
  str.toLowerCase();
  return str === str.split('').reverse('').join('') ? 'Yes' : 'No';
};

function searchMinValue(...param) {
  let minValue = param[0];
  try {
    for (let i = 1; i < param.length; i++) {
      if (Number.isNaN(param[i])) throw new Error('Enter an array consisting of numbers');
      if (param[i] < minValue) {
        minValue = param[i];
      }
    }
    return minValue;
  } catch (e) {
    return e;
  }
}

function searchMaxValue(...param) {
  let maxValue = param[0];
  try {
    for (let i = 1; i < param.length; i++) {
      if (Number.isNaN(param[i])) throw new Error('Enter an array consisting of numbers');
      if (param[i] > maxValue) {
        maxValue = param[i];
      }
    }
    return maxValue;
  } catch (e) {
    return e;
  }
}

function replaceZero() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 100));
  }
  arr = arr.join().replace(/0/g, 'zero');
  console.log(arr.split(','));
}

console.log(isPolindrome('asddsa'));
replaceZero();
searchMaxValue(3, 2, '12a', 1, 4, 10);
searchMinValue(3, 2, '123', 124, 4, 10);
console.log('---------------------');
const pOne = document.getElementById('text1');
const pTwo = document.getElementById('text2');
const pThree = document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let currentColor;

function changeColor(e) {
  currentColor = e.target.style.color;
  if (currentColor === '' || colors.indexOf(currentColor) === colors.length - 1) {
    e.target.style.color = colors[0];
  } else {
    e.target.style.color = colors[colors.indexOf(currentColor) + 1];
  }
}

pOne.addEventListener('click', changeColor);
pTwo.addEventListener('click', changeColor);
pThree.addEventListener('click', changeColor);
