export default class UserInfo{
	constructor({porfolioNameNode, porfolioJobNode, profileAvatar}) {
		this._porfolioNameNode = porfolioNameNode;
		this._porfolioJobNode = porfolioJobNode;
		this._profileAvatar = profileAvatar;
		this._usernameNode = document.querySelector(this._porfolioNameNode);
		this._aboutNode = document.querySelector(this._porfolioJobNode);
		this._avatarNode = document.querySelector(this._profileAvatar);
		this._username = '';
		this._about = '';
		this._avatar = '';
	}

	updateUserInfo () {
		this._usernameNode.textContent = this._username;
		this._aboutNode.textContent = this._about;
		this._avatarNode.src = this._avatar;
	}

	getUserInfo() {
		return {
			name: this._username,
			about: this._about,
			avatar: this._avatar
		};
	}

	setUserInfo ({ name, about, avatar }) {
		this._username = name;
		this._about = about;
		this._avatar = avatar;
	}
}