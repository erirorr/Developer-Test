//Ввод только цифр 
$('body').on('input', '#only_number', function() {
	this.value = this.value.replace(/[^0-9]/g, '');
});
//Ввод только кириллицы
$('body').on('input', '#only_letters', function() {
	this.value = this.value.replace(/[^а-яё\s]/gi, '');
});
//Слайдер
$(document).ready(function() {
	$('.slider').slick({
		arrows: true, //Отключить или включить стрелки
		dots: true, //Точки
		slidesToShow: 1, //Сколько каринок будет отображаться за раз
		slidesToScroll: 1, //Количество слайдов при скролле
		speed: 1000, //Скорость скролла (По дефолту 300ms)
		easing: 'ease', //Характер анимации скрола, cssEase
		autoplaySpeed: 4000, //Скорость скролла (если только он сам листается (по дефолту 3 секунды))
		infinite: true, //Бесконечность слайдера
		initialSlide: 0, //С какого слайда будет начинаться
		autoplay: true, //Сам листается 
		pauseOnFocus: false, //Когда кликнул на слайдер, пауза скролла
		pauseOnHover: false, //Когда навелся на слайдер, пауза скролла
		draggable: false, //Скролл слайдов мышкой перетягиванием
		swipe: true, //Скролл слайдов пальцем перетягиванием
		waitForAnimate: true, //Запрет на спам слайдера
		rows: 1, //Количество рядов в слайде
		slidesPerRow: 1, //Количество слайдов в ряду
		//data-lazy -вместо scr в HTML (Для повышения скорости загрузки)
		responsive: [ //Адаптив через брекпоинты
				{
					breakpoint: 376,
					settings: {
						slidesToShow: 1,
						autoplay: true,
						speed: 1000,
						pauseOnFocus: false,
						pauseOnHover: false,
						arrows: false
					}
				}
			]
			//
	});
});