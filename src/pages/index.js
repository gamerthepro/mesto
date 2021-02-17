import './index.css';

import Card from '../components/Card.js'
import {validationConfig, FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards} from '../components/utils/Initial-сards.js';

import {
	popupFormEdit,
	popupFormAdd,
	popupAddNode,
	popupEditNode,
	popupImageNode,
	listContenerCards,
	templateElement,
	formInputNameNode,
	formInputJobNode,
	profileAddButtonNode,
	profileButtonNode,
	profilePorfolio
} from '../components/utils/constants.js';

//Информация о пользователе
const profileInfo = new UserInfo(profilePorfolio);

//Создание попапа изображения 
const popupImg = new PopupWithImage(popupImageNode);
popupImg.setEventListeners();

//Создание новой карточки
const handleCardClick = data => {
	popupImg.open(data);
};

const createCard = item => {
	const card = new Card(item, templateElement, handleCardClick);
	const cardElement = card.generateCard();
	return cardElement;
}

const renderCards = new Section ({
	items: initialCards,
	renderer: (item) => {
		const cardElement = createCard(item);
		renderCards.addItem(cardElement);
	}
},
listContenerCards);
	
renderCards.render();

//Создание попапа места
const popupAdd = new PopupWithForm(popupAddNode, {
	submitPopup: (dataForm) => {
		const cardElement = createCard(dataForm);
		renderCards.prependItem(cardElement);
		popupAdd.close();
	}
});

popupAdd.setEventListeners();

//Создание попапа Edit
const popupEdit = new PopupWithForm(popupEditNode, {
	submitPopup: (dataForm) => {
		profileInfo.setUserInfo(dataForm);
		popupEdit.close();
	}
});

popupEdit.setEventListeners();

//Включение валидации для каждой из форм
const profileValidator = new FormValidator(validationConfig, popupFormEdit);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, popupFormAdd);
addCardValidator.enableValidation();

//Листенер на кнопки открытия adit
profileButtonNode.addEventListener('click', () => {
	const getUserInfo = profileInfo.getUserInfo();
	formInputNameNode.value = getUserInfo.name;
	formInputJobNode.value = getUserInfo.porfolioJob;

	profileValidator.resetValidation();
	profileValidator.enableSubmitButton();

	popupEdit.open();
});

//Листенер на кнопки открытия add
profileAddButtonNode.addEventListener('click', () => {
	popupAdd.open();

	addCardValidator.resetValidation();
	addCardValidator.disableSubmitButton()
});