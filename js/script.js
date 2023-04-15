const cards = [
  {
    brand: "Nashi Argan",
    price: 3240,
    imgSrc: ["../img/items/Nashi Argan/1.png"],
    description: 'Шампунь балансирующий для кожи головы ARMONIA',
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1 ТУТ ПОЛНОЕ ОПИСАНИЕ1ТУТ ПОЛНОЕ ОПИСАНИЕ1",
    id: 1
  },
  {
    brand: "Kerastase",
    price: 4200,
    imgSrc: ["../img/items/Nashi Argan/1.png", "../img/items/Nashi Argan/2.png"],
    description: 'Шампунь Nutritive для сухих волос',
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ2 ТУТ ПОЛНОЕ ОПИСАНИЕ2 ТУТ ПОЛНОЕ ОПИСАНИЕ2 ТУТ ПОЛНОЕ ОПИСАНИЕ2",
    id: 2
  },
  {
    brand: "L'Oreal Professionnel",
    price: 1500,
    imgSrc: ["../img/items/Nashi Argan/1.png"],
    description: "Шампунь Vitamino Color для окрашенных волос",
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ3",
    id: 3
  },
  {
    brand: "L'Oreal Professionnel",
    price: 1500,
    imgSrc: ["../img/items/Nashi Argan/1.png"],
    description: "Шампунь Vitamino Color для окрашенных волос",
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ4",
    id: 4
  },
  {
    brand: "L'Oreal Professionnel",
    price: 1500,
    imgSrc: ["../img/items/Nashi Argan/1.png"],
    description: "Шампунь Vitamino Color для окрашенных волос",
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ5",
    id: 5
  },
  {
    brand: "L'Oreal Professionnel",
    price: 1500,
    imgSrc: ["../img/items/Nashi Argan/1.png"],
    description: "Шампунь Vitamino ыпыпыпColor для окрашенных волос",
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ6",
    id: 6
  }


];

const brandCards = document.querySelector('.brand__cards');


// проходим по каждому объекту в массиве cards
cards.forEach(card => {
  // создаем новый элемент карточки
  const newCard = document.createElement('div');
  newCard.classList.add('brand__card');
  newCard.id = card.id;
  newCard.setAttribute('onclick', 'openPopup(id)');
  // newCard

  // добавляем в него изображение
  const cardImg = document.createElement('div');
  cardImg.classList.add('card__img');
  const img = document.createElement('img');
  img.setAttribute('src', card.imgSrc[0]);
  img.setAttribute('alt', '');
  cardImg.appendChild(img);
  newCard.appendChild(cardImg);

  // добавляем в него цену
  const cardPrice = document.createElement('div');
  cardPrice.classList.add('card__price');
  const price = document.createElement('span');
  price.innerText = card.price;
  cardPrice.appendChild(price);
  const currency = document.createElement('span');
  currency.innerText = '₽';
  cardPrice.appendChild(currency);
  newCard.appendChild(cardPrice);

  // добавляем в него бренд
  const brand = document.createElement('p');
  brand.classList.add('card__brand');
  brand.innerText = card.brand;
  newCard.appendChild(brand);

  // добавляем в него описание
  const description = document.createElement('p');
  description.classList.add('card__about');
  description.innerText = card.description;
  newCard.appendChild(description);

  // добавляем новую карточку в контейнер
  brandCards.appendChild(newCard);

});



const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popup__container = document.querySelector('.popup-container');


function openPopup(id) {
  popup.classList.add('active');
  // overlay.classList.add('active');

  updatePopup(id);
}

function closePopup() {
  popup.classList.remove('active');
  // overlay.classList.remove('active');
}

overlay.addEventListener('click', function (event) {
  const isClickInsidePopup = popup__container.contains(event.target);
  // console.log(isClickInsidePopup);
  if (!isClickInsidePopup) {
    closePopup();
  }
});



// Актуализация инфы в модалке

const popupTitle = document.querySelector('.title');
const popupBrand = document.querySelector('.description__brand');
const popupName = document.querySelector('.description__name');
const popupAbout = document.querySelector('.description__about');
const popupPrice = document.querySelector('.priceRub');

const allCards = document.querySelectorAll('.brand__card');


function updatePopup(num) {
  // let data = cards.find((card) => card.id == num){
  //   popupTitle.innerHTML
  // }
  allCards.forEach(card => {
    if (card.id == num) {
      // const newPrice = card.querySelector('card-price');
      const cardId = num - 1;

      // console.log(popupName.innerHTML);
      // console.log(cards[cardId].description);

      popupTitle.innerHTML = cards[cardId].brand;
      popupBrand.innerHTML = cards[cardId].brand;
      popupName.innerHTML = cards[cardId].description;
      popupAbout.innerHTML = cards[cardId].fullDescription;
      popupPrice.innerHTML = cards[cardId].price;

    }
  })
  // let cardNum = cards.find((card) => card.id == num);

  updateSlides(num - 1);
};

// Карусель настройка

const carouselInner = document.querySelector('.carousel-inner');
const carouselIndicators = document.querySelector('.carousel-indicators');

const leftArrow123 = document.querySelector('.carousel-control-prev');
const rightArrow123 = document.querySelector('.carousel-control-next');

function updateSlides(cardNumber) {
  carouselInner.innerHTML = '';

  const newCarouselItemActive = document.createElement('div');
  newCarouselItemActive.classList.add('carousel-item');
  newCarouselItemActive.classList.add('active');

  const newImgA = document.createElement('img');
  newImgA.setAttribute('class', 'd-block w-100');
  newImgA.setAttribute('alt', '...');
  newImgA.setAttribute('src', cards[cardNumber].imgSrc[0]);
  newCarouselItemActive.appendChild(newImgA);
  carouselInner.appendChild(newCarouselItemActive);

  if (cards[cardNumber].imgSrc.length > 1) {
    leftArrow123.classList.remove('hide');
    rightArrow123.classList.remove('hide');

    for (let i = 1; i < cards[cardNumber].imgSrc.length; i++) {
      const newCarouselItem = document.createElement('div');
      newCarouselItem.classList.add('carousel-item');
      const newImg = document.createElement('img');
      newImg.setAttribute('class', 'd-block w-100');
      newImg.setAttribute('alt', '...');
      newImg.setAttribute('src', cards[cardNumber].imgSrc[i]);
      newCarouselItem.appendChild(newImg);
      carouselInner.appendChild(newCarouselItem);
    }
  } else {
    leftArrow123.classList.add('hide');
    rightArrow123.classList.add('hide');
  }

}
{/* <div class="carousel-item active">
    <img src="../img/items/Nashi Argan/luxancee1.png" class="d-block w-100" alt="...">
</div> */}

// const newCard = document.createElement('div');
// newCard.classList.add('brand__card');