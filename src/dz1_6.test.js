/* eslint-disable camelcase */
import {
  dz1_1, dz1_2, dz1_3, dz2_1, dz2_2, dz2_3,
  dz3_1, dz3_2, dz3_3,
  dz4, dz5, dz6_diff, dz6_isWord, dz6_pow
} from './dz1_6';

describe("dz 1 to 6 test suite", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  describe("dz1", () => {

    it('should be a function', () => {
      expect(dz1_1).toBeInstanceOf(Function);
      expect(dz1_2).toBeInstanceOf(Function);
      expect(dz1_3).toBeInstanceOf(Function);
    })

    describe('Test dz1_1', () => {
      /*
        1.В переменных a и b хранятся числа. Написать
      программу, которая выводит в консоль произведение
      и сумму этих чисел.
      */
      const testData = [
        { a: 6, b: 5, result: '30 11' },
        { a: -2, b: 3, result: '-6 1' },
        { a: 'text', b: 'text', result: 'Неверный ввод' }
      ]
      testData.forEach(({ a, b, result }) => {
        it(`should return '${result}' for a = ${a}, b = ${b}`, () => {

          dz1_1(a, b);
          expect(console.log).toHaveBeenCalledWith(result);
        });
      })
    })

    describe('Test dz1_2', () => {
      /*
        2.В двух переменных хранятся строки символов.
        Написать программу, которая выведет в консоль
        суммарное количество символов в обоих строках.
     */
      const testData = [
        { a: "a", b: "b", result: "2" },
        { a: "string1", b: "lorem", result: "12" },
        { a: "", b: "", result: "0" },
        { a: undefined, b: undefined, result: "0" }
      ]
      testData.forEach(({ a, b, result }) => {

        it(`should return '${result}' for a = ${a}, b = ${b}`, () => {

          dz1_2(a, b);
          expect(console.log).toHaveBeenCalledWith(result);
        });
      })

    })

    describe('Test dz1_3', () => {
      /* 
        3.*Написать программу, которая запрашивает у
        пользователя ввод трёхзначного числа, а потом
        выводит в консоль сумму цифр введённого числа.
      */
      const testData = [
        { a: '367', result: '16' },
        { a: '99', result: 'Неверный ввод' },
        { a: '1234', result: 'Неверный ввод' },
        { a: '', result: 'Неверный ввод' },
        { a: 'text', result: 'Неверный ввод' }
      ]
      testData.forEach(({ a, result }) => {
        it(`should return '${result}' for a = ${a}`, () => {
          dz1_3(a);
          expect(console.log).toHaveBeenCalledWith(result);
        });
      });
    });
  });

  describe("dz2", () => {
    it('should be a function', () => {
      expect(dz2_1).toBeInstanceOf(Function);
      expect(dz2_2).toBeInstanceOf(Function);
      expect(dz2_3).toBeInstanceOf(Function);
    })
    describe('Test dz2_1', () => {
      /*
        1.В переменных a и b хранятся числа. Вывести в
        консоль наибольшее из них
     */
      const testData = [
        { a: 1, b: 2, result: "2" },
        { a: -2, b: 1, result: "1" },
        { a: '', b: '', result: 'Неверный ввод' },
        { a: undefined, b: undefined, result: 'Неверный ввод' },
        { a: 'text', b: 'text', result: 'Неверный ввод' }
      ]

      testData.forEach(({ a, b, result }) => {
        it(`should return '${result}' for a = ${a}, b = ${b}`, () => {
          dz2_1(a, b)
          expect(console.log).toHaveBeenCalledWith(result);
        })
      })
    });

    describe('Test dz2_2', () => {
      /*
        2.Запросить у пользователя ввод числа от 1 до 12.
        Вывести в консоль название месяца, соответствующее
        этому числу (1 — январь, 2 — февраль и т.д.).
     */
      const testData = [
        { a: '1', result: 'январь' },
        { a: '12', result: 'декабрь' },
        { a: 'text', result: 'Неверный ввод' }
      ]

      testData.forEach(({ a, result }) => {
        it(`should return '${result}' for a = ${a}`, () => {
          dz2_2(a)
          expect(console.log).toHaveBeenCalledWith(result);
        })
      })
    });

    describe('Test dz2_3', () => {
      /*
        *В переменных circle и square хранятся площади круга
        и квадрата соответственно. Написать программу,
        которая определяет, поместится ли круг в квадрат.
     */

      const testData = [
        { circle: 12.56, square: 16, result: "YES" },
        { circle: 12.57, square: 16, result: "NO" },
        { circle: 3.14, square: 4, result: "YES" },
        { circle: 'text', square: 'text', result: 'Неверный ввод' },
        { circle: undefined, square: undefined, result: 'Неверный ввод' },
        { circle: '', square: '', result: 'Неверный ввод' },
        { circle: 12.56, square: undefined, result: "Неверный ввод" }
      ]

      testData.forEach(({ circle, square, result }) => {
        it(`should return '${result}' for circle = ${circle}, square = ${square}`, () => {
          dz2_3(circle, square)
          expect(console.log).toHaveBeenCalledWith(result);
        })
      })
    });
  });

  describe("dz3", () => {
    it('should be a function', () => {
      expect(dz3_1).toBeInstanceOf(Function);
      expect(dz3_2).toBeInstanceOf(Function);
      expect(dz3_3).toBeInstanceOf(Function);
    })
  })

  describe("dz4", () => {
    it('should be a function', () => {
      expect(dz4).toBeInstanceOf(Function);
    })
  });

  describe("dz5", () => {
    it('should be a function', () => {
      expect(dz5).toBeInstanceOf(Function);
    })
  })

  describe("dz6", () => {
    it('should be a function', () => {
      expect(dz6_diff).toBeInstanceOf(Function);
      expect(dz6_isWord).toBeInstanceOf(Function);
      expect(dz6_pow).toBeInstanceOf(Function);
    })
  });
})

