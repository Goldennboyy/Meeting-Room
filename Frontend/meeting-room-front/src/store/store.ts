import { create } from "zustand";


interface UserEmailState {
    userEmail: string | undefined
    setUserState: (userEmail: string) => void
}

interface BookingState {

    selectedParticipants: number | undefined
    setSelectedParticipants: (selectedParticipants: number) => void
    selectedRoom: string | undefined
    setSelectedRoom: (selectedRoom: string) => void
    selectedStartTime: string
    setSelectedStartTime: (selectedStartTime: string) => void
    selectedEndTime: string
    setSelectedEndTime: (selectedEndTime: string) => void
}

const useBookingState = create<BookingState>((set) => ({
    selectedParticipants: 0,
    setSelectedParticipants: (selectedParticipants: number) => set({ selectedParticipants: selectedParticipants }),
    selectedRoom: undefined,
    setSelectedRoom: (selectedRoom: string) => set({ selectedRoom: selectedRoom }),
    selectedStartTime: "00:00",
    setSelectedStartTime: (selectedStartTime: string) => set({ selectedStartTime: selectedStartTime }),
    selectedEndTime: "00:00",
    setSelectedEndTime: (selectedEndTime: string) => set({ selectedEndTime: selectedEndTime })
}))

const useUserEmailState = create<UserEmailState>((set) => ({
    userEmail: undefined, // by default the selected userEmail would be null
    setUserState: (userEmail: string) => set({ userEmail: userEmail }),
}))

export { useUserEmailState, useBookingState }