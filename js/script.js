//< " ПОДКЛЮЧЕНИЕ JS КОМПОНЕНТОВ " >=============================================================================================================>//

if (document.querySelector(".support-block__slider")) {
	new Swiper(".support-block__slider", {
		slidesPerView: 1,
		loop: true,
		speed: 800,

		autoplay: {
			delay: 3500,
		},

		navigation: {
			nextEl: ".support-slider__arrow_next.swiper-button-next",
			prevEl: ".support-slider__arrow_prev.swiper-button-prev",
		},
	});
}

if (document.querySelector(".column-block__slider_articles")) {
	function resizeArticles() {
		if (document.querySelectorAll(".column-slider__slide_articles").length > 3) {
			document.querySelector(".page__column-block_articles").classList.add("_slider");
		} else {
			document.querySelector(".page__column-block_articles").classList.add("_column");
		}

		if (window.innerWidth < 768.2 && document.querySelectorAll(".column-slider__slide_articles").length > 2) {
			document.querySelector(".page__column-block_articles").classList.add("_slider");
		} else {
			document.querySelector(".page__column-block_articles").classList.add("_column");
		}

		if (window.innerWidth < 375.2 && document.querySelectorAll(".column-slider__slide_articles").length > 1) {
			document.querySelector(".page__column-block_articles").classList.add("_slider");
		} else {
			document.querySelector(".page__column-block_articles").classList.add("_column");
		}
	}

	window.addEventListener("resize", function () {
		resizeArticles()
	});

	resizeArticles()

	new Swiper(".column-block__slider_articles", {
		spaceBetween: 20,
		slidesPerGroup: 1,
		slidesPerView: 1,
		spaceBetween: 5,
		grabCursor: true,
		speed: 800,

		pagination: {
			el: ".column-slider__pagination_articles.swiper-pagination",
			clickable: true,
		},

		navigation: {
			nextEl: ".column-slider__arrow_articles.swiper-button-next",
			prevEl: ".column-slider__arrow_articles.swiper-button-prev",
		},

		breakpoints: {
			768.2: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			375.2: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
		}
	});
}

if (document.querySelector(".column-block__slider_white-papers")) {
	function resizeWhitePaper() {
		if (document.querySelectorAll(".column-slider__slide_white-papers").length > 3) {
			document.querySelector(".page__column-block_white-papers").classList.add("_slider");
		} else {
			document.querySelector(".page__column-block_white-papers").classList.add("_column");
		}

		if (window.innerWidth < 768.2 && document.querySelectorAll(".column-slider__slide_white-papers").length > 2) {
			document.querySelector(".page__column-block_white-papers").classList.add("_slider");
		} else {
			document.querySelector(".page__column-block_white-papers").classList.add("_column");
		}

		if (window.innerWidth < 375.2 && document.querySelectorAll(".column-slider__slide_white-papers").length > 1) {
			document.querySelector(".page__column-block_white-papers").classList.add("_slider");
		} else {
			document.querySelector(".page__column-block_white-papers").classList.add("_column");
		}
	}

	window.addEventListener("resize", function () {
		resizeWhitePaper()
	});

	resizeWhitePaper()

	new Swiper(".column-block__slider_white-papers", {
		spaceBetween: 10,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 5,
		grabCursor: true,
		speed: 800,

		pagination: {
			el: ".column-slider__pagination_white-papers.swiper-pagination",
			clickable: true,
		},

		navigation: {
			nextEl: ".column-slider__arrow_white-papers.swiper-button-next",
			prevEl: ".column-slider__arrow_white-papers.swiper-button-prev",
		},

		breakpoints: {
			768.2: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			375.2: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
		}
	});
}

