
  // !  carousel slider
(function() {
    let $slides = document.querySelectorAll('.slide');
    let $controls = document.querySelectorAll('.slider__control');
    let numOfSlides = $slides.length;
    let slidingAT = 1000; // sync this with scss letiable
    let slidingBlocked = false;
  
    [].slice.call($slides).forEach(function($el, index) {
      let i = index + 1;
      $el.classList.add('slide-' + i);
      $el.dataset.slide = i;
    });
  
    [].slice.call($controls).forEach(function($el) {
      $el.addEventListener('click', controlClickHandler);
    });
  
    function controlClickHandler() {
      if (slidingBlocked) return;
      slidingBlocked = true;
  
      let $control = this;
      let isRight = $control.classList.contains('m--right');
      let $curActive = document.querySelector('.slide.s--active');
      let index = +$curActive.dataset.slide;
      (isRight) ? index++ : index--;
      if (index < 1) index = numOfSlides;
      if (index > numOfSlides) index = 1;
      let $newActive = document.querySelector('.slide-' + index);
  
      $control.classList.add('a--rotation');
      $curActive.classList.remove('s--active', 's--active-prev');
      document.querySelector('.slide.s--prev').classList.remove('s--prev');
      
      $newActive.classList.add('s--active');
      if (!isRight) $newActive.classList.add('s--active-prev');
      
  
      let prevIndex = index - 1;
      if (prevIndex < 1) prevIndex = numOfSlides;
  
      document.querySelector('.slide-' + prevIndex).classList.add('s--prev');
  
      setTimeout(function() {
        $control.classList.remove('a--rotation');
        slidingBlocked = false;
      }, slidingAT*0.10);
    };
  }());

  // !  carousel slider



// !  tv slider


  let currentPosition = 0;
const slides = document.querySelectorAll('.sslide');
const slidesCount = slides.length;
const slidesPerPage = Math.floor(document.querySelector('.slider-container').offsetWidth / slides[0].offsetWidth);
const slider = document.querySelector('.sliders');
const leftButton = document.querySelector('.slider-btn.left');
const rightButton = document.querySelector('.slider-btn.right');

function updateButtons() {
    leftButton.disabled = currentPosition === 0;
    rightButton.disabled = currentPosition >= slidesCount - slidesPerPage;
}

function slideLeft() {
    if (currentPosition > 0) {
        currentPosition--;
        slider.style.marginLeft = -currentPosition * 170 + 'px'; // 150px (slide width) + 10px (margin) = 160px
        updateButtons();
    }
}

function slideRight() {
    if (currentPosition < slidesCount - slidesPerPage) {
        currentPosition++;
        slider.style.marginLeft = -currentPosition * 170 + 'px'; // 150px (slide width) + 10px (margin) = 160px
        updateButtons();
    }
}

updateButtons();

// !  tv slider


// !  movie slider

let currentPosition2 = 0;
const slides2 = document.querySelectorAll('.slide2');
const slidesCount2 = slides2.length;
const slider2 = document.querySelector('.slider2');
const leftButton2 = document.querySelector('.slider-btn2.left2');
const rightButton2 = document.querySelector('.slider-btn2.right2');

let slidesPerPage2 = 4; // Default number of slides visible at a time
let slideWidth2 = 368; // Default slide width (300px slide width + 10px margin on each side)


function updateSlidesPerPage1() {
    if (window.innerWidth <= 480) {
        slidesPerPage2 = 1;
        slideWidth2 = 380; // Adjust for smaller screens if needed
    } else if (window.innerWidth <= 768) {
        slidesPerPage2 = 1;
        slideWidth2 = 335; // Adjust for tablets if needed
    } else {
        slidesPerPage2 = 4;
        slideWidth2 = 368; // Default value for larger screens
    }
}

function updateButtons2() {
    leftButton2.disabled = currentPosition2 === 0;
    rightButton2.disabled = currentPosition2 >= slidesCount2 - slidesPerPage2;
}

function slideLeft2() {
    if (currentPosition2 > 0) {
        currentPosition2 -= slidesPerPage2;
        if (currentPosition2 < 0) {
            currentPosition2 = 0;
        }
        slider2.style.marginLeft = -currentPosition2 * 368 + 'px'; // 300px (slide width) + 10px (margin) = 310px
        updateButtons2();
    }
}

function slideRight2() {
    if (currentPosition2 < slidesCount2 - slidesPerPage2) {
        currentPosition2 += slidesPerPage2;
        if (currentPosition2 > slidesCount2 - slidesPerPage2) {
            currentPosition2 = slidesCount2 - slidesPerPage2;
        }
        slider2.style.marginLeft = -currentPosition2 * 368 + 'px'; // 300px (slide width) + 10px (margin) = 310px
        updateButtons2();
    }
}


function handleResize2() {
    updateSlidesPerPage1();
    updateButtons2();
    slider2.style.marginLeft = -currentPosition2 * slideWidth2 +  'px';
}

window.addEventListener('resize', handleResize2);

// Initial setup
updateSlidesPerPage1();

updateButtons2();

// !  movie slider


// !  aksiyon slider

let currentPosition3 = 0;
const slides3 = document.querySelectorAll('.slide3');
const slidesCount3 = slides3.length;
const slider3 = document.querySelector('.slider3');
const leftButton3 = document.querySelector('.slider-btn3.left3');
const rightButton3 = document.querySelector('.slider-btn3.right3');

let slidesPerPage3 = 4; // Default number of slides visible at a time
let slideWidth3 = 368; // Default slide width (300px slide width + 10px margin on each side)

function updateSlidesPerPage() {
    if (window.innerWidth <= 480) {
        slidesPerPage3 = 1;
        slideWidth3 = 380; // Adjust for smaller screens if needed
    } else if (window.innerWidth <= 768) {
        slidesPerPage3 = 1;
        slideWidth3 = 335; // Adjust for tablets if needed
    } else {
        slidesPerPage3 = 4;
        slideWidth3 = 368; // Default value for larger screens
    }
}

function updateButtons3() {
    leftButton3.disabled = currentPosition3 === 0;
    rightButton3.disabled = currentPosition3 >= slidesCount3 - slidesPerPage3;
}

function slideLeft3() {
    if (currentPosition3 > 0) {
        currentPosition3 -= slidesPerPage3;
        if (currentPosition3 < 0) {
            currentPosition3 = 0;
        }
        slider3.style.marginLeft = -currentPosition3 * slideWidth3 + 'px';
        updateButtons3();
    }
}

function slideRight3() {
    if (currentPosition3 < slidesCount3 - slidesPerPage3) {
        currentPosition3 += slidesPerPage3;
        if (currentPosition3 > slidesCount3 - slidesPerPage3) {
            currentPosition3 = slidesCount3 - slidesPerPage3;
        }
        slider3.style.marginLeft = -currentPosition3 * slideWidth3 +  'px';
        updateButtons3();
    }
}

function handleResize() {
    updateSlidesPerPage();
    updateButtons3();
    slider3.style.marginLeft = -currentPosition3 * slideWidth3 +  'px';
}

window.addEventListener('resize', handleResize);

// Initial setup
updateSlidesPerPage();
updateButtons3();





// !  movie slider


