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

// task 1
const namesSubjects = Object.keys(subjects).join();
console.log(namesSubjects);

// task 2

const numStudents = Object.values(subjects).reduce((acc, el) => acc + el.students, 0);
console.log(numStudents);
const numTeachers = Object.values(subjects).reduce((acc, el) => acc + el.teachers, 0);
console.log(numTeachers);

// task 3
const averageStudents = Object.values(subjects).reduce((acc, el) => acc + el.students, 0) / Object.keys(subjects).length;
console.log(averageStudents);

// task 4
const arrSubjects = Object.values(subjects);
console.log(arrSubjects);

// task 5
const sortArrSubjects = Object.values(subjects).sort((a,b) => b.teachers - a.teachers);
console.log(sortArrSubjects);