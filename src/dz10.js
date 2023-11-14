function validateString(parent) {
  const header = document.createElement('h2')
  header.innerHTML = 'Валидация дата/e-mail/Телефон'
  parent.append(header)

  const input = document.createElement('input')
  const button = document.createElement('button')
  button.innerHTML = 'Проверить';
  const resultString = document.createElement('p');

  parent.append(input);
  parent.append(button);
  parent.append(resultString);

  button.addEventListener('click', () => {
    const inputString = input.value;
    function isDate(str) {
      if (/\d{1,2}\.\d{1,2}\.\d{4}/gi.test(str)) {
        const [day, month, year] = str.split('.').map(Number);
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
          if (month === 2 && day === 29 && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) {
            return true
          }
          return false
        }
        return true
      }
      return false
    }

    function ieEmail(str) {
      return /\w@\w+\.\w+/gi.test(str)
    }

    function isPhone(str) {
      return /(\+)?(7|8)-?\(?\d{3}\)?-?\d{3}(-?\d{2}){2}/ig.test(str)
    }

    if (isDate(inputString)) {
      resultString.innerHTML = 'Дата';
    } else if (ieEmail(inputString)) {
      resultString.innerHTML = 'Электронная почта';
    } else if (isPhone(inputString)) {
      resultString.innerHTML = 'Номер телефона'
    } else {
      resultString.innerHTML = 'Неизвестный тип данных'
    }
  })

}
export default validateString;