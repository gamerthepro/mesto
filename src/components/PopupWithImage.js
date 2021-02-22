import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
	constructor (popupNode) {
		super(popupNode);
		this._popupImage = this._popup.querySelector('.popup__img');
		this._popupText = this._popup.querySelector('.popup__caption');
	}

	open({name, link}) {
		this._popupImage.src = link;
		this._popupImage.alt = name + '.';
		this._popupText.textContent = name;
		super.open();
	}
}