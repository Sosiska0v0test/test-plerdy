'use strict';

window.addEventListener('DOMContentLoaded', () => {
  console.log('initial script');
  const swiper = new Swiper('.swiper', {
    speed: 400,
    // loop: true,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      }
    },
    pagination: {
      el: '.swiper_pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.prev-arrow',
      nextEl: '.next-arrow'
    },
    spaceBetween: 16,
  });

  const modalBtn = document.querySelectorAll('.js-btn'),
    modalClose = document.querySelector('.modal_close'),
    modalWindow = document.querySelector('.modal'),
    animatedGraphics = document.querySelectorAll('.position-graphic');

  modalBtn.forEach(element => {
    element.addEventListener('click', () => {

      modalWindow.classList.add('modal-visible');
      document.body.classList.add('lock');

      modalClose.addEventListener('click', () => {
        modalWindow.classList.remove('modal-visible');
        document.body.classList.remove('lock');
      })
    })
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modalWindow.classList.remove('modal-visible');
        document.body.classList.remove('lock');
      }
    })
  })

  const selectTop = document.querySelector('.initial_country'),
    selectList = document.querySelector('.select_list'),
    selectItem = document.querySelectorAll('.select_item'),
    selectArrow = document.querySelector('.select_arrow');

  selectTop.addEventListener('click', () => {
    selectList.classList.toggle('select_list-show');
    selectArrow.classList.toggle('rotated_arrow');
  })

  selectItem.forEach(element => {
    element.addEventListener('click', () => {
      selectTop.innerHTML = element.innerHTML;
      selectList.classList.remove('select_list-show')
      selectArrow.classList.remove('rotated_arrow');
    })
  })

  const form = document.querySelector('#form'),
    inputs = document.querySelectorAll('.js-input'),
    inputPhone = document.querySelector('.js-input-phone'),
    originCheckbox = document.querySelector('.js-checkbox'),
    checkbox = document.querySelector('.fake_checkbox');

  function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
  }

  form.onsubmit = function () {
    let phoneVal = inputPhone.value,
      emptyFields = Array.from(inputs).filter(input => input.value === '');

    inputs.forEach(element => {
      if (element.value === '') {
        element.classList.add('error')
      } else {
        element.classList.remove('error')
      }
    })

    if (emptyFields.length !== 0) {
      return false
    }

    if (!originCheckbox.checked) {
      checkbox.classList.add('error')
      return false
    } else {
      checkbox.classList.remove('error')
    }

    if (!validatePhone(phoneVal)) {
      inputPhone.classList.add('error')
      return false
    } else {
      inputPhone.classList.remove('error')
    }

  };


  const burger = document.querySelector('.burger'),
    burgerBody = document.querySelector('.burger_body');

  burger.addEventListener('click', () => {
    console.log('click burger')
    burgerBody.classList.toggle('burger_body-active')
    document.body.classList.toggle('lock');
  });


  document.onload(
    animatedGraphics.forEach(element => {
      element.classList.add('position-graphic-onload')
    }),
  )


  
});