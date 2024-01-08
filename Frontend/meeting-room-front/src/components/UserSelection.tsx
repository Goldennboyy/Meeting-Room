import { getUsers } from "@/api/users";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserEmailState } from "@/store/store";
import { useQuery } from "react-query";

export function UserSelection() {
  const { data: users, isLoading } = useQuery("users", getUsers);

  const { setUserState, userEmail: selectedUserEmail } = useUserEmailState();

  console.log(selectedUserEmail);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col mt-5">
      <Select onValueChange={(value) => setUserState(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a user" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Users</SelectLabel>
            {users?.map((user) => (
              <SelectItem key={user.id} value={user.email}>
                {user.email}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="border border-dotted border-gray-400 p-4 mt-4 w-fit">
        <p>
          Selected user:{" "}
          <span className="text-gray-600 text-lg font-semibold">
            {" "}
            {selectedUserEmail}{" "}
          </span>
        </p>
      </div>
    </div>
  );
}
