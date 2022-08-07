import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transactions from "./components/Transactions";
import Addtransaction from "./components/Addtransaction";
import { useState, useEffect, createContext } from "react";
import { ContextExtend } from "./components/context/Context";

function App() {
  return (
    <ContextExtend>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <Transactions />
          <Addtransaction />
        </div>
      </div>
    </ContextExtend>
  );
}

export default App;
