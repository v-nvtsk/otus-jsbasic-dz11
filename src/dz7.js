function makeInteractiveList(parent) {
  const header = document.createElement('h2');
  header.innerHTML = 'Список';
  parent.append(header);

  const input = document.createElement('input');
  const button = document.createElement('button');
  button.innerText = 'Add';
  button.hidden = true;

  parent.append(input);
  parent.append(button);

  const paragraphsArr = ['p1', 'p2', 'p3'];
  paragraphsArr.forEach((el) => {
    const p = document.createElement('p');
    p.innerHTML = el;
    parent.append(p);
  });

  input.addEventListener('input', () => {
    button.hidden = !input.value;
  });

  // const paragraphs = getParagraphs(paragraphsArr);
  // parent

  button.addEventListener('click', (ev) => {
    ev.preventDefault();
    const p = document.createElement('p');
    p.innerHTML = input.value;
    input.value = '';
    parent.append(p);
    const paragraphs = parent.querySelectorAll('p');
    if (paragraphs.length > 5) paragraphs[0].remove();
  });
}

export default makeInteractiveList;
