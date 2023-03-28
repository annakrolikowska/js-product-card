import '../styles/home-page.scss'

const buttonElement = document.querySelector('.home-page__button')
const item = document.querySelectorAll('.home-page__input')
const itemImage = document.querySelector('.home-page__img-container')
const grey = document.getElementById('grey')
const nude = document.getElementById('nude')
const pink = document.getElementById('pink')
const beige = document.getElementById('beige')

function changeImgColor() {

    itemImage.className = 'home-page__img-container';

    if(grey.checked) {
        itemImage.classList.toggle('home-page__img-container--grey') 
    } else if (beige.checked) {
        itemImage.classList.toggle('home-page__img-container--beige') 
    } else if (pink.checked) {
        itemImage.classList.toggle('home-page__img-container--pink') 
    } else if (nude.checked) {
        itemImage.classList.toggle('home-page__img-container--nude') 
    }   
}

function purchaseAlert() {
    if(grey.checked) {
        alert('Portfel w kolorze szarym został dodany do koszyka')
    } else if (beige.checked) {
        alert('Portfel w kolorze beżowym został dodany do koszyka')
    } else if (pink.checked) {
        alert('Portfel w kolorze różowym został dodany do koszyka')
    } else if (nude.checked) {
        alert('Portfel w kolorze cielistym został dodany do koszyka')
    }
}

if(buttonElement) {
    buttonElement.addEventListener('click', purchaseAlert)
}

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", changeImgColor);
}