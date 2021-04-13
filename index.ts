import { Request, Response } from 'express';
import express from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('John Eric Mendoza Siguenza');
});

const PORT: number = 3000;
app.listen(3000, () => console.log(`Server running at port ${PORT}`));
