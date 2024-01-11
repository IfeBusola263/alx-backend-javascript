export default function updateStudentGradeByCity(array, city, newGrades) {
  /* eslint-disable no-param-reassign */
  return array.filter((obj) => obj.location === city).map((obj2) => {
    for (const newObj of newGrades) {
      if (newObj.studentId === obj2.id && 'grade' in newObj) {
        obj2.grade = newObj.grade;
      }
    }
    if ('grade' in obj2) return obj2;
    obj2.grade = 'N/A';
    return obj2;
  });
}
