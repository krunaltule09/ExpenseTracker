import React from 'react'
import TransactionForm from '../TransactionForm/TransactionForm';
import classes from './Home.module.css'
import Transactions from '../Transactions/Transactions'

function Home() {
    return (
        <div className={classes.grid}>
            <div  className={classes.item1}>
                <TransactionForm/>
            </div>
            
            <div className={classes.item2}>
                <Transactions className={classes.item2}/> 
            </div>
      </div>
    )
}

export default Home
