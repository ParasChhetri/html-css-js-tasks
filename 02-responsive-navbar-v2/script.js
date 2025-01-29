let menu = document.getElementById('menu');
let MenuBtn = document.querySelector('.menuBtn');
let CloseBtn = document.querySelector('.closeBtn');

function openMenu () {
    menu.style.display = 'block';
    MenuBtn.style.display = 'none';
    CloseBtn.style.display = 'block';
}

function closeMenu () {
    menu.style.display = 'none';
    MenuBtn.style.display = 'block';
    CloseBtn.style.display = 'none';
}
