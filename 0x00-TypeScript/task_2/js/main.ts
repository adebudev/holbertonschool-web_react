interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/* interface of function that return a instance of Teacher or Director */
interface ICreateEmployee {
  (salary: number | string): Teacher | Director;
}

const createEmployee: ICreateEmployee = (salary: number | string) => {
  if (salary >= 0 && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(100).workFromHome());
console.log(createEmployee(100) instanceof Teacher); // True
console.log(createEmployee('$500') instanceof Director); // True