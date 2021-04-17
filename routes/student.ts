import express, { Router } from 'express';
import studentController from '../controller/student';

const router: Router = express.Router();

// Routes
router.post('/', studentController.insertStudent);
router.get('/get', studentController.getAllStudents);
router.put('/update/:studentId', studentController.updateStudents);

export default router;
