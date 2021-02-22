export default class FormValidator {

	constructor(config, formSelector) {
		this._formSelector = formSelector;
		this._form = document.querySelector(this._formSelector);

		this._inputErrorClass = config.inputErrorClass;
		this._buttonInvalidClass = config.buttonInvalidClass;

		this._inputSelector = config.inputSelector;
		this._submitButtonSelector = config.submitButtonSelector;
		this._inputErrorSelector = config.inputErrorSelector;

		this._messageList = this._form.querySelectorAll(this._inputErrorSelector);
		this._button = this._form.querySelector(this._submitButtonSelector);
		this._inputList = this._form.querySelectorAll(this._inputSelector);
	}

	//Отображение ошибок
	_showError(input){
		const error = this._form.querySelector(`#${input.id}-error`);
		error.textContent = input.validationMessage;
		input.classList.add(this._inputErrorClass);
	};

	//Скрытие ошибок
	_hideError(input){
		const error = this._form.querySelector(`#${input.id}-error`);
		error.textContent = '';
		input.classList.remove(this._inputErrorClass);
	};

	resetValidation() {
		this._messageList.forEach(message => {
			message.textContent = '';
		});
		this._inputList.forEach(input => {
			input.classList.remove(this._inputErrorClass);
		});
	}

	//Проверка валидации
	_checkInputValidity(input){
		if (input.validity.valid) {
			this._hideError(input);
		} else {
			this._showError(input);
		}
	};

	
	enableSubmitButton() {
		this._button.classList.remove(this._buttonInvalidClass);
		this._button.disabled = false;
	};
	
	disableSubmitButton() {
		this._button.classList.add(this._buttonInvalidClass);
		this._button.disabled = true;
	};


	//Настройка доступности кнопки
	_setButtonState(status) {

		if(!status) {
			this.disableSubmitButton();
	
		} else {
			this.enableSubmitButton();
		}
	};
		
	_setEventListener() {
		this._inputList.forEach(input => {
			input.addEventListener('input', () => {
				this._checkInputValidity(input);
				this._setButtonState(this._form.checkValidity());
			});
		})
	}
		
	enableValidation() {
		this._setEventListener()
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		this._setButtonState(this._form.checkValidity());
	};
}