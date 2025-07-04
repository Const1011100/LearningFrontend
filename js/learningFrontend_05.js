// ================================================================================================
//*-Week №5 chunkArray (ChatGPT) (Monday)
/*
Опис:
Реалізуй функцію chunkArray(arr, size), яка розбиває масив arr на підмасиви довжиною size.
Останній підмасив може бути коротшим, якщо елементів не вистачає.

Приклад:
chunkArray([1, 2, 3, 4, 5], 2) ➞ [[1, 2], [3, 4], [5]]
*/
// Мій варіант
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
// ================================================================================================
// ================================================================================================
//*-Week №5 camelToKebab (ChatGPT) (Tuesday)
/*
Створи функцію camelToKebab(str), яка перетворює camelCase рядок на kebab-case.
Приклад:
camelToKebab("backgroundColor") ➞ "background-color"
camelToKebab("fontSize") ➞ "font-size"
 */
// Мій варіант з допомогою ChatGPT
function camelToKebab(str) {
  const regex = /([A-Z])/g;
  const result = str.replace(regex, '-$1').toLowerCase();
  return result;
}
// Варіант від ChatGPT
function camelToKebab_(str) {
  return str.replace(/([A-Z])/g, (_, ch) => '-' + ch.toLowerCase());
}

// ================================================================================================
// ================================================================================================
//*-Week №5 Book (ChatGPT) (Wednesday)
/*
Створи клас Book, який приймає title і author в конструкторі.
Клас повинен мати метод describe(), що повертає рядок:
"The book 'title' is written by author."
Приклад:
const b = new Book("1984", "George Orwell");
b.describe() ➞ "The book '1984' is written by George Orwell."
 */
// Мій варіант
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  describe() {
    return `The book '${this.title}' is written by ${this.author}.`;
  }
}
/*
Поради сеньйор-рівня (не обов’язково, просто як покращення):
Зробити властивості readonly через гетери (якщо не мають змінюватися)
Додати валідацію у конструкторі (наприклад, перевірку, що title — рядок)
*/
// Ідеальний варіант від ChatGPT

// ================================================================================================
// ================================================================================================
//*-Week №5 withDelay (ChatGPT) (Thursday)
/*
Реалізуй функцію withDelay(callback, ms), яка викликає callback через ms мілісекунд.
Приклад:
withDelay(() => console.log("Done"), 1000); // Виведе "Done" через 1 сек
 */
// Мій варіант
function withDelay(callback, ms) {
  setTimeout(callback, ms);
}
/*
Що може додати сеньйор (опціонально):
1. Перевірку параметрів:
if (typeof callback !== 'function') {
  throw new TypeError("Callback must be a function");
}
2. Повернення таймера (для можливого скасування):
return setTimeout(callback, ms);
*/
// Ідеальний варіант від ChatGPT

// ================================================================================================
// ================================================================================================
//*-Week №5 fetchPostTitle (ChatGPT) (Friday)
/*
Створи асинхронну функцію fetchPostTitle(id), яка отримує пост з
https://jsonplaceholder.typicode.com/posts/<id>
та повертає його title.
 */
// Мій варіант
function fetchPostTitle(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((post) => post.title)
    .catch((error) => {
      console.error('Error fetching post:', error);
      throw error;
    });
}
// Ідеальний варіант на рівні сеньйора від ChatGPT

// ================================================================================================
// ================================================================================================
//*-Week №5 (ChatGPT) (Saturday)
/*
 */
// Мій варіант

// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
