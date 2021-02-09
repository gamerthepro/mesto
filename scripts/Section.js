export default class Section {
	constructor({items, renderer}, containerSelector){
		this._Items = items;
		this._renderer = renderer;
		this._container = containerSelector
	}

	render() {
		this._Items.forEach((item) => {
			this._renderer(item);
		});
	}

	addItem(element, isArray){
		if (isArray) {
			this._container.append(element);
		} else {
			this._container.prepend(element);
		}
	}
}