import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
	constructor(popupNode, { submitPopup }) {
		super(popupNode);
		this._submitPopup = submitPopup;
		this._inputList = this._popup.querySelectorAll('.popup__input');
		this._popupForm = this._popup.querySelector('.popup__form');
	}

	_getInputValues() {
		const objForm = {};
		this._inputList.forEach(item => {
			objForm[item.name] = item.value;
		});
		return objForm;
	}

	setEventListeners() {
		super.setEventListeners();
		this._popup.addEventListener('submit', evt => {
			evt.preventDefault();
			this._submitPopup(this._getInputValues());
		})
	}

	close() {
		this._popupForm.reset();
		super.close();
	}

}