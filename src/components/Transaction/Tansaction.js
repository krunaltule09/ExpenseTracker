import React,{useContext} from 'react'
import classes from './Transaction.module.css'
import {TransactionContext} from '../../contexts/MyContext'
function Tansaction({isHeader,date,desc,amount,type,id,category,pk}) {
    const head=<div className={classes.grid_container_header}>
    <h4>Id</h4>
    <h4>Description</h4>
    <h4>Date</h4>
    
    <h4>Amount</h4>
    <h4>Remove</h4>
</div>
const [transactions,setTransactions]=useContext(TransactionContext)
const green={backgroundColor:"rgba(16,124,46,0.6)"}
const red={backgroundColor:"rgba(175,31,31,0.55)"}

const deleteTransaction=(pk)=>{
    
    setTransactions([...transactions.slice(0,pk),...transactions.slice(pk+1)]);
}

const trans=type=="credit"?
<div className={classes.grid_container} style={green}>
            <p>{id}</p>
            <p>{desc}</p>
            <p>{date}</p>
            <p>{amount}$</p>
            <button className={classes.del_btn} onClick={()=>{
                deleteTransaction(pk);
                console.log(pk)
            }}>X</button>
        </div>
        :<div className={classes.grid_container} style={red}>
        <p>{id}</p>
        <p>{desc}</p>
        <p>{date}</p>
        <p>{amount}$</p>
        <button className={classes.del_btn} onClick={()=>{
                deleteTransaction(pk);
                console.log(pk)
            }}>X</button>
    </div>
    return (
        isHeader?head:trans
        
    )
}

export default Tansaction
