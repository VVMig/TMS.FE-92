// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования (использовать Generic)
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую


interface IUsers {
    name: string;
    phone: string;
    email: string;
    animals?: string[]
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}

const users:IUsers[] = [
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
  
// 1
const namesUsers = users.map(el=>el.name).join(', ')
console.log(namesUsers)

// Второй вариант
const namesUsers2 = users.map(({ name }) => name).join(', ')
console.log(namesUsers2)

// 2
const sumOfCars = users.map(el=>el.cars).join(',').split(',').filter(el=>el).length
console.log(sumOfCars)

// Второй вариант
const sumOfCars2 = users.reduce((acc:string[],el)=>{
  if(el.cars !== undefined){
    for(let value of el.cars){
      acc.push(value)
    }
  }
  return acc
},[]).length
console.log(sumOfCars2)

// 3
type HasEducation = Pick<IUsers, 'hasEducation'>;
function filterByEducation<T extends HasEducation>(array:T[]):T[]{
  console.log(array.filter(el=>el.hasEducation))
  return array.filter(el=>el.hasEducation)
}
filterByEducation(users)

// // 4
type HasAnimals = Pick<IUsers, 'animals'>;
function filterByAnimals<T extends HasAnimals>(array:T[]):T[]{
  console.log(array.filter(el=>el.animals));
  return array.filter(el=>el.animals);
}
filterByAnimals(users)

// // 5
type ListOfCars = Pick<IUsers, 'cars'>;
function getAllCars <T extends ListOfCars>(array:T[]){
  const listOfCars = array.reduce((acc:string[],el)=>{
    if(el.cars !== undefined){
      for(let value of el.cars){
        acc.push(value)
      }
    }
    return acc
},[]).join(', ')
console.log(listOfCars)
}
getAllCars(users)


//   // 6. Создать тип объекта, в качестве ключа которого выступает строка, а в качестве значения элемент массива users (Подсказка: Record)
type Type = 'USER1' | 'USER2' | 'USER3';
const usersInfo: Record<Type, IUsers> ={
  USER1:users[0],
  USER2:users[1],
  USER3:users[2]
}
console.log(usersInfo)


//   // 7. Создать класс Book с полями: название книги, автор, год. Класс должен быть описан интерфейсом. Должны присутствовать геттеры и сеттеры.
//   // Должен быть статический метод, который в качестве аргумента принимает экземпляр класса Book и возвращает строку формата: автор-название-год.
interface IBook{
  name:string;
  author:string;
  year:number;
  setName(name:string):void;
  setAuthor(author:string):void;
  setYear(year:number):void;
}

class Book implements IBook {
  constructor(
    public name:string,
    public author:string,
    public year:number,
  ){}
  setName(name: string): void {
    this.name = name;
  }
  setAuthor(author: string): void {
    this.author = author;
  }
  setYear(year: number): void {
    this.year = year;
  }
  getName(){
    return this.name
  }
  getAuthor(){
    return this.author;
  }
  getYear() {
    return this.year
  }
  static info(book:Book) {
    return `${book.author}-${book.name}-${book.year}`
  }
}
const book = new Book('Harry Potter', 'J.K.Rowling', 1997);
console.log(book)

const infoAboutBook = new Book('George Orwell','1984',1949)
console.log(Book.info(infoAboutBook))

  
//   // 8. Протипизировать функцию используя keyof и generic
function extractData<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
interface IUser{
    name:string;
  }
  interface IObject{
    user:IUser;
  }
  const object: IObject = {
    user: {
      name: "Chris",
    },
};
  
extractData(object, "user").name;

