interface Teacher {
    readonly firstName: string;
    readonly lastname: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; 
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;   
}

function printTeacher(firstName: string, lastName: string): string {
    const firstNameLetter: string = firstName.slice(0);
    const name: string = firstNameLetter + '.' + ' ' + lastName;
    return name;
}

interface studentClassConstructor {
    firstName: string;
    lastName: string;
}

interface StudentInter {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInter {
    firstName: string;
    lastName: string;

    constructor({firstName, lastName}: studentClassConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}