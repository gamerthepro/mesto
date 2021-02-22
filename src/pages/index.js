import './index.css';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
// import {initialCards} from '../components/utils/Initial-сards.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

import {
	apiConfig,
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
	profilePorfolio,
	validationConfig,
	popupFormAvatar,
	popupAvatarNode,
	profileAvatarButtonNode,
	popupDeleteNode
} from '../components/utils/constants.js';

//API
const api = new Api(apiConfig);

//Включение валидации для каждой из форм
const profileValidator = new FormValidator(validationConfig, popupFormEdit);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, popupFormAdd);
addCardValidator.enableValidation();

const avatarValidation = new FormValidator(validationConfig, popupFormAvatar);
avatarValidation.enableValidation();

//Информация о пользователе
const profileInfo = new UserInfo(profilePorfolio);

let userId = null;

let templateCard = null;

const errorApi = err => {
	console.error(err);
	};

const updateProfile =() => {
	api
		.getUserInfoServ ()
		.then(data => {
			userId = data._id;
			profileInfo.setUserInfo(data);
			profileInfo.updateUserInfo();
		})
		.catch(errorApi)
}

updateProfile();

//Создание попапа изображения 
const popupImg = new PopupWithImage(popupImageNode);
popupImg.setEventListeners();

//Создание новой карточки
const handleCardClick = data => {
	popupImg.open(data);
};

const popupConfirm = new PopupWithConfirm(popupDeleteNode, {
	handle: (cardId) => {
	api
		.removeCard(cardId)
		.then( () => {
			templateCard.handleDeleteCard();
			popupConfirm.close();
		})
		.catch(errorApi)
	}
});

popupConfirm.setEventListeners();

const createCard = item => {
	const card = new Card({...item, currentUserId: userId}, templateElement, handleCardClick, {
		handleDeleteCardClick: (cardId) => {
			templateCard = card;
			popupConfirm.open(cardId);
		},

		handleLikeClick: (cardId) => {
			if(card.getStateMyLike()) {
				api
				.delLike(cardId)
				.then((res) => {
					card.reloadDataCard(res);
					card.switchLike(false);
					card.setLikeCount(res.likes);
				})
				.catch(errorApi);
			} else {
				api
				.addLike(cardId)
				.then((res) => {
					card.reloadDataCard(res);
					card.switchLike(true);
					card.setLikeCount(res.likes);
				})
				.catch(errorApi);
			}
		}
	});

	const cardElement = card.generateCard();
	return cardElement;
}


const renderCards = new Section ({
	renderer: (item) => {
		renderCards.addItem(createCard(item))
	}
},

listContenerCards);

const cardList = () => {
	api
	.getCardList()
	.then(cardsArray => {
		renderCards.render(cardsArray)
	})
	.catch(errorApi)
}

cardList();

//Создание попапа места
const popupAdd = new PopupWithForm(popupAddNode, {
	submitPopup: (dataForm) => {
		popupAdd.renderLoading(true)
      api
		.saveNewCard(dataForm)
			.then(cardData => {
				renderCards.prependItem(createCard(cardData));
				popupAdd.close();
			})
			.catch(errorApi)
			.finally(() => {popupAdd.renderLoading(false)})
		}
	}
);

popupAdd.setEventListeners();

//Создание попапа Edit
const popupEdit = new PopupWithForm(popupEditNode, {
	submitPopup: (dataForm) => {
		popupEdit.renderLoading(true)
      api
		.saveUserInfo(dataForm)
			.then(data => {
				profileInfo.setUserInfo(dataForm);
				profileInfo.updateUserInfo();
				popupEdit.close();
			})
			.catch(errorApi)
			.finally(() => {popupEdit.renderLoading(false)})
		}
	}
);

popupEdit.setEventListeners();

const popupAvatar = new PopupWithForm(
	popupAvatarNode, {
		submitPopup: (dataForm) => {
			popupAvatar.renderLoading(true)
			api
			.updateAvatar({avatar: dataForm.link})
			.then(data => {
				profileInfo.setUserInfo(data);
				profileInfo.updateUserInfo();
				popupAvatar.close();
			})
			.catch(errorApi)
			.finally(() => {popupAvatar.renderLoading(false)})
		}
	}
)

popupAvatar.setEventListeners();

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

//Листенер на кнопки открытия avatar
profileAvatarButtonNode.addEventListener('click', () => {
	avatarValidation.resetValidation();
	avatarValidation.disableSubmitButton();
	popupAvatar.open();
});