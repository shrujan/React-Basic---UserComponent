import { createContext } from "react";

interface ShowCartDetails {
    showCartDetails: boolean,
    setShowCartDetails: any
}
export const ShowCartDetailsContext = createContext<ShowCartDetails | undefined>(undefined);
