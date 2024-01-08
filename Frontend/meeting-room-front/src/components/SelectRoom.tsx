import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getRooms } from "@/api/rooms";
import { useQuery } from "react-query";

export default function SelectRoom() {
    const { data: rooms } = useQuery("rooms", getRooms);
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a room" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Rooms</SelectLabel>
                    {rooms?.map((room) => (
                        <SelectItem key={room.id} value={room.name}>
                            {room.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
