import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase(req.query.db);
      let response = 'This is the list of our students\n';

      for (const [field, students] of Object.entries(database).sort(([a], [b]) => a.localeCompare(b))) {
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const database = await readDatabase(req.query.db);
      const students = database[major];

      if (students) {
        res.status(200).send(`List: ${students.join(', ')}`);
      } else {
        res.status(200).send('List: ');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
