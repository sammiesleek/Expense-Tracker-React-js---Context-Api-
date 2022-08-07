import { useContext } from "react";
import { GlobalContext } from "./context/Context";

const IncomeExpenses = () => {
  const { transactions, setTransactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((curr, latr) => (curr += latr), 0)
    .toFixed(2);
  const expense = (
    amounts
      .filter((item) => item < 0)
      .reduce((curr, latr) => (curr += latr), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${Math.abs(expense).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
