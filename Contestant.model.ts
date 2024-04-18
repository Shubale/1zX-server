export default class Contestant {
	public name: string;
	public surname: string;
	public facility: string;
	public score: number = 0;
	public lives: number = 3;
	constructor(
		name: string,
		surname: string,
		facility: string,
	) {
		this.name = name;
		this.surname = surname;
		this.facility = facility;
	}
}