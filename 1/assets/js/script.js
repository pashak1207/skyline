document.addEventListener("DOMContentLoaded", () => {
    //HEADER ONSCROLL//

  const header = document.querySelector("header.header");

  window.addEventListener("scroll", () => {
    if(!header?.classList.contains('open')){
      if (window.scrollY > 0) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    }
  });

  //END HEADER ONSCROLL//

  //HEADER CURRENCY SELECTOR

  const dropdownContainers = Array.from(header?.querySelectorAll('.dropdown'))

  if(dropdownContainers.length){
    dropdownContainers.forEach((dropdownContainer) => {
      const dropdownSelected = dropdownContainer?.querySelector('.dropdown-selcted')
      const dropdownOptions = Array.from(dropdownContainer?.querySelectorAll('.dropdown-option'))

      if(dropdownSelected && dropdownOptions.length){
        document.addEventListener('click', function(event) {
    
          if(!dropdownContainer.contains(event.target)){
            dropdownContainer.classList.remove('open')
          }else{
            dropdownContainer.classList.toggle('open')
          }
    
        });
    
        dropdownOptions.forEach(option => {
          option.addEventListener('click', () => {
    
              dropdownSelected.innerText = option.innerText
    
              //----------------ADD CHANGE CURRENCY CODE HERE-------------------//
    
            }
          )
        })
      }
    })
  }
  
  //END HEADER CURRENCY SELECTOR

  //HEADER OPEN MENU
  const menuBtn = header?.querySelector('button.header__burger')

  if(menuBtn){
    menuBtn.addEventListener('click', () => {
      header.classList.toggle('open')
      document.body.classList.toggle('mobileMenuOpen')

      if(!header.classList.contains('scrolled')){
        header.classList.add('scrolled')
      }
    })
  }
  //END HEADER OPEN MENU

    //HEADER COLLAPSED MENU
    const itemsBox = header?.querySelector('.header__menu')
    const mainItems = Array.from(header?.querySelectorAll('.header__menu ul li.collapsed'))
    const allMainItems = Array.from(header?.querySelectorAll('.header__menu ul li'))
    const subItems = Array.from(header?.querySelectorAll('.header__submenu ul'))
  
  
  
  
    if(mainItems.length && subItems.length && itemsBox && allMainItems.length){
  
      allMainItems.forEach(item => {
        item.addEventListener('mouseover', () => {
          allMainItems.find(it => it.classList.contains('open', 'collapsed'))?.classList.remove('open')
          subItems.find(it => it.classList.contains('open', 'collapsed'))?.classList.remove('open')
        })
      })
  
      mainItems.forEach((mainItem, index) => {
        mainItem.addEventListener('click', () => mouseoverAndClickMenuItemEvent(mainItem, index))
        mainItem.addEventListener('mouseover', () => mouseoverAndClickMenuItemEvent(mainItem, index))
      })
  
    }
  
    function mouseoverAndClickMenuItemEvent(mainItem, index){
      mainItems.find(mainItem => mainItem.classList.contains('open'))?.classList.remove('open')
  
      mainItem.classList.add('open')
  
      subItems.forEach(sub => {
        sub.classList.remove('open')
      })
      subItems[index]?.classList.add('open')
    }
    //END HEADER COLLAPSED MENU

    //QUESTIONS SELECT//
    const variants = document.querySelectorAll(".questions__item")

    if (variants.length) {
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
    const steps = document.querySelectorAll(".steps__step");

    function toggleStepActive(event) {
      steps.forEach((step) => {
        if (step === event.currentTarget) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      });
    }
  
    steps.forEach((step) => {
      step.addEventListener("click", toggleStepActive);
    });
    //setings input phone
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js';
    script.onload = function() {
      // Ініціалізація intl-tel-input після завантаження скрипта
      let phoneInputs = document.querySelectorAll(".input-phone");
      for (let i = 0; i < phoneInputs.length; i++) {
        let iti = window.intlTelInput(phoneInputs[i], {
          // Додаткові налаштування, якщо потрібно
          utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
          initialCountry: "us",
        });
      }
    };
    document.head.appendChild(script);

    //details funtional
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
    });
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
const criteriaArr = [["OАЭ", "США", "Турция", "Северная Корея", "Испания", "Грузия",],
  ["Дубай", "Нью-Йорк", "Анкара", "Банкок", "Тбилиси", "Лисабон"],
  ["Жилой комплекс", "Пентхаус", "Апартаменты", "Часный дом",],
  ["100 000$", "120 000$", "140 000$", "160 000$", "180 000$", "200 000$"],
  ["100 000$", "120 000$", "140 000$", "160 000$", "180 000$", "200 000$"],]
const catalogsItems = document.querySelectorAll(".catalog__filter__header")
let criteriaContainer = document.querySelector(".catalog__filter__criteria")

const items = criteriaArr[0].map((item,i) =>{
    const element = document.createElement("div")
    i===0&&element.classList.add("active")

    element.classList.add("catalog__filter__criteria__item")
    element.textContent = item
    return element
})
items.forEach(item =>{
    criteriaContainer.appendChild(item)
})



if (catalogsItems.length) {
    catalogsItems.forEach((variant, i) => {
        variant.addEventListener("click", () => {
            let prevActive = document.querySelector(".catalog__filter__header.active")
            prevActive?.classList.remove("active")
            variant.classList.add("active")
            const items = criteriaArr[i].map((item, i) =>{
                const element = document.createElement("div")
                element.classList.add("catalog__filter__criteria__item")
                i===0&&element.classList.add("active")
                element.textContent = item
                return element
            })
            criteriaContainer.innerHTML = ''


            items.forEach(item =>{
                item.addEventListener('click',()=>{
                    let prevActive = document.querySelector(".catalog__filter__criteria__item.active")
                    prevActive?.classList.remove("active")
                    item.classList.add("active")
                })
                criteriaContainer.appendChild(item)
            })
        })
    })
}




