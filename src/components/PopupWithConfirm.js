import  Popup  from './Popup.js';

export default class PopupWithConfirm extends Popup {
	constructor(popupNode, { handle }) {
		super (popupNode);
		this._handle = handle;
	}

	open(data) {
		super.open();
		this._data = data;
	}

	setEventListeners() {
		super.setEventListeners();
		this._popup.addEventListener('submit', e => {
			e.preventDefault();
			this._handle(this._data);
		})
	}
}