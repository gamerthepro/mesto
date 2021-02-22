export default class UserInfo{
	constructor({porfolioNameNode, porfolioJobNode, profileAvatar}) {
		this._porfolioNameNode = porfolioNameNode;
		this._porfolioJobNode = porfolioJobNode;
		this._profileAvatar = profileAvatar;
		this._porfolioName = document.querySelector(this._porfolioNameNode);
		this._porfolioJob = document.querySelector(this._porfolioJobNode);
		this._porfolioAvatar = document.querySelector(this._profileAvatar);
		this._username = '';
		this._about = '';
		this._avatar = '';
	}

	updateUserInfo () {
		this._porfolioName.textContent = this._username;
		this._porfolioJob.textContent = this._about;
		this._porfolioAvatar.src = this._avatar;
	}

	getUserInfo() {
		return {
			porfolioName: this._username,
			porfolioJob: this._about,
			avatar: this._avatar
		};
	}

	setUserInfo ({porfolioName, porfolioJob, avatar}) {
		this._porfolioName.textContent = porfolioName;
		this._porfolioJob.textContent = porfolioJob;
		this._avatar = avatar;
	}
}