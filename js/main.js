// ! Кнопки header
$('.menu-mobile__btn').on('click', function () {
	$('.menu-mobile__container').toggleClass('menu-mobile__container_active');
});
$('.menu-mobile__header-close').on('click', function () {
	$('.menu-mobile__container').toggleClass('menu-mobile__container_active');
});
$('.menu-mobile__catalog').on('click', function () {
	$('.menu-mobile__catalog-wrapper').toggleClass('menu-mobile__catalog-wrapper_active');
});
$('.menu-mobile__catalog-back').on('click', function () {
	$('.menu-mobile__catalog-wrapper').toggleClass('menu-mobile__catalog-wrapper_active');
});
$('.menu-mobile__catalog-close').on('click', function () {
	$('.menu-mobile__catalog-wrapper').toggleClass('menu-mobile__catalog-wrapper_active');
	$('.menu-mobile__container').toggleClass('menu-mobile__container_active');
});
$('.menu-mobile__desc-btn').on('click', function () {
	$('.menu-mobile__desc-btn').toggleClass('menu-mobile__desc-btn_active');
	$('.menu-mobile__btn-wrapper').toggleClass('menu-mobile__btn-wrapper_active');
	$('.menu-mobile__catalog-list').toggleClass('menu-mobile__catalog-list_active');
});
$('.menu-mobile__questions').on('click', function () {
	$('.menu-mobile__questions-wrapper').toggleClass('menu-mobile__questions-wrapper_active');
});
$('.menu-mobile__lang-btn-geo').on('click', function () {
	$('.menu-mobile__lang-list').toggleClass('menu-mobile__lang-list_active');
});
$('.menu-mobile__currency-btn-gel').on('click', function () {
	$('.menu-mobile__currency-list').toggleClass('menu-mobile__currency-list_active');
});
$('.menu-mobile__questions-btn-ask').on('click', function () {
	$('.menu-mobile__questions-list').toggleClass('menu-mobile__questions-list_active');
});
$('.menu-mobile__favorites').on('click', function () {
	$('.products').toggleClass('products_active');
	$('.background').toggleClass('background_block');
	setTimeout(function () {
		$('.background').toggleClass('background_show');
	}, 1);
});
$('.products__header-close').on('click', function () {
	$('.products').toggleClass('products_active');
	$('.background').removeClass('background_block');
	$('.background').removeClass('background_show');
});
$('.menu-mobile__search').on('click', function () {
	$('.search-results').toggleClass('search-results_active');
	$('.background').toggleClass('background_block');
	setTimeout(function () {
		$('.background').toggleClass('background_show-search');
	}, 1);
	
});
function topCalc() {
	let searchTop = document.querySelector('.header-bot').getBoundingClientRect()
	let searchEl = document.querySelector('.search-results_active');
}
$('.menu-mobile__search-btn').on('click', function () {
	$('.search-results').toggleClass('search-results_active');
	$('.background').toggleClass('background_block');
	setTimeout(function () {
		$('.background').toggleClass('background_show');
	}, 1);
});
$('.background').on('click', function () {
	$('.background').removeClass('background_block');
	$('.background').removeClass('background_show');
	$('.background').removeClass('background_show-search');
	$('.search-results').removeClass('search-results_active');
	$('.products').removeClass('products_active');
	$('.add-to').removeClass('add-to_active');
	$('.login').removeClass('login_active');
});
$('.products__btn-pack1').on('click', function () {
	$('.drop-down__pack-wrapper1').toggleClass('drop-down__pack-wrapper1_active');
});
$('.products__btn-pack2').on('click', function () {
	$('.drop-down__pack-wrapper2').toggleClass('drop-down__pack-wrapper2_active');
});
$('.drop-down__btn1').on('click', function () {
	$('.drop-down__qty1').toggleClass('drop-down__qty1_active');
});
$('.drop-down__btn2').on('click', function () {
	$('.drop-down__qty2').toggleClass('drop-down__qty2_active');
});
$('.drop-down__btn3').on('click', function () {
	$('.drop-down__qty3').toggleClass('drop-down__qty3_active');
});
$('.drop-down__btn4').on('click', function () {
	$('.drop-down__qty4').toggleClass('drop-down__qty4_active');
});

$('.main-card__btn').on('click', function () {
	$('.add-to').addClass('add-to_active');
	$('.background').toggleClass('background_block');
	setTimeout(function () {
		$('.background').toggleClass('background_show');
	}, 1);
});

