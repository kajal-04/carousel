let slidePosition = 0;
const sliderItem = document.querySelectorAll('.js-slider-item');
const totalSlider = sliderItem.length;

updatePosition = (previousSlidePosition) => {
    dots.forEach(dot => dot.classList.remove('js-dot-active'));
    dots[slidePosition].classList.add('js-dot-active');

    const sliderImage = document.querySelectorAll('.js-slider-image');
    sliderImage.forEach(image => {
        image.classList.remove('js-image-fade-in');
        image.classList.add('js-image-fade-out');
    })
    sliderImage[slidePosition].classList.remove('js-image-fade-out');
    sliderImage[slidePosition].classList.add('js-image-fade-in');

    positionSlider();
    slideAnimation(previousSlidePosition);
}

slideAnimation = (previousSlidePosition) => {
    sliderItem.forEach((item) => {
        const classList = item.classList;
        classList.remove('js-slide-left', 'js-slide-right', 'js-slide-left-to-right', 'js-slide-right-to-left');
    })
    
    if (previousSlidePosition === slidePosition) return;
    else if(previousSlidePosition > slidePosition) {
        sliderItem[slidePosition].classList.add('js-slide-left-to-right');
        sliderItem[previousSlidePosition].classList.add('js-slide-right');
    } else if(previousSlidePosition < slidePosition) {
        sliderItem[slidePosition].classList.add('js-slide-right-to-left');
        sliderItem[previousSlidePosition].classList.add('js-slide-left');
    }
}

positionSlider = () => {
    sliderItem.forEach((item, index) => {
        if(slidePosition == index) {
            item.style.transform = "translateX(0%)";
        } else {
            item.style.transform = index < slidePosition ? `translateX(-100%)` : `translateX(100%)`;
        }
    });
}

const dotContainer = document.querySelector('.js-slider-indicator');
const imageContainer = document.querySelector('.js-image-container');

sliderItem.forEach((slide, index) => {
    const dot = document.createElement('li');
    dot.classList.add('js-indicator-dot');
    dotContainer.appendChild(dot);

    const img = document.createElement('img');
    img.classList.add('js-slider-image');
    img.src=`assets/carousel-${index}.png`;
    imageContainer.appendChild(img);
});

const dots = document.querySelectorAll('.js-indicator-dot');
dots[slidePosition].classList.add('js-dot-active');

dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
        let previousSlidePosition = slidePosition;
        slidePosition = index;
        updatePosition(previousSlidePosition);
    });
});

updatePosition();
