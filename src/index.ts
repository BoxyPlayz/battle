import readline from 'node:readline';
import { getRandomInt } from './Utils.ts';
import BaseCharacter from './engine/BaseCharacter.ts';

enum States {
	fight,
	wander,
}

let char: BaseCharacter | null = null,
	currentState: States = States.wander;

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.on('line', (input) => {
	if (currentState === States.fight) {
		if (char === null) {
			return;
		}
		switch (input.trim().toLowerCase()) {
			case 'attack':
				char.basicValueAttack(20);
				console.log(`Enemy is now at ${char.hp} HP`);
				break;

			case 'check':
				console.log(
					`Enemy has ${char.atk} ATK, ${char.def} DEF, and ${char.spd} SPEED`
				);
				break;

			case 'flee':
				currentState = States.wander;
				break;

			default:
				console.log(`Sent: ${input}`);
				break;
		}
	}
	if (currentState === States.wander) {
		switch (input.trim().toLowerCase()) {
			case 'fight':
				char = new BaseCharacter(
					100,
					getRandomInt(5, false),
					getRandomInt(5, false),
					getRandomInt(10, false)
				);
				currentState = States.fight;
				break;

			default:
				break;
		}
	}
});
