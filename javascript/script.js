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
const formAdd = document.querySelector('.popup__form_add');

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
function createCard (name, link) {
  const element = elementTemplate.cloneNode(true);
  const elementCover = element.querySelector('.element__cover');
  elementCover.src = link; // передаём значение src для изображения
  elementCover.setAttribute('alt', name); // передаём значение alt для изображения
  element.querySelector('.element__title').textContent = name;
  return addCard(element, elementsContainer);
}
initialCards.forEach( function(item) {
  createCard(item.name, item.link)
});

function addCard (element, elementsContainer) {
  elementsContainer.prepend(element);
}

// закрыть попап добавления новой карточки
function popupAddClose() {
  popupAdd.classList.toggle('popup_opened');
};
buttonAddClose.addEventListener('click', popupAddClose);

// добавить новую карточку по кнопке «сохранить»
formAdd.addEventListener('submit', function(evt){
  evt.preventDefault();
  const title = document.querySelector('.popup__field_add_title');
  const link = document.querySelector('.popup__field_add_link');
  createCard(title.value, link.value);
  popupAddClose();
  title.value = ""; //сбросить поля ввода
  link.value = ""; //сбросить поля ввода
});

//попап добавление фотографии
buttonAdd.addEventListener('click', function() {
  popupAdd.classList.add('popup_opened');
});

//удалить карточку
function deleteCard() {
  if(event.target.classList.contains('element__remove')){
    event.target.closest('.element').remove();
  }
}
elementsContainer.addEventListener('click', deleteCard);

//поставить лайк карточке
function like(evt) {
  if(event.target.classList.contains('element__like-button')) {
    evt.target.classList.toggle('element__like-button_active');
  }
}
elementsContainer.addEventListener('click', like);

// открыть попап-превью карточки
const popupPreview = document.querySelector('.popup-preview');

function showPreview(evt) {
  if(event.target.classList.contains('element__cover')) {
    const imageUrl = evt.target;
    const item = evt.target.parentElement;
    const title = item.querySelector('.element__title').textContent;
    const imageTitle = document.querySelector('.popup-preview__image');
    popupPreview.classList.toggle('popup_opened');
    imageTitle.src = imageUrl.src;
    imageTitle.setAttribute('alt', title);
    document.querySelector('.popup-preview__caption').textContent = title;
  }
}
elementsContainer.addEventListener('click', showPreview);

// закрыть попап-превью карточки
document.querySelector('.popup-preview__close-button').addEventListener('click', function() {
  popupPreview.classList.toggle('popup_opened');
});
