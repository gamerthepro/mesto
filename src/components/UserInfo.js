export default class UserInfo{
	constructor({porfolioNameNode, porfolioJobNode}) {
		this._porfolioNameNode = porfolioNameNode;
		this._porfolioJobNode = porfolioJobNode;
		this._porfolioName = document.querySelector(this._porfolioNameNode);
		this._porfolioJob = document.querySelector(this._porfolioJobNode);
	}

	getUserInfo () {
		const dataProfile = {};
		dataProfile.name = this._porfolioName.textContent;
		dataProfile.porfolioJob = this._porfolioJob.textContent;

		return dataProfile
	}

	setUserInfo ({porfolioName, porfolioJob}) {
		this._porfolioName.textContent = porfolioName;
		this._porfolioJob.textContent = porfolioJob;
	}
}