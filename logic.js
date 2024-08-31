let curr = 0 ;
const slides = document.querySelectorAll('.carousel-image')

function showslide(index){
    if(index >= slides.length){
        curr = 0 ;
    }
    else {
        curr = index ;
    }
    const carousel = document.querySelector('.carousel');
}
function nextSlide(){
    showslide(curr + 1 );
}
function prevSlide(){
    showslide(curr - 1 );
}
showslide(curr);