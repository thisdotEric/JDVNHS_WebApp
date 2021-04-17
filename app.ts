import { Request, Response } from 'express';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';

//Routes
import studentRoutes from './routes/student';

const app = express();

// Body Parser
app.use(express.json());

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Accessible routes
app.use('/student', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('John Eric Mendoza Siguenza');
});

app.get('/table', (req: Request, res: Response) => {
  res.render('index');
});

const PORT: any = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server running at port ${PORT}`));
