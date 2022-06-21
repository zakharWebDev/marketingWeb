$(function () {
    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/arrow-right.svg"></button>',
        responsive: [
            {
                breakpoint: 1540,
                settings: {
                  arrows: false,
                }
              },
        ]
    });
    $('[data-fancybox]').fancybox({
        toolbar  : false,
        smallBtn : true,
        iframe : {
            preload : false
        }
    });
    
    // menu click
    $('.menu__btn, .menu a').on('click', function (){
        $('ul.menu__list').toggleClass('active');
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });



    
    const mixer = mixitup('.portfolio__content', {
        animation: {
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
        }
    });
    // Плавный скролл
    $("#menu a, .footer__go-top").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

