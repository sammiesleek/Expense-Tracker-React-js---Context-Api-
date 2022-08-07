import { useState, useEffect, createContext } from "react";

export const GlobalContext=createContext()


export const ContextExtend = (props) => {
  useEffect(()=>{
    const getTransaction = async()=>{
      const Transacts = await  fetchTransaction()
        setTransactions(Transacts)
    }
    getTransaction()
  },[])


    const [transactions, setTransactions] = useState([]);
    const fetchTransaction = async()=>{
      const res = await fetch('http://localhost:5000/transactions')
      const data = await res.json();
      return data
    }

  return (
      <GlobalContext.Provider value={{transactions,setTransactions}}>
          {props.children}
      </GlobalContext.Provider>
  )
};

