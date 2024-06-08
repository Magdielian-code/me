
let currentIndex = 0;
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel-item');
let dots = document.querySelectorAll('.dot');

function updateCarousel() {
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(${-currentIndex * 100 / items.length}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function showSlide(index) {
    currentIndex = (index + items.length) % items.length;
    updateCarousel();
}

function currentSlide(index) {
    currentIndex = index;
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();

    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 3000);
});

carousel.addEventListener('transitionend', () => {
    if (currentIndex === items.length) {
        carousel.style.transition = 'none';
        currentIndex = 0;
        carousel.style.transform = `translateX(0%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 50);
    } else if (currentIndex < 0) {
        carousel.style.transition = 'none';
        currentIndex = items.length - 1;
        carousel.style.transform = `translateX(${-currentIndex * 100 / items.length}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 50);
    }
});