const requestUrl = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
const divElement = document.querySelector('#guest-loves');
async function getDateWithRequest (url) {
  return fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then( error => {
        const err = new Error('Oops..., something went wrong');
        err.data = error;
        throw err;
      })
    })
}

const dataForGuestLoves = renderExam(requestUrl);
async function renderExam(url) {
const dataForGuestLoves = await getDateWithRequest(url);
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
        slidesPerGroup:2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
        slidesPerGroup:4,
      },
      },
    });
}

const formTextPeople = document.querySelector('.header-people-wrapper');
formTextPeople.innerHTML = `<div class="header-people-add">
  <div class="header-people__row">
    <span>Adults</span> <div class = "header-people__row__button"><a class="header-people-buttons header-people-buttons__minus" id = "dellAdults">-</a><span class="header-people__row__button-value">0</span><a class="header-people-buttons header-people-buttons__plus" id = "addAdults">+</a></div>
  </div>
  <div class="header-people__row">
    <span>Children</span><div class = "header-people__row__button"><a class="header-people-buttons header-people-buttons__minus" id = "dellChildren">-</a><span class="header-people__row__button-value" id = "value-children">0</span><a class="header-people-buttons header-people-buttons__plus" id = "addChildren">+</a></div>
  </div>
  <div class="header-people__row">
    <span>Rooms</span><div class = "header-people__row__button"><a class="header-people-buttons header-people-buttons__minus" id = "dellRooms">-</a><span class="header-people__row__button-value">0</span><a class="header-people-buttons header-people-buttons__plus" id = "addRooms">+</a></div>
  </div>
  </div>`;
const inputPeople = document.querySelector('#header-form-input__wrap-people');
const blockPeopleAdd = document.querySelector('.header-people-add')

inputPeople.addEventListener('click', (e) => {
  e.stopPropagation();
  formTextPeople.style.display = "block";
  changeColor();
}, true);
document.addEventListener('click', () => {
  formTextPeople.style.display = "none";
}, false);


const generateSelect = (event) => {
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
  selectionChildren.classList.add('header-people__info-children');
  selectionChildren.innerHTML = `<span>What is the age of the child you’re travelling with?</span>`;
  const selectionItems = document.createElement('select');
  selectionItems.classList.add('header-people__select-years-children');
  selectionItems.innerHTML = selectionItemsText;
  let generateWhile = 0;
  event.target.id === 'dellChildren' ?
  generateWhile = event.target.nextSibling.innerHTML : generateWhile = event.target.previousSibling.innerHTML;
  if (document.querySelector('.header-people__info-children')) {
    document.querySelector('.header-people__info-children').remove();
  }
  for (let i = 0; i < generateWhile; i++) {
    if (i === 0) {
      document.querySelector('.header-people-add').appendChild(selectionChildren);
      selectionChildren.appendChild(selectionItems);
    } else {
      const selectionItems = document.createElement('select');
      
      selectionItems.classList.add('header-people__select-years-children');
      selectionItems.innerHTML = selectionItemsText;
      selectionChildren.appendChild(selectionItems);
    }
  }
};

const changeColor = () => document.querySelectorAll('.header-people__row__button-value').forEach(element => {
  const colorLightTelegrey = '#CECECE';
  const colorLightDenim = '#3077C6';
  if (+element.innerHTML === 0) {
    element.previousSibling.style.borderColor = colorLightTelegrey;
    element.previousSibling.style.color = colorLightTelegrey;
  } else {
    element.previousSibling.style.borderColor = colorLightDenim;
    element.previousSibling.style.color = colorLightDenim;
  }
  if (+element.innerHTML === 30 || (+element.innerHTML === 10 && element.id === 'value-children')) {
    element.nextSibling.style.borderColor = colorLightTelegrey;
    element.nextSibling.style.color = colorLightTelegrey;
  } else {
    element.nextSibling.style.borderColor = colorLightDenim;
    element.nextSibling.style.color = colorLightDenim;
  }
});
const generateValueInputPeople = () => {
  const allValue = document.querySelectorAll('.header-people__row__button-value');
  const result = [];
  allValue.forEach((element) => {
    result.push(element.innerHTML);
  });
  const inputPeopleInfo = document.querySelector('#people');
  let finalValue = '';
  for (const key in result) {
    switch (key) {
      case '0': finalValue += result[key] + ' Adults - '; break;
      case '1': finalValue += result[key] + ' Children - '; break;
      case '2': finalValue += result[key] + ' Rooms'; break;
    };
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
  console.log(value)
  if ((event.target.id === idAddAdultsBtn || event.target.id === idAddRoomsBtn) && (value < 30 && value >= 0)) {
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
const btnAddAll = document.querySelectorAll('.header-people-buttons__plus');
const btnDelAll = document.querySelectorAll('.header-people-buttons__minus');
btnAddAll.forEach((element) => {
  element.addEventListener('click', addChildren, true);
});
btnDelAll.forEach((element) => {
  element.addEventListener('click', dellChildren, true);
});
