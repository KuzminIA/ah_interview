import React from 'react';
import { observer } from "mobx-react";
import './Style.scss';
import { CurrencyConverterView } from "./Components/CurrencyConverterView";
import { ClockView } from "./Components/ClockView";
import { page } from "./state/page";

const App = observer(() => {
  return (
    <div className={"App"} data-theme={page.theme}>
      <div className="App-header">
        <div className={"Nav"}>
          <button onClick={() => page.changeTab("currencyconverter")}>курсы валют</button>
          <button onClick={() => page.changeTab("time")}>Текущее время</button>
        </div>
        <button onClick={() => page.toggleTheme()}>{page.theme} theme</button>
      </div>
      <div className={"App-body"}>
        <div style={{display: page.tab !== "time" ? "none" : "block"}}>
            <ClockView />
          </div>
          <div style={{display: page.tab !== "currencyconverter" ? "none" : "block"}}>
            <CurrencyConverterView />
        </div>
      </div>
    </div>
  );
});

export default App;
