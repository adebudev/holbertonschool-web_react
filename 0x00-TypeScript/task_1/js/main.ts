interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  yearsOfExperience?: number;
  fullTimeEmployee: boolean;
  location: string;
  [atttr: string]: any;
}

const teacher1: Teacher = {
  firstName: 'Adrian',
  lastName: 'De La Asuncion',
  yearsOfExperience: 0,
  fullTimeEmployee: false,
  location: 'Barranquilla',
  contract: true,
};

const teacher2: Teacher = {
  firstName: 'Yuliana',
  lastName: 'Giraldo',
  yearsOfExperience: 22,
  fullTimeEmployee: true,
  location: 'Medellin',
  contract: true
};
