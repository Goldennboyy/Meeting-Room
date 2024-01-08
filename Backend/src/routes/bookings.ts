import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const bookingRouter = express.Router();

const prisma = new PrismaClient()

bookingRouter.get("/:email", async (req: Request, res: Response) => {
    try {
        const email = req.params.email // get the email from the params
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) {
            res.status(404).json({ error: "User not found" })
        } else {
            const bookings = await prisma.booking.findMany({
                where: {
                    user: {
                        email: email
                    }
                },
                include: {
                    room: true
                }
            })
            res.status(200).json(bookings)
        }
    } catch (error) {
        console.log(
            "Error while fetching the bookings: ", error
        )
        res.status(500).json({ error: "Internal Server Error" })

    }
})


export default bookingRouter