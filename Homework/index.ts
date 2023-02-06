// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

interface IUser {
  name: string;
  phone?: string;
  email?: string;
  animals?: string[];
  cars?: string[];
  hasChildren?: boolean;
  hasEducation?: boolean;
}

const users: IUser[] = [
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

//     1. Создать строку из имен пользователей через запятую

interface IFindName {
  name: string;
}

function findNamesInArray<T extends IFindName>(arr: T[]): void {
  const names: string = arr.map(({ name }) => name).join(", ");
  console.log(names);
}

findNamesInArray(users);

//     2. Посчитать общее количнство машин у пользователей

interface IFindCar {
  cars?: string[];
}

function countCarInArray<T extends IFindCar>(arr: T[]): void {
  const countCars: number = arr
    .map(({ cars }) => cars)
    .reduce((acc, cur) => (cur ? acc + cur.length : acc), 0);
  console.log(countCars);
}

countCarInArray(users);

//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования (использовать Generic)

interface IFindEducation {
  name: string;
  hasEducation?: boolean;
}

function findWhoHasEducationInArry<T extends IFindEducation>(arr: T[]): void {
  const findEducatedPeople: T[] = arr.filter(
    ({ hasEducation }) => hasEducation
  );
  const namesOfEducatedPeople: string = findEducatedPeople
    .map(({ name }) => name)
    .join(", ");
  console.log(findEducatedPeople, namesOfEducatedPeople);
}

findWhoHasEducationInArry(users);

//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

interface IFindEducation {
  name: string;
  animals?: string[];
}

function findWhoHasAnimalsInArry<T extends IFindEducation>(arr: T[]): void {
  const findEducatedPeople: T[] = arr.filter(({ animals }) => animals);
  const namesOfEducatedPeople: string = findEducatedPeople
    .map(({ name }) => name)
    .join(", ");
  console.log(findEducatedPeople, namesOfEducatedPeople);
}

findWhoHasAnimalsInArry(users);

//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

function getBrandsOfCarsInArray<T extends IFindCar>(arr: T[]): string {
  const getBrands: string = arr
    .reduce(
      (acc: string[], cur) =>
        cur.cars?.values ? [...acc, ...cur?.cars] : [...acc],
      []
    )
    .join(", ");
  console.log(getBrands);
  return getBrands;
}
getBrandsOfCarsInArray(users);

// 6. Создать тип объекта, в качестве ключа которого выступает строка, а в качестве значения элемент массива users (Подсказка: Record)

enum USERS {
  USER_1 = "USER_1",
  USER_2 = "USER_2",
  USER_3 = "USER_3",
}

const infoAbourUsers: Record<USERS, IUser> = {
  [USERS.USER_1]: users[0],
  [USERS.USER_2]: users[1],
  [USERS.USER_3]: users[2],
};

console.log(infoAbourUsers);

// 7. Создать класс Book с полями: название книги, автор, год. Класс должен быть описан интерфейсом. Должны присутствовать геттеры и сеттеры.
// Должен быть статический метод, который в качестве аргумента принимает экземпляр класса Book и возвращает строку формата: автор-название-год.

interface IBookInfo {
  title: string;
  author: string;
  year: number;
  setTitle(title: string): void;
  setAuthor(author: string): void;
  setYear(year: number): void;
  get Title(): string;
  get Author(): string;
  get Year(): number;
}

class Book implements IBookInfo {
  title: string;
  author: string;
  year: number;

  constructor(...arg: any[]) {
    this.title = arg[0];
    this.author = arg[1];
    this.year = arg[2];
  }

  setTitle(title: string) {
    this.title = title;
  }

  setAuthor(author: string) {
    this.author = author;
  }

  setYear(year: number) {
    this.year = year;
  }

  get Title() {
    return this.title;
  }

  get Author() {
    return this.author;
  }

  get Year() {
    return this.year;
  }

  static getInfo(book: IBookInfo): string {
    return `${book.author}-${book.title}-${book.year}`;
  }
}

const book = new Book("title", "author", 2023);
const getInfoAboutBook = new Book(Book.getInfo(book));

// 8. Протипизировать функцию используя keyof и generic

function extractData<T, Key extends keyof T>(obj: T, key: Key) {
  return obj[key];
}

interface IUserInfoInObject {
  user: IUser;
}

const object: IUserInfoInObject = {
  user: {
    name: "Chris",
  },
};

extractData(object, "user").name;
