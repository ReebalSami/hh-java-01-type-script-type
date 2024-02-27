type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | undefined;

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
};

const displayGrades = (grades: Grade[]): string => {
    return grades.map(grade => (grade !== undefined ? grade : '*')).join(', ');
};

const students: Student[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        grades: [2, 'A', 3, 'B', undefined]
    },
    {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 22,
        grades: ['C', 'B', 1, 2]
    },
    {
        firstName: 'Alex',
        lastName: 'Johnson',
        age: 21,
        grades: ['A', 1, 'B', 'C']
    },
    {
        firstName: 'Emily',
        lastName: 'Davis',
        age: 19,
        grades: [2, 'D', 'C', 1]
    },
    {
        firstName: 'Chris',
        lastName: 'Williams',
        age: 23,
        grades: ['B', 1, 2, 'A']
    }
];

function showStudentInfos(student: Student) {
    console.log(student.firstName + " " + student.lastName + "(" + student.age
    + ")" + "\n" + "=".repeat(30) + "\nGrades: " + displayGrades(student.grades))
}

function showAllStudents(students: Student[]) {
    students.forEach(showStudentInfos)
}

showStudentInfos(students[0])
showAllStudents(students)


/*
Step 1: Write a function that outputs a student with their grades, where a student should be output with first name, last name, age, and a list of grades.


    Highlight the output of the first and last names, age, and grades with a line of 30x "=".
    Example:


Anton Meier (17)
==============================
Grades: 1,4,3,1,3,2,1,2


Step 2: Allow strings and numbers as grades
Task:


    Ensure that besides grades as numbers (German system), values A to F (American system) are also supported as grades. The function should output the student's grades.


Example:


    Anton Meier (17)
==============================

Noten:
A,2,F,3,1,B,2,5


Step 3: Allow undefined as a value (displayed as *)
Task:


    Ensure that "undefined" is now supported as a value in the grades. The function should output the student's grades and represent "undefined" as "*". (For example, if the student was absent and not graded).


Example:


    Anton Meier (17)
===========================

Noten:
A,2,*,3,1,B,*,5


Step 4: Print a list of all students in the console
Task:


    Write a function that prints a list of all students in the console.


    Example:


Anton Meier (16)
===========================
Grades: 1,4,3,1,A,*,1,2

Berta Müller (17)
===========================
Grades: A,*,1

*/
