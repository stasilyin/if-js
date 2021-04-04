const requestUrl = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
const divElement = document.querySelector('#guest-loves');
const formTextPeople = document.querySelector('.header-people-wrapper');
formTextPeople.innerHTML = `<div class="header-people-add">
  <div class="header-people__row">
    <span>Adults</span> <div class = "header-people__row__button"><a class="header-people-buttons header-people-buttons__minus" id = "dellAdults">-</a><span class="header-people__row__button-value" id = "value-adults">0</span><a class="header-people-buttons header-people-buttons__plus" id = "addAdults">+</a></div>
  </div>
  <div class="header-people__row">
    <span>Children</span><div class = "header-people__row__button"><a class="header-people-buttons header-people-buttons__minus" id = "dellChildren">-</a><span class="header-people__row__button-value" id = "value-children">0</span><a class="header-people-buttons header-people-buttons__plus" id = "addChildren">+</a></div>
  </div>
  <div class="header-people__row">
    <span>Rooms</span><div class = "header-people__row__button"><a class="header-people-buttons header-people-buttons__minus" id = "dellRooms">-</a><span class="header-people__row__button-value" id = "value-rooms">0</span><a class="header-people-buttons header-people-buttons__plus" id = "addRooms">+</a></div>
  </div>
  </div>`;
const inputPeople = document.querySelector('#header-form-input__wrap-people');
const btnAddAll = document.querySelectorAll('.header-people-buttons__plus');
const btnDelAll = document.querySelectorAll('.header-people-buttons__minus');

function getDateWithRequest(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return response.json().then((error) => {
      const err = new Error('Oops..., something went wrong');
      err.data = error;
      throw err;
    });
  });
}

renderRequestForGuestLoves(requestUrl);

async function renderRequestForGuestLoves(url) {
  let dataForGuestLoves = '';

  if (sessionStorage.getItem('dataForGuestLoves')) {
    dataForGuestLoves = JSON.parse(sessionStorage.getItem('dataForGuestLoves'));
  } else {
    dataForGuestLoves = await getDateWithRequest(url);
    sessionStorage.setItem('dataForGuestLoves', JSON.stringify(dataForGuestLoves));
  }

  dataForGuestLoves.forEach((element) => {
    divElement.innerHTML += `
      <figure class="guests-loves__image-wrapper guests-loves__swiper-slide">
        <div class="guests-loves__img-wrap">
          <img src=${element.imageUrl} alt="Hotel photo" class="guests-loves__image-photo">
        </div>
        <figcaption class="guests-loves__dsc-wrapper">
          <span class="guests-loves__dsc">${element.name}</span>
          <span class="guests-loves__dsc-city">${element.city}, ${element.country}</span>
        </figcaption>
      </figure>`;
  });

  new Swiper('.guest-loves__swiper-container', {
    slideClass: 'guests-loves__swiper-slide',
    wrapperClass: 'guest-loves__swiper-wrapper',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
        slidesPerGroup: 4,
      },
    },
  });
}

inputPeople.addEventListener('click', (e) => {
  e.stopPropagation();
  const calendar = document.querySelector('#calendar');

  formTextPeople.style.display = 'block';
  if (calendar) calendar.style.display = 'none';

  changeColor();
}, true);

document.addEventListener('click', (e) => {
  e.stopPropagation();
  const calendar = document.querySelector('#calendar');
  const inputDate = document.querySelector('#date');
  formTextPeople.style.display = 'none';
  
  if (inputDate.value) {
    calendar.style.display = 'none';
  } else {
    if (calendar.firstChild) calendar.firstChild.remove();

    if (calendar.lastChild) calendar.lastChild.remove();

    calendar.style.display = 'none';
  }
}, false);

