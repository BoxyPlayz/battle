export default class BaseCharacter {
	public atk: number;
	public def: number;
	public spd: number;
	public hp: number;
	public maxHP: number;

	constructor(maxHP: number, attack: number, defense: number, speed: number) {
		this.maxHP = maxHP;
		this.hp = maxHP;
		this.atk = attack;
		this.def = defense;
		this.spd = speed;
	}

	basicCharacterAttack(character: BaseCharacter): number {
		if (character.atk <= this.def) {
			console.log('NO EFFECT');
			return 1;
		}
		this.hp -= character.atk - this.def;
		return 0;
	}

	basicValueAttack(damage: number) {
		this.hp -= damage - this.def;
	}

	updatePost() {
		'TODO LATER';
	}
}
