//HW-33

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

// 1. Создать строку из названий предметов написаных через запятую

const keys = Object.keys(subjects);
console.log(keys.join());

// 2. Посчитать общее количество студентов и учителей на всех предметах

const students = Object.values(subjects).reduce((acc, cur) => acc + cur.students, 0);
const teachers = Object.values(subjects).reduce((acc, cur) => acc + cur.teachers, 0);
console.log(students, teachers);

// 3. Получить среднее количество студентов на всех предметах

const averageNum = students / Object.values(subjects).length;
console.log(averageNum);

// 4. Создать массив из объектов предметов

const arrayValues = Object.values(subjects);
console.log(arrayValues);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const arrayKeys = Object.entries(subjects)
	.sort((a, b) => b[1].teachers - a[1].teachers)
	.map(el => el[0]);

console.log(arrayKeys);