function preloader(speed) {
   if (document.getElementById("preloader")) {
      window.addEventListener("load", () => {
         function loadPage() {
            return new Promise((resolve) => {
               setTimeout(resolve, speed);

               // Функции которые хотим запустить во время действия прелоадера
            });
         }

         loadPage().then(() => {
            document.getElementById("preloader").remove();
            document.body.classList.remove("_lock-scroll");

            // Функции которые хотим запустить после прелоадера
         });
      });
   }
}

export default preloader;
