export abstract class Discount {
    protected discount = 0;

    calculatePriceWithDiscount(pricce: number): number {
        return pricce - (pricce * this.discount);
    };
}

export class FiftyPercentDiscount extends Discount {
    protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
    protected readonly discount = 0.1;
}

// Esta subclasse QUEBRA o LSP
export class NegativeDiscount extends Discount {
    calculatePriceWithDiscount(price: number): number {
        // Ao invés de aplicar o desconto, o preço está sendo aumentado
        return price + (price * 0.1);
    }
}

export class NoDiscount extends Discount {}
