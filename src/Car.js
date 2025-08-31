import { ERROR_MESSAGE } from './constants/message.js';

export default class Car {
  #position = 0;
  #name;

  constructor(name) {
    this.#name = this.#validateCarName(name);
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  set position(position) {
    throw new Error(ERROR_MESSAGE.POSITION_INPUT);
  }
  #validateCarName(name) {
    if (!name || name.trim() === '' || name.length > 5) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    }
    return name;
  }
  moveForward() {
    this.#position += 1;
  }

  printResult(count) {
    const speed = new Array(count).fill('-').join('');
    console.log(`${this.#name}: ${speed}`);
  }
}
