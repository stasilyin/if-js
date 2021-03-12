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
  slideClass:'guests-loves__swiper-slide',
  wrapperClass:'guest-loves__swiper-wrapper',
  navigation: {
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev'
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
    }
  }
});

