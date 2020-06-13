function enableValidation(options) {
  const formElements = Array.from(document.querySelectorAll(options.formSelector)); // создаём массив форм
  formElements.forEach(formElement => {
    const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector)); // создаём массив инпутов
    inputElements.forEach(input => {
      input.addEventListener('input', e => handleInput(e, options.inputErrorClass)); // вешаем слушатель на инпуты
    });

    const submitButton = formElement.querySelector('.popup__button'); // находим кнопки сабмитов
    formElement.addEventListener('input', toggleValidButton) // вешаем на форму слушатель

    // переключаем состояния кнопок
    function toggleValidButton() {
      const isFormValid = formElement.checkValidity();
      submitButton.disabled = !isFormValid;
      submitButton.classList.toggle(options.inactiveButtonClass, !isFormValid);
    }
  })
}

// проверяем инпуты на ошибки
function handleInput(evt, errorClass) {
  const input = evt.target;
  const error = document.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    input.classList.remove(errorClass);
    error.textContent = '';
  } else {
    input.classList.add(errorClass);
    error.textContent = input.validationMessage;
  }
}

