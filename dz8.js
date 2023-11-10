function validateDate(dateString) {
  if (!dateString) return null
  const [day, month, year] = dateString.split('.')
  if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12) return null
  return `${year}-${month}-${day}`
}

function dayOfWeek(parent) {
  const header = document.createElement('h2')
  header.innerHTML = 'День недели';
  parent.append(header);
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.innerHTML = 'Получить день недели'

  const resultStr = document.createElement('p');

  parent.append(input);
  parent.append(button);
  parent.append(resultStr);

  button.addEventListener('click', () => {
    const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];


    const date = new Date(validateDate(input.value));
    const inputDate = validateDate(input.value)
    if (!inputDate) {
      resultStr.innerHTML = "Неверный формат даты";
      return
    }
    const day = date.getDay(inputDate);
    resultStr.innerHTML = `День недели: ${week[day]}`
  })

}

function examineYounger(parent) {
  const header = document.createElement('h2')
  header.innerHTML = 'Сравнить даты';
  parent.append(header);

  const input1 = document.createElement('input');
  const input2 = document.createElement('input');
  const button = document.createElement('button');
  const resultStr = document.createElement('p');
  button.innerHTML = 'Сравнить';

  parent.append(input1);
  parent.append(input2);
  parent.append(button);
  parent.append(resultStr);

  button.addEventListener('click', () => {
    const inputDate1 = validateDate(input1.value)
    const inputDate2 = validateDate(input2.value)
    if (!inputDate1 || !inputDate2) {
      resultStr.innerHTML = "Неверный формат даты";
      return
    }

    const date1 = new Date(inputDate1);
    const date2 = new Date(inputDate2);
    if (date1 < date2) {
      resultStr.innerHTML = 'Моложе - 1';
    } else if (date1 > date2) {
      resultStr.innerHTML = 'Моложе - 2';
    } else {
      resultStr.innerHTML = 'Равны';
    }
  })
}

module.exports = {
  dayOfWeek,
  examineYounger
}