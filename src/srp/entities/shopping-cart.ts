import { CartItem } from "./interface/cart-item";


export class ShoppingCart {
    private readonly _items: CartItem[] = [];

    addItem(item: CartItem): void {
        item.name = item.name.toLowerCase();
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    totalPrice(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    getOneItem(itemName: string): Readonly<CartItem> | null {
        return this._items.find(item => item.name === itemName.toLowerCase()) || null;
    }

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    clear(): void {
        console.log('Shopping Cart was cleaned');
        this._items.length = 0;
    }
}
