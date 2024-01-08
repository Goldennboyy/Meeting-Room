
import { User } from "@/dto/users";
import axios from "axios";

const BASE_URL = "http://localhost:3000/users";

export async function getUsers(): Promise<User[]> {

    const response = await axios.get(`${BASE_URL}/getusers`);

    return response.data as User[];

}