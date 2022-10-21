/*
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico:
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali
per popolare dinamicamente il carosello.

Al click dell'utente sulle frecce verso sinistra o destra,
l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello.
Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra,
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura
se l'utente clicca la freccia verso sinistra.
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
const backEl = document.querySelector('.back');
const nextEl = document.querySelector('.next');

let thisImg = 0;

//inserisco immagine
images.forEach((img, i) => {
        //console.log(img.image, i);
    //inserisco immagine
    slidesEl.insertAdjacentHTML('beforeend', `<img class="${i == thisImg ? 'image active' : 'image'}" src="./assets/${img.image}" alt="">`)

})

//aggiungo event-listner
nextEl.addEventListener('click', function () {
    //incremento indice dell'immagine attuale
    thisImg++
    //seleziono l'immagine attiva
    let activeImg = document.querySelector('.active')
    //console.log(activeImg);
    //rimuovo la class
    activeImg.classList.remove('active');
    //aggiungo la classe active alla prossima immagine
    const nextImg = document.querySelectorAll('.image');
    nextImg[thisImg].classList.add('active');
    
})

backEl.addEventListener('click', function () {
    //incremento indice dell'immagine attuale
    thisImg--
    //seleziono l'immagine attiva
    let activeImg = document.querySelector('.active')
    //console.log(activeImg);
    //rimuovo la class
    activeImg.classList.remove('active');
    //aggiungo la classe active alla prossima immagine
    const nextImg = document.querySelectorAll('.image');
    nextImg[thisImg].classList.add('active');
    
})


