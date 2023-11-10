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

  });

  describe("dz2", () => {
    it('should be a function', () => {
      expect(dz2_1).toBeInstanceOf(Function);
      expect(dz2_2).toBeInstanceOf(Function);
      expect(dz2_3).toBeInstanceOf(Function);
    })
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

