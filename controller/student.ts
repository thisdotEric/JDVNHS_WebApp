import { Response, Request, NextFunction } from 'express';
import db from '../api/database';
import StudentAccess from '../api/studentAccess';

const db_name: string = 'student';

const studentAccess = new StudentAccess();

class StudentController {
  async insertStudent(req: Request, res: Response, next: NextFunction) {
    const {
      student_id,
      first_name,
      middle_name,
      last_name,
      email,
      birthdate,
      address,
      academic_strand,
      contact_number,
      gender,
    } = req.body;

    // Insert new student
    await db('student').insert({
      student_id: student_id,
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      email: email,
      birthdate: birthdate,
      address: address,
      academic_strand: academic_strand,
      contact_number: contact_number,
      gender: gender,
    });

    await db('attendance').insert({
      subject_ID: 'Software Engineering',
      session_date: '1999-04-12',
      semester: '2',
    });

    return res
      .status(201)
      .json({ message: 'Successfully inserted new student' });
  }

  async getAllStudents(req: Request, res: Response, next: NextFunction) {
    // const data = await db.select().table(db_name);
    // res.status(200).json(data);
    studentAccess.insertStudent({ firstName: 'john', studentId: 'sd' });

    return res.status(200);
  }

  async updateStudents(req: Request, res: Response, next: NextFunction) {
    const studentId: string = req.params.studentId;

    const { first_name, email } = req.body;

    await db(db_name).where('student_id', '=', studentId).update({
      first_name: first_name,
      email: email,
    });

    return res
      .status(200)
      .json({ message: 'Successfully updated new student' });
  }
}

export default new StudentController();
