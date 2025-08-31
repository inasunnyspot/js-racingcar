import Car, { POSITION_ERR_MSG } from '../src/main';

describe('Cart Raging Game', () => {
  let car;

  beforeEach(() => {
    car = new Car('Max');
  });

  test('자동차는 이름을 상태로 가질 수 있다.', () => {
    expect(car.name).toBe('Max');
  });

  test('자동차는 위치 값을 가지며, 초기 상태는 0이다.', () => {
    expect(car.position).toBe(0);
  });

  test('자동차에 직접 위치를 할당 할 수 없다.', () => {
    expect(() => {
      car.position = -100;
    }).toThrow(POSITION_ERR_MSG);
  });

  test('자동차는 전진할 수 있으며 한 번에 1만큼 전진한다.', () => {
    car.moveForward();
    expect(car.position).toBe(1);
  });
});
