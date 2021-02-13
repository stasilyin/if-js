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

function isDate(date) {
  const reg = /((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-((0[13578])|(1[02]))-((0[1-9])|([12][0-9])|(3[01])))|((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-((0[469])|11)-((0[1-9])|([12][0-9])|(30)))|(((000[48])|([0-9]0-9)|([0-9][1-9][02468][048])|([1-9][0-9][02468][048]))-02-((0[1-9])|([12][0-9])))|((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-02-((0[1-9])|([1][0-9])|([2][0-8])))/;
  return reg.test(date);
}
function changeFormatDate(dateIn) {
  if (!(isDate(dateIn))) return 'Enter date in format yyyy-mm-dd';
  const dateOut = new Date(dateIn);
  return dateOut.getDate() + '.' + (dateOut.getMonth() + 1) + '.' + dateOut.getFullYear();
}
console.log(changeFormatDate('2020/11/21'));

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function searchData(searchText) {
  let searchResult = '';
  let count = 0;
  const text = new RegExp(`.*${searchText}+.*`, 'gim');
  for (let i = 0; i < data.length; i++) {
    const currentValue = data[i].country + data[i].city + data[i].hotel;
    if (!(currentValue.search(text))) {
      searchResult += `Country: ${data[i].country}
      City: ${data[i].city}
      Hotel: ${data[i].hotel}\n------------\n`;
      count++;
    }
  }
  searchResult += `Found ${count} values on request '${searchText}'`;
  return searchResult;
}
console.log(searchData(''));
