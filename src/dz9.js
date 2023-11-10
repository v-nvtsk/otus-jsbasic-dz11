/* 
1.Даны длины трёх сторон треугольника.
Определить, является ли треугольник прямоугольным.
2.Пользователь вводит число R. Написать программу, которая
выведет в консоль длину окружности и площадь круга с радиусом R.

*Пользователь вводит числа a, b и c. Написать программу,
выводящую корни квадратного уравнения с коэффициентами a, b и c.
*/

function rectTriangle(a, b, c) {
  return c === Math.hypot(a, b);
}

function circleLengthAndSquare(parentEl) {
  const header = document.createElement('h2')
  header.innerHTML = 'Длина окружности и площадь круга'
  parentEl.append(header)
  function calculate(r) {
    if (Number.isNaN(r)) return [0, 0];
    const circle = (2 * Math.PI.toFixed(2) * r);
    const square = (Math.PI.toFixed(2) * r ** 2);
    return [circle, square];
  }
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.innerHTML = "Calculate"
  const resultEl = document.createElement('p');

  parentEl.append(input);
  parentEl.append(button);
  parentEl.append(resultEl);

  button.addEventListener('click', (ev) => {
    ev.preventDefault()
    const r = Number(input.value);
    const result = calculate(r);
    resultEl.innerText = `Длина окружности: ${result[0]}; Площадь круга: ${result[1]}`
  })
}

function quadricEquation(parentEl) {

  const header = document.createElement('h2')
  header.innerHTML = 'ax^2+bx+c=0'
  parentEl.append(header)
  const inputA = document.createElement('input');
  inputA.classList.add('inputA')
  inputA.placeholder = 'a'
  const inputB = document.createElement('input');
  inputB.classList.add('inputB')
  inputB.placeholder = 'b'
  const inputC = document.createElement('input');
  inputC.classList.add('inputC')
  inputC.placeholder = 'c'

  const button = document.createElement('button')
  button.innerHTML = "Calculate"

  const resultString = document.createElement('p');

  parentEl.append(inputA)
  parentEl.append(inputB)
  parentEl.append(inputC)
  parentEl.append(button)
  parentEl.append(resultString);

  button.addEventListener('click', () => {
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const c = Number(inputC.value);
    // resultString.innerHTML = a + ' ' + b + ' ' + c
    // return
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) ||
      (a === 0 && b === 0 && c === 0)) {
      resultString.innerHTML = "Error";
      return;
    }
    const result = [];

    const D = b ** 2 - 4 * a * c;
    if (D > 0) {
      const x2 = (-b + Math.sqrt(D)) / (2 * a);
      const x1 = (-b - Math.sqrt(D)) / (2 * a);
      result.push(x1);
      result.push(x2);
    } else if (D === 0) {
      result.push(-b / (2 * a));
    } else {
      resultString.innerHTML = `No roots`
    }
    if (result.length > 0) {
      resultString.innerHTML = `Roots: ${result.sort((res1, res2) => res2 - res1).join(' ')}`;
    }
  })


}
module.exports = {
  rectTriangle,
  circleLengthAndSquare,
  quadricEquation
}