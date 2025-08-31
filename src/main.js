import readLineAsync from './readLineAsync.js';

// 입출력 예시
async function play() {
  const name = await readLineAsync('경주할 자동차 이름을 입력하세요.');
  console.log(`${name}`);
}
play();
