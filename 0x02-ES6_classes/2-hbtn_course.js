export default class HolbertonCourse {
  /* eslint-disable no-underscore-dangle */
  constructor(name, length, student) {
    // field names can be initialized or not.
    this._name = name;
    this._length = length;
    this._student = student;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be string');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be number');
    }
    this._length = newLength;
  }

  get student() {
    return this._student;
  }

  set student(newStudent) {
    if (!Array.isArray(newStudent)) throw TypeError('Student must be array');
    this._student = newStudent;
  }
}
