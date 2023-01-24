const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

// 1
let stringSubjects = Object.keys(subjects).join(', ')
console.log(stringSubjects)

// 2 
// Все вместе
let sum = (Object.values(subjects)).map(el=>el.students+el.teachers).reduce((el,calc)=>el+calc,0)
console.log(sum)

// Количество студентов
let sumStudents = (Object.values(subjects)).map(el=>el.students).reduce((el,calc)=>el+calc,0)
console.log(sumStudents)

// Количество учителей
let sumTeachers = (Object.values(subjects)).map(el=>el.teachers).reduce((el,calc)=>el+calc,0)
console.log(sumTeachers)

// 3
let everage = (Object.values(subjects)).map(el=>el.students).reduce((el,calc)=>el+calc,0)/Object.values(subjects).length
console.log(everage)

// 4
let arr = Object.values(subjects)
console.log(arr)

let arr2 = Object.keys(subjects).map(el=>subjects[el])
console.log(arr2)

// 5
let c = arr.slice().sort((a,b)=>(b.teachers-a.teachers))
console.log(c)

