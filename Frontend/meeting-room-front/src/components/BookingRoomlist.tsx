import { getBookings } from "@/api/bookings";
import { useUserEmailState } from "@/store/store";
import { useQuery } from "react-query";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";
import { convertDateToReadable } from "@/lib/utils";

export default function Bookingroomlist() {


    const { userEmail } = useUserEmailState();

    const { data: bookings, refetch } = useQuery("bookings", () => {
        if (!userEmail) throw new Error("User email is not defined");
        return getBookings(userEmail)
    },
        {
            enabled: !!userEmail // new : basically only to refetch when the userEmail is being selected on the select
        });



    // trigger the re-render once the Email is being selected
    useEffect(() => {
        if (userEmail) {
            refetch()
        }
    }, [userEmail, refetch])


    return (
        <div className="flex flex-col space-y-5">
            <h1 className="text-2xl font-bold">Your Booked Rooms</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Room Name</TableHead>
                        <TableHead>Start date</TableHead>
                        <TableHead>End date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bookings?.map((booking) => (
                        <TableRow key={booking.id}>
                            <TableCell className="font-semibold">
                                {booking.room.name}
                            </TableCell>
                            <TableCell className="text-center font-bold">
                                {convertDateToReadable(booking.start_date)}
                            </TableCell>
                            <TableCell className="text-center font-bold">
                                {convertDateToReadable(booking.end_date)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
