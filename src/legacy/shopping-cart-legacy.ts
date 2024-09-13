type CartItem = {name: string, price: number};
type OrderStatus = 'open' | 'close'

export class ShoppingCartLegacy {
    private readonly _items: CartItem[] = [];
    private _orderStatus: OrderStatus = 'open';

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

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log('There is no itens in the cart!');
            return;
        }

        this._orderStatus = 'close';
        this.sendMessage(`Seu pedido de R$${this.totalPrice()} foi enviado`);
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    sendMessage(message: string): void {
        console.log(`Message sent: `, message);
    }

    saveOrder(): void {
        console.log('Pedido salvo com sucesso')
    }

    clear(): void {
        console.log('Shopping Cart was cleaned');
        this._items.length = 0;
    }
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({name: 'book', price: 70.0})
shoppingCart.addItem({name: 'tv', price: 700.0})
shoppingCart.addItem({name: 'short', price: 30.0})
console.log(shoppingCart);
shoppingCart.checkout();
console.log(shoppingCart);


