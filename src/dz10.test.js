import validateString from "./dz10";

describe("validateString", () => {
  it("should be a function", () => {
    expect(validateString).toBeInstanceOf(Function);
  })

  let parent; let input; let button; let resultString
  beforeEach(() => {
    parent = document.createElement('div');
    validateString(parent);
    input = parent.querySelector('input');
    button = parent.querySelector('button');
    resultString = parent.querySelector('p');
  })

  it("should create initial markup", () => {
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
    expect(button.innerHTML).toBe('Проверить');
    expect(resultString).toBeTruthy();
  })

  const testData = [
    { str: '01.01.2023', result: 'Дата' },
    { str: '1.01.2023', result: 'Дата' },
    { str: '31.02.2023', result: 'Неизвестный тип данных' },
    { str: '21.31.2023', result: 'Неизвестный тип данных' },
    { str: '29.02.2024', result: 'Дата' },
    { str: '29.02.2000', result: 'Дата' },
    { str: '29.02.1900', result: 'Неизвестный тип данных' },
    { str: 'test@test.ru', result: 'Электронная почта' },
    { str: '+7-999-555-55-05', result: 'Номер телефона' },
    { str: '+7(999)555-55-05', result: 'Номер телефона' },
    { str: '8-999-555-55-05', result: 'Номер телефона' },
    { str: '+79995555505', result: 'Номер телефона' },
    { str: '01-01-2023', result: 'Неизвестный тип данных' },
    { str: 'test', result: 'Неизвестный тип данных' },
    { str: 'test@', result: 'Неизвестный тип данных' }
  ]

  testData.forEach(({ str, result }) => {
    it(`should return '${result}' for string: '${str}'`, () => {
      input.value = str;
      button.click();
      expect(resultString.innerHTML).toBe(`${result}`)
    })
  })

})