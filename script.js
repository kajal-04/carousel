let slidePosition = 0;
const sliders = document.querySelectorAll('.slider-item');
const imageContainer = document.querySelectorAll('.image-container');
const sliderContent = document.querySelectorAll('.slider-content');
const totalSlider = sliders.length;
// const btnPrev = document.querySelector('#btn-prev');
// const btnNext = document.querySelector('#btn-next');

// btnPrev.addEventListener('click', function () {
//     PrevSlide();
// });
// btnNext.addEventListener('click', function () {
//     NextSlide();
// })

function updatePosition() {
    sliders.forEach(slide => {
        // console.log("slides", slide);
        // slide.classList.remove('active');
        // slide.classList.add('hidden');
    });

    imageContainer.forEach(image => {
        console.log("image", image); 
        image.classList.remove('imageFadeIn');
        image.classList.add('imageFadeOut');
    })
    imageContainer[slidePosition].classList.remove('imageFadeOut');
    imageContainer[slidePosition].classList.add('imageFadeIn');

    sliderContent.forEach(slide => {
        slide.classList.remove('slideIn');
        slide.classList.add('slideOut');
    })
    sliderContent[slidePosition].classList.remove('slideOut');
    sliderContent[slidePosition].classList.add('slideIn');
    // sliders[slidePosition].classList.add('active');

    dots.forEach(dot => {
        dot.classList.remove('dot-active');
    });

    dots[slidePosition].classList.add('dot-active');
}

// function PrevSlide() {
//     if (slidePosition == 0) {
//         slidePosition = totalSlider - 1;
//     } else {
//         slidePosition--;
//     }
//     updatePosition();
// }
// function NextSlide() {
//     if (slidePosition == totalSlider - 1) {
//         slidePosition = 0;
//     } else {
//         slidePosition++;
//     }
//     updatePosition();
// }


const dotContainer = document.querySelector('.dots');
sliders.forEach(slide => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
dots[slidePosition].classList.add('dot-active');

dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
        slidePosition = index;
        updatePosition();
    });
});

imageContainer.forEach((image, index) => {
    const img = document.createElement('img');
    img.classList.add('slider-image');
    img.src=`assets/carousel-${index}.png`;
    image.appendChild(img);
});

        updatePosition();

// setInterval(()=>{
//   if(slidePosition==totalSlider-1){
//     slidePosition=0;
//   }else{
//     slidePosition++;
//   }
//   updatePosition();
// },5000);
