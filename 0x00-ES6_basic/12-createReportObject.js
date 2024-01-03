export default function createReportObject(employeesList) {
    const employeeParams = {
	"allEmployees": {...employeesList},
	getNumberOfDepartments() {
	    return Object.keys(employeesList).length;
	},
    }

    return employeeParams;
}
