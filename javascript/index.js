//редактирование профиля
const buttonEdit = document.querySelector('.profile__button_edit');
const buttonClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup_edit');
const elementsContainer = document.querySelector('.elements');
const buttonAdd = document.querySelector('.profile__button_add');

const nameInput = document.querySelector('.popup__input_edit_title');
const jobInput = document.querySelector('.popup__input_edit_subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form_edit');

//добавление карточки
const buttonAddClose = document.querySelector('.popup__close-button_add');
const popupAdd = document.querySelector('.popup_add');
const elementTemplate = document.querySelector('.element-template').content;
const formAdd = document.querySelector('.popup__form_add');

const popupPreview = document.querySelector('.popup-preview');

//попап редактирование
buttonEdit.addEventListener('click', function() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

function popupClose() {
  popup.classList.toggle('popup_opened');
}
buttonClose.addEventListener('click', popupClose);

//добавить данные из инпутов в форму
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popupClose();
}
formElement.addEventListener('submit', formSubmitHandler);

// собираем карточку и наполняем её данными
function createCard (name, link) {
  const element = elementTemplate.cloneNode(true);
  const elementCover = element.querySelector('.element__cover');

  // кнопка лайка
  const likeButton = element.querySelector('.element__like-button');
  likeButton.addEventListener('click', () => likeButton.classList.toggle('element__like-button_active'));

  // кнопка удалить
  const deleteButton = element.querySelector('.element__remove');
  deleteButton.addEventListener('click', () => deleteButton.closest('.element').remove());

  // открыть попап с превью фотографии
  elementCover.addEventListener('click', function() {
    const item = elementCover.parentElement;
    const title = item.querySelector('.element__title').textContent;
    const imageTitle = document.querySelector('.popup-preview__image');
    imageTitle.src = elementCover.src;
    imageTitle.setAttribute('alt', title);
    document.querySelector('.popup-preview__caption').textContent = title;
    popupPreview.classList.toggle('popup_opened');
  });

  elementCover.src = link; // передаём значение src для изображения
  elementCover.setAttribute('alt', name); // передаём значение alt для изображения
  element.querySelector('.element__title').textContent = name;
  return element;
}

function renderCard (name, link) {
  const element = createCard(name, link);
  addCard(element, elementsContainer);
}

// добавить карточки в контейнер
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
  const title = document.querySelector('.popup__input_add_title');
  const link = document.querySelector('.popup__input_add_link');
  renderCard(title.value, link.value);
  popupAddClose();
  title.value = ""; //сбросить поля ввода
  link.value = ""; //сбросить поля ввода
});

//попап добавление фотографии
buttonAdd.addEventListener('click', function() {
  popupAdd.classList.add('popup_opened');
});

// закрыть попап-превью карточки
document.querySelector('.popup-preview__close-button').addEventListener('click', function() {
  popupPreview.classList.toggle('popup_opened');
});

// перебираем массив карточек
initialCards.forEach( (item) => {
  renderCard(item.name, item.link)
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

// закрытие на клавишу esc
function closeByEsc (evt){
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    popupOpened.classList.remove('popup_opened');
  }
}
window.addEventListener('keydown', closeByEsc);

// закрыть попапы с формой по оверлею
const popupOverlay = Array.from(document.querySelectorAll('.popup'));
popupOverlay.forEach(elem => {
  elem.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      evt.target.classList.remove('popup_opened');
    }
  })
})