$('.add-to__close').on('click', function () {
	$('.add-to').removeClass('add-to_active');
	$('.background').removeClass('background_block');
	$('.background').removeClass('background_show');
});

$('.menu-mobile__user-account, .menu-desc__user-account').on('click', function () {
	$('.login').toggleClass('login_active');
	$('.background').toggleClass('background_block');
	setTimeout(function () {
		$('.background').toggleClass('background_show');
	}, 1);
});

$('.login__head-close').on('click', function () {
	$('.login').removeClass('login_active');
	$('.background').removeClass('background_block');
	$('.background').removeClass('background_show');
	$('.background').removeClass('background_show-search');
});
$('.login__guest').on('click', function () {
	$('.registration').addClass('registration_active');
});

$('.registration__head-back').on('click', function () {
	$('.registration').removeClass('registration_active');
});
$('.registration__head-close').on('click', function () {
	$('.background').removeClass('background_block');
	$('.background').removeClass('background_show');
	$('.background').removeClass('background_show-search');
	$('.registration').removeClass('registration_active');
	$('.login').removeClass('login_active');
});
// ! Кнопки QTY - popup

// * QTY1
$('.drop-down__btn11').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn11').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item1').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty11').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty1').removeClass('drop-down__qty1_active');
	$('.drop-down__btn-qty20, .drop-down__btn-qty30, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn12').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn12').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item1').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty12').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty1').removeClass('drop-down__qty1_active');
	$('.drop-down__btn-qty20, .drop-down__btn-qty30, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn13').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn13').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item1').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty13').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty1').removeClass('drop-down__qty1_active');
	$('.drop-down__btn-qty20, .drop-down__btn-qty30, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn14').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn14').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item1').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty14').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty1').removeClass('drop-down__qty1_active');
	$('.drop-down__btn-qty20, .drop-down__btn-qty30, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');

});

// * QTY2
$('.drop-down__btn21').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn21').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item2').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty21').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty2').removeClass('drop-down__qty2_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty30, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn22').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn22').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item2').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty22').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty2').removeClass('drop-down__qty2_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty30, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn23').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn23').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item2').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty23').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty2').removeClass('drop-down__qty2_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty30, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn24').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn24').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item2').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty24').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty2').removeClass('drop-down__qty2_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty30, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});

// * QTY3
$('.drop-down__btn31').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn31').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item3').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty31').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty3').removeClass('drop-down__qty3_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty20, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn32').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn32').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item3').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty32').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty3').removeClass('drop-down__qty3_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty20, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn33').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn33').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item3').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty33').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty3').removeClass('drop-down__qty3_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty20, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn34').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn34').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item3').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty34').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty3').removeClass('drop-down__qty3_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty20, .drop-down__btn-qty40').addClass('drop-down__btn-qty_active');
});

// * QTY4
$('.drop-down__btn41').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn41').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item4').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty41').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty4').removeClass('drop-down__qty4_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty20, .drop-down__btn-qty30').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn42').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn42').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item4').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty42').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty4').removeClass('drop-down__qty4_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty20, .drop-down__btn-qty30').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn43').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn43').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item4').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty43').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty4').removeClass('drop-down__qty4_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty20, .drop-down__btn-qty30').addClass('drop-down__btn-qty_active');
});
$('.drop-down__btn44').on('click', function () {
	$('.drop-down__btn').removeClass('drop-down__btn_active');
	$('.drop-down__btn44').addClass('drop-down__btn_active');
	$('.pack__item').removeClass('pack__item-active');
	$('.pack__item4').addClass('pack__item-active');
	$('.drop-down__btn-qty').removeClass('drop-down__btn-qty_active');
	$('.drop-down__btn-qty44').addClass('drop-down__btn-qty_active');
	$('.drop-down__qty4').removeClass('drop-down__qty4_active');
	$('.drop-down__btn-qty10, .drop-down__btn-qty20, .drop-down__btn-qty30').addClass('drop-down__btn-qty_active');
});


// ! Кнопки QTY - bag



// ! Кнопки information

