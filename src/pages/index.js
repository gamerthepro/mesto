import './index.css';

import Card from '../components/Card.js'
import {validationConfig, FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards} from '../components/utils/Initial-сards.js';

import {
	formNode,
	popupFormAdd,
	popupAddNode,
	popupEditNode,
	popupImageNode,
	listContenerCards,
	templateElement,
	formInputNemaNode,
	formInputjobNode,
	profileAddButtonNode,
	profileButtonNode,
	porfolioNemaNode,
	porfoliojobNode
} from '../components/utils/constants.js';

//Создание новой карточки
function createCard(data) {
	const card = new Card({name: data.name, link: data.link}, '.element-template', openImgClick);
	const cardElement = card.generateCard();
	return cardElement;
}

//Информация о пользователе
const userInfo = new UserInfo({
	name: document.querySelector('.profile__title').textContent,
	job: document.querySelector('.profile__subtitle').textContent
})

//Создание попапа Edit
const popupEdit = new PopupWithForm(popupEditNode, {
		submitPopUp: (data) => {
			userInfo.setUserInfo(data)
			popupEdit.close()
		}
	}
)

popupEdit.setEventListeners()

//Создание попапа места
const popupAdd = new PopupWithForm(popupAddNode, {
	submitPopUp: (data) => {
		const cardElement = createCard({name: data.name, link: data.link})
		cardList.addItem(cardElement, false);
		popupAdd.close()
	}
})

popupAdd.setEventListeners()

//Создание попапа изображения
function handleImageClick(link, name) {
	const popupImage = new PopupWithImage(popupImageNode);
	popupImage.setEventListeners()
	popupImage.open(link, name);
}

//Листенер на кнопки открытия adit
profileButtonNode.addEventListener('click', () => {
	profileValidator.resetValidation();
	openPopup(popupEditNode);
	const data = userInfo.getUserInfo();
	nameInput.value = data.name;
	jobInput.value = data.job;
});

//Листенер на кнопки открытия add
profileAddButtonNode.addEventListener('click', () => {
	popupFormAdd.reset();
	addCardValidator.resetValidation();
	openPopup(popupAddNode);
});

//Включение валидации для каждой из форм
const profileValidator = new FormValidator(validationConfig, formNode);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, popupFormAdd);
addCardValidator.enableValidation();

//Создание списка карточек
initialCards.forEach((item) => {
	const cardElement = createCard(item);
	listContenerCards.append(cardElement);
});