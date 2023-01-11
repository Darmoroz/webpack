export default class Article {
	constructor(prop) {
		this.head = prop.head;
		this.description = prop.description;
	}
	render() {
		let title = document.createElement('h1');
		title.innerText = this.head;

		let text = document.createElement('h1');
		text.innerText = this.description;

		let app = document.querySelector('#App');
		app.appendChild(title);
		app.appendChild(text);
	}
}
