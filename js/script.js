const cards = [
  {
    brand: "Nashi Argan",
    price: 3240,
    imgSrc: "../img/items/Nashi Argan/1.png",
    description: "Шампунь балансирующий для кожи головы ARMONIA",
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ",
    id: 1
  },
  {
    brand: "Kerastase",
    price: 4200,
    imgSrc: "../img/items/Nashi Argan/2.png",
    description: "Шампунь Nutritive для сухих волос",
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ",
    id: 2
  },
  {
    brand: "L'Oreal Professionnel",
    price: 1500,
    imgSrc: "../img/items/Nashi Argan/1.png",
    description: "Шампунь Vitamino Color для окрашенных волос",
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ",
    id: 3
  },
  {
    brand: "L'Oreal Professionnel",
    price: 1500,
    imgSrc: "../img/items/Nashi Argan/1.png",
    description: "Шампунь Vitamino Color для окрашенных волос",
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ",
    id: 4
  },
  {
    brand: "L'Oreal Professionnel",
    price: 1500,
    imgSrc: "../img/items/Nashi Argan/1.png",
    description: "Шампунь Vitamino Color для окрашенных волос",
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ",
    id: 5
  },
  {
    brand: "L'Oreal Professionnel",
    price: 1500,
    imgSrc: "../img/items/Nashi Argan/1.png",
    description: "Шампунь Vitamino ыпыпыпColor для окрашенных волос",
    fullDescription: "ТУТ ПОЛНОЕ ОПИСАНИЕ",
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
  img.setAttribute('src', card.imgSrc);
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



//   // Находим максимальную высоту карточек
// const maxHeight = Math.max(...document.querySelectorAll('.brand__card').map(card => card.offsetHeight));

//   // Устанавливаем максимальную высоту для всех карточек
// document.querySelectorAll('.brand__card').forEach(card => card.style.height = maxHeight + 'px');

// cards.forEach(card => {
//   const cardElement = createCard(card);
//   brandCards.appendChild(cardElement);
// });




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
  console.log(isClickInsidePopup);
  if (!isClickInsidePopup) {
    closePopup();
  }
});



// const allCards = document.querySelectorAll('.brand__card');

// function updatePopup(num) {
//   allCards.forEach(card => {
//     if (card.id == num) {
//       const newPrice = card.querySelector('card-price');
//       // newPrice = card.cardPrice;
//       newPrice = 9999;
//     }
//   })
// };