//попап adit
const popupFormEdit = '[name="form-adit"]';
const popupEditNode = '.popup_type_edit';
const profileButtonNode = document.querySelector('.profile__button_open_edit');

//попап add
const popupFormAdd = '[name="form-add"]';
const popupAddNode = '.popup_type_add';
const profileAddButtonNode = document.querySelector('.profile__button_open_add')

//попап avatar
const popupAvatarNode = '.popup__type_avatar';
const popupFormAvatar = '[name="form-avatar"]';

//попап image
const popupImageNode = '.popup_type_image';

const listContenerCards = '.elements__contener';
const templateElement = '.element-template';

const formInputNameNode = document.querySelector('.popup__input_edit_name');
const formInputJobNode = document.querySelector('.popup__input_edit_job');


const profilePorfolio = {
	porfolioNameNode:'.profile__title',
	porfolioJobNode:'.profile__subtitle',
	profileAvatar:'profile__avatar'  
}

const validationConfig = {
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__save',
	inputErrorSelector: '.popup__error',
   buttonInvalidClass: 'popup__save_inactive', 
	inputErrorClass: 'popup__input_error',
}

export {
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
	popupAvatarNode
};