interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Adrian',
  lastName: 'De La Asuncion',
  age: 22,
  location: 'Barranquilla',
};

const student2: Student = {
  firstName: 'Yuliana',
  lastName: 'Giraldo',
  age: 22,
  location: 'Medellin',
};

const studentsList: Student[] = [student1, student2];

/* dom body */
const body: HTMLBodyElement = document.getElementsByTagName('body')[0];

/* table */
const table: HTMLTableElement = document.createElement('table');

/* header on table */
const thead: HTMLTableSectionElement = document.createElement('thead');
const thRow: HTMLTableRowElement = thead.insertRow(0);
const thName: HTMLTableCellElement = thRow.insertCell(0);
const thLastN: HTMLTableCellElement = thRow.insertCell(1);
const thAge: HTMLTableCellElement = thRow.insertCell(2);
const thLocation: HTMLTableCellElement = thRow.insertCell(3);
thName.innerText = "First Name";
thLastN.innerText = "Last Name";
thAge.innerText = "Age";
thLocation.innerText = "Location";

table.appendChild(thead);

/* body on table */
const tbody:HTMLTableSectionElement = document.createElement('tbody');

/* table body record */
for(let student of studentsList) {
  const tdRow: HTMLTableRowElement = tbody.insertRow(0);
  const tdName: HTMLTableCellElement = tdRow.insertCell(0);
  const tdLastN: HTMLTableCellElement = tdRow.insertCell(1);
  const tdAge: HTMLTableCellElement = tdRow.insertCell(2);
  const tdLocation: HTMLTableCellElement = tdRow.insertCell(3);
  tdName.innerText = student.firstName;
  tdLastN.innerText = student.lastName;
  tdAge.innerText = student.age.toString();
  tdLocation.innerText = student.location;
}

table.appendChild(tbody);

body.appendChild(table);
table.setAttribute('border', '2');
