let currentSlide = 0;

function slideLeft() {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;
    if (currentSlide > 0) {
        currentSlide--;
        slides.style.marginLeft = `-${currentSlide * (slideWidth + 22)}px`;
    }
    updateDots();
    updateButtons();
}

function slideRight() {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;
    const totalSlides = document.querySelectorAll('.slide').length;
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        slides.style.marginLeft = `-${currentSlide * (slideWidth + 22)}px`;
    }
    updateDots();
    updateButtons();
}

function updateDots() {
    const dots = document.querySelectorAll('.dots button');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function updateButtons() {
    const totalSlides = document.querySelectorAll('.slide').length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide >= totalSlides - 4; // Disable next button if we are at or beyond totalSlides - 4
}



// * blu tv content start

let currentSlide2 = 0;

function slideLeft2() {
    const slides2 = document.querySelector('.slides2');
    const slideWidth2 = document.querySelector('.slide2').clientWidth;
    if (currentSlide2 > 0) {
        currentSlide2--;
        slides2.style.marginLeft = `-${currentSlide2 * (slideWidth2 + 22)}px`;
    }
    // updateDots2();
    updateButtons2();
}

function slideRight2() {
    const slides2 = document.querySelector('.slides2');
    const slideWidth2 = document.querySelector('.slide2').clientWidth;
    const totalSlides2 = document.querySelectorAll('.slide2').length;
    if (currentSlide2 < totalSlides2 - 4) {
        currentSlide2++;
        slides2.style.marginLeft = `-${currentSlide2 * (slideWidth2 + 22)}px`;
    }
    updateButtons2();
    
}



function updateButtons2() {
    const totalSlides2 = document.querySelectorAll('.slide2').length;
    const prevButton2 = document.querySelector('.prev2');
    const nextButton2 = document.querySelector('.next2');
    
    prevButton2.disabled = currentSlide2 === 0;
    nextButton2.disabled = currentSlide2 >= totalSlides2 - 4; // Disable next button if we are at or beyond totalSlides - 4
}



function showCategory(category) {
    const tabs2 = document.querySelectorAll('.tablink2');
    tabs2.forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.tablink2[onclick="showCategory('${category}')"]`).classList.add('active');
    // Add logic to filter the slides based on the selected category
}


//* blu tv content finish



document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});