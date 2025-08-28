
export default class Car {
  position = 0;
  name;

  constructor(name) {
    this.name = name;
  }

  moveForward() {
    this.position += 1;
  }
}
