// ================================================================================================
//*-Week №7 groupByLength (ChatGPT) (Monday)
/*
Реалізуй функцію groupByLength(words), яка групує слова за їх довжиною.
Поверни об’єкт, де ключ — довжина слова, а значення — масив слів цієї довжини.
groupByLength(["hi", "bye", "hello", "ok", "yes"])
// ➞ { 2: ["hi", "ok"], 3: ["bye", "yes"], 5: ["hello"] }
 */
// Мій варіант
function groupByLength(words) {
  const group = {};
  for (let word of words) {
    if (!group.hasOwnProperty(word.length)) {
      group[word.length] = [word];
    } else {
      group[word.length].push(word);
    }
  }
  return group;
}

// Альтернатива (більш "функціональний" стиль) від GPT
function groupByLength_(words) {
  return words.reduce((acc, word) => {
    const len = word.length;
    acc[len] = acc[len] || [];
    acc[len].push(word);
    return acc;
  }, {});
}
// ================================================================================================
// ================================================================================================
//*-Week №7 isBalanced (ChatGPT) (Tuesday)
/*
Напиши функцію isBalanced(str), яка перевіряє, чи всі типи дужок (), {}, [] відкриті й закриті
коректно та збалансовано.
isBalanced("{[()]}") ➞ true  
isBalanced("{[(])}") ➞ false  
isBalanced("((()))") ➞ true
 */
// Мій варіант ChatGPT
// Погане рішення і не працює з вкладеними прикладами "({[]}){}"
function isBalanced(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] === '(') {
      if (str[str.length - 1 - i] !== ')') {
        return false;
      }
    }
    if (str[i] === '[') {
      if (str[str.length - 1 - i] !== ']') {
        return false;
      }
    }
    if (str[i] === '{') {
      if (str[str.length - 1 - i] !== '}') {
        return false;
      }
    }
  }
  return true;
}

// Рішення від GPT
function isBalanced_(str) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let char of str) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else if ([')', ']', '}'].includes(char)) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// ================================================================================================
// ================================================================================================
//*-Week №7 ProductCatalog (ChatGPT) (Wednesday)
/*
Створи клас ProductCatalog, який дозволяє:
додавати товари через add(product)
отримати список товарів за категорією через getByCategory(category)
отримати кількість усіх товарів через count (геттер)
Приклад:
const catalog = new ProductCatalog();
catalog.add({ name: "Laptop", category: "Electronics" });
catalog.getByCategory("Electronics"); // ➞ [ { name: "Laptop", category: "Electronics" } ]
catalog.count; // ➞ 1
 */
// Мій варіант
class ProductCatalog {
  #catalog = [];
  add(product) {
    this.#catalog.push(product);
  }
  getByCategory(findCategory) {
    return this.#catalog.filter((product) => product.category === findCategory);
  }
  get count() {
    return this.#catalog.length;
  }
}

//
class ProductCatalog_ {
  #catalog = [];

  /**
   * Додає продукт до каталогу після валідації
   * @param {{ id: string|number, name: string, category: string }} product
   */
  add(product) {
    if (!product || typeof product !== 'object') {
      throw new Error('Invalid product: must be an object.');
    }
    const { id, name, category } = product;
    if (!id || !name || !category) {
      throw new Error('Product must have id, name, and category.');
    }
    if (this.getById(id)) {
      throw new Error(`Product with id '${id}' already exists.`);
    }
    this.#catalog.push({ ...product }); // захищаємо від мутацій ззовні
  }

  /**
   * Повертає всі товари в певній категорії
   * @param {string} category
   * @returns {Array}
   */
  getByCategory(category) {
    return this.#catalog
      .filter((p) => p.category === category)
      .map((p) => ({ ...p })); // копії
  }

  /**
   * Повертає продукт за його ID
   * @param {string|number} id
   * @returns {object|null}
   */
  getById(id) {
    const product = this.#catalog.find((p) => p.id === id);
    return product ? { ...product } : null;
  }

  /**
   * Повертає кількість товарів у каталозі
   */
  get count() {
    return this.#catalog.length;
  }

  /**
   * Повертає копію всіх продуктів
   */
  get all() {
    return this.#catalog.map((p) => ({ ...p }));
  }

  /**
   * Очищає весь каталог
   */
  clear() {
    this.#catalog = [];
  }

  /**
   * Переоприділений toString для зручності логування
   */
  toString() {
    return `ProductCatalog with ${this.count} items.`;
  }
}

// ================================================================================================
// ================================================================================================
//*-Week №7 batchMap (ChatGPT) (Thursday)
/*
Створи функцію batchMap(arr, fn), яка:
приймає масив arr і функцію fn
застосовує fn до кожного елемента паралельно
повертає новий масив з результатами (як map, але з колбеком, що може бути асинхронним)
Приклад:
batchMap([1, 2, 3], x => x * 2); // ➞ [2, 4, 6]
 */
// Мій варіант
function batchMap(arr, fn) {
  return arr.map((elem) => fn(elem));
}

// Варіант від GPT з перевіркою типів аргументів (захист від помилок):
function batchMap_(arr, fn) {
  if (!Array.isArray(arr))
    throw new TypeError('First argument must be an array');
  if (typeof fn !== 'function')
    throw new TypeError('Second argument must be a function');
  return arr.map(fn);
}

// ================================================================================================
// ================================================================================================
//*-Week №7 loadUsersWithPosts (ChatGPT) (Friday)
/*
Створи функцію loadUsersWithPosts(limit), яка:
завантажує перші limit користувачів із https://jsonplaceholder.typicode.com/users
для кожного користувача завантажує його пости
повертає масив об'єктів: { name, postCount }
Приклад:
await loadUsersWithPosts(2);
// [ { name: 'Leanne Graham', postCount: 10 }, { name: 'Ervin Howell', postCount: 10 } ]
 */
// Мій варіант
function loadUserWithPosts(limit) {
  const url = 'https://jsonplaceholder.typicode.com/users';
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      return users.slice(0, limit);
    });
}
// ================================================================================================
// ================================================================================================
//*-Week №7 (ChatGPT) (Saturday)
/*
 */
// Мій варіант

// ================================================================================================
// ================================================================================================