const largeSlider = () => {
	let largeSliders = document.querySelectorAll('.security-tabs-content__slider')
	let prevArrow = document.querySelectorAll('.security-tabs-content__arrow.swiper-button-prev')
	let nextArrow = document.querySelectorAll('.security-tabs-content__arrow.swiper-button-next')
	let pagination = document.querySelectorAll('.security-tabs-content__pagination.swiper-pagination')
	largeSliders.forEach((slider, index) => {
		// this bit checks if there's more than 1 slide, if there's only 1 it won't loop
		let sliderLength = slider.children[0].children.length
		let result = (sliderLength > 1) ? true : false

		const swiper = new Swiper(slider, {
			spaceBetween: 10,
			slidesPerView: 1,
			slidesPerGroup: 1,
			autoHeight: true,
			grabCursor: true,
			speed: 1000,

			pagination: {
				el: pagination[index],
				clickable: true,
			},

			navigation: {
				nextEl: nextArrow[index],
				prevEl: prevArrow[index],
			},

			breakpoints: {
				992.2: {
					spaceBetween: 30,
					slidesPerView: 4,
					slidesPerGroup: 4,
				},
				768.2: {
					spaceBetween: 20,
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				480.2: {
					slidesPerView: 2,
					slidesPerGroup: 2,
				},
			}
		});
	})
}
window.addEventListener('load', largeSlider)

function checkValidSlider() {
	const sliders = document.querySelectorAll(".security-tabs-content__slider");

	function preset() {
		sliders.forEach(slider => {
			if (window.innerWidth > 992.2) {
				if (slider.querySelectorAll(".security-tabs-content__slide").length <= 4) {
					slider.parentElement.classList.add("_column");
				} else {
					slider.parentElement.classList.remove("_column");
				}
			}

			if (window.innerWidth < 992.2) {
				if (slider.querySelectorAll(".security-tabs-content__slide").length <= 3) {
					slider.parentElement.classList.add("_column");
				} else {
					slider.parentElement.classList.remove("_column");
				}
			}

			if (window.innerWidth < 768.2) {
				if (slider.querySelectorAll(".security-tabs-content__slide").length <= 2) {
					slider.parentElement.classList.add("_column");
				} else {
					slider.parentElement.classList.remove("_column");
				}
			}

			if (window.innerWidth < 480.2) {
				if (slider.querySelectorAll(".security-tabs-content__slide").length <= 1) {
					slider.parentElement.classList.add("_column");
				} else {
					slider.parentElement.classList.remove("_column");
				}
			}
		});
	}

	document.addEventListener("DOMContentLoaded", function () {
		preset()
	});

	window.addEventListener("resize", function () {
		preset()
	});
}
checkValidSlider(); // НАСТРОЙКИ СЛАЙДЕРА

function mySpollers() {
	const spollersArray = document.querySelectorAll('[data-spollers]');

	if (spollersArray.length > 0) {
		// Получение обычных спойлеров
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.spollers.split(",")[0];
		});
		// Инициализация обычных спойлеров
		if (spollersRegular.length > 0) {
			initSpollers(spollersRegular);
		}

		// Получение спойлеров с медиа запросами
		const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
			return item.dataset.spollers.split(",")[0];
		});

		// Инициализация спойлеров с медиа запросами
		if (spollersMedia.length > 0) {
			const breakpointsArray = [];
			spollersMedia.forEach(item => {
				const params = item.dataset.spollers;
				const breakpoint = {};
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});

			// Получаем уникальные брейкпоинты
			let mediaQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mediaQueries = mediaQueries.filter(function (item, index, self) {
				return self.indexOf(item) === index;
			});

			// Работаем с каждым брейкпоинтом
			mediaQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);

				// Объекты с нужными условиями
				const spollersArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				// Событие
				matchMedia.addListener(function () {
					initSpollers(spollersArray, matchMedia);
				});
				initSpollers(spollersArray, matchMedia);
			});
		}
		// Инициализация
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener("click", setSpollerAction);
				} else {
					spollersBlock.classList.remove('_init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener("click", setSpollerAction);
				}
			});
		}
		// Работа с контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length > 0) {
				spollerTitles.forEach(spollerTitle => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
				const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (oneSpoller && !spollerTitle.classList.contains('_active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_active');
					_slideToggle(spollerTitle.nextElementSibling, 500);
				}
				e.preventDefault();
			}
		}
		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
			if (spollerActiveTitle) {
				spollerActiveTitle.classList.remove('_active');
				_slideUp(spollerActiveTitle.nextElementSibling, 500);
			}
		}
	}

	let _slideUp = (target, duration = 500) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			target.style.transitionProperty = 'height, margin, padding';
			target.style.transitionDuration = duration + 'ms';
			target.style.height = target.offsetHeight + 'px';
			target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			window.setTimeout(() => {
				target.hidden = true;
				target.style.removeProperty('height');
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				target.classList.remove('_slide');
			}, duration);
		}
	}
	let _slideDown = (target, duration = 500) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			if (target.hidden) {
				target.hidden = false;
			}
			let height = target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			target.offsetHeight;
			target.style.transitionProperty = "height, margin, padding";
			target.style.transitionDuration = duration + 'ms';
			target.style.height = height + 'px';
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			window.setTimeout(() => {
				target.style.removeProperty('height');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				target.classList.remove('_slide');
			}, duration);
		}
	}
	let _slideToggle = (target, duration = 500) => {
		if (target.hidden) {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
mySpollers(); // СПОЙЛЕРЫ

function myTabs() {
	if (document.querySelector("[data-tabs]")) {
		const tabs = document.querySelector("[data-tabs]").querySelectorAll("[data-tab]:first-child");

		tabs.forEach(tab => {
			tab.style.display = "block";
			tab.style.opacity = "1";
		});

		document.addEventListener("click", (e) => {
			const elementTarget = e.target;

			if (elementTarget.closest("[data-tab-btn]")) {
				const att = elementTarget.getAttribute("data-tab-btn");
				const modernAtt = `[data-tab="${att}"]`;

				elementTarget.closest("[data-tabs]").querySelector(`${modernAtt}`).style.display = "block";
				setTimeout(() => {
					elementTarget.closest("[data-tabs]").querySelector(`${modernAtt}`).style.opacity = "1";
				}, 300);
				const buttons = elementTarget.closest("[data-tabs]").querySelectorAll("[data-tab-btn]");

				buttons.forEach(button => {
					button.classList.remove("_active");
				});
				elementTarget.classList.add("_active");

				const tabs = elementTarget.closest("[data-tabs]").querySelectorAll("[data-tab]");

				tabs.forEach((tab) => {
					if (tab.getAttribute("data-tab") === att) {
					} else {
						tab.classList.remove("_active");

						tab.style.display = "none";

						setTimeout(() => {
							tab.style.opacity = "0";
						}, 300);
					}
				});
			}
		});

		function childrenItem() {
			const inner = document.querySelectorAll(".security-tabs__content-item");

			if (inner) {
				inner.forEach(elem => {
					document.addEventListener("click", function (e) {
						const elementTarget = e.target;

						if (elementTarget.closest(".security-tabs__buttons-item")) {
							if (elem.querySelector(".functional-tabs-right__item") && elem.querySelector(".functional-tabs-left__button")) {
								const childrenContent = elem.querySelector(".functional-tabs-right__item");
								const childrenButton = elem.querySelector(".functional-tabs-left__button");

								if (!childrenContent.classList.contains("_active") && !childrenButton.classList.contains("_active")) {
									childrenButton.classList.add("_active");
									childrenContent.style.display = "block";

									setTimeout(() => {
										childrenContent.style.opacity = "1";
									}, 300);
								}
							}
						}
					});
				});
			}
		}
		childrenItem()
	}
}
myTabs();
; // ТАБЫ

//< " СКРИПТЫ " >=============================================================================================================>//

new WOW({
	mobile: false,
	offset: 80,
}).init();

let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()) {
	document.body.classList.add("_touch");
} else {
	document.body.classList.add("_pc");
}

//< " СКРИПТЫ " >=============================================================================================================>//

function arrowSlider() {
	const items = document.querySelectorAll(".column-block__slider");

	items.forEach(item => {
		window.addEventListener("resize", function () {
			item.querySelectorAll(".column-slider__image").forEach(slide => {
				const heightSlide = slide.clientHeight;

				document.querySelectorAll(".column-slider__arrows").forEach(arrows => {
					arrows.style.height = `${heightSlide}` + "px";
				});
			});
		});

		document.addEventListener("DOMContentLoaded", function () {
			item.querySelectorAll(".column-slider__image").forEach(slide => {
				const heightSlide = slide.clientHeight;

				document.querySelectorAll(".column-slider__arrows").forEach(arrows => {
					arrows.style.height = `${heightSlide}` + "px";
				});
			});
		});
	});
}
arrowSlider()

function showReleases() {
	const btn = document.querySelector(".releases__more");

	if (btn) {
		btn.addEventListener("click", function () {
			async function getProducts() {
				if (!btn.classList.contains('_active')) {

					btn.classList.add('_active');
					const file = "./json/releases.json";

					let response = await fetch(file, {
						method: "GET"
					});

					if (response.ok) {
						let result = await response.json();
						loadProducts(result);
						btn.classList.remove('_active');
						btn.remove();
					}
				}
			}
			getProducts()
		});
	}

	function loadProducts(data) {

		const releasesItems = document.querySelector('.releases__column');

		data.releases.forEach(item => {
			const releasesName = item.name;
			const releasesLink = item.link;
			const releasesImage = item.image;
			const releasesAltImage = item.altImage;

			let template = `
			<div class="releases-column__item wow animate__animated animate__fadeInUp" data-wow-duration="0.8s">
				<a class="releases-column__name" href="${releasesLink}" target="_blank">
					${releasesName}
				</a>
				<a class="releases-column__link" href="${releasesLink}" target="_blank">
					<img src="img/icon/${releasesImage}.svg" alt="${releasesAltImage}">
				</a>
			</div>
			`

			releasesItems.insertAdjacentHTML("beforeEnd", template);
		});
	}
}
showReleases()