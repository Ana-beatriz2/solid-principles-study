import { ShoppingCart } from "./classes/shopping-cart";
import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { FiftyPercentDiscount, NoDiscount } from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const NotDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product ('book', 70.0))
shoppingCart.addItem(new Product ('tv', 700.0))

console.log(shoppingCart);
console.log(shoppingCart.totalPrice());
console.log(shoppingCart.totalPriceWithDiscount());
order.checkout();
console.log(shoppingCart);


