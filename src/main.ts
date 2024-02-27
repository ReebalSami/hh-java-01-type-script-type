type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | undefined;
type Subject = "Sport" | "Kunst" | "Mathe" | "Glück" | "Deutsch" | "Englisch" | "Musik";
type SubjectGrade = {
    subject : Subject;
    grades : Grade[]
}

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    subjects: SubjectGrade[]
};

const students: Student[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        subjects: [
            { subject: "Sport", grades: ["B", undefined, 2, 3, 4] },
            { subject: "Kunst", grades: [1, "A", "B", undefined, 3] },
            { subject: "Mathe", grades: [5, "C", 2, 3, "D"] }
        ]
    },
    {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 22,
        subjects: [
            { subject: "Deutsch", grades: [2, 3, "B", "A", "C"] },
            { subject: "Englisch", grades: ["F", 1, 2, "D", "E"] },
            { subject: "Musik", grades: ["A", "B", 3, 4, undefined] }
        ]
    },
    {
        firstName: 'Alex',
        lastName: 'Johnson',
        age: 21,
        subjects: [
            { subject: "Sport", grades: ["B", undefined, 2, 3, 4] },
            { subject: "Mathe", grades: ["C", "A", 2, undefined, 4] },
            { subject: "Englisch", grades: [3, 4, "A", "B", "C"] }
        ]
    },
    {
        firstName: 'Emily',
        lastName: 'Davis',
        age: 19,
        subjects: [
            { subject: "Mathe", grades: ["B", "C", 2, 3, 4] },
            { subject: "Deutsch", grades: ["A", "B", 3, undefined, "C"] },
            { subject: "Musik", grades: ["D", "E", 1, 2, "F"] }
        ]
    },
    {
        firstName: 'Chris',
        lastName: 'Williams',
        age: 23,
        subjects: [
            { subject: "Englisch", grades: [1, 2, "A", "B", "C"] },
            { subject: "Kunst", grades: ["B", "C", 3, "A", undefined] },
            { subject: "Sport", grades: ["F", "E", 2, 3, 4] }
        ]
    }
];

const displayGrades = (grades: Grade[]): string => {
    return grades.map(grade => (grade !== undefined ? grade : "*")).join(", ");
};
const displaySubjectGrades = (subjectGrades: SubjectGrade[]): string => {
    return subjectGrades
        .map(({ subject, grades }) => `${subject}: ${displayGrades(grades)}`)
        .join("\n");
};
function nameAndAge(student: Student): string{
    return student.firstName + " " + student.lastName + "(" + student.age
    + ")"
}
function showStudentInfos(student: Student) {
    console.log(nameAndAge(student) + "\n"
        + "=".repeat(nameAndAge(student).length)
        + "\nNoten: \n"
        + displaySubjectGrades(student.subjects))
}

function showAllStudents(students: Student[]) {
    students.forEach(showStudentInfos)
}

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
