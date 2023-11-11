/* eslint-disable camelcase */
function dz1_1(a, b) {
  const num1 = Number(a);
  const num2 = Number(b);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Неверный ввод");
    return "Неверный ввод"
  }
  const result = `${num1 * num2} ${num1 + num2}`
  console.log(result);
  return result
}

function dz1_2(a = '', b = '') {
  const result = String(a.length + b.length);
  console.log(result);
  return result
}

function dz1_3(a) {
  const num = Number(a);
  let result = '';
  if (Number.isNaN(num) || num < 100 || num > 999) {
    result = "Неверный ввод";
  } else {
    result = a.split('').reduce((acc, curr) => acc + Number(curr), 0);
  }
  console.log(String(result));
  return result
}
function dz2_1(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Неверный ввод");
    return
  }
  const result = String((a > b) ? a : b);
  console.log(result);
}
function dz2_2(a) {
  const year = ["январь", "февраль", "март", "апрель", "май", "июнь",
    "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
  const num = Number(a);
  if (Number.isNaN(num) || num < 1 || num > 12) {
    console.log("Неверный ввод");
    return
  }
  console.log(year[num - 1]);
}

function dz2_3(circle, square) {
  if (typeof circle !== 'number' || typeof square !== 'number') {
    console.log("Неверный ввод");
    return
  }
  const r = 2 * Math.sqrt(circle / Math.PI);
  const a = Math.sqrt(square);
  console.log(r <= a ? "YES" : "NO")
}
function dz3_1() {
  let sum = 50
  for (let i = 51; i <= 100; i++) {
    sum += i;
  }
  console.log(String(sum));
  return sum
}

function dz3_2() {
  for (let i = 1; i < 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}
function dz3_3(a) {
  let num = Number(a);
  if (Number.isNaN(num)) {
    console.log("Неверный ввод");
    return
  }
  if (num < 1) {
    console.log("Неверный ввод");
    return
  }
  let sum = 0;
  let counter = 0
  num = num % 2 === 0 ? num - 1 : num;
  for (let i = 1; i <= num; i += 2) {
    sum += i;
    counter++;
  }
  console.log(sum / counter);
}


function dz4(a) {
  const age = Number(a);
  if (Number.isNaN(age)) {
    console.log("Неверный ввод");
    return
  }
  const user = { name: 'John', age }
  const admin = { role: "admin", ...user };
  const { name, role } = admin;
  console.log(name);
  console.log(role);
  console.log(user.age);
}
function dz5(...rest) {
  const sum = rest.reduce((acc, curr) => acc + curr, 0)
  console.log(sum);
  const arr2 = rest.map(el => el * 2)
  console.log(arr2.join(' '));
  console.log(`${Math.max(...arr2)} ${Math.min(...arr2)}`);
}

function dz6_diff(a, b) {
  console.log((a > b) ? a - b : b - a);
}

function dz6_isWord(str) {
  if (str.split(' ').length > 1) return false;
  return true;
}

function dz6_pow(a, x) {
  return a ** x;
}

export  {
  dz1_1,
  dz1_2,
  dz1_3,
  dz2_1,
  dz2_2,
  dz2_3,
  dz3_1,
  dz3_2,
  dz3_3,
  dz4,
  dz5,
  dz6_diff,
  dz6_isWord,
  dz6_pow
}