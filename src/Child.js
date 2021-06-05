import React,{ useContext,useState } from 'react'
import { TransContext } from './transContext'

function Child() {
     let { transaction, addTransaction, delTransaction} = useContext(TransContext)
     const [newDesc,setDesc] = useState("")
     const [newamount, setamount] = useState(0)

     const handleAddition=(e)=>{
         e.preventDefault()
         Number(newamount) === 0 ? alert('Plz enter correct Value') :
         addTransaction({
             id: new Date().getTime(),
             amount:Number(newamount),
             desc:newDesc,
         })
         console.log(transaction)
     }

     const transactionAmounts = transaction.map(transaction => transaction.amount);

    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);

     
    //  const getIncome = () =>{
    //      var income = 0;
    //      console.log(transaction.length)
    //      for(var i=0 ; i<=transaction.length;i++){
    //          if(transaction[i].amount>0)
    //          income += transaction[i].amount
    //      }
    //      return income
    //  }
     
    //  const getExpence = () =>{
    //     var expence = 0;
    //     for(var i=0 ; i<=transaction.length;i++){
    //         if(transaction[i].amount<0)
    //         expence += transaction[i].amount
    //     }
    //     return expence
    // }
  return (
    <div className="container">
        <h1 className="text-center">Expence Tracker</h1>
        <h3>Your Balance <br/> ${income - expense}</h3>
        <div className="expence-container">
            <h3>INCOME <br />${income}</h3>
            <h3>EXPENCE <br/>-${expense}</h3>
        </div>
        <h3>History</h3>
        <hr />
        <ul className="transaction-list">
            { transaction.map((trans,ind)=>{
                return(
                <li key={ind} className={trans.amount < 0 ? 'minus' : 'plus'}>
                 <span>{trans.desc}</span>
                 <span>{trans.amount}</span>
                 <button className="delete-btn"onClick={() => delTransaction(trans.id)}>
                X
            </button>
            {transaction.id}
             </li>
                )
            })}
        </ul>
        <h3>Add new Tramsaction</h3>
        <hr />
        <form className="transaction-form" onSubmit={handleAddition}>
            <label>
                Enter Description <br />
                <input type="text" required value={newDesc}  onChange={(e)=>setDesc(e.target.value)}/>
            </label>
            <br/>
            <label>
                Enter Amount <br />
                <input type="number" required value={newamount} onChange={(e)=>setamount(e.target.value)}/>
            </label>
            <br/>
            <input type="submit" className="btn" value="Add Transaction" />
        </form>
    </div>
  )
}

export default Child
