type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: (1 | 2 | 3 | 4 | 5 | 6)[];
};

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    grades: [2, 1, 3, 1]
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    grades: [2, 2, 1, 2]
};

const student3: Student = {
    firstName: 'Alex',
    lastName: 'Johnson',
    age: 21,
    grades: [1, 1, 2, 2]
};

const student4: Student = {
    firstName: 'Emily',
    lastName: 'Davis',
    age: 19,
    grades: [2, 3, 2, 1]
};

const student5: Student = {
    firstName: 'Chris',
    lastName: 'Williams',
    age: 23,
    grades: [2, 1, 2, 1]
};

function showStudentInfos(student: Student) {
    console.log(student.firstName + " " + student.lastName + "(" + student.age
    + ")" + "\n" + "=".repeat(30))
}

showStudentInfos(student1);
showStudentInfos(student2);
showStudentInfos(student3);
showStudentInfos(student4);
showStudentInfos(student5);


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
