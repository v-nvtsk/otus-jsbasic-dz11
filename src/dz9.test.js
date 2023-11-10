/* 
1.Даны длины трёх сторон треугольника.
Определить, является ли треугольник прямоугольным.
2.Пользователь вводит число R. Написать программу, которая
выведет в консоль длину окружности и площадь круга с радиусом R.

*Пользователь вводит числа a, b и c. Написать программу,
выводящую корни квадратного уравнения с коэффициентами a, b и c.
*/

import { rectTriangle, circleLengthAndSquare, quadricEquation } from "./dz9";

describe("rightTriangle", () => {

  const testData = [
    { a: 3, b: 4, c: 5, result: true },
    { a: 4, b: 4, c: 5, result: false },
    { a: 5, b: 4, c: 5, result: false }
  ]
  it("should be a function", () => {
    expect(rectTriangle).toBeInstanceOf(Function);
  })
  it("should return right triangle", () => {
    testData.forEach(({ a, b, c, result }) => {
      expect(rectTriangle(a, b, c)).toBe(result)
    })
  })
})


describe("circleLengthAndSquare", () => {

  it("should be a function", () => {
    expect(circleLengthAndSquare).toBeInstanceOf(Function);
  })

  const testData = [
    { r: 1, result: [2 * 3.14, 3.14] },
    { r: 'text', result: [0, 0] }
  ]

  const parent = document.createElement('div');
  document.body.append(parent);
  circleLengthAndSquare(parent);
  const input = parent.querySelector('input');
  const button = parent.querySelector('button');
  const resultString = parent.querySelector('p')

  it("should create initial markup", () => {
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
    expect(button).toBeTruthy();
    expect(button.innerHTML).toBe('Calculate');
    expect(resultString).toBeTruthy();
  })

  it("should return circle and square", () => {
    testData.forEach(({ r, result }) => {
      input.value = r.toString();
      button.click();
      expect(resultString.innerText).toEqual(`Длина окружности: ${result[0]}; Площадь круга: ${result[1]}`);
    })
  })

})

describe("quadricEquation", () => {

  it("should be a function", () => {
    expect(quadricEquation).toBeInstanceOf(Function);
  })

  const testData = [
    { a: 'text', b: 2, c: 1, result: `Error` },
    { a: 0, b: 0, c: 0, result: `Error` },
    { a: '', b: '', c: '', result: `Error` },
    { a: 1, b: 0, c: 0, result: `Roots: 0` }, // x^2 = 0
    { a: 1, b: -3, c: 2, result: `Roots: 2 1` }, // x^2 - 3x + 2 = 0
    { a: 1, b: -5, c: 6, result: `Roots: 3 2` }, // x^2 - 5x + 6 = 0
    { a: 1, b: 0, c: -9, result: `Roots: 3 -3` }, // x^2 - 9 = 0
    { a: 1, b: -6, c: 9, result: `Roots: 3` }, // x^2 - 6x + 9 = 0 (Repeated roots)
    { a: 1, b: 2, c: 3, result: 'No roots' } // x^2 + 2x + 3 = 0 (Complex roots)
  ];

  const parent = document.createElement('div');
  document.body.append(parent);

  quadricEquation(parent);

  const inputA = parent.querySelector('input.inputA');
  const inputB = parent.querySelector('input.inputB');
  const inputC = parent.querySelector('input.inputC');

  const button = parent.querySelector('button');
  const resultString = parent.querySelector('p')

  it("should create initial markup", () => {
    expect(inputA).toBeTruthy();
    expect(inputB).toBeTruthy();
    expect(inputC).toBeTruthy();

    expect(button).toBeTruthy();
    expect(button.innerHTML).toBe('Calculate');

    expect(resultString).toBeTruthy();
  })

  testData.forEach(({ a, b, c, result }) => {
    it(`should return '${result}' for a = ${a}, b = ${b}, c = ${c}`, () => {
      inputA.value = a.toString();
      inputB.value = b.toString();
      inputC.value = c.toString();
      button.click();
      expect(resultString.innerHTML).toEqual(result);
    })
  })

})