export class Popup {

	constructor(popupSelector) {
		this._popupSelector = popupSelector;
		this._popup = document.querySelector(popupSelector);
		this._handleEscClose = this._handleEscClose.bind(this);
	}

	// публичный метод открытия попап
	open() {
		this._popup.classList.add('popup__open');
		document.addEventListener('keydown', this._handleEscClose);
	}


	// публичный метод закрытия попап
	close() {
		this._popup.classList.remove('popup__open');
		document.removeEventListener('keydown', this._handleEscClose);
	}

	// закрытия попапа клавишей Esc
	_handleEscClose(evt) {
		if (evt.key === "Escape"){
			this.close();
		}
	}

	// закрытия попапа кликом по иконке
	setEventListeners(){
		this._popup.addEventListener('click', (evt) => {
			if (evt.target.closest('.popup__container')
			&& evt.target.closest('.popup__container_image')
			|| evt.target.classList.contains('popup__close')) {
				this.close();
			}
		})

	}

}