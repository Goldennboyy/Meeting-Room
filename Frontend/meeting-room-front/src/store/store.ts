import { create } from "zustand";


interface UserEmailState {
    userEmail: string | undefined
    setUserState: (userEmail: string) => void
}

const useUserEmailState = create<UserEmailState>((set) => ({
    userEmail: undefined, // by default the selected userEmail would be null
    setUserState: (userEmail: string) => set({ userEmail: userEmail })
}))

export { useUserEmailState }