const generateSelect = (event) => {
  event.stopPropagation();
  const selectionItemsText = `<option value = '1'>1 years old</option>
      <option value = '2'>2 years old</option>
      <option value = '3'>3 years old</option>
      <option value = '4'>4 years old</option>
      <option value = '5'>5 years old</option>
      <option value = '6'>6 years old</option>
      <option value = '7'>7 years old</option>
      <option value = '8'>8 years old</option>
      <option value = '9'>9 years old</option>
      <option value = '10'>10 years old</option>
      <option value = '11'>11 years old</option>
      <option value = '12'>12 years old</option>
      <option value = '13'>13 years old</option>
      <option value = '14'>14 years old</option>
      <option value = '15'>15 years old</option>
      <option value = '16'>16 years old</option>
      <option value = '17'>17 years old</option>
      </select>`;
  const selectionChildren = document.createElement('div');
  const selectionItems = document.createElement('select');
  let generateWhile = 0;

  selectionChildren.classList.add('header-people__info-children');
  selectionChildren.innerHTML = '<span>What is the age of the child you’re travelling with?</span>';
  selectionItems.classList.add('header-people__select-years-children');
  selectionItems.innerHTML = selectionItemsText;
  event.target.id === 'dellChildren'
    ? generateWhile = event.target.nextSibling.innerHTML
    : generateWhile = event.target.previousSibling.innerHTML;

  if (document.querySelector('.header-people__info-children')) {
    document.querySelector('.header-people__info-children').remove();
  }
  for (let i = 0; i < generateWhile; i++) {

    if (i === 0) {
      document.querySelector('.header-people-add').appendChild(selectionChildren);
      selectionChildren.appendChild(selectionItems);
    } else {
      const selectionItemsMore = document.createElement('select');
      selectionItemsMore.classList.add('header-people__select-years-children');
      selectionItemsMore.innerHTML = selectionItemsText;
      selectionChildren.appendChild(selectionItemsMore);
    }
  }
};

const changeColor = () => document.querySelectorAll('.header-people__row__button-value').forEach((curBtn) => {
  const colorLightTelegrey = '#CECECE';
  const colorLightDenim = '#3077C6';
  if (+curBtn.innerHTML === 0) {
    curBtn.previousSibling.style.borderColor = colorLightTelegrey;
    curBtn.previousSibling.style.color = colorLightTelegrey;
  } else {
    curBtn.previousSibling.style.borderColor = colorLightDenim;
    curBtn.previousSibling.style.color = colorLightDenim;
  }

  if (+curBtn.innerHTML === 30 || (+curBtn.innerHTML === 10 && curBtn.id === 'value-children')) {
    curBtn.nextSibling.style.borderColor = colorLightTelegrey;
    curBtn.nextSibling.style.color = colorLightTelegrey;
  } else {
    curBtn.nextSibling.style.borderColor = colorLightDenim;
    curBtn.nextSibling.style.color = colorLightDenim;
  }
});

const generateValueInputPeople = () => {
  const allValue = document.querySelectorAll('.header-people__row__button-value');
  const result = [];
  const inputPeopleInfo = document.querySelector('#people');
  let finalValue = '';

  allValue.forEach((element) => {
    result.push(element.innerHTML);
  });

  for (let key in result) {
    switch (key) {
      case '0': finalValue += result[key] + ' Adults - '; break;
      case '1': finalValue += result[key] + ' Children - '; break;
      case '2': finalValue += result[key] + ' Rooms'; break;
    }
  }

  inputPeopleInfo.value = finalValue;
};

const addChildren = (event) => {
  event.stopPropagation();
  event.preventDefault();
  const idAddAdultsBtn = 'addAdults';
  const idAddRoomsBtn = 'addRooms';
  const idAddChildrenBtn = 'addChildren';
  let value = +event.target.previousSibling.innerHTML;

  if (
    (event.target.id === idAddAdultsBtn || event.target.id === idAddRoomsBtn)
    && (value < 30 && value >= 0)
  ) {
    event.target.previousSibling.innerHTML = ++value;
  }

  if (event.target.id === idAddChildrenBtn && value === 0) {
    event.target.previousSibling.innerHTML = ++value;
    generateSelect(event);
  } else if (event.target.id === idAddChildrenBtn && (value >= 1 && value < 10)) {
    event.target.previousSibling.innerHTML = ++value;
    generateSelect(event);
  }

  changeColor();
  generateValueInputPeople();
};

