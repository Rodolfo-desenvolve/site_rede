const btnNext = document.getElementById('nextSlide')
const btnPrevious = document.getElementById('previousSlide')
const primary = document.querySelector('.primary')
const imgs = document.querySelector('.imgs')

btnNext.addEventListener('click', controlslide)
btnPrevious.addEventListener('click', controlslide)

const { width: primarywidth } = window.getComputedStyle(primary)
const { width: imgswidth } = window.getComputedStyle(imgs)

let currentSlide = 0;

const slideProps = {
    width: parseInt(primarywidth),
    scroll: 0,
}

function controlslide({ target: { id } }){
    const imgslenght = imgs.children.length;
    switch (id) {
        case 'nextSlide':
            if(slideProps.scroll + slideProps.width < parseInt(imgswidth)){
            slideProps.scroll += slideProps.width;
        }
        if(currentSlide < imgslenght  - 1){
            currentSlide += 1;
        }
        return primary.scrollLeft = slideProps.scroll;

        case 'previousSlide':{
            if(currentSlide > 0){
                currentSlide -= 1;
            }
            slideProps.scroll = slideProps.scroll - slideProps.width < 0 ? 0 : slideProps.scroll - slideProps.width;
            return primary.scrollLeft = slideProps.scroll;
        }
        default:
            break;
    }
}


// efeito rolagem de fotos

const elemScroll = document.querySelector('#imgs');
const elemContainer = elemScroll.querySelector('.imgs-items');
let elemFilho =  Array.from(elemContainer.children);

elemFilho.forEach(item =>{
    let elemDuplicado = item.cloneNode(true);
    elemContainer.appendChild(elemDuplicado);
})