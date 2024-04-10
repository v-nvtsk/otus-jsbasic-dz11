import { dayOfWeek, examineYounger } from './dz8';

describe('dayOfWeek', () => {
  it('should be a function', () => {
    expect(dayOfWeek).toBeInstanceOf(Function);
  });
  let parentEl;
  let input;
  let button;
  let resultStr;
  beforeEach(() => {
    document.body.innerHTML = '';
    parentEl = document.createElement('div');

    dayOfWeek(parentEl);

    input = parentEl.querySelector('input');
    button = parentEl.querySelector('button');
    resultStr = parentEl.querySelector('p');
  });

  it('should create initial markup', () => {
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
    expect(resultStr).toBeTruthy();
    expect(button.innerHTML).toBe('Получить день недели');
  });

  const validTestData = [
    { date: '01.01.2023', result: 'Воскресенье' },
    { date: '02.01.2023', result: 'Понедельник' },
    { date: '05.01.2023', result: 'Четверг' },
    { date: '06.01.2023', result: 'Пятница' },
    { date: '07.01.2023', result: 'Суббота' }
  ];

  validTestData.forEach(({ date, result }) => {
    it(`should return '${result}' for valid date: '${date}'`, () => {
      input.value = date;
      button.click();
      expect(resultStr.innerHTML).toBe(`День недели: ${result}`);
    });
  });

  const invalidTestData = [
    { date: '2023.01.01', result: 'Неверный формат даты' },
    { date: '04-01-2023', result: 'Неверный формат даты' }
  ];

  invalidTestData.forEach(({ date, result }) => {
    it(`should return '${result}' for invalid date: '${date}'`, () => {
      input.value = date;
      button.click();
      expect(resultStr.innerHTML).toBe(`${result}`);
    });
  });
});

describe('examineYounger', () => {
  it('should be a function', () => {
    expect(examineYounger).toBeInstanceOf(Function);
  });
  let parentEl;
  let inputs;
  let button;
  let resultStr;
  beforeEach(() => {
    parentEl = document.createElement('div');
    examineYounger(parentEl);

    inputs = parentEl.querySelectorAll('input');
    button = parentEl.querySelector('button');
    resultStr = parentEl.querySelector('p');
  });

  it('should create initial markup', () => {
    expect(inputs.length).toEqual(2);
    inputs.forEach((el) => expect(el).toBeTruthy());
    expect(button).toBeTruthy();
    expect(button.innerHTML).toBe('Сравнить');
    expect(resultStr).toBeTruthy();
  });

  const testData = [
    { date1: '01.01.2023', date2: '01.01.2023', result: 'Равны' },
    { date1: '01.01.2023', date2: '02.01.2023', result: 'Моложе - 1' },
    { date1: '02.01.2023', date2: '01.01.2023', result: 'Моложе - 2' },
    { date1: '01.01.2023', date2: '01.02.2023', result: 'Моложе - 1' },
    { date1: '02.03.2023', date2: '02.02.2023', result: 'Моложе - 2' },
    { date1: '01.01.2022', date2: '01.01.2023', result: 'Моложе - 1' },
    { date1: '01.01.2023', date2: '01.01.2022', result: 'Моложе - 2' },
    { date1: '04-01-2023', date2: '04-01-2023', result: 'Неверный формат даты' }
  ];

  testData.forEach(({ date1, date2, result }) => {
    it(`should return '${result}' for dates: '${date1}' and '${date2}'`, () => {
      inputs[0].value = date1;
      inputs[1].value = date2;
      button.click();
      expect(resultStr.innerHTML).toBe(`${result}`);
    });
  });
});
