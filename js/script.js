//< " СКРИПТЫ " >=============================================================================================================>//

const myPopup = function () {
	const openBtns = document.querySelectorAll(".popup-open");
	const wrappers = document.querySelectorAll(".popup-item");
	let popupData;

	if (openBtns.length > 0) {
		openBtns.forEach(open => {
			open.addEventListener("click", function () {
				popupData = this.getAttribute("data-popup");

				function selectPopup(popupData) {
					wrappers.forEach(wrap => {
						if (wrap.classList.contains(popupData)) {
							wrap.classList.add("_active");
							document.body.classList.add("_lock-scroll");
						}
					});
				}
				selectPopup(popupData)

			});
		});

		function closePopup() {
			const wrapper = document.querySelectorAll(".popup-item");

			wrapper.forEach(wrap => {
				wrap.addEventListener("click", function (e) {
					const elementTarget = e.target;

					if (!elementTarget.closest(".popup-item__body")) {
						wrap.classList.remove("_active");
						document.body.classList.remove("_lock-scroll");
					}
				});
			});
		}
		closePopup()
	}
}
myPopup()

function myGrade() {
	const BtnsGrade = document.querySelectorAll(".main-block-grade__btn");
	const contentGrade = document.querySelectorAll(".question-content");
	let gradeData;

	if (BtnsGrade.length > 0) {
		BtnsGrade.forEach(btn => {
			btn.addEventListener("click", function () {
				gradeData = this.getAttribute("data-grade");

				BtnsGrade.forEach(btn => {
					btn.classList.remove("_active")
				});

				this.classList.add("_active");

				function selectPopup(gradeData) {
					contentGrade.forEach(content => {
						if (content.classList.contains(gradeData)) {
							content.classList.add("_active");
						} else {
							content.classList.remove("_active");
						}
					});
				}
				selectPopup(gradeData)

			});
		});
	}
}
myGrade()