$('.inform-nav__list-btn1').on('click', function () {
	$('.inform-nav__list-item').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list-item1').addClass('inform-nav__list-item--active');
	$('.inform-nav__list').toggleClass('inform-nav__list_active');
	$('.inform').removeClass('inform__active');
	$('.inform__privacy').addClass('inform__active');
});
$('.inform-nav__list-btn2').on('click', function () {
	$('.inform-nav__list-item').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list-item2').addClass('inform-nav__list-item--active');
	$('.inform-nav__list').toggleClass('inform-nav__list_active');
	$('.inform').removeClass('inform__active');
	$('.inform__faq').addClass('inform__active');
});
$('.inform-nav__list-btn3').on('click', function () {
	$('.inform-nav__list-item').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list-item3').addClass('inform-nav__list-item--active');
	$('.inform-nav__list').toggleClass('inform-nav__list_active');
	$('.inform').removeClass('inform__active');
	$('.inform__contacts').addClass('inform__active');
});
$('.inform-nav__list-btn4').on('click', function () {
	$('.inform-nav__list-item').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list-item4').addClass('inform-nav__list-item--active');
	$('.inform-nav__list').toggleClass('inform-nav__list_active');
	$('.inform').removeClass('inform__active');
	$('.inform__privat').addClass('inform__active');
});
$('.inform-nav__list-btn5').on('click', function () {
	$('.inform-nav__list-item').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list-item5').addClass('inform-nav__list-item--active');
	$('.inform-nav__list').toggleClass('inform-nav__list_active');
	$('.inform').removeClass('inform__active');
	$('.inform__privat').addClass('inform__active');
});
$('.inform-nav__list-btn6').on('click', function () {
	$('.inform-nav__list-item').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list').removeClass('inform-nav__list-item--active');
	$('.inform-nav__list-item6').addClass('inform-nav__list-item--active');
	$('.inform-nav__list').toggleClass('inform-nav__list_active');
	$('.inform').removeClass('inform__active');
	$('.inform__privat').addClass('inform__active');
});
$('.faq-content__head1').on('click', function () {
	$('.faq-content__list1').toggleClass('faq-content__list_active');
});
$('.faq-content__head2').on('click', function () {
	$('.faq-content__list2').toggleClass('faq-content__list_active');
});
$('.faq-content__head3').on('click', function () {
	$('.faq-content__list3').toggleClass('faq-content__list_active');
});
$('.faq-content__head4').on('click', function () {
	$('.faq-content__list4').toggleClass('faq-content__list_active');
});
$('.faq-content__head5').on('click', function () {
	$('.faq-content__list5').toggleClass('faq-content__list_active');
});
$('.faq-content__head6').on('click', function () {
	$('.faq-content__list6').toggleClass('faq-content__list_active');
});

// ! Кнопки footer
$('.footer-nav__title1').on('click', function () {
	$('.footer-nav__list1').toggleClass('footer-nav__list1_active');
	$('.footer-nav__title1').toggleClass('footer-nav__title1_active');
	$('.footer-nav__list2').removeClass('footer-nav__list2_active');
	$('.footer-nav__list3').removeClass('footer-nav__list3_active');
	$('.footer-nav__title2').removeClass('footer-nav__title2_active');
	$('.footer-nav__title3').removeClass('footer-nav__title3_active');
});
$('.footer-nav__title2').on('click', function () {
	$('.footer-nav__list2').toggleClass('footer-nav__list2_active');
	$('.footer-nav__title2').toggleClass('footer-nav__title2_active');
	$('.footer-nav__list1').removeClass('footer-nav__list1_active');
	$('.footer-nav__list3').removeClass('footer-nav__list3_active');
	$('.footer-nav__title1').removeClass('footer-nav__title1_active');
	$('.footer-nav__title3').removeClass('footer-nav__title3_active');
});
$('.footer-nav__title3').on('click', function () {
	$('.footer-nav__list3').toggleClass('footer-nav__list3_active');
	$('.footer-nav__title3').toggleClass('footer-nav__title3_active');
	$('.footer-nav__list1').removeClass('footer-nav__list1_active');
	$('.footer-nav__list2').removeClass('footer-nav__list2_active');
	$('.footer-nav__title1').removeClass('footer-nav__title1_active');
	$('.footer-nav__title2').removeClass('footer-nav__title2_active');
});

