import { createContext } from "react";

export interface OrderedItems {
    id:          string,
    description: string,
    name:        string,
    price:       number,
    quantity?:   number
}
export interface ItemList {
    selectedItems: OrderedItems[],
    setSelectedItems: any,
}
export const ItemsOrderedCtx = createContext<ItemList | undefined>(undefined);
