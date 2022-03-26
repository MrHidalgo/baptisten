import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  function initHamburger() {

    document.querySelector("[hamburger-js]").addEventListener("click", (e) => {

      if(e.currentTarget.classList.contains("is-active")) {
        e.currentTarget.classList.remove("is-active");
        document.querySelector('.header__wrapper-right').classList.remove('is-open');
        document.querySelector('.header__wrapper-right').classList.add('is-animate');

        setTimeout(() => {
          document.querySelector('.header__wrapper-right').classList.remove('is-animate');
        }, 300);
      } else {
        e.currentTarget.classList.add("is-active");
        document.querySelector('.header__wrapper-right').classList.add('is-open');
      }

      document.querySelectorAll("html, body").forEach((val, idx) => {
        val.classList.toggle("is-hideScroll");
      });

    }, false);
  }


  initHamburger();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
