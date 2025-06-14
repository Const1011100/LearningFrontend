// ================================================================================================
//*-Week №2 flattenAndSort (Monday)
/*
Напишіть функцію flattenAndSort, яка приймає будь-яку кількість вкладених масивів чисел,
розгладжує їх до одного рівня, прибирає дублікати та повертає відсортований масив.
Вхідні дані гарантовано складаються лише з цілих чисел.
flattenAndSort([[3, 2, 1], [4, 6, 5], [9, 7, 8]]) // → [1, 2, 3, 4, 5, 6, 7, 8, 9]
flattenAndSort([[], [1], [1, 1, 2]]) // → [1, 2]
*/
// Мій варіант
function flattenAndSort(array) {
  const unique = new Set(
    array
      .toString()
      .split(',')
      .filter((e) => e !== '')
      .map((e) => Number(e))
      .sort((a, b) => a - b)
  );
  return Array.from(unique);
}

// Ідеальний варіант від ChatGPT
// !!!:
/*
Рекомендація: використовуй flat() для більш читабельного та надійного коду.
*/
function flattenAndSort_(array) {
  const flat = array.flat(Infinity); // Розгладжує будь-який рівень вкладеності
  const unique = [...new Set(flat)];
  return unique.sort((a, b) => a - b);
}
// ================================================================================================
// ================================================================================================
//*-Week №2 camelToSnake (ChatGPT) (Tuesday)
/*
Створіть функцію camelToSnake, що переводить camelCase-рядок у snake_case.
Тільки латинські літери та цифри. Перший символ — літера.
camelToSnake('thisIs7Kyu')     // → 'this_is_7_kyu'
camelToSnake('already_snake')  // → 'already_snake'
*/
// Мій варіант з допомогою ChatGPT
function camelToSnake(str) {
  return str.replace(
    /([A-Z]|\d+)/g,
    (match, _1, offset) => (offset ? '_' : '') + match.toLowerCase()
  );
}
// Ідеальний варіант від DeepSeek
function camelToSnake_(str) {
  return str
    .replace(/([A-Z0-9])/g, '_$1') // Додає підкреслення перед великими літерами та цифрами
    .toLowerCase() // Перетворює все у нижній регістр
    .replace(/^_/, '') // Видаляє підкреслення на початку (якщо є)
    .replace(/_+/g, '_'); // Замінює множинні підкреслення на одне
}
// ================================================================================================
// ================================================================================================
//*-Week №2 Counter class (ChatGPT) (Wednesday)
/*
Реалізуйте клас Counter з приватним полем #value. Поведінка:
Метод / властивість	Опис
constructor(start = 0)	створює лічильник із початковим значенням
inc(step = 1)	збільшує #value на step, повертає нове значення
dec(step = 1)	зменшує #value на step, повертає нове значення
get value()	гетер, повертає поточне значення
static merge(...counters)	повертає новий Counter, значення якого — сума всіх #value переданих лічильників
Використайте сучасний синтаксис JS (private fields, getters, static).

Приклад
const a = new Counter(2);
a.inc();              // 3
a.dec(2);             // 1
const b = new Counter(4);
const c = Counter.merge(a, b);
c.value;              // 5
*/
// Мій варіант
class Counter {
  #value;
  constructor(start = 0) {
    this.#value = start;
  }
  inc(step = 1) {
    this.#value += step;
    return this.#value;
  }
  dec(step = 1) {
    this.#value -= step;
    return this.#value;
  }
  get value() {
    return this.#value;
  }
  static merge(...counters) {
    const sum = counters.reduce((total, counter) => {
      return total + counter.value;
    }, 0);
    return new Counter(sum);
  }
}

