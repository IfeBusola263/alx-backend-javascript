export default function createIteratorObject(report) {
    const employeeInfo = report.allEmployees;
    let iterator = []
    for (let employee of [...Object.values(employeeInfo)]) {
	iterator = [...iterator, ...employee];
    }
    return iterator;
}
