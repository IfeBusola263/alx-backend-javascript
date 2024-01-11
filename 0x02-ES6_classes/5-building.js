export default class Building {
  /* eslint-disable no-underscore-dangle */
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
  }

  get sqft() { return this._sqft; }

  set sqft(newSqft) { this._sqft = newSqft; }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
