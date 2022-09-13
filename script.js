const blackbg = document.querySelector('.black');
const whitebg = document.querySelector('.white');
const bluebg = document.querySelector('.blue');
const redbg = document.querySelector('.red');
const yellowbg = document.querySelector('.yellow');
const bodycolor = document.querySelector('.body');
const cardshadow = document.getElementsByClassName('card');

whitebg.addEventListener('click', () => {
    bodycolor.className = 'body ';
    // cardshadow.className = 'card ';
    bodycolor.classList.toggle('--white-bg');
    // cardshadow.classList.toggle('--white-sh'); 
    for (var i = 0; i < cardshadow.length; i++) {
        cardshadow[i].className = 'card ';
    } 
    for (var i = 0; i < cardshadow.length; i++) {
        cardshadow[i].classList.toggle('--white-sh');
    }
})
blackbg.addEventListener('click', () => {
    bodycolor.className = 'body ';
    bodycolor.classList.toggle('--black-bg');
    for (var i = 0; i < cardshadow.length; i++) {
        cardshadow[i].className = 'card ';
    }
    for (var i = 0; i < cardshadow.length; i++) {
        cardshadow[i].classList.toggle('--black-sh');
    }
})
bluebg.addEventListener('click', () => {
    bodycolor.className = 'body ';
    bodycolor.classList.toggle('--blue-bg');
    for (var i = 0; i < cardshadow.length; i++) {
        cardshadow[i].className = 'card ';
    }
    for (var i = 0; i < cardshadow.length; i++) {
        cardshadow[i].classList.toggle('--blue-sh');
    }
})
redbg.addEventListener('click', () => {
    bodycolor.className = 'body ';
    bodycolor.classList.toggle('--red-bg');
    for (var i = 0; i < cardshadow.length; i++) {
        cardshadow[i].className = 'card ';
    }
    for (var i = 0; i < cardshadow.length; i++) {
        cardshadow[i].classList.toggle('--red-sh');
    }
})
yellowbg.addEventListener('click', () => {
    bodycolor.className = 'body ';
    bodycolor.classList.toggle('--yellow-bg');
    for (var i = 0; i < cardshadow.length; i++) {
        cardshadow[i].className = 'card ';
    }
    for (var i = 0; i < cardshadow.length; i++) {
        cardshadow[i].classList.toggle('--yellow-sh');
    }
})