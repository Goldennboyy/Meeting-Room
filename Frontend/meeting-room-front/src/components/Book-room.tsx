import { CalendarDaysIcon } from "lucide-react";
import InputParticipants from "./InputParticipants";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import SelectRoom from "./SelectRoom";
import SelectTime from "./SelectTime";
import { useState } from "react";
import { updateDateWithTime } from "@/lib/utils";
import { useBookingState } from "@/store/store";

export default function Bookroom() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  console.log(selectedDate);
  const defaultMonth = new Date(2025, 1);

  const { selectedEndTime } = useBookingState()

  if (selectedDate) {
    const test = updateDateWithTime(selectedDate, selectedEndTime);

    console.log({ "updated date": test });
  }



  return (
    <div className="flex flex-col max-w-7xl ">
      <h1 className="text-2xl font-bold">Book a Meeting Room</h1>
      <div className="mt-6">
        <p className="text-lg text-gray-400 break-all">
          Select your preferred date, time and room to proceed with the booking.
        </p>
        <div className="py-4 flex flex-col space-y-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="max-w-sm" variant="outline">
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                Select a date
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar
                defaultMonth={defaultMonth}
                fromMonth={defaultMonth}
                toDate={new Date(2025, 1, 8)}
                initialFocus
                mode="single"
                numberOfMonths={1}
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
            </PopoverContent>
          </Popover>
          <InputParticipants />
          <SelectRoom />
          <SelectTime />
          <Button variant={"outline"}>Book your room</Button>
        </div>
      </div>
    </div>
  );
}
