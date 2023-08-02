document.addEventListener("DOMContentLoaded", () => {
  //HEADER ONSCROLL//

  const header = document.querySelector("header.header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  //END HEADER ONSCROLL//

  //QUESTIONS SELECT//
  const variants = document.querySelectorAll(".questions__item")

  if(variants.length){
    variants.forEach(variant => {
      variant.addEventListener("click", () => {
        let prevActive = document.querySelector(".questions__item.active")
        prevActive?.classList.remove("active")

        variant.classList.add("active")
        variant.querySelector("input").checked = true
      })
    })
  }
  //END QUESTIONS SELECT//


  // OPEN HEADER menu
  const burgerBtnEl = document.querySelector('[data-burger-menu]');
  const closeBtnEl = document.querySelector('[data-close-menu]');
  burgerBtnEl.addEventListener('click', (e) => {
    header?.classList.add("light");
    header.classList.add('header--visible-menu');
    burgerBtnEl.classList.add('hidden');
    closeBtnEl.classList.add('visible');

    // Close Header Menu
    closeBtnEl.addEventListener('click', (e) => {
      header?.classList.remove("light");
      header.classList.remove('header--visible-menu');
      burgerBtnEl.classList.remove('hidden');
      closeBtnEl.classList.remove('visible');
    })
  });

});
