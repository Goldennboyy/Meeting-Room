import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const userRouter = express.Router();

const prisma = new PrismaClient()

userRouter.get("/getusers", async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        console.log(users)
        res.status(200).json(users)
    } catch (error) {
        console.log(
            "Error while fetching users: ", error
        )
        res.status(500).json({ error: "Internal Server Error" })

    }
})


export default userRouter