interface IUsers {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}

const users: IUsers[] = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

// 1. Создать строку из имен пользователей через запятую

const userNames: string = users.map((el: IUsers) => el.name).join(", ");

console.log(userNames);

// 2. Посчитать общее количество машин у пользователей

const countCars = function (arr: IUsers[]): number {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index].cars)) {
      result += arr[index].cars!.length;
    }
  }
  return result;
};

console.log(countCars(users));

const countCars2: number = users.reduce((acc: number, el: IUsers) => {
  if (el.cars !== undefined) {
    acc += el.cars.length;
  }
  return acc;
}, 0);

console.log(countCars2);

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования (использовать Generic)

type HasEducation = Pick<IUsers, "hasEducation">;

const filterUsersWithEducation = <Type extends HasEducation>(
  arr: Type[]
): Type[] => {
  return arr.filter((el) => el.hasEducation === true);
};

console.log(filterUsersWithEducation(users));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

const filterUsersWithAnimals = (arr: IUsers[]): IUsers[] => {
  return arr.filter((el: IUsers) => el.animals);
};

console.log(filterUsersWithAnimals(users));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

const createCarsString = (arr: IUsers[]) => {
  return arr
    .reduce(
      (acc: string[], el: IUsers) =>
        el.cars?.length ? [...acc, ...el.cars] : acc,
      []
    )
    .join(", ");
};

console.log(createCarsString(users));

// 6. Создать тип объекта, в качестве ключа которого выступает строка, а в качестве значения элемент массива users (Подсказка: Record)

type KeyNameObj = "user1" | "user2" | "user3";

const userInfo: Record<KeyNameObj, IUsers> = {
  user1: users[0],
  user2: users[1],
  user3: users[2],
};

console.log(userInfo);

// 7. Создать класс Book с полями: название книги, автор, год. Класс должен быть описан интерфейсом. Должны присутствовать геттеры и сеттеры.
// Должен быть статический метод, который в качестве аргумента принимает экземпляр класса Book и возвращает строку формата: автор-название-год.

class Book {
  constructor(
    private name: string,
    private author: string,
    private year: number
  ) {}

  set setName(name: string) {
    this.name = name;
  }
  get getName() {
    return this.name;
  }
  set setAuthor(author: string) {
    this.author = author;
  }
  get getAuthor() {
    return this.author;
  }
  set setYear(year: number) {
    this.year = year;
  }
  get getYear() {
    return this.year;
  }

  static bookInfo(obj: Book) {
    return `${obj.author}-${obj.name}-${obj.year}`;
  }
}

const book = new Book("The Sign of Four", "Arthur Conan Doyle", 1890);

console.log(Book.bookInfo(book));

// 8. Протипизировать функцию используя keyof и generic

function extractData<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

const object = {
  user: {
    name: "Chris",
  },
};

console.log(extractData(object, "user").name);
