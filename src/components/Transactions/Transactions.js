import React , { useState , useContext } from 'react'
import {TransactionContext } from '../../contexts/MyContext'
import Transaction from '../Transaction/Tansaction'
import classes from './Transactions.module.css'
function Transactions() {
    const [transactions,setTransactions]=useContext(TransactionContext)
    const [searchByDesc,setSearchByDesc]=useState(null);
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setendDate]=useState(new Date());
    



    
    

    return (
        <div className={classes.transactions_container}>
            <Transaction isHeader={true}/>
           {transactions.map((tran,id)=>{
               
               return <Transaction key={id} pk={id} id={tran.id}  amount={tran.amount} date={tran.date} desc={tran.desc} category={tran.category} type={tran.type}/>
           })}
        </div>
    )
}

export default Transactions
