const popupFormEdit = '[name="form-adit"]';
const popupFormAdd = '[name="form-add"]';
const popupAddNode = '.popup_type_add';
const popupEditNode = '.popup_type_edit';
const popupImageNode = '.popup_type_image';
const listContenerCards = '.elements__contener';
const templateElement = '.element-template';

const formInputNameNode = document.querySelector('.popup__input_edit_name');
const formInputJobNode = document.querySelector('.popup__input_edit_job');
const profileAddButtonNode = document.querySelector('.profile__button_open_add')
const profileButtonNode = document.querySelector('.profile__button_open_edit');

const profilePorfolio = {
	porfolioNameNode:'.profile__title',
	porfolioJobNode:'.profile__subtitle'
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
	profilePorfolio
};