import { ZERO } from './Constants.ts';

export const getRandomInt = (max: number, allowZero = true): number => {
	let number = Math.floor(Math.random() * max);
	if (number === ZERO && !allowZero) {
		while (number === ZERO) {
			number = Math.floor(Math.random() * max);
		}
	}
	return number;
};
