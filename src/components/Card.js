export default class Card {

	constructor({name, link, likes, _id, owner, currentUserId }, elementSelector, handleCardClick, { handleDeleteCardClick, handleLikeClick }) {
		this._name = name;
		this._link = link;
		this._like = likes;
		this._elementId = _id;
		this._elementOwnerId = owner._id;
		this._currentUserId = currentUserId;
		this._elementSelector = elementSelector;
		this._handleCardClick = handleCardClick;
		this._handleDeleteCardClick = handleDeleteCardClick;
		this._handleLikeClick = handleLikeClick;
	}

	//Создание разметки
	_getTemplate() {
		const cardElement = document.querySelector(this._elementSelector).content.querySelector('.element').cloneNode(true);

		return cardElement;
	}

	 //Генерация карточек по шаблону
	generateCard(){
		this._element =  this._getTemplate();
		this._elemenImg = this._element.querySelector('.element__image');
		this._element.querySelector('.element__title').textContent = this._name;
		this._elemenImg.src = this._link;
		this._elemenImg.alt = `${this._name}.`;

		this.setLikeCount(this._like);
		this._setStateDelButton();
		this.switchLike(this.getStateMyLike());
		this._setEventListeners();

		return this._element;
	}

	//функция удаления карточек
	handleDeleteCard() {
		this._element.closest('.element').remove();
	};

	//Установка слушателей
	_setEventListeners() {

		this._element.querySelector('.element__delete').addEventListener('click', () => {
			this._handleDeleteCardClick(this._cardId);
		});

		this._element.querySelector('.element__like').addEventListener('click', () => {
			this._handleLikeClick(this._cardId);
		});

		this._elemenImg.addEventListener('click', () => {
			const data = {
				name: this._name,
				link: this._link
			}
			this._handleCardClick(data);
		});
	};

	_setStateDelButton() {
		if (this._currentUserId != this._elementOwnerId) {
			this._element.querySelector('.element__delete').classList.add('element__delete_disable');
		}
	};

	getStateMyLike() {
		return Boolean (this._like.find(item => item._id === this._currentUserId));
	}

	switchLike(state) {
		if(state) {
			this._element.querySelector('.element__like').classList.add('element__like_button_active');
		} else {
			this._element.querySelector('.element__like').classList.remove('element__like_button_active');
		}
	}

	setLikeCount(data) {
		this._element.querySelector('.element__like_count').textContent = data.length;
	}

	reloadDataCard(data) {
		this._like = data.likes;
	}
}