export default function createReportObject(employeesList) {
  /* Use spread operator to fill the object */
  /* employeesList is an object with string/array key/value respectively */
  const employeeParams = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      /* Object,keys(the object) returns an array of keys */
      /* the length function returns the number of keys in the array */
      return Object.keys(employeesList).length;
    },
  };

  return employeeParams;
}
