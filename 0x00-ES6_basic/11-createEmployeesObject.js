export default function createEmployeesObject(departmentName, employees) {
  const departmentEmployee = {
    [`${departmentName}`]: employees,
  };

  return departmentEmployee;
}
