const all_Cards = [
    // Нормальная кожа
    [
        {
            brand: "Davines",
            price: 2650,
            imgSrc: ["./img/items/Вьющиеся волосы/DAVINES/1.jpg"],
            description: 'Love кондиционер для усиления завитка, 250 ml',
            fullDescription: "Кондиционер для усиления завитка LOVE придает вьющимся волосам объем, эластичность и мягкость. Насыщен протеинами, витаминами В и Е. Обновленная формула с экстрактом миндаля из Ното питает и увлажняет волнистые и кудрявые волосы. Структурирует локоны, обеспечивая эффект антифриз. Обладает превосходным кондиционирующим и термозащитным действием. Идеально в сочетании с шампунем LOVE. Подходит для тонких и волнистых волос.",
            id: 1
        }
    ],
]


// 

const brand_Сards = document.querySelectorAll('.brand__cards');
const brand_СardsMass = [];
brand_Сards.forEach((element) => {
    brand_СardsMass.push(element)
});

// 


for (let k = 0; k < brand_СardsMass.length; k++) {
    const dataMass = all_Cards[k];
    const dataBrandCard = brand_СardsMass[k];
    renderCards(dataMass, dataBrandCard)
}

// const brandCards = document.querySelector('.brand__cards');


function renderCards(typeMass, dataCards) {


    // проходим по каждому объекту в массиве cards
    typeMass.forEach(card => {
        // создаем новый элемент карточки
        const newCard = document.createElement('div');

        newCard.classList.add('brand__card');
        newCard.id = card.id;
        newCard.setAttribute('onclick', 'openPopup(id, this)');
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
        // const cardPrice = document.createElement('div');
        // cardPrice.classList.add('card__price');
        // const price = document.createElement('span');
        // price.innerText = card.price;
        // cardPrice.appendChild(price);
        // const currency = document.createElement('span');
        // currency.innerText = '₽';
        // cardPrice.appendChild(currency);
        // newCard.appendChild(cardPrice);

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
        dataCards.appendChild(newCard);

    });
}


const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popup__container = document.querySelector('.popup-container');
const bodyEl = document.querySelector('body');

function openPopup(id, hero) {
    // const popup = document.querySelector('.popup');
    // const bodyEl = document.querySelector('body');
    popup.classList.add('active');
    bodyEl.classList.add('popup-open');

    updatePopup(id, hero);
}


function closePopup() {
    popup.classList.remove('active');
    bodyEl.classList.remove('popup-open');
}


overlay.addEventListener('click', function (event) {
    const popup__container = document.querySelector('.popup-container');
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


function updatePopup(num, hero) {
    // let data = cards.find((card) => card.id == num){
    //   popupTitle.innerHTML
    // }
    const paretnBrandcards = hero.parentNode;
    // console.log(paretnBrandcards);

    let dataIdCard;
    for (let p = 0; p < brand_СardsMass.length; p++) {
        if (paretnBrandcards == brand_СardsMass[p]) {
            dataIdCard = p;
            // console.log(dataIdCard);
        }
    }
    all_Cards[dataIdCard].forEach(card => {
        if (card.id == num) {
            // const newPrice = card.querySelector('card-price');
            const cardId = num - 1;

            popupBrand.innerHTML = all_Cards[dataIdCard][cardId].brand;
            popupName.innerHTML = all_Cards[dataIdCard][cardId].description;
            popupAbout.innerHTML = all_Cards[dataIdCard][cardId].fullDescription;
            // popupPrice.innerHTML = all_Cards[dataIdCard][cardId].price;

        }
    })
    updateSlides(num - 1, all_Cards[dataIdCard]);
};




// Карусель настройка

const carouselInner = document.querySelector('.carousel-inner');
const carouselIndicators = document.querySelector('.carousel-indicators');

const leftArrow123 = document.querySelector('.carousel-control-prev');
const rightArrow123 = document.querySelector('.carousel-control-next');


function updateSlides(cardNumber, dataMasss) {
    carouselInner.innerHTML = '';

    const newCarouselItemActive = document.createElement('div');
    newCarouselItemActive.classList.add('carousel-item');
    newCarouselItemActive.classList.add('active');

    const newImgA = document.createElement('img');
    newImgA.setAttribute('class', 'd-block w-100');
    newImgA.setAttribute('alt', '...');
    newImgA.setAttribute('src', dataMasss[cardNumber].imgSrc[0]);
    newCarouselItemActive.appendChild(newImgA);
    carouselInner.appendChild(newCarouselItemActive);

    if (dataMasss[cardNumber].imgSrc.length > 1) {
        leftArrow123.classList.remove('hide');
        rightArrow123.classList.remove('hide');

        for (let i = 1; i < dataMasss[cardNumber].imgSrc.length; i++) {
            const newCarouselItem = document.createElement('div');
            newCarouselItem.classList.add('carousel-item');
            const newImg = document.createElement('img');
            newImg.setAttribute('class', 'd-block w-100');
            newImg.setAttribute('alt', '...');
            newImg.setAttribute('src', dataMasss[cardNumber].imgSrc[i]);
            newCarouselItem.appendChild(newImg);
            carouselInner.appendChild(newCarouselItem);
        }
    } else {
        leftArrow123.classList.add('hide');
        rightArrow123.classList.add('hide');
    }
}


