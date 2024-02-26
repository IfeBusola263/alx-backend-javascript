const fs = require('fs');
const { parse } = require('csv-parse');

module.exports = function countStudents(dbName) {
  const csvData = [];
  const fieldClass = {};

  // Open the CSV File
  fs.createReadStream(dbName)

    // Check if any error arose
    .on('error', () => {
      throw new Error('Cannot load the database');
    }).pipe(parse()) // parse the csv file as json

    // save the rows in an array
    .on('data', (csvRow) => {
      if (csvRow.length !== 0 && !csvRow.includes('field')) csvData.push(csvRow);
    })
    .on('end', () => {
      // Log the number of students
      console.log(`Number of students: ${csvData.length}`);

      // Create an object of field to students
      csvData.forEach((row) => {
        // get the field name
        const fieldName = row.pop();

        // set an array of names in the same field
        if (!fieldClass[fieldName]) fieldClass[fieldName] = [];
        fieldClass[fieldName].push(row[0]);
      });

      // log the information for each field
      for (const [field, names] of Object.entries(fieldClass)) {
        const numOfStudents = names.length;
        const nameAsString = names.join(', ');
        console.log(
          `Number of students in ${field}: ${numOfStudents}. List: ${nameAsString}`,
        );
      }
    });
};
