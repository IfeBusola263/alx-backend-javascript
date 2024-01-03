export default function createIteratorObject(report) {
  /* report is an object with an object property of department names(strings) */
  /* and an array of employees in the department called allEmployees */
  /* and a propety method to get all the departments called getNumberOfDepartments */
  const employeeInfo = report.allEmployees;
  let iterator = [];
  for (const employee of [...Object.values(employeeInfo)]) {
    iterator = [...iterator, ...employee];
  }
  return iterator;
}
