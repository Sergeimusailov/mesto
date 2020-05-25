//редактирование профиля
const buttonEdit = document.querySelector('.profile__button_edit');
const buttonClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup_edit');
const elementsContainer = document.querySelector('.elements');
const buttonAdd = document.querySelector('.profile__button_add');

const nameInput = document.querySelector('#heading');
const jobInput = document.querySelector('#subheading');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form_edit');

//добавление карточки
const buttonAddClose = document.querySelector('.popup__close-button_add');
const popupAdd = document.querySelector('.popup_add');
const elementTemplate = document.querySelector('#element-template').content;
// const buttonAddCard = document.querySelector('.popup__button_add');

//переменные для добавления карточки
const formAddElement = document.querySelector('.popup__form_add'); //ссылка на форму

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Тулиновка',
      link: './images/mikhail-vasilyev-tulinovka.jpg'
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
  popup.classList.toggle('popup_opened');
};
buttonClose.addEventListener('click', popupClose);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popupClose();
};
formElement.addEventListener('submit', formSubmitHandler);

function popupAddClose() {
  popupAdd.classList.toggle('popup_opened');
};
buttonAddClose.addEventListener('click', popupAddClose);

// автоматичеески добавляем карточки
function addCard (name, link) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__cover').src = link;
  element.querySelector('.element__title').textContent = name;
  elementsContainer.append(element);
}

initialCards.forEach( function(item){
  addCard(item.name, item.link)
});

//попап добавление фотографии
buttonAdd.addEventListener('click', function() {
  popupAdd.classList.add('popup_opened');
});

// функция добавления новой карточки

function addNewCard (titleValue, linkValue) {
  const cardItem = elementTemplate.cloneNode(true);
  cardItem.querySelector('.element__title').textContent = titleValue;
  cardItem.querySelector('.element__cover').src = linkValue;
  elementsContainer.prepend(cardItem);
}

const addCardItem = document.querySelector('.popup__button_add');

addCardItem.addEventListener('click', function(evt){
  evt.preventDefault();
  const title = document.querySelector('.popup__field_add_title');
  const link = document.querySelector('.popup__field_add_link');

  addNewCard(title.value, link.value);
});

//удаление карточек
const removeButton = document.querySelector('.element__remove');
removeButton.addEventListener('click', function(){
  const cardList = document.querySelector('.element');
  cardList.remove();
});
