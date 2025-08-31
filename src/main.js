import Car from './Car.js';
import readLineAsync from './readLineAsync.js';

// 입출력 예시
async function play() {
  const name = await readLineAsync('경주할 자동차 이름을 입력하세요: ');
  const racingCar = new Car(name);
  console.log(racingCar.name);

  racingCar.moveForward();
  racingCar.printResult(1);
}
play();
