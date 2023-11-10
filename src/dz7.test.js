import makeInteractiveList from './dz7';

// Сверстать страницу и подключить к ней файл со скриптом.
// На странице должны быть три текстовых параграфа, 
// поле ввода и кнопка.
// Напишите скрипт, который будет выполнять следующие условия:
// 1.Кнопка скрыта, если в поле ввода нет значения.
// 2.При клике на кнопку добавляется новый параграф, содержащий
//   текст из поля ввода.
// 3. * Если параграфов становится больше 5, первый из них 
//   удаляется.

describe("makeInteractiveList", () => {
  let parent;
  let input;
  let button;

  beforeEach(() => {
    parent = document.createElement('div');
    document.body.append(parent);
    makeInteractiveList(parent);
    input = parent.querySelector('input');
    button = parent.querySelector('button');
  })


  function getPeragraphs() {
    return [...parent.querySelectorAll('p')].map(p => p.innerHTML);
  }

  it('should be a function', () => {
    expect(makeInteractiveList).toBeInstanceOf(Function);
  });

  test('should create initial markup', () => {
    const list = parent.querySelectorAll('p');

    expect(input).toBeTruthy()
    expect(input.value).toEqual('')

    expect(button).toBeTruthy()
    expect(button.innerText).toBe('Add')
    expect(button.hidden).toBe(true)

    expect(list).toBeTruthy()
    expect(list.length).toBe(3);
  })

  test('should hide button on input empty', () => {

    expect(input).toBeTruthy()
    expect(button).toBeTruthy()

    expect(input.value).toEqual('')
    expect(button.hidden).toBe(true)

    input.value = 'test'
    input.dispatchEvent(new Event('input'));
    expect(input.value).toEqual('test')
    expect(button.hidden).toBe(false)

  })

  test('should append list on button click', () => {

    input.value = 'test'
    input.dispatchEvent(new Event('input'));
    expect(input.value).toEqual('test')
    expect(button.hidden).toBe(false)
    button.click();
    expect(input.value).toEqual('')

    expect(getPeragraphs()).toEqual(['p1', 'p2', 'p3', 'test'])

  })

  test('should remove first item on list length more than five', () => {

    input.value = 'test'
    input.dispatchEvent(new Event('input'));
    button.click();
    input.value = 'test2'
    input.dispatchEvent(new Event('input'));
    button.click();
    input.value = 'test3'
    input.dispatchEvent(new Event('input'));
    button.click();



    expect(getPeragraphs()).toEqual(['p2', 'p3', 'test', 'test2', 'test3'])

  })

})
