import { createContext } from "react";


export type ContextCartCountType = {
    contextCartCount : number;
    setContextCartCount : (contextCartCount: number) => void; // ou setContextCartCount: Function;
}

export const ContextCartCount = createContext<ContextCartCountType>({
    contextCartCount: 0,
    setContextCartCount: () => {}
})


