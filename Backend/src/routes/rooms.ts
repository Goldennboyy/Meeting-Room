import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const roomRouter = express.Router();

const prisma = new PrismaClient()

roomRouter.get("/getrooms", async (req: Request, res: Response) => {
    try {
        const rooms = await prisma.room.findMany()
        console.log(rooms)
        res.status(200).json(rooms)
    } catch (error) {
        console.log(
            "Error while fetching rooms: ", error
        )
        res.status(500).json({ error: "Internal Server Error" })

    }
})


export default roomRouter