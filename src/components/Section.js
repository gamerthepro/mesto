export default class Section {
	constructor ({ items, renderer }, containerSelector) {
		this._renderedItems = items;
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
	}

	// Отрисовка каждого элемента
	render() {
		this._renderedItems.forEach(item => this._renderer(item));
	}

	// принимает DOM-элемент и добавляет его в контейнер
	addItem(element, isArray){
      if (isArray) {
			this._container.append(element);
      } else {
			this._container.prepend(element);
      }
	}

	prependItem (element) {
		this._container.prepend(element);
	}
}