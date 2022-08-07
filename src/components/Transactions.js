import { useContext } from "react";
import { GlobalContext } from "./context/Context";
import Transaction from "./Transaction";

const Transactions = () => {
  const { transactions, setTransactions } = useContext(GlobalContext);

  const Delete = async (id) => {
    await fetch(`http://localhost:5000/transactions/${id}`, {
      method: "DELETE",
    });

    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.length > 0
          ? transactions.map((transaction) => (
              <Transaction
                key={transaction.id}
                TextId={transaction.id}
                text={transaction.text}
                amount={transaction.amount}
                DeleteTransaction={Delete}
              />
            ))
          : "No Recent Transaction"}
      </ul>
    </>
  );
};

export default Transactions;
