function validateString(parent) {

  const input = document.createElement('input')
  const button = document.createElement('button')
  button.innerHTML = 'Проверить';
  const resultString = document.createElement('p');

  parent.append(input);
  parent.append(button);
  parent.append(resultString);

  button.addEventListener('click', () => {
    const str = input.value;

    if (/\d{1,2}\.\d{1,2}\.\d{4}/gi.test(str)) {
      resultString.innerHTML = 'Дата';
    } else if (/\w@\w+\.\w+/gi.test(str)) {
      resultString.innerHTML = 'Электронная почта';
    } else if (/(\+)?(7|8)-?\(?\d{3}\)?-?\d{3}(-?\d{2}){2}/ig.test(str)) {
      resultString.innerHTML = 'Номер телефона'
    } else {
      resultString.innerHTML = 'Неизвестный тип данных'
    }
  })

}
module.exports = validateString