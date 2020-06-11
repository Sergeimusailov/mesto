function enableValidation(options) {
  const formElements = Array.from(document.querySelectorAll(options.formSelector));
  formElements.forEach(formElement => {
    const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector));

    inputElements.forEach(input => {
      input.addEventListener('input', e => handleInput(e, options.inputErrorClass));
    })
    const submitButton = formElement.querySelector('.popup__button');
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
      handleFormSubmit(submitButton, inputElements);
    })
    formElement.addEventListener('input', () => {
      const isFormValid = formElement.checkValidity();
      submitButton.disabled = !isFormValid;
      submitButton.classList.toggle(options.inactiveButtonClass, !isFormValid);
    })
  })
}

function handleInput(evt, errCls) {
  const input = evt.target;
  const error = document.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    input.classList.remove(errCls);
    error.textContent = '';
  } else {
    input.classList.add(errCls);
    error.textContent = input.validationMessage;
  }
}

// закрытие на клавишу esc
function closeByEsc (evt){
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    popupOpened.classList.remove('popup_opened');
  }
}
window.addEventListener('keydown', closeByEsc);

// зыкрыть попап по оверлею
const popupOverlay = Array.from(document.querySelectorAll('.popup'));
popupOverlay.forEach(elem => {
  elem.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      evt.target.classList.remove('popup_opened');
    }
  })
})
