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

  //ADVANTAGES SLIDER//
  const slider = document.querySelector('.advantages__items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
  //END ADVANTAGES SLIDER//

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
});
