export default class HolbertonCourse {
  /* eslint-disable no-underscore-dangle */
  /* eslint-disable valid-typeof */
  /* eslint-disable class-methods-use-this */
  constructor(name, length, student) {
    // field names can be initialized or not.

    this._validateType(name, 'string', 'Name');
    this._validateType(length, 'number', 'Length');
    this._validateType(student, 'object', 'Student');
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
      // if (!Array.isArray(newStudent)) throw TypeError('Student must be array');
      this._validateType(newStudent, 'object', 'Student');
    this._student = newStudent;
  }

  _validateType(value, expectedType, fieldName) {
    if (typeof value !== expectedType) {
      throw new TypeError(`${fieldName} must be of type ${expectedType}`);
    }
  }
}
