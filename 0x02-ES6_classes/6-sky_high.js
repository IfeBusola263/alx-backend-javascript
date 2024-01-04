import Building from './5-building';

export default class SkyHighBuilding extends Building {
    /*eslint-disable no-underscore-dangle*/
    constructor(sqft, floors) {
	super(sqft);
	this._floors = floors;
    }

    get floors() { return this._floors; }

    set floors(newFloors) {
	this._floors = newFloors;
    }

    evacuationWarningMessage() {
	return `Evacuate slowly the ${this._floors} floors`;
    }
}
