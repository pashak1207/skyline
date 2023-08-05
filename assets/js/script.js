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
  const headerBackdropEl = document.querySelector('#header_backdrop');
  burgerBtnEl.addEventListener('click', (e) => {
    header?.classList.add("light");
    header.classList.add('header--visible-menu');
    burgerBtnEl.classList.add('hidden');
    closeBtnEl.classList.add('visible');
    headerBackdropEl.classList.add('visible');

    // Close Header Menu
    closeBtnEl.addEventListener('click', (e) => {
      header?.classList.remove("light");
      header.classList.remove('header--visible-menu');
      burgerBtnEl.classList.remove('hidden');
      closeBtnEl.classList.remove('visible');
      headerBackdropEl.classList.remove('visible');
    })
  });

  const listItem = document.querySelectorAll('.details-team__item');
  const dataList = document.querySelectorAll('.details-team__data');

  listItem[0].classList.add('active');
  dataList[0].classList.add('active');

  listItem.forEach((item) => {
    item.addEventListener('click', function() {
      const index = item.getAttribute("data-index");

      listItem.forEach(item => item.classList.remove('active'));
      dataList.forEach(item => item.classList.remove('active'));
      item.classList.add('active');
      dataList[index].classList.add('active');

    })
  })

  //popup funcional
  const popupBtns = document.querySelectorAll('.qustion-popup__controls > button');
  const popupItems = document.querySelectorAll('.qustion-popup__item');

  popupBtns.forEach((item, i) => {
    item.addEventListener('click', function() {
      const background = getComputedStyle(item).backgroundImage;
      const popupContent = popupItems[i].children[1];

      if (background.slice(-10, -2) ===  'plus.svg') {
        item.style.backgroundImage  = "url('./assets/img/clouse.svg')";
        popupContent.style.opacity = '1';
        popupContent.style.display = 'block';

      } else {
        item.style.backgroundImage  = "url('./assets/img/plus.svg')";
        popupContent.style.opacity = '0';
        popupItems[i].children[1].style.display = 'none';

      }


    })
  })
  //popup new-buildings
  const buttonsNewBuilding = document.querySelectorAll('.new-buildings__button');
  const lists = document.querySelectorAll('.new-buildings__block > ul');
  let prevClick = null;

  buttonsNewBuilding.forEach((item, i) => item.addEventListener('click', function() {
    if (prevClick && prevClick !== item) {
      prevClick.children[0].setAttribute('src', 'assets/img/popup-bottom.svg');
      lists[i].classList.remove('active'); // Видаляємо клас .active з попереднього вікна
    }

    if (lists[i].classList.contains('active')) {
      item.children[0].setAttribute('src', 'assets/img/popup-bottom.svg');
      lists[i].classList.remove('active'); // Видаляємо клас .active з поточного вікна
      prevClick = null;
    } else {
      lists[i].classList.add('active'); // Додаємо клас .active для відображення поточного вікна
      item.children[0].setAttribute('src', 'assets/img/popup-top.svg');
      prevClick = item;
    }
  }));
});
