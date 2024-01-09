export default function getStudentIdsSum(arrOfStudents) {
  // arrOfStudents is a list of student object
  return arrOfStudents.reduce((accum, item2) => accum + item2.id, 0);
}
