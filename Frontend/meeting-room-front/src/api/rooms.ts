import { Room } from './../dto/rooms';

import axios from "axios";

const BASE_URL = "http://localhost:3000/rooms";

export async function getRooms(): Promise<Room[]> {

    const response = await axios.get(`${BASE_URL}/getrooms`);

    return response.data as Room[];

}