const dellChildren = (event) => {
  event.stopPropagation();
  event.preventDefault();
  let value = event.target.nextSibling.innerHTML;
  const idDellAdultsBtn = 'dellAdults';
  const idDellRoomsBtn = 'dellRooms';
  const idDellChildrenBtn = 'dellChildren';

  if ((event.target.id === idDellAdultsBtn || event.target.id === idDellRoomsBtn) && (value > 0)) {
    event.target.nextSibling.innerHTML = --value;
  }
  
  if (event.target.id === idDellChildrenBtn && value >= 1) {
    event.target.nextSibling.innerHTML = --value;
    generateSelect(event);
  }

  changeColor();
  generateValueInputPeople();
};

btnAddAll.forEach((element) => {
  element.addEventListener('click', addChildren, true);
});
btnDelAll.forEach((element) => {
  element.addEventListener('click', dellChildren, true);
});

Date.prototype.daysInMonth = function (year, month) {
  month -= 1;
  return 32 - new Date(year, month, 32).getDate();
};

Date.prototype.dayOfWeek = function (year, month) {
  month -= 1;
  const firstDay = (new Date(year, month, 1));
  const firstDayWeek = firstDay.getDay();
  let t = firstDayWeek - 1;

  if (t < 0) {
    t = 6;
  }

  return t + 1;
};
class Calendar {
  constructor(dataMonth) {
    this.dataMonth = dataMonth;
  }
  getCurrMonth() {
    try {
      const { daysInMonth, daysInWeek, dayOfWeek, checkInDay, checkOutDay } = this.dataMonth;

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

          if (
            result[result.length - 1][j].dayOfMonth >= 1
            && result[result.length - 1][j].dayOfMonth <= 7
          ) {
            result[result.length - 1][j].notCurrentMonth = true;
          }

          if (
            result[i][j].dayOfMonth >= checkInDay
            && result[i][j].dayOfMonth <= checkOutDay
            && result[i][j].notCurrentMonth === false
          ) result[i][j].selectedDay = true;

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
}

class CalendarPrint {
  constructor(month, year) {
    this.month = month;
    this.year = year;
  }

  printMonth() {

    const getObjectMonth = {
      daysInMonth: new Date().daysInMonth(this.year, this.month),
      daysInWeek: 7,
      dayOfWeek: new Date().dayOfWeek(this.year, this.month),
    };
    const currentMonth = new Calendar(getObjectMonth).getCurrMonth();
    const tableTbody = document.createElement('div');
    const tableCaption = document.createElement('div');
    const monthes = ['January', 'February', 'March', 'April', 'May', 'June ', 'July ', 'August ', 'September ', 'October', 'November', 'December'];
    const daysWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    let rowsTabelWeekCount = 0;

    tableTbody.classList.add('calend-wrapper');
    tableCaption.style.fontWeight = '500';
    tableCaption.style.fontSize = '18px';
    tableCaption.classList.add('headerCalen');
    tableCaption.innerHTML = monthes[new Date(this.year, this.month).getMonth() - 1] + ' ' + this.year;
    tableTbody.appendChild(tableCaption);
    while (rowsTabelWeekCount < daysWeek.length) {
      const rowsTableWeek = document.createElement('div');
      rowsTableWeek.innerHTML = daysWeek[rowsTabelWeekCount];
      rowsTableWeek.style.fontSize = '14px';
      tableTbody.appendChild(rowsTableWeek);
      rowsTabelWeekCount++;
    }
                      
    for (let i = 0; i < currentMonth.length; i++) {
      for (let j = 0; j < 7; j++) {
        const day = document.createElement('div');

        if (currentMonth[i][j].notCurrentMonth === true) {
          day.innerHTML = '';
        } else {
          day.classList.add('calendar-day');
          day.innerHTML = currentMonth[i][j].dayOfMonth;
          day.dataset.dayOfMonth = currentMonth[i][j].dayOfMonth;
          day.dataset.notCurrentMonth = currentMonth[i][j].notCurrentMonth;
          day.dataset.selectedDay = currentMonth[i][j].selectedDay;
          day.dataset.currentDay = currentMonth[i][j].currentDay;
          day.style.fontSize = '14px';
          day.dataset.month = this.month;
          day.dataset.year = this.year;
          const numCurrMonth = new Date().getMonth();
          const numCurrYear = new Date().getFullYear();
          const numCurrDay = new Date().getDate();
          const colorIrrelivantDay = '#BFBFBF';
          const colorCurrentDay = '#3077C6';

          if ((this.month - 1) === numCurrMonth && this.year === numCurrYear) {
            if (currentMonth[i][j].dayOfMonth < numCurrDay) {
              day.style.color = colorIrrelivantDay;
              day.dataset.irrelivantDay = true;
            } else if (currentMonth[i][j].dayOfMonth === numCurrDay) {
              day.style.color = colorCurrentDay;
            }
          }
        }

        tableTbody.appendChild(day);
      }
    }
    return tableTbody;
  }
}

const dateWrapper = document.querySelector('#date');
dateWrapper.addEventListener('click', (e) => {
  e.stopPropagation();
  const calendar = document.querySelector('#calendar');
  const inputDate = document.querySelector('#date');
  const formChildren = document.querySelector('.header-people-wrapper');

  if (formChildren.style.display === 'block') formChildren.style.display = 'none';

  if (calendar.style.display === 'none' && inputDate.value !== '') {
    calendar.style.display = 'grid';
    generateSelectedDays();
  } else {
    calendar.style.display = 'grid';

    if (calendar.firstChild) return;

    calendar.appendChild(new CalendarPrint(new Date().getMonth()
    + 1, new Date().getFullYear()).printMonth());
    calendar.appendChild(new CalendarPrint(new Date().getMonth()
    + 2, new Date().getFullYear()).printMonth());
    dayClick();
  }
}, true);

let checkInDay = 0;
let checkInDayElement = '';
let checkOutDay = 0;
let checkOutDayElement = '';

const dayClick = () => document.querySelectorAll('.calendar-day').forEach((element) => {
  const dateInput = document.querySelector('#date');

  element.addEventListener('click', (e) => {
    const currentElement = e.target;

    if (currentElement.dataset.irrelivantDay) return;

    if (checkInDay && checkOutDay) {
      checkInDayElement.style += 'background-color: #fff; color: #333333';
      checkOutDayElement.style += 'background-color: #fff; color: #333333';
      checkInDayElement.dataset.checkInDay = false;
      checkOutDayElement.dataset.checkInDay = false;
      checkInDayElement.dataset.selectedDay = false;
      checkOutDayElement.dataset.selectedDay = false;
      dateInput.value = '';
      checkInDayElement = '';
      checkOutDayElement = '';
      checkInDay = 0;
      checkOutDay = 0;
      defaultStyleCalendar();
    }

    const isElementThanThePrevious = (checkInDay === 0)
    || (currentElement.dataset.dayOfMonth < checkInDay
    && currentElement.dataset.month <= checkInDayElement.dataset.month)
    || (currentElement.dataset.dayOfMonth > checkInDay
    && currentElement.dataset.month < checkInDayElement.dataset.month);

    if (isElementThanThePrevious) {
      currentElement.dataset.checkInDay = true;
      currentElement.dataset.selectedDay = true;
      currentElement.style = 'background-color: #3077C6; color: #fff;';
      checkInDay = +element.dataset.dayOfMonth;
      if (checkInDayElement) checkInDayElement.style = 'background-color: #fff; color: #33333;';
      if (checkInDayElement) checkInDayElement.dataset.checkInDay = false;
      if (checkInDayElement) checkInDayElement.dataset.selectedDay = false;
      checkInDayElement = currentElement;
      const valueIn = changeFormatDate(element.dataset.dayOfMonth + '.' + element.dataset.month + '.' + element.dataset.year);
      dateInput.value = valueIn;
    } else {
      currentElement.dataset.checkOutDay = true;
      currentElement.dataset.selectedDay = true;
      currentElement.style = 'background-color: #3077C6; color: #fff';
      checkOutDay = +element.dataset.dayOfMonth;

      if (checkOutDayElement) checkOutDayElement.style = 'background-color: #fff; color: #333333;';
      if (checkOutDayElement) checkOutDayElement.dataset.checkOutDay = false;
      if (checkOutDayElement) checkOutDayElement.dataset.selectedDay = false;
      checkOutDayElement = currentElement;
      const calendar = document.querySelector('#calendar');
      const valueOut = element.dataset.dayOfMonth + '.' + element.dataset.month + '.' + element.dataset.year;
      dateInput.value = dateInput.value.substr(0, 10) + ' - ' + changeFormatDate(valueOut);
      calendar.style.display = 'none';
    }
  });
});
function changeFormatDate(date) {
  const res = [];
  date.split('.').map((element) => {
    if (String(element).length === 1) {
      const resIfNull = '0' + element;
      element = resIfNull;
    }
    res.push(element);
  });
  return res.join('.');
}

function generateSelectedDays() {
  document.querySelectorAll('.calendar-day').forEach((element) => {
    const elementOfDay = Number(element.dataset.dayOfMonth);
    const elementOfMonth = Number(element.dataset.month);
    const inMonth = Number(checkInDayElement.dataset.month);
    const outMonth = Number(checkOutDayElement.dataset.month);
    const isSelectedDay = (inMonth === outMonth && elementOfDay > checkInDay
    && elementOfDay < checkOutDay && elementOfMonth === outMonth)
    || (inMonth < outMonth && ((elementOfDay > checkInDay && elementOfMonth === inMonth)
    || (elementOfDay < checkOutDay && elementOfMonth === outMonth)));
    if (isSelectedDay) {
      if (element.dataset.checkOutDay === true || element.dataset.checkInDay === true) return;
      element.style.backgroundColor = '#F3F3F4';
      element.dataset.selectedDay = true;
    }
  });
}
function defaultStyleCalendar() {
  document.querySelectorAll('.calendar-day').forEach((element) => {
    const defaulBackColor = '#fff';
    const selectedBackColor = 'rgb(243, 243, 244)';
    if (element.style.backgroundColor === selectedBackColor) {
      element.dataset.selectedDay = false;
      element.style.backgroundColor = defaulBackColor;
    }
  });
}
function windowError(error) {
  const header = document.querySelector('header');
  const winErrorWrap = document.createElement('div');
  winErrorWrap.style = `background-color: #fff; 
                        border-radius: 8px; 
                        border: 1px #3077C6 solid;
                        text-align: center;
                        font-size: 24px;
                        position: absolute;
                        padding: 20px 20px;
                        box-shadow: 2px 3px 10px rgba(0, 0, 0, .2);
                        width: 0;
                        opacity: 0;
                        transition: opacity .3s;
                        top: 57%;
                        left: 44%;`;
  header.appendChild(winErrorWrap);
  winErrorWrap.innerHTML = error;
  setTimeout(() => {
    winErrorWrap.style.width = '200px';
    winErrorWrap.style.height = '130px';
    winErrorWrap.style.opacity = 1;
    setTimeout(() => {
      winErrorWrap.style.opacity = 0;
      setTimeout(() => {
        winErrorWrap.remove();
      }, 300);
    }, 1000);
  }, 0);
}
const searchForm = document.querySelector('#header-form');
searchForm.addEventListener('submit', async (e) => {
  if (document.querySelector('.аvailable-hotels')) document.querySelector('.аvailable-hotels').remove();
  e.preventDefault();
  const paramForSearchData = {
    search: '',
    adults: 0,
    children: [],
    rooms: 0,
  };
  paramForSearchData.search = document.querySelector('#city').value;
  paramForSearchData.adults = +document.querySelector('#value-adults').innerHTML;
  paramForSearchData.children = [];
  const selectChildren = document.querySelectorAll('select');
  if (selectChildren) {
    selectChildren.forEach((currentSelect) => {
      paramForSearchData.children.push(currentSelect.value);
    });
  } else {
    paramForSearchData.children = 0;
  }
  paramForSearchData.rooms = +document.querySelector('#value-rooms').innerHTML;
  if (paramForSearchData.adults === 0 && paramForSearchData.children > 0) {
    windowError('Введите количество взрослых');
    return;
  } else if (paramForSearchData.rooms < 1) {
    windowError('Введите количество комнат');
    return;
  } else if (paramForSearchData.rooms > 0 && paramForSearchData.adults === 0) {
    windowError('Введите количество взрослых');
    return;
  } else {
    document.querySelector('#header-form').reset();
  }
  if (paramForSearchData.children.length === 0) paramForSearchData.children = [0];
  const { search, adults, children, rooms } = paramForSearchData;
  const urlForSearch = `https://fe-student-api.herokuapp.com/api/hotels?search=${search}&adults=${adults}&children=${children.join(',')}&rooms=${rooms}`;
  const dataOfSearch = await getDateWithRequest(urlForSearch);
  const sectionAvailableHotels = document.createElement('section');
  sectionAvailableHotels.classList.add('аvailable-hotels');
  const sectionAvailableHotelsContainer = document.createElement('div');
  sectionAvailableHotelsContainer.classList.add('container');
  sectionAvailableHotels.appendChild(sectionAvailableHotelsContainer);
  const titleAvailableHotels = document.createElement('h2');
  titleAvailableHotels.textContent = 'Available hotels';
  sectionAvailableHotelsContainer.appendChild(titleAvailableHotels);
  const header = document.querySelector('header');

  if (dataOfSearch.length >= 1) {
    const availableHotelsCardWrap = document.createElement('div');
    availableHotelsCardWrap.classList.add('аvailable-hotels__card-wrap');
    sectionAvailableHotelsContainer.appendChild(availableHotelsCardWrap);
    dataOfSearch.forEach((currentValue) => {
      availableHotelsCardWrap.innerHTML += `<div class = 'аvailable-hotels__card'>
        <div class = 'аvailable-hotels__card__img'><img src = ${currentValue.imageUrl} alt = ${currentValue.name}></div>
        <span class = 'аvailable-hotels__card-name-hotels'>${currentValue.name}</span>
        <span class = 'аvailable-hotels__card-city-hotels'>${currentValue.city}, ${currentValue.country}</span>
        </div>`;
      header.after(sectionAvailableHotels);
      let dalayElement = 0;
      document.querySelectorAll('.аvailable-hotels__card').forEach((element) => {
        element.style.transitionDelay = dalayElement + 'ms';
        dalayElement += 700;
        setTimeout(() => {
          element.style.opacity = 1;
        }, 0);
      });
    });
  } else {
    const availableHotelsCardWrap = document.createElement('div');
    sectionAvailableHotels.appendChild(availableHotelsCardWrap);
    availableHotelsCardWrap.style.fontSize = '3rem';
    availableHotelsCardWrap.style.textAlign = 'center';
    availableHotelsCardWrap.style.marginTop = '30px';
    availableHotelsCardWrap.textContent = 'The search has not given any results';
    header.after(sectionAvailableHotels);
  }
});
