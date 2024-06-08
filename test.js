let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');

    if (index >= dots.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = dots.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 / dots.length;
    carousel.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function currentSlide(index) {
    showSlide(index - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});
