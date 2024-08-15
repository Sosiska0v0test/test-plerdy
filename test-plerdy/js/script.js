const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  watchOverflow: true,
  breakpoints: {
    990: {
      slidesPerView: 4.5,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper__button--right',
    prevEl: '.swiper__button--left',
  },
  spaceBetween: 17,
});


document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.header__menu');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main-container');
  const footer = document.querySelector('.footer');
  const buttonContainer = document.querySelector('.header__button-container');

  burgerMenu.addEventListener('click', function () {
    nav.classList.toggle('active');
    header.classList.toggle('header__active');
    main.classList.toggle('main-container--notactive');
    footer.classList.toggle('footer--notactive');
    buttonContainer.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const popupButtons = document.querySelectorAll('.popup-button');

  popupButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const popupId = this.getAttribute('data-popup-target');
      const popup = document.getElementById(popupId);

      popup.style.display = 'block';
    });
  });

  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', function () {
    const popup = this.closest('.popup');
    popup.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.getElementById('phone');
  const iti = window.intlTelInput(phoneInput, {
    separateDialCode: true,
    showSelectedDialCode: true,
    initialCountry: 'ua',
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
  });

  intlTelInput(input, {
    customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
      return "eg " + selectedCountryPlaceholder;
    },
  });

  phoneInput.addEventListener('input', function (event) {
    const input = event.target;
    input.value = input.value.replace(/\D/g, '');
  });
});



//Валідація

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  const nameInput = form.querySelector('.form__input--name');
  const privacyPolicyCheckbox = form.querySelector('input[name="Privacy Policy"]');
  const phoneInput = form.querySelector('#phone');
  const errorMessages = form.querySelectorAll('.form__error-message');
  const submitButton = form.querySelector('.form__button--contact-sales');

  function validateForm() {
    let isValid = true;

    // Перевірка імені
    if (nameInput.value.trim() === '') {
      showError(nameInput, 'This field is required');
      isValid = false;
    } else {
      hideError(nameInput);
    }

    // Перевірка телефону
    if (phoneInput.value.trim() === '') {
      showError(phoneInput, 'This field is required');
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneInput.value.replace(/\D/g, ''))) {
      showError(phoneInput, 'Phone number must be 10 digits');
      isValid = false;
    } else {
      hideError(phoneInput);
    }

    return isValid;
  }

  function showError(input, message) {
    const container = input.closest('.form__input-container') || input.closest('.form__privacy-policy');
    let errorMessage = container.querySelector('.form__error-message');

    if (!errorMessage) {
      errorMessage = document.createElement('span');
      errorMessage.className = 'form__error-message';
      container.appendChild(errorMessage);
    }

    errorMessage.textContent = message;
    errorMessage.style.display = 'block';

    if (input.style) {
      input.style.borderColor = 'red';
    }
  }

  function hideError(input) {
    const container = input.closest('.form__input-container') || input.closest('.form__privacy-policy');
    const errorMessage = container.querySelector('.form__error-message');

    if (errorMessage) {
      errorMessage.style.display = 'none';
    }

    if (input.style) {
      input.style.borderColor = '';
    }
  }

  form.addEventListener('submit', function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  nameInput.addEventListener('input', function () {
    const regex = /^[a-zA-Zа-яА-Я\s]*$/;
    if (!regex.test(nameInput.value)) {
      showError(nameInput, 'Only letters are allowed');
      nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-Я\s]/g, '');
    } else {
      hideError(nameInput);
    }
  });

  form.addEventListener('input', function () {
    submitButton.disabled = !validateForm();
  });
});