// ! Наведение на элементы мобильного каталога
$('.menu-mobile__catalog-item-text1').on('mouseover', function () {
	$('.menu-mobile__catalog-list-strong').addClass('menu-mobile__catalog-list-strong_active');
});
$('.menu-mobile__catalog-item-text2').on('mouseover', function () {
	$('.menu-mobile__catalog-list-sativa').addClass('menu-mobile__catalog-list-sativa_active');
});
$('.menu-mobile__catalog-item-text3').on('mouseover', function () {
	$('.menu-mobile__catalog-list-indica').addClass('menu-mobile__catalog-list-indica_active');
});
$('.menu-mobile__catalog-item-text4').on('mouseover', function () {
	$('.menu-mobile__catalog-list-medical').addClass('menu-mobile__catalog-list-medical_active');
});
$('.menu-mobile__catalog-item-text5').on('mouseover', function () {
	$('.menu-mobile__catalog-list-autoflowering').addClass('menu-mobile__catalog-list-autoflowering_active');
});
$('.menu-mobile__catalog-item-text6').on('mouseover', function () {
	$('.menu-mobile__catalog-list-feminesed').addClass('menu-mobile__catalog-list-feminesed_active');
});
$('.menu-mobile__catalog-item-text7').on('mouseover', function () {
	$('.menu-mobile__catalog-list-auto').addClass('menu-mobile__catalog-list-auto_active');
});
$('.menu-mobile__catalog-item-text8').on('mouseover', function () {
	$('.menu-mobile__catalog-list-less').addClass('menu-mobile__catalog-list-less_active');
});
$('.menu-mobile__catalog-item-text9').on('mouseover', function () {
	$('.menu-mobile__catalog-list-accesories').addClass('menu-mobile__catalog-list-accesories_active');
});
$('.menu-mobile__subcatalog-btn').on('click', function () {
	$('.menu-mobile__catalog-list-strong').removeClass('menu-mobile__catalog-list-strong_active');
	$('.menu-mobile__catalog-list-sativa').removeClass('menu-mobile__catalog-list-sativa_active');
	$('.menu-mobile__catalog-list-indica').removeClass('menu-mobile__catalog-list-indica_active');
	$('.menu-mobile__catalog-list-medical').removeClass('menu-mobile__catalog-list-medical_active');
	$('.menu-mobile__catalog-list-autoflowering').removeClass('menu-mobile__catalog-list-autoflowering_active');
	$('.menu-mobile__catalog-list-feminesed').removeClass('menu-mobile__catalog-list-feminesed_active');
	$('.menu-mobile__catalog-list-auto').removeClass('menu-mobile__catalog-list-auto_active');
	$('.menu-mobile__catalog-list-less').removeClass('menu-mobile__catalog-list-less_active');
	$('.menu-mobile__catalog-list-accesories').removeClass('menu-mobile__catalog-list-accesories_active');
});

// ! Кнопки каталога
$('.shop-menu__sort-btn1').on('click', function () {
	$('.shop-menu__sort-list').toggleClass('shop-menu__sort-list_active');
	$('.shop-menu__sort-item2').removeClass('shop-menu__sort-item2_active');
	$('.shop-menu__sort-item3').removeClass('shop-menu__sort-item3_active');
	$('.shop-menu__sort-item1').addClass('shop-menu__sort-item1_active');
});
$('.shop-menu__sort-btn2').on('click', function () {
	$('.shop-menu__sort-list').toggleClass('shop-menu__sort-list_active');
	$('.shop-menu__sort-item1').removeClass('shop-menu__sort-item1_active');
	$('.shop-menu__sort-item3').removeClass('shop-menu__sort-item3_active');
	$('.shop-menu__sort-item2').addClass('shop-menu__sort-item2_active');
});
$('.shop-menu__sort-btn3').on('click', function () {
	$('.shop-menu__sort-list').toggleClass('shop-menu__sort-list_active');
	$('.shop-menu__sort-item1').removeClass('shop-menu__sort-item1_active');
	$('.shop-menu__sort-item2').removeClass('shop-menu__sort-item2_active');
	$('.shop-menu__sort-item3').addClass('shop-menu__sort-item3_active');
});
$('.shop-answers__item-btn1').on('click', function () {
	$('.shop-answers__list1').toggleClass('shop-answers__list1_active');
	$('.shop-answers__item-btn1').toggleClass('shop-answers__item-btn1_active');
	$('.shop-answers__item-btn2').removeClass('shop-answers__item-btn2_active');
	$('.shop-answers__item-btn3').removeClass('shop-answers__item-btn3_active');
	$('.shop-answers__list2').removeClass('shop-answers__list2_active');
	$('.shop-answers__list3').removeClass('shop-answers__list3_active');
});
$('.shop-answers__item-btn2').on('click', function () {
	$('.shop-answers__list2').toggleClass('shop-answers__list2_active');
	$('.shop-answers__item-btn2').toggleClass('shop-answers__item-btn2_active');
	$('.shop-answers__item-btn1').removeClass('shop-answers__item-btn1_active');
	$('.shop-answers__item-btn3').removeClass('shop-answers__item-btn3_active');
	$('.shop-answers__list1').removeClass('shop-answers__list1_active');
	$('.shop-answers__list3').removeClass('shop-answers__list3_active');
});
$('.shop-answers__item-btn3').on('click', function () {
	$('.shop-answers__list3').toggleClass('shop-answers__list3_active');
	$('.shop-answers__item-btn3').toggleClass('shop-answers__item-btn3_active');
	$('.shop-answers__item-btn1').removeClass('shop-answers__item-btn1_active');
	$('.shop-answers__item-btn2').removeClass('shop-answers__item-btn2_active');
	$('.shop-answers__list1').removeClass('shop-answers__list1_active');
	$('.shop-answers__list2').removeClass('shop-answers__list2_active');
});
$('.shop-menu__filters-btn').on('click', function () {
	$('.filter').toggleClass('filter_active');
});
$('.filter__header-btn').on('click', function () {
	$('.filter').removeClass('filter_active');
});
$('.filter__chapter-btn1').on('click', function () {
	$('.filter__chapter-form1').toggleClass('filter__chapter-form1_active');
});
$('.filter__chapter-btn2').on('click', function () {
	$('.filter__chapter-form2').toggleClass('filter__chapter-form2_active');
});
$('.filter__chapter-btn3').on('click', function () {
	$('.filter__chapter-form3').toggleClass('filter__chapter-form3_active');
});

