const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 1245;
const file = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    await fs.readFile(file, 'utf8', (err, data) => {
      res.setHeader('Content-Type', 'text/plain');

      if (err) {
        res.statusCode = 500;
        res.end('Cannot load the database');
        return;
      }

      const studentsInfo = data.split('\n').filter((line) => line !== '');
      studentsInfo.shift();
      const numberOfStudents = studentsInfo.length;
      let resInfo = `This is the list of our students
Number of students: ${numberOfStudents}\n`;
      const studentsInField = {};

      studentsInfo.forEach((row) => {
        const studentInfo = row.split(',');
        const field = studentInfo.pop();
        const name = studentInfo.shift();

        if (!studentsInField[field]) studentsInField[field] = [];
        studentsInField[field].push(name);
      });

      for (const [field, listOfNames] of Object.entries(studentsInField)) {
        const numStudents = listOfNames.length;
        const names = listOfNames.join(', ');
        const fieldInfo = `Number of students in ${field}: ${numStudents}. List: ${names}\n`;
        resInfo += fieldInfo;
      }
      res.statusCode = 200;
      res.end(resInfo.slice(0, -1));
    });
  }
});

module.exports = app;
app.listen(port, host);
