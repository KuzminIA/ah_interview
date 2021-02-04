import { makeAutoObservable, runInAction } from "mobx"

class Clock {
    now: Date = new Date();

    constructor() {
        makeAutoObservable(this);
        setInterval(() => {
            runInAction(() => {
                this.now = new Date();
            });
        }, 1000)
    }
}

const clock = new Clock()

export {
    clock,
    Clock,
}