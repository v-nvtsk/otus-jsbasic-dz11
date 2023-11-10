/* eslint-disable camelcase */
import {
  dz1_1, dz1_2, dz1_3, dz2_1, dz2_2, dz2_3,
  dz3_1, dz3_2, dz3_3,
  dz4, dz5, dz6_diff, dz6_isWord, dz6_pow
} from './dz1_6';

describe("dz 1 to 6 test suite", () => {
  describe("dz1", () => {

    it('should be a function', () => {
      expect(dz1_1).toBeInstanceOf(Function);
      expect(dz1_2).toBeInstanceOf(Function);
      expect(dz1_3).toBeInstanceOf(Function);
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

