const fs = require('fs');

module.exports = function countStudents(dbFile) {
  // Create a new Promise
  return new Promise((resolve, reject) => {
    // use readfile to open the csv file
    fs.readFile(dbFile, { encoding: 'utf8', flag: 'r' }, (err, data) => {
      // At the point of issues, reject the promise and throw error
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Remove empty lines from the csv file
      const dataList = data.split('\n').filter((line) => line !== '');

      // Remove the first row, which is the header
      dataList.shift();

      // Create an object to collect fields mapped to names
      const fieldClass = {};

      console.log(`Number of students: ${dataList.length}`);
      dataList.forEach((row) => {
        const rowData = row.split(',');
        const fieldName = rowData.pop();

        if (!fieldClass[fieldName]) fieldClass[fieldName] = [];
        fieldClass[fieldName].push(rowData[0]);
      });

      for (const [field, names] of Object.entries(fieldClass)) {
        const numOfStudents = names.length;
        const nameAsString = names.join(', ');
        console.log(
          `Number of students in ${field}: ${numOfStudents}. List: ${nameAsString}`,
        );
      }

      // Once the entire process is done, resolve the promise.
      resolve();
    });
  });
};
