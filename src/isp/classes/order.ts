import { ShoppingCart } from "./shopping-cart";
import { OrderStatus } from "./interface/order-status";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { CustumerOrder } from "./interface/customer-protocol";


export class Order {
    private _orderStatus: OrderStatus = 'open';

    // Injeção de dependências
    constructor(
        private readonly car: ShoppingCart,
        private readonly messaging: Messaging,
        private readonly persisetncy: Persistency,
        private readonly custumer: CustumerOrder
    ) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.car.isEmpty()) {
            console.log('There is no items in the cart!');
            return;
        }

        this._orderStatus = 'close';
        this.messaging.sendMessage(`Seu pedido de R$${this.car.totalPriceWithDiscount()} foi enviado`);
        this.persisetncy.saveOrder();
        this.car.clear();

        console.log(
            `O cliente é: `,
            this.custumer.getName(),
            this.custumer.getIdentifierNumber()
        )
    }
}
