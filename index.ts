import { Request, Response } from 'express';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
  res.send('John Eric Mendoza Siguenza');
});

app.get('/table', (req: Request, res: Response) => {
  res.render('index');
});

const PORT: any = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server running at port ${PORT}`));
