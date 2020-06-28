export class FormValidator {
  constructor (options, formClass) {
    this._options = options;
    this._formClass = formClass;
    this._inputs = Array.from(this._formClass.querySelectorAll(options.inputSelector));
    this._errorSpans = Array.from(this._formClass.querySelectorAll(options.errorSelector));
    this._button = this._formClass.querySelector(options.buttonSelector);
  }

  handleFormInput() {
    const input = evt.target;
    const error = document.querySelector(`#${input.id}-error`);
      if (input.checkValidity()) {
        input.classList.remove(errorClass);
        error.textContent = '';
      } else {
        input.classList.add(errorClass);
        error.textContent = input.validationMessage;
  }

  toggleValidButton(formElement, inactiveButtonClass) {
    const submitButton = formElement.querySelector('.popup__button'); // находим кнопки сабмитов
    const isFormValid = formElement.checkValidity();
    submitButton.disabled = !isFormValid;
    submitButton.classList.toggle(inactiveButtonClass, !isFormValid);
  }

}

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
