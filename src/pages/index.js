import Card from '../components/Card.js'
import {validationConfig, FormValidator} from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards} from '../components/Initial-сards.js';


//Переменные для popup_edit и изменения данных
const profileButtonNode = document.querySelector('.profile__button_open_edit');
const popupEditNode = document.querySelector('.popup_type_edit');
const popupCloseButtonNode = document.querySelector('.popup__close_edit');
const porfolioNemaNode = document.querySelector('.profile__title');
const porfoliojobNode = document.querySelector('.profile__subtitle');
const formNode = document.querySelector('[name="form-adit"]');
const formInputNemaNode = document.querySelector('.popup__input_edit_name');
const formInputjobNode = document.querySelector('.popup__input_edit_job');

//Переменные для popup_add и добавления карточек
const listContenerCards = document.querySelector('.elements__contener');
const popupAddNode = document.querySelector('.popup_type_add');
const profileAddButtonNode = document.querySelector('.profile__button_open_add')
const popupCloseAddButtonNode = document.querySelector('.popup__close_add');
const formInputImgNemaNode = document.querySelector('.popup__input_img_name');
const formInputImglinkNode = document.querySelector('.popup__input_img_link');
const templateElement = document.querySelector('.element-template');
const popupImageNode = document.querySelector('.popup_type_image');
const popupCloseImgButtonNode = document.querySelector('.popup__close_image');
const popupFormAdd = document.querySelector('[name="form-add"]');

//Переменные для popup_img
const popupImage = popupImageNode.querySelector('.popup__img');
const popupText = popupImageNode.querySelector('.popup__caption');

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
		popupEdit.close()}
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

// //Открытие popup
// function openPopup(popup) {
// 	popup.classList.add('popup__open');
// 	document.addEventListener('keydown', handleEscPress);
// 	document.addEventListener('mousedown', handleOverlayClick);
// }

// //Функции работы с формами
// function handleFormSubmit(event) {
// 	event.preventDefault();
// 	porfolioNemaNode.textContent = formInputNemaNode.value;
// 	porfoliojobNode.textContent = formInputjobNode.value;
// 	closePopup(popupEditNode);
// }

// //Функция открытия и заполнения поп-апа с изображением
// function openImgClick(link, name) {
// 	openPopup(popupImageNode);
// 	popupImage.src = link;
// 	popupImage.alt = name;
// 	popupText.textContent = name;
// }

// //Обработчик закрытия попап по клику на overlay
// function handleOverlayClick(evt) {
// 	if(evt.target.classList.contains('popup__open')){
// 		closePopup(evt.target); 
// 	};
// }

// //Закрытие popup
// function closePopup(popup) {
// 	popup.classList.remove('popup__open');
// 	document.removeEventListener('keydown', handleEscPress);
// 	document.removeEventListener('mousedown', handleOverlayClick);
// }

// //Обработчики для popup_edit
// popupCloseButtonNode.addEventListener('click', () => closePopup(popupEditNode));
// formNode.addEventListener('submit', handleFormSubmit);

// //Обработчики для popup_add
// popupCloseAddButtonNode.addEventListener('click', () => closePopup(popupAddNode));
// popupFormAdd.addEventListener('submit', handleFormAddSubmit);

// //Обработчики для popup__image
// popupCloseImgButtonNode.addEventListener('click', () => closePopup(popupImageNode));

// //Обработчик закрытия попап по нажатию Esc
// function  handleEscPress(evt) {
// 	if(evt.key === 'Escape') {
// 		const openedPopup = document.querySelector('.popup__open');
// 		closePopup(openedPopup);
// 	};
// }


// function handleFormAddSubmit(evt) {
// 	evt.preventDefault();
// 	const cardElement = createCard({name: formInputImgNemaNode.value, link: formInputImglinkNode.value});
// 	listContenerCards.prepend(cardElement);
// 	closePopup(evt.target.closest('.popup'));
// 	popupFormAdd.reset();
// }

// //Создание списка карточек
// initialCards.forEach((item) => {
// 	const cardElement = createCard(item);
// 	listContenerCards.append(cardElement);
// });