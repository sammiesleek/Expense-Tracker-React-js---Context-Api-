import {useState} from "react";
import { useContext } from "react";
import { GlobalContext } from "./context/Context";

const Addtransaction = () => {
  const { transactions, setTransactions } = useContext(GlobalContext);
     const  [text,setText] =useState('')
     const  [amount,setAmount] =useState(' ')
  

    

    //  change Text 
    const changetxt = (e)=>{
        setText(e.target.value)
    } 
    // change amount 
     const changeamt = (e)=>{
        setAmount(e.target.value)
    } 


      const AddTransaction =(e)=>{
        e.preventDefault();

        
  
        

        const newTransaction ={ text,amount:+amount};
      


         const addTrans = async(newTransaction)=>{

             const res = await fetch('http://localhost:5000/transactions',{
            method:'POST',
            headers:{
              'Content-type':'application/json',
            },
            body: JSON.stringify(newTransaction), 
          },)

          const data = await res.json()
          
          setTransactions([ ...transactions, data ])
        }
        addTrans(newTransaction)
          setText('')
        setAmount(0)
        
       

      }



  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={AddTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input onChange={ changetxt} type="text"  value={text} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' onChange={changeamt}  value={amount} placeholder="Enter amount..." />
        </div>
        <button className="btn"> Add transaction </button>
      </form>
    </>
  );
};

export default Addtransaction;
