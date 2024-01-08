import { Label } from "./ui/label";
import { Input } from "./ui/input";

function InputParticipants() {
  return (
    <div className="max-w-sm">
      <Label htmlFor="participants">Participants</Label>
      <Input type="number" id="number" placeholder="Number of participants" />
    </div>
  );
}

export default InputParticipants;
