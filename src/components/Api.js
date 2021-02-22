const onPromise = res => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка: ${res.status}`);
}

export default class Api {
		constructor({ url, headers }) {
		this._url = url;
		this._headers = headers;
	}

	getUserInfoServ() {
		return fetch(`${this._url}users/me`, {
			headers: this._headers
		})
		.then(onPromise)
	}

	saveUserInfo(data) {
		return fetch(`${this._url}users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify(data)
		})
		.then(onPromise)
	}

	getCardList() {
		return fetch(`${this._url}cards`, {
			headers: this._headers
		})
		.then(onPromise)
	}

	saveNewCard(data) {
		return fetch(`${this._url}cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(data)
		})
		.then(onPromise)
	}

	removeCard(cardId) {
		return fetch(`${this._url}cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		})
		.then(onPromise)
	}

	addLike(cardId) {
		return fetch(`${this._url}cards/likes/${cardId}`, {
			method: 'PUT',
			headers: this._headers,
		})
		.then(onPromise)
	}

	delLike(cardId) {
		return fetch(`${this._url}cards/likes/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		})
		.then(onPromise)
	}

	updateAvatar(link) {
		return fetch(`${this._url}users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify(link)
	})
	.then(onPromise)
	}
}