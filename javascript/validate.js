function enableValidation(options) {
  const formElements = Array.from(document.querySelectorAll(options.formSelector)); // создаём массив форм
  formElements.forEach(formElement => {
    const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector)); // создаём массив инпутов
    inputElements.forEach(input => {
      input.addEventListener('input', e => handleInput(e, options.inputErrorClass)); // вешаем слушатель на инпуты
    });
    // переключаем состояния кнопок
    formElement.addEventListener('input', () => toggleValidButton(formElement, options.inactiveButtonClass)) // вешаем на форму слушатель
  })
}

function toggleValidButton(formElement, inactiveButtonClass) {
  const submitButton = formElement.querySelector('.popup__button'); // находим кнопки сабмитов
  const isFormValid = formElement.checkValidity();
  submitButton.disabled = !isFormValid;
  submitButton.classList.toggle(inactiveButtonClass, !isFormValid);
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
