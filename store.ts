import { create } from "zustand";

export type State = {
    firstName: string,
    lastName: string
}

export type Action = {
    updateFirstName: (firstName: State['firstName']) => void;
    updateLastName: (latsName: State['lastName']) => void;
}

export const usePersonStore = create<State & Action>((set) => ({
    firstName: '',
    lastName: '',
    updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
    updateLastName: (lastName) => set(() => ({ lastName: lastName }))
}));