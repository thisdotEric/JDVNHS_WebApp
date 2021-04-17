import db from '../api/database';

interface IStudent {
  studentId: string;
  firstName: string;
}

export default class StudentAccess {
  async insertStudent(student: IStudent) {
    const data = await db.select().table('student');
    console.log(data);
  }
}
