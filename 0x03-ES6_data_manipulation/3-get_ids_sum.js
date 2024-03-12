function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.reduce((total, student) => total + student.id, 0);
}

export default getStudentIdsSum;
