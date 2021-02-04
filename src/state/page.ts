import { makeAutoObservable } from "mobx"

type Tab = "time" | "currencyconverter";
type Theme = "dark" | "light";

class Page {
    tab: Tab = "currencyconverter";
    theme: Theme = "light"

    constructor() {
        makeAutoObservable(this);
    }

    changeTab(tab: Tab): void {
        this.tab = tab;
    }

    toggleTheme(): void {
        if (this.theme === "dark") {
            this.theme = "light";
        } else {
            this.theme = "dark";
        }
    }
}

const page = new Page()

export {
    page,
    Page,
}