const buttonEdit = document.querySelector('.profile__button_edit');
const popup = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('#heading');
let jobInput = document.querySelector('#subheading');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');

buttonEdit.addEventListener('click', function() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

function popupClose() {
  popup.classList.remove('popup_opened');
};
buttonClose.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popupClose();
};
formElement.addEventListener('submit', formSubmitHandler);
