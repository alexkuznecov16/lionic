const btnAdd = document.getElementById('hamb-open'),
btnClose = document.getElementById('hamb-close'),
hambMenu = document.getElementById('hamb-list'),
intro = document.getElementById('intro1');

btnAdd.addEventListener('click', () => {
    intro.classList.toggle('hamb');
    hambMenu.classList.toggle('active');
})

btnClose.addEventListener('click', () => {
    intro.classList.remove('hamb');
    hambMenu.classList.remove('active');
})