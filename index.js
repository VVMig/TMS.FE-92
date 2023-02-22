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
const namesSubjects = Object.keys(subjects).join(',');
console.log(namesSubjects);
//

// task 2 
const numberStudents = Object.values(subjects).reduce((acc, curr) => acc + curr.students, 0);
const numberTeachers = Object.values(subjects).reduce((acc, curr) => acc + curr.teachers, 0);
const people = numberStudents + numberTeachers;
console.log(people); 
// 

// task 3 first decision
const avgNumStudents = numberStudents / Object.values(subjects).length;
console.log(avgNumStudents);

// task 3 second decision
const avgStudents = Object.values(subjects).reduce((acc, curr) => acc + curr.students, 0) / Object.values(subjects).length;
console.log(avgStudents);
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