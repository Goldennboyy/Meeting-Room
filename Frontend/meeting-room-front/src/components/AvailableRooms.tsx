import { getRooms } from "@/api/rooms";
import { useQuery } from "react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function AvailableRooms() {
  const { data: rooms } = useQuery("rooms", getRooms);

  return (
    <div className="flex flex-col space-y-5">
      <div>
        <h1 className="text-2xl font-bold">Available Rooms</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Capacity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms?.map((room) => (
            <TableRow key={room.id}>
              <TableCell className="font-semibold">{room.name}</TableCell>
              <TableCell className="text-center font-bold">
                {room.capacity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
