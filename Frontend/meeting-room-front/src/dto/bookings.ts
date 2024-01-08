import { Room } from "./rooms";

export interface Booking {
    id: number;
    start_date: string;
    end_date: string;
    room_id: number;
    owner_id: number;
    room: Room
}