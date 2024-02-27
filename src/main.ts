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

const convertGrades = (grade: Grade): number | undefined => {
        if (typeof grade === "string") {
        switch (grade) {
            case "A":
                return 1;
            case "B":
                return 2;
            case "C":
                return 3;
            case "D":
                return 4;
            case "E":
                return 5;
            case "F":
                return 6;
            default: return undefined
        }
    }
    return grade;
}

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

function countTotalGrades(subjectGrades: SubjectGrade[]): number {
    return subjectGrades.reduce((total:number, { grades }) => total + grades.length, 0);
} // student.subjects.grades[!undefined].count)

function showStudentInfos(student: Student) {

    console.log(nameAndAge(student) + "\n"
        + "=".repeat(nameAndAge(student).length)
        + "\nNoten: \n"
        + displaySubjectGrades(student.subjects)
        + "\nAnzahl der Noten: " + countTotalGrades(student.subjects)
            )
}

function showAllStudents(students: Student[]) {
    students.forEach(showStudentInfos)
}

showAllStudents(students)