// ================================================================================================
//*-Week №9 groupByParity (ChatGPT) (Monday)
/*
Створи функцію groupByParity(arr), яка приймає масив цілих чисел і повертає новий масив,
у якому всі парні числа розташовані спочатку (у зростаючому порядку),
а всі непарні — після них (у спадаючому порядку).

Приклад:
groupByParity([3, 1, 4, 2, 7, 6]) ➞ [2, 4, 6, 7, 3, 1]
 */
// Мій варіант
function groupByParity(arr) {
  const even = [];
  const odd = [];
  for (let n of arr) {
    n % 2 === 0 ? even.push(n) : odd.push(n);
  }
  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);
  return even.concat(odd);
}
// Ось однорядковий варіант у стилі Codewars від GPT:
const groupByParity_ = (arr) =>
  arr
    .reduce(
      (acc, n) => (n % 2 ? acc[1].push(n) : acc[0].push(n), acc),
      [[], []]
    )
    .map((g, i) => g.sort((a, b) => (i ? b - a : a - b)))
    .flat();
// ================================================================================================
// ================================================================================================
//*-Week №9 reverseWordsWithLength (ChatGPT) (Tuesday)
/*
Напиши функцію reverseWordsWithLength(str), яка приймає рядок, розвертає кожне слово у ньому та
додає довжину цього слова в кінці. Порядок слів зберігається.

Приклад:
reverseWordsWithLength("Hello world") ➞ "olleH5 dlrow5"
 */
// Мій варіант
function reverseWordsWithLength(str) {
  return str
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('') + word.length;
    })
    .join(' ');
}

// ================================================================================================
// ================================================================================================
//*-Week №9 Inventory (ChatGPT) (Wednesday)
/*
Реалізуй клас Inventory для управління товарами.
Метод addItem(name, quantity) додає товар і його кількість. Якщо товар вже є — збільшує кількість.
Метод removeItem(name, quantity) зменшує кількість. Якщо кількість стає 0 або менше — видаляє товар
з інвентарю.
Метод listItems() повертає список товарів у форматі масиву об’єктів { name, quantity }, відсортованих
за назвою.
 */
// Мій варіант
class Inventory {
  constructor() {
    this.items = {}; // Використовуємо об'єкт замість Map
  }

  addItem(name, quantity) {
    if (this.items[name] !== undefined) {
      this.items[name] += quantity; // Якщо товар є, збільшуємо кількість
    } else {
      this.items[name] = quantity; // Якщо немає, додаємо новий товар
    }
  }

  removeItem(name, quantity) {
    if (this.items[name] === undefined) {
      return; // Товару немає в інвентарі
    }

    this.items[name] -= quantity;

    if (this.items[name] <= 0) {
      delete this.items[name]; // Видаляємо товар, якщо кількість <= 0
    }
  }

  listItems() {
    return Object.entries(this.items)
      .map(([name, quantity]) => ({ name, quantity }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
// ================================================================================================
// ================================================================================================
//*-Week №9 customFilter (ChatGPT) (Thursday)
/*
Створи функцію customFilter(arr, callback), яка працює як Array.prototype.filter,
але не використовує .filter.
Callback отримує три параметри: (value, index, array).
customFilter([10, 15, 20, 25], num => num > 15) ➞ [20, 25]
 */
// Мій варіант
function customFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
// ================================================================================================
// ================================================================================================
//*-Week №9 fetchUserData (ChatGPT) (Friday)
/*
Напиши функцію fetchUserData(id), яка за допомогою fetch отримує дані користувача з
API https://jsonplaceholder.typicode.com/users/:id і повертає об’єкт з ім’ям користувача та його email.
Якщо користувача не знайдено — відхиляй проміс з помилкою.
 */
// Мій варіант
function fetchUserData(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`User with id ${id} not found`);
      }
      return response.json();
    })
    .then((user) => {
      return {
        name: user.name,
        email: user.email,
      };
    });
}
// Варіант з async/await (чистіший для читання):
async function fetchUserData_(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error(`User with id ${id} not found`);
  const user = await res.json();
  return { name: user.name, email: user.email };
}
// ================================================================================================
// ================================================================================================
//*-Week №9 togglePasswordVisibility (ChatGPT) (Saturday)
/*
 поле введення пароля <input type="password" id="password"> та кнопка <button id="toggle">Show</button>.
Напиши функцію togglePasswordVisibility(), яка при кліку на кнопку змінює тип поля між "password"
і "text" та змінює текст кнопки відповідно на "Hide" або "Show".
 */
// Мій варіант
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const toggleButton = document.getElementById('toggle');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    toggleButton.textContent = 'Show';
  }
}
// ================================================================================================
// ================================================================================================
