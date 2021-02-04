import React from "react";
import { observer } from "mobx-react";
import { currencyConverter } from "../state/currencyConverter";

export const CurrencyConverterView = observer(() => {
    const handleAmountChange = (amount: number) => {
        currencyConverter.change(amount, currencyConverter.currencyId);
    }

    const handleCurrencyChange = (currencyId: string) => {
        currencyConverter.change(currencyConverter.amount, currencyId);
    }

    return (
        <>
            Amount: <input value={currencyConverter.amount} onChange={(e) => handleAmountChange(+e.target.value)} />
            {/* Currency: <input value={currencyConverter.currencyId} onChange={(e) => handleCurrencyChange(+e.target.value)} /> */}

            <select value={currencyConverter.currencyId} onChange={(e) => handleCurrencyChange(e.target.value) }>
                {/* <option value="A">Apple</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option> */}

                {
                    Object.keys(currencyConverter.currencies).map((k: string) => 
                        <option value={k} key={k}>{k}</option>
                    )
                }
            </select>

            total: { currencyConverter.total }
        </>
    )
});