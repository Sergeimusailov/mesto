export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('.element-template')
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__cover').src = this._link; // передаём значение src для изображения
    this._element.setAttribute('alt', this._name); // передаём значение alt для изображения
    this._element.querySelector('.element__title').textContent = this._name;
    return this._element;
  }
}

initialCards.forEach( (item) => {
  const card = new Card(item.name, item.link)
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});
