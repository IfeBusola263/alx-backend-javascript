export default class HolbertonClass {
  /* eslint-disable no-underscore-dangle */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /* eslint-disable consistent-return */
  [Symbol.toPrimitive](obj) {
    if (obj === 'number') { return this._size; }
    if (obj === 'string') { return this._location; }
  }
}
