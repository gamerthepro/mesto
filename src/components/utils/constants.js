//Api
const apiConfig = {
	url: 'https://mesto.nomoreparties.co/v1/cohort-20/',
	headers: {
		authorization: '4707d041-e92a-46fe-bfe7-19e26cb8b84c',
		'Content-Type': 'application/json'
	}
}

//попап adit
const popupFormEdit = '[name="form-adit"]';
const popupEditNode = '.popup_type_edit';
const profileButtonNode = document.querySelector('.profile__button_open_edit');

//попап add
const popupFormAdd = '[name="form-add"]';
const popupAddNode = '.popup_type_add';
const profileAddButtonNode = document.querySelector('.profile__button_open_add')

//попап avatar
const popupAvatarNode = '.popup_type_avatar';
const popupFormAvatar = '[name="form-avatar"]';
const profileAvatarButtonNode = document.querySelector('.profile_wrap_avatar')

//попап image
const popupImageNode = '.popup_type_image';
const listContenerCards = '.elements__contener';
const templateElement = '.element-template';

//попап delete
const popupDeleteNode = '.popup_delete_card';

const formInputNameNode = document.querySelector('.popup__input_edit_name');
const formInputJobNode = document.querySelector('.popup__input_edit_job');


const profilePorfolio = {
	porfolioNameNode:'.profile__title',
	porfolioJobNode:'.profile__subtitle',
	profileAvatar:'.profile__avatar'  
}

const validationConfig = {
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__save',
	inputErrorSelector: '.popup__error',
   buttonInvalidClass: 'popup__save_inactive', 
	inputErrorClass: 'popup__input_error',
}

export {
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
};