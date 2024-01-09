import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { useBookingState } from "@/store/store";

export default function SelectTime() {
    const {
        selectedEndTime,
        selectedStartTime,
        setSelectedStartTime,
        setSelectedEndTime,
    } = useBookingState();

    console.log({
        selectedStartTime: selectedStartTime,
        selectedEndTime: selectedEndTime,
    });




    return (
        <div className="flex space-x-4 max-w-sm">
            <div className="flex flex-col space-y-2">
                <Label htmlFor="time" className="font-semibold">
                    Start Time
                </Label>
                <Input
                    type="time"
                    id="time"
                    placeholder="start date"
                    value={selectedStartTime}
                    onChange={(e) => setSelectedStartTime(e.target.value)}
                />
            </div>
            <div className="flex flex-col space-y-2">
                <Label htmlFor="time" className="font-semibold">
                    End Time
                </Label>
                <Input
                    type="time"
                    id="time"
                    placeholder="end date"
                    value={selectedEndTime}
                    onChange={(e) => setSelectedEndTime(e.target.value)}
                />
            </div>
        </div>
    );
}
