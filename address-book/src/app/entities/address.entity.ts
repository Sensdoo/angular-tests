import { Entrance } from './entrance.entity';

export class Address {
	constructor(
		street: string,
		house: number,
		building: number,
		entrances: Entrance[],
		id?: number
	) {}
}
