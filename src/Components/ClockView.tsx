import React from "react";
import { observer } from "mobx-react";
import { clock } from "../state/clock";

export const ClockView = observer(() => {
    return (
        <span>{clock.now.toString()}</span>
    )
});