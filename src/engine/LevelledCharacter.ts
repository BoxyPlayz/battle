import BaseCharacter from './BaseCharacter.ts';

interface LeveObject {
	maxHP: number;
	atk: number;
	def: number;
	speed: number;
}

export const LevelArray: LeveObject[] = [
	{ maxHP: 10, atk: 1, def: 1, speed: 1 },
	{ maxHP: 12, atk: 2, def: 2, speed: 2 },
	{ maxHP: 15, atk: 3, def: 2, speed: 3 },
];

export default class LevelledCharacter extends BaseCharacter {
	public level: number = 0;

	constructor() {
		const [levelZero] = LevelArray;
		super(levelZero.maxHP, levelZero.atk, levelZero.def, levelZero.speed);
	}

	levelUp() {
		if (this.level >= LevelArray.length - 1) {
			console.log('You are at the maximum LV');
			return;
		}
		this.level += 1;
		this.maxHP = LevelArray[this.level].maxHP;
		this.atk = LevelArray[this.level].atk;
		this.def = LevelArray[this.level].def;
		this.spd = LevelArray[this.level].speed;
		console.log('LEVEL UP!');
	}
}
