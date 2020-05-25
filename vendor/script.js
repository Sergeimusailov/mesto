//редактирование профиля
const buttonEdit = document.querySelector('.profile__button_edit');
const buttonClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const elementsContainer = document.querySelector('.elements');

const nameInput = document.querySelector('#heading');
const jobInput = document.querySelector('#subheading');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form');

//добавление карточки
const buttonAddClose = document.querySelector('.popup__close-button_add');
const popupAdd = document.querySelector('.popup_add');
const elementTemplate = document.querySelector('#element-template').content;
const buttonAddCard = document.querySelector('.popup__button_add');

//переменные для добавления карточки
const buttonAdd = document.querySelector('.profile__button_add');
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

//автоматичеески добавляем карточки
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
const titleInput = document.querySelector('.popup__field_add_title');
const linkInput = document.querySelector('.popup__field_add_link');
const element = elementTemplate.cloneNode(true);
element.querySelector('.element__cover').src = linkInput.value;
element.querySelector('.element__title').textContent = titleInput.value;
elementsContainer.prepend(element);
