const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const divElement = document.querySelector('#guest-loves');
const changeDataFunction = data.forEach((element) => {
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
const formTextPeople = document.querySelector('.header-people-wrapper')
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

const inputPeople = document.querySelector('#people');
inputPeople.onfocus = function () {
  inputPeople.value = ' ';
  const labelPeopel = document.querySelector('#header-form');
  formTextPeople.style.display = 'block';
  labelPeopel.appendChild(formTextPeople);
  changeColor();
};
inputPeople.onblur = function () {
  if (inputPeople.value) {
    formTextPeople.style.display = 'block';
  } else {
    formTextPeople.style.display = 'none';
  }
};
const generateSelect = (event) => {
  const selectionChildren = document.createElement('div');
  selectionChildren.classList.add('header-people__info-children');
  selectionChildren.innerHTML = `<span>What is the age of the child you’re travelling with?</span>`;
  const selectionItems = document.createElement('select');
  selectionItems.classList.add('header-people__select-yers-children');
  selectionItems.innerHTML = `<option value = '1'>1 yers old</option>
  <option value = '2'>2 yers old</option>
  <option value = '3'>3 yers old</option>
  <option value = '4'>4 yers old</option>
  <option value = '5'>5 yers old</option>
  <option value = '6'>6 yers old</option>
  <option value = '7'>7 yers old</option>
  <option value = '8'>8 yers old</option>
  <option value = '9'>9 yers old</option>
  <option value = '10'>10 yers old</option>
  <option value = '11'>11 yers old</option>
  <option value = '12'>12 yers old</option>
  <option value = '13'>13 yers old</option>
  <option value = '14'>14 yers old</option>
  <option value = '15'>15 yers old</option>
  <option value = '16'>16 yers old</option>
  <option value = '17'>17 yers old</option>
  </select>`;
  let generateWhile = 0;
  event.target.id == 'dellChildren' ?
  generateWhile = event.target.nextSibling.innerHTML : generateWhile = event.target.previousSibling.innerHTML;
  if (document.querySelector('.header-people__info-children')) {
    document.querySelector('.header-people__info-children').remove();
  }
  for (let i = 0; i < generateWhile; i++) {
    if (i == 0) {
      document.querySelector('.header-people-add').appendChild(selectionChildren);
      selectionChildren.appendChild(selectionItems);
    } else {
      const selectionItems = document.createElement('select');
      selectionItems.classList.add('header-people__select-yers-children');
      selectionItems.innerHTML = `<option value = '1'>1 yers old</option>
        <option value = '2'>2 yers old</option>
        <option value = '3'>3 yers old</option>
        <option value = '4'>4 yers old</option>
        <option value = '5'>5 yers old</option>
        <option value = '6'>6 yers old</option>
        <option value = '7'>7 yers old</option>
        <option value = '8'>8 yers old</option>
        <option value = '9'>9 yers old</option>
        <option value = '10'>10 yers old</option>
        <option value = '11'>11 yers old</option>
        <option value = '12'>12 yers old</option>
        <option value = '13'>13 yers old</option>
        <option value = '14'>14 yers old</option>
        <option value = '15'>15 yers old</option>
        <option value = '16'>16 yers old</option>
        <option value = '17'>17 yers old</option>
        </select>`;
      selectionChildren.appendChild(selectionItems);
    }
  }
};

const changeColor = () => document.querySelectorAll('.header-people__row__button-value').forEach(element => {
  if (element.innerHTML == 0) {
    element.previousSibling.style.borderColor = '#CECECE';
    element.previousSibling.style.color = '#CECECE';
  } else {
    element.previousSibling.style.borderColor = '#3077C6';
    element.previousSibling.style.color = '#3077C6';
  }
  if (element.innerHTML == 30 || (element.innerHTML == 10 && element.id == 'value-children')) {
    element.nextSibling.style.borderColor = '#CECECE';
    element.nextSibling.style.color = '#CECECE';
  } else {
    element.nextSibling.style.borderColor = '#3077C6';
    element.nextSibling.style.color = '#3077C6';
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
    }
  }
  inputPeopleInfo.value = finalValue;
};
const addChildren = (event) => {
  event.stopPropagation();
  event.preventDefault();
  let value = event.target.previousSibling.innerHTML;
  if ((event.target.id == 'addAdults' || event.target.id == 'addRooms') && (value < 30 && value >= 0)) {
    event.target.previousSibling.innerHTML = ++value;
  }
  if (event.target.id == 'addChildren' && value == 0) {
    event.target.previousSibling.innerHTML = ++value;
    generateSelect(event);
  } else if (event.target.id == 'addChildren' && (value >= 1 && value < 10)) {
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
  if ((event.target.id == 'dellAdults' || event.target.id == 'dellRooms') && (value > 0)) {
    event.target.nextSibling.innerHTML = --value;
  }
  if (event.target.id == 'dellChildren' && value >= 1) {
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
