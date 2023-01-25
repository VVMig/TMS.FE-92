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
const namesSubjects = console.log(Object.keys(subjects).join(','));
//

// task 2 first decision
const numberStudents = Object.values(subjects).reduce((acc, curr) => acc + curr.students, 0);
const numberTeachers = Object.values(subjects).reduce((acc, curr) => acc + curr.teachers, 0);
const people = numberStudents + numberTeachers;
console.log(people); 
// 

// task 2 second decision
const allStudents = subjects.mathematics.students + subjects.biology.students + subjects.geography.students + subjects.chemistry.students;
const allTeachers = subjects.mathematics.teachers + subjects.biology.teachers + subjects.geography.teachers + subjects.chemistry.teachers;
const allPeople = allStudents + allTeachers;
console.log(allPeople);
// 

// task 3 first decision
const avrNumStudents = allStudents / Object.values(subjects).length;
console.log(avrNumStudents);

// task 3 second decision
const avrStudents = Object.values(subjects).reduce((acc, curr) => acc + curr.students, 0) / Object.values(subjects).length;
console.log(avrStudents);
// 

// task 4 first decision
const subjectsArr = Object.entries(subjects);
console.log(subjectsArr);
// 

// second decision
const arrSubjects = Object.values(subjects);
console.log(arrSubjects);
// 

//  task 5 
const sortTeachers = Object.values(subjects).sort((a,b) => b.teachers - a.teachers);
console.log(sortTeachers);
// 