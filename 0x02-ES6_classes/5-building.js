export default class Building {
    /*eslint-disable no-underscore-dangle*/
    constructor(sqft) {
	this._sqft = sqft;

	if (!this.evacuationWarningMessage)
	    evacuationWarningMessage();
    }

    get sqft() { return this._sqft; }

    set sqft(newSqft) { this._sqft = newSqft; }

    evacuationWarningMessage() {
	throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
