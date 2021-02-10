const formNode = document.querySelector('[name="form-adit"]');
const popupFormAdd = document.querySelector('[name="form-add"]');
const popupAddNode = document.querySelector('.popup_type_add');
const popupEditNode = document.querySelector('.popup_type_edit');
const popupImageNode = document.querySelector('.popup_type_image');
const listContenerCards = document.querySelector('.elements__contener');
const templateElement = document.querySelector('.element-template');

const formInputNemaNode = document.querySelector('.popup__input_edit_name');
const formInputjobNode = document.querySelector('.popup__input_edit_job');
const profileAddButtonNode = document.querySelector('.profile__button_open_add')
const profileButtonNode = document.querySelector('.profile__button_open_edit');

const porfolioNemaNode = document.querySelector('.profile__title');
const porfoliojobNode = document.querySelector('.profile__subtitle');

export {
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
};