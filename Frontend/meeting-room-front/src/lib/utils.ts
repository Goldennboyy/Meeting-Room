import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// date manipulation 
export function convertDateToReadable(date: string) {


  const parsedDate = new Date(date)

  return parsedDate.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  })
}

export function updateDateWithTime(originalDate: Date, additionalTimeStr: string): string {

  // Extract hours and minutes from the additional time string
  const [additionalHours, additionalMinutes] = additionalTimeStr.split(':').map(Number);

  // Update the date with the additional time
  originalDate.setHours(originalDate.getHours() + additionalHours);
  originalDate.setMinutes(originalDate.getMinutes() + additionalMinutes);

  // Format the updated date
  const updatedDateStr = originalDate.toISOString(); // This will give you the updated date in ISO format

  return updatedDateStr;
}