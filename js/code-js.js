/*slider-in-documents*/
$('.clients-item').slick(
    {
        infinite: true,
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: "<p class='documents-slider-btn-prev'>",
        nextArrow: "<p class='documents-slider-btn-next'>",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 905,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

/*burger*/


let menuBtnOne = document.querySelector('.menu-btn');
let menuContainer = document.querySelector('.menu-container');
menuBtnOne.addEventListener('click', function () {
    menuContainer.classList.toggle('active');
})


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

