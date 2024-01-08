import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import userRouter from './routes/users';
import cors from 'cors'
import roomRouter from './routes/rooms';
import bookingRouter from './routes/bookings';

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.use("/users", userRouter)
app.use("/rooms", roomRouter)
app.use("/bookings", bookingRouter)



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
