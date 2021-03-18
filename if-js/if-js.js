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

replaceZero();
searchMaxValue(3, 2, '12a', 1, 4, 10);
searchMinValue(3, 2, '123', 124, 4, 10);
console.log('---------------------');
// old variant
/* const pOne = document.getElementById('text1');
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
pThree.addEventListener('click', changeColor); */
// homework lesson-5
function isDate(date) {
  const reg = /((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-((0[13578])|(1[02]))-((0[1-9])|([12][0-9])|(3[01])))|((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-((0[469])|11)-((0[1-9])|([12][0-9])|(30)))|(((000[48])|([0-9]0-9)|([0-9][1-9][02468][048])|([1-9][0-9][02468][048]))-02-((0[1-9])|([12][0-9])))|((([0-9][0-9][0-9][1-9])|([1-9][0-9][0-9][0-9])|([0-9][1-9][0-9][0-9])|([0-9][0-9][1-9][0-9]))-02-((0[1-9])|([1][0-9])|([2][0-8])))/;
  return reg.test(date);
}
function changeFormatDate(dateIn) {
  if (!(isDate(dateIn))) return 'Enter date in format yyyy-mm-dd';
  return dateIn.split('-').reverse().join('.');
}
console.log(changeFormatDate('2020-11-21'));

// homework lesson-6

// Task 5
console.log('**********lesson - 6 [Task 5]************');

const isPolindrome = (str) => {
  str.toLowerCase();
  return str === str.split('').reverse('').join('') ? 'Yes' : 'No';
};
console.log('This line is polyindrome? ' + isPolindrome('шалаш'));

console.log('**********lesson - 6 [Task 6]************');

const hotelData = [
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
  const text = new RegExp(`.*${searchText}+.*`, 'gim');
  const result = [];
  hotelData.forEach((currentValue) => {
    const tempValue = currentValue.country + currentValue.city + currentValue.hotel;
    if (!(tempValue.search(text))) {
      result.push(currentValue);
    }
  });
  return result;
}
console.log(searchData('Hostel'));

console.log('**********lesson - 6 [Task 7]************');
const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

function countryOfCity() {
  return hotels.reduce((result, currentValue) => {
    const tempValue = currentValue.country;
    const arr = [];
    if (!(result[tempValue])) {
      arr.push(currentValue.city);
      result[tempValue] = arr;
    } else if (!(result[tempValue].includes(currentValue.city))) {
      result[tempValue].push(currentValue.city);
    }
    return result;
  }, {});
}
console.log(countryOfCity());
console.log('**********lesson - 7 [Task 6]************');
function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek, checkInOut) {
  try {
    const { checkInDay, checkOutDay } = checkInOut;
    if (dayOfWeek > daysInWeek) throw new Error('День начала недели больше количества дней в неделе');
    const result = [];
    let countDays = 1;
    for (let i = 0; i < Math.ceil(daysInMonth / daysInWeek); i++) {
      result[i] = [];
    }
    if (dayOfWeek !== 1) {
      countDays = daysInMonth - (dayOfWeek - 2);
    }
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < daysInWeek; j++) {
        if (countDays > daysInMonth) {
          countDays = 1;
        }
        const day = { dayOfMonth: countDays, notCurrentMonth: false, selectedDay: false };
        result[i].push(day);
        if (result[0][j].dayOfMonth > 7) {
          result[0][j].notCurrentMonth = true;
        }
        if (result[i][j].dayOfMonth >= checkInDay && result[i][j].dayOfMonth
          <= checkOutDay && result[i][j].notCurrentMonth === false) {
          result[i][j].selectedDay = true;
        }
        ++countDays;
      }
    }
    const isLastDayLastWeek = () => {
      for (let i = result.length - 1; i < result.length; i++) {
        for (let j = 0; j < daysInWeek; j++) {
          if (result[i][j].dayOfMonth === daysInMonth) {
            return true;
          }
        }
      }
      return false;
    };
    if (!isLastDayLastWeek()) {
      result.push([]);
      for (let i = result.length - 1; i < result.length; i++) {
        countDays = result[result.length - 2][daysInWeek - 1].dayOfMonth + 1;
        for (let j = 0; j < daysInWeek; j++) {
          if (countDays > daysInMonth) {
            countDays = 1;
          }
          const day = { dayOfMonth: countDays, notCurrentMonth: false, selectedDay: false };
          result[i].push(day);
          countDays++;
        }
      }
    }
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < daysInWeek; j++) {
        if (result[result.length - 1][j].dayOfMonth >= 1
            && result[result.length - 1][j].dayOfMonth <= 7) {
          result[result.length - 1][j].notCurrentMonth = true;
        }
        if (result[i][j].dayOfMonth >= checkInDay
            && result[i][j].dayOfMonth <= checkOutDay
            && result[i][j].notCurrentMonth === false) result[i][j].selectedDay = true;
        if (new Date().getDate() === result[i][j].dayOfMonth
            && result[i][j].notCurrentMonth === false) {
          result[i][j].currentDay = true;
        } else {
          result[i][j].currentDay = false;
        }
      }
    }
    return result;
  } catch (e) {
    return e;
  }
}
console.log(getCalendarMonth(31, 7, 1, { checkInDay: 20, checkOutDay: 24 }));
console.log('**********lesson - 7 [Deep Equel]************');
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (objectOne, objectTwo) => {
  const isParametrsObject = typeof objectOne !== 'object' || typeof objectTwo !== 'object';
  const isParametrsUndefined = objectOne === undefined || objectTwo === undefined;
  const isParametrsNull = objectOne === null || objectTwo === null;
  if (objectOne === objectTwo) return true;
  if (isParametrsUndefined) return false;
  if (isParametrsObject) return false;
  if (isParametrsNull) return false;
  const objectOneKeys = Object.keys(objectOne);
  const objectTwoKeys = Object.keys(objectTwo);
  if (objectOneKeys.length !== objectTwoKeys.length) return false;
  for (const key of objectOneKeys) {
    if (!objectTwoKeys.includes(key) || !deepEqual(objectOne[key], objectTwo[key])) return false;
  }
  return true;
};
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];
class User {
  constructor(param) {
    this.firstName = param.firstName;
    this.lastName = param.lastName;
  }
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
class Student extends User {
  constructor(param) {
    super(param);
    this.admissionYear = param.admissionYear;
    this.courseName = param.courseName;
  }
  get course() {
    return (new Date()).getFullYear() - this.admissionYear;
  }
}

class Students {
  constructor(studentsData) {
    this.studentsData = studentsData;
  }
  getInfo() {
    return this.studentsData.sort((oneStudent, twoStudent) =>
      new Student(oneStudent).course - new Student(twoStudent).course).map(currentValue =>
      new User(currentValue).fullName + ' - ' + new Student(currentValue).courseName + ', ' + new Student(currentValue).course + ' курс');
  }
}
const stud = new Students(studentsData);
console.log(stud.getInfo());

const pOne = document.getElementById('text1');
const pTwo = document.getElementById('text2');
const pThree = document.getElementById('text3');
const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next(currentColor) {
    let index = this.data.indexOf(currentColor);
    const arrLength = this.data.length;
    if (index === -1 || index === arrLength - 1) {
      index = 0;
    } else {
      index++;
    }
    return {
      done: false,
      value: this.data[index++],
    };
  },
};
const changeColor = event => {
  const elemId = event.target.id;
  const cColor = document.getElementById(elemId).style.color;
  event.target.style.color = colors.next(cColor).value;
};

pOne.addEventListener('click', changeColor);
pTwo.addEventListener('click', changeColor);
pThree.addEventListener('click', changeColor);