import {initialCards} from './Initial-сards.js';

export class Card {

	constructor(data, cardSelector, openImgClick) {
		this._name = data.name;
		this._link = data.link;
		this._cardSelector = cardSelector;
		this._openImgClick = openImgClick;
	}

	//Создание разметки
	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);

		return cardElement;
	}

	 //Генерация карточек по шаблону
	generateCard(){
		this._element =  this._getTemplate();
		this._elemenImg = this._element.querySelector('.element__image');
		this._setEventListeners();
		this._element.querySelector('.element__title').textContent = this._name;
		this._elemenImg.src = this._link;
		this._elemenImg.alt = this._name + '.';

		return this._element;
	}

	//функция лайк
	_likeItem(evt) {
		const targetItem = evt.target;
		targetItem.classList.toggle('element__like_button_active');
	}

	//функция удаления карточек
	_removeItem(evt){
		const targetItem = evt.target.closest('.element');
		targetItem.remove();
	}

	//Установка слушателей
	_setEventListeners() {

		const deleteButton = this._element.querySelector('.element__delete');
		deleteButton.addEventListener('click', (evt) => {
			this._removeItem(evt);
		});

		const likeButton = this._element.querySelector('.element__like')
		likeButton.addEventListener('click', (evt) => {
			this._likeItem(evt);
		});

		const imageItem = this._element.querySelector('.element__image');
		imageItem.addEventListener('click', () => {
			this._openImgClick(this._link, this._name);
		});
	};
}