$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  });
});


{/* <div class="slider">
<div class="slider__item"><img class="slider__image" src="img/portfolio/slider-1.jpg" alt="Картинка"></div>
<!-- /.slider__item -->
<div class="slider__item"><img class="slider__image" src="img/portfolio/slider-2.jpg" alt="Картинка"></div>
<!-- /.slider__item -->
<div class="slider__item"><img class="slider__image" src="img/portfolio/slider-3.jpg" alt="Картинка"></div>
<!-- /.slider__item -->
<div class="slider__item"><img class="slider__image" src="img/portfolio/slider-1.jpg" alt="Картинка"></div>
<!-- /.slider__item -->
<div class="slider__item"><img class="slider__image" src="img/portfolio/slider-2.jpg" alt="Картинка"></div>
<!-- /.slider__item -->
<div class="slider__item"><img class="slider__image" src="img/portfolio/slider-3.jpg" alt="Картинка"></div>
<!-- /.slider__item -->
</div>

<div class="arrows portfolio__arrows">
<div class="arrows__left">
  <img src="img/portfolio/left-arrow.png" alt="">
</div>
<div class="arrows__right">
  <img src="img/portfolio/right-arrow.png" alt="">
</div>
</div>
<!-- /.slider -->  */}