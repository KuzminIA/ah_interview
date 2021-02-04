import { makeObservable, observable, computed, action } from "mobx"

type Currencies = { [id: string]: number };

class CurrencyConverter {
    amount = 1;
    currencyId: string = "USD";

    currencies: Currencies = {
        "USD": 80,
        "EUR": 90,
    }

    constructor() {
        makeObservable(this, {
            amount: observable,
            currencyId: observable,
            total: computed,
            change: action,
        });
    }

    change(amount: number, currency: string): void {
        this.amount = amount;
        this.currencyId = currency;
    }

    get total() {
        return this.amount * this.currencies[this.currencyId];
    }
}

const currencyConverter = new CurrencyConverter()

export {
    CurrencyConverter,
    currencyConverter,
}