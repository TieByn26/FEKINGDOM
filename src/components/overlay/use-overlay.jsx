import { create } from "zustand";

export const useOverlay = create((set) => ({
    component: undefined,
    display: (component) => {
        set(() => ({
            component,
        }));
    },
    dismiss: () => {
        set(() => ({
            component: undefined,
        }));
    },
}));