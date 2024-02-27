const express = require('express');
const fs = require('fs');

const host = 'localhost';
const port = 1245;
const app = express();
const file = process.argv[2];
module.exports = app;

app.get('/', (req, res) => {
    res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    await fs.readFile(file, 'utf8', (err, data) => {
	if (err) {
	    res.status(500).send('Cannot load the database');
	    return;
	}
	const studentsInfo = data.split('\n').filter((line) => line.trim() != '');
	studentsInfo.shift();
	const numOfStudents = studentsInfo.length;
	let resInfo = `This is the list of our students
Number of students: ${numOfStudents}\n`;
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
	res.status(200).send(resInfo.slice(0, -1));
    });
});

app.listen(port, host);
