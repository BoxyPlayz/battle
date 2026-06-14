export default class BaseCharacter {
	protected atk: number;
	protected def: number;
	protected speed: number;

	constructor() {
		this.atk = 1;
		this.def = 1;
		this.speed = 1;
	}
}