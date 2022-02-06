interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  yearsOfExperience?: number;
  fullTimeEmployee: boolean;
  location: string;
  [atttr: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface printTeacherFunction {
  (firstName: string, lasName: string): string;
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));

interface IStudent {
  firstName: string;
  lastName: string;
}

interface IStudentClass extends IStudent {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements IStudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: IStudent) {
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

const student1 = new StudentClass({firstName: 'John', lastName: 'Doe'});

console.log(student1.workOnHomework());
console.log(student1.displayName());