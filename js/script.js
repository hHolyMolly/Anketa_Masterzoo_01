//< " СКРИПТЫ " >=============================================================================================================>//

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

				document.querySelector(".footer").style = "display: block";

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