// Ідеальний варіант від ChatGPT
/*
Перевірка типів / валідація параметрів:
Якщо хочеш зробити клас більш захищеним від неправильного використання:
inc(step = 1) {
  if (typeof step !== 'number') throw new TypeError('Step must be a number');
  this.#value += step;
  return this.#value;
}

Захист у merge:
Якщо хочеш перевіряти, що всі аргументи — це екземпляри Counter:
static merge(...counters) {
  if (!counters.every(c => c instanceof Counter))
    throw new TypeError('All arguments must be instances of Counter');
  const sum = counters.reduce((total, counter) => total + counter.value, 0);
  return new Counter(sum);
}
*/

// ================================================================================================
// ================================================================================================
//*-Week №2 checkPassword (ChatGPT) (Thursday)
/*
Створіть функцію checkPassword, яка приймає пароль (рядок) і повертає Promise.
Promise має виконувати наступні перевірки:

Пароль повинен містити принаймні 8 символів
Пароль повинен містити принаймні одну цифру
Пароль повинен містити принаймні одну велику літеру

Якщо всі умови виконані - Promise має виконатись з повідомленням "Пароль прийнято".
Якщо хоча б одна умова не виконана - Promise має відхилитись з повідомленням,
яке вказує на конкретну помилку.
*/
// Мій варіант
function checkPassword(password) {
  return new Promise((resolve, reject) => {
    // Перевірка довжини паролю
    if (password.length < 8) {
      return reject('Пароль повинен містити принаймні 8 символів');
    }

    // Перевірка наявності принаймні однієї цифри
    if (!/[0-9]/.test(password)) {
      return reject('Пароль повинен містити принаймні одну цифру');
    }

    // Перевірка наявності принаймні однієї великої літери
    if (!/[A-Z]/.test(password)) {
      return reject('Пароль повинен містити принаймні одну велику літеру');
    }

    // Якщо всі умови виконані, вирішуємо Promise з повідомленням "Пароль прийнято"
    resolve('Пароль прийнято');
  });
}

// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
//*-Week №2 orderPizza (ChatGPT) (Friday)
/*
Уяви, що ти замовляєш піцу онлайн. Напиши функцію orderPizza, яка повертає проміс.
Цей проміс має виконуватись через 2 секунди, якщо користувач вказав назву піци.
Якщо назва піци не вказана — проміс має відхилятись з помилкою.

Умови:
Функція orderPizza(pizzaName) приймає один параметр — назву піци.

Якщо назву передано (тобто не порожній рядок), проміс має:

через 2 секунди (setTimeout) виконатись (resolve) з повідомленням:
"Ваше замовлення: піца <pizzaName> прийняте!"

Якщо назва піци не передана (наприклад, порожній рядок або undefined),
проміс має одразу відхилятись (reject) з повідомленням:
"Помилка: не вказано назву піци."
*/
// Мій варіант
function orderPizza(pizzaName) {
  return new Promise((resolve, reject) => {
    if (pizzaName) {
      setTimeout(() => {
        return resolve(`Ваше замовлення: піца ${pizzaName} прийняте!`);
      }, 2000);
    } else {
      return reject('Помилка: не вказано назву піци.');
    }
  });
}

// Ідеальний варіант від ChatGPT
function orderPizza_(pizzaName) {
  return new Promise((resolve, reject) => {
    if (!pizzaName) {
      reject('Помилка: не вказано назву піци.');
      return;
    }

    setTimeout(() => {
      resolve(`Ваше замовлення: піца ${pizzaName} прийняте!`);
    }, 2000);
  });
}
// ================================================================================================
// ================================================================================================
//*-Week №2 setupInputListener (ChatGPT) (Saturday)
/*
Реалізуй функцію setupInputListener, яка реагує на введення тексту в <input> і одразу показує його
в елементі з id="output".

<input id="inputText" />
<div id="output"></div>

При кожній зміні в полі вводу, output має оновлюватись поточним значенням input'а.
*/
// Мій варіант
function setupInputListener() {
  const input = document.getElementById('inputText');
  const output = document.getElementById('output');
  input.addEventListener('input', () => {
    output.textContent = input.value;
  });
}
setupInputListener();
// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
