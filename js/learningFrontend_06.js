// ================================================================================================
//*-Week №6 flattenAndSort (ChatGPT) (Monday)
/*
Реалізуй функцію flattenAndSort(arr), яка:
приймає масив, що містить вкладені масиви будь-якої глибини
повертає новий масив, у якому всі елементи "розгорнуті" та відсортовані по зростанню

Приклад:
flattenAndSort([1, [3, 2], [[4]], 0]) 
// ➞ [0, 1, 2, 3, 4]
*/
// Мій варіант
function flattenAndSort(arr) {
  return arr.flat(Infinity).sort((a, b) => a - b);
}
// ================================================================================================
// ================================================================================================
//*-Week №6 expandShorthandHex (ChatGPT) (Tuesday)
/*
Напиши функцію expandShorthandHex(hex), яка:
приймає CSS-кольори у короткому форматі (наприклад: #f0a)
повертає повну версію кольору (наприклад: #ff00aa)

Приклад:
expandShorthandHex("#abc") ➞ "#aabbcc"
expandShorthandHex("#f0a") ➞ "#ff00aa"
 */
// Мій варіант з допомогою ChatGPT
function expandShorthandHex(hex) {
  // Вилучаємо символ # і розділяємо символи
  const shorthand = hex.slice(1).split('');
  // Розширюємо кожен символ до двох однакових символів
  const fullHex = shorthand.map((c) => c + c).join('');
  // Додаємо # на початку і повертаємо результат
  return '#' + fullHex;
}

// Варіант від deepseek з перевіркою на наявність скороченим HEX-кольором
function expandShorthandHex_(hex) {
  // Перевіряємо, чи є вхідний рядок скороченим HEX-кольором (напр. #abc, #f0a)
  if (/^#([0-9a-fA-F]{3})$/.test(hex)) {
    const shorthand = hex.slice(1).split('');
    const fullHex = shorthand.map((c) => c + c).join('');
    return '#' + fullHex;
  }
  // Якщо вхідний рядок не є скороченим HEX-кольором, повертаємо його без змін
  return hex;
}
// ================================================================================================
// ================================================================================================
//*-Week №6 UserManager (ChatGPT) (Wednesday)
/*
Реалізуй клас UserManager, який дозволяє:
додавати користувачів у список через addUser(user)
перевіряти, чи є користувач за email: hasUser(email)
отримувати кількість унікальних користувачів
Email має бути унікальним (незалежно від регістру).

Приклад:
const um = new UserManager();
um.addUser({ name: "Ivan", email: "ivan@example.com" });
um.hasUser("IVAN@example.com") ➞ true
 */
// Мій варіант
class UserManager {
  #users = [];
  addUser(user) {
    // Захист від дублювання при addUser
    if (!this.hasEmail(user.email)) {
      this.#users.push(user);
    }
  }

  hasEmail(email) {
    return this.#users.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
  }

  // краще повертати копію інакше зовнішній код може змінити приватний масив
  get users() {
    return [...this.#users];
  }
}

// Ідеальний варіант від ChatGPT

// ================================================================================================
// ================================================================================================
//*-Week №6 retryPromise (ChatGPT) (Thursday)
/*
Створи функцію retryPromise(fn, attempts), яка:
виконує асинхронну fn() (функцію, яка повертає проміс)
якщо fn() відхиляється (reject), повторює ще attempts - 1 раз
якщо всі спроби не вдаються — кидає помилку
 */
// Мій варіант
async function retryPromise(fn, attempts) {
  let lastError;

  for (let i = 0; i < attempts; i++) {
    try {
      const result = await fn();
      return result; // Якщо успішно - повертаємо результат
    } catch (error) {
      lastError = error;
      // Якщо це не остання спроба - чекаємо перед наступною спробою
      if (i < attempts - 1) {
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * Math.pow(2, i))
        ); // Експоненціальна затримка
      }
    }
  }

  // Якщо всі спроби невдалі - кидаємо останню помилку
  throw lastError;
}
// Ідеальний варіант від ChatGPT

// ================================================================================================
// ================================================================================================
//*-Week №6 loadUserAndPosts (ChatGPT) (Friday)
/*
Реалізуй асинхронну функцію loadUserAndPosts(userId), яка:
завантажує користувача з https://jsonplaceholder.typicode.com/users/<userId>
завантажує всі пости цього користувача з /posts
повертає об'єкт { name, posts: [titles...] }

Приклад:
await loadUserAndPosts(1) 
// ➞ { name: "Leanne Graham", posts: ["...", "..."] }
 */
// Мій варіант
function loadUserAndPosts(userId) {
  // Завантажуємо дані користувача
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((userResponse) => userResponse.json())
    .then((user) => {
      // Завантажуємо пости користувача
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      )
        .then((postsResponse) => postsResponse.json())
        .then((posts) => {
          // Повертаємо об'єкт з потрібною структурою
          return {
            name: user.name,
            posts: posts.map((post) => post.title),
          };
        });
    });
}
// Ідеальний варіант на рівні сеньйора від ChatGPT

// ================================================================================================
// ================================================================================================
//*-Week №6 (ChatGPT) (Saturday)
/*

 */
// Мій варіант

// Поради від ChatGPT
/*
 */
// ================================================================================================
// ================================================================================================
