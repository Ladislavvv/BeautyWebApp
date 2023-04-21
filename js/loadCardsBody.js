const all_Cards = [
    [ //DAVINES
        {
            brand: "Davines",
            price: 2650,
            imgSrc: ["../img/items/body/1.jpg"],
            description: 'OI ГЕЛЬ ДЛЯ ДУША ДЛЯ АБСОЛЮТНОЙ КРАСОТЫ ТЕЛА',
            fullDescription: "Гель для душа OI бережно очищает кожу, увлажняя и смягчая ее. Кремообразная пена и роскошный аромат превращают ежедневный ритуал в настоящее наслаждение. Гель содержит масло аннато, интенсивно питающее кожу и обладающее антирадикальными свойствами. Мягкие поверхностно-активные вещества обеспечивают глубокое очищающее действие и создают воздушную пену.<br> Подходит для ежедневного применения для всего тела.<br><br>Объем: 280 мл.",
            id: 1
        },
        {
            brand: "Davines",
            price: 2650,
            imgSrc: ["../img/items/body/2.jpg"],
            description: 'Pedi Pro 20 Foot Cream — Концентрированный крем для ног с гликолевой кислотой, 120 г',
            fullDescription: "Высококонцентрированный крем для ног, помогает в кратчайшие сроки справится с проблемой трещин в области пяток, мозолями, натоптышами, сухостью и зудом в области стоп, делая их более мягкими и гладкими. Сочетание гликолевой кислоты 28%, масел и растительных экстрактов способствует нормализации процесса ороговения, увлажняет и питает кожу стоп, делая их нежными и придавая им легкость, способствует заживлению трещин, дезодорирует и освежает.",
            id: 2
        },
        {
            brand: "Davines",
            price: 2650,
            imgSrc: ["../img/items/body/3.jpg"],
            description: 'SU ШАМПУНЬ ДЛЯ ВОЛОС И ТЕЛА',
            fullDescription: "Деликатный восстанавливающий увлажняющий шампунь-гель для волос и тела для применения после пребывания на солнце. Гарантирует увлажнение и защиту волос и кожи, помогает сохранить загар. Без сульфатов и парабенов. <br>Содержит экстракт померанца миртолистного Чинотто с фермы синьора Пароди из Финале Лигуре (провинция Савона), который насыщен антиоксидантами и обладает противовоспалительным действием.<br>Не содержит сульфатов и парабенов.<br><br>Объем: 250 мл.",
            id: 3
        },
    ],
    [ //La Sultane de Saba
        {
            brand: "La Sultane de Saba",
            price: 2650,
            imgSrc: ["../img/items/body/4.jpg","../img/items/body/41.jpg","../img/items/body/42.jpg","../img/items/body/43.jpg"],
            description: 'Молочко увлажняющее для тела Sultane de Saba',
            fullDescription: "Молочко, созданное на основе масла сладкого миндаля и масла Карите, обладает легкой, но насыщенной текстурой и обеспечивает мягкое и продолжительное увлажнение.Глубоко питает, оставляя на коже ароматную вуаль и легкое ощущение свежести. Кожа становится нежной и ухоженной.Подходит для всех типов кожи.Молочко Увлажняющее представлено в нескольких ароматах<br><br>- Аюрведа<br>- Зеленый чай/ имбирь<br>- Лотос / Франжипани<br>- Мускус / ладан / Роза<br>",
            id: 1
        },
        {
            brand: "La Sultane de Saba",
            price: 2650,
            imgSrc: ["../img/items/body/5.jpg","../img/items/body/51.jpg","../img/items/body/52.jpg"],
            description: 'Масло Карите La Sultane de Saba',
            fullDescription: "Главное свойство –восстановление кожного покрова.Масло Карите помогает коже бороться с сухостью, лечит небольшие раздражения, а летом -солнечные ожоги. Выступает мощным экраном для эпидермиса, защищая его от вредных факторов воздействия окружающей среды. Способствует образованию коллагена и эластина. Используется для грудных младенцев, у беременных –для предотвращения растяжек. Очень эффективно после бритья.Карите оказывает благоприятное воздействие на волосы, питает и смягчает их. Восстанавливает равновесие жирных волос и укрепляет их.Масло Карите может быть нейтральным (100% Масло ореха Карите) или с ароматами<br><br>- Аюрведа<br>- Зеленый чай/ имбирь<br>- Лотос/ Франжипани<br>",
            id: 2
        },
    ],
    [ //LIGNE ST BARTH
        {
            brand: "LIGNE ST BARTH",
            price: 2650,
            imgSrc: ["../img/items/face/4.jpg","../img/items/face/41.jpg","../img/items/face/42.jpg"],
            description: 'Драгоценное натуральное масло авокадо для лица, тела и волос.',
            fullDescription: "ЧТО ТАКОЕ?<br>Драгоценное натуральное масло авокадо набрасывает на кожу и волосы роскошную золотистую бьюти-вуаль с бархатистым мерцанием. При нанесении до и после использования шампуня Масло восстанавливает блеск волос, разглаживает и облегчает расчёсывание. <br><br> ДЛЯ ЧЕГО?<br>Его можно наносить утром, вечером и в течение дня; оно прекрасно распределяется, быстро впитывается, обеспечивает надёжную защиту и дарит комфорт. Этот универсальный эликсир красоты с нежнейшим экзотическим ароматом тропического цветка тиаре творит настоящие чудеса, когда дело касается зрелой кожи.Масло авокадо для ухода за кожей лица, тела и волосами раскрывает своё благотворное воздействие как при нанесении, так и при добавлении в воду для ванны. Ещё один бонус: это идеальное средство для профилактики образования растяжек. <br><br>ПОЧЕМУ? Богатое витаминами A, D и E, лецитином и калием, это масло первого холодного отжима более чем на 20% состоит из ненасыщенных и насыщенных жирных кислот. <br>Масло богато стеаринами, которые известны своим свойством уменьшать возрастную пигментацию. Кроме того, оно ускоряет заживление кожи при солнечных ожогах и иных поверхностных повреждениях. Содержащиеся в масле растительные стеариновые кислоты делают кожу мягкой, гладкой и стимулируют способность эпидермиса удерживать влагу. Благодаря своей консистенции масло авокадо проникает в глубокие слои кожи.<br></br>Оно чрезвычайно эффективно способствует регенерации и обновлению клеток, поэтому оптимально подходит для обезвоженной и зрелой кожи, либо для кожи, поврежденной или подвергающейся воздействиям солнца и климатических изменений. Масло авокадо также успокаивает раздраженную кожу, помогает при псориазе и экземе. <br> Исследования израильского технологического института «Technion», проводившиеся в 1991 году, показали, что масло авокадо существенно повышает содержание коллагена в коже, выработка которого обычно сокращается с возрастом. <br><br>Объем 200мл.",
            id: 1
        },
        {
            brand: "LIGNE ST BARTH",
            price: 2650,
            imgSrc: ["../img/items/body/6.jpg","../img/items/body/61.jpg","../img/items/body/62.jpg","../img/items/body/63.jpg"],
            description: 'МАСЛО ПОМАДНОГО ДЕРЕВА SPF6 ROUCOU TANNING OIL LOW PROTECTION SPF6',
            fullDescription: "ЧТО ТАКОЕ?<br>Благодаря этой смеси из изысканных масел растительного происхождения с натуральными экстрактами вы загорите легко и быстро. Ваш загар будет ровным и красивым, а кожа бархатистой и ухоженной.<br><br>ДЛЯ ЧЕГО?<br>Масло помадного дерева придаёт загару нежное бронзовое мерцание;<br>помогает загореть светлой коже;<br>защищает от фотостарения;<br>питает кожу, пока вы загораете;<br>отпугивает насекомых;<br>успокаивает и восстанавливает кожу после загара.<br><br>ПОЧЕМУ?<br>Это легендарное масло для загара содержит ценный экстракт аннато (помадное дерево), который воплощает в себе насыщенное карибское лето. Араваки традиционно используют тёмно-красные семена помадного дерева с их высоким содержанием провитамина А в качестве солнцезащитного средства, которое стимулирует образование меланина и собственные защитные механизмы кожи.Содержит солнцезащитные физические фильтры на минеральной основе.Не содержит минеральных масел, парабенов и компонентов животного происхождения.Эту небольшую пластиковую бутылочку удобно брать с собой в путешествия. Она лёгкая и прочная. Точно не разобьётся в чемодане.<br><br>Объем 200мл.",
            id: 2
        }, 
        {
            brand: "LIGNE ST BARTH",
            price: 2650,
            imgSrc: ["../img/items/body/7.jpg","../img/items/body/71.jpg"],
            description: 'МОДЕЛИРУЮЩИЙ ГЕЛЬ ДЛЯ ТЕЛА С ЭКСТРАКТОМ ПЛЮЩА',
            fullDescription: "ЧТО ТАКОЕ?<br>Бестселлер против отёков, растяжек, проявления целлюлита и дряблости кожи.<br><br>ДЛЯ ЧЕГО?<br>Словно гибкие лозы плюща, обвивающие белые цветы, моделирующий гель окутывает всё тело, чтобы подарить ему свежесть, жизненную энергию и изящность линий силуэта. Он активизирует работу лимфатической системы, убирает отёки, обеспечивает мощный лифтинг-эффект и способствует уменьшению размеров.Тонизирующий гель идеально подходит для массажа, направленного на стимуляцию кровообращения и лимфатической системы.Результат: гладкая, плотная, упругая кожа; усовершенствованный силуэт<br>Внимание! Этот продукт не рекомендуется при беременности и грудном вскармливании.<br><br>ПОЧЕМУ?<br>Экстракт плюща обыкновенного (лат. Hedera helix L.) содержит флавоноиды и сапонины (гедерагенин-гликозиды, гедеракозид C, альфа- и бета-гедерин), активизирующие детоксикацию, сужающие сосуды и выводящие излишки жидкости.<br>В комбинации с таволгой, хвощом и бурыми водорослями моделирующее и разглаживающее воздействие геля с экстрактом плюща усиливается.<br>Экстракты таволги, бурых водорослей и хвоща получают на острове Сен-Барт в собственной производственной лаборатории LIGNE ST BARTH с помощью уникального брендированного метода.<br>В аромате этого лёгкого и свежего геля для лица и тела чувствуются едва уловимые цитрусовые нотки с зелёными цветочными брызгами.<br><br>125 мл",
            id: 3
        }, 
        {
            brand: "LIGNE ST BARTH",
            price: 2650,
            imgSrc: ["../img/items/body/8.jpg","../img/items/body/81.jpg","../img/items/body/82.jpg","../img/items/body/83.jpg"],
            description: 'ЛОСЬОН ДЛЯ ТЕЛА С АРОМАТОМ ТИАРЕ',
            fullDescription: "ЧТО ТАКОЕ?<br>Увлажняющий Лосьон для тела LIGNE ST BARTH — воплощение роскоши, очарования и лёгкости Карибики.<br><br>ДЛЯ ЧЕГО?<br>Высококачественная эмульсия карибской морской воды с маслом авокадо холодного отжима питает, увлажняет повышает защитные свойства кожи.Арома-букет из экзотического тиаре, роскошного белого жасмина и апельсинового цвета дарит незабываемые ощущения фруктовой свежести и легкости. Цветочные ноты тонко оттеняются мягким ванильным шлейфом.<br><br>ПОЧЕМУ?<br>Этот лосьон ублажает душу и тело своим ароматом экзотического цветка тиаре.Благоухающий бальзам впитывается в кожу, придавая ей нежный и бархатистый блеск — нет более утонченного способа нанесения парфюма.Лосьон на основе масла авокадо обладает прекрасными увлажняющими свойствами.Как роскошное дополнение после душа, массажа или косметической процедуры, он переносит нас в мир чувственных ароматов.<br><br>125 мл",
            id: 4
        }, 
        {
            brand: "LIGNE ST BARTH",
            price: 2650,
            imgSrc: ["../img/items/body/9.jpg","../img/items/body/91.jpg","../img/items/body/92.jpg"],
            description: 'КОКОСОВОЕ МАСЛО',
            fullDescription: "ЧТО ТАКОЕ?<br>Кокосовое масло холодного отжима с тонким ароматом ванили. Особенность: «застывает» при температуре ниже +25 градусов. Чтобы оно «оттаяло», достаточно на короткое время поместить флакон в тёплую (не выше 40° C) воду. Эта манипуляция не оказывает влияния на высокое качество продукта.<br><br>ДЛЯ ЧЕГО?<br>Бьюти-масло увлажняет кожу рук и ног, а также придаёт волосам здоровый блеск. Чистое кокосовое масло содержит питательную силу ненасыщенных жирных кислот, которые придают коже мягкость и бархатистость.При использовании в масле для ванны или массажном масле экзотический кокосовый аромат мысленно переносит вас в мир райского блаженства. Обладает противовоспалительным и антибактериальным действием, питает, удерживает влагу.<br><br>ПОЧЕМУ?<br>Применение этого насыщенного масла уходит своими корнями в косметические традиции Карибских островов. Оно составляет основу множества средств для ухода за волосами и телом, особенно отвечая потребностям сухой кожи. Кокосовое масло дарит сияние Карибики коже и волосам.Это традиционное бьюти-масло из тропических широт успокаивает и питает сухую кожу в течение дня, восстанавливает её эластичность и делает бархатисто-нежной. При нанесении до шампуня это масло укрощает непослушные кудрявые волосы, придаёт им объём и блеск.Масло-уход для лица, тела и волос раскрывает своё благотворное воздействие как при непосредственном нанесении, так и при добавлении в ванну. Его вкусный сливочный аромат с нежной ванильной ноткой напоминает о солнечном дне на белоснежном пляже.",
            id: 5
        }, 
    ],
    [ //Luxancee
        {
            brand: "Luxancee",
            price: 2650,
            imgSrc: ["../img/items/body/10.jpg","../img/items/body/11.jpg","../img/items/body/12.jpg","../img/items/body/13.jpg"],
            description: 'Фильтр для душа с натуральными фитонцидами',
            fullDescription: "Помогает в лечении как наружных, так и внутренних ран, с попутным обеспечением защиты от инфекСнимает судороги, боли в мышцах при растяжениях.Повышает настроение, пробуждает ощущение удовольствия и счастьяПомогает организму избавляться от накопленных токсинов, избыточной солиОказывает целебное действие при таких острых респираторных заболеваниях, как астма и бронхит.Является природным дезодорантом. Предотвращает рост бактерий – предотвращает запах пота.Натуральное средство от перевозбуждения и нервозных состоянийМожно использовать, как природное средство для лечения целлюлита и варикозного расширения вен.Регулирует женский гормональный статус.Тип средства: Фильтр<br>Область применения: Для тела<br>Действие: Увлажнение<br>Действие: Очищение<br>Страна: Корея",
            id: 1
        },
        {
            brand: "Luxancee",
            price: 2650,
            imgSrc: ["../img/items/body/101.jpg","../img/items/body/102.jpg","../img/items/body/103.jpg"],
            description: 'Фильтр для душа с натуральными фитонцидами',
            fullDescription: "Помогает в лечении как наружных, так и внутренних ран, с попутным обеспечением защиты от инфекций.Снимает судороги, боли в мышцах при растяжениях.Повышает настроение, пробуждает ощущение удовольствия и счастьяПомогает организму избавляться от накопленных токсинов, избыточной солиОказывает целебное действие при таких острых респираторных заболеваниях, как астма и бронхит.Является природным дезодорантом. Предотвращает рост бактерий – предотвращает запах пота.Натуральное средство от перевозбуждения и нервозных состоянийМожно использовать, как природное средство для лечения целлюлита и варикозного расширения вен.Регулирует женский гормональный статус.Тип средства: Фильтр<br>Область применения: Для тела<br>Действие: Увлажнение<br>Действие: Очищение<br>Страна: Корея",
            id: 2
        }
    ]
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

function renderCards(typeMass, dataCards) {

    typeMass.forEach(card => {
        const newCard = document.createElement('div');

        newCard.classList.add('brand__card');
        newCard.id = card.id;
        newCard.setAttribute('onclick', 'openPopup(id, this)');

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

        const brand = document.createElement('p');
        brand.classList.add('card__brand');
        brand.innerText = card.brand;
        newCard.appendChild(brand);

        const description = document.createElement('p');
        description.classList.add('card__about');
        description.innerText = card.description;
        newCard.appendChild(description);

        dataCards.appendChild(newCard);
    });
}


const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popup__container = document.querySelector('.popup-container');
const bodyEl = document.querySelector('body');

function openPopup(id, hero) {
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
    if (!isClickInsidePopup) {
        closePopup();
    }
});


const popupTitle = document.querySelector('.title');
const popupBrand = document.querySelector('.description__brand');
const popupName = document.querySelector('.description__name');
const popupAbout = document.querySelector('.description__about');
const popupPrice = document.querySelector('.priceRub');

const allCards = document.querySelectorAll('.brand__card');


function updatePopup(num, hero) {
    const paretnBrandcards = hero.parentNode;

    let dataIdCard;
    for (let p = 0; p < brand_СardsMass.length; p++) {
        if (paretnBrandcards == brand_СardsMass[p]) {
            dataIdCard = p;
        }
    }
    all_Cards[dataIdCard].forEach(card => {
        if (card.id == num) {
            const cardId = num - 1;

            popupBrand.innerHTML = all_Cards[dataIdCard][cardId].brand;
            popupName.innerHTML = all_Cards[dataIdCard][cardId].description;
            popupAbout.innerHTML = all_Cards[dataIdCard][cardId].fullDescription;
            // popupPrice.innerHTML = all_Cards[dataIdCard][cardId].price;
        }
    })
    updateSlides(num - 1, all_Cards[dataIdCard]);
};

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
