let buttonEdit = document.querySelector('.profile__button_edit');
let popup = document.querySelector('.popup');
let buttonClose = document.querySelector('.popup__close-icon');

buttonEdit.addEventListener('click', function() {
  popup.classList.add('popup_opened');
});

buttonClose.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
});
