import { Booking } from '@/dto/bookings';

import axios from "axios";

const BASE_URL = "http://localhost:3000/bookings";

export async function getBookings(email: string): Promise<Booking[]> {

    const response = await axios.get(`${BASE_URL}/${email}`);

    return response.data as Booking[];

}