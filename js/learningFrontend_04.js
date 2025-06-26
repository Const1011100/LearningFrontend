// ================================================================================================
//*-Week №4 removeDuplicates (Monday)
/*
Реалізуй функцію removeDuplicates(arr), яка приймає масив і повертає новий масив без повторюваних
елементів, зберігаючи порядок першої появи.

Приклад:
removeDuplicates([1, 2, 2, 3, 1, 4]) ➞ [1, 2, 3, 4]
*/
// Мій варіант
function removeDuplicates(arr) {
  return arr.reduce((result, elem) => {
    if (!result.includes(elem)) {
      result.push(elem);
    }
    return result;
  }, []);
}
// Ось як на таку задачу (removeDuplicates) міг би подивитися Senior JavaScript Developer
/*
Set — для перевірки унікальності O(1) замість includes O(n)
for...of — як найчитабельніший цикл
const та let — для безпеки
*/
function removeDuplicates_(arr) {
  const seen = new Set();
  const result = [];

  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}
/*
Чому це рішення краще?
Критерій	       Твоє рішення	     Сеньйор-рішення
Перевірка	       includes (O(n))	 Set.has (O(1))
Продуктивність	   O(n²)             O(n)
Читабельність	   добра	         ще краща для великих команд
Гнучкість	       менша	         можна легко розширити
*/

// ================================================================================================
// ================================================================================================
//*-Week №4 maskify (ChatGPT) (Tuesday)
/*
Створи функцію maskify(str), яка приховує всі символи в рядку, крім останніх чотирьох, замінюючи
їх на #. Якщо рядок має менше ніж 4 символи — поверни його без змін.

Приклад:
maskify("123456789") ➞ "#####6789"
maskify("abc") ➞ "abc"
 */
// Мій варіант з допомогою ChatGPT
function maskify(str) {
  if (str.length < 4) {
    return str;
  }
  const stars = str.slice(0, str.length - 4).replace(/./g, '#');
  const end = str.slice(str.length - 4);
  return stars + end;
}
// Ідеальний варіант від ChatGPT
const maskify_ = (s) =>
  s.length <= 4 ? s : s.slice(0, -4).replace(/./g, '#') + s.slice(-4);

// ================================================================================================
// ================================================================================================
//*-Week №4 Rectangle (ChatGPT) (Wednesday)
/*
Створи клас Rectangle, який приймає width і height в конструкторі.
Клас має методи:

getArea() → повертає площу прямокутника
getPerimeter() → повертає периметр

Приклад:
const r = new Rectangle(4, 5);
r.getArea() ➞ 20
r.getPerimeter() ➞ 18
 */
// Мій варіант
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
}

// Ідеальний варіант від ChatGPT
class Rectangle_ {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }
}

// ================================================================================================
// ================================================================================================
//*-Week №4 runWithCallback (ChatGPT) (Thursday)
/*
Створи функцію runWithCallback(value, callback), яка викликає callback, передаючи туди value,
але з затримкою 500 мс.

Приклад:
runWithCallback("Hello", console.log); 
// Через 500мс виведе "Hello"
 */
// Мій варіант
function runWithCallback(value, callback) {
  return setTimeout(() => {
    callback(value);
  }, 500);
}
// Ідеальний варіант від ChatGPT
function runWithCallback_(value, callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  return setTimeout(() => callback(value), 500);
}

// ================================================================================================
// ================================================================================================
//*-Week №4 fetchUserName (ChatGPT) (Friday)
/*
Реалізуй асинхронну функцію fetchUserName(id), яка виконує HTTP-запит на
https://jsonplaceholder.typicode.com/users, знаходить користувача за id і повертає його name.

Приклад:
await fetchUserName(3) ➞ "Clementine Bauch"
 */
// Мій варіант

// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
//*-Week №4 changeTheme (ChatGPT) (Saturday)
/*
Опис:
Створи функцію setupThemeToggle(), яка слухає клік по кнопці id="toggleTheme".
Кожен клік має додавати/видаляти клас dark на body.

HTML:
<button id="toggleTheme">Toggle Theme</button>

Приклад:
Клік → <body class="dark">
Клік знову → <body> (без класу)
 */
// Мій варіант

// Ідеальний варіант від ChatGPT
// ================================================================================================
// ================================================================================================
