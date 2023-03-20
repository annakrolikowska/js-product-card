import '../styles/home-page.scss'

const buttonElement = document.querySelector('.home-page__button')
const item = document.querySelectorAll('.home-page__input')
const itemImage = document.querySelector('.home-page__img-container')
const grey = document.getElementById('grey')
const nude = document.getElementById('nude')
const pink = document.getElementById('pink')
const beige = document.getElementById('beige')

function changeImgColor() {
    if (window.matchMedia("(min-device-width: 768px)").matches) {
        if(grey.checked) {
            itemImage.style.backgroundImage = 'url(/public/images/bag-4-large.png)'
        } else if (beige.checked) {
            itemImage.style.backgroundImage = 'url(/public/images/bag-3-large.png)'
        } else if (pink.checked) {
            itemImage.style.backgroundImage = 'url(/public/images/bag-2-large.png)'
        } else if (nude.checked) {
            itemImage.style.backgroundImage = 'url(/public/images/bag-1-large.png)'
        }   
    } else {
        if(grey.checked) {
            itemImage.style.backgroundImage = 'url(/public/images/bag-4-mobile.png)'
        } else if (beige.checked) {
            itemImage.style.backgroundImage = 'url(/public/images/bag-3-mobile.png)'
        } else if (pink.checked) {
            itemImage.style.backgroundImage = 'url(/public/images/bag-2-mobile.png)'
        } else if (nude.checked) {
            itemImage.style.backgroundImage = 'url(/public/images/bag-1-mobile.png)'
        }  
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

