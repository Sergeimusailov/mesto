const buttonEdit = document.querySelector('.profile__button_edit');
const popup = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__close-button');
const buttonAddClose = document.querySelector('.popup-add__close-button');
const popupAdd = document.querySelector('.popup-add');
const buttonAdd = document.querySelector('.profile__button_add');
const elementsContainer = document.querySelector('.elements');

let nameInput = document.querySelector('#heading');
let jobInput = document.querySelector('#subheading');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//попап редактирование
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

//попап добавление фотографии
buttonAdd.addEventListener('click', function() {
  popupAdd.classList.add('popup-add_opened');
});

function popupAddClose() {
  popupAdd.classList.remove('popup-add_opened');
};
buttonAddClose.addEventListener('click', popupAddClose);

//добавление карточек
for (let i = 0; i < initialCards.length; i++) {
  const elementTemplate = document.querySelector('#element-template').content;
  const element = elementTemplate.cloneNode(true);

  element.querySelector('.element__cover').src = initialCards[i].link;
  element.querySelector('.element__title').textContent = initialCards[i].name;
  elementsContainer.append(element);
};
