// Сценарий открытия/закрытия попапа
const buttonEdit = document.querySelector('.profile__button_edit');
const popup = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('#heading');
let jobInput = document.querySelector('#subheading');

buttonEdit.addEventListener('click', function() {
  popup.classList.add('popup_opened');
});

function popupClose() {
  popup.classList.remove('popup_opened');
}

buttonClose.addEventListener('click', popupClose);

// Отправка данных в форме
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.popup__form');
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
};
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', popupClose);
