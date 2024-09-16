import { CartItem } from "./cart-item";

export interface ShoppingCartProtocol {
    items: Readonly<CartItem[]>;
    addItem(item: CartItem): void;
    removeItem(index: number): void;
    totalPrice(): number;
    totalPriceWithDiscount(): number;
    getOneItem(itemName: string): Readonly<CartItem> | null;
    isEmpty(): boolean;
    clear(): void;
}
