const fs = require('fs');

module.exports = function countStudents(dbName) {
  try {
    const data = fs.readFileSync(dbName, { encoding: 'utf8', flag: 'r' });
    const dataList = data.split('\n').filter((line) => line !== '');
    dataList.shift();
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
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
};
