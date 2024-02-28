// const path = require('path');
const readDatabase = require('../utils');

// const db = path.resolve(__dirname, '../../database.csv');

export default class StudentsController {
  static getAllStudents(request, response) {
    // readDatabase returns a promise, so it must be resolved
    // readDatabase(db)
    readDatabase('./database.csv')

    // expecting an object of field mapped to a list of names
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
        response.status(500).send('This is the list of our students\nCannot load the database');
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
    // readDatabase(db)
    readDatabase('database.csv')

    // expecting an object of field mapped to a list of names
      .then((fieldToStudents) => {
        // let resInfo = 'This is the list of our students\n';

        const names = fieldToStudents[major];
        const name = names.join(', ');
        const resInfo = `List: ${name}`;
        response.status(200).send(resInfo);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
