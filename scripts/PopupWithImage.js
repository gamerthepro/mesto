import {Popup} from './Popup.js'

export default class PopupWithImage extends Popup {
	constructor(popUpSelector){
   	super(popUpSelector);
   	this._popupImage = popUpSelector.querySelector('.popup__img');
   	this._popupText = popUpSelector.querySelector('.popup__caption');
	}

	open(link, name){
   	super.open();
   	this._popupImage.src = link;
   	this._popupImage.alt = name + '.';
   	this._popupText.textContent = name;
	}
}