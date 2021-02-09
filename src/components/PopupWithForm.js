import {Popup} from './Popup.js'

export default class PopupWithForm extends Popup {
	constructor(popupSelector, {submitPopup}){
   	super(popupSelector);
   	this._submitPopup = submitPopup;
   	this._form = this._popupSelector.querySelector('.popup__form');
   	this._inputList = this._form.querySelectorAll('.popup__input');
	}

	_getInputValues() {
   	const data = {}
   	this._inputList.forEach(input => {
      	data[input.name] = input.value;
   	});
   	return data;
	}

	_submit(evt) {
   	evt.preventDefault();
   	this._submitPopUp(this._getInputValues())
	}

	setEventListeners(){
		super.setEventListeners();
   	this._form.addEventListener('submit', (evt) =>
   	{this._submit(evt)})
	}

	close(){
   	super.close();
   	this._form.reset()
	}

}