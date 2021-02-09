export default class UserInfo{
	constructor(data){
		this._firstname = data.name;
		this._job = data.job;
		this._porfolioNemaNode= document.querySelector('.profile__title');
		this._porfoliojobNode= document.querySelector('.profile__subtitle');
	}

	getUserInfo(){
		const data = {name: this._porfolioNemaNode.textContent, job: this._porfoliojobNode.textContent}
		return data
	}

	setUserInfo(data){
		this._porfolioNemaNode.textContent = data.firstname;
		this._porfoliojobNode.textContent = data.job;
	}
}