function modals() {
   const links = document.querySelectorAll("[data-popup-open]");
   const lockPadding = document.querySelectorAll("._lock-padding");
   const body = document.body;

   let unlock = true;

   const parentContainer = document.getElementById("modal-wrapper");
   const time = parentContainer.dataset.popupSpeed ? Number(parentContainer.dataset.popupSpeed) : 500;

   if (links) {
      links.forEach((link) => {
         link.addEventListener("click", function (e) {
            const popupName = this.getAttribute("data-popup");
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
         });
      });

      const close = document.querySelectorAll("[data-popup-close]");

      close.forEach((item) => {
         item.addEventListener("click", function (e) {
            popupClose(item.closest(".popup"));
         });
      });

      function popupOpen(currentPopup) {
         if (currentPopup && unlock) {
            const popupActive = document.querySelector(".popup._active");

            if (popupActive) {
               popupClose(popupActive, false);
            } else {
               bodyLock();
            }

            currentPopup.classList.add("_active");

            currentPopup.addEventListener("click", function (e) {
               if (!e.target.closest(".popup__body")) {
                  popupClose(e.target.closest(".popup"));
               }
            });
         }
      }

      function popupClose(popupActive, doUnlock = true) {
         if (unlock) {
            popupActive.classList.remove("_active");
            if (doUnlock) {
               bodyUnLock();
            }
         }
      }

      function bodyLock() {
         const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

         if (lockPadding) {
            lockPadding.forEach((elem) => {
               elem.style.paddingRight = lockPaddingValue;
            });
         }
         body.style.paddingRight = lockPaddingValue;
         body.classList.add("_lock-scroll");

         unlock = false;
         setTimeout(() => {
            unlock = true;
         }, time);
      }

      function bodyUnLock() {
         setTimeout(() => {
            if (lockPadding) {
               lockPadding.forEach((elem) => {
                  elem.style.paddingRight = "0px";
               });
            }
            body.style.paddingRight = "0px";
            body.classList.remove("_lock-scroll");
         }, time);

         unlock = false;
         setTimeout(() => {
            unlock = true;

            document.querySelectorAll(".popup").forEach((popup) => {
               popup.querySelectorAll("#summ").forEach((input) => {
                  input.value = "";
                  document.querySelector("[data-deposit-send]").classList.add("_disabled");
               });
            });
         }, time);
      }

      document.addEventListener("keydown", function (e) {
         if (e.code === "Escape") {
            const popupActive = document.querySelector(".popup._active");
            popupClose(popupActive);
         }
      });

      (function () {
         if (!Element.prototype.closest) {
            Element.prototype.closest = function (css) {
               var node = this;
               while (node) {
                  if (node.matches(css)) return node;
                  else node = node.parentElement;
               }
               return null;
            };
         }
      })();
      (function () {
         if (!Element.prototype.matches) {
            Element.prototype.mathes =
               Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
         }
      })();
   }
}
