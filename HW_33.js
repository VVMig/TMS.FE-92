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
};

// 1. Создать строку из названий предметов написаных через запятую

const subjectsName = Object.keys(subjects).join(', ');

console.log(subjectsName);

// 2. Посчитать общее количнство студентов и учителей на всех предметах

const students = Object.values(subjects).reduce((acc, cur) => acc + cur.students, 0);
const teachers = Object.values(subjects).reduce((acc, cur) => acc + cur.teachers, 0);

console.log(students, teachers);

// 3. Получить среднее количество студентов на всех пердметах

const average = students / Object.values(subjects).length;

console.log(average);

// 4. Создать массив из объектов предметов

const subjectsArrayValues = Object.values(subjects);

console.log(subjectsArrayValues);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjectsArrayKeys = Object.entries(subjects)
	.sort((a, b) => b[1].teachers - a[1].teachers)
	.map(el => el[0]);

console.log(subjectsArrayKeys);