import { ShoppingCart } from "./entities/shopping-cart";
import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product ('book', 70.0))
shoppingCart.addItem(new Product ('tv', 700.0))

console.log(shoppingCart);
order.checkout();
console.log(shoppingCart);


