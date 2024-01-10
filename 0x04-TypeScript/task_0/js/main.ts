interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

let student1: Student = { firstName: "James", lastName: "Zebedee", age: 19, location: "Abuja" };
let student2: Student = { firstName: "Tola", lastName: "Falanzo", age: 29, location: "Yola" };
let studentsList: Student[] = [student1, student2];