// Simple slider functionality
let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index){
    slides.forEach((slide,i)=>{
        slide.classList.remove('active');
        if(i === index) slide.classList.add('active');
    });
}

function nextSlide(){
    current = (current + 1) % slides.length;
    showSlide(current);
}

// Change slide every 5 seconds
setInterval(nextSlide, 2500);
