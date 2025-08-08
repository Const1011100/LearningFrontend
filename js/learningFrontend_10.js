// ================================================================================================
//*-Week №10 mergeAndSortArrays (ChatGPT) (Monday)
/*
Напиши функцію mergeAndSortArrays(arr1, arr2), яка:
Приймає два масиви будь-якої довжини.
Об’єднує їх в один масив без дублікатів.
Сортує отриманий масив за зростанням, але так, щоб числа йшли перед рядками, а рядки — за алфавітом.
mergeAndSortArrays([3, 'banana', 1], ['apple', 3, 2]) 
// ➞ [1, 2, 3, 'apple', 'banana']
 */
// Мій варіант
function mergeAndSortArrays(arr1, arr2) {
  const array = Array.from(new Set([...arr1, ...arr2]));
  const numbers = array
    .filter((e) => typeof e === 'number')
    .sort((a, b) => a - b);
  const words = array.filter((e) => typeof e === 'string').sort();

  return numbers.concat(words);
}

/*
Метод .sort() для рядків чутливий до регістру, тому "Zebra" йтиме перед "apple".
Якщо ти хочеш сортувати алфавітно без урахування регістру, краще так:
*/
// Оптимальне рішення від GPT
function mergeAndSortArrays_(arr1, arr2) {
  const unique = Array.from(new Set([...arr1, ...arr2]));

  const numbers = [];
  const words = [];

  for (const item of unique) {
    if (typeof item === 'number') {
      numbers.push(item);
    } else if (typeof item === 'string') {
      words.push(item);
    }
  }

  numbers.sort((a, b) => a - b);
  // Метод .sort() для рядків чутливий до регістру, тому "Zebra" йтиме перед "apple".
  // Якщо ти хочеш сортувати алфавітно без урахування регістру, краще так:
  words.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

  return [...numbers, ...words];
}

// ================================================================================================
// ================================================================================================
//*-Week №10 decodeMessage (ChatGPT) (Tuesday)
/*
Напиши функцію decodeMessage(str), яка:
Приймає рядок, у якому кожне друге слово зашифроване у зворотному порядку.
Повертає розшифрований рядок.
decodeMessage("Hello dlroW this si a tset")  
// ➞ "Hello World this is a test"
 */
// Мій варіант
function decodeMessage(str) {
  const array = str.split(' ').map((word, i) => {
    if (i % 2 !== 0) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });
  return array.join(' ');
}

// Більш компактний варіант від GPT:
function decodeMessage_(str) {
  return str
    .split(' ')
    .map((word, i) => (i % 2 ? [...word].reverse().join('') : word))
    .join(' ');
}

// ================================================================================================
// ================================================================================================
//*-Week №10 Inventory (ChatGPT) (Wednesday)
/*
Створи клас Inventory, який:
Має приватне поле з масивом товарів.
Метод addItem(name, quantity), який додає товар (або збільшує його кількість, якщо він вже існує).
Метод removeItem(name, quantity), який зменшує кількість або видаляє товар, якщо кількість стає 0.
Метод getInventory(), який повертає копію списку товарів, відсортованих за алфавітом.
 */
// Мій варіант
class Inventory {
  #items = {}; // Приватне поле для зберігання товарів

  // Додати товар або збільшити його кількість
  addItem(name, quantity) {
    if (typeof quantity !== 'number' || quantity <= 0) {
      throw new Error('Quantity must be a positive number');
    }

    if (this.#items[name]) {
      this.#items[name] += quantity;
    } else {
      this.#items[name] = quantity;
    }
  }

  // Видалити товар або зменшити його кількість
  removeItem(name, quantity) {
    if (typeof quantity !== 'number' || quantity <= 0) {
      throw new Error('Quantity must be a positive number');
    }

    if (!this.#items[name]) {
      throw new Error(`Item "${name}" not found in inventory`);
    }

    if (this.#items[name] < quantity) {
      throw new Error(`Not enough quantity of "${name}" in inventory`);
    }

    this.#items[name] -= quantity;

    if (this.#items[name] === 0) {
      delete this.#items[name];
    }
  }

  // Отримати копію інвентаря, відсортованого за алфавітом
  getInventory() {
    // Створюємо копію об'єкта
    const copy = { ...this.#items };

    // Сортуємо ключі за алфавітом
    const sortedKeys = Object.keys(copy).sort((a, b) => a.localeCompare(b));

    // Створюємо новий об'єкт з відсортованими ключами
    const sortedInventory = {};
    for (const key of sortedKeys) {
      sortedInventory[key] = copy[key];
    }

    return sortedInventory;
  }
}
// ================================================================================================
// ================================================================================================
//*-Week №10 processData (ChatGPT) (Thursday)
/*
Напиши функцію processData(data, callback), яка:
Приймає масив чисел та функцію зворотного виклику.
Виконує обчислення: спочатку підносить усі числа до квадрату, потім застосовує callback до результату.
 */
// Мій варіант
function processData(data, callback) {
  const squared = data.map((num) => num ** 2);
  return callback(squared);
}
// ================================================================================================
// ================================================================================================
//*-Week №10 (ChatGPT) (Friday)
/*

 */
// Мій варіант

// ================================================================================================
// ================================================================================================
//*-Week №10 (ChatGPT) (Saturday)
/*

 */
// Мій варіант

// ================================================================================================
// ================================================================================================
