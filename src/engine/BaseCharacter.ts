export default class BaseCharacter {
	public atk: number;
	public def: number;
	public spd: number;
	public hp: number;

	constructor(maxHP: number, attack: number, defense: number, speed: number) {
		this.hp = maxHP;
		this.atk = attack;
		this.def = defense;
		this.spd = speed;
	}

	basicCharacterAttack(character: BaseCharacter) {
		this.hp -= character.atk - this.def;
	}

	basicValueAttack(damage: number) {
		this.hp -= damage - this.def;
	}

	updatePost() {
		'TODO LATER';
	}
}
