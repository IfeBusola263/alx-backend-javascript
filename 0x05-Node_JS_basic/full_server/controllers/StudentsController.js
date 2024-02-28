const readDatabase = require('../utils');

const db = process.argv[2];
// const db = 'database.csv';
// console.log(db.slice(2));

export default class StudentsController {
  static getAllStudents(request, response) {
    // readDatabase returns a promise, so it must be resolved
    // expecting an object of field mapped to a list of names
    readDatabase('database.csv')
      .then((fieldToStudents) => {
        let resInfo = 'This is the list of our students\n';

        for (const [field, names] of Object.entries(fieldToStudents)) {
          const numOfStudents = names.length;
          const name = names.join(', ');

          // concatenating the return string
          resInfo += `Number of students in ${field}: ${numOfStudents}. List: ${name}\n`;
        }
        response.status(200).send(resInfo.slice(0, -1));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const majorList = ['CS', 'SWE'];

    if (!majorList.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    // readDatabase returns a promise, so it must be resolved
    // expecting an object of field mapped to a list of names
    readDatabase(db)
      .then((fieldToStudents) => {
        // let resInfo = 'This is the list of our students\n';

        const names = fieldToStudents[major];
        const name = names.join(', ');
        const resInfo = `List: ${name.trim()}`;
        response.status(200).send(resInfo);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
