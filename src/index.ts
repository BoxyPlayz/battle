import readline from 'node:readline';
import { getRandomInt } from './Utils.ts';
import BaseCharacter from './engine/BaseCharacter.ts';
import LevelledCharacter from './engine/LevelledCharacter.ts';

enum States {
	fight,
	wander,
	skillSelect,
}

let enemy: BaseCharacter | null = null,
	currentState: States = States.wander;
const player: LevelledCharacter = new LevelledCharacter();

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('Battle! Start!');

const postAttack = () => {
	if (enemy) {
		if (enemy.hp <= 0) {
			player.levelUp();
			console.log('YOU WON!');
			currentState = States.wander;
			return;
		}
		console.log('ENEMY TURN');
		console.log("The enemy's turn has ended.");
	}
};

rl.on('line', (input) => {
	if (currentState === States.skillSelect) {
		if (enemy) {
			switch (input.trim().toLowerCase()) {
				case 'triple':
					console.log('You attack 3 times!');
					enemy.basicCharacterAttack(player);
					enemy.basicCharacterAttack(player);
					enemy.basicCharacterAttack(player);
					break;
				case 'bypass':
					console.log(
						'You did an attack that passed through DEFENSE!'
					);
					enemy.hp -= player.atk / 2;
					console.log(`Enemy HP is at ${enemy.hp}`);
					break;
				default:
					return;
			}
			currentState = States.fight;
			postAttack();
		}
	}
	else if (currentState === States.fight) {
		if (enemy === null) {
			return;
		}
		switch (input.trim().toLowerCase()) {
			case 'attack':
				const result = enemy.basicCharacterAttack(player);
				if (result === 0) {
					console.log(`Enemy is now at ${enemy.hp} HP`);
				}
				break;

			case 'check':
				console.log(
					`Enemy has ${enemy.atk} ATK, ${enemy.def} DEF, and ${enemy.spd} SPEED`
				);
				break;

			case 'flee':
				currentState = States.wander;
				console.log('You escaped!');
				return;

			case 'skill':
				console.log('Which Skill?');
				currentState = States.skillSelect;
				return;

			default:
				console.log(`Invalid: ${input.trim().toLowerCase()}`);
				return;
		}
		postAttack();
	}
	else if (currentState === States.wander) {
		switch (input.trim().toLowerCase()) {
			case 'fight':
				enemy = new BaseCharacter(
					getRandomInt(10, false),
					getRandomInt(3, false),
					getRandomInt(3, false),
					getRandomInt(10, false)
				);
				enemy.hp = enemy.maxHP;
				currentState = States.fight;
				console.log('You have entered a fight.');
				break;

			case 'heal':
				if (player.hp === player.maxHP) {
					console.log('You are already at max HP!');
				} else if (player.hp + 5 <= player.maxHP) {
					player.hp += 5;
					console.log('You feel much better!');
				} else {
					player.hp = player.maxHP;
					console.log('You feel like new!');
				}
				break;

			case 'stats':
				console.log(`MAX HP: ${player.maxHP}`);
				console.log(`HP: ${player.hp}`);
				console.log(`LV: ${player.level}`);
				console.log(`ATK: ${player.atk}`);
				console.log(`DEF: ${player.def}`);
				console.log(`SPEED: ${player.spd}`);
				break;

			case 'lvup':
				player.levelUp()
				break;

			default:
				break;
		}
	}
});
