import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useBookingState } from "@/store/store";

function InputParticipants() {
  const { selectedParticipants, setSelectedParticipants } = useBookingState();

  console.log(selectedParticipants);

  return (
    <div className="max-w-sm">
      <Label htmlFor="participants">Participants</Label>
      <Input
        type="number"
        id="number"
        placeholder="Number of participants"
        value={selectedParticipants}
        onChange={(e) => setSelectedParticipants(Number(e.target.value))}
      />
    </div>
  );
}

export default InputParticipants;
