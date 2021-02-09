export class Popup {

		constructor(popUpSelector) {
		this._popUpSelector = popUpSelector;
	}

	// публичный метод открытия попап
	open() {
		this._popUpSelector.classList.add('popup__open');
	}


	// публичный метод закрытия попап
	close() {
		this._popUpSelector.classList.remove('popup__open');
	}

	// закрытия попапа клавишей Esc
	_handleEscClose(evt) {
		if (evt.key === "Escape"){
			this.close();
		}
	}

	// закрытия попапа кликом по иконке
	setEventListeners(){
		const pageNode = document.querySelector('.page');
		pageNode.addEventListener('keydown', (evt) => this._handleEscClose(evt));
		this._popUpSelector.addEventListener('click', (evt) => {
			if (evt.target.classList.contains('popup')) {
				this.close(evt.target);
			}
			if (evt.target.classList.contains('popup__close')) {
				this.close(evt.target.closest('.popup'));
			}
		})

	}

}