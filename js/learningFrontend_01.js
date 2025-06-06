// ================================================================================================
//*-Week №1 Unique Array Elements (ChatGPT) (Monday)
/*
Напиши функцію unique(arr), яка повертає новий масив лише з перших входжень кожного елемента
вхідного масиву.
unique([1, 2, 2, 3]);    // -> [1, 2, 3]
unique([4, 4, 4, 4]);    // -> [4]
unique([5, 6, 5, 6, 7]); // -> [5, 6, 7]
*/
// Мій варіант
function unique(arr) {
  const set = new Set(arr);
  return Array.from(set);
}

// Ідеальний варіант від ChatGPT
/*
Якщо ти хочеш повністю контролювати логіку (наприклад, враховувати типи або зробити це без Set),
можна так:
*/
function unique(arr) {
  const result = [];
  for (const el of arr) {
    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result;
}
/*
Але це повільніше для великих масивів через includes().
*/
// ================================================================================================
// ================================================================================================
//*-Week №1 Reverse Words in a String (ChatGPT) (Tuesday)
/*
Напиши функцію reverseWords(str), яка змінює порядок слів у рядку на зворотний.
Пробіли — роздільники слів.
reverseWords("Hello world")       // -> "world Hello"
reverseWords("One two three")     // -> "three two One"

*/
// Мій варіант
function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}
// Ідеальний варіант від DeepSeek
function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}
// ================================================================================================
// ================================================================================================
//*-Week №1 User Class with Counter (ChatGPT) (Wednesday)
/*
Створи клас User, який підраховує кількість створених екземплярів через статичну властивість User.count.
const u1 = new User();
const u2 = new User();
User.count; // -> 2

const a = new User();
const b = new User();
const c = new User();
User.count; // -> 3
*/
// Мій варіант
class User {
  static count = 0;
  constructor() {
    User.count++;
  }
}
// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
//*-Week №1 Delayed Sum with Callback (ChatGPT) (Thursday)
/*
Напиши функцію delayedSum(a, b, callback), яка викликає callback через 500 мс із результатом a + b.
*/
// Мій варіант
function delayedSum(a, b, callback) {
  setTimeout(() => callback(a + b), 500);
}

// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
//*-Week №1 Async Square Function (ChatGPT) (Friday)
/*
Створи функцію asyncSquare(n), яка повертає Promise, що через 300 мс повертає квадрат числа n.
*/
// Мій варіант
function asyncSquare(n) {
  return new Promise(function (resolve, reject) {
    return setTimeout(() => {
      resolve(n * n);
    }, 300);
  });
}

// Ідеальний варіант від ChatGPT
function asyncSquare(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * n), 300);
  });
}

// ================================================================================================
// ================================================================================================
//*-Week №1 Button Click Counter (ChatGPT) (Saturday)
/*
Є HTML-кнопка з id="clickMe" і початковим текстом 0.
<button id="clickMe">0</button>
Додай JS-код, який збільшує її текст на 1 при кожному кліку.
*/
// Мій варіант
const btn = document.getElementById('clickMe');
btn.addEventListener('click', () => {
  btn.textContent = Number(btn.textContent) + 1;
});
// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
