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

const popupPreview = document.querySelector('.popup-preview');

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
  const imageCover = element.querySelector('.element__cover');
  imageCover.addEventListener('click', function() {
    const item = imageCover.parentElement;
    const title = item.querySelector('.element__title').textContent;
    const imageTitle = document.querySelector('.popup-preview__image');
    imageTitle.src = imageCover.src;
    imageTitle.setAttribute('alt', title);
    document.querySelector('.popup-preview__caption').textContent = title;
    popupPreview.classList.toggle('popup_opened');
  });

  elementCover.src = link; // передаём значение src для изображения
  elementCover.setAttribute('alt', name); // передаём значение alt для изображения
  element.querySelector('.element__title').textContent = name;
  return element;
}

// перебираем массив карточек
initialCards.forEach( (item) => {
  renderCard(item.name, item.link)
});

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
  const title = document.querySelector('.popup__field_add_title');
  const link = document.querySelector('.popup__field_add_link');
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