// ! Переключатель карточек
let postsHolder = $('.main-card__wrapper');
$('.switcher__tile').on('click', function () {
	$(this).addClass('switcher__item_active'),
		$('.switcher__row').removeClass('switcher__item_active'),
		postsHolder.addClass('main-card__wrapper-tile'),
		postsHolder.removeClass('main-card__wrapper-row');
});
$('.switcher__row').on('click', function () {
	$(this).addClass('switcher__item_active'),
		$('.switcher__tile').removeClass('switcher__item_active'),
		postsHolder.addClass('main-card__wrapper-row'),
		postsHolder.removeClass('main-card__wrapper-tile');
});

// ! Чекбоксы
$(document).ready(function () {
	$.each($('.filter__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('filter__item_active');
		}
	});
	$(document).on('click', '.filter__item', function (event) {
		if ($(this).hasClass('filter__item_active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('filter__item_active');
		return false;
	});
});

// ! Swiper main page
const topSlider = new Swiper('.top__slider', {
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 40,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	navigation: {
		nextEl: '.top__slider-next',
		prevEl: '.top__slider-prev',
	},
});

const most = new Swiper('.most__slider', {
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 20,

});
const accesories = new Swiper('.accesories__slider', {
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 17,
	breakpoints: {
		1280: {
			slidesPerView: 'auto',
			loop: true,
			spaceBetween: 30
		}
	}
});
const stories = new Swiper('.stories__slider', {
	slidesPerView: 'auto',
	freeMode: true,
	spaceBetween: 0,
	breakpoints: {
		1280: {
			freeMode: false,
			loop: true,
		}
	}
});

// ! Swiper catalog

const shopRewiews = new Swiper('.shop-rewiews', {
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 10,
	breakpoints: {
		1280: {
			slidesPerView: 'auto',
			loop: true,
			spaceBetween: 40
		}
	}
});

// ! Swiper commodity
const commodity = new Swiper('.commodity__slider', {
	slidesPerView: 'auto',
	loop: true,
	horizontalClass: '.commodity__pagination-bullets',
	slidePrevClass: 'commodity__slide-active',
	spaceBetween: 10,
	pagination: {
		el: '.commodity__pagination',
		bulletActiveClass: 'commodity__bullet-active',
		bulletClass: 'commodity__bullet',
		type: 'bullets',
		clickable: true,
		renderBullet: function (index, className) {
			return '<img class="' + className + '" src="../images/commodity/slide' + (index + 1) + '.jpg" >';
		},
	},

});

// ! Swiper blog
const blog = new Swiper('.blog__slider', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	loop: true,

});


// ! Навигация страниц
$('.pages-nav__btn').on('click', function () {
	$('.pages-nav__list').toggleClass('pages-nav__list_active');
});




let wrapperEl = document.querySelector('.products__item-wrapper');
function productsRemoving(wrapperEl) {
	wrapperEl.addEventListener('click', function (event) {
		e = event.target;
		if (e.classList.contains('products__item-delete') && e.closest('.products__item')) {
			e.closest('.products__item').remove();
		}
	});
}
productsRemoving(wrapperEl);
