import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
