const blackbg = document.querySelector('.black');
const whitebg = document.querySelector('.white');
const bluebg = document.querySelector('.blue');
const redbg = document.querySelector('.red');
const yellowbg = document.querySelector('.yellow');
const bodycolor = document.querySelector('.body');

whitebg.addEventListener('click', () => {
    bodycolor.className = 'body ';
    bodycolor.classList.toggle('--white-bg');
    blackbg.classList.remove('--black-bg');
    console.log(bodycolor.classList);
    
})
blackbg.addEventListener('click', () => {
    bodycolor.className = 'body ';
    bodycolor.classList.toggle('--black-bg')
    // whitebg.classList.remove('--white-bg');
})