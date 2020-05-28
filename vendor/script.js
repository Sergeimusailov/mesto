//редактирование профиля
const buttonEdit = document.querySelector('.profile__button_edit');
const buttonClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup_edit');
const elementsContainer = document.querySelector('.elements');
const buttonAdd = document.querySelector('.profile__button_add');

const nameInput = document.querySelector('.popup__field_edit_title');
const jobInput = document.querySelector('.popup__field_edit_subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form_edit');

//добавление карточки
const buttonAddClose = document.querySelector('.popup__close-button_add');
const popupAdd = document.querySelector('.popup_add');
const elementTemplate = document.querySelector('#element-template').content;
const addCardButton = document.querySelector('.popup__button_add');

// массив карточек загружаемых в начале
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

//добавить данные из инпутов в форму
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popupClose();
};
formElement.addEventListener('submit', formSubmitHandler);

// добавить карточки из массива при загрузке страницы
function addCard (name, link) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__cover').src = link;
  element.querySelector('.element__title').textContent = name;
  elementsContainer.prepend(element);
}
initialCards.forEach( function(item){
  addCard(item.name, item.link)
});

//попап добавление фотографии
buttonAdd.addEventListener('click', function() {
  popupAdd.classList.add('popup_opened');
});

// добавить новую карточку по кнопке «сохранить»
addCardButton.addEventListener('click', function(evt){
  evt.preventDefault();
  const title = document.querySelector('.popup__field_add_title');
  const link = document.querySelector('.popup__field_add_link');
  addCard(title.value, link.value);
  popupAddClose();
  title.value = ""; //сбросить поля ввода
  link.value = ""; //сбросить поля ввода
});

// закрыть попап добавления новой карточки
function popupAddClose() {
  popupAdd.classList.toggle('popup_opened');
};
buttonAddClose.addEventListener('click', popupAddClose);

//удалить карточку
function deleteCard() {
  if(event.target.classList.contains('element__remove')){
    event.target.closest('.element').remove();
  }
}
document.querySelector('.elements').addEventListener('click', deleteCard);

//поставить лайк карточке
function like(evt) {
  if(event.target.classList.contains('element__like-button')) {
    evt.target.classList.toggle('element__like-button_active');
  }
}
document.querySelector('.elements').addEventListener('click', like);

// открыть попап-превью карточки
const popupPreview = document.querySelector('.popup-preview');

function showPreview(evt) {
  console.log(evt);
  if(event.target.classList.contains('element__cover')) {
    const imageUrl = evt.target;
    const item = evt.target.parentElement;
    const title = item.querySelector('.element__title').textContent;
    popupPreview.classList.toggle('popup_opened');
    document.querySelector('.popup-preview__image').src = imageUrl.src;
    document.querySelector('.popup-preview__caption').textContent = title;
  }
}
document.querySelector('.elements').addEventListener('click', showPreview);

// закрыть попап-превью карточки
document.querySelector('.popup-preview__close-button').addEventListener('click', function() {
  popupPreview.classList.toggle('popup_opened');
});
