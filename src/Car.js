export const POSITION_ERR_MSG = `position에 직접 값을 할당할 수 없습니다.`;

export default class Car {
  #position = 0;
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  set position(position) {
    throw new Error(POSITION_ERR_MSG);
  }
  moveForward() {
    this.#position += 1;
  }

  printResult(count) {
    const speed = new Array(count).fill('-').join('');
    console.log(`${this.#name}: ${speed}`);
  }
}
