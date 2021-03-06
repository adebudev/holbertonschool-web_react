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
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

console.log(createEmployee(100).workFromHome());
console.log(createEmployee(100) instanceof Teacher); // True
console.log(createEmployee('$500') instanceof Director); // True

interface IisDirector {
  (employee: Director | Teacher): void;
}

const isDirector: IisDirector = (employee: Director | Teacher) => {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  }
  if (employee instanceof Teacher) {
    console.log(employee.workTeacherTasks());
  }
};

interface IexecuteWork {
  (employee: Director | Teacher): void;
}

const executeWork: IexecuteWork = (employee: Director | Teacher) => {
  isDirector(employee);
};

executeWork(createEmployee(300)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks

type Subjects = 'Math' | 'History';

interface IteachClass {
  (todayClass: Subjects): string;
}

const teachClass: IteachClass = (todayClass: Subjects) => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
};

console.log(teachClass('Math'));
console.log(teachClass('History'));
