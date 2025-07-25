// ================================================================================================
//*-Week №8 filterByAdjacentSum (ChatGPT) (Monday)
/*
Напиши функцію filterByAdjacentSum(arr, threshold), яка повертає новий масив, де залишаються
лише ті елементи, сума яких з їхнім правим сусідом перевищує threshold.
Якщо елемент останній, він не враховується.
filterByAdjacentSum([1, 4, 3, 2], 5) ➞ [4, 3]
 */
// Мій варіант
function filterByAdjacentSum(arr, threshold) {
  return arr.filter((num, i, array) => {
    return i < array.length - 1 && num + array[i + 1] > threshold;
  });
}

// ================================================================================================
// ================================================================================================
//*-Week №8 compressConsecutive (ChatGPT) (Tuesday)
/*
Створи функцію compressConsecutive(str), яка замінює послідовні однакові символи в рядку на
символ+кількість.
Рядок складається лише з букв (великі й малі). Якщо літера зустрічається лише один раз — кількість
не вказується.
compressConsecutive("aaabbCdee") ➞ "a3b2C1d1e2"
 */
// Мій варіант ChatGPT
function compressConsecutive(str) {
  if (!str) return '';

  let result = '';
  let target = str[0];
  let counter = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === target) {
      counter++;
    } else {
      result += target + counter;
      target = str[i];
      counter = 1;
    }
  }
  // Додаємо останній символ
  result += target + counter;
  return result;
}
// ================================================================================================
// ================================================================================================
//*-Week №8 BookShelf (ChatGPT) (Wednesday)
/*
Реалізуй клас BookShelf, який зберігає книги (рядки).
Метод addBook(title) додає книгу.
Метод removeBook(title) видаляє першу знайдену книгу.
Метод listBooks() повертає всі книги в алфавітному порядку.
Гетер count повертає кількість книг.
 */
// Мій варіант
class BookShelf {
  #books = [];
  addBook(title) {
    this.#books.push(title);
  }
  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index !== -1) {
      this.#books.splice(index, 1);
    }
  }
  listBooks() {
    // Сортування книг за алфавітом рядків
    return [...this.#books].sort((a, b) => a.localeCompare(b));
  }
  get count() {
    return this.#books.length;
  }
}

// ================================================================================================
// ================================================================================================
//*-Week №8 customMapWithCallback (ChatGPT) (Thursday)
/*
Створи функцію customMap(arr, callback), яка працює як Array.prototype.map, але не використовує
.map всередині.
Callback отримує два аргументи: значення та індекс.
customMap([1, 2, 3], (val, i) => val + i) ➞ [1, 3, 5]
 */
// Мій варіант
function customMap(arr, callback) {
  if (Array.isArray(arr) || typeof callback !== 'function') return [];

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
}

// Альтернатива від ChatGPT (за бажанням — ES6 стиль):
const customMap_ = (arr, callback) =>
  Array.isArray(arr) && typeof callback === 'function'
    ? arr.reduce((acc, val, i) => [...acc, callback(val, i)], [])
    : [];
// ================================================================================================
// ================================================================================================
//*-Week №8 delayedSeriesSum (ChatGPT) (Friday)
/*
Напиши функцію delayedSeriesSum(arr), яка повертає проміс.
Функція повинна поступово, з затримкою 100 мс між кожним елементом, додавати числа з масиву.
Після завершення повертає суму.
(Можна використати setTimeout або await new Promise з setTimeout)
await delayedSeriesSum([1, 2, 3]) ➞ 6  // після 300 мс
 */
// Мій варіант
function delayedSeriesSum(arr) {
  return new Promise((resolve) => {
    let sum = 0;
    let index = 0;

    function addNext() {
      if (index < arr.length) {
        sum += arr[index];
        index++;
        setTimeout(addNext, 100);
      } else {
        resolve(sum);
      }
    }

    addNext();
  });
}
// Альтернативна реалізація з async/await від GPT (як варіант для порівняння):
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedSeriesSum_(arr) {
  let sum = 0;
  for (const num of arr) {
    await sleep(100);
    sum += num;
  }
  return sum;
}
// ================================================================================================
// ================================================================================================
//*-Week №8 (ChatGPT) (Saturday)
/*

 */
// Мій варіант

// ================================================================================================
// ================================================================================================
