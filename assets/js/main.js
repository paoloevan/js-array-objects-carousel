/*
BONUS 1 (opzionale):
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2  (opzionale):
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3  (opzionale):
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//seleziono elemento dom
const slidesEl = document.querySelector('.slides');
//seleziono i bottoni
const buttonsEl = document.querySelector('.buttons');
const btn0El = document.querySelector('.btn_0');
const btn1El = document.querySelector('.btn_1');
const btn2El = document.querySelector('.btn_2');
const btn3El = document.querySelector('.btn_3');
const btn4El = document.querySelector('.btn_4');

for (let i = 0; i < 5; i++) {
    buttonsEl.insertAdjacentHTML('beforeend', `
                <button class="btn_${i}">
                    <img height="30" src="./assets/${images[i].image}" alt="">
                </button>
            `
    )
}



//inserisco immagini nei bottoni


let thisImg = 0;

//inserisco immagine
images.forEach((img, i) => {
    //inserisco immagine
    //slidesEl.insertAdjacentHTML('beforeend', `<img class="${i == thisImg ? 'image active' : 'image'}" src="./assets/${img.image}" alt="">`)
    slidesEl.insertAdjacentHTML('beforeend', `
    <div class="${i == thisImg ? 'slide active' : 'slide'}">
        <img src="./assets/${img.image}" alt="" alt="">
        <h2>${img.title}</h2>
        <p>${img.text}</p>
    </div>`)


})

//aggiungo event-listner
btn1El.addEventListener('click', function () {
    //incremento indice dell'immagine attuale
    // if (thisImg == 4) {
    //     thisImg = 0
    // } else {
    //     thisImg++
    // }
    thisImg = 1;
    //seleziono l'immagine attiva
    let activeImg = document.querySelector('.active')
    //rimuovo la class
    activeImg.classList.remove('active');
    //aggiungo la classe active alla prossima immagine
    const nextImg = document.querySelectorAll('.slide');
    nextImg[thisImg].classList.add('active');

})

backEl.addEventListener('click', function () {
    //incremento indice dell'immagine attuale
    if (thisImg == 0) {
        thisImg = 4
    } else {
        thisImg--
    }
    //seleziono l'immagine attiva
    let activeImg = document.querySelector('.active')
    //rimuovo la class
    activeImg.classList.remove('active');
    //aggiungo la classe active alla prossima immagine
    const nextImg = document.querySelectorAll('.slide');
    nextImg[thisImg].classList.add('active');

})


