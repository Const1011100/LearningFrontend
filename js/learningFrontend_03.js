// ================================================================================================
//*-Week №3 filterEvens (Monday)
/*
Створи функцію filterEvens(arr), яка приймає масив цілих чисел і повертає новий масив лише
з парними числами.
filterEvens([1, 2, 3, 4, 5, 6]) ➞ [2, 4, 6]
filterEvens([11, 13, 15]) ➞ []
*/
// Мій варіант
function filterEvens(arr) {
  return arr.filter((n) => n % 2 === 0);
}
// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
//*-Week №3 reverseWords (ChatGPT) (Tuesday)
/*
Створи функцію reverseWords(str), яка перевертає кожне слово в рядку, але порядок слів зберігається.
reverseWords("hello world") ➞ "olleh dlrow"
reverseWords("JavaScript is fun") ➞ "tpircSavaJ si nuf"
*/
// Мій варіант з допомогою ChatGPT
function reverseWords(str) {
  // розбиває рядок на слова за пробілом
  const words = str.split(' ');
  // кожне слово -> розбиваємо на літери -> перевертаємо -> збираємо назад
  const reversed = words.map((word) => word.split('').reverse().join(''));
  // об'єднуємо назад в рядок з пробілами
  return reversed.join(' ');
}
// Ідеальний варіант від DeepSeek
// ================================================================================================
// ================================================================================================
//*-Week №3 Person Greeting (ChatGPT) (Wednesday)
/*
Створи клас Person, який приймає ім’я в конструкторі та має метод greet(),
що повертає рядок: "Hello, my name is <name>".
const p = new Person("Oleg");
p.greet() ➞ "Hello, my name is Oleg"
*/
// Мій варіант
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}
// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
//*-Week №3 delayedHello (ChatGPT) (Thursday)
/*
Напиши функцію delayedHello(name), яка повертає Promise, що резолвиться через 1 секунду з
рядком "Hello, <name>".
await delayedHello("Sasha") ➞ "Hello, Sasha"
*/
// Мій варіант
function delayedHello(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject('Name is not found');
      return; // важливо — щоб не виконувалось далі
    }

    setTimeout(() => {
      resolve(`Hello, ${name}`);
    }, 1000);
  });
}
// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
//*-Week №3 doubleAfterDelay (ChatGPT) (Friday)
/*
Створи асинхронну функцію doubleAfterDelay(n), яка чекає 500 мс, а потім повертає n * 2.
await doubleAfterDelay(4) ➞ 8
*/
// Мій варіант
function doubleAfterDelay(n) {
  return new Promise((resolve, reject) => {
    if (typeof n !== 'number') {
      reject(new Error('Number is not found'));
      return;
    }
    setTimeout(() => {
      resolve(n * 2);
    }, 500);
  });
}
// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
//*-Week №3 liveCharacterCount (ChatGPT) (Saturday)
/*
Створи функцію setupLiveCharacterCount(), яка:
Слухає подію input на <textarea id="text">
Виводить кількість введених символів у <span id="charCount">
<textarea id="text" placeholder="Type something..."></textarea>
<div>Characters: <span id="charCount">0</span></div>
*/
// Мій варіант

function setupLiveCharacterCount() {
  const textarea = document.getElementById('text');
  const span = document.getElementById('charCount');
  textarea.addEventListener('input', () => {
    span.textContent = textarea.value.length;
  });
}
setupLiveCharacterCount();
// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
